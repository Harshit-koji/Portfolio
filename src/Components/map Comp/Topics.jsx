
import { BsBraces } from "react-icons/bs";
import { IoIosCode } from "react-icons/io";
import { BiWrench } from "react-icons/bi";
import { ABtn } from "../Reusable comp/animateBtn";


export const Topics = ({ curt, handleShowContent }) => {

    const icons = {
        code: <IoIosCode />,
        braces: <BsBraces />,
        wrench: <BiWrench />
    }


    const { id, title, description, icon } = curt;





    return <li className="col-12 g-4" id={id}>
        <div className="d-flex align-items-center gap-3 bg-skill rounded-3">
            <h3 className="bg-skillIcon">{icons[icon]}</h3>
            <div className="d-flex gap-5 align-items-center">

                <div className="topics-skills">
                    <p className="fs-4 fw-bold mb-0">{title}</p>
                    <p>{description} </p>
                </div>
                <ABtn onClick={() => handleShowContent(id)} text="Show" />

            </div>
        </div>
    </li>

}