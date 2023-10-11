

const NavBar = () => {
    return <nav className="navbar navbar-expand-lg navbar-dark" style={{background:"#87CEEB"}}>
        <a className="navbar-brand" href="/games" style={{ marginLeft: "50px" , color:"black" ,fontFamily: "'Bai Jamjuree', sans-serif"}}>
            <b>Sharp Your Mind</b>
        </a>
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02" >
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0" >
                <li className="nav-item active">
                    <a className="nav-link" href="/" style={{color:"black"}}>
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/games" style={{color:"black"}}>
                        games
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#" style={{color:"black"}}>
                        Disabled
                    </a>
                </li>
            </ul>
        </div>
        <button className="btn btn-outline-success my-2 my-sm-0" style={{ marginRight: "16px" }}>
            Sign Up
        </button>
    </nav>
}

export default NavBar;