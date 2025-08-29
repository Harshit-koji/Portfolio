import { GiCrossedBones } from "react-icons/gi";
import { SBtn } from "./SBtn";
import "../../Style/project.scss";
import { use, useState } from "react";


export const Modal = ({hero, id, lable ,headline, para})=>{

  const [red, setRed] = useState(false);
const handleRed = ()=>{
 setRed(!red);

}

    return<>
    
               <div className="modal fade " id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                <div className=" col-sm-12 col-md-6   d-flex align-items-center  ">
                  <figure className="d-flex justify-content-center">
                    <img className={`  img-fluid card  rounded-5 
                      ${id==="example2"? "w-50": ""}
                      `} src={hero} alt="" />
                  </figure>
                </div>
                <div className={`col-sm-12 col-md-6 ${id==="example2" ? "d-flex flex-column gap-3" : ""} `}>
                  <p className={`${id==="example2" ? " display-5 fw-bold card-title ":"fs-2 fw-bold card-title"}`}>
                    {lable}</p>
                  {/* <p>Featured - Design</p> */}
                  <h5 >{headline}</h5>
                  {/* <h3>App Design Development.</h3> */}
                  <div className="d-flex flex-column  gap-4">
                    <p className={`${id==="example2" ? "fs-5 ":""}`}>{para}</p>
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.
                      <br />
                      Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p> */}
                  </div>

{id==="example2"?  <span></span>   : <div className=" mt-4 ps-3 d-flex gap-5" >
                      < SBtn text="Like" onClick={()=>handleRed()} red=
                      {red} />
< SBtn text="Coment"/>
                </div>  }
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
}