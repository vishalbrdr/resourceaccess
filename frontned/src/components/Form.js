import React from "react";
import styles from "../styles/Form.module.css";
import axios from "axios";
import { useRouter } from "next/router";

export default function Form() {
  const router = useRouter();

  const [formData, setFormData] = React.useState({
    "Resource ID": "",
    "Manager ID": "",
    "Rollup 1 code": "",
    "Rollup 2 code": "",
    "Department ID": "",
    "Role Title ID": "",
    "Role Family Description Code": "",
    "Role Family ID": "",
  });

  const handleChange = (label) => (e) => {
    setFormData((prev) => ({ ...prev, [label]: e.target.value }));
  };

  const labels = [
    "Resource ID",
    "Manager ID",
    "Rollup 1 code",
    "Rollup 2 code",
    "Department ID",
    "Role Title ID",
    "Role Family Description Code",
    "Role Family ID",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:5000/predict", {
        ...formData,
      })
      .then(function (response) {
        console.log(response);
        if (response.data === "Yes") {
          router.push("/result?q=yes");
        } else if (response.data === "No") router.push("/result?q=no");
        else router.push("/");
      })
      .catch((e) => {
        router.push("/");
        console.log(e);
      });
  };
  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className={styles.card}>
        <a className={styles.login}>Resource Access</a>
        {labels.map((label) => (
          <div key={label} class={styles.inputBox}>
            <input
              value={formData[label]}
              onChange={handleChange(label)}
              inputmode="numeric"
              type="number"
              required="required"
            />
            <span class={styles.user}>{label}</span>
          </div>
        ))}
        <button type="submit" className={styles.enter}>
          REQUEST
        </button>
      </div>
    </form>
  );
}
