import Link from "next/link";

export default function Section3B() {
    return (
        <>
            {/*charity-home-section-3B - Automation Packages*/}
            <section className="charity-home-section-3 pt-120 pb-120 position-relative z-0 bg-light overflow-hidden">
                <div className="container position-relative">
                    <div className="row">
                        <div className="number-step d-flex align-items-center gap-3">
                            <i className="fa-solid fa-heart text-primary" />
                            <span className="btn-text">automation packages</span>
                        </div>
                        <div className="d-flex flex-wrap gap-3 justify-content-between align-items-center">
                            <h2 className="text-dark my-3 text-anime-style-3">
                                📦 Automation 
                                <span className="bg-white border border-dark rounded-5 px-2">Packages</span>
                            </h2>
                        </div>
                    </div>

                    {/* Packages Grid */}
                    <div className="row mt-80">
                        {/* Starter Package */}
                        <div className="col-lg-4 col-md-6 card-feature mb-5" data-aos="fade-up" data-aos-delay={0}>
                            <div className="bg-white rounded-4 p-5 hover-up border border-white h-100">
                                <div className="text-center mb-4">
                                    <h3 className="mb-3">⭐ Automation Starter</h3>
                                    <h2 className="text-primary">₹24,999</h2>
                                </div>
                                <div className="line mb-4" />
                                <ul className="list-unstyled mb-4">
                                    <li className="mb-3">✔ Lead capture & follow-up automation</li>
                                    <li className="mb-3">✔ Basic WhatsApp chatbot</li>
                                    <li className="mb-3">✔ One workflow automation</li>
                                </ul>
                                <div className="bg-light rounded-3 p-3 mb-4">
                                    <p className="mb-0 text-center"><strong>Best for:</strong> Small businesses</p>
                                </div>
                                <Link href="#" className="btn btn-outline-secondary w-100">
                                    <span>Get Started</span>
                                </Link>
                            </div>
                        </div>

                        {/* Growth Package */}
                        <div className="col-lg-4 col-md-6 card-feature mb-5" data-aos="fade-up" data-aos-delay={200}>
                            <div className="bg-primary rounded-4 p-5 hover-up border border-primary h-100 position-relative">
                                <div className="position-absolute top-0 end-0 m-3">
                                    <span className="badge bg-dark">Popular</span>
                                </div>
                                <div className="text-center mb-4">
                                    <h3 className="mb-3 text-dark">🚀 Growth Automation</h3>
                                    <h2 className="text-dark">₹49,999</h2>
                                </div>
                                <div className="line mb-4 bg-dark" />
                                <ul className="list-unstyled mb-4 text-dark">
                                    <li className="mb-3">✔ Advanced WhatsApp automation</li>
                                    <li className="mb-3">✔ Sales & marketing workflows</li>
                                    <li className="mb-3">✔ API integration (1 system)</li>
                                    <li className="mb-3">✔ Workflow automation (Zapier / Make)</li>
                                </ul>
                                <div className="bg-white rounded-3 p-3 mb-4">
                                    <p className="mb-0 text-center"><strong>Best for:</strong> Growing businesses & agencies</p>
                                </div>
                                <Link href="#" className="btn btn-dark w-100">
                                    <span>Scale Now</span>
                                </Link>
                            </div>
                        </div>

                        {/* Enterprise Package */}
                        <div className="col-lg-4 col-md-6 card-feature mb-5" data-aos="fade-up" data-aos-delay={400}>
                            <div className="bg-white rounded-4 p-5 hover-up border border-white h-100">
                                <div className="text-center mb-4">
                                    <h3 className="mb-3">🏆 Enterprise Suite</h3>
                                    <h2 className="text-primary">₹89,999+</h2>
                                </div>
                                <div className="line mb-4" />
                                <ul className="list-unstyled mb-4">
                                    <li className="mb-3">✔ Full WhatsApp automation</li>
                                    <li className="mb-3">✔ Advanced sales & marketing automation</li>
                                    <li className="mb-3">✔ Multiple API integrations</li>
                                    <li className="mb-3">✔ Complex workflow automation (n8n)</li>
                                    <li className="mb-3">✔ Priority support & documentation</li>
                                </ul>
                                <div className="bg-light rounded-3 p-3 mb-4">
                                    <p className="mb-0 text-center"><strong>Best for:</strong> High-volume & enterprise teams</p>
                                </div>
                                <Link href="#" className="btn btn-outline-secondary w-100">
                                    <span>Contact Sales</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
