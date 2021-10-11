import styles from "../styles/Component.module.scss";
import Image from "next/image";
import { useState } from "react";
import { state } from "./StateHandler";
import StateHandler from "./StateHandler";
import { isEmailValid } from "./util";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [uiState, setState] = useState(state.normal);

  const subscribeUser = async (event) => {
    setState(state.loading);
    event.preventDefault();
    setTimeout(() => {
      setState(state.normal);
    }, 60000);

    if (isEmailValid(email)) {
      const res = await fetch("/api/newsletter", {
        body: JSON.stringify({ email: email, name: name }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });

      const { error, message } = await res.json();
      if (error) {
        setState(error);
      } else {
        setState(state.sucess);
      }
    }else{
      setState("Email is not Valid!")
    }
  };

  return (
    <>
      <form onSubmit={subscribeUser}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Subscribe uiState={uiState} />
      </form>
      <div className={styles.states}>
        <StateHandler uiState={uiState} />
      </div>
    </>
  );
}

function Subscribe({ uiState }) {
  if (uiState != state.loading) return <button type="submit">Subscribe</button>;
  else return null;
}

export default function NewsLetter() {
  return (
    <div className={styles.newsLetter}>
      <div className={styles.cover}>
        <Image
          src="/newsletter-full.png"
          width="400"
          height="400"
          alt="newsletter"
        />
      </div>
      <div className={styles.content}>
        <h1>Get Weekly Newsletter</h1>
        <h1>The Andoid Way...</h1>
        <ul>
          <li>Compose UI of the week.</li>
          <li>Lots of Resources &amp; Updates.</li>
          <li>Android News &amp; Jobs.</li>
        </ul>
        <Form />
      </div>
    </div>
  );
}
