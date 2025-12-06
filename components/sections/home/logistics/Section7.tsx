"use client";

import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

export default function Section7() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {/*logistics-home section 7*/}
            <section className="logistics-home-section-7 position-relative overflow-hidden pt-120">
                <div className="position-relative text-center img-bg" data-background="/assets/img/logistics-img/pages/logistics/page-home/home-section-7/img-bg.png">
                    <div className="bg-overlay wow img-custom-anim-top" />
                    <div className="position-absolute z-1 top-50 start-50 translate-middle bg-white icon-shape icon-160 rounded-circle border border-primary">
                        <Link
                            href="#"
                            className="popup-video w-100"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsOpen(true);
                            }}
                        >
                            <i className="ri-play-fill text-primary-2 fs-3" />
                        </Link>
                        <div className="position-absolute top-50 start-50 translate-middle w-100">
                            <h6 className="circle-text rotateme text-primary-2 fw-regular">
                                <span className="text-primary-2 fw-regular">/ play /</span>
                                <span className="text-primary-2 fw-regular">play /</span>
                                <span className="text-primary-2 fw-regular">play /</span>
                                <span className="text-primary-2 fw-regular">play /</span>
                                <span className="text-primary-2 fw-regular">play /</span>
                                <span className="text-primary-2 fw-regular">play /</span>
                                <span className="text-primary-2 fw-regular">/</span>
                            </h6>
                        </div>
                    </div>
                    <div className="position-absolute top-0 start-50 translate-middle-x pt-100">
                        <div className="scroll-move-right  d-flex align-items-center gap-5 wow img-custom-anim-top">
                            <h3 className="fs-120 pb-1 stroke-2 text-nowrap text-white">Moving</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width={68} height={78} viewBox="0 0 68 78" fill="none">
                                <g opacity="0.3" clipPath="url(#clip0_624_4706)">
                                    <path d="M6.47651 62.2138V23.2703L33.9971 7.48703L61.5245 23.2703V54.7267L33.9971 70.513L19.4286 62.1562V30.8139L33.9971 22.4581L48.5714 30.8139V47.1822L33.9971 55.5389L32.3816 54.6127V38.3594L40.5241 33.6872L33.9971 29.9452L25.9051 34.5891V58.383L33.9971 63.0259L55.0479 50.9525V27.0436L33.9971 14.974L12.953 27.0436V65.9266L33.9971 78L68 58.5V19.5L33.9971 0L0 19.5V58.5L6.47651 62.2138Z" fill="white" />
                                </g>
                            </svg>
                            <h3 className="fs-120 pb-1 stroke-white text-nowrap text-primary-2">Logitstic</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width={68} height={78} viewBox="0 0 68 78" fill="none">
                                <g opacity="0.3" clipPath="url(#clip0_624_4706)">
                                    <path d="M6.47651 62.2138V23.2703L33.9971 7.48703L61.5245 23.2703V54.7267L33.9971 70.513L19.4286 62.1562V30.8139L33.9971 22.4581L48.5714 30.8139V47.1822L33.9971 55.5389L32.3816 54.6127V38.3594L40.5241 33.6872L33.9971 29.9452L25.9051 34.5891V58.383L33.9971 63.0259L55.0479 50.9525V27.0436L33.9971 14.974L12.953 27.0436V65.9266L33.9971 78L68 58.5V19.5L33.9971 0L0 19.5V58.5L6.47651 62.2138Z" fill="white" />
                                </g>
                            </svg>
                            <h3 className="fs-120 pb-1 stroke-2 text-nowrap text-white">Transport</h3>
                        </div>
                    </div>
                </div>
            </section>
            <ModalVideo channel="youtube" isOpen={isOpen} videoId="N7L5wlPxZ1o" onClose={() => setIsOpen(false)} />
        </>
    );
}
