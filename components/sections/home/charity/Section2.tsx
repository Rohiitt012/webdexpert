import Link from "next/link";

export default function Section2() {
    return (
        <>
            {/*charity-home home section 2*/}
            <section className="charity-home-section-2 position-relative bg-white overflow-hidden">
                <div className="pt-250 pb-250">
                    <div className="custom-container container position-relative">
                        <div className="d-none d-lg-block position-absolute top-0 start-0 translate-middle-y shape-img-1">
                            <div data-aos="fade-up" data-aos-delay={0}>
                                <img className="rounded-4" src="/assets/img/charity-img/pages/charity/page-home/home-section-2/img-1.png" alt="AstraX" />
                            </div>
                        </div>
                        <div className="d-none d-lg-block position-absolute top-100 start-0 translate-middle-y shape-img-2">
                            <div data-aos="fade-up" data-aos-delay={0}>
                                <img className="rounded-4" src="/assets/img/charity-img/pages/charity/page-home/home-section-2/img-2.png" alt="AstraX" />
                            </div>
                        </div>
                        <div className="d-none d-lg-block position-absolute top-0 end-0 translate-middle-y shape-img-3">
                            <div data-aos="fade-up" data-aos-delay={600}>
                                <img className="rounded-4" src="/assets/img/charity-img/pages/charity/page-home/home-section-2/img-3.png" alt="AstraX" />
                            </div>
                        </div>
                        <div className="d-none d-lg-block position-absolute top-100 end-0 pe-8 translate-middle-y shape-img-4">
                            <div data-aos="fade-up" data-aos-delay={600}>
                                <img className="rounded-4" src="/assets/img/charity-img/pages/charity/page-home/home-section-2/img-4.png" alt="AstraX" />
                            </div>
                        </div>
                        <div className="position-relative">
                            <div className="row">
                                <div className="col-lg-6 mx-auto">
                                    <div className="text-center border-bottom pb-5">
                                        <div className="number-step d-flex align-items-center justify-content-center gap-3">
                                            <i className="fa-solid fa-heart text-primary" />
                                            <span className="btn-text">since from 2020</span>
                                        </div>
                                        <h2 className="text-dark my-3 text-anime-style-3">
                                            Advanced Automation & Workflow Solutions <br />
                                            for
                                            <span className="bg-white border border-dark rounded-5 px-2 text-dark text-opacity-50">Modern Businesses</span>
                                        </h2>
                                    </div>
                                    <div className="d-flex flex-wrap justify-content-center gap-5 mt-5">
                                        <div className="d-flex align-items-center gap-md-4 gap-3">
                                            <h2 className="count mb-0">
                                                <span className="odometer text-nowrap" data-count={43} />
                                                k+
                                            </h2>
                                            <p className="mb-0">
                                                Automation <br className="d-block" />
                                                Integrations
                                            </p>
                                        </div>
                                        <div className="d-flex align-items-center gap-md-4 gap-3">
                                            <h2 className="count mb-0">
                                                <span className="odometer text-nowrap" data-count={7} />M
                                            </h2>
                                            <p className="mb-0">
                                                Active <br className="d-block" />
                                                Users
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-center mt-7">
                                        <Link href="/donation-details" className="btn btn-primary hover-up">
                                            <span className="text-dark">click here</span>
                                            <img src="/assets/img/charity-img/pages/charity/icons/arrow-right.svg" alt="AstraX" />
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
