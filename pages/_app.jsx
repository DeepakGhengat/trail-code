import "../styles/Home.module.css";
import "../styles/globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <div className="overflow-hidden">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
