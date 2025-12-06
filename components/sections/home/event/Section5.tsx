"use client";

import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

export default function Section5() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {/*event-home home section 5*/}
            <section className="event-home-section-5 py-120 overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="position-relative pb-120 d-inline-block">
                                <img className="position-relative z-1 wow img-custom-anim-top" src="/assets/img/event-img/pages/event/page-home/home-section-5/img-1.png" alt="AstraX" />
                                <div className="position-absolute top-0 start-0 translate-middle z-0">
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
                                <div className="position-absolute z-1 top-0 end-0 m-6">
                                    <a
                                        href="#"
                                        className="popup-video pulsate hover-up icon-shape icon-120 rounded-circle bg-primary"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIsOpen(true);
                                        }}
                                    >
                                        <i className="ri-play-fill text-white fs-3" />
                                    </a>
                                </div>
                            </div>
                            <h1 className="text-primary wow img-custom-anim-top">
                                Serve <span className="text-dark"> beautiful, enduring </span> <span className="stroke text-white">good</span> <span className="text-dark">experiences.</span>
                            </h1>
                        </div>
                        <div className="col-lg-6 ps-lg-10">
                            <p className="wow img-custom-anim-top">Our services include comprehensive financial planning, investment management, retirement planning, tax planning, and more. We provide customized solutions that cater.</p>
                            <ul className="list-unstyled pb-120">
                                <li className="d-flex align-items-center mb-3 gap-3" data-aos="fade-up" data-aos-delay={0}>
                                    <div className="position-relative">
                                        <svg className="fill-primary position-absolute top-50 start-50 translate-middle" xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
                                            <path opacity="0.2" d="M17.0711 3.79231C15.1823 1.9036 12.6711 0.863403 10 0.863403C7.32887 0.863403 4.81762 1.9036 2.92891 3.79231C1.04016 5.68106 0 8.19231 0 10.8634C0 13.5345 1.04016 16.0457 2.92891 17.9345C4.81766 19.8232 7.32887 20.8634 10 20.8634C12.6711 20.8634 15.1823 19.8232 17.0711 17.9345C18.9598 16.0457 20 13.5345 20 10.8634C20 8.19231 18.9598 5.6811 17.0711 3.79231ZM10 19.6915C5.13215 19.6915 1.17188 15.7313 1.17188 10.8634C1.17188 5.99555 5.13215 2.03528 10 2.03528C14.8679 2.03528 18.8281 5.99555 18.8281 10.8634C18.8281 15.7313 14.8679 19.6915 10 19.6915Z" fill="#794AFF" />
                                        </svg>
                                        <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={10} height={8} viewBox="0 0 10 8" fill="none">
                                            <path d="M9.77752 0.654773C9.54873 0.426023 9.17771 0.426023 8.94893 0.654812L3.77475 5.82899L1.05104 3.10528C0.822246 2.87649 0.45123 2.87649 0.222402 3.10528C-0.00642578 3.33407 -0.00642578 3.70509 0.222402 3.93391L3.36041 7.07192C3.47482 7.18634 3.62478 7.24352 3.77471 7.24352C3.92463 7.24352 4.07463 7.1863 4.189 7.07192L9.77752 1.48341C10.0063 1.25462 10.0063 0.883601 9.77752 0.654773Z" fill="#794AFF" />
                                        </svg>
                                    </div>
                                    <p className="mb-0 text-dark fw-bold">Predict, discuss &amp; invent the future wire</p>
                                </li>
                                <li className="d-flex align-items-center mb-3 gap-3" data-aos="fade-up" data-aos-delay={200}>
                                    <div className="position-relative">
                                        <svg className="fill-primary position-absolute top-50 start-50 translate-middle" xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
                                            <path opacity="0.2" d="M17.0711 3.79231C15.1823 1.9036 12.6711 0.863403 10 0.863403C7.32887 0.863403 4.81762 1.9036 2.92891 3.79231C1.04016 5.68106 0 8.19231 0 10.8634C0 13.5345 1.04016 16.0457 2.92891 17.9345C4.81766 19.8232 7.32887 20.8634 10 20.8634C12.6711 20.8634 15.1823 19.8232 17.0711 17.9345C18.9598 16.0457 20 13.5345 20 10.8634C20 8.19231 18.9598 5.6811 17.0711 3.79231ZM10 19.6915C5.13215 19.6915 1.17188 15.7313 1.17188 10.8634C1.17188 5.99555 5.13215 2.03528 10 2.03528C14.8679 2.03528 18.8281 5.99555 18.8281 10.8634C18.8281 15.7313 14.8679 19.6915 10 19.6915Z" fill="#794AFF" />
                                        </svg>
                                        <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={10} height={8} viewBox="0 0 10 8" fill="none">
                                            <path d="M9.77752 0.654773C9.54873 0.426023 9.17771 0.426023 8.94893 0.654812L3.77475 5.82899L1.05104 3.10528C0.822246 2.87649 0.45123 2.87649 0.222402 3.10528C-0.00642578 3.33407 -0.00642578 3.70509 0.222402 3.93391L3.36041 7.07192C3.47482 7.18634 3.62478 7.24352 3.77471 7.24352C3.92463 7.24352 4.07463 7.1863 4.189 7.07192L9.77752 1.48341C10.0063 1.25462 10.0063 0.883601 9.77752 0.654773Z" fill="#794AFF" />
                                        </svg>
                                    </div>
                                    <p className="mb-0 text-dark fw-bold">Highlights of the program</p>
                                </li>
                                <li className="d-flex align-items-center mb-3 gap-3" data-aos="fade-up" data-aos-delay={400}>
                                    <div className="position-relative">
                                        <svg className="fill-primary position-absolute top-50 start-50 translate-middle" xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
                                            <path opacity="0.2" d="M17.0711 3.79231C15.1823 1.9036 12.6711 0.863403 10 0.863403C7.32887 0.863403 4.81762 1.9036 2.92891 3.79231C1.04016 5.68106 0 8.19231 0 10.8634C0 13.5345 1.04016 16.0457 2.92891 17.9345C4.81766 19.8232 7.32887 20.8634 10 20.8634C12.6711 20.8634 15.1823 19.8232 17.0711 17.9345C18.9598 16.0457 20 13.5345 20 10.8634C20 8.19231 18.9598 5.6811 17.0711 3.79231ZM10 19.6915C5.13215 19.6915 1.17188 15.7313 1.17188 10.8634C1.17188 5.99555 5.13215 2.03528 10 2.03528C14.8679 2.03528 18.8281 5.99555 18.8281 10.8634C18.8281 15.7313 14.8679 19.6915 10 19.6915Z" fill="#794AFF" />
                                        </svg>
                                        <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={10} height={8} viewBox="0 0 10 8" fill="none">
                                            <path d="M9.77752 0.654773C9.54873 0.426023 9.17771 0.426023 8.94893 0.654812L3.77475 5.82899L1.05104 3.10528C0.822246 2.87649 0.45123 2.87649 0.222402 3.10528C-0.00642578 3.33407 -0.00642578 3.70509 0.222402 3.93391L3.36041 7.07192C3.47482 7.18634 3.62478 7.24352 3.77471 7.24352C3.92463 7.24352 4.07463 7.1863 4.189 7.07192L9.77752 1.48341C10.0063 1.25462 10.0063 0.883601 9.77752 0.654773Z" fill="#794AFF" />
                                        </svg>
                                    </div>
                                    <p className="mb-0 text-dark fw-bold">Healthy food &amp; good time with people</p>
                                </li>
                            </ul>
                            <div className="position-relative d-inline-block">
                                <img className="wow img-custom-anim-left" src="/assets/img/event-img/pages/event/page-home/home-section-5/img-2.png" alt="AstraX" />
                                <div className="position-absolute start-md-100 start-50 top-0 translate-middle">
                                    <h1 className="stroke-primary text-white fs-128 mb-0" data-aos="fade-left" data-aos-delay={1400}>
                                        2025
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ModalVideo channel="youtube" isOpen={isOpen} videoId="2GOTlI8pYeo" onClose={() => setIsOpen(false)} />
        </>
    );
}
