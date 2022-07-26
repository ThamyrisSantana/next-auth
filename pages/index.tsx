import type { NextPage } from "next";
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isAuthenticated, sigin } = useContext(AuthContext);

  function handleSubmit(event: FormEvent) {
    event?.preventDefault();

    const data = {
      email,
      password,
    };

    sigin(data);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.main}>
      <input
        className={styles.input}
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className={styles.input}
        type="passwor"
        placeholder="Passwor"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className={styles.button} type="submit">
        Enviar
      </button>
    </form>
  );
};

export default Home;
