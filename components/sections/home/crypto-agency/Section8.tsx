import Link from "next/link";

export default function Section8() {
    return (
        <>
            {/*crypto-agency home section 8*/}
            <section className="crypto-agency-home-section-8 pt-120 position-relative rounded-bottom-5 bg-dark-2 overflow-hidden">
                <div className="container pb-120">
                    <div className="text-center">
                        <span className="border-linear btn-text text-white px-3 py-2 rounded-4">Partners</span>
                        <h2 className="mt-3 mb-3 text-anime-style-3">Supported by global partners</h2>
                    </div>
                    <div className="row mt-8">
                        <div className="col-lg-4">
                            <div data-aos="fade-up" data-aos-delay={0} className="card-news position-relative mb-lg-0 mb-8">
                                <div className="hover-up">
                                    <Link href="/blog-details" className="card-news-img position-relative d-block">
                                        <img className="w-100 rounded-4" src="/assets/img/crypto-agency-img/pages/crypto-agency/page-home/home-section-8/img-1.png" alt="AstraX" />
                                        <span className="text-uppercase fw-bold fs-8 rounded-pill text-dark bg-primary px-2 py-1 position-absolute top-100 end-0 translate-middle-y me-5">crypto</span>
                                    </Link>
                                    <div className="card-news-body">
                                        <div className="d-flex card-news-information mt-5 gap-4">
                                            <div className="d-flex align-items-center gap-1">
                                                <i className="fa-solid fa-calendar-days text-primary" />
                                                <p className="text-white mb-0">December 21, 2025</p>
                                            </div>
                                            <div className="d-flex align-items-center gap-1">
                                                <i className="fa-regular fa-user text-primary" />
                                                <span className="opacity-50 text-white">By</span>
                                                <Link href="#" className="mb-0 text-white">
                                                    Admin
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="card-news-title mt-2">
                                            <Link href="/blog-details">
                                                <h6>2025: brace for the 'big one' cyber attack.</h6>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div data-aos="fade-up" data-aos-delay={200} className="card-news position-relative mb-lg-0 mb-8">
                                <div className="hover-up">
                                    <Link href="/blog-details" className="card-news-img position-relative d-block">
                                        <img className="w-100 rounded-4" src="/assets/img/crypto-agency-img/pages/crypto-agency/page-home/home-section-8/img-2.png" alt="AstraX" />
                                        <span className="text-uppercase fw-bold fs-8 rounded-pill text-dark bg-primary px-2 py-1 position-absolute top-100 end-0 translate-middle-y me-5">crypto</span>
                                    </Link>
                                    <div className="card-news-body">
                                        <div className="d-flex card-news-information mt-5 gap-4">
                                            <div className="d-flex align-items-center gap-1">
                                                <i className="fa-solid fa-calendar-days text-primary" />
                                                <p className="text-white mb-0">December 21, 2025</p>
                                            </div>
                                            <div className="d-flex align-items-center gap-1">
                                                <i className="fa-regular fa-user text-primary" />
                                                <span className="opacity-50 text-white">By</span>
                                                <Link href="#" className="mb-0 text-white">
                                                    Admin
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="card-news-title mt-2">
                                            <Link href="/blog-details">
                                                <h6>2025: brace for the 'big one' cyber attack.</h6>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div data-aos="fade-up" data-aos-delay={400} className="card-news position-relative mb-lg-0 mb-8">
                                <div className="hover-up">
                                    <Link href="/blog-details" className="card-news-img position-relative d-block">
                                        <img className="w-100 rounded-4" src="/assets/img/crypto-agency-img/pages/crypto-agency/page-home/home-section-8/img-3.png" alt="AstraX" />
                                        <span className="text-uppercase fw-bold fs-8 rounded-pill text-dark bg-primary px-2 py-1 position-absolute top-100 end-0 translate-middle-y me-5">crypto</span>
                                    </Link>
                                    <div className="card-news-body">
                                        <div className="d-flex card-news-information mt-5 gap-4">
                                            <div className="d-flex align-items-center gap-1">
                                                <i className="fa-solid fa-calendar-days text-primary" />
                                                <p className="text-white mb-0">December 21, 2025</p>
                                            </div>
                                            <div className="d-flex align-items-center gap-1">
                                                <i className="fa-regular fa-user text-primary" />
                                                <span className="opacity-50 text-white">By</span>
                                                <Link href="#" className="mb-0 text-white">
                                                    Admin
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="card-news-title mt-2">
                                            <Link href="/blog-details">
                                                <h6>2025: brace for the 'big one' cyber attack.</h6>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
