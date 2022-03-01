import "../styles/globals.css";
import Layout from "../components/layout/index.js";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
