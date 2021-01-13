import { Field } from "formik";
import React from "react";
import "./../../assets/styles/form.sass";

type TextInputValues = {
  name: string;
  label: string;
  placeholder: string;
  showError: boolean;
  errorMessage: string;
};

type DateInputValues = {
  name: string;
  label: string;
  placeholder: string;
  showError: boolean;
  errorMessage: string;
};

type DateWithTextInputValues = {
  selectName: string;
  options: { value: string; text: string }[];
  textName: string;
  textLabel: string;
  textPlaceholder: string;
  showError: boolean;
  errorMessage: string;
};

type CheckboxInputValues = {
  children: React.ReactNode;
  name: string;
  showError: boolean;
  errorMessage: string;
};

type RadioButtonGroupInputValues = {
  name: string;
  title: string;
  options: { value: string; text: string }[];
  showError: boolean;
  errorMessage: string;
};

type SelectWithDateInputValues = {
  selectName: string;
  options: { value: string; text: string }[];
  dateName: string;
  dateLabel: string;
  datePlaceholder: string;
  showError: boolean;
  errorMessage: string;
  className: string;
};

const TextInput = ({
  name,
  label,
  placeholder,
  showError,
  errorMessage,
}: TextInputValues) => {
  return (
    <>
      <div className="form-container">
        <label className="label" htmlFor={name}>
          {label}
        </label>
        <Field id={name} name={name} placeholder={placeholder} />
      </div>
      {showError && errorMessage ? (
        <span className="form-error">{errorMessage}</span>
      ) : null}
    </>
  );
};

const DateInput = ({
  name,
  label,
  placeholder,
  showError,
  errorMessage,
}: DateInputValues) => {
  return (
    <>
      <div className="form-container">
        <label className="label" htmlFor={name}>
          {label}
        </label>
        <Field id={name} name={name} type="date" placeholder={placeholder} />
      </div>
      {showError && errorMessage ? (
        <span className="form-error">{errorMessage}</span>
      ) : null}
    </>
  );
};

const SelectWithTextInput = ({
  selectName,
  options,
  textName,
  textLabel,
  textPlaceholder,
  showError,
  errorMessage = "",
}: DateWithTextInputValues) => {
  return (
    <>
      <div className="form-container-group">
        <Field
          className="form-container-group__select"
          name={selectName}
          component="select"
        >
          {options.map((currentOption) => (
            <option value={currentOption.value} key={currentOption.value}>
              {currentOption.text}
            </option>
          ))}
        </Field>
        <div className="form-container-group__input--right">
          <label className="label" htmlFor={textName}>
            {textLabel}
          </label>
          <Field id={textName} name={textName} placeholder={textPlaceholder} />
        </div>
      </div>
      {showError && errorMessage ? (
        <span className="form-error">{errorMessage}</span>
      ) : null}
    </>
  );
};

const CheckboxInput = ({
  children,
  name,
  showError,
  errorMessage,
}: CheckboxInputValues) => {
  return (
    <>
      <div className="mt-20">
        <label className="checkbox-label">
          {children}
          <Field type="checkbox" name={name} />
          <span className="checkbox-custom"></span>
        </label>
        {showError && errorMessage ? (
          <span className="form-error">{errorMessage}</span>
        ) : null}
      </div>
    </>
  );
};

const RadioButtonGroupInput = ({
  name,
  title,
  options,
  showError,
  errorMessage,
}: RadioButtonGroupInputValues) => {
  return (
    <>
      <div role="group" aria-labelledby={name} className="mt-20">
        <p className="mb-20">{title}</p>
        {options.map((option) => (
          <label className="radiobutton mb-15" key={option.value}>
            {option.text}
            <Field type="radio" name={name} value={option.value} />
            <span className="checkmark"></span>
          </label>
        ))}
      </div>
      {showError && errorMessage ? (
        <span className="form-error">{errorMessage}</span>
      ) : null}
    </>
  );
};

const SelectWithDateInput = ({
  selectName,
  options,
  dateName,
  dateLabel,
  datePlaceholder,
  showError,
  errorMessage,
  className,
}: SelectWithDateInputValues) => {
  return (
    <>
      <div className={`form-container-group ${className}`}>
        <Field
          className="form-container-group__select mw-100"
          name={selectName}
          component="select"
        >
          {options.map((currentOption) => (
            <option value={currentOption.value} key={currentOption.value}>
              {currentOption.text}
            </option>
          ))}
        </Field>
        <div className="form-container-group__input--right">
          <label className="label" htmlFor={dateName}>
            {dateLabel}
          </label>
          <Field
            id={dateName}
            name={dateName}
            type="date"
            placeholder={datePlaceholder}
          />
        </div>
      </div>
      {showError && errorMessage ? (
        <span className="form-error">{errorMessage}</span>
      ) : null}
    </>
  );
};

export {
  TextInput,
  DateInput,
  SelectWithTextInput,
  CheckboxInput,
  RadioButtonGroupInput,
  SelectWithDateInput,
};
