import Link from "next/link";

export default function Section3C() {
    return (
        <>
            {/*charity-home-section-3C - CTA Section*/}
            <section className="charity-home-section-3 pt-120 pb-120 position-relative z-0 overflow-hidden">
                <div className="container position-relative">
                    <div className="bg-primary rounded-4 p-lg-10 p-5 text-center" data-aos="fade-up">
                        <h2 className="text-dark mb-4 text-anime-style-3">
                            🔔 Automate your workflows. Convert more leads.
                            <span className="bg-white border border-dark rounded-5 px-2">Scale faster.</span>
                        </h2>
                        <p className="fs-5 text-dark mb-5">
                            We design smart automation systems that work 24/7 for your business.
                        </p>
                        <div className="d-flex flex-wrap gap-3 justify-content-center">
                            <Link href="#" className="btn btn-dark btn-lg">
                                <span>👉 Book an Automation Demo</span>
                            </Link>
                            <Link href="#" className="btn btn-outline-dark btn-lg">
                                <span>👉 Automate Your Business</span>
                            </Link>
                            <Link href="#" className="btn btn-outline-dark btn-lg">
                                <span>👉 Get a Custom Plan</span>
                            </Link>
                        </div>
                    </div>

                    {/* Professional Disclaimer */}
                    <div className="row mt-80">
                        <div className="col-12">
                            <div className="bg-light rounded-4 p-4 border border-white">
                                <p className="mb-0 text-center text-muted fs-7">
                                    <strong>📌 Professional Disclaimer:</strong> WhatsApp API charges, third-party tool subscriptions, and message costs are billed separately. Pricing may vary based on workflow complexity.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
