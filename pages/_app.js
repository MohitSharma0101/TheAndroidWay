import "../styles/globals.css";
import Header from "../components/Header";
import { useHighlightSyntax } from "../components/util";
import "prismjs/components/prism-kotlin";
import Fotter from '../components/Fotter'

function MyApp({ Component, pageProps }) {
  useHighlightSyntax()

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Fotter />
    </>
  );
}

export default MyApp;
