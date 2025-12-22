import Link from "next/link";

export default function Section3C() {
    return (
        <>
            {/*data-analysis section 3c - Responsible AI*/}
            <section className="data-analysis-home-section-3c position-relative overflow-hidden py-80 bg-white">
                <div className="container position-relative z-1">
                    <div className="row mb-50">
                        <div className="col-12 text-center">
                            <h2 className="text-dark text-anime-style-2 mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a1a' }}>
                                How we put responsible AI into action.
                            </h2>
                            <p className="mb-4 mx-auto" style={{ fontSize: '18px', lineHeight: '1.75', color: '#4a4a4a', maxWidth: '800px' }}>
                                Our principles give us a solid foundation for our approach. But we don't stop there—we bring them to every step of development. Learn more about our practices.
                            </p>
                            <button className="btn px-5 py-3 mt-3" style={{ fontSize: '16px', fontWeight: '600', backgroundColor: 'transparent', color: '#1a1a1a', border: '2px solid #1a1a1a', borderRadius: '6px', cursor: 'pointer' }}>
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="row g-4 mt-5">
                        {/* Built responsibly by design */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={0}>
                            <div className="h-100">
                                <h5 className="mb-3" style={{ fontSize: '22px', fontWeight: '700', color: '#1a1a1a' }}>
                                    Built responsibly by design.
                                </h5>
                                <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.6', color: '#4a4a4a' }}>
                                    We make safety and security part of everything we do, from assessment to deployment. We never share customer data to train third-party public models.
                                </p>
                            </div>
                        </div>

                        {/* People first, always */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100}>
                            <div className="h-100">
                                <h5 className="mb-3" style={{ fontSize: '22px', fontWeight: '700', color: '#1a1a1a' }}>
                                    People first, always.
                                </h5>
                                <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.6', color: '#4a4a4a' }}>
                                    We put humans at the center of our solutions. And we design for people of diverse ages, technical expertise, domain knowledge accessibility, and spoken languages.
                                </p>
                            </div>
                        </div>

                        {/* Crystal-clear explainability */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                            <div className="h-100">
                                <h5 className="mb-3" style={{ fontSize: '22px', fontWeight: '700', color: '#1a1a1a' }}>
                                    Crystal-clear explainability.
                                </h5>
                                <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.6', color: '#4a4a4a' }}>
                                    We make it easy to understand how we build, train, and test our AI solutions. You don't have to wonder where your AI results came from—it's explained right within the interface.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

