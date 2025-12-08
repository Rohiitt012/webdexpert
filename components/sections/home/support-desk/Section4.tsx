"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 30,
    centerSliders: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,\n    watchOverflow: true,
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

export default function Section4() {
    return (
        <>
            {/*support-desk home section 4*/}
            <section className="support-desk-home-section-4 position-relative overflow-hidden bg-secondary">
                <div className="bg-white rounded-top-5 py-120">
                    <div className="container position-relative z-1">
                        <div className="row">
                            <div className="text-center">
                                <span className="btn-text border-bottom border-primary">testimonials</span>
                                <h2 className="text-dark my-3 text-anime-style-3">
                                    Happy users <span className="border-4 border-bottom border-primary">feedback</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-80">
                        <div className="col-12 position-relative">
                            {/* Swiper */}
                            <Swiper {...swiperOptions} className="swiper slider-5">
                                <div className="swiper-wrapper z-1">
                                    <SwiperSlide>
                                        <div className="card-testimonial bg-white bg-opacity-10 p-5 rounded-4 bg-white border" data-aos="fade-up" data-aos-duration={0}>
                                            <div className="position-absolute bottom-0 end-0 me-4 z-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={128} height={112} viewBox="0 0 128 112" fill="none">
                                                    <g clipPath="url(#clip0_349_2561)">
                                                        <path d="M128 112L128 16L80 64L80 112L128 112Z" fill="#F7F7F7" />
                                                        <path d="M48 112L48 16L4.19629e-06 64L0 112L48 112Z" fill="#F7F7F7" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="d-flex gap-2">
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                            </div>
                                            <Link href="#">
                                                <h6 className=" mt-2">100% satisfied</h6>
                                            </Link>
                                            <p className="mb-0 mt-4 ">“ Hands down one of the best shirts I've ever owned. Fits great, feels amazing, seems to stay cool and is somewhat water resistant anyway. “</p>
                                            <div className="d-flex align-items-center mt-5 position-relative z-1">
                                                <Link href="#">
                                                    <img className="rounded-circle icon-shape icon-50" src="/assets/img/support-desk-img/pages/support-desk/page-home/home-section-4/avatar-1.png" alt="AstraX" />
                                                </Link>
                                                <div className="text-start ms-3">
                                                    <Link href="#">
                                                        <span className="btn-text ">Isabella F. Monroe</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card-testimonial bg-white bg-opacity-10 p-5 rounded-4 bg-white border" data-aos="fade-up" data-aos-duration={200}>
                                            <div className="position-absolute bottom-0 end-0 me-4 z-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={128} height={112} viewBox="0 0 128 112" fill="none">
                                                    <g clipPath="url(#clip0_349_2561)">
                                                        <path d="M128 112L128 16L80 64L80 112L128 112Z" fill="#F7F7F7" />
                                                        <path d="M48 112L48 16L4.19629e-06 64L0 112L48 112Z" fill="#F7F7F7" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="d-flex gap-2">
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                            </div>
                                            <Link href="#">
                                                <h6 className=" mt-2">Quality desk</h6>
                                            </Link>
                                            <p className="mb-0 mt-4 ">“ Hands down one of the best shirts I've ever owned. Fits great, feels amazing, seems to stay cool and is somewhat water resistant anyway. “</p>
                                            <div className="d-flex align-items-center mt-5 position-relative z-1">
                                                <Link href="#">
                                                    <img className="rounded-circle icon-shape icon-50" src="/assets/img/support-desk-img/pages/support-desk/page-home/home-section-4/avatar-2.png" alt="AstraX" />
                                                </Link>
                                                <div className="text-start ms-3">
                                                    <Link href="#">
                                                        <span className="btn-text ">Gabriella S. Adams</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card-testimonial bg-white bg-opacity-10 p-5 rounded-4 bg-white border" data-aos="fade-up" data-aos-duration={400}>
                                            <div className="position-absolute bottom-0 end-0 me-4 z-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={128} height={112} viewBox="0 0 128 112" fill="none">
                                                    <g clipPath="url(#clip0_349_2561)">
                                                        <path d="M128 112L128 16L80 64L80 112L128 112Z" fill="#F7F7F7" />
                                                        <path d="M48 112L48 16L4.19629e-06 64L0 112L48 112Z" fill="#F7F7F7" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="d-flex gap-2">
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                            </div>
                                            <Link href="#">
                                                <h6 className=" mt-2">Crm ready</h6>
                                            </Link>
                                            <p className="mb-0 mt-4 ">“ Hands down one of the best shirts I've ever owned. Fits great, feels amazing, seems to stay cool and is somewhat water resistant anyway. “</p>
                                            <div className="d-flex align-items-center mt-5 position-relative z-1">
                                                <Link href="#">
                                                    <img className="rounded-circle icon-shape icon-50" src="/assets/img/support-desk-img/pages/support-desk/page-home/home-section-4/avatar-3.png" alt="AstraX" />
                                                </Link>
                                                <div className="text-start ms-3">
                                                    <Link href="#">
                                                        <span className="btn-text ">Sophia J. Carter</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card-testimonial bg-white bg-opacity-10 p-5 rounded-4 bg-white border" data-aos="fade-up" data-aos-duration={600}>
                                            <div className="position-absolute bottom-0 end-0 me-4 z-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={128} height={112} viewBox="0 0 128 112" fill="none">
                                                    <g clipPath="url(#clip0_349_2561)">
                                                        <path d="M128 112L128 16L80 64L80 112L128 112Z" fill="#F7F7F7" />
                                                        <path d="M48 112L48 16L4.19629e-06 64L0 112L48 112Z" fill="#F7F7F7" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="d-flex gap-2">
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                            </div>
                                            <Link href="#">
                                                <h6 className=" mt-2">Good support</h6>
                                            </Link>
                                            <p className="mb-0 mt-4 ">“ Hands down one of the best shirts I've ever owned. Fits great, feels amazing, seems to stay cool and is somewhat water resistant anyway. “</p>
                                            <div className="d-flex align-items-center mt-5 position-relative z-1">
                                                <Link href="#">
                                                    <img className="rounded-circle icon-shape icon-50" src="/assets/img/support-desk-img/pages/support-desk/page-home/home-section-4/avatar-4.png" alt="AstraX" />
                                                </Link>
                                                <div className="text-start ms-3">
                                                    <Link href="#">
                                                        <span className="btn-text ">Victoria L. Davis</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card-testimonial bg-white bg-opacity-10 p-5 rounded-4 bg-white border" data-aos="fade-up" data-aos-duration={800}>
                                            <div className="position-absolute bottom-0 end-0 me-4 z-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={128} height={112} viewBox="0 0 128 112" fill="none">
                                                    <g clipPath="url(#clip0_349_2561)">
                                                        <path d="M128 112L128 16L80 64L80 112L128 112Z" fill="#F7F7F7" />
                                                        <path d="M48 112L48 16L4.19629e-06 64L0 112L48 112Z" fill="#F7F7F7" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="d-flex gap-2">
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                            </div>
                                            <Link href="#">
                                                <h6 className=" mt-2">100% satisfied</h6>
                                            </Link>
                                            <p className="mb-0 mt-4 ">“ Hands down one of the best shirts I've ever owned. Fits great, feels amazing, seems to stay cool and is somewhat water resistant anyway. “</p>
                                            <div className="d-flex align-items-center mt-5 position-relative z-1">
                                                <Link href="#">
                                                    <img className="rounded-circle icon-shape icon-50" src="/assets/img/support-desk-img/pages/support-desk/page-home/home-section-4/avatar-5.png" alt="AstraX" />
                                                </Link>
                                                <div className="text-start ms-3">
                                                    <Link href="#">
                                                        <span className="btn-text ">Eliana M. Thompson</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card-testimonial bg-white bg-opacity-10 p-5 rounded-4 bg-white border" data-aos="fade-up" data-aos-duration={1000}>
                                            <div className="position-absolute bottom-0 end-0 me-4 z-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={128} height={112} viewBox="0 0 128 112" fill="none">
                                                    <g clipPath="url(#clip0_349_2561)">
                                                        <path d="M128 112L128 16L80 64L80 112L128 112Z" fill="#F7F7F7" />
                                                        <path d="M48 112L48 16L4.19629e-06 64L0 112L48 112Z" fill="#F7F7F7" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="d-flex gap-2">
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                                <i className="bi bi-star-fill text-primary fs-10" />
                                            </div>
                                            <Link href="#">
                                                <h6 className=" mt-2">Crm ready</h6>
                                            </Link>
                                            <p className="mb-0 mt-4 ">“ Hands down one of the best shirts I've ever owned. Fits great, feels amazing, seems to stay cool and is somewhat water resistant anyway. “</p>
                                            <div className="d-flex align-items-center mt-5 position-relative z-1">
                                                <Link href="#">
                                                    <img className="rounded-circle icon-shape icon-50" src="/assets/img/support-desk-img/pages/support-desk/page-home/home-section-4/avatar-3.png" alt="AstraX" />
                                                </Link>
                                                <div className="text-start ms-3">
                                                    <Link href="#">
                                                        <span className="btn-text ">Sophia J. Carter</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-4 col-6 mx-auto text-center mt-8">
                                <div className="position-relative mx-auto">
                                    <div className="d-inline-flex border h-100 d-flex align-items-center gap-1 rounded-pill mx-auto bg-white position-relative z-1">
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
                                    <span className="border-top position-absolute top-50 start-50 translate-middle w-100 z-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Swiper JS */}
                </div>
            </section>
        </>
    );
}
