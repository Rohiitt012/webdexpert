import Link from "next/link";

export default function Section3C() {
    return (
        <>
            {/*marketing-agency-home-section-3C - Ready to Launch CTA */}
            <section className="marketing-agency-home-section-3c position-relative overflow-hidden py-120">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Column - Heading */}
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="position-relative">
                                <div className="position-absolute top-0 start-0" style={{ width: '40px', height: '40px', borderTop: '3px solid #FF6B35', borderLeft: '3px solid #FF6B35' }} />
                                <h2 className="text-dark ps-5 pt-3 text-anime-style-2" style={{ fontSize: '48px', lineHeight: '1.2', fontWeight: 'bold' }}>
                                    Ready to Launch or Scale Your Meta Campaign?
                                </h2>
                            </div>
                        </div>

                        {/* Right Column - Text and CTA */}
                        <div className="col-lg-6">
                            <div className="ps-lg-5">
                                <p className="text-dark mb-4" style={{ fontSize: '18px', lineHeight: '1.8', color: '#666' }}>
                                    Let's make your Facebook and Instagram ads work harder. Whether you're running your first campaign or scaling an existing one, we'll help you hit your performance goals faster.
                                </p>
                                <p className="mb-4" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                                    <Link href="/contact" className="text-decoration-none fw-bold" style={{ color: '#FF6B35', fontSize: '18px' }}>
                                        Contact us today
                                    </Link>
                                    <span className="text-dark text-opacity-75"> to book your Meta Ads strategy session.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

