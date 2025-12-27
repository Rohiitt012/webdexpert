export default function Section8() {
    return (
        <>
            {/*insurance-consultancy-home-section-8 - FAQs*/}
            <section style={{ backgroundColor: '#fff', paddingTop: '80px', paddingBottom: '80px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="text-center mb-5">
                                <h2
                                    className="mb-3"
                                    style={{
                                        fontSize: '40px',
                                        lineHeight: '1.3',
                                        fontWeight: 400,
                                        color: '#000',
                                        fontFamily:
                                            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                                    }}
                                >
                                    FAQs On <span style={{ fontWeight: 'bold' }}>Social Media Management Services</span>
                                </h2>
                            </div>

                            <div className="accordion service-faq-accordion" id="smmFaqAccordion">
                                {/* FAQ Item 1 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="faqHeadingOne">
                                        <button
                                            className="accordion-button d-flex align-items-center justify-content-between"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faqCollapseOne"
                                            aria-expanded="true"
                                            aria-controls="faqCollapseOne"
                                        >
                                            How Soon Can I Expect Results?
                                        </button>
                                    </h2>
                                    <div
                                        id="faqCollapseOne"
                                        className="accordion-collapse collapse show"
                                        aria-labelledby="faqHeadingOne"
                                        data-bs-parent="#smmFaqAccordion"
                                    >
                                        <div className="accordion-body">
                                            Social media management is a long-term strategy, but our clients typically begin to see
                                            noticeable improvements in engagement and reach within the first 2–3 months, with more
                                            substantial business results developing over 6–12 months.
                                        </div>
                                    </div>
                                </div>

                                {/* FAQ Item 2 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="faqHeadingTwo">
                                        <button
                                            className="accordion-button collapsed d-flex align-items-center justify-content-between"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faqCollapseTwo"
                                            aria-expanded="false"
                                            aria-controls="faqCollapseTwo"
                                        >
                                            What Industries Do You Specialize In?
                                        </button>
                                    </h2>
                                    <div
                                        id="faqCollapseTwo"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="faqHeadingTwo"
                                        data-bs-parent="#smmFaqAccordion"
                                    >
                                        <div className="accordion-body">
                                            We work with a wide range of industries including eCommerce, SaaS, healthcare, education,
                                            professional services, real estate, and more—adapting our strategies to your specific niche
                                            and audience.
                                        </div>
                                    </div>
                                </div>

                                {/* FAQ Item 3 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="faqHeadingThree">
                                        <button
                                            className="accordion-button collapsed d-flex align-items-center justify-content-between"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faqCollapseThree"
                                            aria-expanded="false"
                                            aria-controls="faqCollapseThree"
                                        >
                                            Can You Run Ads As Well?
                                        </button>
                                    </h2>
                                    <div
                                        id="faqCollapseThree"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="faqHeadingThree"
                                        data-bs-parent="#smmFaqAccordion"
                                    >
                                        <div className="accordion-body">
                                            Yes. Along with organic social media management, we also create, manage, and optimize paid
                                            campaigns on platforms like Facebook, Instagram, LinkedIn, and others to help you reach your
                                            growth and lead-generation goals.
                                        </div>
                                    </div>
                                </div>

                                {/* FAQ Item 4 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="faqHeadingFour">
                                        <button
                                            className="accordion-button collapsed d-flex align-items-center justify-content-between"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faqCollapseFour"
                                            aria-expanded="false"
                                            aria-controls="faqCollapseFour"
                                        >
                                            Will I Get A Dedicated Manager?
                                        </button>
                                    </h2>
                                    <div
                                        id="faqCollapseFour"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="faqHeadingFour"
                                        data-bs-parent="#smmFaqAccordion"
                                    >
                                        <div className="accordion-body">
                                            Absolutely. Every account is assigned a dedicated social media manager who will be your main
                                            point of contact and will coordinate strategy, execution, and reporting.
                                        </div>
                                    </div>
                                </div>

                                {/* FAQ Item 5 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="faqHeadingFive">
                                        <button
                                            className="accordion-button collapsed d-flex align-items-center justify-content-between"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faqCollapseFive"
                                            aria-expanded="false"
                                            aria-controls="faqCollapseFive"
                                        >
                                            Do You Work With B2B Businesses?
                                        </button>
                                    </h2>
                                    <div
                                        id="faqCollapseFive"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="faqHeadingFive"
                                        data-bs-parent="#smmFaqAccordion"
                                    >
                                        <div className="accordion-body">
                                            Yes, we have extensive experience managing social media for both B2B and B2C brands, tailoring
                                            messaging, content formats, and channels to match your buyers' journey.
                                        </div>
                                    </div>
                                </div>

                                {/* FAQ Item 6 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="faqHeadingSix">
                                        <button
                                            className="accordion-button collapsed d-flex align-items-center justify-content-between"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faqCollapseSix"
                                            aria-expanded="false"
                                            aria-controls="faqCollapseSix"
                                        >
                                            Is There A Minimum Contract Period?
                                        </button>
                                    </h2>
                                    <div
                                        id="faqCollapseSix"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="faqHeadingSix"
                                        data-bs-parent="#smmFaqAccordion"
                                    >
                                        <div className="accordion-body">
                                            Most of our social media management plans start with a minimum 3–6 month commitment so that we
                                            have enough time to plan, execute, and optimize campaigns for meaningful results.
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


