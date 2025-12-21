export default function Section2A() {
    return (
        <>
            {/*marketing-agency-home-section-2A - Meta Ads Services Intro */}
            <section className="marketing-agency-home-section-2a position-relative overflow-hidden py-120">
                <div className="container">
                    <div className="text-center mb-5">
                        <span className="btn-text text-primary mb-2 d-inline-block" style={{ color: '#FF6B35', fontSize: '16px', fontWeight: '500' }}>
                            Paid Media & Performance Marketing Agency
                        </span>
                        <h2 className="text-dark mt-2 mb-80 text-anime-style-2" style={{ fontSize: '48px', lineHeight: '1.3', fontWeight: 'bold' }}>
                            Meta Ads Services
                        </h2>
                    </div>
                    <div className="row align-items-center">
                        {/* Left Column - Logos */}
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="bg-dark rounded-4 p-5 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '300px' }}>
                                <div className="d-flex flex-wrap align-items-center justify-content-center gap-4">
                                    {/* HubSpot Logo */}
                                    <div className="text-center">
                                        <div className="bg-white rounded-3 p-3 mb-2" style={{ width: '120px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <img 
                                                src="/assets/img/marketing-agency-img/pages/marketing-agency/page-home/home-section-2a/hubspot-logo.png" 
                                                alt="HubSpot Partner" 
                                                className="img-fluid"
                                                style={{ maxWidth: '100px' }}
                                            />
                                        </div>
                                        <p className="text-white mb-0 small">HubSpot Partner</p>
                                    </div>
                                    {/* Google Partner Logo */}
                                    <div className="text-center">
                                        <div className="bg-white rounded-3 p-3 mb-2" style={{ width: '120px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <img 
                                                src="/assets/img/marketing-agency-img/pages/marketing-agency/page-home/home-section-2a/google-partner-logo.png" 
                                                alt="Google Partner" 
                                                className="img-fluid"
                                                style={{ maxWidth: '100px' }}
                                            />
                                        </div>
                                        <p className="text-white mb-0 small">Google Partner</p>
                                    </div>
                                    {/* Award Logo */}
                                    <div className="text-center">
                                        <div className="bg-white rounded-3 p-3 mb-2" style={{ width: '120px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <img 
                                                src="/assets/img/marketing-agency-img/pages/marketing-agency/page-home/home-section-2a/award-logo.png" 
                                                alt="Award" 
                                                className="img-fluid"
                                                style={{ maxWidth: '100px' }}
                                            />
                                        </div>
                                        <p className="text-white mb-0 small">Certified</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Right Column - Text */}
                        <div className="col-lg-6">
                            <div className="ps-lg-5">
                                <p className="text-dark mb-0" style={{ fontSize: '18px', lineHeight: '1.8', color: '#666' }}>
                                    Meta's advertising ecosystem, spanning Facebook, Instagram, Messenger, and Audience Network, remains one of the most powerful paid media platforms available. With billions of active users, hyper-specific targeting, and full-funnel ad formats, Meta Ads give brands of all sizes the ability to drive awareness, traffic, leads, and sales.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

