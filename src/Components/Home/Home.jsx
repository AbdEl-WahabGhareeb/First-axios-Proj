import React from "react";
import homeImage from "../../assets/Images/avataaars.svg";

export default function Home() {
    return (
        <>
            <div className="home d-flex justify-content-center align-content-center flex-column">
                <div className="text-center text-white">
                    <img
                        src={homeImage}
                        alt="avatar"
                        className="mb-3 home-img"
                    />
                    <div className="pt-3 d-flex justify-content-center align-content-center flex-column">
                        <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
                            start Framework
                        </h2>
                        <div className="d-flex align-items-center justify-content-center mb-3">
                            <div className="line me-3" />
                            <i className="fa-solid fa-star" />
                            <div className="line ms-3" />
                        </div>
                    </div>
                    <div>Graphic Artist - Web Designer - Illustrator</div>
                </div>
            </div>
        </>
    );
}
