//* Import Css
import "../styles/Home.module.css";
import "../styles/globals.css";

//* Import Components
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <div className="overflow-x-hidden">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
