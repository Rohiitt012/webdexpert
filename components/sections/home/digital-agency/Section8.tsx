import Link from "next/link";

export default function Section8() {
    return (
        <>
            {/*digital-agency home section 8*/}
            <section className="digital-agency-home-section-8 position-relative overflow-hidden">
                <div className="container pb-120">
                    <div className="text-center">
                        <div className="mb-4 bg-primary rounded-pill border border-dark btn-text d-inline-block px-3 py-2">
                            <span className="text-dark">our blog</span>
                        </div>
                        <h2 className="mb-80 text-anime-style-3">
                            Questions? We're glad <br />
                            you asked.
                        </h2>
                    </div>
                    <div className="row">
                        <div className="d-flex flex-wrap flex-lg-nowrap align-items-center gap-5">
                            <div data-aos="fade-up" data-aos-delay={600} className="card-news position-relative">
                                <Link href="#" className="card-news-img position-relative d-block">
                                    <img className="w-100 rounded-4" src="/assets/img/digital-agency-img/pages/digital-agency/page-home/home-section-8/img-1.png" alt="AstraX" />
                                </Link>
                                <div className="card-news-body">
                                    <div className="d-flex card-news-information mt-5 gap-4">
                                        <div className="d-flex align-items-center gap-1">
                                            <img src="/assets/img/digital-agency-img/template/icons/icon-1.svg" alt="AstraX" />
                                            <p className="mb-0">December 21, 2025</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-1">
                                            <img src="/assets/img/digital-agency-img/template/icons/icon-2.svg" alt="AstraX" />
                                            <span className="opacity-50">By</span>
                                            <Link href="#" className="mb-0">
                                                Admin
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-news-title mt-2">
                                        <Link href="#">
                                            <h6 className="fs-20 text-anime-style-3 fw-semibold">#01 Brace for the 'big one' cyber attack as always.</h6>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-delay={400} className="card-news position-relative">
                                <Link href="#" className="card-news-img position-relative d-block">
                                    <img className="w-100 rounded-4" src="/assets/img/digital-agency-img/pages/digital-agency/page-home/home-section-8/img-2.png" alt="AstraX" />
                                </Link>
                                <div className="card-news-body">
                                    <div className="d-flex card-news-information mt-5 gap-4">
                                        <div className="d-flex align-items-center gap-1">
                                            <img src="/assets/img/digital-agency-img/template/icons/icon-1.svg" alt="AstraX" />
                                            <p className="mb-0">December 21, 2025</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-1">
                                            <img src="/assets/img/digital-agency-img/template/icons/icon-2.svg" alt="AstraX" />
                                            <span className="opacity-50">By</span>
                                            <Link href="#" className="mb-0">
                                                Admin
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-news-title mt-2">
                                        <Link href="#">
                                            <h6 className="fs-20 text-anime-style-3 fw-semibold">Company updated with the latest trends &amp; business news.</h6>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-delay={200} className="card-news position-relative mb-lg-0 mb-8 align-self-start">
                                <Link href="#" className="card-news-img position-relative d-block">
                                    <img className="w-100 rounded-4" src="/assets/img/digital-agency-img/pages/digital-agency/page-home/home-section-8/img-3.png" alt="AstraX" />
                                </Link>
                                <div className="card-news-body">
                                    <div className="d-flex card-news-information mt-5 gap-4">
                                        <div className="d-flex align-items-center gap-1">
                                            <img src="/assets/img/digital-agency-img/template/icons/icon-1.svg" alt="AstraX" />
                                            <p className="mb-0">December 21, 2025</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-1">
                                            <img src="/assets/img/digital-agency-img/template/icons/icon-2.svg" alt="AstraX" />
                                            <span className="opacity-50">By</span>
                                            <Link href="#" className="mb-0">
                                                Admin
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-news-title mt-2">
                                        <Link href="#">
                                            <h6 className="fs-20 text-anime-style-3 fw-semibold">We make the creative solutions for&nbsp;problems!</h6>
                                        </Link>
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
