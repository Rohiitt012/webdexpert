export default function Section6A() {
    return (
        <>
            {/*seo-agency home section 6A - SEO Features*/}
            <section className="seo-agency-home-section-6a position-relative overflow-hidden bg-white" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
                <div className="container position-relative z-1">
                    {/* Feature Cards */}
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="feature-card bg-white rounded-3 p-5 border h-100">
                                <div className="icon-wrapper mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 60 60" fill="none">
                                        <path d="M20 35L25 30L20 25L15 30L20 35Z" fill="#000"/>
                                        <path d="M30 35L35 30L30 25L25 30L30 35Z" fill="#000"/>
                                        <path d="M40 35L45 30L40 25L35 30L40 35Z" fill="#000"/>
                                        <rect x={18} y={37} width={4} height={8} fill="#000"/>
                                        <rect x={28} y={37} width={4} height={8} fill="#000"/>
                                        <rect x={38} y={37} width={4} height={8} fill="#000"/>
                                        <rect x={15} y={45} width={30} height={2} fill="#000"/>
                                        <text x={30} y={22} fontSize={10} fill="#000" textAnchor="middle" fontWeight="bold">SEO</text>
                                    </svg>
                                </div>
                                <h5 className="mb-3">Get PENALTY-PROOF SEO</h5>
                                <p className="text-dark mb-0">
                                    Google penalizes websites primarily due to black-hat SEO strategies, thin or low-quality content, or manipulative backlink strategies. Webdexpert Technologies proven SEO services combine white-hat SEO techniques and ethical SEO solutions that ensure your website stays competitive with changing Google updates.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="feature-card bg-white rounded-3 p-5 border h-100">
                                <div className="icon-wrapper mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 60 60" fill="none">
                                        <rect x={15} y={40} width={8} height={10} fill="#000"/>
                                        <rect x={26} y={32} width={8} height={18} fill="#000"/>
                                        <rect x={37} y={22} width={8} height={28} fill="#000"/>
                                        <path d="M18 38L28 28L38 20L45 15" stroke="#000" strokeWidth={2.5} fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                                        <circle cx={45} cy={15} r={2.5} fill="#000"/>
                                        <path d="M42 12L48 12L48 18" stroke="#000" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <h5 className="mb-3">Increase WEBSITE RANKINGS</h5>
                                <p className="text-dark mb-0">
                                    Our proven SEO strategies help your website achieve top rankings on Google and other search engines, driving more organic traffic to your site. We focus on ranking for high-intent keywords that bring real business opportunities, and not just clicks.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="feature-card bg-white rounded-3 p-5 border h-100">
                                <div className="icon-wrapper mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 60 60" fill="none">
                                        <circle cx={30} cy={25} r={12} stroke="#000" strokeWidth={2.5} fill="none"/>
                                        <circle cx={30} cy={25} r={6} stroke="#000" strokeWidth={2} fill="none"/>
                                        <circle cx={30} cy={25} r={2} fill="#000"/>
                                        <rect x={28} y={37} width={4} height={15} fill="#000" rx={2}/>
                                        <ellipse cx={30} cy={52} rx={8} ry={2} fill="#000"/>
                                    </svg>
                                </div>
                                <h5 className="mb-3">Get Strategic AEO & GEO-Based SEO</h5>
                                <p className="text-dark mb-0">
                                    With Google's search interface changing dramatically and AI-generated answers appearing at the top, getting featured in AI-powered answers has become highly important. Through our AEO and GEO-backed SEO services in India, we optimize every section of your website to be ready for an AI overview as well as other AI tools like ChatGPT, Gemini, Perplexity, and more.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="row mt-5">
                        <div className="col-12 text-center">
                            <a href="#contact" className="btn btn-dark btn-lg px-5 py-3 rounded-2" style={{ fontSize: '18px', fontWeight: '500' }}>
                                GET FREE SEO PROPOSAL →
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
