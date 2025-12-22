import Link from "next/link";

export default function Section5() {
    return (
        <>
            {/*creative-studio section 5 - Design & Content Pricing*/}
            <section className="creative-studio-section-5 position-relative overflow-hidden py-120" data-background="/assets/img/creative-studio-img/pages/creative-studio/page-home/home-section-5/img-bg.png">
                <div className="container">
                    <div className="text-center mb-80 wow img-custom-anim-left">
                        <h2 className="text-white my-3">Design &amp; Content Pricing Plans</h2>
                        <p>
                            Flexible monthly plans for branding, social media creatives, website visuals, and SEO content
                            tailored to your brand stage.
                        </p>
                    </div>
                    <div className="row g-4">
                        {/* Starter Plan */}
                        <div className="col-lg-4">
                            <div data-aos="fade-up" data-aos-delay={0} className="card-pricing rounded-4 border p-md-6 p-4 bg-white h-100">
                                <span className="text-primary btn-text">Starter Plan – For New Brands</span>
                                <div className="d-flex align-items-baseline mb-2">
                                    <h1 className="mb-0">₹2,499</h1>
                                    <span className="ms-2 fs-7 text-muted">/ month</span>
                                </div>
                                <p className="fs-7 mb-4">Best for startups &amp; local businesses launching their brand presence.</p>
                                <span className="btn-text">What’s included:</span>
                                <ul className="list-unstyled mt-3 mb-0">
                                    <li className="d-flex align-items-center border-top py-3">
                                        <p className="fs-7 mb-0">Logo refinement / basic brand elements</p>
                                    </li>
                                    <li className="d-flex align-items-center border-top py-3">
                                        <p className="fs-7 mb-0">6 social media creatives</p>
                                    </li>
                                    <li className="d-flex align-items-center border-top py-3">
                                        <p className="fs-7 mb-0">2 website banners or UI graphics</p>
                                    </li>
                                    <li className="d-flex align-items-center border-top py-3">
                                        <p className="fs-7 mb-0">Basic SEO content (up to 400 words)</p>
                                    </li>
                                    <li className="d-flex align-items-center border-top pt-3">
                                        <p className="fs-7 mb-0">1 revision included</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Growth Plan */}
                        <div className="col-lg-4">
                            <div data-aos="fade-up" data-aos-delay={200} className="card-pricing rounded-4 border border-primary p-md-6 p-4 bg-white h-100 position-relative">
                                <span className="badge bg-primary text-white position-absolute top-0 start-50 translate-middle mt-3 px-3 py-1">
                                    Most Popular
                                </span>
                                <span className="text-primary btn-text mt-4 d-inline-block">Growth Plan – For Growing Brands</span>
                                <div className="d-flex align-items-baseline mb-2">
                                    <h1 className="mb-0">₹6,499</h1>
                                    <span className="ms-2 fs-7 text-muted">/ month</span>
                                </div>
                                <p className="fs-7 mb-4">Best for growing online brands that need consistent design &amp; content.</p>
                                <span className="btn-text">What’s included:</span>
                                <ul className="list-unstyled mt-3 mb-0">
                                    <li className="d-flex align-items-center border-top py-3">
                                        <p className="fs-7 mb-0">Professional logo &amp; brand identity assets</p>
                                    </li>
                                    <li className="d-flex align-items-center border-top py-3">
                                        <p className="fs-7 mb-0">12 social media creatives</p>
                                    </li>
                                    <li className="d-flex align-items-center border-top py-3">
                                        <p className="fs-7 mb-0">Website banners &amp; UI graphics set</p>
                                    </li>
                                    <li className="d-flex align-items-center border-top py-3">
                                        <p className="fs-7 mb-0">SEO copywriting &amp; marketing content (up to 1,200 words)</p>
                                    </li>
                                    <li className="d-flex align-items-center border-top pt-3">
                                        <p className="fs-7 mb-0">2 revisions included</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Premium Plan */}
                        <div className="col-lg-4">
                            <div data-aos="fade-up" data-aos-delay={400} className="card-pricing rounded-4 border p-md-6 p-4 bg-white h-100">
                                <span className="text-primary btn-text">Premium Plan – For Established Brands</span>
                                <div className="d-flex align-items-baseline mb-2">
                                    <h1 className="mb-0">₹11,999</h1>
                                    <span className="ms-2 fs-7 text-muted">/ month</span>
                                </div>
                                <p className="fs-7 mb-4">Best for brands focused on scale, visibility &amp; high-volume content.</p>
                                <span className="btn-text">What’s included:</span>
                                <ul className="list-unstyled mt-3 mb-0">
                                    <li className="d-flex align-items-center border-top py-3">
                                        <p className="fs-7 mb-0">Complete logo &amp; brand identity kit</p>
                                    </li>
                                    <li className="d-flex align-items-center border-top py-3">
                                        <p className="fs-7 mb-0">20+ social media creatives</p>
                                    </li>
                                    <li className="d-flex align-items-center border-top py-3">
                                        <p className="fs-7 mb-0">Custom website banners &amp; UI graphics</p>
                                    </li>
                                    <li className="d-flex align-items-center border-top py-3">
                                        <p className="fs-7 mb-0">Advanced SEO &amp; marketing content (blogs, landing pages, ads)</p>
                                    </li>
                                    <li className="d-flex align-items-center border-top pt-3">
                                        <p className="fs-7 mb-0">Unlimited revisions</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Optional Add-ons */}
                    <div className="row mt-5">
                        <div className="col-lg-10 mx-auto">
                            <div data-aos="fade-up" data-aos-delay={600} className="card-pricing rounded-4 border p-md-6 p-4 bg-white">
                                <span className="text-primary btn-text">Optional Add-on Pricing</span>
                                <div className="row mt-3 g-3">
                                    <div className="col-md-3">
                                        <p className="mb-1 fw-semibold">Logo design (one-time)</p>
                                        <p className="mb-0">₹4,999</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p className="mb-1 fw-semibold">Social media post</p>
                                        <p className="mb-0">₹299 / creative</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p className="mb-1 fw-semibold">Website banner / UI graphic</p>
                                        <p className="mb-0">₹799 each</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p className="mb-1 fw-semibold">SEO blog (800–1,000 words)</p>
                                        <p className="mb-0">₹1,499</p>
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
