import "./RequestForm.scss";

import Button from "~/components/ui/Button/Button";

import type { SubmitEvent } from "react";
import { useState } from "react";
import z from "zod";

import { FORM_FIELDS } from "~/data";

import { URL_API } from "~/constants";
import RequestFormField from "../RequestFormField/RequestFormField";

import { requestSchema, type RequestFormValues } from "~/schemas/requestSchema";
import { formatMessage } from "~/lib/formatResult";

type FieldErorrs = Partial<Record<keyof RequestFormValues, string>>;

interface RequestFormProps {
  onOpenModal: () => void;
	setSuccess: (value: boolean) => void;
}

const RequestForm = ({ onOpenModal, setSuccess }: RequestFormProps) => {
  const [errors, setErrors] = useState<FieldErorrs>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  function clearFieldError(field: keyof RequestFormValues) {
    setErrors((prev) => ({
      ...prev,
      [field]: undefined,
    }));
  }

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const values = Object.fromEntries(formData.entries());

    const result = requestSchema.safeParse(values);

    if (!result.success) {
      const fieldErrors = z.flattenError(result.error).fieldErrors;

      const newErrors: FieldErorrs = {};

      for (const field of FORM_FIELDS) {
        newErrors[field.id] = fieldErrors[field.id]?.[0];
      }

      setErrors(newErrors);
      setSuccess(false);
      return;
    }

    setErrors({});
    setSuccess(false);
    setIsSubmitting(true);

    try {
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
      setSuccess(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
			onOpenModal()
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
