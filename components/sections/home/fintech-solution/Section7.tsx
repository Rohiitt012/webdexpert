import Link from "next/link";

export default function Section7() {
    return (
        <>
            <div>
                {/*fintech-solution-home section 7*/}
                <section className="fintech-solution-home-section-7 position-relative overflow-hidden bg-light-2 py-120">
                    <div className="container">
                        <div className="text-center">
                            <div className="d-flex align-items-center justify-content-center gap-3">
                                <span className="small-line" />
                                <span className="btn-text text-primary">pricing plan</span>
                                <span className="small-line" />
                            </div>
                            <h2 className="mt-3 text-dark text-anime-style-2">Company insights</h2>
                        </div>
                        <div className="row mt-8 g-lg-5 g-4">
                            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={200}>
                                <div className="card-news position-relative rounded-4 overflow-hidden hover-up">
                                    <Link href="/blog-details" className="card-news-img position-relative d-block">
                                        <img className="w-100" src="/assets/img/fintech-solution-img/pages/fintech-solution/page-home/home-section-7/img-1.png" alt="AstraX" />
                                        <span className="text-uppercase fw-bold fs-8 text-white bg-primary rounded-pill px-2 py-1 position-absolute top-100 end-0 translate-middle-y me-5">consultancy</span>
                                    </Link>
                                    <div className="card-news-body bg-white p-4 rounded-3 rounded-top-0">
                                        <div className="d-flex card-news-information mt-2 gap-4">
                                            <div className="d-flex align-items-center gap-1">
                                                <img src="/assets/img/fintech-solution-img/template/icons/icon-1.svg" alt="AstraX" />
                                                <p className="mb-0">December 21, 2025</p>
                                            </div>
                                            <div className="d-flex align-items-center gap-1">
                                                <img src="/assets/img/fintech-solution-img/template/icons/icon-2.svg" alt="AstraX" />
                                                <span className="opacity-50">By</span>
                                                <Link href="#" className="mb-0">
                                                    Admin
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="card-news-title mt-2 mb-4">
                                            <Link href="/blog-details">
                                                <h6>2025: brace for the 'big one' cyber attack.</h6>
                                            </Link>
                                        </div>
                                        <Link href="/blog-details" className="text-dark opacity-50 fs-7 fw-semibold">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={400}>
                                <div className="card-news position-relative rounded-4 overflow-hidden hover-up">
                                    <Link href="/blog-details" className="card-news-img position-relative d-block">
                                        <img className="w-100" src="/assets/img/fintech-solution-img/pages/fintech-solution/page-home/home-section-7/img-2.png" alt="AstraX" />
                                        <span className="text-uppercase fw-bold fs-8 text-white bg-primary rounded-pill px-2 py-1 position-absolute top-100 end-0 translate-middle-y me-5">consultancy</span>
                                    </Link>
                                    <div className="card-news-body bg-white p-4 rounded-3 rounded-top-0">
                                        <div className="d-flex card-news-information mt-2 gap-4">
                                            <div className="d-flex align-items-center gap-1">
                                                <img src="/assets/img/fintech-solution-img/template/icons/icon-1.svg" alt="AstraX" />
                                                <p className="mb-0">December 21, 2025</p>
                                            </div>
                                            <div className="d-flex align-items-center gap-1">
                                                <img src="/assets/img/fintech-solution-img/template/icons/icon-2.svg" alt="AstraX" />
                                                <span className="opacity-50">By</span>
                                                <Link href="#" className="mb-0">
                                                    Admin
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="card-news-title mt-2 mb-4">
                                            <Link href="/blog-details">
                                                <h6>2025: brace for the 'big one' cyber attack.</h6>
                                            </Link>
                                        </div>
                                        <Link href="/blog-details" className="text-dark opacity-50 fs-7 fw-semibold">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={600}>
                                <div className="card-news position-relative rounded-4 overflow-hidden hover-up">
                                    <Link href="/blog-details" className="card-news-img position-relative d-block">
                                        <img className="w-100" src="/assets/img/fintech-solution-img/pages/fintech-solution/page-home/home-section-7/img-3.png" alt="AstraX" />
                                        <span className="text-uppercase fw-bold fs-8 text-white bg-primary rounded-pill px-2 py-1 position-absolute top-100 end-0 translate-middle-y me-5">consultancy</span>
                                    </Link>
                                    <div className="card-news-body bg-white p-4 rounded-3 rounded-top-0">
                                        <div className="d-flex card-news-information mt-2 gap-4">
                                            <div className="d-flex align-items-center gap-1">
                                                <img src="/assets/img/fintech-solution-img/template/icons/icon-1.svg" alt="AstraX" />
                                                <p className="mb-0">December 21, 2025</p>
                                            </div>
                                            <div className="d-flex align-items-center gap-1">
                                                <img src="/assets/img/fintech-solution-img/template/icons/icon-2.svg" alt="AstraX" />
                                                <span className="opacity-50">By</span>
                                                <Link href="#" className="mb-0">
                                                    Admin
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="card-news-title mt-2 mb-4">
                                            <Link href="/blog-details">
                                                <h6>2025: brace for the 'big one' cyber attack.</h6>
                                            </Link>
                                        </div>
                                        <Link href="/blog-details" className="text-dark opacity-50 fs-7 fw-semibold">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
