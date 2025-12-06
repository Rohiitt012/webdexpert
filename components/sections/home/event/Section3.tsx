import Link from "next/link";

export default function Section3({ pt }: any) {
    return (
        <>
            {/*event-home-section-3*/}
            <section className={`event-home-section-3 pt-120 py-120 position-relative z-0 ${pt} overflow-hidden`}>
                <div className="container">
                    <div className="border-bottom border-dark pb-8">
                        <span data-aos="zoom-in" className="fs-7 text-uppercase text-primary d-inline-block px-3 py-1 border border-primary border-opacity-25 fw-semibold mb-3">
                            event step-by-step
                        </span>
                        <h1 className="text-anime-style-2 mb-0">
                            Cyborg event <span className="text-primary">2025</span>
                        </h1>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-12 border-bottom" data-aos="fade-up" data-aos-delay={0}>
                            <div className="card-about w-100 py-5 d-flex flex-wrap gap-4">
                                <a className="collapse-item me-auto collapsed" data-bs-toggle="collapse" href="#collapse-1" role="button" aria-expanded="false" aria-controls="collapse-1">
                                    <div className="d-lg-flex">
                                        <div className="d-flex align-items-center gap-3">
                                            <h1 className="service-card-title mb-0">
                                                <span className="service-number">14</span>
                                            </h1>
                                            <span className="fs-7 text-uppercase fw-semibold text-dark">
                                                december <br />
                                                2025
                                            </span>
                                        </div>
                                        <div className=" d-block w-100 ms-lg-8">
                                            <h6 className="mb-4">Cyborg exhibition</h6>
                                            <div className="d-flex flex-wrap gap-md-5 gap-2">
                                                <div className="d-flex align-items-center gap-2">
                                                    <i className="fa-solid fa-location-dot text-dark" />
                                                    <p className="fs-7 mb-0">Apple Upper West Side, Brooklyn</p>
                                                </div>
                                                <div className="d-flex align-items-center gap-2">
                                                    <i className="fa-regular fa-clock text-dark" />
                                                    <p className="fs-7 mb-0">19:15 a.m. - 07:15 a.m.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <div className="button">
                                    <a href="/event-details" className="btn btn-outline-secondary">
                                        buy ticket
                                        <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <g clipPath="url(#clip0_1152_937)">
                                                <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="#1AAA59" />
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="collapse" id="collapse-1">
                                <div className="row border-bottom border-primary pb-5">
                                    <div className="col-lg-10 ms-auto">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <img src="/assets/img/event-img/pages/event/page-home/home-section-3/img-1.png" alt="AstraX" />
                                            </div>
                                            <div className="col-md-6 align-self-stretch">
                                                <div className="d-flex flex-column h-100">
                                                    <p className="mt-lg-10 mt-5">Our services include comprehensive financial planning, investment management, retirement planning, tax planning, and more. We provide customized solutions that cater to your unique needs and financial objectives.</p>
                                                    <div className="d-flex gap-3 mt-auto">
                                                        <div className="d-flex align-items-center">
                                                            <div className="avatar m--4 icon-shape rounded-circle overflow-hidden">
                                                                <img src="/assets/img/event-img/pages/event/page-home/home-section-3/avatar-1.png" alt="AstraX" />
                                                            </div>
                                                            <div className="avatar m--4 icon-shape rounded-circle overflow-hidden">
                                                                <img src="/assets/img/event-img/pages/event/page-home/home-section-3/avatar-2.png" alt="AstraX" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <span className="fs-7 text-primary text-uppercase fw-semibold">speaker</span>
                                                            <a href="#">
                                                                <h6 className="fs-18">Gabriella S. Adams</h6>
                                                            </a>
                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                            <div className="avatar m--4 icon-shape rounded-circle overflow-hidden">
                                                                <img src="/assets/img/event-img/pages/event/page-home/home-section-3/avatar-3.png" alt="AstraX" />
                                                            </div>
                                                            <div className="avatar m--4 icon-shape rounded-circle overflow-hidden">
                                                                <img src="/assets/img/event-img/pages/event/page-home/home-section-3/avatar-4.png" alt="AstraX" />
                                                            </div>
                                                            <div className="avatar m--4 icon-shape rounded-circle overflow-hidden">
                                                                <img src="/assets/img/event-img/pages/event/page-home/home-section-3/avatar-5.png" alt="AstraX" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 border-bottom" data-aos="fade-up" data-aos-delay={0}>
                            <div className="card-about w-100 py-5 d-flex flex-wrap gap-4">
                                <a className="collapse-item me-auto" data-bs-toggle="collapse" href="#collapse-2" role="button" aria-expanded="true" aria-controls="collapse-2">
                                    <div className="d-lg-flex">
                                        <div className="d-flex align-items-center gap-3">
                                            <h1 className="service-card-title mb-0">
                                                <span className="service-number">15</span>
                                            </h1>
                                            <span className="fs-7 text-uppercase fw-semibold text-dark">
                                                december <br />
                                                2025
                                            </span>
                                        </div>
                                        <div className=" d-block w-100 ms-lg-8">
                                            <h6 className="mb-4">AI Frontiers Summit</h6>
                                            <div className="d-flex flex-wrap gap-md-5 gap-2">
                                                <div className="d-flex align-items-center gap-2">
                                                    <i className="fa-solid fa-location-dot text-dark" />
                                                    <p className="fs-7 mb-0">Apple Upper West Side, Brooklyn</p>
                                                </div>
                                                <div className="d-flex align-items-center gap-2">
                                                    <i className="fa-regular fa-clock text-dark" />
                                                    <p className="fs-7 mb-0">19:15 a.m. - 07:15 a.m.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <div className="button">
                                    <a href="/event-details" className="btn btn-outline-secondary">
                                        buy ticket
                                        <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <g clipPath="url(#clip0_1152_937)">
                                                <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="#1AAA59" />
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="collapse show" id="collapse-2">
                                <div className="row border-bottom border-primary pb-5">
                                    <div className="col-lg-10 ms-auto">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <img src="/assets/img/event-img/pages/event/page-home/home-section-3/img-1.png" alt="AstraX" />
                                            </div>
                                            <div className="col-md-6 align-self-stretch">
                                                <div className="d-flex flex-column h-100">
                                                    <p className="mt-lg-10 mt-5">Our services include comprehensive financial planning, investment management, retirement planning, tax planning, and more. We provide customized solutions that cater to your unique needs and financial objectives.</p>
                                                    <div className="d-flex gap-3 mt-auto">
                                                        <div className="d-flex align-items-center">
                                                            <div className="avatar m--4 icon-shape rounded-circle overflow-hidden">
                                                                <img src="/assets/img/event-img/pages/event/page-home/home-section-3/avatar-1.png" alt="AstraX" />
                                                            </div>
                                                            <div className="avatar m--4 icon-shape rounded-circle overflow-hidden">
                                                                <img src="/assets/img/event-img/pages/event/page-home/home-section-3/avatar-2.png" alt="AstraX" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <span className="fs-7 text-primary text-uppercase fw-semibold">speaker</span>
                                                            <a href="#">
                                                                <h6 className="fs-18">Gabriella S. Adams</h6>
                                                            </a>
                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                            <div className="avatar m--4 icon-shape rounded-circle overflow-hidden">
                                                                <img src="/assets/img/event-img/pages/event/page-home/home-section-3/avatar-3.png" alt="AstraX" />
                                                            </div>
                                                            <div className="avatar m--4 icon-shape rounded-circle overflow-hidden">
                                                                <img src="/assets/img/event-img/pages/event/page-home/home-section-3/avatar-4.png" alt="AstraX" />
                                                            </div>
                                                            <div className="avatar m--4 icon-shape rounded-circle overflow-hidden">
                                                                <img src="/assets/img/event-img/pages/event/page-home/home-section-3/avatar-5.png" alt="AstraX" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 border-bottom" data-aos="fade-up" data-aos-delay={0}>
                            <div className="card-about w-100 py-5 d-flex flex-wrap gap-4">
                                <a className="collapse-item me-auto collapsed" data-bs-toggle="collapse" href="#collapse-3" role="button" aria-expanded="false" aria-controls="collapse-3">
                                    <div className="d-lg-flex">
                                        <div className="d-flex align-items-center gap-3">
                                            <h1 className="service-card-title mb-0">
                                                <span className="service-number">16</span>
                                            </h1>
                                            <span className="fs-7 text-uppercase fw-semibold text-dark">
                                                december <br />
                                                2025
                                            </span>
                                        </div>
                                        <div className=" d-block w-100 ms-lg-8">
                                            <h6 className="mb-4">FutureTech Conference</h6>
                                            <div className="d-flex flex-wrap gap-md-5 gap-2">
                                                <div className="d-flex align-items-center gap-2">
                                                    <i className="fa-solid fa-location-dot text-dark" />
                                                    <p className="fs-7 mb-0">Apple Upper West Side, Brooklyn</p>
                                                </div>
                                                <div className="d-flex align-items-center gap-2">
                                                    <i className="fa-regular fa-clock text-dark" />
                                                    <p className="fs-7 mb-0">19:15 a.m. - 07:15 a.m.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <div className="button">
                                    <a href="/event-details" className="btn btn-outline-secondary">
                                        buy ticket
                                        <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <g clipPath="url(#clip0_1152_937)">
                                                <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="#1AAA59" />
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="collapse" id="collapse-3">
                                <div className="row border-bottom border-primary pb-5">
                                    <div className="col-lg-10 ms-auto">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <img src="/assets/img/event-img/pages/event/page-home/home-section-3/img-1.png" alt="AstraX" />
                                            </div>
                                            <div className="col-md-6 align-self-stretch">
                                                <div className="d-flex flex-column h-100">
                                                    <p className="mt-lg-10 mt-5">Our services include comprehensive financial planning, investment management, retirement planning, tax planning, and more. We provide customized solutions that cater to your unique needs and financial objectives.</p>
                                                    <div className="d-flex gap-3 mt-auto">
                                                        <div className="d-flex align-items-center">
                                                            <div className="avatar m--4 icon-shape rounded-circle overflow-hidden">
                                                                <img src="/assets/img/event-img/pages/event/page-home/home-section-3/avatar-1.png" alt="AstraX" />
                                                            </div>
                                                            <div className="avatar m--4 icon-shape rounded-circle overflow-hidden">
                                                                <img src="/assets/img/event-img/pages/event/page-home/home-section-3/avatar-2.png" alt="AstraX" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <span className="fs-7 text-primary text-uppercase fw-semibold">speaker</span>
                                                            <a href="#">
                                                                <h6 className="fs-18">Gabriella S. Adams</h6>
                                                            </a>
                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                            <div className="avatar m--4 icon-shape rounded-circle overflow-hidden">
                                                                <img src="/assets/img/event-img/pages/event/page-home/home-section-3/avatar-3.png" alt="AstraX" />
                                                            </div>
                                                            <div className="avatar m--4 icon-shape rounded-circle overflow-hidden">
                                                                <img src="/assets/img/event-img/pages/event/page-home/home-section-3/avatar-4.png" alt="AstraX" />
                                                            </div>
                                                            <div className="avatar m--4 icon-shape rounded-circle overflow-hidden">
                                                                <img src="/assets/img/event-img/pages/event/page-home/home-section-3/avatar-5.png" alt="AstraX" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 border-bottom" data-aos="fade-up" data-aos-delay={0}>
                            <div className="card-about w-100 py-5 d-flex flex-wrap gap-4">
                                <a className="collapse-item me-auto collapsed" data-bs-toggle="collapse" href="#collapse-4" role="button" aria-expanded="false" aria-controls="collapse-4">
                                    <div className="d-lg-flex">
                                        <div className="d-flex align-items-center gap-3">
                                            <h1 className="service-card-title mb-0">
                                                <span className="service-number">17</span>
                                            </h1>
                                            <span className="fs-7 text-uppercase fw-semibold text-dark">
                                                december <br />
                                                2025
                                            </span>
                                        </div>
                                        <div className=" d-block w-100 ms-lg-8">
                                            <h6 className="mb-4">Neural Network Symposium</h6>
                                            <div className="d-flex flex-wrap gap-md-5 gap-2">
                                                <div className="d-flex align-items-center gap-2">
                                                    <i className="fa-solid fa-location-dot text-dark" />
                                                    <p className="fs-7 mb-0">Apple Upper West Side, Brooklyn</p>
                                                </div>
                                                <div className="d-flex align-items-center gap-2">
                                                    <i className="fa-regular fa-clock text-dark" />
                                                    <p className="fs-7 mb-0">19:15 a.m. - 07:15 a.m.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <div className="button">
                                    <a href="/event-details" className="btn btn-outline-secondary">
                                        buy ticket
                                        <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <g clipPath="url(#clip0_1152_937)">
                                                <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="#1AAA59" />
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="collapse" id="collapse-4">
                                <div className="row border-bottom border-primary pb-5">
                                    <div className="col-lg-10 ms-auto">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <img src="/assets/img/event-img/pages/event/page-home/home-section-3/img-1.png" alt="AstraX" />
                                            </div>
                                            <div className="col-md-6 align-self-stretch">
                                                <div className="d-flex flex-column h-100">
                                                    <p className="mt-lg-10 mt-5">Our services include comprehensive financial planning, investment management, retirement planning, tax planning, and more. We provide customized solutions that cater to your unique needs and financial objectives.</p>
                                                    <div className="d-flex gap-3 mt-auto">
                                                        <div className="d-flex align-items-center">
                                                            <div className="avatar m--4 icon-shape rounded-circle overflow-hidden">
                                                                <img src="/assets/img/event-img/pages/event/page-home/home-section-3/avatar-1.png" alt="AstraX" />
                                                            </div>
                                                            <div className="avatar m--4 icon-shape rounded-circle overflow-hidden">
                                                                <img src="/assets/img/event-img/pages/event/page-home/home-section-3/avatar-2.png" alt="AstraX" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <span className="fs-7 text-primary text-uppercase fw-semibold">speaker</span>
                                                            <a href="#">
                                                                <h6 className="fs-18">Gabriella S. Adams</h6>
                                                            </a>
                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                            <div className="avatar m--4 icon-shape rounded-circle overflow-hidden">
                                                                <img src="/assets/img/event-img/pages/event/page-home/home-section-3/avatar-3.png" alt="AstraX" />
                                                            </div>
                                                            <div className="avatar m--4 icon-shape rounded-circle overflow-hidden">
                                                                <img src="/assets/img/event-img/pages/event/page-home/home-section-3/avatar-4.png" alt="AstraX" />
                                                            </div>
                                                            <div className="avatar m--4 icon-shape rounded-circle overflow-hidden">
                                                                <img src="/assets/img/event-img/pages/event/page-home/home-section-3/avatar-5.png" alt="AstraX" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 border-bottom" data-aos="fade-up" data-aos-delay={0}>
                            <div className="card-about w-100 py-5 d-flex flex-wrap gap-4">
                                <a className="collapse-item me-auto collapsed" data-bs-toggle="collapse" href="#collapse-5" role="button" aria-expanded="false" aria-controls="collapse-5">
                                    <div className="d-lg-flex">
                                        <div className="d-flex align-items-center gap-3">
                                            <h1 className="service-card-title mb-0">
                                                <span className="service-number">18</span>
                                            </h1>
                                            <span className="fs-7 text-uppercase fw-semibold text-dark">
                                                december <br />
                                                2025
                                            </span>
                                        </div>
                                        <div className=" d-block w-100 ms-lg-8">
                                            <h6 className="mb-4">Innovators’ Meetup</h6>
                                            <div className="d-flex flex-wrap gap-md-5 gap-2">
                                                <div className="d-flex align-items-center gap-2">
                                                    <i className="fa-solid fa-location-dot text-dark" />
                                                    <p className="fs-7 mb-0">Apple Upper West Side, Brooklyn</p>
                                                </div>
                                                <div className="d-flex align-items-center gap-2">
                                                    <i className="fa-regular fa-clock text-dark" />
                                                    <p className="fs-7 mb-0">19:15 a.m. - 07:15 a.m.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <div className="button">
                                    <a href="/event-details" className="btn btn-outline-secondary">
                                        buy ticket
                                        <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <g clipPath="url(#clip0_1152_937)">
                                                <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="#1AAA59" />
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="collapse" id="collapse-5">
                                <div className="row border-bottom border-primary pb-5">
                                    <div className="col-lg-10 ms-auto">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <img src="/assets/img/event-img/pages/event/page-home/home-section-3/img-1.png" alt="AstraX" />
                                            </div>
                                            <div className="col-md-6 align-self-stretch">
                                                <div className="d-flex flex-column h-100">
                                                    <p className="mt-lg-10 mt-5">Our services include comprehensive financial planning, investment management, retirement planning, tax planning, and more. We provide customized solutions that cater to your unique needs and financial objectives.</p>
                                                    <div className="d-flex gap-3 mt-auto">
                                                        <div className="d-flex align-items-center">
                                                            <div className="avatar m--4 icon-shape rounded-circle overflow-hidden">
                                                                <img src="/assets/img/event-img/pages/event/page-home/home-section-3/avatar-1.png" alt="AstraX" />
                                                            </div>
                                                            <div className="avatar m--4 icon-shape rounded-circle overflow-hidden">
                                                                <img src="/assets/img/event-img/pages/event/page-home/home-section-3/avatar-2.png" alt="AstraX" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <span className="fs-7 text-primary text-uppercase fw-semibold">speaker</span>
                                                            <a href="#">
                                                                <h6 className="fs-18">Gabriella S. Adams</h6>
                                                            </a>
                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                            <div className="avatar m--4 icon-shape rounded-circle overflow-hidden">
                                                                <img src="/assets/img/event-img/pages/event/page-home/home-section-3/avatar-3.png" alt="AstraX" />
                                                            </div>
                                                            <div className="avatar m--4 icon-shape rounded-circle overflow-hidden">
                                                                <img src="/assets/img/event-img/pages/event/page-home/home-section-3/avatar-4.png" alt="AstraX" />
                                                            </div>
                                                            <div className="avatar m--4 icon-shape rounded-circle overflow-hidden">
                                                                <img src="/assets/img/event-img/pages/event/page-home/home-section-3/avatar-5.png" alt="AstraX" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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
