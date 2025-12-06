"use client";

import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import Link from "next/link";

export default function Section1() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/*news-magazine home section 1*/}
            <section className="news-magazine-home-section-1 position-relative">
                <div className="container pt-6 pb-80">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="card-article position-relative mb-4">
                                <img className="w-100" src="/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-1/img-1.png" alt="AstraX" />
                                <div className="position-absolute top-0 start-0 m-8 translate-middle z-2">
                                    <Link
                                        href="#"
                                        className="d-inline-flex fs-7 fw-semibold align-items-center bg-primary rounded-circle popup-video hover-up play-btn icon-shape icon-xxl"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIsOpen(true);
                                        }}
                                    >
                                        <i className="fa-solid fa-play text-white" />
                                    </Link>
                                </div>
                                <div className="card-article-content position-absolute bottom-0 start-50 w-100 translate-middle-x p-6">
                                    <div className="d-flex align-items-center gap-2">
                                        <span className="dot-primary" />
                                        <span className="fs-8 text-uppercase fw-medium text-white">Active</span>
                                    </div>
                                    <Link href="#">
                                        <h4 className="text-white mt-md-4 mt-2 d-none d-md-block">Secrets of viral content social media marketing solution anyway.</h4>
                                        <h4 className="text-white fs-6 mt-md-4 mt-2 d-md-none">Secrets of viral content social media marketing solution anyway.</h4>
                                    </Link>
                                    <div className="d-flex card-article-information mt-md-5 mt-2 gap-3">
                                        <div className="information-author d-flex align-items-center gap-1">
                                            <span className="fs-8 text-white opacity-50">By</span>
                                            <Link href="#" className="mb-0 fs-8 text-white">
                                                Amelia K. Hamilton
                                            </Link>
                                        </div>
                                        <div className="vertical-line" />
                                        <div className="d-flex align-items-center gap-1">
                                            <p className="mb-0 fs-8 text-white">Dec 29, 2025</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-4">
                                <div className="col-lg-6 ">
                                    <div className="d-flex flex-column flex-lg-row flex-column-reverse gap-3 borer border-bottom border-lg-0 pb-3 pb-lg-0">
                                        <div>
                                            <div className="d-flex align-items-center gap-3">
                                                <span className="dot-primary" />
                                                <span className="fs-8 text-uppercase fw-medium">Bootstrap</span>
                                            </div>
                                            <Link href="#">
                                                <h4 className="fw-semibold fs-6 mt-2 mb-1">Exploring Street Art: The Voice of Urban Expression</h4>
                                            </Link>
                                            <div className="d-flex card-article-information mt-2 gap-3">
                                                <div className="information-author d-flex align-items-center gap-1">
                                                    <span className="opacity-50 fs-8">By</span>
                                                    <Link href="#" className="mb-0 fs-8">
                                                        Victoria L. Davis
                                                    </Link>
                                                </div>
                                                <div className="vertical-line" />
                                                <div className="d-flex align-items-center gap-1">
                                                    <p className="mb-0 fs-8">Dec 29, 2025</p>
                                                </div>
                                            </div>
                                        </div>
                                        <Link href="#" className="img-card w-lg-25">
                                            <img className="w-100" src="/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-1/img-4.png" alt="AstraX" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className=" d-flex flex-column flex-lg-row flex-column-reverse gap-3">
                                        <div>
                                            <div className="d-flex align-items-center gap-3">
                                                <span className="dot-primary" />
                                                <span className="fs-8 text-uppercase fw-medium">Tech</span>
                                            </div>
                                            <Link href="#">
                                                <h4 className="fw-semibold fs-6 mt-2 mb-1">Iconic Film Directors and Their Influence on Cinema</h4>
                                            </Link>
                                            <div className="d-flex card-article-information mt-2 gap-3">
                                                <div className="information-author d-flex align-items-center gap-1">
                                                    <span className="opacity-50 fs-8">By</span>
                                                    <Link href="#" className="mb-0 fs-8">
                                                        Eliana M. Thompson
                                                    </Link>
                                                </div>
                                                <div className="vertical-line" />
                                                <div className="d-flex align-items-center gap-1">
                                                    <p className="mb-0 fs-8">Dec 29, 2025</p>
                                                </div>
                                            </div>
                                        </div>
                                        <Link href="#" className="img-card w-lg-25">
                                            <img className="w-100" src="/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-1/img-5.png" alt="AstraX" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-lg-0 mt-5">
                            <div className="card-article position-relative mb-4">
                                <img className="w-100" src="/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-1/img-2.png" alt="AstraX" />
                                <div className="card-article-content position-absolute bottom-0 start-50 w-100 translate-middle-x p-4">
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="dot-primary" />
                                        <span className="fs-8 text-uppercase fw-medium text-white">Tech</span>
                                    </div>
                                    <Link href="#">
                                        <h4 className="fw-semibold fs-6 mt-2 mb-1 text-white">The Magic of Theater: Why Live Performances Still Matter</h4>
                                    </Link>
                                    <div className="d-flex card-article-information mt-2 gap-3">
                                        <div className="information-author d-flex align-items-center gap-1">
                                            <span className="opacity-50 fs-8 text-white">By</span>
                                            <Link href="#" className="mb-0 fs-8 text-white">
                                                Eliana M. Thompson
                                            </Link>
                                        </div>
                                        <div className="vertical-line" />
                                        <div className="d-flex align-items-center gap-1">
                                            <p className="mb-0 fs-8 text-white">Dec 29, 2025</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="article border-bottom mb-2 pb-3">
                                <div className="d-flex align-items-center gap-3">
                                    <span className="dot-primary" />
                                    <span className="fs-8 text-uppercase fw-medium">Nation</span>
                                </div>
                                <Link href="#">
                                    <h4 className="fw-semibold fs-6 mt-2 mb-1">The Future of Live Music: Virtual Concerts and Beyond</h4>
                                </Link>
                                <div className="d-flex card-article-information mt-2 gap-3">
                                    <div className="information-author d-flex align-items-center gap-1">
                                        <span className="opacity-50 fs-8">By</span>
                                        <Link href="#" className="mb-0 fs-8">
                                            Gabriella S. Adams
                                        </Link>
                                    </div>
                                    <div className="vertical-line" />
                                    <div className="d-flex align-items-center gap-1">
                                        <p className="mb-0 fs-8">Dec 29, 2025</p>
                                    </div>
                                </div>
                            </div>
                            <div className="article border-bottom mb-2 pb-3">
                                <div className="d-flex align-items-center gap-3">
                                    <span className="dot-primary" />
                                    <span className="fs-8 text-uppercase fw-medium">Politics</span>
                                </div>
                                <Link href="#">
                                    <h4 className="fw-semibold fs-6 mt-2 mb-1">The Impact of AI on Digital Art and Creativity</h4>
                                </Link>
                                <div className="d-flex card-article-information mt-2 gap-3">
                                    <div className="information-author d-flex align-items-center gap-1">
                                        <span className="opacity-50 fs-8">By</span>
                                        <Link href="#" className="mb-0 fs-8">
                                            Isabella F. Monroe
                                        </Link>
                                    </div>
                                    <div className="vertical-line" />
                                    <div className="d-flex align-items-center gap-1">
                                        <p className="mb-0 fs-8">Dec 29, 2025</p>
                                    </div>
                                </div>
                            </div>
                            <div className="article border-bottom mb-2 pb-3">
                                <div className="d-flex align-items-center gap-3">
                                    <span className="dot-primary" />
                                    <span className="fs-8 text-uppercase fw-medium">Crypto</span>
                                </div>
                                <Link href="#">
                                    <h4 className="fw-semibold fs-6 mt-2 mb-1">Generate a series of can iteratively into we get different number.</h4>
                                </Link>
                                <div className="d-flex card-article-information mt-2 gap-3">
                                    <div className="information-author d-flex align-items-center gap-1">
                                        <span className="opacity-50 fs-8">By</span>
                                        <Link href="#" className="mb-0 fs-8">
                                            Penelope N. Harris
                                        </Link>
                                    </div>
                                    <div className="vertical-line" />
                                    <div className="d-flex align-items-center gap-1">
                                        <p className="mb-0 fs-8">Dec 29, 2025</p>
                                    </div>
                                </div>
                            </div>
                            <div className="article mb-2 pb-3">
                                <div className="d-flex align-items-center gap-3">
                                    <span className="dot-primary" />
                                    <span className="fs-8 text-uppercase fw-medium">Politics</span>
                                </div>
                                <Link href="#">
                                    <h4 className="fw-semibold fs-6 mt-2 mb-1">The Future of Live Music: Virtual Concerts and Beyond</h4>
                                </Link>
                                <div className="d-flex card-article-information mt-2 gap-3">
                                    <div className="information-author d-flex align-items-center gap-1">
                                        <span className="opacity-50 fs-8">By</span>
                                        <Link href="#" className="mb-0 fs-8">
                                            Penelope N. Harris
                                        </Link>
                                    </div>
                                    <div className="vertical-line" />
                                    <div className="d-flex align-items-center gap-1">
                                        <p className="mb-0 fs-8">Dec 29, 2025</p>
                                    </div>
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
