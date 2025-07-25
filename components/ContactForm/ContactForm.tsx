
// components/ContactForm.tsx
"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "@/components/ContactForm/ContactForm.module.css";
import { submitToSheet } from "@/lib/submitToSheet";

interface ContactFormProps {
  thankYouMessage?: string;
  showComments?: boolean;
  className?: string;
}

export default function ContactForm({
  thankYouMessage = "Thank you! We'll be in touch soon.",
  showComments = true,
  className = "",
}: ContactFormProps) {
  const [form, setForm] = useState({ name: "", email: "", comments: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Please fill out required fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      toast.error("Please enter a valid email.");
      return;
    }

    setSubmitting(true);
    try {
      const success = await submitToSheet(form);
      if (!success) throw new Error("Failed to submit");
      toast.success("Form submitted successfully!");
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      toast.error("Submission failed. Please check your connection.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return <div className={styles.thankYou}><p>{thankYouMessage}</p></div>;
  }

  return (
    <div className={`${styles.formWrapper} ${className}`}>
      <Toaster position="top-center" />
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.fieldGroup}>
          <label htmlFor="name">Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.fieldGroup}>
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        {showComments && (
          <div className={styles.fieldGroup}>
            <label htmlFor="comments">Comments</label>
            <textarea
              id="comments"
              name="comments"
              rows={4}
              value={form.comments}
              onChange={handleChange}
              className={styles.textarea}
            />
          </div>
        )}
        <button type="submit" disabled={submitting} className={styles.submitButton}>
          {submitting ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}