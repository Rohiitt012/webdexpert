import Link from "next/link";

export default function Section6({ bg }: any) {
    return (
        <>
            {/*digital-agency section 6*/}
            <section className={`digital-agency-home-section-6 position-relative overflow-hidden py-120 ${bg}`}>
                <div className="container">
                    <div className="text-center">
                        <div className="mb-4 bg-primary rounded-pill border border-dark btn-text d-inline-block px-3 py-2">
                            <span className="text-dark">faq options</span>
                        </div>
                        <h2 className="mb-80 text-anime-style-3">
                            Questions? We're glad <br />
                            you asked.
                        </h2>
                    </div>
                    <div className="row g-lg-5">
                        <div className="col-lg-6">
                            <div className="accordion">
                                <div className="px-0 card collapse-custom mb-3 border-dark" data-aos="fade-up" data-aos-delay={0}>
                                    <div className="p-0 card-header border-0 bg-transparent">
                                        <Link className="collapsed p-3 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse1">
                                            <span className="me-3 arrow" />
                                            <h6 className="mb-0 fs-20">
                                                <span>How Often Should I Update My Website?</span>
                                            </h6>
                                        </Link>
                                    </div>
                                    <div id="collapse1" className="collapse" data-bs-parent=".accordion">
                                        <p className="pe-3 fs-6 fw-regular ps-7">
                                            For most websites, we recommend updating the CMS, plugins, and themes at least once a month
                                            or whenever important security and feature updates are released. Content updates can be done
                                            as frequently as your business requires.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card collapse-custom mb-3 border-dark" data-aos="fade-up" data-aos-delay={200}>
                                    <div className="p-0 card-header border-0 bg-transparent">
                                        <Link className="p-3 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse2">
                                            <span className="me-3 arrow" />
                                            <h6 className="mb-0 fs-20">
                                                <span>Do You Provide Backup And Disaster Recovery Options?</span>
                                            </h6>
                                        </Link>
                                    </div>
                                    <div id="collapse2" className="collapse show" data-bs-parent=".accordion">
                                        <p className="pe-3 fs-6 fw-regular ps-7">
                                            Yes. We set up automated backups for your website and can store them securely on off‑site
                                            locations. In the event of an issue or disaster, we can quickly restore your site to a recent,
                                            stable version.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card collapse-custom mb-3 border-dark" data-aos="fade-up" data-aos-delay={400}>
                                    <div className="p-0 card-header border-0 bg-transparent">
                                        <Link className="collapsed p-3 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse3">
                                            <span className="me-3 arrow" />
                                            <h6 className="mb-0 fs-20">
                                                <span>Is Website Maintenance Necessary If My Website Is Already Live?</span>
                                            </h6>
                                        </Link>
                                    </div>
                                    <div id="collapse3" className="collapse" data-bs-parent=".accordion">
                                        <p className="pe-3 fs-6 fw-regular ps-7">
                                            Absolutely. Even if your website is live and working, regular maintenance is essential to keep
                                            it secure, fast, and compatible with new browsers, devices, and technologies.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card collapse-custom mb-3 border-dark" data-aos="fade-up" data-aos-delay={600}>
                                    <div className="p-0 card-header border-0 bg-transparent">
                                        <Link className="collapsed p-3 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse4">
                                            <span className="me-3 arrow" />
                                            <h6 className="mb-0 fs-20">
                                                <span>How Long Does It Take To Complete Website Maintenance Tasks?</span>
                                            </h6>
                                        </Link>
                                    </div>
                                    <div id="collapse4" className="collapse" data-bs-parent=".accordion">
                                        <p className="pe-3 fs-6 fw-regular ps-7">
                                            Timelines depend on your site’s size and the scope of work. Routine updates may only take a few
                                            hours, while full audits and fixes can take a couple of days. We always share a clear schedule
                                            before we start.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card collapse-custom mb-3 border-dark" data-aos="fade-up" data-aos-delay={800}>
                                    <div className="p-0 card-header border-0 bg-transparent">
                                        <Link className="collapsed p-3 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse5">
                                            <span className="me-3 arrow" />
                                            <h6 className="mb-0 fs-20">
                                                <span>Can You Assist With Website Redesign Or Revamp During Maintenance?</span>
                                            </h6>
                                        </Link>
                                    </div>
                                    <div id="collapse5" className="collapse" data-bs-parent=".accordion">
                                        <p className="pe-3 fs-6 fw-regular ps-7">
                                            Yes. We can plan and execute design improvements or a complete revamp while managing risks and
                                            minimizing downtime, so your visitors always have a smooth experience.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="accordion2">
                                <div className="px-0 card collapse-custom mb-3 border-dark" data-aos="fade-up" data-aos-delay={0}>
                                    <div className="p-0 card-header border-0 bg-transparent">
                                        <Link className="collapsed p-3 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse6">
                                            <span className="me-3 arrow" />
                                            <h6 className="mb-0 fs-20">
                                                <span>What If My Website Experiences Downtime Or Technical Issues?</span>
                                            </h6>
                                        </Link>
                                    </div>
                                    <div id="collapse6" className="collapse" data-bs-parent=".accordion2">
                                        <p className="pe-3 fs-6 fw-regular ps-7">
                                            If your website goes down or runs into technical issues, our team investigates the root cause,
                                            fixes the problem, and implements safeguards to prevent it from happening again. We also keep
                                            you informed during the process.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card collapse-custom mb-3 border-dark" data-aos="fade-up" data-aos-delay={200}>
                                    <div className="p-0 card-header border-0 bg-transparent">
                                        <Link className="p-3 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse7">
                                            <span className="me-3 arrow" />
                                            <h6 className="mb-0 fs-20">
                                                <span>Do You Offer Ongoing Support After The Completion Of Maintenance Tasks?</span>
                                            </h6>
                                        </Link>
                                    </div>
                                    <div id="collapse7" className="collapse show" data-bs-parent=".accordion2">
                                        <p className="pe-3 fs-6 fw-regular ps-7">
                                            Yes. We provide ongoing support and maintenance packages so you always have experts available
                                            for updates, fixes, and advice even after the initial work is completed.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card collapse-custom mb-3 border-dark" data-aos="fade-up" data-aos-delay={400}>
                                    <div className="p-0 card-header border-0 bg-transparent">
                                        <Link className="collapsed p-3 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse8">
                                            <span className="me-3 arrow" />
                                            <h6 className="mb-0 fs-20">
                                                <span>Can You Help With Search Engine Optimization (SEO) During Website Maintenance?</span>
                                            </h6>
                                        </Link>
                                    </div>
                                    <div id="collapse8" className="collapse" data-bs-parent=".accordion2">
                                        <p className="pe-3 fs-6 fw-regular ps-7">
                                            Definitely. As part of maintenance, we can address technical SEO issues, improve page speed,
                                            fix broken links, and implement on‑page SEO best practices to support better rankings.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card collapse-custom mb-3 border-dark" data-aos="fade-up" data-aos-delay={600}>
                                    <div className="p-0 card-header border-0 bg-transparent">
                                        <Link className="collapsed p-3 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse9">
                                            <span className="me-3 arrow" />
                                            <h6 className="mb-0 fs-20">
                                                <span>What Is The Process To Avail Of Your Website Maintenance Services?</span>
                                            </h6>
                                        </Link>
                                    </div>
                                    <div id="collapse9" className="collapse" data-bs-parent=".accordion2">
                                        <p className="pe-3 fs-6 fw-regular ps-7">
                                            You simply contact us with your requirements, we perform a website audit, share a custom
                                            maintenance plan and quote, and once approved we begin onboarding and scheduling recurring
                                            tasks.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card collapse-custom mb-3 border-dark" data-aos="fade-up" data-aos-delay={800}>
                                    <div className="p-0 card-header border-0 bg-transparent">
                                        <Link className="collapsed p-3 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse10">
                                            <span className="me-3 arrow" />
                                            <h6 className="mb-0 fs-20">
                                                <span>Can You Help With Additional Custom Features Or Integrations?</span>
                                            </h6>
                                        </Link>
                                    </div>
                                    <div id="collapse10" className="collapse" data-bs-parent=".accordion2">
                                        <p className="pe-3 fs-6 fw-regular ps-7">
                                            Yes. We can assist with adding new features, third‑party tools, and integrations as your
                                            business grows, ensuring everything works smoothly with your existing website.
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
