import Link from "next/link";

export default function Section2() {
    return (
        <>
            {/*it solutions home section 2*/}
            <section className="it-solutions-home-section-2 position-relative overflow-hidden pt-120 pb-120">
                <div className="container position-relative z-1">
                    <div className="text-center">
                        <div className="position-relative bg-white icon-shape icon-160 rounded-circle border border-primary">
                            <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={41} height={40} viewBox="0 0 41 40" fill="none">
                                <path
                                    d="M20.7919 26.7016C20.6523 26.4921 20.5127 26.3874 20.373 26.3874C20.2334 26.3874 20.0938 26.4921 19.9542 26.7016L12.2055 39.5812C11.9961 39.7906 11.6819 39.9302 11.2631 40C10.914 40 10.5301 39.8953 10.1113 39.6859L5.08508 36.1257C4.387 35.637 4.31719 35.0436 4.87565 34.3456L14.0903 23.0367C14.2997 22.8272 14.3695 22.6178 14.2997 22.4084C14.2299 22.199 14.0205 22.0593 13.6715 21.9895L0.791885 18.4293C0.0239966 18.2199 -0.185428 17.5916 0.163612 16.5445L2.15314 11.2042C2.50218 10.3665 3.02574 10.1571 3.72382 10.5759L15.8704 15.7068C16.2195 15.8464 16.4638 15.8813 16.6034 15.8115C16.8128 15.6719 16.9175 15.4276 16.9175 15.0785L15.8704 1.15184C15.8006 0.872604 15.8704 0.628275 16.0798 0.418849C16.2893 0.139616 16.6034 0 17.0223 0H23.7238C24.1427 0 24.4219 0.139616 24.5615 0.418849C24.7709 0.628275 24.8757 0.872604 24.8757 1.15184L23.8285 15.1832C23.7587 15.8115 24.0031 16.0209 24.5615 15.8115L37.127 10.3665C37.9647 9.94764 38.5231 10.2269 38.8024 11.2042L40.4777 16.4398C40.757 17.4171 40.4777 18.0105 39.6401 18.2199L27.0746 21.9895C26.7954 22.0593 26.6209 22.2339 26.551 22.5131C26.551 22.7225 26.6558 22.9319 26.8652 23.1414L35.661 33.822C35.9402 34.171 36.0449 34.555 35.9751 34.9738C35.9053 35.3229 35.5912 35.7068 35.0327 36.1257L30.6348 39.1623C30.1462 39.5113 29.6924 39.651 29.2736 39.5812C28.8547 39.5113 28.5406 39.3717 28.3312 39.1623L20.7919 26.7016Z"
                                    fill="#0D6EFD"
                                />
                            </svg>
                            <div className="position-absolute top-50 start-50 translate-middle w-100">
                                <h6 className="circle-text rotateme text-dark fw-semibold">our digital business approach - 2000 -</h6>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="text-center pt-80">
                                <nav>
                                    <div className="nav nav-tabs justify-content-center border-bottom-0 mb-5" id="nav-tab" role="tablist">
                                        <button aria-label="about us" className="nav-link position-relative active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                                            about us
                                        </button>
                                        <button aria-label="our mission" className="nav-link position-relative" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                                            history
                                        </button>
                                        <button aria-label="our vision" className="nav-link position-relative" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                                            our vision
                                        </button>
                                    </div>
                                </nav>
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex={0}>
                                        <div className="wow img-custom-anim-left">
                                            <h2 className="text-anime-style-1">
                                            Our team of web technology experts is dedicated  to empowering businesses to succeed online
                                            </h2>
                                            <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-5 pt-60">
                                                <img className="rounded-4" data-aos="flip-right" src="/assets/img/it-solutions-img/pages/it-solutions/page-home/home-section-2/img-1.png" alt="AstraX" />
                                                <img className="rounded-4" data-aos="flip-right" data-aos-delay={300} src="/assets/img/it-solutions-img/pages/it-solutions/page-home/home-section-2/img-2.png" alt="AstraX" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex={1}>
                                        <div className="wow img-custom-anim-left">
                                            <h2 className="text-anime-style-1">
                                                Our team of digital marketing experts <br />
                                                is dedicated to empowering businesses to thrive basis online.
                                            </h2>
                                            <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-5 pt-60">
                                                <img className="rounded-4" data-aos="flip-right" src="/assets/img/it-solutions-img/pages/it-solutions/page-home/home-section-2/img-1.png" alt="AstraX" />
                                                <img className="rounded-4" data-aos="flip-right" data-aos-delay={300} src="/assets/img/it-solutions-img/pages/it-solutions/page-home/home-section-2/img-2.png" alt="AstraX" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex={2}>
                                        <div className="wow img-custom-anim-left">
                                            <h2 className="text-anime-style-1">
                                                Our team of digital marketing experts <br />
                                                is dedicated to empowering businesses to thrive basis online.
                                            </h2>
                                            <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-5 pt-60">
                                                <img className="rounded-4" data-aos="flip-right" src="/assets/img/it-solutions-img/pages/it-solutions/page-home/home-section-2/img-1.png" alt="AstraX" />
                                                <img className="rounded-4" data-aos="flip-right" data-aos-delay={300} src="/assets/img/it-solutions-img/pages/it-solutions/page-home/home-section-2/img-2.png" alt="AstraX" />
                                            </div>
                                        </div>
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
