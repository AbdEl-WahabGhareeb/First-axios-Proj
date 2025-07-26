import React from 'react';
import notFoundVideo from "../../assets/error.mp4";

export default function Notfound() {
    return (
        <div className="vh-100 d-flex justify-content-center align-items-center bg-dark">
            <video
                src={notFoundVideo}
                autoPlay
                loop
                className="w-100"
                style={{ maxHeight: '100vh', objectFit: 'contain' }}
            />
        </div>
    );
}
