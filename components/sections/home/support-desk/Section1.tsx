import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*support-desk home section 1*/}
            <section className="support-desk-home-section-1 bg-secondary-2 position-relative overflow-hidden pb-120 pt-100">
                <div className="container position-relative z-1">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-4 col-md-12">
                            <span className="border-bottom border-primary btn-text">Security & Performance</span>
                            <h1 className="text-dark mt-3 text-anime-style-3">
                                Secure &amp; High-Performance <span className="border-bottom border-primary border-4">Solutions.</span>
                            </h1>
                            <div className="d-flex align-items-center gap-4 mt-4">
                                <Link href="/pricing" className="btn btn-primary hover-up">
                                    <span>try for free</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                        <g clipPath="url(#clip0_828_193)">
                                            <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                        </g>
                                    </svg>
                                </Link>
                                <Link href="tel:+123456789">
                                    <span className="fw-bold fs-7">+(123) 456 789 00</span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-7 offset-lg-1 text-lg-end">
                            <div className="position-relative d-inline-block mt-lg-0 mt-5 text-center pb-9">
                                <img data-aos="fade-up" className="rounded-3" src="/assets/img/support-desk-img/pages/support-desk/page-home/home-section-1/img-1.png" alt="AstraX" />
                                <div className="d-none d-md-block" data-aos="fade-up" data-aos-delay={200}>
                                    <img className="rounded-3 position-md-absolute bottom-0 start-lg-100 end-0 translate-middle-lg-x pe-lg-10" src="/assets/img/support-desk-img/pages/support-desk/page-home/home-section-1/img-2.png" alt="AstraX" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
