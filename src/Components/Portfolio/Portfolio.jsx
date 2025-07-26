import React from "react";
import port1 from "../../assets/Images/port1.png";
import port2 from "../../assets/Images/port2.png";
import port3 from "../../assets/Images/port3.png";

export default function Portfolio() {
    return (
        <div className="portfolio py-5 d-flex justify-content-center align-items-center flex-column text-white">
            <div className="container">
                <h2 className="text-uppercase custom-class text-center mb-3 fs-1 fw-bolder">
                    portfolio component
                </h2>
                <div className="d-flex align-items-center justify-content-center mb-3">
                    <div className="custom-line line me-3"></div>
                    <i className="fa-solid i-star fa-star"></i>
                    <div className="custom-line line ms-3"></div>
                </div>
                <div className="row g-5">
                    <div className="col-lg-4 col-md-6">
                        <div className="inner position-relative position-relative">
                            <img
                                src={port1}
                                alt="portfolio1"
                                className="img-fluid rounded-3"
                            />
                            <div
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                className="layer position-absolute text-white top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                            >
                                <i className="fa-regular fa-plus fa-6x fw-bolder"></i>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="inner position-relative">
                            <img
                                src={port2}
                                alt="portfolio2"
                                className="img-fluid rounded-3"
                            />
                            <div
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal-2"
                                className="layer position-absolute text-white top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                            >
                                <i className="fa-regular fa-plus fa-6x fw-bolder"></i>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="inner position-relative">
                            <img
                                src={port3}
                                alt="portfolio3"
                                className="img-fluid rounded-3"
                            />
                            <div
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal-3"
                                className="layer position-absolute text-white top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                            >
                                <i className="fa-regular fa-plus fa-6x fw-bolder"></i>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="inner position-relative">
                            <img
                                src={port1}
                                alt="portfolio1"
                                className="img-fluid rounded-3"
                            />
                            <div
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                className="layer position-absolute text-white top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                            >
                                <i className="fa-regular fa-plus fa-6x fw-bolder"></i>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="inner position-relative">
                            <img
                                src={port2}
                                alt="portfolio2"
                                className="img-fluid rounded-3"
                            />
                            <div
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal-2"
                                className="layer position-absolute text-white top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                            >
                                <i className="fa-regular fa-plus fa-6x fw-bolder"></i>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="inner position-relative">
                            <img
                                src={port3}
                                alt="portfolio3"
                                className="img-fluid rounded-3"
                            />
                            <div
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal-3"
                                className="layer position-absolute text-white top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                            >
                                <i className="fa-regular fa-plus fa-6x fw-bolder"></i>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="inner position-relative">
                            <img
                                src={port1}
                                alt="portfolio1"
                                className="img-fluid rounded-3"
                            />
                            <div
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                className="layer position-absolute text-white top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                            >
                                <i className="fa-regular fa-plus fa-6x fw-bolder"></i>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="inner position-relative">
                            <img
                                src={port2}
                                alt="portfolio2"
                                className="img-fluid rounded-3"
                            />
                            <div
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal-2"
                                className="layer position-absolute text-white top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                            >
                                <i className="fa-regular fa-plus fa-6x fw-bolder"></i>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="inner position-relative">
                            <img
                                src={port3}
                                alt="portfolio3"
                                className="img-fluid rounded-3"
                            />
                            <div
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal-3"
                                className="layer position-absolute text-white top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                            >
                                <i className="fa-regular fa-plus fa-6x fw-bolder"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div className=" modal-dialog">
                            <div className="modal-content bg-transparent text-center border-0 d-flex align-items-center justify-content-center">
                                <div className="modal-body ">
                                    <img
                                        src={port1}
                                        alt=""
                                        className=" rounded-3"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div
                        className="modal fade"
                        id="exampleModal-2"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div className=" modal-dialog">
                            <div className="modal-content bg-transparent text-center border-0 d-flex align-items-center justify-content-center">
                                <div className="modal-body ">
                                    <img
                                        src={port2}
                                        alt=""
                                        className=" rounded-3"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div
                        className="modal fade"
                        id="exampleModal-3"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div className=" modal-dialog">
                            <div className="modal-content bg-transparent text-center border-0 d-flex align-items-center justify-content-center">
                                <div className="modal-body ">
                                    <img
                                        src={port3}
                                        alt=""
                                        className=" rounded-3"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
