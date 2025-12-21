import Link from "next/link";

export default function Section2C() {
    return (
        <>
            {/*marketing-agency-home-section-2C - Why Meta Ads Work */}
            <section className="marketing-agency-home-section-2c position-relative overflow-hidden py-120" style={{ backgroundColor: '#1a1a2e' }}>
                <div className="container position-relative z-1">
                    {/* Header Section */}
                    <div className="row align-items-center mb-80">
                        <div className="col-lg-8">
                            <h2 className="text-white mb-4 text-anime-style-2" style={{ fontSize: '48px', lineHeight: '1.3', fontWeight: 'bold' }}>
                                Why Meta Ads Work
                            </h2>
                            <p className="text-white mb-0" style={{ fontSize: '18px', lineHeight: '1.8', opacity: '0.9' }}>
                                Facebook and Instagram have become central to consumer behavior. People scroll, click, discover, and purchase—all within the Meta ecosystem. With first-party data and behavior-driven targeting, Meta Ads offer a unique ability to meet your audience where they spend their time.
                            </p>
                        </div>
                        <div className="col-lg-4 text-lg-end text-start mt-4 mt-lg-0">
                            <Link href="/contact" className="btn btn-lg px-5 py-3 rounded-pill text-white fw-semibold hover-up" style={{ backgroundColor: '#FF6B35', fontSize: '16px' }}>
                                Book a Demo →
                            </Link>
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className="text-center mb-5">
                        <h3 className="text-white mb-0" style={{ fontSize: '32px', fontWeight: 'bold' }}>
                            What Makes Meta Ads So Effective?
                        </h3>
                    </div>

                    {/* Feature Cards Grid */}
                    <div className="row g-4 mt-4">
                        {/* Card 1: Massive Reach */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={0}>
                            <div className="h-100 p-4 rounded-4" style={{ backgroundColor: '#2a2a3e' }}>
                                <h4 className="mb-3" style={{ color: '#FF6B35', fontSize: '22px', fontWeight: 'bold', borderBottom: '2px solid white', paddingBottom: '10px', display: 'inline-block' }}>
                                    Massive Reach
                                </h4>
                                <p className="text-white mb-0" style={{ fontSize: '16px', lineHeight: '1.8', opacity: '0.9' }}>
                                    3.96 billion users across Meta platforms.
                                </p>
                            </div>
                        </div>

                        {/* Card 2: Advanced Targeting */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                            <div className="h-100 p-4 rounded-4" style={{ backgroundColor: '#2a2a3e' }}>
                                <h4 className="mb-3" style={{ color: '#FF6B35', fontSize: '22px', fontWeight: 'bold', borderBottom: '2px solid white', paddingBottom: '10px', display: 'inline-block' }}>
                                    Advanced Targeting
                                </h4>
                                <p className="text-white mb-0" style={{ fontSize: '16px', lineHeight: '1.8', opacity: '0.9' }}>
                                    Interests, behaviors, lookalikes, custom audiences, retargeting, and more.
                                </p>
                            </div>
                        </div>

                        {/* Card 3: Visual-First Ad Formats */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={400}>
                            <div className="h-100 p-4 rounded-4" style={{ backgroundColor: '#2a2a3e' }}>
                                <h4 className="mb-3" style={{ color: '#FF6B35', fontSize: '22px', fontWeight: 'bold', borderBottom: '2px solid white', paddingBottom: '10px', display: 'inline-block' }}>
                                    Visual-First Ad Formats
                                </h4>
                                <p className="text-white mb-0" style={{ fontSize: '16px', lineHeight: '1.8', opacity: '0.9' }}>
                                    Video, image, carousel, stories, and reels all built for engagement.
                                </p>
                            </div>
                        </div>

                        {/* Card 4: Full Funnel Performance */}
                        <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay={0}>
                            <div className="h-100 p-4 rounded-4" style={{ backgroundColor: '#2a2a3e' }}>
                                <h4 className="mb-3" style={{ color: '#FF6B35', fontSize: '22px', fontWeight: 'bold', borderBottom: '2px solid white', paddingBottom: '10px', display: 'inline-block' }}>
                                    Full Funnel Performance
                                </h4>
                                <p className="text-white mb-0" style={{ fontSize: '16px', lineHeight: '1.8', opacity: '0.9' }}>
                                    Brand awareness, traffic, leads, sales—Meta supports it all.
                                </p>
                            </div>
                        </div>

                        {/* Card 5: AI Optimization */}
                        <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                            <div className="h-100 p-4 rounded-4" style={{ backgroundColor: '#2a2a3e' }}>
                                <h4 className="mb-3" style={{ color: '#FF6B35', fontSize: '22px', fontWeight: 'bold', borderBottom: '2px solid white', paddingBottom: '10px', display: 'inline-block' }}>
                                    AI Optimization
                                </h4>
                                <p className="text-white mb-0" style={{ fontSize: '16px', lineHeight: '1.8', opacity: '0.9' }}>
                                    Meta's ad delivery system uses machine learning to optimize in real time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

