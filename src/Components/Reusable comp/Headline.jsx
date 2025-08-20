


export const Headline =({headingTwo, para})=>{


    return    <div className="text-center d-flex flex-column">
                <h2 className=" display-5  fw-bold">{headingTwo}</h2>
                <p className="border-bottom lead  rounded align-self-center ">"{para}"</p>
            </div>
}