"use client";
import { createTheme } from "@mui/material/styles";
import { Open_Sans } from "next/font/google";

const sans = Open_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: sans.style.fontFamily,
  },
  palette: {
    mode: "dark",
  },
});

export default theme;
