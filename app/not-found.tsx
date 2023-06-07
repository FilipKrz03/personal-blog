"use client";
import Header from "./components/Header";

export default function Custom404() {
  return (
    <>
      <Header />
      <div
        style={{ textAlign: "center", marginTop: "100px", fontSize: "55px" }}
      >
        This page does not exist !{" "}
      </div>
    </>
  );
}
