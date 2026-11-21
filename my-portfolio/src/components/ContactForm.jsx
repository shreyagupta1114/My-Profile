"use client";

import { useState } from "react";
import { Send, CircleCheck } from "lucide-react";

const emptyForm = { name: "", email: "", subject: "", message: "" };

// Simple email pattern: something@something.something
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.subject.trim()) errors.subject = "Please enter a subject.";
  if (!values.message.trim()) {
    errors.message = "Please enter a message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }
  return errors;
}

// Frontend-only form: it validates input and shows a success message.
// It does not send data anywhere yet.
export default function ContactForm() {
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    // Clear the error for this field as the user types.
    if (errors[name]) setErrors({ ...errors, [name]: undefined });
    if (submitted) setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const foundErrors = validate(values);
    setErrors(foundErrors);

    if (Object.keys(foundErrors).length === 0) {
      setSubmitted(true);
      setValues(emptyForm);
    }
  }

  return (
    <form className="card contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <FormField label="Name" name="name" value={values.name} error={errors.name} onChange={handleChange} placeholder="Your name" />
        <FormField label="Email" name="email" type="email" value={values.email} error={errors.email} onChange={handleChange} placeholder="you@example.com" />
      </div>
      <FormField label="Subject" name="subject" value={values.subject} error={errors.subject} onChange={handleChange} placeholder="What is this about?" />
      <FormField label="Message" name="message" value={values.message} error={errors.message} onChange={handleChange} placeholder="Write your message..." multiline />

      <button type="submit" className="btn btn-primary btn-block">
        <Send size={18} /> Send Message
      </button>

      {submitted && (
        <p className="form-success" role="status">
          <CircleCheck size={18} /> Thank you! Your message has been received. I&apos;ll get back to you soon.
        </p>
      )}
    </form>
  );
}

function FormField({ label, name, type = "text", value, error, onChange, placeholder, multiline = false }) {
  const inputProps = {
    id: name,
    name,
    value,
    onChange,
    placeholder,
    className: `form-input ${error ? "has-error" : ""}`,
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? `${name}-error` : undefined,
  };

  return (
    <div className="form-field">
      <label htmlFor={name}>
        {label} <span className="required">*</span>
      </label>
      {multiline ? <textarea rows={6} {...inputProps} /> : <input type={type} {...inputProps} />}
      {error && (
        <p className="form-error" id={`${name}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}
