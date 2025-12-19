import Link from "next/link";

export default function Section7() {
    return (
        <>
            {/*support-desk home faq section*/}
            <section className="support-desk-home-section-7 position-relative overflow-hidden py-120" style={{ backgroundColor: "#eff4f9" }}>
                <div className="container position-relative z-1">
                    <div className="text-center">
                        <div className="d-flex align-items-center justify-content-center gap-3">
                            <span className="small-line" />
                            <span className="btn-text text-primary">faq &amp; a.</span>
                            <span className="small-line" />
                        </div>
                        <h2 className="text-dark mt-3 mb-8 text-anime-style-2">Get every single answer</h2>
                    </div>
                    <div className="row flex-wrap align-items-end">
                        <div className="col-lg-12 col-md-12">
                            <div className="accordion-2">
                                <div className="px-0 card border-bottom-0 rounded-bottom-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#sd-faq-1">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">What is Cloudflare CDN and how does it protect websites?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="sd-faq-1" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Cloudflare CDN distributes website content globally while protecting against DDoS attacks,
                                            improving loading speed, reducing server load, and ensuring high availability during traffic
                                            spikes or malicious threats.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#sd-faq-2">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">Do you provide complete DDoS protection for all websites?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="sd-faq-2" className="collapse show" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Yes, we implement advanced DDoS mitigation using Cloudflare to safeguard websites from small
                                            to large-scale attacks without affecting performance or causing downtime.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#sd-faq-3">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">How do you handle malware removal from infected websites?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="sd-faq-3" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            We perform deep malware scanning, remove malicious code, clean infected files, secure
                                            vulnerabilities, and apply firewall rules to prevent future infections and ensure long-term
                                            website security.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#sd-faq-4">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">What type of firewall setup do you offer?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="sd-faq-4" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            We configure web application firewalls (WAF) with custom security rules to block threats,
                                            prevent unauthorized access, and protect websites from common exploits and cyberattacks.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#sd-faq-5">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">Is website migration completely safe and downtime-free?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="sd-faq-5" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Yes, our migration process ensures secure data transfer, compatibility checks, and minimal to
                                            zero downtime while moving websites between hosting providers or servers.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#sd-faq-6">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">Can you migrate large or complex websites?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="sd-faq-6" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Absolutely. We handle static, dynamic, CMS-based, and eCommerce websites, including databases
                                            and emails, ensuring smooth migration regardless of size or complexity.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#sd-faq-7">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">How does server and speed optimization improve performance?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="sd-faq-7" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            We optimize servers using caching, compression, CDN integration, database tuning, and
                                            performance audits to significantly improve page load speed and overall user experience.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card rounded-top-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-bottom-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#sd-faq-8">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">Who should use your security and optimization services?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="sd-faq-8" className="collapse rounded-bottom-3" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Our services are ideal for businesses, startups, eCommerce stores, and agencies seeking
                                            secure, fast, reliable, and scalable website infrastructure.
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

