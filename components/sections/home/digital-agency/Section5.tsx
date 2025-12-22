"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import SwiperPadding from "@/components/elements/BoxSwiperPadding";
import Link from "next/link";
const swiperOptions = {
    modules: [Autoplay, Navigation],
    slidesPerView: 4,
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
            slidesPerView: 2,
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
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
};
export default function Section5() {
    return (
        <>
            {/*digital-agency home section 5*/}
            <SwiperPadding rootSelector=".swipper-root-2" targetSelector=".box-swiper-padding-2" />
            <section className="digital-agency-home-section-5 position-relative overflow-hidden bg-light py-120">
                <div className="container">
                    <div className="row">
                        <div className="swipper-root-2">
                            <span className="mb-3 bg-primary rounded-pill border border-dark btn-text d-md-inline-block px-3 py-2">
                                <span className="text-dark">testimonials</span>
                            </span>
                            <div className="d-flex flex-wrap flex-md-nowrap gap-4 align-items-center justify-content-between">
                                <h2 className="text-dark mt-3 mb-0 text-anime-style-3">
                                    Hear what our customers <br />
                                    love about.
                                </h2>
                                <div className="position-relative">
                                    <div className="h-100 d-flex align-items-center gap-5 position-relative z-1">
                                        <div className="swiper-button-prev mt-0 position-relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                <g clipPath="url(#clip0_349_1382)">
                                                    <path d="M4.18271 3.80852L4.99823e-08 7.99998L4.18271 12.1914L5.06751 11.3084L2.3896 8.62497L16 8.62497L16 7.37498L2.3896 7.37498L5.06751 4.69148L4.18271 3.80852Z" fill="#292929" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="swiper-button-next mt-0 position-relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                <g clipPath="url(#clip0_349_1381)">
                                                    <path d="M11.8173 12.1915L16 8.00002L11.8173 3.80859L10.9325 4.69155L13.6104 7.37503L-1.55894e-07 7.37503L-2.10532e-07 8.62502L13.6104 8.62502L10.9325 11.3085L11.8173 12.1915Z" fill="#292929" />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-80">
                    <div className="col-12 position-relative">
                        <div className="box-swiper-padding-2">
                            {/* Swiper */}
                            <Swiper {...swiperOptions} className="swiper slider-4">
                                <div className="swiper-wrapper z-1">
                                    <SwiperSlide className="swiper-slide me-7 ">
                                        <div className="card-testimonial border border-dark p-5 rounded-4 bg-white wow fadeInUp2 mb-2" data-wow-delay=".2s">
                                            <div className="d-flex gap-2">
                                                <i className="bi bi-star-fill fs-10" />
                                                <i className="bi bi-star-fill fs-10" />
                                                <i className="bi bi-star-fill fs-10" />
                                                <i className="bi bi-star-fill fs-10" />
                                                <i className="bi bi-star-fill fs-10" />
                                            </div>
                                            <h6 className="fs-20 mt-3 mb-4">Regular Updates &amp; Backups</h6>
                                            <p className="mb-0">" XzectLabs provides exceptional regular updates and backup services. Their automated backup system gives us complete peace of mind. We never worry about data loss, and their timely updates keep our website running smoothly with the latest features and security patches. "</p>
                                            <div className="d-flex align-items-center mt-5">
                                                <Link href="#">
                                                    <img className="rounded-circle icon-shape icon-50" src="/assets/img/digital-agency-img/pages/digital-agency/page-home/home-section-5/author-1.png" alt="AstraX" />
                                                </Link>
                                                <div className="text-start ms-3">
                                                    <Link href="#">
                                                        <span className="fw-semibold">Juliana P. Taylor</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide me-7 ">
                                        <div className="card-testimonial border border-dark p-5 rounded-4 bg-white wow fadeInUp2 mb-2" data-wow-delay=".4s">
                                            <div className="d-flex gap-2">
                                                <i className="bi bi-star-fill fs-10" />
                                                <i className="bi bi-star-fill fs-10" />
                                                <i className="bi bi-star-fill fs-10" />
                                                <i className="bi bi-star-fill fs-10" />
                                                <i className="bi bi-star-fill fs-10" />
                                            </div>
                                            <h6 className="fs-20 mt-3 mb-4">Security Fixes &amp; Malware Protection</h6>
                                            <p className="mb-0">" The security and malware protection services from XzectLabs are outstanding. They proactively monitor our website, fix vulnerabilities immediately, and protect us from threats. Our site has been completely secure since partnering with them, and we feel confident our data is safe. "</p>
                                            <div className="d-flex align-items-center mt-5">
                                                <Link href="#">
                                                    <img className="rounded-circle icon-shape icon-50" src="/assets/img/digital-agency-img/pages/digital-agency/page-home/home-section-5/author-2.png" alt="AstraX" />
                                                </Link>
                                                <div className="text-start ms-3">
                                                    <Link href="#">
                                                        <span className="fw-semibold">Olivia R. Bennett</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide me-7 ">
                                        <div className="card-testimonial border border-dark p-5 rounded-4 bg-white wow fadeInUp2 mb-2" data-wow-delay=".6s">
                                            <div className="d-flex gap-2">
                                                <i className="bi bi-star-fill fs-10" />
                                                <i className="bi bi-star-fill fs-10" />
                                                <i className="bi bi-star-fill fs-10" />
                                                <i className="bi bi-star-fill fs-10" />
                                                <i className="bi bi-star-fill fs-10" />
                                            </div>
                                            <h6 className="fs-20 mt-3 mb-4">Content &amp; Product Updates</h6>
                                            <p className="mb-0">" XzectLabs handles all our content and product updates efficiently. They keep our website fresh with new content, update product information promptly, and ensure everything is accurate and up-to-date. Their attention to detail and quick turnaround time is impressive. "</p>
                                            <div className="d-flex align-items-center mt-5">
                                                <Link href="#">
                                                    <img className="rounded-circle icon-shape icon-50" src="/assets/img/digital-agency-img/pages/digital-agency/page-home/home-section-5/author-3.png" alt="AstraX" />
                                                </Link>
                                                <div className="text-start ms-3">
                                                    <Link href="#">
                                                        <span className="fw-semibold">Natalia T. Morgan</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide me-7 ">
                                        <div className="card-testimonial border border-dark p-5 rounded-4 bg-white wow fadeInUp2 mb-2" data-wow-delay=".8s">
                                            <div className="d-flex gap-2">
                                                <i className="bi bi-star-fill fs-10" />
                                                <i className="bi bi-star-fill fs-10" />
                                                <i className="bi bi-star-fill fs-10" />
                                                <i className="bi bi-star-fill fs-10" />
                                                <i className="bi bi-star-fill fs-10" />
                                            </div>
                                            <h6 className="fs-20 mt-3 mb-4">Regular Updates &amp; Backups</h6>
                                            <p className="mb-0">" Their backup and update services are reliable and professional. We appreciate the regular communication about updates and the seamless backup restoration process. XzectLabs has made website maintenance effortless for our team. "</p>
                                            <div className="d-flex align-items-center mt-5">
                                                <Link href="#">
                                                    <img className="rounded-circle icon-shape icon-50" src="/assets/img/digital-agency-img/pages/digital-agency/page-home/home-section-5/author-4.png" alt="AstraX" />
                                                </Link>
                                                <div className="text-start ms-3">
                                                    <Link href="#">
                                                        <span className="fw-semibold">Amelia K. Hamilton</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide me-7 ">
                                        <div className="card-testimonial border border-dark p-5 rounded-4 bg-white wow fadeInUp2 mb-2" data-wow-delay=".10s">
                                            <div className="d-flex gap-2">
                                                <i className="bi bi-star-fill fs-10" />
                                                <i className="bi bi-star-fill fs-10" />
                                                <i className="bi bi-star-fill fs-10" />
                                                <i className="bi bi-star-fill fs-10" />
                                                <i className="bi bi-star-fill fs-10" />
                                            </div>
                                            <h6 className="fs-20 mt-3 mb-4">Security Fixes &amp; Malware Protection</h6>
                                            <p className="mb-0">" After experiencing a security breach, XzectLabs came to our rescue. They cleaned our site, implemented robust security measures, and now provide continuous monitoring. Our website has been completely secure, and we couldn't be happier with their protection services. "</p>
                                            <div className="d-flex align-items-center mt-5">
                                                <Link href="#">
                                                    <img className="rounded-circle icon-shape icon-50" src="/assets/img/digital-agency-img/pages/digital-agency/page-home/home-section-5/author-2.png" alt="AstraX" />
                                                </Link>
                                                <div className="text-start ms-3">
                                                    <Link href="#">
                                                        <span className="fw-semibold">Olivia R. Bennett</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
                {/* Swiper JS */}
            </section>
        </>
    );
}
