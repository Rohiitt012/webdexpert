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
    watchOverflow: true,
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

export default function Section1() {
    return (
        <>
            {/*marketing-agency home section 1*/}
            <section className="marketing-agency-home-section-1 position-relative">
                <div className="custom-container position-relative">
                    <div className="socials-group position-absolute top-50 start-0 translate-middle-y d-none d-md-flex z-2">
                        <div className="socials rotate-90 bg-white px-3 py-2 gap-4 rounded-pill d-inline-flex d-flex align-items-center justify-content-center">
                            <Link href="#" className="fs-7">
                                <i className="ri-mail-open-line text-primary" />
                                <span className="@@color-text"> &nbsp; info@astrax.com </span>
                            </Link>
                            <Link href="telto:(123) 456 789 00" className="fs-7">
                                <i className="ri-phone-line text-primary" />
                                <span className="@@color-text"> +(123) 456 789 00 </span>
                            </Link>
                        </div>
                    </div>
                    {/* Swiper */}
                    <Swiper {...swiperOptions} className="swiper slider-1">
                        <div className="swiper-wrapper z-1">
                            <SwiperSlide>
                                <div className="custom-container pt-300 pb-300 position-relative" data-background="/assets/img/marketing-agency-img/pages/marketing-agency/page-home/home-section-1/bg-img.png">
                                    <div className="bg-overlay" />
                                    <div className="container position-relative z-1">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6 col-md-12 px-md-0">
                                                <span className="content-top btn-text text-white d-flex align-items-center text-anime-style-2">
                                                    <div className="line" />
                                                    <span>Since From 1990</span>
                                                </span>
                                                <h3 className="text-white ds-3 mt-3 text-anime-style-2">ROI Digital Marketing Agency</h3>
                                                <Link href="/about" className="btn btn-primary mt-4" data-aos="fade-up" data-aos-delay={200}>
                                                    <span>our expertise</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                        <g clipPath="url(#clip0_964_205)">
                                                            <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                                        </g>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="custom-container pt-300 pb-300 position-relative" data-background="/assets/img/marketing-agency-img/pages/marketing-agency/page-home/home-section-1/bg-img.png">
                                    <div className="bg-overlay" />
                                    <div className="container position-relative z-1">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6 col-md-12 px-md-0">
                                                <span className="content-top btn-text text-white d-flex align-items-center">
                                                    <div className="line" />
                                                    <span>Since From 1990</span>
                                                </span>
                                                <h3 className="text-white ds-3 mt-3">ROI Digital Marketing Agency</h3>
                                                <Link href="/about" className="btn btn-primary mt-4">
                                                    <span>our expertise</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                        <g clipPath="url(#clip0_964_205)">
                                                            <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                                        </g>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="custom-container pt-300 pb-300 position-relative" data-background="/assets/img/marketing-agency-img/pages/marketing-agency/page-home/home-section-1/bg-img.png">
                                    <div className="bg-overlay" />
                                    <div className="container position-relative z-1">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6 col-md-12 px-md-0">
                                                <span className="content-top btn-text text-white d-flex align-items-center">
                                                    <div className="line" />
                                                    <span>Since From 1990</span>
                                                </span>
                                                <h3 className="text-white ds-3 mt-3">ROI Digital Marketing Agency</h3>
                                                <Link href="/about" className="btn btn-primary mt-4">
                                                    <span>our expertise</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                        <g clipPath="url(#clip0_964_205)">
                                                            <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                                        </g>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="custom-container pt-300 pb-300 position-relative" data-background="/assets/img/marketing-agency-img/pages/marketing-agency/page-home/home-section-1/bg-img.png">
                                    <div className="bg-overlay" />
                                    <div className="container position-relative z-1">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6 col-md-12 px-md-0">
                                                <span className="content-top btn-text text-white d-flex align-items-center">
                                                    <div className="line" />
                                                    <span>Since From 1990</span>
                                                </span>
                                                <h3 className="text-white ds-3 mt-3">ROI Digital Marketing Agency</h3>
                                                <Link href="/about" className="btn btn-primary mt-4">
                                                    <span>our expertise</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                        <g clipPath="url(#clip0_964_205)">
                                                            <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                                        </g>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                </div>
            </section>
        </>
    );
}
