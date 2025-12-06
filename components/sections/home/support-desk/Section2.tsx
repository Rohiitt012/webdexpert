import Link from "next/link";

export default function Section2() {
    return (
        <>
            {/*support-desk home section 2*/}
            <section className="support-desk-home-section-2 position-relative overflow-hidden bg-secondary">
                <div className="bg-white rounded-top-5 py-120">
                    <div className="container">
                        <div className="row">
                            <div className="text-center">
                                <span className="btn-text border-bottom border-primary">get started today</span>
                                <h2 className="text-dark my-3 text-anime-style-3">
                                    Build your support base <span className="border-4 border-bottom border-primary">website</span>
                                </h2>
                            </div>
                        </div>
                        <div className="row mt-6 g-lg-5 g-4">
                            <div className="col-md-6">
                                <div className="rounded-5 bg-secondary px-lg-4 px-3 pb-0 pt-6 text-center" data-aos="fade-up" data-aos-delay={200}>
                                    <div className="px-lg-8 pb-7">
                                        <span className="btn-text border-bottom border-primary">design support</span>
                                        <Link href="/services">
                                            <h5 className="mb-3 mt-2">Help Desk Software</h5>
                                        </Link>
                                        <p>We offer a wide range of digital marketing services that cater to business of all sizes.</p>
                                    </div>
                                    <Link href="/services">
                                        <img src="/assets/img/support-desk-img/pages/support-desk/page-home/home-section-2/img-1.png" className="rounded-top-5" alt="AstraX" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="rounded-5 bg-secondary px-lg-4 px-3 pb-0 pt-6 text-center h-100" data-aos="fade-up" data-aos-delay={400}>
                                    <div className="px-lg-8 pb-7">
                                        <span className="btn-text border-bottom border-primary">ready faq</span>
                                        <Link href="/faq">
                                            <h5 className="mb-3 mt-2">Service Desk</h5>
                                        </Link>
                                        <p>We offer a wide range of digital marketing services that cater to business of all sizes.</p>
                                    </div>
                                    <Link href="/faq">
                                        <img src="/assets/img/support-desk-img/pages/support-desk/page-home/home-section-2/img-2.png" className="rounded-top-5" alt="AstraX" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="rounded-5 bg-dark px-md-7 px-4 pb-0 pt-7 d-lg-flex justify-content-between" data-aos="fade-up" data-aos-delay={400}>
                                    <div className="d-flex flex-column ">
                                        <div>
                                            <span className="btn-text border-bottom border-primary text-white">crm design</span>
                                            <Link href="#">
                                                <h5 className="text-white mb-3 mt-2">Customer Support Software</h5>
                                            </Link>
                                            <p>
                                                We offer a wide range of digital marketing services that <br />
                                                cater to business of all sizes.
                                            </p>
                                        </div>
                                        <div className="mt-lg-auto mt-5">
                                            <Link href="/contact" className="btn btn-white d-inline-flex mb-7">
                                                <span>Get Started</span>
                                                <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                    <g clipPath="url(#clip0_948_926)">
                                                        <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="#1AAA59" />
                                                    </g>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                    <Link href="/contact">
                                        <img src="/assets/img/support-desk-img/pages/support-desk/page-home/home-section-2/img-3.png" className="rounded-top-5" alt="AstraX" />
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
