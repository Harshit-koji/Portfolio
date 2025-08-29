import { useEffect, useState } from "react";
import { Header } from "./Components/page Comp/Header";
import { MainInfo } from "./Components/page Comp/MainInfo";
import { Preloader } from "./Components/page Comp/preloader";
import { ContactSection } from "./Components/page Comp/contact";
import { Element } from "react-scroll";


export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Preloader />}
      <Header />
     
      <MainInfo />
      <Element name="contact">
      <ContactSection />
      </Element>
    </>
  );
};
