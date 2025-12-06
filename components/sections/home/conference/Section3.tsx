import Link from "next/link";

export default function Section3() {
    return (
        <>
            {/*conference-section-3*/}
            <section className="conference-section-3 position-relative overflow-hidden pb-120 ">
                <div className="position-absolute top-50 start-50 translate-middle">
                    <h1 className="conference-title scroll-move-left">Conference</h1>
                    <h1 className="conference-title scroll-move-right">Conference</h1>
                    <h1 className="conference-title scroll-move-left">Conference</h1>
                    <h1 className="conference-title scroll-move-right">Conference</h1>
                </div>
                <div className="container">
                    <div className="text-center mb-80">
                        <div className="pb-120">
                            <div className="position-relative">
                                <div className="rotateme">
                                    <svg className="stroke-primary" xmlns="http://www.w3.org/2000/svg" width={120} height={120} viewBox="0 0 120 120" fill="none">
                                        <circle cx={60} cy={60} r="59.5" fill="white" stroke="#D60A2B" />
                                    </svg>
                                    <span className="icon-shape icon-50 rounded-circle bg-primary position-absolute top-50 start-50 translate-middle">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 41 40" fill="none">
                                            <path
                                                d="M20.7919 26.7016C20.6523 26.4921 20.5127 26.3874 20.373 26.3874C20.2334 26.3874 20.0938 26.4921 19.9542 26.7016L12.2055 39.5812C11.9961 39.7906 11.6819 39.9302 11.2631 40C10.914 40 10.5301 39.8953 10.1113 39.6859L5.08508 36.1257C4.387 35.637 4.31719 35.0436 4.87565 34.3456L14.0903 23.0367C14.2997 22.8272 14.3695 22.6178 14.2997 22.4084C14.2299 22.199 14.0205 22.0593 13.6715 21.9895L0.791885 18.4293C0.0239966 18.2199 -0.185428 17.5916 0.163612 16.5445L2.15314 11.2042C2.50218 10.3665 3.02574 10.1571 3.72382 10.5759L15.8704 15.7068C16.2195 15.8464 16.4638 15.8813 16.6034 15.8115C16.8128 15.6719 16.9175 15.4276 16.9175 15.0785L15.8704 1.15184C15.8006 0.872604 15.8704 0.628275 16.0798 0.418849C16.2893 0.139616 16.6034 0 17.0223 0H23.7238C24.1427 0 24.4219 0.139616 24.5615 0.418849C24.7709 0.628275 24.8757 0.872604 24.8757 1.15184L23.8285 15.1832C23.7587 15.8115 24.0031 16.0209 24.5615 15.8115L37.127 10.3665C37.9647 9.94764 38.5231 10.2269 38.8024 11.2042L40.4777 16.4398C40.757 17.4171 40.4777 18.0105 39.6401 18.2199L27.0746 21.9895C26.7954 22.0593 26.6209 22.2339 26.551 22.5131C26.551 22.7225 26.6558 22.9319 26.8652 23.1414L35.661 33.822C35.9402 34.171 36.0449 34.555 35.9751 34.9738C35.9053 35.3229 35.5912 35.7068 35.0327 36.1257L30.6348 39.1623C30.1462 39.5113 29.6924 39.651 29.2736 39.5812C28.8547 39.5113 28.5406 39.3717 28.3312 39.1623L20.7919 26.7016Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <span className="btn-text text-primary">Agenda Glance</span>
                        <h2 className="mb-0 text-anime-style-3">
                            Information of event <br />
                            schedules
                        </h2>
                    </div>
                    <nav className="d-flex justify-content-center">
                        <div className="nav nav-tabs border-bottom-0" id="nav-tab" role="tablist">
                            <button className="nav-link position-relative btn-text active" aria-label="sunday" id="nav-sunday-tab" data-bs-toggle="tab" data-bs-target="#nav-sunday" type="button" role="tab" aria-controls="nav-sunday" aria-selected="true">
                                sunday
                                <p className="time">1st dec 2025</p>
                                <span className="underline" />
                            </button>
                            <button className="nav-link position-relative btn-text" aria-label="monday" id="nav-monday-tab" data-bs-toggle="tab" data-bs-target="#nav-monday" type="button" role="tab" aria-controls="nav-monday" aria-selected="false">
                                monday
                                <p className="time">2nd dec 2025</p>
                                <span className="underline" />
                            </button>
                            <button className="nav-link position-relative btn-text" aria-label="tuesday" id="nav-tuesday-tab" data-bs-toggle="tab" data-bs-target="#nav-tuesday" type="button" role="tab" aria-controls="nav-tuesday" aria-selected="false">
                                Tuesday
                                <p className="time">3rd dec 2025</p>
                                <span className="underline" />
                            </button>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane wow img-custom-anim-top fade show active" id="nav-sunday" role="tabpanel" aria-labelledby="nav-sunday-tab" tabIndex={0}>
                            <div className="portfolio-project">
                                <div className="border-top pt-6" />
                                <div className="project d-flex flex-wrap align-items-center justify-content-lg-between gap-2">
                                    <div className="d-flex align-items-center gap-5">
                                        <strong>01</strong>
                                        <div>
                                            <p className="btn-text text-dark mb-2">Workshop</p>
                                            <p className="fs-7 mb-0">9.30 - 10.30 AM</p>
                                        </div>
                                    </div>
                                    <div className="ms-md-10 ms-lg-0">
                                        <p className="btn-text text-dark mb-2">Penelope N. Harris</p>
                                        <p className="fs-7 mb-0 text-uppercase">speaker</p>
                                    </div>
                                    <p className="pe-md-10 ps-md-10 ms-md-5 ps-lg-0 ms-lg-0">
                                        Influential figures from across the globe, in one place.Meh synth Schlitz, <br />
                                        temp duis single-origin coffee ea next.
                                    </p>
                                </div>
                                <div className="line-bottom border-bottom pt-5" />
                            </div>
                            <div className="portfolio-project pt-5">
                                <div className="project d-flex flex-wrap align-items-center justify-content-lg-between gap-2">
                                    <div className="d-flex align-items-center gap-5">
                                        <strong>02</strong>
                                        <div>
                                            <p className="btn-text text-dark mb-2">ecommerce</p>
                                            <p className="fs-7 mb-0">9.30 - 10.30 AM</p>
                                        </div>
                                    </div>
                                    <div className="ms-md-10 ms-lg-0">
                                        <p className="btn-text text-dark mb-2">Juliana P. Taylor</p>
                                        <p className="fs-7 mb-0 text-uppercase">speaker</p>
                                    </div>
                                    <p className="pe-md-10 ps-md-10 ms-md-5 ps-lg-0 ms-lg-0">
                                        Influential figures from across the globe, in one place.Meh synth Schlitz, <br />
                                        temp duis single-origin coffee ea next.
                                    </p>
                                </div>
                                <div className="line-bottom border-bottom pt-5" />
                            </div>
                            <div className="portfolio-project pt-5">
                                <div className="project d-flex flex-wrap align-items-center justify-content-lg-between gap-2">
                                    <div className="d-flex align-items-center gap-5">
                                        <strong>03</strong>
                                        <div>
                                            <p className="btn-text text-dark mb-2">ux setup</p>
                                            <p className="fs-7 mb-0">9.30 - 10.30 AM</p>
                                        </div>
                                    </div>
                                    <div className="ms-md-10 ms-lg-0">
                                        <p className="btn-text text-dark mb-2">Victoria L. Davis</p>
                                        <p className="fs-7 mb-0 text-uppercase">speaker</p>
                                    </div>
                                    <p className="pe-md-10 ps-md-10 ms-md-5 ps-lg-0 ms-lg-0">
                                        Influential figures from across the globe, in one place.Meh synth Schlitz, <br />
                                        temp duis single-origin coffee ea next.
                                    </p>
                                </div>
                                <div className="line-bottom border-bottom pt-5" />
                            </div>
                            <div className="portfolio-project pt-5">
                                <div className="project d-flex flex-wrap align-items-center justify-content-lg-between gap-2">
                                    <div className="d-flex align-items-center gap-5">
                                        <strong>04</strong>
                                        <div>
                                            <p className="btn-text text-dark mb-2">business grow</p>
                                            <p className="fs-7 mb-0">9.30 - 10.30 AM</p>
                                        </div>
                                    </div>
                                    <div className="ms-md-10 ms-lg-0">
                                        <p className="btn-text text-dark mb-2">Eliana M. Thompson</p>
                                        <p className="fs-7 mb-0 text-uppercase">speaker</p>
                                    </div>
                                    <p className="pe-md-10 ps-md-10 ms-md-5 ps-lg-0 ms-lg-0">
                                        Influential figures from across the globe, in one place.Meh synth Schlitz, <br />
                                        temp duis single-origin coffee ea next.
                                    </p>
                                </div>
                                <div className="line-bottom border-bottom pt-5" />
                            </div>
                            <div className="portfolio-project pt-5">
                                <div className="project d-flex flex-wrap align-items-center justify-content-lg-between gap-2">
                                    <div className="d-flex align-items-center gap-5">
                                        <strong>05</strong>
                                        <div>
                                            <p className="btn-text text-dark mb-2">Workshop</p>
                                            <p className="fs-7 mb-0">9.30 - 10.30 AM</p>
                                        </div>
                                    </div>
                                    <div className="ms-md-10 ms-lg-0">
                                        <p className="btn-text text-dark mb-2">Gabriella S. Adams</p>
                                        <p className="fs-7 mb-0 text-uppercase">speaker</p>
                                    </div>
                                    <p className="pe-md-10 ps-md-10 ms-md-5 ps-lg-0 ms-lg-0">
                                        Influential figures from across the globe, in one place.Meh synth Schlitz, <br />
                                        temp duis single-origin coffee ea next.
                                    </p>
                                </div>
                                <div className="line-bottom border-bottom pt-5" />
                            </div>
                        </div>
                        <div className="tab-pane wow img-custom-anim-top fade" id="nav-monday" role="tabpanel" aria-labelledby="nav-monday-tab" tabIndex={0}>
                            <div className="portfolio-project">
                                <div className="border-top pt-6" />
                                <div className="project d-flex flex-wrap align-items-center justify-content-lg-between gap-2">
                                    <div className="d-flex align-items-center gap-5">
                                        <strong>01</strong>
                                        <div>
                                            <p className="btn-text text-dark mb-2">Workshop</p>
                                            <p className="fs-7 mb-0">9.30 - 10.30 AM</p>
                                        </div>
                                    </div>
                                    <div className="ms-md-10 ms-lg-0">
                                        <p className="btn-text text-dark mb-2">Penelope N. Harris</p>
                                        <p className="fs-7 mb-0 text-uppercase">speaker</p>
                                    </div>
                                    <p className="pe-md-10 ps-md-10 ms-md-5 ps-lg-0 ms-lg-0">
                                        Influential figures from across the globe, in one place.Meh synth Schlitz, <br />
                                        temp duis single-origin coffee ea next.
                                    </p>
                                </div>
                                <div className="line-bottom border-bottom pt-5" />
                            </div>
                            <div className="portfolio-project pt-5">
                                <div className="project d-flex flex-wrap align-items-center justify-content-lg-between gap-2">
                                    <div className="d-flex align-items-center gap-5">
                                        <strong>02</strong>
                                        <div>
                                            <p className="btn-text text-dark mb-2">ecommerce</p>
                                            <p className="fs-7 mb-0">9.30 - 10.30 AM</p>
                                        </div>
                                    </div>
                                    <div className="ms-md-10 ms-lg-0">
                                        <p className="btn-text text-dark mb-2">Juliana P. Taylor</p>
                                        <p className="fs-7 mb-0 text-uppercase">speaker</p>
                                    </div>
                                    <p className="pe-md-10 ps-md-10 ms-md-5 ps-lg-0 ms-lg-0">
                                        Influential figures from across the globe, in one place.Meh synth Schlitz, <br />
                                        temp duis single-origin coffee ea next.
                                    </p>
                                </div>
                                <div className="line-bottom border-bottom pt-5" />
                            </div>
                            <div className="portfolio-project pt-5">
                                <div className="project d-flex flex-wrap align-items-center justify-content-lg-between gap-2">
                                    <div className="d-flex align-items-center gap-5">
                                        <strong>03</strong>
                                        <div>
                                            <p className="btn-text text-dark mb-2">ux setup</p>
                                            <p className="fs-7 mb-0">9.30 - 10.30 AM</p>
                                        </div>
                                    </div>
                                    <div className="ms-md-10 ms-lg-0">
                                        <p className="btn-text text-dark mb-2">Victoria L. Davis</p>
                                        <p className="fs-7 mb-0 text-uppercase">speaker</p>
                                    </div>
                                    <p className="pe-md-10 ps-md-10 ms-md-5 ps-lg-0 ms-lg-0">
                                        Influential figures from across the globe, in one place.Meh synth Schlitz, <br />
                                        temp duis single-origin coffee ea next.
                                    </p>
                                </div>
                                <div className="line-bottom border-bottom pt-5" />
                            </div>
                            <div className="portfolio-project pt-5">
                                <div className="project d-flex flex-wrap align-items-center justify-content-lg-between gap-2">
                                    <div className="d-flex align-items-center gap-5">
                                        <strong>04</strong>
                                        <div>
                                            <p className="btn-text text-dark mb-2">business grow</p>
                                            <p className="fs-7 mb-0">9.30 - 10.30 AM</p>
                                        </div>
                                    </div>
                                    <div className="ms-md-10 ms-lg-0">
                                        <p className="btn-text text-dark mb-2">Eliana M. Thompson</p>
                                        <p className="fs-7 mb-0 text-uppercase">speaker</p>
                                    </div>
                                    <p className="pe-md-10 ps-md-10 ms-md-5 ps-lg-0 ms-lg-0">
                                        Influential figures from across the globe, in one place.Meh synth Schlitz, <br />
                                        temp duis single-origin coffee ea next.
                                    </p>
                                </div>
                                <div className="line-bottom border-bottom pt-5" />
                            </div>
                            <div className="portfolio-project pt-5">
                                <div className="project d-flex flex-wrap align-items-center justify-content-lg-between gap-2">
                                    <div className="d-flex align-items-center gap-5">
                                        <strong>05</strong>
                                        <div>
                                            <p className="btn-text text-dark mb-2">Workshop</p>
                                            <p className="fs-7 mb-0">9.30 - 10.30 AM</p>
                                        </div>
                                    </div>
                                    <div className="ms-md-10 ms-lg-0">
                                        <p className="btn-text text-dark mb-2">Gabriella S. Adams</p>
                                        <p className="fs-7 mb-0 text-uppercase">speaker</p>
                                    </div>
                                    <p className="pe-md-10 ps-md-10 ms-md-5 ps-lg-0 ms-lg-0">
                                        Influential figures from across the globe, in one place.Meh synth Schlitz, <br />
                                        temp duis single-origin coffee ea next.
                                    </p>
                                </div>
                                <div className="line-bottom border-bottom pt-5" />
                            </div>
                        </div>
                        <div className="tab-pane wow img-custom-anim-top fade" id="nav-tuesday" role="tabpanel" aria-labelledby="nav-tuesday-tab" tabIndex={0}>
                            <div className="portfolio-project">
                                <div className="border-top pt-6" />
                                <div className="project d-flex flex-wrap align-items-center justify-content-lg-between gap-2">
                                    <div className="d-flex align-items-center gap-5">
                                        <strong>01</strong>
                                        <div>
                                            <p className="btn-text text-dark mb-2">Workshop</p>
                                            <p className="fs-7 mb-0">9.30 - 10.30 AM</p>
                                        </div>
                                    </div>
                                    <div className="ms-md-10 ms-lg-0">
                                        <p className="btn-text text-dark mb-2">Penelope N. Harris</p>
                                        <p className="fs-7 mb-0 text-uppercase">speaker</p>
                                    </div>
                                    <p className="pe-md-10 ps-md-10 ms-md-5 ps-lg-0 ms-lg-0">
                                        Influential figures from across the globe, in one place.Meh synth Schlitz, <br />
                                        temp duis single-origin coffee ea next.
                                    </p>
                                </div>
                                <div className="line-bottom border-bottom pt-5" />
                            </div>
                            <div className="portfolio-project pt-5">
                                <div className="project d-flex flex-wrap align-items-center justify-content-lg-between gap-2">
                                    <div className="d-flex align-items-center gap-5">
                                        <strong>02</strong>
                                        <div>
                                            <p className="btn-text text-dark mb-2">ecommerce</p>
                                            <p className="fs-7 mb-0">9.30 - 10.30 AM</p>
                                        </div>
                                    </div>
                                    <div className="ms-md-10 ms-lg-0">
                                        <p className="btn-text text-dark mb-2">Juliana P. Taylor</p>
                                        <p className="fs-7 mb-0 text-uppercase">speaker</p>
                                    </div>
                                    <p className="pe-md-10 ps-md-10 ms-md-5 ps-lg-0 ms-lg-0">
                                        Influential figures from across the globe, in one place.Meh synth Schlitz, <br />
                                        temp duis single-origin coffee ea next.
                                    </p>
                                </div>
                                <div className="line-bottom border-bottom pt-5" />
                            </div>
                            <div className="portfolio-project pt-5">
                                <div className="project d-flex flex-wrap align-items-center justify-content-lg-between gap-2">
                                    <div className="d-flex align-items-center gap-5">
                                        <strong>03</strong>
                                        <div>
                                            <p className="btn-text text-dark mb-2">ux setup</p>
                                            <p className="fs-7 mb-0">9.30 - 10.30 AM</p>
                                        </div>
                                    </div>
                                    <div className="ms-md-10 ms-lg-0">
                                        <p className="btn-text text-dark mb-2">Victoria L. Davis</p>
                                        <p className="fs-7 mb-0 text-uppercase">speaker</p>
                                    </div>
                                    <p className="pe-md-10 ps-md-10 ms-md-5 ps-lg-0 ms-lg-0">
                                        Influential figures from across the globe, in one place.Meh synth Schlitz, <br />
                                        temp duis single-origin coffee ea next.
                                    </p>
                                </div>
                                <div className="line-bottom border-bottom pt-5" />
                            </div>
                            <div className="portfolio-project pt-5">
                                <div className="project d-flex flex-wrap align-items-center justify-content-lg-between gap-2">
                                    <div className="d-flex align-items-center gap-5">
                                        <strong>04</strong>
                                        <div>
                                            <p className="btn-text text-dark mb-2">business grow</p>
                                            <p className="fs-7 mb-0">9.30 - 10.30 AM</p>
                                        </div>
                                    </div>
                                    <div className="ms-md-10 ms-lg-0">
                                        <p className="btn-text text-dark mb-2">Eliana M. Thompson</p>
                                        <p className="fs-7 mb-0 text-uppercase">speaker</p>
                                    </div>
                                    <p className="pe-md-10 ps-md-10 ms-md-5 ps-lg-0 ms-lg-0">
                                        Influential figures from across the globe, in one place.Meh synth Schlitz, <br />
                                        temp duis single-origin coffee ea next.
                                    </p>
                                </div>
                                <div className="line-bottom border-bottom pt-5" />
                            </div>
                            <div className="portfolio-project pt-5">
                                <div className="project d-flex flex-wrap align-items-center justify-content-lg-between gap-2">
                                    <div className="d-flex align-items-center gap-5">
                                        <strong>05</strong>
                                        <div>
                                            <p className="btn-text text-dark mb-2">Workshop</p>
                                            <p className="fs-7 mb-0">9.30 - 10.30 AM</p>
                                        </div>
                                    </div>
                                    <div className="ms-md-10 ms-lg-0">
                                        <p className="btn-text text-dark mb-2">Gabriella S. Adams</p>
                                        <p className="fs-7 mb-0 text-uppercase">speaker</p>
                                    </div>
                                    <p className="pe-md-10 ps-md-10 ms-md-5 ps-lg-0 ms-lg-0">
                                        Influential figures from across the globe, in one place.Meh synth Schlitz, <br />
                                        temp duis single-origin coffee ea next.
                                    </p>
                                </div>
                                <div className="line-bottom border-bottom pt-5" />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-7" data-aos="fade-up">
                        <Link href="/ticket" className="btn btn-outline-secondary border border-dark btn-slide-bottom btn-slide-bottom--red-2">
                            <span>join us today</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                <g clipPath="url(#clip0_975_1067)">
                                    <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="#D60A2B" />
                                </g>
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
