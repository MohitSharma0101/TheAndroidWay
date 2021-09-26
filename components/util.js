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

export const blogImgLoader = ({ src, width }) => {
    const homeip = "192.168.43.156";
    const ip = "192.168.29.156";
    const localhost = "localhost";
    return `http://${localhost}:3000/blog-cover/${src}.png?w=${width}`;
  }


