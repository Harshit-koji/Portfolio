import { Element } from "react-scroll"
import { Education } from "../UI comp/Education"
import { Project } from "../UI comp/Project"
import { Skill } from "../UI comp/Skill"



export const MainInfo = () => {

    return (
        <>
        <Element name="skill">
            <section className="mt-5 pt-5   ">
                <Skill />
            </section>
        </Element>

        <Element name="education">
            <section className="mb-5 pt-2 ">
                <Education />
            </section>
        </Element>

        <Element name="project">
            <section className=" my-5 pt-4">
                <Project /> 
            </section>
        </Element>
          
        </>
    )
}