import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*conference home section 1*/}
            <section className="conference-section-1 position-relative pt-300 pb-250 border-bottom overflow-hidden" data-background="/assets/img/conference-img/pages/conference/page-home/home-section-1/bg-img.png">
                <div className="overlay-red" />
                <div className="position-absolute bottom-0 end-0 mb-80 me-10 z-1">
                    <img src="/assets/img/conference-img/pages/conference/page-home/home-section-1/pattern.png" alt="AstraX" />
                </div>
                <div className="container position-relative z-1 pt-8 text-lg-start text-center">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12 px-md-0">
                            <span className="content-top btn-text text-white">business conference 2025: tokyo</span>
                            <svg width="100%">
                                <text className="ds-1" x="50%" y="50%">
                                    ROI Business
                                </text>
                            </svg>
                            <h1 className="text-white ds-1" data-aos="fade-right" data-aos-delay={500}>
                                Conference
                            </h1>
                            <div className="timer d-flex gap-4 justify-content-center justify-content-lg-start">
                                <div className="text-center">
                                    <h6 className="mb-0 text-white icon-shape count icon-60 rounded-circle bg-transparent border border-white border-opacity-25 time-box">
                                        <span id="days" className="time-value">
                                            12
                                        </span>
                                    </h6>
                                    <p className="btn-text text-white mt-2">days</p>
                                </div>
                                <div className="text-center">
                                    <h6 className="mb-0 text-white icon-shape count icon-60 rounded-circle bg-transparent border border-white border-opacity-25 time-box">
                                        <span id="hours" className="time-value">
                                            22
                                        </span>
                                    </h6>
                                    <p className="btn-text text-white mt-2">hours</p>
                                </div>
                                <div className="text-center">
                                    <h6 className="mb-0 text-white icon-shape count icon-60 rounded-circle bg-transparent border border-white border-opacity-25 time-box">
                                        <span id="minutes" className="time-value">
                                            18
                                        </span>
                                    </h6>
                                    <p className="btn-text text-white mt-2">minutes</p>
                                </div>
                                <div className="text-center">
                                    <h6 className="mb-0 text-white icon-shape count icon-60 rounded-circle bg-transparent border border-white border-opacity-25 time-box">
                                        <span id="seconds" className="time-value">
                                            44
                                        </span>
                                    </h6>
                                    <p className="btn-text text-white mt-2">seconds</p>
                                </div>
                            </div>
                            <Link href="/ticket" className="btn btn-white mt-4 btn-slide-bottom btn-slide-bottom--red hover-up">
                                <span>book ticket</span>
                                <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                    <g clipPath="url(#clip0_964_205)">
                                        <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="#D60A2B" />
                                    </g>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
