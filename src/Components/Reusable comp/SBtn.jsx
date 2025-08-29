import { FaArrowRight } from "react-icons/fa";

export const SBtn = ({
  text,
  modal,
  page,
  onClick,
  red,
  className, color,
  type , // can be "button", "submit", or "reset"
}) => {
  const isFormButton =["submit", "reset" , "button"].includes(type);

  return (
    <>
      {isFormButton ? (
        <button
          type={type}
          className={`CommonBtn ${className} ${red ? "selectedGreen" : ""}`}
          data-bs-toggle={modal}
          data-bs-target={page}
          onClick={onClick}
        >
          <div className="wrappers">
            <span className="shine-text">{text}</span>
            <div className="btn-hack"></div>
          </div>
        </button>
      ) : (
        <a
          
          className={`CommonBtn ${className} ${red ? "selectedRed" : ""}`}
          data-bs-toggle={modal}
          data-bs-target={page}
          onClick={onClick}
        >
          <div className="wrappers">
            <span className="shine-text">{text}</span>
            <div className="btn-hack"></div>
          </div>
        </a>
      )}
    </>
  );
};
