"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
const swiperOptions = {
    modules: [Autoplay, Pagination],
    slidesPerView: 1,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,\n    watchOverflow: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
};
const postlist = [
    {
        img: "/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-6/img-1.png",
        tag: "Trending",
        time: "Dec 19, 2025",
        title: "The Golden Age of Animation: How Cartoons Shape Pop Culture",
        description: "transformative power of ai and manchine learning to the technologies.",
        name: "Penelope N. Harris",
        avatar: "/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-6/author-1.png",
    },
    {
        img: "/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-6/img-2.png",
        tag: "Trending",
        time: "Dec 19, 2025",
        title: "Must-See Art Exhibitions Around the World This Year",
        description: "transformative power of ai and manchine learning to the technologies.",
        name: "Amelia K. Hamilton",
        avatar: "/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-6/author-2.png",
    },
    {
        img: "/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-6/img-3.png",
        tag: "Trending",
        time: "Dec 19, 2025",
        title: "The Cultural Significance of Dance in Different Societies",
        description: "transformative power of ai and manchine learning to the technologies.",
        name: "Amelia K. Hamilton",
        avatar: "/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-6/author-3.png",
    },
    {
        img: "/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-6/img-4.png",
        tag: "Trending",
        time: "Dec 19, 2025",
        title: "The Role of Storytelling in Film and Television",
        description: "transformative power of ai and manchine learning to the technologies.",
        name: "Isabella F. Monroe",
        avatar: "/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-6/author-4.png",
    },
    {
        img: "/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-6/img-5.png",
        tag: "Trending",
        time: "Dec 19, 2025",
        title: "The Impact of AI on Digital Art and Creativity",
        description: "transformative power of ai and manchine learning to the technologies.",
        name: "Victoria L. Davis",
        avatar: "/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-6/author-5.png",
    },
    {
        img: "/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-6/img-6.png",
        tag: "Trending",
        time: "Dec 19, 2025",
        title: "Generate a series of can iteratively into we get different number.",
        description: "transformative power of ai and manchine learning to the technologies.",
        name: "Olivia R. Bennett",
        avatar: "/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-6/author-6.png",
    },
    {
        img: "/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-6/img-7.png",
        tag: "Trending",
        time: "Dec 19, 2025",
        title: "The Magic of Theater: Why Live Performances Still Matter",
        description: "transformative power of ai and manchine learning to the technologies.",
        name: "Gabriella S. Adams",
        avatar: "/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-6/author-7.png",
    },
];
export default function Section7({ pt, display }: any) {
    return (
        <>
            {/*news-magazine section 7*/}
            <section className={`news-magazine-home-section-7 position-relative pt-80 ${pt} mb-80`}>
                <div className={`container position-relative border-top border-dark border-opacity-10 ${display}`}>
                    <h6 className="position-absolute top-50 start-0 ps-2 translate-middle-y bg-white pe-5">Recent Post</h6>
                </div>
                <div className="container mt-8">
                    <div className="row">
                        <div className="col-lg-8">
                            {postlist.map((post, index) => (
                                <div key={index} className="post d-flex flex-column flex-md-row align-items-center gap-md-5 gap-3 border-bottom border-dark border-opacity-10 pb-5 mb-5">
                                    <Link href="#" className="zoom-img">
                                        <img src={post.img} alt="AstraX" />
                                    </Link>
                                    <div className="pe-md-8">
                                        <div className="d-flex card-article-information mb-3 gap-3">
                                            <div className="d-flex align-items-center gap-2">
                                                <span className="dot-primary" />
                                                <span className="fs-8 text-uppercase fw-medium">{post.tag}</span>
                                            </div>
                                            <div className="vertical-line" />
                                            <div className="d-flex align-items-center gap-1">
                                                <p className="mb-0 fs-8">{post.time}</p>
                                            </div>
                                        </div>
                                        <Link href="#">
                                            <h3 className="fw-semibold fs-6 mt-2 mb-2">{post.title}</h3>
                                        </Link>
                                        <p className="fs-7">{post.description}</p>
                                        <div className="d-flex align-items-center mt-5">
                                            <Link href="#">
                                                <img className="rounded-circle icon-shape icon-50" src={post.avatar} alt="AstraX" />
                                            </Link>
                                            <div className="text-start ms-3">
                                                <Link href="#">
                                                    <span className="fs-7">{post.name}</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <Link href="/category-01" className="btn btn-dark button--calypso">
                                <span>Learn More</span>
                            </Link>
                        </div>
                        <div className="col-lg-4 mt-lg-0 mt-8">
                            <div className="border">
                                <Swiper {...swiperOptions} className="swiper slider-1">
                                    <div className="swiper-wrapper">
                                        <SwiperSlide>
                                            <div className="p-3 text-center">
                                                <Link href="#">
                                                    <img src="/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-6/img-13.png" alt="AstraX" />
                                                </Link>
                                                <div className="d-flex card-article-information justify-content-center mb-3 gap-3 mt-4">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="dot-primary" />
                                                        <span className="fs-8 text-uppercase fw-medium">Trending</span>
                                                    </div>
                                                    <div className="vertical-line" />
                                                    <div className="d-flex align-items-center gap-1">
                                                        <p className="mb-0 fs-8">Dec 19, 2025</p>
                                                    </div>
                                                </div>
                                                <Link href="#">
                                                    <h3 className="fw-semibold fs-6 mt-2 mb-2">Generate a series of can iteratively into we get different number.</h3>
                                                </Link>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="p-3 text-center">
                                                <Link href="#">
                                                    <img src="/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-6/img-13.png" alt="AstraX" />
                                                </Link>
                                                <div className="d-flex card-article-information justify-content-center mb-3 gap-3 mt-4">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="dot-primary" />
                                                        <span className="fs-8 text-uppercase fw-medium">Trending</span>
                                                    </div>
                                                    <div className="vertical-line" />
                                                    <div className="d-flex align-items-center gap-1">
                                                        <p className="mb-0 fs-8">Dec 19, 2025</p>
                                                    </div>
                                                </div>
                                                <Link href="#">
                                                    <h3 className="fw-semibold fs-6 mt-2 mb-2">Generate a series of can iteratively into we get different number.</h3>
                                                </Link>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="p-3 text-center">
                                                <Link href="#">
                                                    <img src="/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-6/img-13.png" alt="AstraX" />
                                                </Link>
                                                <div className="d-flex card-article-information justify-content-center mb-3 gap-3 mt-4">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="dot-primary" />
                                                        <span className="fs-8 text-uppercase fw-medium">Trending</span>
                                                    </div>
                                                    <div className="vertical-line" />
                                                    <div className="d-flex align-items-center gap-1">
                                                        <p className="mb-0 fs-8">Dec 19, 2025</p>
                                                    </div>
                                                </div>
                                                <Link href="#">
                                                    <h3 className="fw-semibold fs-6 mt-2 mb-2">Generate a series of can iteratively into we get different number.</h3>
                                                </Link>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="p-3 text-center">
                                                <Link href="#">
                                                    <img src="/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-6/img-13.png" alt="AstraX" />
                                                </Link>
                                                <div className="d-flex card-article-information justify-content-center mb-3 gap-3 mt-4">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="dot-primary" />
                                                        <span className="fs-8 text-uppercase fw-medium">Trending</span>
                                                    </div>
                                                    <div className="vertical-line" />
                                                    <div className="d-flex align-items-center gap-1">
                                                        <p className="mb-0 fs-8">Dec 19, 2025</p>
                                                    </div>
                                                </div>
                                                <Link href="#">
                                                    <h3 className="fw-semibold fs-6 mt-2 mb-2">Generate a series of can iteratively into we get different number.</h3>
                                                </Link>
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                    <div className="pt-4">
                                        <div className="swiper-pagination" />
                                    </div>
                                </Swiper>
                            </div>
                            <div className="border mt-5">
                                <div className="p-4">
                                    <h6 className="fs-20 fw-semibold border-bottom pb-3">Editors Choice</h6>
                                    <div className="border-bottom pb-3">
                                        <div className="d-flex flex-wrap flex-lg-nowrap gap-3 pt-3">
                                            <div className="d-inline-block img-card">
                                                <Link href="#">
                                                    <img src="/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-6/img-8.png" alt="AstraX" />
                                                </Link>
                                            </div>
                                            <div className="d-block">
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className="dot-primary" />
                                                    <span className="fs-8 text-uppercase fw-medium">Trading</span>
                                                </div>
                                                <Link href="#">
                                                    <h3 className="fw-semibold fs-6 mt-2 mb-1">The Rise of Indie Films: Why Small Productions Make Big Impact</h3>
                                                </Link>
                                                <div className="d-flex flex-wrap card-article-information mt-2 gap-md-3 gap-1">
                                                    <div className="information-author d-flex align-items-center gap-1">
                                                        <span className="opacity-50 fs-8 mb-0">By</span>
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
                                    </div>
                                    <div className="border-bottom pb-3">
                                        <div className="d-flex flex-wrap flex-lg-nowrap gap-3 pt-3">
                                            <div className="d-inline-block img-card">
                                                <Link href="#">
                                                    <img src="/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-6/img-9.png" alt="AstraX" />
                                                </Link>
                                            </div>
                                            <div className="d-block">
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className="dot-primary" />
                                                    <span className="fs-8 text-uppercase fw-medium">Trading</span>
                                                </div>
                                                <Link href="#">
                                                    <h3 className="fw-semibold fs-6 mt-2 mb-1">The Golden Age of Animation: How Cartoons Shape Pop Culture</h3>
                                                </Link>
                                                <div className="d-flex flex-wrap card-article-information mt-2 gap-md-3 gap-1">
                                                    <div className="information-author d-flex align-items-center gap-1">
                                                        <span className="opacity-50 fs-8 mb-0">By</span>
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
                                    </div>
                                    <div className="border-bottom pb-3">
                                        <div className="d-flex flex-wrap flex-lg-nowrap gap-3 pt-3">
                                            <div className="d-inline-block img-card">
                                                <Link href="#">
                                                    <img src="/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-6/img-10.png" alt="AstraX" />
                                                </Link>
                                            </div>
                                            <div className="d-block">
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className="dot-primary" />
                                                    <span className="fs-8 text-uppercase fw-medium">Trading</span>
                                                </div>
                                                <Link href="#">
                                                    <h3 className="fw-semibold fs-6 mt-2 mb-1">The Impact of AI on Digital Art and Creativity</h3>
                                                </Link>
                                                <div className="d-flex flex-wrap card-article-information mt-2 gap-md-3 gap-1">
                                                    <div className="information-author d-flex align-items-center gap-1">
                                                        <span className="opacity-50 fs-8 mb-0">By</span>
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
                                    </div>
                                    <div>
                                        <div className="d-flex flex-wrap flex-lg-nowrap gap-3 pt-3">
                                            <div className="d-inline-block img-card">
                                                <Link href="#">
                                                    <img src="/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-6/img-11.png" alt="AstraX" />
                                                </Link>
                                            </div>
                                            <div className="d-block">
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className="dot-primary" />
                                                    <span className="fs-8 text-uppercase fw-medium">Trading</span>
                                                </div>
                                                <Link href="#">
                                                    <h3 className="fw-semibold fs-6 mt-2 mb-1">The Power of Photography: Capturing Moments That Matter</h3>
                                                </Link>
                                                <div className="d-flex flex-wrap card-article-information mt-2 gap-md-3 gap-1">
                                                    <div className="information-author d-flex align-items-center gap-1">
                                                        <span className="opacity-50 fs-8 mb-0">By</span>
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
                                    </div>
                                </div>
                            </div>
                            <div className="bg-secondary-2 mt-5">
                                <div className="p-md-5 p-4">
                                    <h6 className="fs-20 fw-semibold border-bottom pb-3 mb-3">Popular Categories</h6>
                                    <Link href="#" className="d-flex justify-content-between bg-white rounded-4 p-3 mb-3">
                                        <p className="fs-7 fw-semibold text-dark mb-0">Active</p>
                                        <p className="fs-7 fw-semibold text-dark mb-0">21</p>
                                    </Link>
                                    <Link href="#" className="d-flex justify-content-between bg-white rounded-4 p-3 mb-3">
                                        <p className="fs-7 fw-semibold text-dark mb-0">Tech</p>
                                        <p className="fs-7 fw-semibold text-dark mb-0">12</p>
                                    </Link>
                                    <Link href="#" className="d-flex justify-content-between bg-white rounded-4 p-3 mb-3">
                                        <p className="fs-7 fw-semibold text-dark mb-0">Sports</p>
                                        <p className="fs-7 fw-semibold text-dark mb-0">09</p>
                                    </Link>
                                    <Link href="#" className="d-flex justify-content-between bg-white rounded-4 p-3 mb-3">
                                        <p className="fs-7 fw-semibold text-dark mb-0">Nation</p>
                                        <p className="fs-7 fw-semibold text-dark mb-0">33</p>
                                    </Link>
                                    <Link href="#" className="d-flex justify-content-between bg-white rounded-4 p-3 mb-3">
                                        <p className="fs-7 fw-semibold text-dark mb-0">Politics</p>
                                        <p className="fs-7 fw-semibold text-dark mb-0">24</p>
                                    </Link>
                                    <Link href="#" className="fs-7 fw-semibold">
                                        More category
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-5">
                                <Link href="#">
                                    <img src="/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-6/img-12.png" alt="AstraX" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
