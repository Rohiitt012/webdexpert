import Link from "next/link";

export default function Section3() {
    return (
        <>
            {/*crypto-agency-home-section-3*/}
            <section className="crypto-agency-home-section-3 position-relative py-120 overflow-hidden">
                <img className="position-absolute top-50 start-50 translate-middle z-0" src="/assets/img/crypto-agency-img/pages/crypto-agency/page-home/home-section-3/img-bg.png" alt="AstraX" />
                <div className="container position-relative z-25">
                    <div className="row">
                        <div className="col-lg-5 ms-lg-auto order-lg-2">
                            <svg width="100%">
                                <text className="fs-96" x="25%" y="50%">
                                    $99 T.
                                </text>
                            </svg>
                            <h2 className="text-anime-style-1">People from all around the world have purchased our tokens.</h2>
                            <Link href="/contact" className="btn btn-linear mt-7" data-aos="fade-up">
                                <span>get in toch</span>
                                <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                    <g clipPath="url(#clip0_2311_188)">
                                        <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="#50EEFA" />
                                    </g>
                                </svg>
                            </Link>
                        </div>
                        <div className="col-lg-6 pb-120 order-lg-1 mt-lg-0 mt-8">
                            <div className="position-relative d-inline-block">
                                <img data-aos="" className="rounded-4 wow img-custom-anim-top" src="/assets/img/crypto-agency-img/pages/crypto-agency/page-home/home-section-3/img-1.png" alt="AstraX" />
                                <img data-aos="fade-up" data-aos-delay={200} className="position-md-absolute top-0 start-50 ms-md-10 mt-md-10 mt-5 rounded-4 border border-4 border-dark" src="/assets/img/crypto-agency-img/pages/crypto-agency/page-home/home-section-3/img-2.png" alt="AstraX" />
                                <div data-aos="fade-right" data-aos-delay={400}>
                                    <img className="position-absolute top-100 start-0 translate-middle" src="/assets/img/crypto-agency-img/pages/crypto-agency/page-home/home-section-3/img-3.png" alt="AstraX" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
