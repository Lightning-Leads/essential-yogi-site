import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

import styles from "./index.module.scss";

import Layout from "../components/Layout";

const successMap = {
  "n/a": {
    text: "Get Instant Access",
    variant: "success",
  },
  waiting: {
    text: "Processing...",
    variant: "warning",
  },
  good: {
    text: "Check Your Inbox!",
    variant: "light",
  },
};

export default function Home() {
  const [email_address, updateEmail] = useState("");
  const [first_name, updateName] = useState("");
  const [success, setSuccess] = useState("n/a");

  const handleSignup = async () => {
    setSuccess("waiting");
    const result = await axios.post("/api/mailchimp/subscribe", {
      source: "home-page",
      email_address,
      first_name,
    });

    setSuccess("good");
    updateEmail("");
    updateName("");
  };

  return (
    <Layout>
      <div className={styles.cover}>
        <div className="container">
          <div className={styles.signup}>
            <h3>Essential Oils On and Off the Mat</h3>
            <p>
              Sign up for the free Masterclass: Learn how to Empower your
              Practice and Self Care with Essential Oils.
            </p>
            <p>BONUS: Get the Essential Oil Sadhana Printout for FREE!</p>
            <Form>
              <Form.Control
                type="text"
                placeholder="First Name"
                autoComplete="given-name"
                value={first_name}
                onChange={(e) => updateName(e.target.value)}
              />
              <Form.Control
                type="email"
                placeholder="Enter email"
                autoComplete="email"
                value={email_address}
                onChange={(e) => updateEmail(e.target.value)}
              />

              <div className="btn-container">
                <Button
                  disabled={success === "good"}
                  onClick={() => handleSignup()}
                  variant={successMap[success].variant}
                >
                  {successMap[success].text}
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
