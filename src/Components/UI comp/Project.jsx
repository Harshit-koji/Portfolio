import { motion , AnimatePresence } from "motion/react"
import { Headline } from "../Reusable comp/Headline"


import {ProjectData} from "../service comp/projectData";
import "../../Style/project.scss"
import  hero from "../../assets/images/hero.jpg"
import { SiBastyon } from "react-icons/si";
import { SBtn } from "../Reusable comp/SBtn";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import { GiCrossedBones } from "react-icons/gi";
import { Modal } from "../Reusable comp/Modal";

export const Project =()=>{

const [visibleCount, setVisibleCount] = useState(5);

const isSeeMoreVisible = visibleCount < ProjectData.length;

const displayedItems = isSeeMoreVisible
  ? ProjectData.slice(0, visibleCount )
  : ProjectData.slice(0, visibleCount);

return <div className="container  ">
<Headline headingTwo="Project's" para="Recents to Old" />

<div className="row gy-4 py-5 justify-content-center">
{
    displayedItems.map((crut)=>{


        return <Card crut={crut} key={crut.id}/>
    })
}
<AnimatePresence>
  { (
    <motion.div 
      initial={{opacity: 0, y: 50 }}
    whileInView={{opacity: 1, y: 0 }}
    transition={{duration: 0.5 , ease : "easeInOut"}}
    exit={{opacity: 0, y: 50 }}
    className="col-12 col-sm-6 col-md-6 col-lg-4 align-self-center ">
      <div className=" card projectCardBg dropBlueShadow  mx-auto"  style={{maxWidth: "25rem"}} >
        <div className="card-body d-flex align-items-center justify-content-center " >
          <SBtn text={isSeeMoreVisible? "See More" : "Show Less"} onClick={() => setVisibleCount(isSeeMoreVisible? ProjectData.length : 5)}/>
        </div>
      </div>
    </motion.div>
  )|| isSeeMoreVisible }</AnimatePresence>
 </div>
</div>
}




const Card = ({crut})=>{


const[hoverd, setHovered] = useState(false);
const[aniClass, setAniClass]= useState("");


const handleMouseEnter = ()=>{
setAniClass("slide-in");
setHovered(true);
}
const handleMouseLeave = ()=>{
setAniClass("slide-out");
setHovered(false);
}

    const imageMap = {
        "hero.png" : hero, 
    }
const {id,title,description,image,liveDemo,lable} = crut;

const shortDesc = description.slice(0, 90);

    return <>
    <motion.div 
    initial={{opacity: 0, y: 150}}
    whileInView={{opacity: 1, y: 0 }}
    transition={{duration: 0.5 , ease : "linear"}}
    exit={{opacity: 0, y: -50 }}
    // viewport={{amount: 0.5}}
    className="col-12 col-sm-6 col-md-6 col-lg-4  ">

           <div className=" card projectCardBg dropBlueShadow h-100 mx-auto gap-3" style={{maxWidth: "25rem"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
  <img src={image} className="card-img-top  mx-auto rounded-4" alt="..."/>
  <div className="card-body">
    <h5 className="card-title fw-bold ">{title}</h5>
    <p className="card-text">{shortDesc + "..."}</p>
    <div className="d-flex justify-content-between flex-sm-column  flex-md-row align-items-sm-center ">
        <a href={liveDemo} target="_blank" className="btn activeColor position-relative projectAnchor"   >
             <span className={`${aniClass} projectLinkIcon`}><FaExternalLinkAlt  /></  span>
             <span > <span className="activeGlow">Live</span> Demo</span>
             </a>
              <SBtn text="Details" modal="modal" page={`#${id}`} />
              
    </div>
  </div>
</div>
        </motion.div>

<Modal hero={image} id={id} 

para={description} lable={title}/>

        </>
        
   
}