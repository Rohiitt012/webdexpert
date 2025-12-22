import Link from "next/link";

export default function Section5() {
    return (
        <>
            {/*fintech-solution section 5*/}
            <section className="fintech-solution-section-5 position-relative overflow-hidden bg-primary py-120 bg-primary">
                <div className="container">
                    <div className="text-center mb-80">
                        <span className="content-top btn-text text-white d-flex align-items-center justify-content-center">
                            <div className="line bg-white" />
                            <span className="mx-3">how it works</span>
                            <div className="line bg-white" />
                        </span>
                        <h2 className="text-white my-3 text-anime-style-2">How our custom CRM process works</h2>
                    </div>
                    <div className="row wow img-custom-anim-left">
                        <div className="col-lg-4 pe-lg-0">
                            <div className="tag-process p-5 border-end-lg border-bottom border-bottom-lg-0 rounded-start-lg-4 rounded-top-lg-0 rounded-top-4 position-relative z-1">
                                <div className="position-absolute top-lg-50 top-100 start-50 start-lg-100 translate-middle">
                                    <div className="icon-shape icon-xl rounded-circle">
                                        <i className="fa-solid fa-arrow-right-long text-white" />
                                    </div>
                                </div>
                                <span className="stroke-white fs-120">01</span>
                                <h6 className="text-white mt-8">Plan your custom CRM system</h6>
                                <p className="text-white text-opacity-75">
                                    We map your sales process, lead sources, teams and dashboards to design a custom CRM that fits how you actually work.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 px-lg-0">
                            <div className="tag-process p-5 border-end-lg border-bottom border-bottom-lg-0 position-relative z-0">
                                <div className="position-absolute top-lg-50 top-100 start-50 start-lg-100 translate-middle">
                                    <div className="icon-shape icon-xl rounded-circle">
                                        <i className="fa-solid fa-arrow-right-long text-white" />
                                    </div>
                                </div>
                                <span className="stroke-white fs-120">02</span>
                                <h6 className="text-white mt-8">Set up pipelines, tracking &amp; automations</h6>
                                <p className="text-white text-opacity-75">
                                    We configure lead &amp; deal pipelines, client &amp; sales tracking, and automated WhatsApp / email follow‑ups for every stage.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 px-lg-0">
                            <div className="tag-process p-5 rounded-end-lg-4 rounded-bottom-4 rounded-bottom-lg-0">
                                <span className="stroke-white fs-120">03</span>
                                <h6 className="text-white mt-8">Connect CRM &amp; launch with integrations</h6>
                                <p className="text-white text-opacity-75">
                                    We plug in CRM + API integrations (Meta, Google, WhatsApp and more), go live, and optimise based on your team’s real usage.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-7">
                        <div className="text-center d-flex flex-wrap align-items-center justify-content-center gap-3">
                            <h6 className="text-white mb-0 text-anime-style-2">Available mobile app for platform.</h6>
                            <div className="d-flex align-items-center gap-3 ms-lg-8">
                                <Link href="#" className="rounded-pill shadow overflow-hidden hover-up">
                                    <img src="/assets/img/fintech-solution-img/pages/fintech-solution/page-home/home-section-5/logo-1.png" alt="AstraX" />
                                </Link>
                                <Link href="#" className="rounded-pill shadow overflow-hidden hover-up">
                                    <img src="/assets/img/fintech-solution-img/pages/fintech-solution/page-home/home-section-5/logo-2.png" alt="AstraX" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
