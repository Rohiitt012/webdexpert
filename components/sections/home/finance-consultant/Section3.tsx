import Link from "next/link";

export default function Section3() {
    return (
        <>
            {/*finance-consultant home section 3*/}
            <section className="finance-consultant-home-section-3 position-relative overflow-hidden pb-120 pt-120">
                <div className="container position-relative z-1">
                    <div className="row mb-80">
                        <div className="col-lg-6">
                            <div>
                                <span className="fs-7 fw-medium bg-primary px-2 py-1 text-dark text-capitalize">since from 1990</span>
                                <h1 className="my-3 text-anime-style-3">
                                    Solutions today for <br />
                                    tomorrow’s success
                                </h1>
                                <Link href="/contact" className="btn btn-outline-secondary mt-auto" data-aos="fade-up" data-aos-delay={400}>
                                    get in touch
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                        <g clipPath="url(#clip0_1020_1427)">
                                            <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="#001D21" />
                                        </g>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-lg-0 mt-8">
                            <nav>
                                <div className="nav nav-tabs border-bottom-0 mb-5" id="nav-tab" role="tablist">
                                    <button aria-label="Our mission" data-aos="fade-left" data-aos-delay={0} className="nav-link position-relative btn-text active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                                        Our mission
                                        <span className="underline" />
                                    </button>
                                    <button aria-label="our vision" data-aos="fade-left" data-aos-delay={200} className="nav-link position-relative btn-text" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                                        our vision
                                        <span className="underline" />
                                    </button>
                                    <button aria-label="expertise" data-aos="fade-left" data-aos-delay={400} className="nav-link position-relative btn-text" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                                        expertise
                                        <span className="underline" />
                                    </button>
                                </div>
                            </nav>
                            <div className="tab-content wow img-custom-anim-top" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex={0}>
                                    <p className="wow img-custom-anim-top">We offer a wide range of digital marketing services that cater to business of all sizes. A forward-thinking and clever approach. Our team will develop a practical strategy as well as manage and coordinate your project campaign. We guarantee excellent results.</p>
                                </div>
                                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex={0}>
                                    <p className="wow img-custom-anim-top">We offer a wide range of digital marketing services that cater to business of all sizes. A forward-thinking and clever approach. Our team will develop a practical strategy as well as manage and coordinate your project campaign. We guarantee excellent results.</p>
                                </div>
                                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex={0}>
                                    <p className="wow img-custom-anim-top">We offer a wide range of digital marketing services that cater to business of all sizes. A forward-thinking and clever approach. Our team will develop a practical strategy as well as manage and coordinate your project campaign. We guarantee excellent results.</p>
                                </div>
                            </div>
                            <div className="mt-5">
                                <Link href="tel:+123456789" className="d-flex gap-2" data-aos="fade-up" data-aos-delay={200}>
                                    <div className="icon icon-sm icon-shape bg-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <path d="M15.4139 0.777713C15.7576 0.871463 16.0076 1.15271 16.0076 1.49646C16.0076 9.52771 9.50763 15.9965 1.50763 15.9965C1.13263 15.9965 0.851376 15.7777 0.757626 15.434L0.00762601 12.184C-0.054874 11.8402 0.101376 11.4652 0.445126 11.309L3.94513 9.80896C4.25763 9.68396 4.60138 9.77771 4.82013 10.0277L6.38263 11.934C8.82013 10.7777 10.7889 8.77771 11.9139 6.40271L10.0076 4.84021C9.75763 4.62146 9.66388 4.27771 9.78888 3.96521L11.2889 0.465213C11.4451 0.121463 11.8201 -0.0660369 12.1639 0.0277131L15.4139 0.777713Z" fill="#001D21" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="mb-0">Get Support:</p>
                                        <p className="text-dark fw-bold mb-0">Contact: +91 98188 06393</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <img data-aos="zoom-in" src="/assets/img/finance-consultant-img/pages/finance-consultant/page-home/home-section-3/img-1.png" alt="AstraX" />
                </div>
            </section>
        </>
    );
}
