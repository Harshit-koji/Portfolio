import topic from "../../services/contents/skillTopic.json";
import { Topics } from "../map Comp/Topics";

// importing skill.scss 
import "../../Style/skill.scss"

export const Skill = ()=>{

    return(
      <div className="container">
        <div className="text-center">
            <h2>Skills</h2>
        <p>My Technical Skills</p>
        </div>
<div className="row">
   <div className="col-12 col-md-6">
         <ul className="row list-unstyled">
            {
topic.map((curt)=>{
    // console.log(curt);
    
 return  <Topics curt={curt}/>
})
            }
        </ul>
   </div>
   <div className="col-12 col-md-6">
    <div className="card" style={{minHeight:"100%" }} ></div>
   </div>
  </div>
       </div>
    )
}