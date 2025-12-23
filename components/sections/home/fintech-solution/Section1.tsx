import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*fintech-solution section 1*/}
            <section className="fintech-solution-section-1">
                <div className=" position-relative pt-lg-120 pt-200 pb-md-0 pb-10 bg-light-2 m-3 rounded-4 overflow-hidden">
                    <div className="position-absolute top-0 start-0 end-0 bottom-0 m-4">
                        <img className="w-100 h-100" src="/assets/img/fintech-solution-img/pages/fintech-solution/page-home/home-section-1/img-dot.png" alt="AstraX" />
                    </div>
                    <div className="container position-relative z-1 text-lg-start text-center">
                        <div className="row align-items-center position-relative">
                            <div className="position-absolute bottom-0 start-0 ms-lg-10 ps-lg-10 z-2 d-none d-md-block">
                                <div className="position-relative d-inline-block ms-lg-10 ps-7">
                                    <div className="position-absolute bottom-100 start-100 alltuchtopdown">
                                        <div className="icon-shape icon-140 bg-white position-relative text-center d-flex flex-column" data-aos="zoom-in">
                                            <h2 className="count mb-0 text-dark position-relative z-1">
                                                <span className="odometer text-nowrap" data-count={2} />%
                                            </h2>
                                            <p className="fs-7 fw-bold">ROI Growth</p>
                                        </div>
                                    </div>
                                    <div className="rightToLeft">
                                        <div className="icon-shape icon-140 bg-dark position-relative text-center d-flex flex-column" data-aos="zoom-in">
                                            <h2 className="count mb-0 text-white position-relative z-1">
                                                <span className="odometer text-nowrap" data-count={5} />
                                                k+
                                            </h2>
                                            <p className="fs-7 fw-bold text-white">Customers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12 px-md-0 position-relative">
                                <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-3 mb-3">
                                    <span className="small-line" />
                                    <span className="btn-text text-primary">XzectLabs</span>
                                </div>
                                <h1 className="mb-8 text-anime-style-2">Custom CRM <br /> Development.</h1>
                                <Link href="/contact" className="btn btn-primary" data-aos="fade-up">
                                    <span>get started now</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                        <g clipPath="url(#clip0_964_205)">
                                            <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                        </g>
                                    </svg>
                                </Link>
                                <Link href="https://www.youtube.com/watch?v=gXFATcwrO-U" className="btn btn-white bg-transparent popup-video hover-up">
                                    <i className="fa-solid fa-play text-dark" data-aos="zoom-in" />
                                    <span className="text-dark">how it works</span>
                                </Link>
                            </div>
                            <div className="col-lg-7 d-none d-md-block">
                                <div className="position-relative mt-lg-0 mt-80">
                                    <img className="position-relative z-1 wow img-custom-anim-left" src="/assets/img/fintech-solution-img/pages/fintech-solution/page-home/home-section-1/portrait.png" alt="AstraX" />
                                    <div className="position-absolute bottom-0 start-0 ms-lg-8 mb-6">
                                        <div className="bg-circle" data-aos="zoom-in" />
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
