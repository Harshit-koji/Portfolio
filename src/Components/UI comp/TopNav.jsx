


export const TopNav = ()=>{

    return(
          <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container-fluid px-5">
                    <a className="navbar-brand" href="#">
                        <img className="img-fluid" src="https://smashkarts.io/images/favicon.png" alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex gap-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Education</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="theme-icon">
                        <i className="bi bi-emoji-sunglasses"></i>
                    </div>
                </div>
            </nav>
    )
}