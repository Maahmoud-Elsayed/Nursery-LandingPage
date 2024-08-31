import React from "react";

type EmailTemplateProps = {
  email: string;
  address: string;
  age: string;
  phoneNumber: string;
  userName: string;
};

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  email,
  address,
  age,
  phoneNumber,
  userName,
}) => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        color: "#333",
        padding: "20px",
      }}
    >
      <h1 style={{ color: "#555" }}>
        New Contact Form Submission from Al Dana Nursery
      </h1>
      <p>
        <strong>Name:</strong> {userName}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Phone Number:</strong> {phoneNumber}
      </p>
      <p>
        <strong>Address:</strong> {address}
      </p>
      <p>
        <strong>Age:</strong> {age}
      </p>
      <p style={{ marginTop: "30px", color: "#888" }}>
        This email was generated automatically based on a form submission from
        the Al Dana Nursery landing page.
      </p>
    </div>
  );
};
