
import { BsBraces } from "react-icons/bs";
import { IoIosCode } from "react-icons/io";
import { BiWrench } from "react-icons/bi";


export  const Topics = ({curt})=>{

  const icons = {
    code: <IoIosCode />, 
braces: <BsBraces />, 
wrench:<BiWrench />
  }
    

 const {id,title,description,icon} = curt;

 
    return <li key={id} className="col-12 g-5">
<div className="d-flex align-items-center gap-3 bg-skill rounded-3 p-3 ">
    <h3 className="bg-skillIcon">{icons[icon]}</h3>
    <div className="d-flex  gap-5 align-items-center">
        
        <div className=" ">
            <p className="fs-4 fw-bold mb-0">{title}</p>
            <p>{description}</p>
        </div>
            <p className=""><i className="bi bi-arrow-up-right   fs-4"  ></i></p>
    </div>
</div>
    </li>

}