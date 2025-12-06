"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import SwiperPadding from "@/components/elements/BoxSwiperPadding";
import Link from "next/link";

const swiperOptions = {
    modules: [Autoplay, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
};
export default function Section1() {
    return (
        <>
            {/*digital-agency home section 1*/}
            <SwiperPadding rootSelector=".swipper-root-1" targetSelector=".box-swiper-padding-1" />
            <section className="digital-agency-home-section-1 position-relative overflow-hidden">
                <div className="container pt-100 pb-100">
                    <div className="row swipper-root-1">
                        <div className="col-lg-5 col-md-12">
                            <h1 className="text-dark text-anime-style-3">
                                We help brands
                                <strong className="position-relative d-md-inline-block">
                                    <span className="position-relative z-1"> businesses </span>
                                    <span className="position-absolute bottom-0 start-0 z-0 d-none d-md-block">
                                        <span className="line1" />
                                    </span>
                                </strong>
                                get fast results on
                                <strong className="position-relative d-md-inline-block">
                                    <span className="position-relative z-1"> market </span>
                                    <span className="position-absolute bottom-0 start-0 z-0 d-none d-md-block">
                                        <span className="line2" />
                                    </span>
                                </strong>
                            </h1>
                        </div>
                        <div className="col-lg-4 mx-lg-auto">
                            <p className="text-anime-style-1">Our services include comprehensive financial planning, investment management, retirement planning, tax planning, and more.</p>
                            <Link href="/contact" className="btn btn-outline-dark mt-6">
                                <span>let’s talk</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                    <g clipPath="url(#clip0_1172_1474)">
                                        <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="#24222C" />
                                    </g>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="box-swiper-padding-1 position-relative">
                    <div className="position-absolute bottom-0 start-0 w-100 h-50 bg-light" />
                    <Swiper {...swiperOptions} className="swiper slider-1 wow img-custom-anim-right">
                        <div className="swiper-wrapper">
                            <SwiperSlide>
                                <img className="w-100" src="/assets/img/digital-agency-img/pages/digital-agency/page-home/home-section-1/img-1.png" alt="AstraX" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="w-100" src="/assets/img/digital-agency-img/pages/digital-agency/page-home/home-section-1/img-1.png" alt="AstraX" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="w-100" src="/assets/img/digital-agency-img/pages/digital-agency/page-home/home-section-1/img-1.png" alt="AstraX" />
                            </SwiperSlide>
                        </div>
                    </Swiper>
                </div>
            </section>
        </>
    );
}
