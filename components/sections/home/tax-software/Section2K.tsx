import Link from "next/link";

export default function Section2K() {
    return (
        <>
            {/*tax-software section 2k - WhatsApp Sales Automation*/}
            <section className="tax-software-section-2k position-relative overflow-hidden py-120" style={{ backgroundColor: "white" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="position-relative" style={{ minHeight: "500px" }}>
                                {/* Customer Journey Diagram */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="500" viewBox="0 0 600 500" fill="none">
                                    {/* Diagonal Arrow */}
                                    <path d="M50 450 L550 50" stroke="#1877F2" strokeWidth="4" strokeLinecap="round"/>
                                    
                                    {/* Stage 1: ACCOUNT ACTIVATION */}
                                    <ellipse cx="100" cy="400" rx="80" ry="30" fill="#1877F2"/>
                                    <text x="100" y="405" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">ACCOUNT ACTIVATION</text>
                                    <circle cx="150" cy="380" r="20" fill="#25D366"/>
                                    <path d="M150 380 L150 360" stroke="#25D366" strokeWidth="2" strokeDasharray="5,5"/>
                                    <rect x="120" y="320" width="120" height="40" rx="5" fill="#DCF8C6"/>
                                    <text x="180" y="340" textAnchor="middle" fill="#000" fontSize="10" fontWeight="bold">Encourage application completion</text>
                                    <text x="180" y="355" textAnchor="middle" fill="#000" fontSize="9">REMIND pending requirements</text>
                                    
                                    {/* Stage 2: ACCOUNT FUNDING */}
                                    <ellipse cx="250" cy="300" rx="80" ry="30" fill="#1877F2"/>
                                    <text x="250" y="305" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">ACCOUNT FUNDING</text>
                                    <circle cx="300" cy="280" r="20" fill="#25D366"/>
                                    <path d="M300 280 L300 260" stroke="#25D366" strokeWidth="2" strokeDasharray="5,5"/>
                                    <rect x="220" y="220" width="120" height="40" rx="5" fill="#DCF8C6"/>
                                    <text x="280" y="240" textAnchor="middle" fill="#000" fontSize="10" fontWeight="bold">Encourage account funding</text>
                                    <text x="280" y="255" textAnchor="middle" fill="#000" fontSize="9">NOTIFY account active</text>
                                    
                                    {/* Stage 3: FIRST TRADE */}
                                    <ellipse cx="400" cy="200" rx="80" ry="30" fill="#1877F2"/>
                                    <text x="400" y="205" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">FIRST TRADE</text>
                                    <circle cx="450" cy="180" r="20" fill="#25D366"/>
                                    <path d="M450 180 L450 160" stroke="#25D366" strokeWidth="2" strokeDasharray="5,5"/>
                                    <rect x="370" y="120" width="120" height="40" rx="5" fill="#DCF8C6"/>
                                    <text x="430" y="140" textAnchor="middle" fill="#000" fontSize="10" fontWeight="bold">Encourage trading activity</text>
                                    <text x="430" y="155" textAnchor="middle" fill="#000" fontSize="9">GUIDE helpful trading content</text>
                                    
                                    {/* Stage 4: SUSTAINED TRADING */}
                                    <ellipse cx="550" cy="100" rx="80" ry="30" fill="#1877F2"/>
                                    <text x="550" y="105" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">SUSTAINED TRADING</text>
                                    <circle cx="500" cy="80" r="20" fill="#25D366"/>
                                    <path d="M500 80 L500 60" stroke="#25D366" strokeWidth="2" strokeDasharray="5,5"/>
                                    <rect x="420" y="20" width="120" height="40" rx="5" fill="#DCF8C6"/>
                                    <text x="480" y="40" textAnchor="middle" fill="#000" fontSize="10" fontWeight="bold">Re-engage dormant accounts</text>
                                    <text x="480" y="55" textAnchor="middle" fill="#000" fontSize="9">GUIDE market news and insights</text>
                                    
                                    {/* WhatsApp notification badges */}
                                    <circle cx="150" cy="380" r="8" fill="#FF0000"/>
                                    <text x="150" y="385" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">1</text>
                                    <circle cx="300" cy="280" r="8" fill="#FF0000"/>
                                    <text x="300" y="285" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">1</text>
                                    <circle cx="450" cy="180" r="8" fill="#FF0000"/>
                                    <text x="450" y="185" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">1</text>
                                    <circle cx="500" cy="80" r="8" fill="#FF0000"/>
                                    <text x="500" y="85" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">1</text>
                                </svg>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3 className="text-dark mb-4 fw-bold" style={{ fontSize: "2rem" }}>
                                WhatsApp Sales Automation: Faster Conversions
                            </h3>
                            <p className="text-dark mb-4" style={{ fontSize: "1rem", lineHeight: "1.7" }}>
                                WhatsApp Automation streamlines critical communications throughout the customer journey, from initial interest to final purchase. Automating WhatsApp messages ensures timely follow-ups that can increase conversion rates and helps maintain a steady flow of communication with potential customers, making the sales process more efficient and effective.
                            </p>
                            <div>
                                <h5 className="text-dark mb-3 fw-bold">Use Cases:</h5>
                                <div className="d-flex flex-column gap-3">
                                    <div className="d-flex align-items-start gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-1">
                                            <circle cx="12" cy="12" r="10" fill="#1877F2" opacity="0.2"/>
                                            <path d="M9 12L11 14L15 10" stroke="#1877F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <div>
                                            <p className="text-dark mb-1 fw-bold">Instant Lead Response</p>
                                            <p className="text-dark text-opacity-75 mb-0" style={{ fontSize: "0.95rem" }}>
                                                Respond to new leads instantly with relevant information.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-1">
                                            <circle cx="12" cy="12" r="10" fill="#1877F2" opacity="0.2"/>
                                            <path d="M9 12L11 14L15 10" stroke="#1877F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <div>
                                            <p className="text-dark mb-1 fw-bold">Follow-up Sequences</p>
                                            <p className="text-dark text-opacity-75 mb-0" style={{ fontSize: "0.95rem" }}>
                                                Deploy follow-up automated WhatsApp messages to keep the conversation going and the sales process moving.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-1">
                                            <circle cx="12" cy="12" r="10" fill="#1877F2" opacity="0.2"/>
                                            <path d="M9 12L11 14L15 10" stroke="#1877F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <div>
                                            <p className="text-dark mb-1 fw-bold">Tailored Insights</p>
                                            <p className="text-dark text-opacity-75 mb-0" style={{ fontSize: "0.95rem" }}>
                                                Share personalized tips, recommendations, or market insights based on past customer behavior.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

