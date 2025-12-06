import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*crypto-agency home section 1*/}
            <section className="crypto-agency-home-section-1 position-relative pt-200" data-background="/assets/img/crypto-agency-img/pages/crypto-agency/page-home/home-section-1/img-bg.png">
                <div className="container position-relative z-5 pt-8 text-lg-start text-center">
                    <div className="row align-items-center pb-150">
                        <div className="col-lg-5 col-md-12">
                            <span className="border-linear btn-text text-white px-3 py-2 rounded-4">Update 2.0: Ai agency</span>
                            <h1 className="mt-3 mb-6 text-anime-style-3">Revolutionize your digital seas products.</h1>
                            <Link href="about" className="btn btn-primary" data-aos="fade-up" data-aos-delay={200}>
                                <span className="text-dark"> explore more </span>
                                <i className="fa-solid fa-arrow-right-long text-dark" />
                            </Link>
                        </div>
                        <div className="col-lg-5 ms-auto mt-lg-0 mt-8">
                            <div className="position-relative z-1">
                                <div className="parallax-item">
                                    <img className="wow img-custom-anim-left" src="/assets/img/crypto-agency-img/pages/crypto-agency/page-home/home-section-1/img-bitcoin.png" alt="AstraX" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="position-relative">
                    <div className="position-absolute top-50 start-50 translate-middle-x w-100 h-50 bg-dark-2" />
                    <div className="container">
                        <div className="row">
                            <div className="token-sale border-linear p-md-8 p-7 rounded-5 position-relative" data-aos="fade-up">
                                <div className="row g-5 align-items-end">
                                    <div className="col-lg-6">
                                        <div className="d-flex gap-4 flex-md-nowrap flex-wrap">
                                            <div className="text-center">
                                                <h2 className="mb-0">70</h2>
                                                <span className="text-white text-opacity-50">Days</span>
                                            </div>
                                            <h2 className="mb-3 text-white text-opacity-50">:</h2>
                                            <div className="text-center">
                                                <h2 className="mb-0">15</h2>
                                                <span className="text-white text-opacity-50">Hours</span>
                                            </div>
                                            <h2 className="mb-3 text-white text-opacity-50">:</h2>
                                            <div className="text-center">
                                                <h2 className="mb-0">
                                                    <span className="odometer" data-count={35} />
                                                </h2>
                                                <span className="text-white text-opacity-50">Minutes</span>
                                            </div>
                                            <h2 className="mb-3 text-white text-opacity-50">:</h2>
                                            <div className="text-center">
                                                <h2 className="mb-0">
                                                    <span className="odometer" data-count={11} />
                                                </h2>
                                                <span className="text-white text-opacity-50">Seconds</span>
                                            </div>
                                        </div>
                                        <div className="border-linear p-5 mt-5 rounded-4">
                                            <div className="position-relative py-5">
                                                <div className="progress position-relative overflow-visible" role="progressbar" aria-label="Basic example" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                                                    <div className="progress-bar rounded-pill wow img-custom-anim-left" style={{ width: "50%" }} />
                                                    <span className="text-primary position-absolute bottom-0 end-50 mb-2 fs-7 fw-medium pe-3">200,000, XRB</span>
                                                </div>
                                                <span className="text-white position-absolute top-0 end-0 mb-2 fs-7 fw-medium">500,000,000 XRB</span>
                                                <span className="text-white text-opacity-50 position-absolute bottom-0 end-0 mt-2 fs-7 fw-medium">RXB RAISED : 500.000</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="d-flex gap-4 ms-lg-8 flex-md-nowrap flex-wrap">
                                            <div className="d-flex align-items-end gap-4">
                                                <div className="position-relative text-center wow fadeInUp">
                                                    <h6 className="mb-0 text-linear">80%</h6>
                                                    <img src="/assets/img/crypto-agency-img/pages/crypto-agency/page-home/home-section-1/col-1.png" alt="AstraX" />
                                                </div>
                                                <div className="position-relative text-center wow fadeInUp">
                                                    <h6 className="mb-0 text-linear">50%</h6>
                                                    <img src="/assets/img/crypto-agency-img/pages/crypto-agency/page-home/home-section-1/col-2.png" alt="AstraX" />
                                                </div>
                                                <div className="position-relative text-center wow fadeInUp">
                                                    <h6 className="mb-0 text-linear">60%</h6>
                                                    <img src="/assets/img/crypto-agency-img/pages/crypto-agency/page-home/home-section-1/col-3.png" alt="AstraX" />
                                                </div>
                                                <div className="position-relative text-center wow fadeInUp">
                                                    <h6 className="mb-0 text-linear">70%</h6>
                                                    <img src="/assets/img/crypto-agency-img/pages/crypto-agency/page-home/home-section-1/col-4.png" alt="AstraX" />
                                                </div>
                                            </div>
                                            <div className="ms-md-auto mx-auto mt-auto text-center">
                                                <h6 className="text-primary">
                                                    Tokens sale <br className="d-block" />
                                                    <span className="text-white">allocation</span>
                                                </h6>
                                                <Link href="pricing" className="btn btn-linear text-nowrap text-capitalize">
                                                    Buy Tokens
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner position-absolute top-0 start-0 z-0">
                    <img data-aos="fade-down-right" src="/assets/img/crypto-agency-img/pages/crypto-agency/page-home/home-section-1/ellipse.png" alt="AstraX" />
                </div>
            </section>
        </>
    );
}
