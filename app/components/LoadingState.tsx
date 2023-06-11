"use client";
import { CircularProgress } from "@mui/material";

const LoadingState = () => {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <CircularProgress />
      <p>Data is fetching...Wait a second</p>
    </div>
  );
};

export default LoadingState;
