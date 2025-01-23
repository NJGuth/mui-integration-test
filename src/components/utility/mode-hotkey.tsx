"use client";

import * as React from "react";
import { useColorScheme } from "@mui/material/styles";

export function ModeHotKey() {
  const { mode, setMode } = useColorScheme();

  //Change theme color hotkey
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "a" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setMode(mode === "dark" ? "light" : "dark");
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [setMode, mode]);

  //Change theme component, uncomment if required.

  return <></>;
}
