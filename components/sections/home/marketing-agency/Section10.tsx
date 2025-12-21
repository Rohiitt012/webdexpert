import Link from "next/link";

export default function Section10() {
    return (
        <>
            {/*marketing-agency home faq section - Performance Marketing FAQs */}
            <section className="marketing-agency-home-section-10 position-relative overflow-hidden py-120" style={{ backgroundColor: "#eff4f9" }}>
                <div className="container position-relative z-1">
                    <div className="text-center">
                        <div className="d-flex align-items-center justify-content-center gap-3">
                            <span className="small-line" />
                            <span className="btn-text text-primary">FAQs</span>
                            <span className="small-line" />
                        </div>
                        <h2 className="text-dark mt-3 mb-8 text-anime-style-2">Get every single answer</h2>
                    </div>
                    <div className="row flex-wrap align-items-end">
                        <div className="col-lg-12 col-md-12">
                            <div className="accordion-2">
                                <div className="px-0 card border-bottom-0 rounded-bottom-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#pm-faq-1">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">What is Performance Marketing and how does it help my business?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="pm-faq-1" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Performance marketing is a results-driven advertising approach where campaigns are optimized for measurable outcomes like leads, sales, or conversions. It ensures better ROI by tracking every click, impression, and action taken by users.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#pm-faq-2">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">Which platforms do you use for Performance Marketing?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="pm-faq-2" className="collapse show" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            We run high-performing campaigns on Google Ads, Meta Ads (Facebook & Instagram), and YouTube Ads, selecting platforms based on your business goals, target audience, and budget for maximum reach and conversions.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#pm-faq-3">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">How do Google Ads benefit my business?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="pm-faq-3" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Google Ads help you reach high-intent customers who are actively searching for your products or services, driving quality traffic, instant visibility, and faster conversions with controlled ad spend.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#pm-faq-4">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">Why should I advertise on Facebook and Instagram?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="pm-faq-4" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Meta Ads allow precise audience targeting based on interests, behavior, and demographics, helping businesses build brand awareness, generate leads, and drive consistent sales through visually engaging ads.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#pm-faq-5">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">Is YouTube advertising effective for conversions?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="pm-faq-5" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Yes, YouTube Ads are highly effective for building trust, increasing brand recall, and driving conversions through engaging video content targeted to the right audience at the right stage of the funnel.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#pm-faq-6">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">What is Conversion Tracking and why is it important?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="pm-faq-6" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Conversion tracking helps monitor user actions like form submissions, purchases, or calls. We use advanced tools like CAPI and Google Tag Manager to ensure accurate data tracking and better campaign optimization.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#pm-faq-7">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">How does CAPI improve ad performance?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="pm-faq-7" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Conversion API (CAPI) sends server-side data directly to ad platforms, improving tracking accuracy, reducing data loss due to cookies, and helping ad algorithms optimize campaigns more effectively.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#pm-faq-8">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">What role does CRO play in Performance Marketing?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="pm-faq-8" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Conversion Rate Optimization (CRO) focuses on improving landing pages, funnels, and user experience to convert more visitors into customers without increasing ad spend, resulting in higher ROI.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#pm-faq-9">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">Do you create funnels for lead generation and sales?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="pm-faq-9" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Yes, we design and optimize high-converting funnels including landing pages, ad creatives, and follow-up strategies to guide users smoothly from first click to final conversion.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card rounded-top-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-bottom-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#pm-faq-10">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">How do you measure and report campaign performance?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="pm-faq-10" className="collapse rounded-bottom-3" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            We provide detailed performance reports covering clicks, leads, conversions, cost per result, and ROI, along with actionable insights and optimization strategies to continuously improve results.
                                        </p>
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

