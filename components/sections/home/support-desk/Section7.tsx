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
                            <div className="accordion service-faq-accordion" id="sdFaqAccordion">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="sdFaqHeading1">
                                        <button className="accordion-button collapsed d-flex align-items-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#sd-faq-1" aria-expanded="false" aria-controls="sd-faq-1">
                                            What is Cloudflare CDN and how does it protect websites?
                                        </button>
                                    </h2>
                                    <div id="sd-faq-1" className="accordion-collapse collapse" aria-labelledby="sdFaqHeading1" data-bs-parent="#sdFaqAccordion">
                                        <div className="accordion-body">
                                            Cloudflare CDN distributes website content globally while protecting against DDoS attacks,
                                            improving loading speed, reducing server load, and ensuring high availability during traffic
                                            spikes or malicious threats.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="sdFaqHeading2">
                                        <button className="accordion-button d-flex align-items-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#sd-faq-2" aria-expanded="true" aria-controls="sd-faq-2">
                                            Do you provide complete DDoS protection for all websites?
                                        </button>
                                    </h2>
                                    <div id="sd-faq-2" className="accordion-collapse collapse show" aria-labelledby="sdFaqHeading2" data-bs-parent="#sdFaqAccordion">
                                        <div className="accordion-body">
                                            Yes, we implement advanced DDoS mitigation using Cloudflare to safeguard websites from small
                                            to large-scale attacks without affecting performance or causing downtime.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="sdFaqHeading3">
                                        <button className="accordion-button collapsed d-flex align-items-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#sd-faq-3" aria-expanded="false" aria-controls="sd-faq-3">
                                            How do you handle malware removal from infected websites?
                                        </button>
                                    </h2>
                                    <div id="sd-faq-3" className="accordion-collapse collapse" aria-labelledby="sdFaqHeading3" data-bs-parent="#sdFaqAccordion">
                                        <div className="accordion-body">
                                            We perform deep malware scanning, remove malicious code, clean infected files, secure
                                            vulnerabilities, and apply firewall rules to prevent future infections and ensure long-term
                                            website security.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="sdFaqHeading4">
                                        <button className="accordion-button collapsed d-flex align-items-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#sd-faq-4" aria-expanded="false" aria-controls="sd-faq-4">
                                            What type of firewall setup do you offer?
                                        </button>
                                    </h2>
                                    <div id="sd-faq-4" className="accordion-collapse collapse" aria-labelledby="sdFaqHeading4" data-bs-parent="#sdFaqAccordion">
                                        <div className="accordion-body">
                                            We configure web application firewalls (WAF) with custom security rules to block threats,
                                            prevent unauthorized access, and protect websites from common exploits and cyberattacks.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="sdFaqHeading5">
                                        <button className="accordion-button collapsed d-flex align-items-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#sd-faq-5" aria-expanded="false" aria-controls="sd-faq-5">
                                            Is website migration completely safe and downtime-free?
                                        </button>
                                    </h2>
                                    <div id="sd-faq-5" className="accordion-collapse collapse" aria-labelledby="sdFaqHeading5" data-bs-parent="#sdFaqAccordion">
                                        <div className="accordion-body">
                                            Yes, our migration process ensures secure data transfer, compatibility checks, and minimal to
                                            zero downtime while moving websites between hosting providers or servers.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="sdFaqHeading6">
                                        <button className="accordion-button collapsed d-flex align-items-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#sd-faq-6" aria-expanded="false" aria-controls="sd-faq-6">
                                            Can you migrate large or complex websites?
                                        </button>
                                    </h2>
                                    <div id="sd-faq-6" className="accordion-collapse collapse" aria-labelledby="sdFaqHeading6" data-bs-parent="#sdFaqAccordion">
                                        <div className="accordion-body">
                                            Absolutely. We handle static, dynamic, CMS-based, and eCommerce websites, including databases
                                            and emails, ensuring smooth migration regardless of size or complexity.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="sdFaqHeading7">
                                        <button className="accordion-button collapsed d-flex align-items-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#sd-faq-7" aria-expanded="false" aria-controls="sd-faq-7">
                                            How does server and speed optimization improve performance?
                                        </button>
                                    </h2>
                                    <div id="sd-faq-7" className="accordion-collapse collapse" aria-labelledby="sdFaqHeading7" data-bs-parent="#sdFaqAccordion">
                                        <div className="accordion-body">
                                            We optimize servers using caching, compression, CDN integration, database tuning, and
                                            performance audits to significantly improve page load speed and overall user experience.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="sdFaqHeading8">
                                        <button className="accordion-button collapsed d-flex align-items-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#sd-faq-8" aria-expanded="false" aria-controls="sd-faq-8">
                                            Who should use your security and optimization services?
                                        </button>
                                    </h2>
                                    <div id="sd-faq-8" className="accordion-collapse collapse" aria-labelledby="sdFaqHeading8" data-bs-parent="#sdFaqAccordion">
                                        <div className="accordion-body">
                                            Our services are ideal for businesses, startups, eCommerce stores, and agencies seeking
                                            secure, fast, reliable, and scalable website infrastructure.
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

