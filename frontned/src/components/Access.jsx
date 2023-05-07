import React from "react";
import styles from "../styles/ResultAccess.module.css";

export default function Access() {
  return (
    <div className={styles["Main"]}>
      <div class={styles["notifications-container"]}>
        <div class={styles["success"]}>
          <div class={styles["flex"]}>
            <div class={styles["flex-shrink-0"]}>
              <svg
                class={styles["succes-svg"]}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class={styles["success-prompt-wrap"]}>
              <p class={styles["success-prompt-heading"]}>Order completed</p>
              <div class={styles["success-prompt-prompt"]}>
                <p>
                  You&aposre happy now? Does this impulsive action is really
                  going to satisfy you? Don&apost answer me, answer yourself.
                  Anyway, your party-size pizza combo is on it&aposs way.
                </p>
              </div>
              <div class={styles["success-button-container"]}>
                <button type="button" class={styles["success-button-main"]}>
                  View status
                </button>
                <button
                  type="button"
                  class={styles["success-button-secondary"]}
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
