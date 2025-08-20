import { motion , AnimatePresence } from "motion/react"
import { Headline } from "../Reusable comp/Headline"


import data from "../../services/contents/projectData.json";
import "../../Style/project.scss"
import  hero from "../../assets/images/hero.jpg"
import { SiBastyon } from "react-icons/si";
import { SBtn } from "../Reusable comp/SBtn";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import { GiCrossedBones } from "react-icons/gi";

export const Project =()=>{

const [visibleCount, setVisibleCount] = useState(5);

const isSeeMoreVisible = visibleCount < data.length;

const displayedItems = isSeeMoreVisible
  ? data.slice(0, visibleCount )
  : data.slice(0, visibleCount);

return <div className="container  ">
<Headline headingTwo="Project's" para="Recents to Old" />

<div className="row g-5 py-5   justify-content-center">
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
          <SBtn text={isSeeMoreVisible? "See More" : "Show Less"} onClick={() => setVisibleCount(isSeeMoreVisible? data.length : 5)}/>
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
const {id,title,description,image,liveDemo,details} = crut;

const shortDesc = description.slice(0, 75);

    return <>
    <motion.div 
    initial={{opacity: 0, y: 150}}
    whileInView={{opacity: 1, y: 0 }}
    transition={{duration: 0.5 , ease : "linear"}}
    exit={{opacity: 0, y: -50 }}
    // viewport={{amount: 0.5}}
    className="col-12 col-sm-6 col-md-6 col-lg-4  ">

           <div className=" card projectCardBg dropBlueShadow h-100 mx-auto" style={{maxWidth: "25rem"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
  <img src={imageMap[image]} className="card-img-top mx-auto rounded-4" alt="..."/>
  <div className="card-body">
    <h5 className="card-title fw-bold ">{title}</h5>
    <p className="card-text">{shortDesc + "..."}</p>
    <div className="d-flex justify-content-between flex-sm-column  flex-md-row align-items-sm-center ">
        <a href=" " className="btn activeColor position-relative projectAnchor"   >
             <span className={`${aniClass} projectLinkIcon`}><FaExternalLinkAlt  /></  span>
             <span > <span className="activeGlow">Live</span> Demo</span>
             </a>
              <SBtn text="Details" modal="modal" page="#example1" />
              
    </div>
  </div>
</div>
        </motion.div>

           <div className="modal fade " id="example1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered   " style={{
          minWidth: "80%"
        }}>
          <div className="modal-content  rounded-4 card skillCardBg text-white d-flex align-items-end">
            <div className="modal-header border-bottom-0 py-2">
              <button type="button" className="btn text-danger  " data-bs-dismiss="modal" aria-label="Close">
                <GiCrossedBones />
              </button>
            </div>
            <div className="modal-body">

              <div className="row  gx-5">
                <div className="col-12 col-md-6">
                  <figure>
                    <img className="img-fluid rounded-5" src={hero} alt="" />
                  </figure>
                </div>
                <div className="col-12 col-md-6">
                  <p>
                    Featured - Design</p>
                  <h3>App Design Development.</h3>
                  <div className="d-flex flex-column gap-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.
                      <br />
                      Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.
                      <br />
                      Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p>
                  </div>

                <div className=" mt-4 ps-3 d-flex gap-5">
                      < SBtn text="Like"/>
< SBtn text="Coment"/>
                </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

        </>
        
   
}