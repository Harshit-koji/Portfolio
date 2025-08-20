import { FaArrowRight } from "react-icons/fa";

import hero from "../../assets/images/hero.jpg";




export const SBtn = ({ text, modal, page, onClick , className}) => {
  return (
    <>
      <a className={`CommonBtn ${className}  `} data-bs-toggle={modal} data-bs-target={page} onClick={onClick}>
        <div className="wrappers">
          <span className="shine-text">{text}</span>
          <div className="btn-hack"></div>
          {/* <img src={btnBg} className="btn-bg" alt="bg" /> */}
        </div>
      </a>
   

    </>
  );
};


