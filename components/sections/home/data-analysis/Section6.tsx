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
            {/*data-analysis-home section 6*/}
            <section className="data-analysis-home-section-6 position-relative overflow-hidden pt-120">
                <div className="custom-container bg-primary rounded-5 position-relative">
                    <div className="position-absolute top-0 start-50 translate-middle-x w-100 z-0">
                        <img className="w-100" src="/assets/img/data-analysis-img/pages/data-analysis/page-home/home-section-6/dot-map.png" alt="AstraX" />
                    </div>
                    <div className="container py-80 position-relative z-1">
                        <div className="row">
                            <div className="text-center pb-7">
                                <span className="btn-text text-white">testimonials</span>
                                <h2 className="text-white text-anime-style-2">Happy users feedback</h2>
                            </div>
                        </div>
                        <div className="row">
                            {/* Swiper */}
                            <Swiper {...swiperOptions} className="swiper slider-1">
                                <div className="swiper-wrapper z-1">
                                    {/* Testimonial 1: AI Chatbots & Assistants */}
                                    <SwiperSlide>
                                        <div className="col-md-10 col-12 mx-auto card-testimonial bg-white p-5 pb-0 rounded-4" data-aos="fade-up">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <div className="position-relative text-center">
                                                        <img src="/assets/img/data-analysis-img/pages/data-analysis/page-home/home-section-6/author-1.png" alt="AstraX" />
                                                        <div className="ellipse-1 position-absolute top-50 start-50 translate-middle" />
                                                        <div className="ellipse-2 position-absolute top-50 start-50 translate-middle" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 ps-md-7 mt-lg-0 mt-5 pb-lg-0 pb-5">
                                                    <div className="d-flex gap-2">
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                    </div>
                                                    <h5 className="mt-3 pb-7 border-bottom">" The AI chatbots from xzectlabs have transformed our customer support. They handle queries 24/7 with incredible accuracy and natural conversation flow. Our response time improved dramatically, and customer satisfaction scores are at an all-time high. "</h5>
                                                    <div className="text-start mt-3">
                                                        <Link href="#">
                                                            <span className="btn-text">Sarah Mitchell</span>
                                                        </Link>
                                                        <p className="fs-7">Customer Success Director, TechFlow Inc.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    {/* Testimonial 2: AI Content & Post Generation */}
                                    <SwiperSlide>
                                        <div className="col-md-10 col-12 mx-auto card-testimonial bg-white p-5 pb-0 rounded-4" data-aos="fade-up">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <div className="position-relative text-center">
                                                        <img src="/assets/img/data-analysis-img/pages/data-analysis/page-home/home-section-6/author-1.png" alt="AstraX" />
                                                        <div className="ellipse-1 position-absolute top-50 start-50 translate-middle" />
                                                        <div className="ellipse-2 position-absolute top-50 start-50 translate-middle" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 ps-md-7 mt-lg-0 mt-5 pb-lg-0 pb-5">
                                                    <div className="d-flex gap-2">
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                    </div>
                                                    <h5 className="mt-3 pb-7 border-bottom">" xzectlabs AI content generation tools are a game-changer. We've scaled our content marketing efforts tenfold while maintaining brand consistency. The quality of blog posts, social media content, and product descriptions is exceptional. It's like having a team of expert writers available 24/7. "</h5>
                                                    <div className="text-start mt-3">
                                                        <Link href="#">
                                                            <span className="btn-text">Michael Chen</span>
                                                        </Link>
                                                        <p className="fs-7">Marketing Lead, ContentPro Solutions</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    {/* Testimonial 3: AI Automation for Lead Follow-ups */}
                                    <SwiperSlide>
                                        <div className="col-md-10 col-12 mx-auto card-testimonial bg-white p-5 pb-0 rounded-4" data-aos="fade-up">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <div className="position-relative text-center">
                                                        <img src="/assets/img/data-analysis-img/pages/data-analysis/page-home/home-section-6/author-1.png" alt="AstraX" />
                                                        <div className="ellipse-1 position-absolute top-50 start-50 translate-middle" />
                                                        <div className="ellipse-2 position-absolute top-50 start-50 translate-middle" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 ps-md-7 mt-lg-0 mt-5 pb-lg-0 pb-5">
                                                    <div className="d-flex gap-2">
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                    </div>
                                                    <h5 className="mt-3 pb-7 border-bottom">" The AI automation for lead follow-ups has revolutionized our sales process. We no longer miss opportunities, and our conversion rates have increased by 45%. The system intelligently qualifies leads, sends personalized messages, and ensures every prospect gets timely attention. "</h5>
                                                    <div className="text-start mt-3">
                                                        <Link href="#">
                                                            <span className="btn-text">David Rodriguez</span>
                                                        </Link>
                                                        <p className="fs-7">Sales Director, GrowthHub Enterprises</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    {/* Testimonial 4: AI-based Recommendation Systems */}
                                    <SwiperSlide>
                                        <div className="col-md-10 col-12 mx-auto card-testimonial bg-white p-5 pb-0 rounded-4" data-aos="fade-up">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <div className="position-relative text-center">
                                                        <img src="/assets/img/data-analysis-img/pages/data-analysis/page-home/home-section-6/author-1.png" alt="AstraX" />
                                                        <div className="ellipse-1 position-absolute top-50 start-50 translate-middle" />
                                                        <div className="ellipse-2 position-absolute top-50 start-50 translate-middle" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 ps-md-7 mt-lg-0 mt-5 pb-lg-0 pb-5">
                                                    <div className="d-flex gap-2">
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                    </div>
                                                    <h5 className="mt-3 pb-7 border-bottom">" xzectlabs recommendation system has transformed our e-commerce platform. Personalized product suggestions have increased our average order value by 35% and customer engagement by 60%. The machine learning algorithms continuously improve, making recommendations more accurate over time. "</h5>
                                                    <div className="text-start mt-3">
                                                        <Link href="#">
                                                            <span className="btn-text">Emily Watson</span>
                                                        </Link>
                                                        <p className="fs-7">E-commerce Manager, ShopSmart Global</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    {/* Testimonial 5: AI Tools for Business */}
                                    <SwiperSlide>
                                        <div className="col-md-10 col-12 mx-auto card-testimonial bg-white p-5 pb-0 rounded-4" data-aos="fade-up">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <div className="position-relative text-center">
                                                        <img src="/assets/img/data-analysis-img/pages/data-analysis/page-home/home-section-6/author-1.png" alt="AstraX" />
                                                        <div className="ellipse-1 position-absolute top-50 start-50 translate-middle" />
                                                        <div className="ellipse-2 position-absolute top-50 start-50 translate-middle" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 ps-md-7 mt-lg-0 mt-5 pb-lg-0 pb-5">
                                                    <div className="d-flex gap-2">
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                    </div>
                                                    <h5 className="mt-3 pb-7 border-bottom">" The custom AI models and workflows from xzectlabs are exactly what we needed. They built intelligent systems tailored to our unique business processes, integrating seamlessly with our existing infrastructure. Our operational efficiency has improved dramatically, and we're seeing measurable ROI. "</h5>
                                                    <div className="text-start mt-3">
                                                        <Link href="#">
                                                            <span className="btn-text">James Anderson</span>
                                                        </Link>
                                                        <p className="fs-7">CTO, InnovateCorp Technologies</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                                <div className="swiper-button-prev mt-0 rounded-4 border-opacity-25 border-white border-2 icon-shape icon-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                        <g clipPath="url(#clip0_349_1382)">
                                            <path d="M4.18271 3.80852L4.99823e-08 7.99998L4.18271 12.1914L5.06751 11.3084L2.3896 8.62497L16 8.62497L16 7.37498L2.3896 7.37498L5.06751 4.69148L4.18271 3.80852Z" fill="white" />
                                        </g>
                                    </svg>
                                </div>
                                <div className="swiper-button-next mt-0 rounded-4 border-opacity-25 border-white border-2 icon-shape icon-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                        <g clipPath="url(#clip0_349_1381)">
                                            <path d="M11.8173 12.1915L16 8.00002L11.8173 3.80859L10.9325 4.69155L13.6104 7.37503L-1.55894e-07 7.37503L-2.10532e-07 8.62502L13.6104 8.62502L10.9325 11.3085L11.8173 12.1915Z" fill="white" />
                                        </g>
                                    </svg>
                                </div>
                            </Swiper>
                            {/* Swiper JS */}
                            <span className="btn-text text-center text-white text-opacity-75 mt-8">
                                next can be you, hire us for your next level journey.
                                <Link href="/contact">
                                    <span className="btn-text text-white">get in touch</span>
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
