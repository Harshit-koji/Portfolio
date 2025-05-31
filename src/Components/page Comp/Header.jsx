import { Hero } from "../UI comp/Hero"
import { TopNav } from "../UI comp/TopNav"



export const Header = ()=>{

    return (
        <header className="container">
          <TopNav/>
          <section className="my-5 py-5">
            <Hero/>
          </section>
        </header>

        
    )
}