import Link from "next/link";

export default function Section4() {
    return (
        <>
            {/*application home section 4*/}
            <section className="application-home-section-4 position-relative overflow-hidden pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 position-relative z-1">
                            <div className="top-content d-flex align-items-center gap-3">
                                <span className="line" />
                                <span className="btn-text text-primary fw-bold">how it works</span>
                            </div>
                            <h2 className="text-dark my-3 mb-8 text-anime-style-2">How this app works</h2>
                            <div data-aos="fade-up" data-aos-delay={400}>
                                <div className="card-process d-flex align-items-center">
                                    <div>
                                        <Link href="#" className="icon-shape icon-100 rounded-circle bg-secondary-2 me-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 36 36" fill="none">
                                                <g clipPath="url(#clip0_501_967)">
                                                    <path d="M2.66748 1.32581C2.24121 1.88913 2.00391 2.58209 2.00391 3.32367V32.6759C2.00391 33.3647 2.20935 34.0118 2.58041 34.5523L18.5512 17.8937L2.66748 1.32581Z" fill="#2C2E3C" />
                                                    <path d="M20.0142 16.3683L25.1954 10.9641L6.98306 0.449363C6.1926 -0.00711963 5.28568 -0.115335 4.43945 0.122519L20.0142 16.3683Z" fill="#2C2E3C" />
                                                    <path d="M20.0134 19.4189L4.28125 35.8287C4.62045 35.9427 4.97147 36.0001 5.32275 36.0001C5.89267 36.0001 6.46286 35.8501 6.98224 35.5502L25.3256 24.9596L20.0134 19.4189Z" fill="#2C2E3C" />
                                                    <path d="M32.4025 15.1254L27.0779 12.0511L21.4766 17.8934L27.2087 23.8727L32.4025 20.874C33.4418 20.2741 34.0622 19.1994 34.0622 17.9997C34.0622 16.7997 33.4418 15.7253 32.4025 15.1254Z" fill="#2C2E3C" />
                                                </g>
                                            </svg>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href="#" className="text-primary-2 fs-20 fw-bold">
                                            <span className="text-dark">Install from</span> <span className="text-primary">playstore</span>
                                        </Link>
                                        <p className="mb-0">We offer a wide range of digital marketing services.</p>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-delay={800}>
                                <div className="card-process d-flex align-items-center mb-4">
                                    <div>
                                        <Link href="#" className="icon-shape icon-100 rounded-circle bg-secondary-2 me-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 36 36" fill="none">
                                                <path d="M12.0262 1.125H4.84875C2.79218 1.125 1.125 2.79218 1.125 4.84875V12.0262C1.125 14.0828 2.79218 15.75 4.84875 15.75H12.0262C14.0828 15.75 15.75 14.0828 15.75 12.0262V4.84875C15.75 2.79218 14.0828 1.125 12.0262 1.125Z" fill="#2C2E3C" />
                                                <path d="M31.1513 1.125H23.9737C21.9172 1.125 20.25 2.79218 20.25 4.84875V12.0262C20.25 14.0828 21.9172 15.75 23.9737 15.75H31.1513C33.2078 15.75 34.875 14.0828 34.875 12.0262V4.84875C34.875 2.79218 33.2078 1.125 31.1513 1.125Z" fill="#2C2E3C" />
                                                <path d="M12.0262 20.25H4.84875C2.79218 20.25 1.125 21.9172 1.125 23.9737V31.1513C1.125 33.2078 2.79218 34.875 4.84875 34.875H12.0262C14.0828 34.875 15.75 33.2078 15.75 31.1513V23.9737C15.75 21.9172 14.0828 20.25 12.0262 20.25Z" fill="#2C2E3C" />
                                                <path d="M27.5625 34.875C31.6011 34.875 34.875 31.6011 34.875 27.5625C34.875 23.5239 31.6011 20.25 27.5625 20.25C23.5239 20.25 20.25 23.5239 20.25 27.5625C20.25 31.6011 23.5239 34.875 27.5625 34.875Z" fill="#2C2E3C" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href="#" className="text-primary-2 fs-20 fw-bold">
                                            <span className="text-dark">&amp; Change the game</span>
                                        </Link>
                                        <p className="mb-0">We offer a wide range of digital marketing services.</p>
                                    </div>
                                </div>
                                <p>
                                    Let us know about your interest.
                                    <Link href="#" className="text-primary-2 fw-bold">
                                        Download Now
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7 offset-lg-1 mt-lg-0 mt-8">
                            <div className="parallax-item">
                                <div className="d-flex gap-md-5 gap-3 justify-content-center position-relative">
                                    <div className="bg-circle position-absolute bottom-0 start-0 z-0 wow img-custom-anim-left">
                                        <div className="bg-circle-inner" />
                                    </div>
                                    <div className="position-relative z-1">
                                        <img className="rounded-5 shadow alltuchtopdown" src="/assets/img/application-img/pages/application/page-home/home-section-4/phone-1.png" alt="AstraX" />
                                    </div>
                                    <div className="pt-5 position-relative z-1">
                                        <img className="rounded-5 shadow alltuchtopdown" src="/assets/img/application-img/pages/application/page-home/home-section-4/phone-2.png" alt="AstraX" />
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
