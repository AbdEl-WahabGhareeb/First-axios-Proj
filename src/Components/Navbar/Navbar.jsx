import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="navbar py-4 fixed-top navbar-expand-lg ">
                <div className="container">
                    <Link
                        className="navbar-brand text-uppercase fw-bolder text-white fs-2"
                        to="/"
                    >
                        start framework
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item me-3">
                                <NavLink
                                    className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2"
                                    to="recipes"
                                >
                                    Recipes
                                </NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink
                                    className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2"
                                    to="movies"
                                >
                                    Movies
                                </NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink
                                    className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2"
                                    to="about"
                                >
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink
                                    className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2"
                                    to="portfolio"
                                >
                                    Portfolio
                                </NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink
                                    className="nav-link text-uppercase text-white fw-bold mt-3 mt-md-0 px-2"
                                    aria-current="page"
                                    to="contact"
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
