import Link from "next/link";

export default function Section8() {
    return (
        <>
            {/*marketing-agency-home home section 8*/}
            <section className="marketing-agency-home-section-8 pt-120 pb-120 position-relative overflow-hidden">
                <div className="container" style={{ backgroundImage: 'none' }}>
                    <div className="mb-80 text-center">
                        <span className="content-top btn-text text-primary d-flex align-items-center justify-content-center">
                            <div className="line" />
                            <span className="mx-3">blog feeds</span>
                            <div className="line" />
                        </span>
                        <h2 className="mt-3 mb-80 text-anime-style-2">Company insights</h2>
                    </div>
                    <div className="row wow img-custom-anim-top">
                        <div className="d-flex flex-wrap flex-lg-nowrap align-items-center gap-5">
                            <div className="card-news position-relative">
                                <Link href="/blog-details" className="card-news-img position-relative d-block zoom-img">
                                    <img className="w-100" src="/assets/img/marketing-agency-img/pages/marketing-agency/page-home/home-section-8/img-1.png" alt="AstraX" />
                                </Link>
                                <div className="card-news-body">
                                    <div className="d-flex card-news-information mt-5 gap-4">
                                        <div className="d-flex align-items-center gap-1">
                                            <img src="/assets/img/marketing-agency-img/template/icons/icon-1.svg" alt="AstraX" />
                                            <p className="mb-0">December 21, 2025</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-1">
                                            <img src="/assets/img/marketing-agency-img/template/icons/icon-2.svg" alt="AstraX" />
                                            <span className="opacity-50">By</span>
                                            <Link href="#" className="mb-0">
                                                Admin
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-news-title mt-2">
                                        <Link href="/blog-details">
                                            <h6 className="fs-20 fw-semibold">#01 Brace for the 'big one' cyber attack as always.</h6>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card-news position-relative">
                                <Link href="/blog-details" className="card-news-img position-relative d-block zoom-img">
                                    <img className="w-100" src="/assets/img/marketing-agency-img/pages/marketing-agency/page-home/home-section-8/img-2.png" alt="AstraX" />
                                </Link>
                                <div className="card-news-body">
                                    <div className="d-flex card-news-information mt-5 gap-4">
                                        <div className="d-flex align-items-center gap-1">
                                            <img src="/assets/img/marketing-agency-img/template/icons/icon-1.svg" alt="AstraX" />
                                            <p className="mb-0">December 21, 2025</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-1">
                                            <img src="/assets/img/marketing-agency-img/template/icons/icon-2.svg" alt="AstraX" />
                                            <span className="opacity-50">By</span>
                                            <Link href="#" className="mb-0">
                                                Admin
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-news-title mt-2">
                                        <Link href="/blog-details">
                                            <h6 className="fs-20 fw-semibold">Company updated with the latest trends &amp; business news.</h6>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card-news position-relative mb-lg-0 mb-8 align-self-start">
                                <Link href="/blog-details" className="card-news-img position-relative d-block zoom-img">
                                    <img className="w-100" src="/assets/img/marketing-agency-img/pages/marketing-agency/page-home/home-section-8/img-3.png" alt="AstraX" />
                                </Link>
                                <div className="card-news-body">
                                    <div className="d-flex card-news-information mt-5 gap-4">
                                        <div className="d-flex align-items-center gap-1">
                                            <img src="/assets/img/marketing-agency-img/template/icons/icon-1.svg" alt="AstraX" />
                                            <p className="mb-0">December 21, 2025</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-1">
                                            <img src="/assets/img/marketing-agency-img/template/icons/icon-2.svg" alt="AstraX" />
                                            <span className="opacity-50">By</span>
                                            <Link href="#" className="mb-0">
                                                Admin
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-news-title mt-2">
                                        <Link href="/blog-details">
                                            <h6 className="fs-20 fw-semibold">We make the creative solutions for&nbsp;problems!</h6>
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
