import topic from "../../services/contents/skillTopic.json";
import { easeInOut, motion } from "motion/react"
import { Topics } from "../map Comp/Topics";
import {
    SiReact, SiTailwindcss, SiNodedotjs, SiMongodb, SiGit, SiGithub, SiVercel, SiFigma, SiPostman
} from "react-icons/si";

import { BsCodeSlash, BsFiletypeJs, BsDatabase, BsArrowRightSquare } from "react-icons/bs"; // Bootstrap Icons

import "../../Style/skill.scss"
// import { BsTypeH1 } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { Headline } from "../Reusable comp/Headline";
import { viewVariantXM, viewVariantXP } from "../Reusable comp/Variant";

export const Skill = () => {
    const [show, setShow] = useState("1");

    //todo  function for handleShowContent
    const handleShowContent = (id) => {
        setShow(id);
const  num = id ;
return num
    }
    const buttonRefs = useRef([]);
    
  // On mount or whenever focusedIndex changes → set focus
  useEffect(() => {
    if (buttonRefs.current[show]) {
      buttonRefs.current[show].focus();
    }
  }, [show]);
    const contentIcons = {
        "SiReact": <SiReact />,
        "SiTailwindcss": <SiTailwindcss />,
        "SiNodedotjs": <SiNodedotjs />,
        "SiMongodb": <SiMongodb />,
        "SiGit": <SiGit />,
        "SiGithub": <SiGithub />,
        "SiVercel": <SiVercel />,
        "SiFigma": <SiFigma />,
        "SiPostman": <SiPostman />,
        "code-slash": <BsCodeSlash />,
        "filetype-js": <BsFiletypeJs />,
        "database": <BsDatabase />
    };

    return (
        <div className="container my-5 overflow-hidden">
            <Headline headingTwo="Skills" para="My Technical Skills" />
            <div className="row gy-5 skill-row my-5  ">
                <motion.div
                    variants={viewVariantXM}
                    initial="hidden"
                    // animate="show"
                    whileInView="show"
                    exit="exit"
                    viewport={{ amount: 0.3 }}

                    className="col-12 col-md-6 ">
                    <ul className="row list-unstyled h-100 mb-0 px-2 " >
                        {
                            topic.map((curt) => {

                                return <Topics key={curt.id} ref= {(el) => (buttonRefs.current[curt.id] = el)} curt={curt} handleShowContent={handleShowContent} selected={show ===  curt.id} />
                            })
                        }
                    </ul>
                </motion.div>
                <div

                    className="col-12 col-md-6">
                    <motion.div
                        variants={viewVariantXP}
                        initial="hidden"
                        whileInView="show"

                        exit="exit"
                        viewport={{ amount: 0.5 }}
                        className="card py-4 skillCardBg bgMainBlue  justify-content-center rounded-5 " style={{ minHeight: "100%" }} >
                        {
                            show &&
                                <ul className="list-unstyled px-3 align-items-center mb-0">
                                    {
                                        topic.find((elem) => elem.id === show)?.items.map((item, index) => {
                                            const { id, label, icon } = item;
                                            return <motion.li

                                                initial={{ opacity: 0, y: 50 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.1 }}
                                                exit={{ opacity: 0, y: 50 }}
                                                viewport={{ amount: 0.3 }}

                                                key={id} className="mb-3 rangeBorder">
                                                <div className="d-flex justify-content-between  px-3">
                                                    <p className="fs-3 bg-skillIcon">{contentIcons[icon]}</p>
                                                    <p className="fw-bold fs-4 activeColor">{label}</p>
                                                </div>

                                            </motion.li>
                                        })

                                    }
                                </ul>
                                // :
                                // <h4 className="text-center activeColor border-bottom rounded  align-self-center pb-2 ">Click any skill  <BsArrowRightSquare />  to see tools </h4>

                        }


                    </motion.div>
                </div>
            </div>
        </div>
    )
}



