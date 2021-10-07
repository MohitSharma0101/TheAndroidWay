import styles from "../styles/Component.module.scss";
import Loder from "./Loder";

export const  state = {
    loading: "loading",
    normal: "",
    error: "error",
    sucess: "sucess",
  };

export default function HandleStates({ uiState }) {
    if (uiState === state.loading) return <Loder />;
    if (uiState === state.sucess) return <Success />;
    if (uiState === state.normal) return null;
    else
      return (
        <>
          <Error msg={uiState} />
        </>
      );
  }


  function ErrorIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-alert-circle"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#ff2825"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="12" r="9" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    );
  }
  
  function Error({ msg }) {
    return (
      <div className={styles.error}>
        <ErrorIcon />
        {msg}
      </div>
    );
  }

  function SucessIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-check"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#7bc62d"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 12l5 5l10 -10" />
      </svg>
    );
  }
  
  function Success() {
    return <div className={styles.sucess}>
      <SucessIcon />
      Succesfully Subscribed ! 🎉
      </div>;
  }