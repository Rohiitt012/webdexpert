"use client";

import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import Link from "next/link";

export default function Section6() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/*news-magazine home section 6*/}
            <section className="news-magazine-home-section-6 position-relative pt-80 bg-secondary-2">
                <div className="container position-relative border-top border-dark border-opacity-10">
                    <h6 className="position-absolute top-50 start-0 ps-2 translate-middle-y bg-secondary-2 pe-5">Social News</h6>
                </div>
                <div className="container pt-8 pb-80">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="card-article position-relative">
                                <img className="w-100" src="/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-5/img-1.png" alt="AstraX" />
                                <div className="position-absolute top-0 start-0 m-md-8 m-7 translate-middle z-2">
                                    <Link
                                        href="#"
                                        className="d-inline-flex fs-7 fw-semibold align-items-center bg-white bg-opacity-25 rounded-circle popup-video play-btn hover-up icon-shape icon-xxl"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIsOpen(true);
                                        }}
                                    >
                                        <i className="fa-solid fa-play text-white" />
                                    </Link>
                                </div>
                                <div className="card-article-content position-absolute bottom-0 start-50 w-100 translate-middle-x p-md-6 p-3">
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="dot-primary" />
                                        <span className="fs-8 text-uppercase fw-medium text-white">social </span>
                                    </div>
                                    <Link href="#">
                                        <h4 className="text-white mt-4 d-none d-md-block">Secrets of viral content social media marketing solutions.</h4>
                                        <h4 className="text-white mt-2 fs-6 d-block d-md-none">Secrets of viral content social media marketing solutions.</h4>
                                    </Link>
                                    <div className="d-flex flex-wrap card-article-information mt-md-5 mt-2 gap-md-3">
                                        <div className="information-author d-flex align-items-center gap-1">
                                            <span className="opacity-50 text-white">By</span>
                                            <Link href="#" className="mb-0 text-white">
                                                Amelia K. Hamilton
                                            </Link>
                                        </div>
                                        <div className="vertical-line" />
                                        <div className="d-flex align-items-center gap-1">
                                            <p className="mb-0 text-white">Dec 29, 2025</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-lg-0 mt-3">
                            <div className="d-flex align-items-center justify-content-between border-bottom border-dark border-opacity-10 mb-3 pb-3">
                                <div>
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="dot-primary" />
                                        <span className="fs-8 text-uppercase fw-medium">social</span>
                                    </div>
                                    <Link href="#">
                                        <h3 className="fw-semibold fs-6 mt-2 mb-1">The Revival of Classical Art in a Digital Age</h3>
                                    </Link>
                                    <div className="d-flex flex-wrap card-article-information mt-2 gap-md-3 gap-1">
                                        <div className="information-author d-flex align-items-center gap-1">
                                            <span className="opacity-50 fs-8 mb-0">By</span>
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
                                <div className="position-relative img-card">
                                    <img src="/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-5/img-2.png" alt="AstraX" />
                                    <div className="position-absolute top-0 end-0 m-3 m-lg-1 z-2">
                                        <Link
                                            href="#"
                                            className="d-inline-flex fs-7 fw-semibold align-items-center bg-white border border-white bg-opacity-25 rounded-circle popup-video play-btn hover-up icon-shape icon-lg"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setIsOpen(true);
                                            }}
                                        >
                                            <i className="fa-solid fa-play text-white" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border-bottom border-dark border-opacity-10 mb-3 pb-3">
                                <div>
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="dot-primary" />
                                        <span className="fs-8 text-uppercase fw-medium">social</span>
                                    </div>
                                    <Link href="#">
                                        <h3 className="fw-semibold fs-6 mt-2 mb-1">The Rise of Indie Films: Why Small Productions Make Big Impact</h3>
                                    </Link>
                                    <div className="d-flex flex-wrap card-article-information mt-2 gap-md-3 gap-1">
                                        <div className="information-author d-flex align-items-center gap-1">
                                            <span className="opacity-50 fs-8 mb-0">By</span>
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
                                <div className="position-relative img-card">
                                    <img src="/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-5/img-3.png" alt="AstraX" />
                                    <div className="position-absolute top-0 end-0 m-3 m-lg-1 z-2">
                                        <Link
                                            href="#"
                                            className="d-inline-flex fs-7 fw-semibold align-items-center bg-white border border-white bg-opacity-25 rounded-circle popup-video play-btn hover-up icon-shape icon-lg"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setIsOpen(true);
                                            }}
                                        >
                                            <i className="fa-solid fa-play text-white" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border-bottom border-dark border-opacity-10 mb-3 pb-3">
                                <div>
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="dot-primary" />
                                        <span className="fs-8 text-uppercase fw-medium">social</span>
                                    </div>
                                    <Link href="#">
                                        <h3 className="fw-semibold fs-6 mt-2 mb-1">Behind the Scenes: How Movies Bring Stories to Life</h3>
                                    </Link>
                                    <div className="d-flex flex-wrap card-article-information mt-2 gap-md-3 gap-1">
                                        <div className="information-author d-flex align-items-center gap-1">
                                            <span className="opacity-50 fs-8 mb-0">By</span>
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
                                <div className="position-relative img-card">
                                    <img src="/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-5/img-4.png" alt="AstraX" />
                                    <div className="position-absolute top-0 end-0 m-3 m-lg-1 z-2">
                                        <Link
                                            href="#"
                                            className="d-inline-flex fs-7 fw-semibold align-items-center bg-white border border-white bg-opacity-25 rounded-circle popup-video play-btn hover-up icon-shape icon-lg"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setIsOpen(true);
                                            }}
                                        >
                                            <i className="fa-solid fa-play text-white" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="dot-primary" />
                                        <span className="fs-8 text-uppercase fw-medium">social</span>
                                    </div>
                                    <Link href="#">
                                        <h3 className="fw-semibold fs-6 mt-2 mb-1">Music and Mental Health: The Healing Power of Sound</h3>
                                    </Link>
                                    <div className="d-flex flex-wrap card-article-information mt-2 gap-md-3 gap-1">
                                        <div className="information-author d-flex align-items-center gap-1">
                                            <span className="opacity-50 fs-8 mb-0">By</span>
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
                                <div className="position-relative img-card">
                                    <img src="/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-5/img5.png" alt="AstraX" />
                                    <div className="position-absolute top-0 end-0 m-3 m-lg-1 z-2">
                                        <Link
                                            href="#"
                                            className="d-inline-flex fs-7 fw-semibold align-items-center bg-white border border-white bg-opacity-25 rounded-circle popup-video play-btn hover-up icon-shape icon-lg"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setIsOpen(true);
                                            }}
                                        >
                                            <i className="fa-solid fa-play text-white" />
                                        </Link>
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
