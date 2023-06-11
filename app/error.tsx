"use client";
import Header from "./components/Header";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      <Header />
      <p style={{ textAlign: "center", marginTop: "100px" }}>
        Something went wrong
      </p>
    </>
  );
}
