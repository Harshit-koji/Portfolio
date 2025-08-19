import { motion } from "motion/react"
import "../../Style/Education.scss"
import data from "../../services/contents/qualification.json"
import graduate from "../../services/contents/certificates.json"
import { QualificationContent } from "../Reusable comp/QualificationContent"
import { RiGraduationCapFill } from "react-icons/ri";
import { GrCertificate } from "react-icons/gr";
import { Headline } from "../Reusable comp/Headline";
import { useState } from "react";
import { viewVariantXM, viewVariantXP } from "../Reusable comp/Variant";


export const Education  = ()=>{

const [show , setShow] = useState(true)

    return (<>
    
     <div className="container my-2 py-5 overflow-hidden">
          <Headline headingTwo="Qualifications" para="Things I Did & Learn"/>
    <div className="my-3">
        <div className="d-flex justify-content-around" onClick={()=> setShow(!show)}>
            <QualificationContent text="Education" icon={<RiGraduationCapFill />} color={show ? "pinkColor": ""} />
            <QualificationContent text="Certificates" icon={<GrCertificate />} color={!show ? "pinkColor": ""} />
        </div>
<div className=" my-3">
   {show ?  <PastKnowledge /> : <Certificate/>}
</div>
    </div>
    </div>
    </>)


}

const PastKnowledge = ()=>{

    return <div className=" mx-auto fixedWidth "  >
    <ul className="list-unstyled  px-0">
{
    data.map((curt , index)=>{
const {title, source, year, id} = curt;

// console.log(data.length - 1);

const isLast = index === data.length - 1;
    




        return <li className={`row position-relative  gx-5 overflow-hidden`} key={id}>
        <div 
        

        className={` col-6 col-lg-6  ${ id % 2===0 ? "order-1 text-end pe-0" : "order-0 ps-0"} `}>
         <motion.div
          variants={id % 2===0 ? viewVariantXM : viewVariantXP}
          initial="hidden"
          // animate="show"
         whileInView="show"
          exit="exit"
          viewport={{amount: 0.5}}
         className="">
               <p className="fw-bold mb-0">{title}</p>
        <p>{source}</p>
        <div className="pt-2">
            <p>{year}</p>
            </div>
         </motion.div>
     

<div className={`dot ${ id % 2===0 ? "start-50" : "end-50"} top-0`}></div>

 {
    !isLast && <div className={`line ${ id % 2===0 ? "start-50" : "end-50"} top-0 translate-middle-x`}></div> 
 }
        </div>

        <div className="col-6"></div>

         
    </li>
        
    })
}
    </ul>
    </div> 
}



const Certificate = ()=>{


    return  <div className=" mt-5 ">
        <ul className="list-unstyled row gy-4 ">

            {
                graduate.map((curt)=>{

                 return   <li key={curt.id} className="col-12 col-md-4  ">
 <div >
            <div className="card projectCardBg w-75  mx-auto   " style={{minHeight: "10rem"}}>

            </div>
        </div>
                    </li>
                })
            }
        </ul>
    </div>
    return  <div className="row">
       
    </div>
}