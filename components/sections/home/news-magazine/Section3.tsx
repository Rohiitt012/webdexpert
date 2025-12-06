"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Thumbs } from "swiper/modules";
import SwiperCore from "swiper";
import Link from "next/link";

export default function Section3() {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

    return (
        <>
            {/*news-magazine-home-section-3*/}
            <section className="news-magazine-home-section-3 position-relative overflow-hidden pt-80">
                <div className="container position-relative border-top border-dark border-opacity-10">
                    <h6 className="position-absolute top-50 start-0 ps-2 translate-middle-y bg-white pe-5">Trading news</h6>
                </div>
                <div className="container mt-8">
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation, Thumbs]}
                        spaceBetween={10}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        thumbs={{ swiper: thumbsSwiper }}
                        className="swiper blog-sliderr"
                    >
                        <div className="swiper-wrapper">
                            <SwiperSlide className="swiper-slide">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <div className="d-flex flex-column h-100">
                                            <div>
                                                <Link href="#">
                                                    <h3>Breaking down ai : Machine learning explained</h3>
                                                </Link>
                                                <p>In this weeks exploration of artificial intelligence we deleve into the transformative power of ai.</p>
                                            </div>
                                            <div className="d-flex card-news-information mt-2 mt-lg-auto gap-3">
                                                <div className="information-author d-flex align-items-center gap-1">
                                                    <span className="opacity-50 fs-8">By</span>
                                                    <Link href="#" className="mb-0 fs-8">
                                                        Olivia R. Bennett
                                                    </Link>
                                                </div>
                                                <div className="vertical-line" />
                                                <div className="d-flex align-items-center gap-1">
                                                    <p className="mb-0 fs-8">Dec 19, 2025</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 mt-lg-0 mt-5">
                                        <Link href="#">
                                            <img className="w-100" src="/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-3/img-1.png" alt="AstraX" />
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <div className="d-flex flex-column h-100">
                                            <div>
                                                <Link href="#">
                                                    <h3>Must-See Art Exhibitions Around the World This Year</h3>
                                                </Link>
                                                <p>In this weeks exploration of artificial intelligence we deleve into the transformative power of ai.</p>
                                            </div>
                                            <div className="d-flex card-news-information mt-2 mt-lg-auto gap-3">
                                                <div className="information-author d-flex align-items-center gap-1">
                                                    <span className="opacity-50 fs-8">By</span>
                                                    <Link href="#" className="mb-0 fs-8">
                                                        Sophia J. Carter
                                                    </Link>
                                                </div>
                                                <div className="vertical-line" />
                                                <div className="d-flex align-items-center gap-1">
                                                    <p className="mb-0 fs-8">Dec 19, 2025</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 mt-lg-0 mt-5">
                                        <Link href="#">
                                            <img className="w-100" src="/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-3/img-2.png" alt="AstraX" />
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <div className="d-flex flex-column h-100">
                                            <div>
                                                <Link href="#">
                                                    <h3>The Cultural Significance of Dance in Different Societies</h3>
                                                </Link>
                                                <p>In this weeks exploration of artificial intelligence we deleve into the transformative power of ai.</p>
                                            </div>
                                            <div className="d-flex card-news-information mt-2 mt-lg-auto gap-3">
                                                <div className="information-author d-flex align-items-center gap-1">
                                                    <span className="opacity-50 fs-8">By</span>
                                                    <Link href="#" className="mb-0 fs-8">
                                                        Natalia T. Morgan
                                                    </Link>
                                                </div>
                                                <div className="vertical-line" />
                                                <div className="d-flex align-items-center gap-1">
                                                    <p className="mb-0 fs-8">Dec 19, 2025</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 mt-lg-0 mt-5">
                                        <Link href="#">
                                            <img className="w-100" src="/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-3/img-3.png" alt="AstraX" />
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <div className="d-flex flex-column h-100">
                                            <div>
                                                <Link href="#">
                                                    <h3>Generate a series of can iteratively into we get different number.</h3>
                                                </Link>
                                                <p>In this weeks exploration of artificial intelligence we deleve into the transformative power of ai.</p>
                                            </div>
                                            <div className="d-flex card-news-information mt-2 mt-lg-auto gap-3">
                                                <div className="information-author d-flex align-items-center gap-1">
                                                    <span className="opacity-50 fs-8">By</span>
                                                    <Link href="#" className="mb-0 fs-8">
                                                        Gabriella S. Adams
                                                    </Link>
                                                </div>
                                                <div className="vertical-line" />
                                                <div className="d-flex align-items-center gap-1">
                                                    <p className="mb-0 fs-8">Dec 19, 2025</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 mt-lg-0 mt-5">
                                        <Link href="#">
                                            <img className="w-100" src="/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-3/img-4.png" alt="AstraX" />
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                    <div className="row">
                        <Swiper modules={[Autoplay, Pagination, Navigation, Thumbs]} onSwiper={setThumbsSwiper} direction="horizontal" spaceBetween={10} slidesPerView={3} freeMode={true} watchSlidesProgress={true} className="blog-thumbs">
                            <div className="swiper-wrapper">
                                <SwiperSlide className="swiper-slide col-lg-4">
                                    <div className="blog-thumb mt-5">
                                        <div className="d-flex gap-3 pt-4">
                                            <div className="img-card">
                                                <img src="/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-3/img-thum4.png" alt="AstraX" />
                                            </div>
                                            <div>
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className="dot-primary" />
                                                    <span className="fs-8 text-uppercase fw-medium">Bootstrap</span>
                                                </div>
                                                <div>
                                                    <h3 className="fw-semibold fs-6 mt-2 mb-1">Breaking down ai : Machine learning explained</h3>
                                                </div>
                                                <div className="d-flex card-article-information mt-2 gap-3">
                                                    <div className="information-author d-flex align-items-center gap-1">
                                                        <span className="opacity-50 fs-8">By</span>
                                                        <h4 className="mb-0 fs-8">Gabriella S. Adams</h4>
                                                    </div>
                                                    <div className="vertical-line" />
                                                    <div className="d-flex align-items-center gap-1">
                                                        <p className="mb-0 fs-8">Dec 19, 2025</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide col-lg-4">
                                    <div className="blog-thumb mt-5">
                                        <div className="d-flex gap-3 pt-4">
                                            <div className="img-card">
                                                <img src="/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-3/img-thum1.png" alt="AstraX" />
                                            </div>
                                            <div>
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className="dot-primary" />
                                                    <span className="fs-8 text-uppercase fw-medium">Bootstrap</span>
                                                </div>
                                                <div>
                                                    <h3 className="fw-semibold fs-6 mt-2 mb-1">Must-See Art Exhibitions Around the World This Year</h3>
                                                </div>
                                                <div className="d-flex card-article-information mt-2 gap-3">
                                                    <div className="information-author d-flex align-items-center gap-1">
                                                        <span className="opacity-50 fs-8">By</span>
                                                        <h4 className="mb-0 fs-8">Sophia J. Carter</h4>
                                                    </div>
                                                    <div className="vertical-line" />
                                                    <div className="d-flex align-items-center gap-1">
                                                        <p className="mb-0 fs-8">Dec 19, 2025</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide col-lg-4">
                                    <div className="blog-thumb mt-5">
                                        <div className="d-flex gap-3 pt-4">
                                            <div className="img-card">
                                                <img src="/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-3/img-thum2.png" alt="AstraX" />
                                            </div>
                                            <div>
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className="dot-primary" />
                                                    <span className="fs-8 text-uppercase fw-medium">Trading</span>
                                                </div>
                                                <div>
                                                    <h3 className="fw-semibold fs-6 mt-2 mb-1">The Cultural Significance of Dance in Different Societies</h3>
                                                </div>
                                                <div className="d-flex card-article-information mt-2 gap-3">
                                                    <div className="information-author d-flex align-items-center gap-1">
                                                        <span className="opacity-50 fs-8">By</span>
                                                        <h4 className="mb-0 fs-8">Natalia T. Morgan</h4>
                                                    </div>
                                                    <div className="vertical-line" />
                                                    <div className="d-flex align-items-center gap-1">
                                                        <p className="mb-0 fs-8">Dec 19, 2025</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide col-lg-4">
                                    <div className="blog-thumb mt-5">
                                        <div className="d-flex gap-3 pt-4">
                                            <div className="img-card">
                                                <img src="/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-3/img-thum3.png" alt="AstraX" />
                                            </div>
                                            <div>
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className="dot-primary" />
                                                    <span className="fs-8 text-uppercase fw-medium">Bootstrap</span>
                                                </div>
                                                <div>
                                                    <h3 className="fw-semibold fs-6 mt-2 mb-1">Generate a series of can iteratively into we get different number.</h3>
                                                </div>
                                                <div className="d-flex card-article-information mt-2 gap-3">
                                                    <div className="information-author d-flex align-items-center gap-1">
                                                        <span className="opacity-50 fs-8">By</span>
                                                        <h4 className="mb-0 fs-8">Gabriella S. Adams</h4>
                                                    </div>
                                                    <div className="vertical-line" />
                                                    <div className="d-flex align-items-center gap-1">
                                                        <p className="mb-0 fs-8">Dec 19, 2025</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
}
