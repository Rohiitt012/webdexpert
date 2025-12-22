import Link from "next/link";

export default function Section3B() {
    return (
        <>
            {/*data-analysis section 3b - Our Principles*/}
            <section className="data-analysis-home-section-3b position-relative overflow-hidden py-80 bg-white">
                <div className="container position-relative z-1">
                    <div className="row mb-50">
                        <div className="col-12">
                            <div className="d-flex align-items-center mb-3">
                                <span className="btn-text text-primary me-3">PRINCIPLES</span>
                                <span className="small-line" style={{ width: '60px', height: '2px', backgroundColor: '#FF8C42', display: 'block' }}></span>
                            </div>
                            <h2 className="text-dark text-anime-style-2" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a1a' }}>
                                Our principles are our north star.
                            </h2>
                        </div>
                    </div>
                    <div className="row g-4">
                        {/* Amplify human potential */}
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={0}>
                            <div className="h-100 bg-white border rounded-4 shadow-sm p-4">
                                <div className="mb-4" style={{ borderRadius: '8px', overflow: 'hidden' }}>
                                    <img 
                                        src="/assets/img/data-analysis-img/pages/data-analysis/page-home/home-section-2/img-card.png" 
                                        alt="Amplify human potential" 
                                        className="w-100"
                                        style={{ height: '250px', objectFit: 'cover' }}
                                    />
                                </div>
                                <h5 className="mb-3" style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a' }}>
                                    Amplify human potential.
                                </h5>
                                <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.6', color: '#4a4a4a' }}>
                                    We design AI to help people unlock opportunities, delegate monotonous tasks, and focus on meaningful work that's uniquely human.
                                </p>
                            </div>
                        </div>

                        {/* Positively impact society */}
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={100}>
                            <div className="h-100 bg-white border rounded-4 shadow-sm p-4">
                                <div className="mb-4" style={{ borderRadius: '8px', overflow: 'hidden' }}>
                                    <img 
                                        src="/assets/img/data-analysis-img/pages/data-analysis/page-home/home-section-2/img-card.png" 
                                        alt="Positively impact society" 
                                        className="w-100"
                                        style={{ height: '250px', objectFit: 'cover' }}
                                    />
                                </div>
                                <h5 className="mb-3" style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a' }}>
                                    Positively impact society.
                                </h5>
                                <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.6', color: '#4a4a4a' }}>
                                    We deliver AI to tackle real-world challenges and drive positive outcomes for our customers, their employees, and our communities.
                                </p>
                            </div>
                        </div>

                        {/* Promote fairness and transparency */}
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                            <div className="h-100 bg-white border rounded-4 shadow-sm p-4">
                                <div className="mb-4" style={{ borderRadius: '8px', overflow: 'hidden' }}>
                                    <img 
                                        src="/assets/img/data-analysis-img/pages/data-analysis/page-home/home-section-2/img-card.png" 
                                        alt="Promote fairness and transparency" 
                                        className="w-100"
                                        style={{ height: '250px', objectFit: 'cover' }}
                                    />
                                </div>
                                <h5 className="mb-3" style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a' }}>
                                    Promote fairness and transparency.
                                </h5>
                                <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.6', color: '#4a4a4a' }}>
                                    Our risk-based review process evaluates whether our AI is susceptible to unintended consequences and how to manage them effectively.
                                </p>
                            </div>
                        </div>

                        {/* Deliver on privacy commitments */}
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={300}>
                            <div className="h-100 bg-white border rounded-4 shadow-sm p-4">
                                <div className="mb-4" style={{ borderRadius: '8px', overflow: 'hidden' }}>
                                    <img 
                                        src="/assets/img/data-analysis-img/pages/data-analysis/page-home/home-section-2/img-card.png" 
                                        alt="Deliver on privacy commitments" 
                                        className="w-100"
                                        style={{ height: '250px', objectFit: 'cover' }}
                                    />
                                </div>
                                <h5 className="mb-3" style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a' }}>
                                    Deliver on privacy commitments.
                                </h5>
                                <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.6', color: '#4a4a4a' }}>
                                    We're committed to protecting user data, and we give customers transparency and control over where and how their data is used.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

