import Link from "next/link";

export default function Section4() {
    return (
        <>
            {/*creative-studio section 4*/}
            <section className="creative-studio-section-4 position-relative overflow-hidden py-120">
                <div className="container">
                    <div className="text-center mb-80 wow img-custom-anim-left">
                        <h2>Clients feedback</h2>
                        <p>
                            Exclusive collaboration feature designed to make workflows <br />
                            smoother for your entire team is ready anytime.
                        </p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="card-testimonial p-md-6 p-5 rounded-4 bg-primary" data-aos="fade-up" data-aos-delay={0}>
                                <div className="d-flex gap-2">
                                    <i className="bi bi-star-fill text-white fs-10" />
                                    <i className="bi bi-star-fill text-white fs-10" />
                                    <i className="bi bi-star-fill text-white  fs-10" />
                                    <i className="bi bi-star-fill text-white fs-10" />
                                    <i className="bi bi-star-fill text-white fs-10" />
                                </div>
                                <Link href="#">
                                    <h6 className="mt-2 fs-20 text-white">Amazing design solution</h6>
                                </Link>
                                <p className="mb-0 mt-4 text-white">“ I've owned a lot of shirts, but this one stands out as a favorite for so many reasons. The fit is absolutely perfect—not too tight, not too loose—just right. The fabric is incredibly soft against the skin, making it feel like you're wearing a cloud. But what really sets it apart is how it seems to stay cool no matter the temperature. Plus, the water-resistant quality is a game-changer. I’ve worn it on drizzly days, and it barely showed any signs of moisture. Whether I'm out for a casual day or dressing up a bit, this shirt always delivers. Highly recommend! “</p>
                                <div className="d-flex align-items-center mt-5 position-relative z-1">
                                    <Link href="#">
                                        <img className="rounded-circle icon-shape icon-50" src="/assets/img/creative-studio-img/pages/creative-studio/page-home/home-section-4/img-1.png" alt="AstraX" />
                                    </Link>
                                    <div className="text-start ms-3">
                                        <Link href="#">
                                            <span className="fw-semibold text-white">Victoria L. Davis</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card-testimonial p-md-6 p-5 rounded-4 bg-secondary-2" data-aos="fade-up" data-aos-delay={200}>
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
                                <p className="mb-0 mt-4 text-dark">“ I've owned a lot of shirts, but this one stands out as a favorite for so many reasons. The fit is absolutely perfect—incredibly soft against the skin, making it feel like you're not too tight, not too loose—just right. ”</p>
                                <div className="d-flex align-items-center mt-5 position-relative z-1">
                                    <Link href="#">
                                        <img className="rounded-circle icon-shape icon-50" src="/assets/img/creative-studio-img/pages/creative-studio/page-home/home-section-4/img-2.png" alt="AstraX" />
                                    </Link>
                                    <div className="text-start ms-3">
                                        <Link href="#">
                                            <span className="fw-semibold">Victoria L. Davis</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card-testimonial p-md-6 p-5 rounded-4 bg-white border" data-aos="fade-up" data-aos-delay={400}>
                                <div className="d-flex gap-2">
                                    <i className="bi bi-star-fill text-primary fs-10" />
                                    <i className="bi bi-star-fill text-primary fs-10" />
                                    <i className="bi bi-star-fill text-primary  fs-10" />
                                    <i className="bi bi-star-fill text-primary fs-10" />
                                    <i className="bi bi-star-fill text-primary fs-10" />
                                </div>
                                <Link href="#">
                                    <h6 className="mt-2 fs-20">Web development</h6>
                                </Link>
                                <p className="mb-0 mt-4 text-dark">“ I've owned a lot of shirts, but this one stands out as a favorite for so many reasons. The fit is absolutely perfect—incredibly soft against the skin, making it feel like you're not too tight, not too loose—just right. ”</p>
                                <div className="d-flex align-items-center mt-5 position-relative z-1">
                                    <Link href="#">
                                        <img className="rounded-circle icon-shape icon-50" src="/assets/img/creative-studio-img/pages/creative-studio/page-home/home-section-4/img-3.png" alt="AstraX" />
                                    </Link>
                                    <div className="text-start ms-3">
                                        <Link href="#">
                                            <span className="fw-semibold">Victoria L. Davis</span>
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
