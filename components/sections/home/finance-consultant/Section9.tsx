import Link from "next/link";

export default function Section9() {
    return (
        <>
            {/*finance-consultant section 7*/}
            <section className="finance-consultant-home-section-7 position-relative overflow-hidden py-120 bg-primary-2">
                <div className="container">
                    <div className="text-center">
                        <span className="fs-7 fw-medium bg-primary px-2 py-1 text-dark text-capitalize">blog &amp; insights</span>
                        <h2 className="mt-3 text-dark text-anime-style-2">Company insights</h2>
                    </div>
                    <div className="row mt-8">
                        <div className="col-lg-4">
                            <div className="card-news position-relative mb-lg-0 mb-8" data-aos="fade-up" data-aos-delay={0}>
                                <Link href="#" className="card-news-img position-relative d-block">
                                    <img className="w-100" src="/assets/img/finance-consultant-img/pages/finance-consultant/page-home/home-section-9/img-1.png" alt="AstraX" />
                                    <span className="text-uppercase fw-bold fs-8 text-primary bg-green-5 px-2 py-1 position-absolute top-100 end-0 translate-middle-y me-5">consultancy</span>
                                </Link>
                                <div className="card-news-body bg-white p-4 rounded-0">
                                    <div className="d-flex card-news-information mt-2 gap-4">
                                        <div className="d-flex align-items-center gap-1">
                                            <img src="/assets/img/finance-consultant-img/template/icons/icon-1.svg" alt="AstraX" />
                                            <p className="mb-0">December 21, 2025</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-1">
                                            <img src="/assets/img/finance-consultant-img/template/icons/icon-2.svg" alt="AstraX" />
                                            <span className="opacity-50">By</span>
                                            <Link href="#" className="mb-0">
                                                Admin
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-news-title mt-2 mb-4">
                                        <Link href="#">
                                            <h6>2025: brace for the 'big one' cyber attack.</h6>
                                        </Link>
                                    </div>
                                    <Link href="#" className="text-dark opacity-50 fs-7 fw-semibold">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-news position-relative mb-lg-0 mb-8" data-aos="fade-up" data-aos-delay={200}>
                                <Link href="#" className="card-news-img position-relative d-block">
                                    <img className="w-100" src="/assets/img/finance-consultant-img/pages/finance-consultant/page-home/home-section-9/img-2.png" alt="AstraX" />
                                    <span className="text-uppercase fw-bold fs-8 text-primary bg-green-5 px-2 py-1 position-absolute top-100 end-0 translate-middle-y me-5">consultancy</span>
                                </Link>
                                <div className="card-news-body bg-white p-4 rounded-0">
                                    <div className="d-flex card-news-information mt-2 gap-4">
                                        <div className="d-flex align-items-center gap-1">
                                            <img src="/assets/img/finance-consultant-img/template/icons/icon-1.svg" alt="AstraX" />
                                            <p className="mb-0">December 21, 2025</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-1">
                                            <img src="/assets/img/finance-consultant-img/template/icons/icon-2.svg" alt="AstraX" />
                                            <span className="opacity-50">By</span>
                                            <Link href="#" className="mb-0">
                                                Admin
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-news-title mt-2 mb-4">
                                        <Link href="#">
                                            <h6>2025: brace for the 'big one' cyber attack.</h6>
                                        </Link>
                                    </div>
                                    <Link href="#" className="text-dark opacity-50 fs-7 fw-semibold">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-news position-relative mb-lg-0 mb-8" data-aos="fade-up" data-aos-delay={400}>
                                <Link href="#" className="card-news-img position-relative d-block">
                                    <img className="w-100" src="/assets/img/finance-consultant-img/pages/finance-consultant/page-home/home-section-9/img-3.png" alt="AstraX" />
                                    <span className="text-uppercase fw-bold fs-8 text-primary bg-green-5 px-2 py-1 position-absolute top-100 end-0 translate-middle-y me-5">consultancy</span>
                                </Link>
                                <div className="card-news-body bg-white p-4 rounded-0">
                                    <div className="d-flex card-news-information mt-2 gap-4">
                                        <div className="d-flex align-items-center gap-1">
                                            <img src="/assets/img/finance-consultant-img/template/icons/icon-1.svg" alt="AstraX" />
                                            <p className="mb-0">December 21, 2025</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-1">
                                            <img src="/assets/img/finance-consultant-img/template/icons/icon-2.svg" alt="AstraX" />
                                            <span className="opacity-50">By</span>
                                            <Link href="#" className="mb-0">
                                                Admin
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-news-title mt-2 mb-4">
                                        <Link href="#">
                                            <h6>2025: brace for the 'big one' cyber attack.</h6>
                                        </Link>
                                    </div>
                                    <Link href="#" className="text-dark opacity-50 fs-7 fw-semibold">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
