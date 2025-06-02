import avatar from "../../assets/images/profile-avatar.png"


export const Hero = ()=>{

    return (
 <div className="container">
    <div className="row  ">
        <div className=" order-last order-md-first  col-12 col-md-6 justify-content-center d-flex flex-column align-items-start gap-3 p-5" >
     
                <h1 className="fw-bolder">Hi, I'm Jacob Aiden</h1>
                 {/* / UI/UX Developer / Web Developer */}
                <h5>I'm a <span className="fw-bold">Frontend Developer</span></h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio unde neque velit cumque natus sunt placeat, quisquam at, nisi optio sed commodi. Assumenda voluptatem alias quidem atque harum ex nam?
                </p>
                <div className="d-flex gap-5">
                    <button className="btn btn-info">View My Work</button>
                    <button className="btn btn-outline-info">Contact Me</button>
                </div>
          
        </div>
        <div className=" order-first order-md-last col-12 col-md-6 align-items-center d-flex">
            <figure className="d-flex justify-content-center">
                <img className="img-fluid rounded-pill dropShadow w-50" src={avatar} alt="Profile-picture" />
            </figure>
        </div>
    </div>
 </div>

    )
}