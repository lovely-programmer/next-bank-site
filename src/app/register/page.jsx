"use client";
import Account from "@/components/register/Account";
import Address from "@/components/register/Address";
import PersonalInfo from "@/components/register/PersonalInfo";
import VerifyIdentity from "@/components/register/VerifyIdentity";
import { useMultistepForm } from "@/hooks/useMultistepForm";
import { useState } from "react";
import styles from "./register.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

function page() {
  const router = useRouter();
  const session = useSession();

  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    address: "",
    account_type: "",
    phoneNumber: "",
    password: "",
    occupation: "",
    country: "",
    city: "",
    state: "",
    zip_code: "",
    social_security: "",
    confirm_social: "",
    date_of_birth: "",
  });

  const {
    username,
    name,
    email,
    address,
    account_type,
    phoneNumber,
    password,
    occupation,
    country,
    city,
    state,
    zip_code,
    social_security,
    confirm_social,
    date_of_birth,
  } = formData;

  const updateFields = (fields) => {
    setFormData((prevState) => ({
      ...prevState,
      ...fields,
    }));
  };

  const { step, steps, currentStepIndex, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <PersonalInfo {...formData} updateFields={updateFields} />,
      <Address {...formData} updateFields={updateFields} />,
      <Account {...formData} updateFields={updateFields} />,
      <VerifyIdentity {...formData} updateFields={updateFields} />,
    ]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLastStep) return next();

    if (social_security !== confirm_social) {
      alert("SSN/TIN do not match");
    } else {
      const userData = {
        username,
        name,
        email,
        password,
        address,
        phoneNumber,
        account_type,
        country,
        state,
        city,
        zip_code,
        occupation,
        social_security,
        date_of_birth,
      };

      try {
        const res = await fetch("/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        if (res.status === 201) {
          const { username, password } = await res.json();
          signIn("credentials", { username, password });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (session.status === "authenticated") {
    router.push("/dashboard");
  }

  return (
    <div className={styles.register}>
      <div className={styles.register__container}>
        <div className={styles.register__nav}>
          <div className={styles.register__nav__content}>
            <Link href="/">
              <h2>America Bank</h2>
            </Link>
          </div>
        </div>

        <div className={styles.register__form}>
          <div
            style={{
              position: "absolute",
              top: "-1.5rem",
              right: "1.5rem",
              fontSize: "20px",
              background: "#6565d2",
              padding: "10px",
              color: "#fff",
            }}
          >
            <span>{currentStepIndex + 1}</span>
            <span> / </span>
            <span>{steps.length}</span>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            {step}

            <div className={styles.create__account__btn}>
              {!isFirstStep && (
                <button
                  type="button"
                  onClick={back}
                  className={styles.prev_button}
                >
                  Previous
                </button>
              )}

              <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;
