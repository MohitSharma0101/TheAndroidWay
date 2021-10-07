import { useEffect } from "react";
import Prism from "prismjs";

export function useHighlightSyntax() {
  return useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);
}

export function inUrlFormat(str) {
  return str.toLowerCase().trim().replace(/ /g, "-");
}

export function isEmailValid(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) return true;
  else return false;
}

export const blogImgLoader = ({ src, width }) => {
  const homeip = "192.168.43.156";
  const ip = "192.168.29.156";
  const localhost = "localhost";
  return `http://${localhost}:3000/blog-cover/${src}.png?w=${width}`;
};
