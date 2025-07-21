'use client'
import { useState } from 'react'
import styles from './LeaveYourEmailForm.module.css'

type FormData = {
  name: string
  email: string
  note?: string
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    note: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL'

    try {
      const res = await fetch(scriptURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setSubmitted(true)
        setForm({ name: '', email: '', note: '' })
      } else {
        alert('Something went wrong.')
      }
    } catch (err) {
      console.error(err)
      alert('Error submitting form.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
  <h2 className={styles.heading}>Contact Us</h2>
  <p className={styles.description}>
    Looking to get in touch with us? Please complete this form and our team will contact you back shortly.
  </p>

  <label htmlFor="name">Your Name *</label>
  <div className={styles.inputWrapper}>
    <span className={styles.icon}>👤</span>
    <input
      id="name"
      name="name"
      type="text"
      placeholder="Enter your name"
      value={form.name}
      onChange={handleChange}
      required
      className={styles.input}
    />
  </div>

  <label htmlFor="email">Email *</label>
  <div className={styles.inputWrapper}>
    <span className={styles.icon}>📧</span>
    <input
      id="email"
      name="email"
      type="email"
      placeholder="Ex. yourname@company.com"
      value={form.email}
      onChange={handleChange}
      required
      className={styles.input}
    />
  </div>

  <label htmlFor="note">Comment</label>
  <textarea
    id="note"
    name="note"
    placeholder="Type your message here..."
    value={form.note}
    onChange={handleChange}
    className={styles.textarea}
    rows={4}
  />

  <button type="submit" className={styles.button}>
    Get Started
  </button>

  {submitted && <p className={styles.success}>✅ Thanks! Your message was saved.</p>}
</form>

  )
}
