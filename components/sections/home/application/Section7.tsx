import Link from "next/link";

export default function Section7() {
    return (
        <>
            {/*application home section 7*/}
            <section className="application-home-section-7 pt-120 pb-120 overflow-hidden">
                <div className="container">
                    <div className="mb-80 text-center position-relative">
                        <div className="position-absolute top-100 start-50 translate-middle">
                            <img className="flickering" src="/assets/img/application-img/pages/application/page-home/home-section-7/img-circle.png" alt="AstraX" />
                        </div>
                        <div className="d-flex align-items-center justify-content-center gap-3 top-content pb-4">
                            <span className="line" />
                            <span className="fw-bold text-primary">testimonials</span>
                            <span className="line" />
                        </div>
                        <h2 className="text-anime-style-2">
                            Meet with our <br />
                            happy client feedback
                        </h2>
                    </div>
                    <div className="row mt-80 g-lg-0 g-5 blog-testimonials">
                        <div className="col-lg-4 border-end-lg border-bottom border-bottom-lg-0 pb-lg-0 pb-5 border-primary" data-aos="fade-up" data-aos-delay={200}>
                            <div className="card-testimonial px-lg-7 rounded-0">
                                <div className="d-flex gap-2">
                                    <i className="bi bi-star-fill text-primary fs-10" />
                                    <i className="bi bi-star-fill text-primary fs-10" />
                                    <i className="bi bi-star-fill text-primary  fs-10" />
                                    <i className="bi bi-star-fill text-primary fs-10" />
                                    <i className="bi bi-star-fill text-primary fs-10" />
                                </div>
                                <Link href="#">
                                    <h6 className="mt-2 fs-20">Amazing design solution</h6>
                                </Link>
                                <p className="mb-0 mt-4">“ Hands down one of the best shirts I’ve ever owned. Fits great, feels amazing, seems to stay cool and is somewhat water resistant anyway. “</p>
                                <div className="d-flex align-items-center mt-5 position-relative z-1">
                                    <Link href="#">
                                        <img className="rounded-circle icon-shape icon-50" src="/assets/img/application-img/pages/application/page-about/author-3.png" alt="AstraX" />
                                    </Link>
                                    <div className="text-start ms-3">
                                        <Link href="#">
                                            <span className="fw-bold">Isabella F. Monroe</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 border-end-lg border-bottom border-bottom-lg-0 pb-lg-0 pb-5 border-primary" data-aos="fade-up" data-aos-delay={400}>
                            <div className="card-testimonial px-lg-7 rounded-0">
                                <div className="d-flex gap-2">
                                    <i className="bi bi-star-fill text-primary fs-10" />
                                    <i className="bi bi-star-fill text-primary fs-10" />
                                    <i className="bi bi-star-fill text-primary  fs-10" />
                                    <i className="bi bi-star-fill text-primary fs-10" />
                                    <i className="bi bi-star-fill text-primary fs-10" />
                                </div>
                                <Link href="#">
                                    <h6 className="mt-2 fs-20">Great support</h6>
                                </Link>
                                <p className="mb-0 mt-4">“ Hands down one of the best shirts I’ve ever owned. Fits great, feels amazing, seems to stay cool and is somewhat water resistant anyway. “</p>
                                <div className="d-flex align-items-center mt-5 position-relative z-1">
                                    <Link href="#">
                                        <img className="rounded-circle icon-shape icon-50" src="/assets/img/application-img/pages/application/page-about/author-4.png" alt="AstraX" />
                                    </Link>
                                    <div className="text-start ms-3">
                                        <Link href="#">
                                            <span className="fw-bold">Isabella F. Monroe</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay={600}>
                            <div className="card-testimonial px-lg-7 rounded-0">
                                <div className="d-flex gap-2">
                                    <i className="bi bi-star-fill text-primary fs-10" />
                                    <i className="bi bi-star-fill text-primary fs-10" />
                                    <i className="bi bi-star-fill text-primary fs-10" />
                                    <i className="bi bi-star-fill text-primary fs-10" />
                                    <i className="bi bi-star-fill text-primary fs-10" />
                                </div>
                                <Link href="#">
                                    <h6 className="mt-2 fs-20">Development</h6>
                                </Link>
                                <p className="mb-0 mt-4">“ Hands down one of the best shirts I’ve ever owned. Fits great, feels amazing, seems to stay cool and is somewhat water resistant anyway. “</p>
                                <div className="d-flex align-items-center mt-5 position-relative z-1">
                                    <Link href="#">
                                        <img className="rounded-circle icon-shape icon-50" src="/assets/img/application-img/pages/application/page-about/author-5.png" alt="AstraX" />
                                    </Link>
                                    <div className="text-start ms-3">
                                        <Link href="#">
                                            <span className="fw-bold">Sophia J. Carter</span>
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
