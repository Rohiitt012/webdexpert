import Link from "next/link";

export default function Section6() {
    return (
        <>
            {/*support-desk home section 6*/}
            <section className="support-desk-home-section-6 position-relative overflow-hidden bg-dark">
                <div className="bg-white rounded-top-5 pt-120 pb-120">
                    <div className="container">
                        <div className="text-center mb-80">
                            <span className="btn-text border-bottom border-primary">insights</span>
                            <h2 className="text-dark my-3 text-anime-style-3">
                                Company news <span className="border-4 border-bottom border-primary">feeds</span>
                            </h2>
                        </div>
                        <div className="row g-5">
                            <div className="col-lg-4">
                                <div data-aos="fade-up" data-aos-delay={200} className="zoom-img">
                                    <div className="d-flex justify-content-between">
                                        <span className="btn-text text-secondary-2">
                                            by <Link href="#">alonso</Link>
                                        </span>
                                        <span className="btn-text text-primary">tax, finance</span>
                                    </div>
                                    <div className="rounded-4 overflow-hidden my-5 d-inline-flex position-relative">
                                        <Link href="/blog-details">
                                            <img src="/assets/img/support-desk-img/pages/support-desk/page-home/home-section-6/img-1.png" alt="AstraX" />
                                        </Link>
                                        <div className="position-absolute top-0 end-0 m-4">
                                            <div className="icon-shape icon-80 rounded-4 bg-white text-center d-flex flex-column justify-content-center">
                                                <h5 className="text-primary mb-0">10</h5>
                                                <p className="text-dark fs-7 mb-0">Nov</p>
                                            </div>
                                        </div>
                                    </div>
                                    <h6>
                                        <Link href="/blog-details"> The premier choice for business marketing highly. </Link>
                                    </h6>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div data-aos="fade-up" data-aos-delay={400} className="zoom-img">
                                    <div className="d-flex justify-content-between">
                                        <span className="btn-text text-secondary-2">
                                            by <Link href="#">alonso</Link>
                                        </span>
                                        <span className="btn-text text-primary">tax, finance</span>
                                    </div>
                                    <div className="rounded-4 overflow-hidden my-5 d-inline-flex position-relative">
                                        <Link href="/blog-details">
                                            <img src="/assets/img/support-desk-img/pages/support-desk/page-home/home-section-6/img-2.png" alt="AstraX" />
                                        </Link>
                                        <div className="position-absolute top-0 end-0 m-4">
                                            <div className="icon-shape icon-80 rounded-4 bg-white text-center d-flex flex-column justify-content-center">
                                                <h5 className="text-primary mb-0">10</h5>
                                                <p className="text-dark fs-7 mb-0">Nov</p>
                                            </div>
                                        </div>
                                    </div>
                                    <h6>
                                        <Link href="/blog-details"> We help you find the perfect tutor. It's completely free. </Link>
                                    </h6>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div data-aos="fade-up" data-aos-delay={600} className="zoom-img">
                                    <div className="d-flex justify-content-between">
                                        <span className="btn-text text-secondary-2">
                                            by <Link href="#">alonso</Link>
                                        </span>
                                        <span className="btn-text text-primary">tax, finance</span>
                                    </div>
                                    <div className="rounded-4 overflow-hidden my-5 d-inline-flex position-relative">
                                        <Link href="/blog-details">
                                            <img src="/assets/img/support-desk-img/pages/support-desk/page-home/home-section-6/img-3.png" alt="AstraX" />
                                        </Link>
                                        <div className="position-absolute top-0 end-0 m-4">
                                            <div className="icon-shape icon-80 rounded-4 bg-white text-center d-flex flex-column justify-content-center">
                                                <h5 className="text-primary mb-0">10</h5>
                                                <p className="text-dark fs-7 mb-0">Nov</p>
                                            </div>
                                        </div>
                                    </div>
                                    <h6>
                                        <Link href="/blog-details"> Grow sales and stay ahead in the competitive market... </Link>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
