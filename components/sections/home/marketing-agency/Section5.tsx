"use client";

import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import Link from "next/link";

export default function Section5() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/*marketing-agency-home home section 5*/}
            <section className="marketing-agency-home-section-5 position-relative overflow-hidden py-120">
                <div className="position-relative d-flex align-items-center justify-content-center">
                    <div className="position-absolute top-0 start-50 translate-middle z-2 bg-white icon-shape icon-160 rounded-circle border border-primary">
                        <Link
                            href="#"
                            className="popup-video w-100"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsOpen(true);
                            }}
                        >
                            <i className="ri-play-fill text-dark fs-3" />
                        </Link>
                        <div className="position-absolute top-50 start-50 translate-middle w-100">
                            <h6 className="circle-text rotateme text-dark fw-semibold">
                                <span>/ play /</span>
                                <span>play /</span>
                                <span>play /</span>
                                <span>play /</span>
                                <span>play /</span>
                                <span>play /</span>
                                <span>/</span>
                            </h6>
                        </div>
                    </div>
                    <img className="wow img-custom-anim-top" src="/assets/img/marketing-agency-img/pages/marketing-agency/page-home/home-section-5/img-bg.png" alt="AstraX" />
                </div>
            </section>
            <ModalVideo channel="youtube" isOpen={isOpen} videoId="2GOTlI8pYeo" onClose={() => setIsOpen(false)} />
        </>
    );
}
