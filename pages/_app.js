import "../styles/globals.css";
import Footer from "../components/layout/Footer.js";
import Header from "../components/layout/Header.js";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
