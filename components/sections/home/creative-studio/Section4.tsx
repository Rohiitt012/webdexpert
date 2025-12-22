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
                                    <h6 className="mt-2 fs-20 text-white">Logo & Brand Identity</h6>
                                </Link>
                                <p className="mb-0 mt-4 text-white">“ XzectLabs created an incredible logo and complete brand identity for our startup. The team understood our vision perfectly and delivered a cohesive design system including colors, typography, and brand guidelines that truly represent who we are. Our brand now stands out in the market, and we've received countless compliments on our professional appearance. The attention to detail and creative approach exceeded our expectations. Highly recommend their branding services! “</p>
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
                                    <h6 className="mt-2 fs-20">Social Media Creatives</h6>
                                </Link>
                                <p className="mb-0 mt-4 text-dark">“ Working with XzectLabs for our social media creatives has been a game-changer. They consistently deliver eye-catching designs that align perfectly with our brand voice. Our engagement rates have increased significantly, and we're getting more followers than ever. The team is responsive, creative, and always delivers on time. Our social media presence has never looked better! ”</p>
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
                                    <h6 className="mt-2 fs-20">Website Banners & UI Graphics</h6>
                                </Link>
                                <p className="mb-0 mt-4 text-dark">“ XzectLabs designed stunning website banners and UI graphics that transformed our website's user experience. The designs are modern, clean, and maintain perfect brand consistency. Our bounce rate decreased, and conversions improved significantly. The team's understanding of user interface design principles is impressive, and they always deliver pixel-perfect graphics. ”</p>
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
