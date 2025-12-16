"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import SwiperPadding from "@/components/elements/BoxSwiperPadding";
import Link from "next/link";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    watchOverflow: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 5,
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
export default function Section7() {
    return (
        <>
            {/*conference home section 7*/}
            <section className="conference-home-section-7 pt-120 pb-2">
                <div className="mx-2 wow img-custom-anim-top">
                    <Swiper {...swiperOptions} className="swiper slider-6">
                        <div className="swiper-wrapper z-1">
                            <SwiperSlide>
                                <div className="card-team">
                                    <Link href="#">
                                        <img src="/assets/img/conference-img/pages/conference/page-home/home-section-7/img-1.png" alt="AstraX" />
                                    </Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card-team">
                                    <Link href="#">
                                        <img src="/assets/img/conference-img/pages/conference/page-home/home-section-7/img-2.png" alt="AstraX" />
                                    </Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card-team">
                                    <Link href="#">
                                        <img src="/assets/img/conference-img/pages/conference/page-home/home-section-7/img-3.png" alt="AstraX" />
                                    </Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card-team">
                                    <Link href="#">
                                        <img src="/assets/img/conference-img/pages/conference/page-home/home-section-7/img-4.png" alt="AstraX" />
                                    </Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card-team">
                                    <Link href="#">
                                        <img src="/assets/img/conference-img/pages/conference/page-home/home-section-7/img-1.png" alt="AstraX" />
                                    </Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card-team">
                                    <Link href="#">
                                        <img src="/assets/img/conference-img/pages/conference/page-home/home-section-7/img-4.png" alt="AstraX" />
                                    </Link>
                                </div>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                </div>
            </section>
        </>
    );
}
