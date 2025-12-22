import Link from "next/link";

export default function Section2B() {
    return (
        <>
            {/*marketing-agency-home-section-2B - Meta Ads CTA Section */}
            <section className="marketing-agency-home-section-2b position-relative overflow-hidden py-120" style={{ backgroundColor: '#fff' }}>
                <div className="container position-relative">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <h2 className="text-dark mb-3 text-anime-style-2" style={{ fontSize: '42px', lineHeight: '1.2', fontWeight: 'bold' }}>
                                Meta Ads for Paid Media & Performance Marketing
                            </h2>
                            <h3 className="mb-4" style={{ fontSize: '24px', lineHeight: '1.4', fontWeight: '500', color: '#FF6B35' }}>
                                Reach Your Ideal Customers on Facebook and Instagram, Profitably.
                            </h3>
                            <p className="text-dark mb-5" style={{ fontSize: '18px', lineHeight: '1.8', color: '#666' }}>
                                At Xzect Labs, we run performance-driven Meta ad campaigns built to maximize ROAS and scale customer acquisition. Whether you're launching new product or trying to grow an evergreen lead generation funnel, we help you win attention and conversions in a highly competitive feed.
                            </p>
                            <div className="d-flex flex-wrap gap-3">
                                <Link href="/services" className="btn btn-lg px-5 py-3 rounded-pill text-white fw-semibold hover-up" style={{ backgroundColor: '#FF6B35', fontSize: '16px' }}>
                                    Learn More →
                                </Link>
                                <Link href="/contact" className="btn btn-lg px-5 py-3 rounded-pill text-white fw-semibold hover-up" style={{ backgroundColor: '#0D6EFD', fontSize: '16px' }}>
                                    Sign Up Today →
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Orange vertical strip on right edge */}
                    <div className="position-absolute top-0 end-0 h-100" style={{ width: '4px', backgroundColor: '#FF6B35' }} />
                </div>
            </section>
        </>
    );
}

