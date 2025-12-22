"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import Link from "next/link";

export default function Section6() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {/*insurance-consultancy-home section 6*/}
            <section className="insurance-consultancy-home-section-6 position-relative overflow-hidden">
                <div className="container position-relative z-1">
                    <div className="row pt-120 pb-120">
                    </div>
                </div>
                <div className="container text-end">
                    <div className="position-relative d-inline-block">
                        <img className="wow img-custom-anim-left" src="/assets/img/insurance-consultancy-img/pages/insurance-consultancy/page-home/home-section-6/bg-img.png" alt="AstraX" />
                        <div className="position-absolute top-50 start-md-100 start-50 translate-middle bg-white icon-shape icon-160 rounded-circle border border-primary">
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
                    </div>
                </div>
            </section>
            <ModalVideo channel="youtube" isOpen={isOpen} videoId="2GOTlI8pYeo" onClose={() => setIsOpen(false)} />
        </>
    );
}
