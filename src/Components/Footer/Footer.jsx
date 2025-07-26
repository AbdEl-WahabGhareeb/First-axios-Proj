import React from "react";

export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer">
                    <div className="card-group m-0 upper-footer p-5">
                        <div className="bg-transparent text-white border-0 card">
                            <div className="card-body text-center">
                                <h3>LOCATION</h3>
                                <p>2215 John Daniel Drive</p>
                                <p>Clark, MO 65243</p>
                            </div>
                        </div>
                        <div className="card border-0 bg-transparent text-white">
                            <div className="card-body text-center">
                                <h3>AROUND THE WEB</h3>
                                <div className="icons">
                                    <i className="fa-brands border border-1 border-white p-2 rounded-circle fa-facebook mx-1 icon" />
                                    <i className="fa-brands border border-1 border-white p-2 rounded-circle fa-twitter mx-1 icon" />
                                    <i className="fa-brands border border-1 border-white p-2 rounded-circle fa-linkedin-in mx-1 icon" />
                                    <i className="fa-solid border border-1 border-white p-2 rounded-circle fa-globe mx-1 icon" />
                                </div>
                            </div>
                        </div>
                        <div className="bg-transparent border-0 text-white card">
                            <div className="card-body text-center">
                                <h3>ABOUT FREELANCER</h3>
                                <p>
                                    Freelance is a free to use, licensed
                                    Bootstrap theme created by Route
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center pb-2 pt-4 lower-footer text-white">
                        <p>
                            Copyright © Your Website 2021
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
