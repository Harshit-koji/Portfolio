import { Element } from "react-scroll"
import { Education } from "../UI comp/Education"
import { Project } from "../UI comp/Project"
import { Skill } from "../UI comp/Skill"



export const MainInfo = () => {

    return (
        <>
        <Element name="skill">
            <section className="my-5 py-5  ">
                <Skill />
            </section>
        </Element>

        <Element name="education">
            <section className="my-5 py-5">
                <Education />
            </section>
        </Element>

        <Element name="project">
            <section className="my-5 py-5 ">
                <Project /> 
            </section>
        </Element>
          
        </>
    )
}