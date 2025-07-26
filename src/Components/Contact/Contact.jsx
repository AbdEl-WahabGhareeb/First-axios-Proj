import React from "react";

export default function Contact() {
    function userNameInput(e) {
        const userNameInfo = e.target.parentElement.querySelector('.top-info');
        if (e.target.value.trim() === "") {
            userNameInfo.classList.remove("reboot");
        } else {
            userNameInfo.classList.add("reboot");
        }
    }

    function userAgeInput(e) {
        const userAgeInfo = e.target.parentElement.querySelector('.top-info');
        if (e.target.value.trim() === "") {
            userAgeInfo.classList.remove("reboot");
        } else {
            userAgeInfo.classList.add("reboot");
        }
    }

    function userEmailInput(e) {
        const userEmailInfo = e.target.parentElement.querySelector('.top-info');
        if (e.target.value.trim() === "") {
            userEmailInfo.classList.remove("reboot");
        } else {
            userEmailInfo.classList.add("reboot");
        }
    }

    function userPasswordInput(e) {
        const userPasswordInfo = e.target.parentElement.querySelector('.top-info');
        if (e.target.value.trim() === "") {
            userPasswordInfo.classList.remove("reboot");
        } else {
            userPasswordInfo.classList.add("reboot");
        }
    }

    return (
        <>
            <div className="contact d-flex align-items-center justify-content-center flex-column">
                <h2 className="text-uppercase mt-5 custom-class text-center mb-3 fs-1 fw-bolder">
                    contact section
                </h2>
                <div className="d-flex align-items-center justify-content-center mb-3">
                    <div className="custom-line line me-3"></div>
                    <i className="fa-solid i-star fa-star"></i>
                    <div className="custom-line line ms-3"></div>
                </div>
                <form
                    noValidate
                    className="w-50 p-3 mx-auto my-5 ng-untouched ng-pristine ng-valid"
                >
                    <div className="user-name">
                        <label
                            htmlFor="userName"
                            className="position-relative top-0 top-info"
                        >
                            userName :
                        </label>
                        <input
                            onInput={userNameInput}
                            id="userName"
                            type="text"
                            placeholder="userName"
                            name="userName"
                            className="form-control mb-3 border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid"
                        />
                    </div>

                    <div className="user-age">
                        <label
                            htmlFor="userAge"
                            className="position-relative top-0 top-info"
                        >
                            userAge :
                        </label>
                        <input
                            onInput={userAgeInput}
                            id="userAge"
                            type="text"
                            placeholder="userAge"
                            name="userAge"
                            className="form-control mb-3 border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid"
                        />
                    </div>

                    <div className="user-email">
                        <label
                            htmlFor="userEmail"
                            className="position-relative top-0 top-info"
                        >
                            userEmail :
                        </label>
                        <input
                            onInput={userEmailInput}
                            id="userEmail"
                            type="text"
                            placeholder="userEmail"
                            name="userEmail"
                            className="form-control mb-3 border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid"
                        />
                    </div>

                    <div className="user-password">
                        <label
                            htmlFor="userPassword"
                            className="position-relative top-0 top-info"
                        >
                            userPassword :
                        </label>
                        <input
                            onInput={userPasswordInput}
                            id="userPassword"
                            type="text"
                            placeholder="userPassword"
                            name="userPassword"
                            className="form-control mb-3 border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid"
                        />
                    </div>

                    <button className="btn mt-4 text-white">
                        send Message
                    </button>
                </form>
            </div>
        </>
    );
}
