"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
};

export default function Section6() {
    return (
        <>
            {/*crypto-agency section 6*/}
            <section className="crypto-agency-home-section-6 position-relative bg-dark-2 py-120 z-30">
                <div className="container position-relative z-1">
                    <div className="row flex-wrap align-items-end">
                        <div className="col-lg-6">
                            <span className="border-linear btn-text text-white px-3 py-2 rounded-4">testimonials</span>
                            <h2 className="mt-3 mb-0 text-anime-style-3">Happy users feedback</h2>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 ms-lg-auto text-center mt-3 mt-lg-0">
                            <div className="position-relative mx-auto">
                                <div className="d-inline-flex border border-white border-opacity-25 h-100 d-flex align-items-center gap-1 rounded-pill mx-auto bg-dark-2 position-relative z-1">
                                    <div className="swiper-button-prev mt-0 position-relative border-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <g clipPath="url(#clip0_349_1382)">
                                                <path d="M4.18271 3.80852L4.99823e-08 7.99998L4.18271 12.1914L5.06751 11.3084L2.3896 8.62497L16 8.62497L16 7.37498L2.3896 7.37498L5.06751 4.69148L4.18271 3.80852Z" fill="#292929" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="swiper-pagination position-relative top-0 bottom-0 mb-1" />
                                    <div className="swiper-button-next mt-0 position-relative border-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <g clipPath="url(#clip0_349_1381)">
                                                <path d="M11.8173 12.1915L16 8.00002L11.8173 3.80859L10.9325 4.69155L13.6104 7.37503L-1.55894e-07 7.37503L-2.10532e-07 8.62502L13.6104 8.62502L10.9325 11.3085L11.8173 12.1915Z" fill="#292929" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <span className="border-top border-white opacity-25 position-absolute top-50 start-50 translate-middle w-100 z-0" />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-80">
                        {/* Swiper */}
                        <Swiper {...swiperOptions} className="swiper slider-3 wow img-custom-anim-top">
                            <div className="swiper-wrapper z-1">
                                <SwiperSlide>
                                    <div className="card-service border-linear-primary p-5 rounded-4">
                                        <div className="d-flex gap-2">
                                            <i className="bi bi-star-fill text-primary fs-10" />
                                            <i className="bi bi-star-fill text-primary fs-10" />
                                            <i className="bi bi-star-fill text-primary fs-10" />
                                            <i className="bi bi-star-fill text-primary fs-10" />
                                            <i className="bi bi-star-fill text-primary fs-10" />
                                        </div>
                                        <h6 className="fs-20 mt-3 mb-4">Quality service</h6>
                                        <p className="mb-0 text-white opacity-75">“ Hands down one of the best shirts I’ve ever owned. Fits great, feels amazing, seems to stay cool and is somewhat water resistant anyway. “</p>
                                        <div className="d-flex align-items-center mt-5">
                                            <Link href="#">
                                                <img className="rounded-circle icon-shape icon-50" src="/assets/img/crypto-agency-img/pages/crypto-agency/page-home/home-section-6/author-1.png" alt="AstraX" />
                                            </Link>
                                            <div className="text-start ms-3">
                                                <Link href="#">
                                                    <span className="fw-bold text-white">Juliana P. Taylor</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card-service border-linear-primary p-5 rounded-4">
                                        <div className="d-flex gap-2">
                                            <i className="bi bi-star-fill text-primary fs-10" />
                                            <i className="bi bi-star-fill text-primary fs-10" />
                                            <i className="bi bi-star-fill text-primary fs-10" />
                                            <i className="bi bi-star-fill text-primary fs-10" />
                                            <i className="bi bi-star-fill text-primary fs-10" />
                                        </div>
                                        <h6 className="fs-20 mt-3 mb-4">Design support</h6>
                                        <p className="mb-0 text-white opacity-75">“ Hands down one of the best shirts I’ve ever owned. Fits great, feels amazing, seems to stay cool and is somewhat water resistant anyway. “</p>
                                        <div className="d-flex align-items-center mt-5">
                                            <Link href="#">
                                                <img className="rounded-circle icon-shape icon-50" src="/assets/img/crypto-agency-img/pages/crypto-agency/page-home/home-section-6/author-2.png" alt="AstraX" />
                                            </Link>
                                            <div className="text-start ms-3">
                                                <Link href="#">
                                                    <span className="fw-bold text-white">Olivia R. Bennett</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card-service border-linear-primary p-5 rounded-4">
                                        <div className="d-flex gap-2">
                                            <i className="bi bi-star-fill text-primary fs-10" />
                                            <i className="bi bi-star-fill text-primary fs-10" />
                                            <i className="bi bi-star-fill text-primary fs-10" />
                                            <i className="bi bi-star-fill text-primary fs-10" />
                                            <i className="bi bi-star-fill text-primary fs-10" />
                                        </div>
                                        <h6 className="fs-20 mt-3 mb-4">Web development</h6>
                                        <p className="mb-0 text-white opacity-75">“ Hands down one of the best shirts I’ve ever owned. Fits great, feels amazing, seems to stay cool and is somewhat water resistant anyway. “</p>
                                        <div className="d-flex align-items-center mt-5">
                                            <Link href="#">
                                                <img className="rounded-circle icon-shape icon-50" src="/assets/img/crypto-agency-img/pages/crypto-agency/page-home/home-section-6/author-3.png" alt="AstraX" />
                                            </Link>
                                            <div className="text-start ms-3">
                                                <Link href="#">
                                                    <span className="fw-bold text-white">Natalia T. Morgan</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card-service border-linear-primary p-5 rounded-4">
                                        <div className="d-flex gap-2">
                                            <i className="bi bi-star-fill text-primary fs-10" />
                                            <i className="bi bi-star-fill text-primary fs-10" />
                                            <i className="bi bi-star-fill text-primary fs-10" />
                                            <i className="bi bi-star-fill text-primary fs-10" />
                                            <i className="bi bi-star-fill text-primary fs-10" />
                                        </div>
                                        <h6 className="fs-20 mt-3 mb-4">Code quality</h6>
                                        <p className="mb-0 text-white opacity-75">“ Hands down one of the best shirts I’ve ever owned. Fits great, feels amazing, seems to stay cool and is somewhat water resistant anyway. “</p>
                                        <div className="d-flex align-items-center mt-5">
                                            <Link href="#">
                                                <img className="rounded-circle icon-shape icon-50" src="/assets/img/crypto-agency-img/pages/crypto-agency/page-home/home-section-6/author-4.png" alt="AstraX" />
                                            </Link>
                                            <div className="text-start ms-3">
                                                <Link href="#">
                                                    <span className="fw-bold text-white">Amelia K. Hamilton</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                        </Swiper>
                        {/* Swiper JS */}
                    </div>
                    <div className="row text-center justify-content-center mt-7">
                        <p className="text-white text-opacity-50">
                            More than <span className="fw-semibold text-white text-opacity-100">30000+</span> people trust on crypcoin platform!
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
