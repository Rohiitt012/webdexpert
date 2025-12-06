"use client";

import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import Link from "next/link";

export default function Section1() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {/*logistics-home section 1*/}
            <section className="logistics-home-section-1 overflow-hidden">
                <div className="position-relative pb-120 pt-150">
                    <div className="container">
                        <div className="d-flex align-items-center gap-3" data-aos="fade-left" data-aos-delay={200}>
                            <div className="d-none d-md-block">
                                <span className="icon-shape icon-60 bg-primary rounded-circle">
                                    <i className="fa-solid fa-arrow-right-long text-white rotate-45" />
                                </span>
                            </div>
                            <h1 className="stroke-2 text-white fs-128 text-start pb-2 mb-0">Transport</h1>
                        </div>
                    </div>
                    <div className="position-relative text-center bg-img-logistic" data-aos="flip-right" data-background="/assets/img/logistics-img/pages/logistics/page-home/home-section-1/img-bg.png">
                        <div className="container w-100 h-100 position-absolute top-50 start-50 translate-middle">
                            <h1 className="fs-128 text-white text-start text-nowrap text-anime-style-2">&amp; logistics</h1>
                        </div>
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
                    </div>
                    <div className="d-flex flex-wrap">
                        <div className="logo-logistics w-lg-20 w-md-25 w-50 d-flex align-items-center justify-content-center bg-white border-end border-bottom" />
                        <div className="logo-logistics w-lg-20 w-md-25 w-50 d-flex align-items-center justify-content-center bg-primary border-end border-bottom position-relative">
                            <div className="position-absolute top-50 end-0 translate-middle-y pe-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width={127} height={146} viewBox="0 0 127 146" fill="none">
                                    <g opacity="0.06" clipPath="url(#clip0_605_1777)">
                                        <path d="M12.0958 116.451V43.5573L63.4946 14.0142L114.906 43.5573V102.437L63.4946 131.986L36.2857 116.344V57.6773L63.4946 42.037L90.7143 57.6773V88.3154L63.4946 103.957L60.4774 102.224V71.801L75.6847 63.0556L63.4946 56.0512L48.3816 64.7437V109.281L63.4946 117.972L102.81 95.3727V50.62L63.4946 28.0283L24.1917 50.62V123.401L63.4946 146L127 109.5V36.5L63.4946 0L0 36.5V109.5L12.0958 116.451Z" fill="white" />
                                    </g>
                                </svg>
                            </div>
                            <h6 className="text-white mb-0 text-center text-anime-style-2">
                                100m+
                                <span className="fw-regular">
                                    bakers <br />
                                    with us
                                </span>
                            </h6>
                        </div>
                        <div className="logo-logistics w-lg-20 w-md-25 w-50 d-flex align-items-center justify-content-center bg-white border-end border-bottom">
                            <Link href="#">
                                <img data-aos="zoom-in" data-aos-delay={400} src="/assets/img/logistics-img/pages/logistics/page-home/home-section-1/logo-1.png" alt="AstraX" />
                            </Link>
                        </div>
                        <div className="logo-logistics w-lg-20 w-md-25 w-50 d-flex align-items-center justify-content-center bg-white border-end border-bottom">
                            <Link href="#">
                                <img data-aos="zoom-in" data-aos-delay={600} src="/assets/img/logistics-img/pages/logistics/page-home/home-section-1/logo-2.png" alt="AstraX" />
                            </Link>
                        </div>
                        <div className="logo-logistics w-lg-20 w-md-25 w-50 d-flex align-items-center justify-content-center bg-white border-end border-bottom">
                            <Link href="#">
                                <img data-aos="zoom-in" data-aos-delay={800} src="/assets/img/logistics-img/pages/logistics/page-home/home-section-1/logo-3.png" alt="AstraX" />
                            </Link>
                        </div>
                        <div className="logo-logistics w-lg-20 w-md-25 w-50 d-flex align-items-center justify-content-center bg-white border-end border-bottom">
                            <Link href="#">
                                <img data-aos="zoom-in" data-aos-delay={0} src="/assets/img/logistics-img/pages/logistics/page-home/home-section-1/logo-4.png" alt="AstraX" />
                            </Link>
                        </div>
                        <div className="logo-logistics w-lg-20 w-md-25 w-50 d-flex align-items-center justify-content-center bg-white border-end border-bottom">
                            <Link href="#">
                                <img data-aos="zoom-in" data-aos-delay={200} src="/assets/img/logistics-img/pages/logistics/page-home/home-section-1/logo-5.png" alt="AstraX" />
                            </Link>
                        </div>
                        <div className="logo-logistics w-lg-20 w-md-25 w-50 d-flex align-items-center justify-content-center bg-white border-end border-bottom">
                            <Link href="#">
                                <img data-aos="zoom-in" data-aos-delay={400} src="/assets/img/logistics-img/pages/logistics/page-home/home-section-1/logo-6.png" alt="AstraX" />
                            </Link>
                        </div>
                        <div className="logo-logistics w-lg-20 w-md-25 w-50 d-flex align-items-center justify-content-center bg-white border-end border-bottom">
                            <Link href="#">
                                <img data-aos="zoom-in" data-aos-delay={600} src="/assets/img/logistics-img/pages/logistics/page-home/home-section-1/logo-7.png" alt="AstraX" />
                            </Link>
                        </div>
                        <div className="logo-logistics w-lg-20 w-md-25 w-50 d-flex align-items-center justify-content-center bg-white border-end border-bottom">
                            <Link href="#">
                                <img data-aos="zoom-in" data-aos-delay={800} src="/assets/img/logistics-img/pages/logistics/page-home/home-section-1/logo-8.png" alt="AstraX" />
                            </Link>
                        </div>
                        <div className="logo-logistics w-lg-20 w-md-25 w-50 d-flex align-items-center justify-content-center bg-white border-end border-bottom">
                            <Link href="#">
                                <img data-aos="zoom-in" data-aos-delay={0} src="/assets/img/logistics-img/pages/logistics/page-home/home-section-1/logo-9.png" alt="AstraX" />
                            </Link>
                        </div>
                        <div className="logo-logistics w-lg-20 w-md-25 w-50 d-flex align-items-center justify-content-center bg-white border-end border-bottom">
                            <Link href="#">
                                <img data-aos="zoom-in" data-aos-delay={200} src="/assets/img/logistics-img/pages/logistics/page-home/home-section-1/logo-10.png" alt="AstraX" />
                            </Link>
                        </div>
                        <div className="logo-logistics w-lg-20 w-md-25 w-50 d-flex align-items-center justify-content-center bg-white border-end border-bottom">
                            <Link href="#">
                                <img data-aos="zoom-in" data-aos-delay={400} src="/assets/img/logistics-img/pages/logistics/page-home/home-section-1/logo-11.png" alt="AstraX" />
                            </Link>
                        </div>
                        <div className="logo-logistics w-lg-20 w-md-25 w-50 d-flex align-items-center justify-content-center bg-white border-end border-bottom">
                            <Link href="#">
                                <img data-aos="zoom-in" data-aos-delay={600} src="/assets/img/logistics-img/pages/logistics/page-home/home-section-1/logo-12.png" alt="AstraX" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <ModalVideo channel="youtube" isOpen={isOpen} videoId="N7L5wlPxZ1o" onClose={() => setIsOpen(false)} />
        </>
    );
}
