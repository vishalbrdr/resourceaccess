import Header from "@/components/Header";
import React from "react";
import styles from "../styles/ResultAccess.module.css";
import Access from "@/components/Access";
import Denied from "@/components/Denied";
import { useRouter } from "next/router";

export default function Result() {
  const router = useRouter();
  const { q } = router.query;
  console.log(q);
  return (
    <>
      <Header show={false} />
      {q === "yes" ? <Access /> : <Denied />}
    </>
  );
}
