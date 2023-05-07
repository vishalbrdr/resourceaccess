import React from "react";
import styles from "../styles/ResultDenied.module.css";
import { RxCrossCircled } from "react-icons/rx";

export default function Access() {
  return (
    <div className={styles["Main"]}>
      <div class={styles["notifications-container"]}>
        <div class={styles["success"]}>
          <div class={styles["flex"]}>
            <div class={styles["flex-shrink-0"]}>
              <RxCrossCircled />
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
