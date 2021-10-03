import { FiChevronsRight } from "react-icons/fi";
import { useForm } from "react-hook-form";

import Button from "./Button";

import styles from "../styles/ContactForm.module.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <p className={styles.title}>Let&apos;s stay in touch</p>
      <div className={styles.formGroup}>
        <label htmlFor="name">Your name</label>
        <input
          placeholder="Type your name here..."
          type="text"
          {...register("name", { required: "Please enter your name." })}
          name="name"
          id="name"
          className={errors.name ? styles.inputError : null}
          autoComplete="off"
        />
        {errors.name && (
          <p className={styles.errorMessage}>{errors.name.message}</p>
        )}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Your email</label>
        <input
          placeholder="Type your email here..."
          type="email"
          {...register("email", {
            required: "Please enter your email.",
            pattern: {
              value:
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
              message: "Please enter a valid email.",
            },
          })}
          name="email"
          id="email"
          className={errors.email ? styles.inputError : null}
          autoComplete="off"
        />
        {errors.email && (
          <p className={styles.errorMessage}>{errors.email.message}</p>
        )}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="subject">Subject</label>
        <input
          placeholder="Write the subject of the email"
          type="text"
          {...register("subject", {
            required: "Please enter the subject of the message.",
          })}
          name="subject"
          id="subject"
          className={errors.subject ? styles.inputError : null}
          autoComplete="off"
        />
        {errors.subject && (
          <p className={styles.errorMessage}>{errors.subject.message}</p>
        )}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Message</label>
        <textarea
          placeholder="Write the message here"
          type="text"
          {...register("message", {
            required: "Please write a message.",
            minLength: {
              value: 30,
              message: "Please enter at least 30 characters (to avoid spam).",
            },
          })}
          name="message"
          rows={3}
          id="message"
          className={errors.message ? styles.inputError : null}
          autoComplete="off"
        />
        {errors.message && (
          <p className={styles.errorMessage}>{errors.message.message}</p>
        )}
      </div>
      <div className={styles.formGroup}>
        <Button iconPosition="right" icon={FiChevronsRight} style="outline">
          Send
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
