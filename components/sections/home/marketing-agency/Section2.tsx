import Link from "next/link";

export default function Section2() {
    return (
        <>
            {/*marketing-agency-home section 2*/}
            <section className="marketing-agency-home-section-2 position-relative overflow-hidden py-120">
                <div className="container position-relative z-1">
                    <div className="text-center">
                        <div className="position-relative bg-white icon-shape icon-160 rounded-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width={43} height={50} viewBox="0 0 43 50" fill="none">
                                <g clipPath="url(#clip0_454_1335)">
                                    <path d="M4.09544 39.8806V14.9169L21.4982 4.79938L38.9052 14.9169V35.0812L21.4982 45.2006L12.2857 39.8437V19.7525L21.4982 14.3962L30.7143 19.7525V30.245L21.4982 35.6019L20.4766 35.0081V24.5894L25.6255 21.5944L21.4982 19.1956L16.3812 22.1725V37.425L21.4982 40.4012L34.8097 32.6619V17.3356L21.4982 9.59875L8.19089 17.3356V42.2606L21.4982 50L43 37.5V12.5L21.4982 0L0 12.5V37.5L4.09544 39.8806Z" fill="#794AFF" />
                                </g>
                            </svg>
                            <div className="position-absolute top-50 start-50 translate-middle w-100">
                                <h6 className="circle-text rotateme text-dark fw-semibold">we serve quality service base nyc - nyc</h6>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="text-center pt-60 pb-120">
                                <h2 className="text-anime-style-3 mb-0">
                                    Develop flexible pricing strategies <br />
                                    to effectively reach and engage your target <br />
                                    audience for better results.
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-3 col-md-6 wow img-custom-anim-top">
                            <h1 className="count mb-0 text-primary fs-128 fw-semibold text-nowrap">
                                <span className="odometer text-nowrap" data-count={99} />%
                            </h1>
                            <p className="text-dark fs-4">Strategic success &amp; customer satisfaction</p>
                            <Link href="/contact" className="btn btn-outline-secondary mt-5 hover-up">
                                <span>get in touch</span>
                                <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                    <g clipPath="url(#clip0_964_700)">
                                        <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                    </g>
                                </svg>
                            </Link>
                        </div>
                        <div className="col-lg-6 col-md-6 text-center">
                            <img data-aos="zoom-in" src="/assets/img/marketing-agency-img/pages/marketing-agency/page-home/home-section-2/img.png" alt="AstraX" />
                        </div>
                        <div className="col-lg-3">
                            <div className="border-bottom pb-60" data-aos="fade-up" data-aos-delay={200}>
                                <h6>Our mission</h6>
                                <p className="pt-2 mb-0">We offer a wide range of digital market services that cater to business of all sizes a forward-think and clever approach.</p>
                            </div>
                            <div className="pt-60" data-aos="fade-up" data-aos-delay={400}>
                                <h6>Our vision</h6>
                                <p className="pt-2">We offer a wide range of digital market services that cater to business of all sizes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
