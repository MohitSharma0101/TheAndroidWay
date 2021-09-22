import '../styles/globals.css'
import { useEffect } from "react";
import Prism from 'prismjs';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
