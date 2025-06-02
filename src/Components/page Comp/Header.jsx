import { Hero } from "../UI comp/Hero";
import { TopNav } from "../UI comp/TopNav";
//? Importing Header.scss file
import '../../Style/header.scss';



export const Header = ()=>{

    return (
        <header className="container-fluid px-0">
          <TopNav/>
          <section className="my-5 py-5">
            <Hero/>
          </section>
        </header>

        
    )
}