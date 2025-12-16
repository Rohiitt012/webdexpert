import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*event-home home section 1*/}
            <section className="event-home-section-1 position-relative pt-120 pb-120 overflow-hidden">
                <div className="container">
                        <div className="parallax-item">
                        <div className="position-relative d-inline-block" data-aos="zoom-in">
                            <img src="/assets/img/event-img/pages/event/page-home/home-section-1/img-tag.png" alt="Xzect Labs" />
                            <div className="position-absolute top-50 start-50 translate-middle w-100 h-100 d-flex flex-column justify-content-between p-4">
                                <span className="text-white fw-semibold fs-7">
                                    20-21th <br className="d-block" />
                                    <span className="text-uppercase">of december</span>
                                </span>
                                <h6 className="text-white mt-auto">Brooklyn</h6>
                            </div>
                        </div>
                    </div>
                    <div className="position-relative">
                        <h1 className="fs-200 mb-0 position-relative z-1 text-anime-style-2">Cyborg</h1>
                        <h1 className="fs-200 stroke text-white mb-0 text-anime-style-2">Conference</h1>
                        <img className="position-absolute bottom-0 end-0 mb-10 pb-6 z-0 d-none d-lg-block wow img-custom-anim-left" data-wow-delay=".8s" src="/assets/img/event-img/pages/event/page-home/home-section-1/img-1.png" alt="Xzect Labs" />
                    </div>
                    <div className="d-flex justify-content-end">
                        <a href="/ticket" data-text="buy ticket" className="btn-primary btn-change-text bdr-0" data-aos="fade-up">
                            <span>buy ticket</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                <g clipPath="url(#clip0_1152_490)">
                                    <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
