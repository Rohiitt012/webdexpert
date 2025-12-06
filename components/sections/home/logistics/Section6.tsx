"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
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
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    },
};

export default function Section6() {
    return (
        <>
            {/*logistics-home section 6*/}
            <section className="logistics-home-section-6 position-relative overflow-hidden z-2">
                <div className="custom-container bg-light py-120">
                    <div className="container">
                        <div className="d-flex align-items-center gap-3" data-aos="fade-left" data-aos-delay={200}>
                            <div className="d-none d-md-block">
                                <span className="icon-shape icon-40 bg-primary rounded-circle">
                                    <i className="fa-solid fa-arrow-right-long text-white rotate-45" />
                                </span>
                            </div>
                            <h2 className="stroke-2 text-light text-start mb-0">Company</h2>
                        </div>
                        <h2 className="text-anime-style-2">service cases</h2>
                        <div className="row">
                            <div className="col-lg-9">
                                <Swiper {...swiperOptions} className="swiper slider-1 overflow-visible mt-80">
                                    <div className="swiper-wrapper overflow-visible">
                                        <SwiperSlide>
                                            <div className="bg-white p-4 flex-lg-nowrap d-flex flex-wrap justify-content-center card-project">
                                                <img className="w-100" src="/assets/img/logistics-img/pages/logistics/page-home/home-section-6/img-1.png" alt="AstraX" />
                                                <div className="card-content px-7 py-5 d-flex flex-column">
                                                    <div className="d-flex gap-5 mb-auto">
                                                        <div>
                                                            <h1 className="mb-0">5.2%</h1>
                                                            <p className="fs-7 fw-medium">ROI Growth</p>
                                                        </div>
                                                        <div>
                                                            <h1 className="mb-0">-9%</h1>
                                                            <p className="fs-7 fw-medium">Money Saved</p>
                                                        </div>
                                                    </div>
                                                    <h5>
                                                        <Link href="/case-study"> Sprint office thing shifting </Link>
                                                    </h5>
                                                    <p className="mb-0">Our services include comprehensive financial planning, investment management, retirement planning, tax plan -ning, and more thing on the way.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="bg-white p-4 flex-lg-nowrap d-flex flex-wrap justify-content-center card-project">
                                                <img className="w-100" src="/assets/img/logistics-img/pages/logistics/page-home/home-section-6/img-2.png" alt="AstraX" />
                                                <div className="card-content px-7 py-5 d-flex flex-column">
                                                    <div className="d-flex gap-5 mb-auto">
                                                        <div>
                                                            <h1 className="mb-0">5.2%</h1>
                                                            <p className="fs-7 fw-medium">ROI Growth</p>
                                                        </div>
                                                        <div>
                                                            <h1 className="mb-0">-9%</h1>
                                                            <p className="fs-7 fw-medium">Money Saved</p>
                                                        </div>
                                                    </div>
                                                    <h5>
                                                        <Link href="/case-study"> Sprint office thing shifting </Link>
                                                    </h5>
                                                    <p className="mb-0">Our services include comprehensive financial planning, investment management, retirement planning, tax plan -ning, and more thing on the way.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="bg-white p-4 flex-lg-nowrap d-flex flex-wrap justify-content-center card-project">
                                                <img className="w-100" src="/assets/img/logistics-img/pages/logistics/page-home/home-section-6/img-3.png" alt="AstraX" />
                                                <div className="card-content px-7 py-5 d-flex flex-column">
                                                    <div className="d-flex gap-5 mb-auto">
                                                        <div>
                                                            <h1 className="mb-0">5.2%</h1>
                                                            <p className="fs-7 fw-medium">ROI Growth</p>
                                                        </div>
                                                        <div>
                                                            <h1 className="mb-0">-9%</h1>
                                                            <p className="fs-7 fw-medium">Money Saved</p>
                                                        </div>
                                                    </div>
                                                    <h5>
                                                        <Link href="/case-study"> Sprint office thing shifting </Link>
                                                    </h5>
                                                    <p className="mb-0">Our services include comprehensive financial planning, investment management, retirement planning, tax plan -ning, and more thing on the way.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="bg-white p-4 flex-lg-nowrap d-flex flex-wrap justify-content-center card-project">
                                                <img className="w-100" src="/assets/img/logistics-img/pages/logistics/page-home/home-section-6/img-2.png" alt="AstraX" />
                                                <div className="card-content px-7 py-5 d-flex flex-column">
                                                    <div className="d-flex gap-5 mb-auto">
                                                        <div>
                                                            <h1 className="mb-0">5.2%</h1>
                                                            <p className="fs-7 fw-medium">ROI Growth</p>
                                                        </div>
                                                        <div>
                                                            <h1 className="mb-0">-9%</h1>
                                                            <p className="fs-7 fw-medium">Money Saved</p>
                                                        </div>
                                                    </div>
                                                    <h5>
                                                        <Link href="/case-study"> Sprint office thing shifting </Link>
                                                    </h5>
                                                    <p className="mb-0">Our services include comprehensive financial planning, investment management, retirement planning, tax plan -ning, and more thing on the way.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
