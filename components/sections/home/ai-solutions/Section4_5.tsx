import Link from "next/link";

export default function Section4_5() {
    return (
        <>
            {/*ai-solutions-home section 4.5 - Customized Packages*/}
            <section className="ai-solutions-home-section-4-5 position-relative overflow-hidden py-80 bg-dark">
                <div className="container position-relative z-1">
                    <div className="row align-items-center g-8">
                        <div className="col-lg-6">
                            <div className="position-relative">
                                <span className="btn-text text-primary mb-4 d-block">Customized Packages & Pilot Projects</span>
                                <h2 className="text-white mb-5 text-anime-style-2">
                                    We Believe In <span className="text-primary fw-bold">"First Deserve Then Desire".</span>
                                </h2>
                                <h5 className="text-white mb-4">This Is Why We Are Open for Pilot Projects!</h5>
                                <p className="text-white mb-5 fst-italic">
                                    We know it may take a few months to establish a trusted relationship so we are open to customization.
                                </p>
                                <Link href="/contact" className="btn btn-outline-light rounded-5 px-5 py-3 d-inline-flex align-items-center gap-2">
                                    Let's Accelerate Your Growth!
                                    <span className="fw-bold">&gt;&gt;</span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative">
                                <img className="w-100 rounded-4" src="/assets/img/ai-solutions-img/pages/ai-solutions/page-home/home-section-4-5/analytics.png" alt="Xzect Labs Analytics" />
                                <div className="carousel-nav d-flex gap-3 mt-4 justify-content-end">
                                    <button className="btn btn-light rounded-circle p-3 prev-btn">
                                        <i className="ri-arrow-left-s-line" />
                                    </button>
                                    <button className="btn btn-light rounded-circle p-3 next-btn">
                                        <i className="ri-arrow-right-s-line" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
