import { Hero } from "../UI comp/Hero";
import { TopNav } from "../UI comp/TopNav";
import { WhatsAppButton } from "../UI comp/whatsapp";

//? Importing Header.scss file
import '../../Style/header.scss';
import { Element } from "react-scroll";



export const Header = () => {

  return (
    <>
      <header className="container-fluid px-0 ">
        <TopNav />
      <Element name="home">
          <section className="mt-lg-5 pt-lg-5">
          <Hero />
        </section>
      </Element>
        <WhatsAppButton />
      </header>
    </>

  )
}