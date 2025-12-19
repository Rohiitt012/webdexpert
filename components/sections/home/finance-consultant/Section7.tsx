import Link from "next/link";

export default function Section7() {
    return (
        <>
            {/*finance-consultant home section 7*/}
            <section className="finance-consultant-home-section-7 position-relative overflow-hidden pb-120" data-background="/assets/img/finance-consultant-img/pages/finance-consultant/page-home/home-section-7/bg-img.png">
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-green-5" />
                <div className="container">
                    <div className="newsletter-bg rounded-top-5 position-relative">
                        <div className="container pt-120 pb-120">
                            <div className="row">
                                <div className="col-lg-5 me-auto">
                                    <span className="fs-7 fw-medium bg-primary px-2 py-1 text-dark text-capitalize">get in touch</span>
                                    <h2 className="mt-3 text-white text-anime-style-2">Lets catch with us here anytime</h2>
                                    <div className="d-flex flex-md-row flex-column gap-5 mt-8">
                                        <div data-aos="fade-up" data-aos-delay={400}>
                                            <div className="icon">
                                                <svg className="stroke-primary" xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 60 60" fill="none">
                                                    <g clipPath="url(#clip0_349_948)">
                                                        <path d="M41.25 25C48.845 25 55 30.0375 55 36.25C55 39.7425 53.055 42.8625 50 44.925V50L45.09 47.055C43.8317 47.3522 42.543 47.5015 41.25 47.5C33.655 47.5 27.5 42.4625 27.5 36.25C27.5 30.0375 33.655 25 41.25 25Z" stroke="#0D6EFD" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M27.9925 39.245C26.2675 39.735 24.4175 40 22.5 40C20.2785 40.0048 18.0717 39.6398 15.97 38.92L10 42.5V35.4975C6.9075 32.7925 5 29.0875 5 25C5 16.715 12.835 10 22.5 10C31.955 10 39.6575 16.425 40 24.4625V25.045" stroke="#0D6EFD" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M25 20H25.025" stroke="#0D6EFD" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M17.5 20H17.525" stroke="#0D6EFD" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M37.5 35H37.525" stroke="#0D6EFD" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M45 35H45.025" stroke="#0D6EFD" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <Link href="#">
                                                <h6 className="mt-5 mb-3 fs-20 text-white">Phone &amp; Email</h6>
                                            </Link>
                                            <p className="mb-0 text-white text-opacity-50">
                                                Contact: +91 98188 06393 <br />
                                                Email: contact@xzect.com
                                            </p>
                                        </div>
                                        <div data-aos="fade-up" data-aos-delay={600}>
                                            <div className="icon">
                                                <svg className="stroke-primary" xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 60 60" fill="none">
                                                    <g clipPath="url(#clip0_349_2617)">
                                                        <path d="M29.8325 12.5H12.5V52.5H45V32.5" stroke="#0D6EFD" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M35 42.5H22.5" stroke="#0D6EFD" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M22.5 32.5H35V22.5H22.5V32.5Z" stroke="#0D6EFD" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M37.5 12.5V7.5" stroke="#0D6EFD" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M45 15L50 10" stroke="#0D6EFD" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M47.5 22.5H52.5" stroke="#0D6EFD" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <Link href="telto:(123) 456 789 00">
                                                <h6 className="mt-5 mb-3 fs-20 text-white">Locations</h6>
                                            </Link>
                                            <p className="mb-0 text-white text-opacity-50">
                                                12/A, New Booston Tower, <br />
                                                Tokyo, China
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1 align-self-stretch position-relative">
                                    <div className="d-none d-lg-block line h-100 border-end border-white border-opacity-10 position-absolute top-50 start-50 translate-middle" />
                                </div>
                                <div className="col-lg-6 mt-lg-0 mt-8 ">
                                    {/* <button aria-label="How can I got componants" data-aos="fade-left" data-aos-delay={0} className="collapsible fw-bold py-4 border-top border-white border-opacity-10">
                                        Is business a short-term or long-term process?
                                    </button>
                                    <div className="content collapse-content">
                                        <p className="body-text text-white text-opacity-50">Business is a long-term process. Building a successful company requires strategic vision and persistence, so it takes time to develop sustainably.</p>
                                    </div>
                                    <button aria-label="How can I got componants" data-aos="fade-left" data-aos-delay={200} className="collapsible fw-bold py-4">
                                        How can I got componants?
                                    </button>
                                    <div className="content collapse-content">
                                        <p className="body-text text-white text-opacity-50">Business is what you're offered four times a year by designers and style is what you choose. The key to style is learning who you are which takes years. With good as always.</p>
                                    </div>
                                    <button aria-label="How can I got componants" data-aos="fade-left" data-aos-delay={400} className="collapsible fw-bold py-4">
                                        How can we identify business opportunities?
                                    </button>
                                    <div className="content collapse-content">
                                        <p className="body-text text-white text-opacity-50">Business opportunities often arise when you notice unresolved problems or unmet needs in the market. Listening to customers and conducting thorough market research are crucial in identifying opportunities.</p>
                                    </div>
                                    <button aria-label="How can I got componants" data-aos="fade-left" data-aos-delay={600} className="collapsible fw-bold py-4">
                                        Does business always follow trends?
                                    </button>
                                    <div className="content collapse-content">
                                        <p className="body-text text-white text-opacity-50">No, while trends may influence business strategies, a successful business needs to build core values and follow its own unique path rather than just chasing trends.</p>
                                    </div> */}
                                    <div className="accordion">
                                        <div className="px-0 bg-transparent card collapse-custom border-0 rounded-4 mb-3" data-aos="fade-up" data-aos-delay={0}>
                                            <div className="p-0 card-header border-0 bg-transparent">
                                                <Link className="collapsed p-3 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse1">
                                                    <span className="me-3 arrow" />
                                                    <h6 className="mb-0 fs-5 text-white">
                                                        <span>Is business a short-term or long-term process?</span>
                                                    </h6>
                                                </Link>
                                            </div>
                                            <div id="collapse1" className="collapse" data-bs-parent=".accordion">
                                                <p className="px-5 fs-6 fw-regular">Business is a long-term process. Building a successful company requires strategic vision and persistence, so it takes time to develop sustainably.</p>
                                            </div>
                                        </div>
                                        <div className="px-0 bg-transparent card collapse-custom border-0 rounded-4 mb-3" data-aos="fade-up" data-aos-delay={200}>
                                            <div className="p-0 card-header border-0 bg-transparent">
                                                <Link className="p-3 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse2">
                                                    <span className="me-3 arrow" />
                                                    <h6 className="mb-0 fs-5 text-white">
                                                        <span>How can I got componants?</span>
                                                    </h6>
                                                </Link>
                                            </div>
                                            <div id="collapse2" className="collapse show" data-bs-parent=".accordion">
                                                <p className="px-5 fs-6 fw-regular">Business is what you're offered four times a year by designers and style is what you choose. The key to style is learning who you are which takes years. With good as always.</p>
                                            </div>
                                        </div>
                                        <div className="px-0 bg-transparent card collapse-custom border-0 rounded-4 mb-3" data-aos="fade-up" data-aos-delay={400}>
                                            <div className="p-0 card-header border-0 bg-transparent">
                                                <Link className="collapsed p-3 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse3">
                                                    <span className="me-3 arrow" />
                                                    <h6 className="mb-0 fs-5 text-white">
                                                        <span>How can we identify business opportunities?</span>
                                                    </h6>
                                                </Link>
                                            </div>
                                            <div id="collapse3" className="collapse" data-bs-parent=".accordion">
                                                <p className="px-5 fs-6 fw-regular">Business is what you're offered four times a year by designers and style is what you choose. The key to style is learning who you are which takes years. With good as always.</p>
                                            </div>
                                        </div>
                                        <div className="px-0 bg-transparent card collapse-custom border-0 rounded-4 mb-3" data-aos="fade-up" data-aos-delay={600}>
                                            <div className="p-0 card-header border-0 bg-transparent">
                                                <Link className="collapsed p-3 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse4">
                                                    <span className="me-3 arrow" />
                                                    <h6 className="mb-0 fs-5 text-white">
                                                        <span>What role do internships play?</span>
                                                    </h6>
                                                </Link>
                                            </div>
                                            <div id="collapse4" className="collapse" data-bs-parent=".accordion">
                                                <p className="px-5 fs-6 fw-regular">Business is what you're offered four times a year by designers and style is what you choose. The key to style is learning who you are which takes years. With good as always.</p>
                                            </div>
                                        </div>
                                        <div className="px-0 bg-transparent card collapse-custom border-0 rounded-4 mb-3" data-aos="fade-up" data-aos-delay={800}>
                                            <div className="p-0 card-header border-0 bg-transparent">
                                                <Link className="collapsed p-3 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse5">
                                                    <span className="me-3 arrow" />
                                                    <h6 className="mb-0 fs-5 text-white">
                                                        <span>Does business always follow trends?</span>
                                                    </h6>
                                                </Link>
                                            </div>
                                            <div id="collapse5" className="collapse" data-bs-parent=".accordion">
                                                <p className="px-5 fs-6 fw-regular">Business is what you're offered four times a year by designers and style is what you choose. The key to style is learning who you are which takes years. With good as always.</p>
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
