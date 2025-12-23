import Link from "next/link";

export default function Section3() {
    return (
        <>
            {/*charity-home-section-3*/}
            <section className="charity-home-section-3 pt-120 pb-120 position-relative z-0 bg-white overflow-hidden">
                <div className="container position-relative">
                    <div className="row">
                        <div className="col-12 mb-5">
                            <div className="number-step d-flex align-items-center gap-3">
                                <i className="fa-solid fa-heart text-primary" />
                                <span className="btn-text">our expertise</span>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 card-feature mb-5" data-aos="fade-up" data-aos-delay={0}>
                            <div className="bg-white rounded-4 p-4 hover-up border border-white h-100">
                                <div className="mb-4">
                                    <i className="bi bi-whatsapp fs-1 text-primary"></i>
                                </div>
                                <div className="line mb-4" />
                                <Link href="#">
                                    <h5 className="text-anime-style-2">WhatsApp Automation</h5>
                                </Link>
                                <p className="fs-7">(chatbots, flows, broadcasts)</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 card-feature mb-5" data-aos="fade-up" data-aos-delay={200}>
                            <div className="bg-white rounded-4 p-4 hover-up border border-white h-100">
                                <div className="mb-4">
                                    <i className="bi bi-arrow-repeat fs-1 text-danger"></i>
                                </div>
                                <div className="line mb-4" />
                                <Link href="#">
                                    <h5 className="text-anime-style-2">Lead Capture → Follow-up Automation</h5>
                                </Link>
                                <p className="fs-7">Streamline your lead management process.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 card-feature mb-5" data-aos="fade-up" data-aos-delay={400}>
                            <div className="bg-white rounded-4 p-4 hover-up border border-white h-100">
                                <div className="mb-4">
                                    <i className="bi bi-graph-up-arrow fs-1 text-success"></i>
                                </div>
                                <div className="line mb-4" />
                                <Link href="#">
                                    <h5 className="text-anime-style-2">Sales & Marketing Automation</h5>
                                </Link>
                                <p className="fs-7">Boost your sales and marketing efforts.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 card-feature mb-5" data-aos="fade-up" data-aos-delay={600}>
                            <div className="bg-white rounded-4 p-4 hover-up border border-white h-100">
                                <div className="mb-4">
                                    <i className="bi bi-link-45deg fs-1 text-warning"></i>
                                </div>
                                <div className="line mb-4" />
                                <Link href="#">
                                    <h5 className="text-anime-style-2">API Integrations</h5>
                                </Link>
                                <p className="fs-7">(Payment, CRM, ERP)</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 card-feature mb-5" data-aos="fade-up" data-aos-delay={800}>
                            <div className="bg-white rounded-4 p-4 hover-up border border-white h-100">
                                <div className="mb-4">
                                    <i className="bi bi-gear-wide-connected fs-1 text-info"></i>
                                </div>
                                <div className="line mb-4" />
                                <Link href="#">
                                    <h5 className="text-anime-style-2">Zapier, Make, n8n Workflow Automation</h5>
                                </Link>
                                <p className="fs-7">Connect apps and automate workflows.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
