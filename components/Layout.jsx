//* Import Components
import Header from "./Header";
import Hero from "./Hero";
import HeroBar from "./HeroBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Header />
      <Hero />
      <HeroBar />
      <div className="container mx-auto max-w-[335px]  sm:max-w-[1200px]">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
