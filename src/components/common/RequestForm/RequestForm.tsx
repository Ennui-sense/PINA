import "./RequestForm.scss";

import Button from "~/components/ui/Button/Button";

import type { SubmitEvent } from "react";
import { useRef, useState } from "react";
import { flushSync } from "react-dom";

import { FORM_FIELDS } from "~/data";

import { URL_API } from "~/constants";
import RequestFormField from "../RequestFormField/RequestFormField";

import type { RequestFormValues } from "~/schemas/requestSchema";
import { formatMessage } from "~/lib/formatResult";

type FieldErorrs = Partial<Record<keyof RequestFormValues, string>>;

interface RequestFormProps {
  onOpenModal: (returnFocusTo: HTMLElement | null, fromPointer: boolean) => void;
	setSuccess: (value: boolean) => void;
}

const RequestForm = ({ onOpenModal, setSuccess }: RequestFormProps) => {
  const [errors, setErrors] = useState<FieldErorrs>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const submittingRef = useRef(false);

  function clearFieldError(field: keyof RequestFormValues) {
    setErrors((prev) => ({
      ...prev,
      [field]: undefined,
    }));
  }

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submittingRef.current) return;

    const form = event.currentTarget;
    const submitter = event.nativeEvent.submitter;
    const fromPointer = submitter !== null && !submitter.matches(":focus-visible");
    const formData = new FormData(form);

    const values = Object.fromEntries(formData.entries());

    submittingRef.current = true;
    setIsSubmitting(true);
    let shouldOpenModal = false;
    let isSuccess = false;

    try {
      const { validateRequest } = await import("~/schemas/requestSchema");
      const result = validateRequest(values);

      if (!result.success) {
        const newErrors: FieldErorrs = {};
        for (const field of FORM_FIELDS) {
          newErrors[field.id] = result.errors[field.id]?.[0];
        }
        setErrors(newErrors);
        return;
      }

      setErrors({});
      shouldOpenModal = true;
      const response = await fetch(URL_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: import.meta.env.VITE_CHAT_ID,
          parse_mode: "HTML",
          text: formatMessage(result.data),
        }),
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }

      form.reset();
      isSuccess = true;
    } catch (err) {
      console.error(err);
      shouldOpenModal = true;
    } finally {
      submittingRef.current = false;
      // Render the correct status and re-enable the opener before focusing
      // the dialog. This also makes its initial screen-reader announcement correct.
      flushSync(() => {
        setIsSubmitting(false);
        setSuccess(isSuccess);
      });
      if (shouldOpenModal) onOpenModal(submitter, fromPointer);
    }
  }

  return (
    <form className="request-form" action="" onSubmit={handleSubmit} noValidate>
      <div className="request-form__fields">
        {FORM_FIELDS.map((field) => (
          <RequestFormField
            data={field}
            key={field.id}
            error={errors[field.id]}
            onChange={() => clearFieldError(field.id)}
          />
        ))}
      </div>

      <div className="request-form__sending">
        <Button
          className="request-form__button"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Отправляем..." : "Отправить"}
        </Button>

        <p className="request-form__text">
          * Отправляя форму, вы соглашаетесь на обработку персональных данных
        </p>
      </div>
    </form>
  );
};

export default RequestForm;
