"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Thumbs } from "swiper/modules";
import SwiperCore from "swiper";
import Link from "next/link";

export default function Section7() {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

    return (
        <>
            {/*event-home section 7*/}
            <section className="event-home-section-7 position-relative overflow-hidden pt-120 pb-120">
                <div className="container position-relative">
                    <div className="mb-80">
                        <span data-aos="zoom-in" className="fs-7 text-uppercase text-primary d-inline-block px-3 py-1 border border-primary border-opacity-25 fw-semibold mb-3">
                            testimonials
                        </span>
                        <div className="d-flex flex-wrap align-items-center justify-content-between">
                            <h1 className="text-primary wow img-custom-anim-left">
                                Cyborg <span className="text-dark"> day </span> <span className="stroke text-white">fantasies</span> <br />
                                <span className="text-dark">waiting for you.</span>
                            </h1>
                            <div className="position-relative">
                                <div className="position-relative bg-white icon-shape icon-160 rounded-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={46} height={35} viewBox="0 0 46 35" fill="none">
                                        <g clipPath="url(#clip0_652_1729)">
                                            <path d="M46 35L46 0.714283L28.8571 17.8571L28.8571 35L46 35Z" fill="#1AAA59" />
                                            <path d="M17.4297 35L17.4297 0.714283L0.28683 17.8571L0.286829 35L17.4297 35Z" fill="#1AAA59" />
                                        </g>
                                    </svg>
                                    <div className="position-absolute top-50 start-50 translate-middle w-100">
                                        <h6 className="circle-text rotateme text-dark fw-semibold">got feebacks from guests - since 1990 -</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <Swiper modules={[Autoplay, Pagination, Navigation, Thumbs]} onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={5} freeMode={true} watchSlidesProgress={true} className="gallery-thumbs">
                                <div className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="icon-shape icon-80 rounded-circle overflow-hidden" data-aos="fade-right" data-aos-delay={600}>
                                            <img src="/assets/img/event-img/pages/event/page-home/home-section-7/avatar-1.png" alt="AstraX" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="icon-shape icon-80 rounded-circle overflow-hidden" data-aos="fade-right" data-aos-delay={400}>
                                            <img src="/assets/img/event-img/pages/event/page-home/home-section-7/avatar-2.png" alt="AstraX" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="icon-shape icon-80 rounded-circle overflow-hidden" data-aos="fade-right" data-aos-delay={200}>
                                            <img src="/assets/img/event-img/pages/event/page-home/home-section-7/avatar-3.png" alt="AstraX" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="icon-shape icon-80 rounded-circle overflow-hidden" data-aos="fade-right" data-aos-delay={0}>
                                            <img src="/assets/img/event-img/pages/event/page-home/home-section-7/avatar-4.png" alt="AstraX" />
                                        </div>
                                    </SwiperSlide>
                                </div>
                            </Swiper>
                        </div>
                        <div className="col-lg-9 ms-auto mt-lg-0 mt-8 wow img-custom-anim-right">
                            <Swiper
                                modules={[Autoplay, Pagination, Navigation, Thumbs]}
                                spaceBetween={10}
                                navigation={{
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev",
                                }}
                                thumbs={{ swiper: thumbsSwiper }}
                                className="main-swiper"
                            >
                                <div className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="card__inner">
                                            <div className="d-flex gap-1 mb-4">
                                                <i className="fa-solid fa-star fs-10 text-primary" />
                                                <i className="fa-solid fa-star fs-10 text-primary" />
                                                <i className="fa-solid fa-star fs-10 text-primary" />
                                                <i className="fa-solid fa-star fs-10 text-primary" />
                                                <i className="fa-solid fa-star fs-10 text-primary" />
                                            </div>
                                            <h5 className="border-bottom pb-8">“Ouroffice is something we are pleased with. We consider it the little magnet; it is wanting to come here and afterward difficult to leave it.”</h5>
                                            <p className="fs-7 mb-0 mt-4">
                                                CEO Of <span className="text-primary fw-bold">Google</span>
                                            </p>
                                            <Link href="#">
                                                <span className="fs-18 text-dark fw-bold">Amelia K. Hamilton</span>
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card__inner">
                                            <div className="d-flex gap-1 mb-4">
                                                <i className="fa-solid fa-star fs-10 text-primary" />
                                                <i className="fa-solid fa-star fs-10 text-primary" />
                                                <i className="fa-solid fa-star fs-10 text-primary" />
                                                <i className="fa-solid fa-star fs-10 text-primary" />
                                                <i className="fa-solid fa-star fs-10 text-primary" />
                                            </div>
                                            <h5 className="border-bottom pb-8">“Ouroffice is something we are pleased with. We consider it the little magnet; it is wanting to come here and afterward difficult to leave it.”</h5>
                                            <p className="fs-7 mb-0 mt-4">
                                                CEO Of <span className="text-primary fw-bold">Google</span>
                                            </p>
                                            <Link href="#">
                                                <span className="fs-18 text-dark fw-bold">Amelia K. Hamilton</span>
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card__inner">
                                            <div className="d-flex gap-1 mb-4">
                                                <i className="fa-solid fa-star fs-10 text-primary" />
                                                <i className="fa-solid fa-star fs-10 text-primary" />
                                                <i className="fa-solid fa-star fs-10 text-primary" />
                                                <i className="fa-solid fa-star fs-10 text-primary" />
                                                <i className="fa-solid fa-star fs-10 text-primary" />
                                            </div>
                                            <h5 className="border-bottom pb-8">“Ouroffice is something we are pleased with. We consider it the little magnet; it is wanting to come here and afterward difficult to leave it.”</h5>
                                            <p className="fs-7 mb-0 mt-4">
                                                CEO Of <span className="text-primary fw-bold">Google</span>
                                            </p>
                                            <Link href="#">
                                                <span className="fs-18 text-dark fw-bold">Amelia K. Hamilton</span>
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card__inner">
                                            <div className="d-flex gap-1 mb-4">
                                                <i className="fa-solid fa-star fs-10 text-primary" />
                                                <i className="fa-solid fa-star fs-10 text-primary" />
                                                <i className="fa-solid fa-star fs-10 text-primary" />
                                                <i className="fa-solid fa-star fs-10 text-primary" />
                                                <i className="fa-solid fa-star fs-10 text-primary" />
                                            </div>
                                            <h5 className="border-bottom pb-8">“Ouroffice is something we are pleased with. We consider it the little magnet; it is wanting to come here and afterward difficult to leave it.”</h5>
                                            <p className="fs-7 mb-0 mt-4">
                                                CEO Of <span className="text-primary fw-bold">Google</span>
                                            </p>
                                            <Link href="#">
                                                <span className="fs-18 text-dark fw-bold">Amelia K. Hamilton</span>
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
