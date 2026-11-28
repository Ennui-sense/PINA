import "./RequestFormField.scss";

import type { FormField } from "~/types";

import { InputMask } from "@react-input/mask";
import clsx from "clsx";

interface RequestFormFieldProps {
  data: FormField;
  error?: string;
  onChange?: () => void;
}

const RequestFormField = ({ data, error, onChange }: RequestFormFieldProps) => {
  const {
    id,
    label,
    type,
    placeholder,
    maskOptions,
    min,
    max,
    maxLength,
    inputType,
    required,
  } = data;

  const inputProps = {
    id,
    name: id,
    placeholder,
    onChange,
    "aria-required": required || undefined,
    "aria-invalid": !!error,
    "aria-describedby": error ? `${id}-error` : undefined,
  };

  return (
    <div className="request-form-field">
      <label htmlFor={id} className="request-form-field__label">
        {label}
        {required && " *"}
      </label>

      {type === "textarea" ? (
        <textarea
          {...inputProps}
          className="request-form-field__input request-form-field__textarea"
          maxLength={maxLength}
        ></textarea>
      ) : maskOptions ? (
        <InputMask
          {...inputProps}
          {...maskOptions}
          type="tel"
          className={clsx("request-form-field__input", error && "request-form-field__input--error")}
        />
      ) : (
        <input
          {...inputProps}
          type={inputType}
          className={clsx("request-form-field__input", error && "request-form-field__input--error")}
          min={min}
          max={max}
          maxLength={maxLength}
        />
      )}

      {error && <p id={`${id}-error`} className="request-form-field__error">{error}</p>}
    </div>
  );
};

export default RequestFormField;
