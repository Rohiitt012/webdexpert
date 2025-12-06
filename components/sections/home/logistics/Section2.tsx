import Link from "next/link";

export default function Section2() {
    return (
        <>
            {/*logistics-home home section 2*/}
            <section className="logistics-home-section-2 position-relative overflow-hidden pb-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-10">
                            <div className="d-flex align-items-center gap-3" data-aos="fade-left" data-aos-delay={200}>
                                <div className="d-none d-md-block">
                                    <span className="icon-shape icon-40 bg-primary rounded-circle">
                                        <i className="fa-solid fa-arrow-right-long text-white rotate-45" />
                                    </span>
                                </div>
                                <h2 className="stroke-2 text-white text-start mb-0">Serve quality</h2>
                            </div>
                            <h2 className="text-anime-style-2">logistic solutions</h2>
                            <p className="py-3 text-anime-style-1">Our services include comprehensive financial planning, investment management, retirement planning, tax planning, and more.</p>
                            <div className="row g-3 position-relative align-items-center justify-content-between border-top border-bottom py-3">
                                <div className="col-md-6 d-flex align-items-center">
                                    <div className="counter-item-cover counter-item">
                                        <div className="content text-center mx-auto">
                                            <h2 className="count mb-0">
                                                4.
                                                <span className="odometer text-nowrap" data-count={3} />
                                                k+
                                            </h2>
                                        </div>
                                    </div>
                                    <p className="ms-3 text-dark mb-0" data-aos="zoom-in" data-aos-delay={200}>
                                        Website’s
                                        <br className="d-block" />
                                        Powering
                                    </p>
                                </div>
                                <div className="col-md-6 d-flex align-items-center">
                                    <span className="line-verticarl h-50 ms-4 position-absolute top-50 start-50 translate-middle d-none d-md-block" />
                                    <div className="counter-item-cover counter-item ms-md-auto">
                                        <div className="content ">
                                            <h2 className="count mb-0">
                                                <span className="odometer text-nowrap" data-count={7} />
                                                M+
                                            </h2>
                                        </div>
                                    </div>
                                    <p className="ms-3 text-dark mb-0" data-aos="zoom-in" data-aos-delay={200}>
                                        Chats in <br className="d-block" />
                                        Last 2002
                                    </p>
                                </div>
                            </div>
                            <Link href="/contact" className="d-flex align-items-center gap-3 mt-5" data-aos="fade-up" data-aos-delay={400}>
                                <span className="icon-shape icon-40 bg-white border border-primary-2 rounded-circle hover-up">
                                    <i className="fa-solid fa-arrow-right-long text-primary rotate-45" />
                                </span>
                                <span className="btn-text text-primary-2">get started</span>
                            </Link>
                        </div>
                        <div className="col-lg-6 offset-lg-1 mt-lg-0 mt-8">
                            <img data-aos="zoom-in" src="/assets/img/logistics-img/pages/logistics/page-home/home-section-2/img-1.png" alt="AstraX" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
