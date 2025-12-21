import Link from "next/link";

export default function Section2H() {
    return (
        <>
            {/*tax-software section 2h - Types of Triggers for WhatsApp Automated Messages*/}
            <section className="tax-software-section-2h position-relative overflow-hidden py-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <h2 className="text-dark mb-4 fw-bold" style={{ fontSize: "2.5rem" }}>
                                Types of Triggers for WhatsApp Automated Messages
                            </h2>
                            <div className="mb-5">
                                <h4 className="text-dark mb-3 fw-bold">Inactivity:</h4>
                                <p className="text-dark" style={{ fontSize: "1rem", lineHeight: "1.7" }}>
                                    These triggers activate automated WhatsApp messages based on a client's lack of interaction or engagement over a specified period. They're useful for re-engaging customers who haven't completed an action, like finalizing a purchase or responding to earlier communications.
                                </p>
                            </div>
                            <div className="mb-5">
                                <h4 className="text-dark mb-3 fw-bold">Activity:</h4>
                                <p className="text-dark" style={{ fontSize: "1rem", lineHeight: "1.7" }}>
                                    These triggers are set off by specific actions taken by a customer such as completing a registration or making a purchase. Automated messages set off by activity triggers help in acknowledging and responding to customer actions promptly.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-dark mb-3 fw-bold">Schedule:</h4>
                                <p className="text-dark" style={{ fontSize: "1rem", lineHeight: "1.7" }}>
                                    These triggers set WhatsApp automated messages to go out at specific times, such as reminders for events, renewals, or promotions. They ensure communications are sent exactly when needed, maximizing relevance and impact.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="row g-4">
                                {/* Inactivity Column */}
                                <div className="col-lg-4">
                                    <div className="text-center">
                                        <div className="bg-primary rounded-4 p-4 mb-3 d-inline-block" style={{ backgroundColor: "#1877F2" }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                                <circle cx="25" cy="25" r="20" stroke="white" strokeWidth="2" fill="none"/>
                                                <circle cx="25" cy="25" r="12" stroke="white" strokeWidth="2" fill="none"/>
                                                <path d="M15 15 L35 35 M35 15 L15 35" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                                            </svg>
                                        </div>
                                        <div className="border border-2 border-dashed rounded-3 p-3 mb-3" style={{ borderColor: "#25D366" }}>
                                            <span className="text-dark">pending submission of account requirements</span>
                                        </div>
                                        <div className="text-center mb-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                <path d="M15 5 L15 25 M15 25 L10 20 M15 25 L20 20" stroke="#25D366" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <div className="bg-light rounded-4 p-4" style={{ backgroundColor: "#DCF8C6" }}>
                                            <p className="text-dark mb-0" style={{ fontSize: "0.9rem", textAlign: "left" }}>
                                                A friendly reminder: ⚠️ please submit your proof of billing document so we can continue the processing of your account. Thank you!
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Activity Column */}
                                <div className="col-lg-4">
                                    <div className="text-center">
                                        <div className="bg-primary rounded-4 p-4 mb-3 d-inline-block" style={{ backgroundColor: "#1877F2" }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                                <circle cx="25" cy="20" r="8" stroke="white" strokeWidth="2" fill="none"/>
                                                <path d="M15 30 Q25 40 35 30" stroke="white" strokeWidth="2" fill="none"/>
                                                <circle cx="35" cy="15" r="5" fill="white"/>
                                                <path d="M32 12 L35 15 L38 12" stroke="#1877F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <div className="border border-2 border-dashed rounded-3 p-3 mb-3" style={{ borderColor: "#25D366" }}>
                                            <span className="text-dark">account funding</span>
                                        </div>
                                        <div className="text-center mb-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                <path d="M15 5 L15 25 M15 25 L10 20 M15 25 L20 20" stroke="#25D366" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <div className="bg-light rounded-4 p-4 mb-3" style={{ backgroundColor: "#DCF8C6" }}>
                                            <p className="text-dark mb-0" style={{ fontSize: "0.9rem", textAlign: "left" }}>
                                                Hi, Sam! You've successfully funded your account. You can now start trading! ✅
                                            </p>
                                        </div>
                                        <div className="d-flex flex-column gap-2">
                                            <button className="btn rounded-pill px-3 py-2 text-start" style={{ backgroundColor: "#25D366", color: "white", border: "none", fontSize: "0.85rem" }}>
                                                Access trading guides
                                            </button>
                                            <button className="btn rounded-pill px-3 py-2 text-start" style={{ backgroundColor: "#25D366", color: "white", border: "none", fontSize: "0.85rem" }}>
                                                Explore the trading app
                                            </button>
                                            <button className="btn rounded-pill px-3 py-2 text-start" style={{ backgroundColor: "#25D366", color: "white", border: "none", fontSize: "0.85rem" }}>
                                                Start trading
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Schedule Column */}
                                <div className="col-lg-4">
                                    <div className="text-center">
                                        <div className="bg-primary rounded-4 p-4 mb-3 d-inline-block" style={{ backgroundColor: "#1877F2" }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                                <rect x="10" y="10" width="30" height="30" rx="3" stroke="white" strokeWidth="2" fill="none"/>
                                                <line x1="10" y1="18" x2="40" y2="18" stroke="white" strokeWidth="2"/>
                                                <line x1="18" y1="10" x2="18" y2="40" stroke="white" strokeWidth="2"/>
                                                <circle cx="25" cy="30" r="8" stroke="white" strokeWidth="2" fill="none"/>
                                                <line x1="25" y1="30" x2="25" y2="26" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                                <line x1="25" y1="30" x2="29" y2="30" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                            </svg>
                                        </div>
                                        <div className="border border-2 border-dashed rounded-3 p-3 mb-3" style={{ borderColor: "#25D366" }}>
                                            <span className="text-dark">15 days after last trading activity</span>
                                        </div>
                                        <div className="text-center mb-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                <path d="M15 5 L15 25 M15 25 L10 20 M15 25 L20 20" stroke="#25D366" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <div className="bg-light rounded-4 p-4 mb-3" style={{ backgroundColor: "#DCF8C6" }}>
                                            <p className="text-dark mb-0" style={{ fontSize: "0.9rem", textAlign: "left" }}>
                                                Looking into diversifying your stock portfolio? Explore stock options based on your risk appetite: tradesmarter now.com/investmentoptions Invest in your future today!
                                            </p>
                                        </div>
                                        <div className="d-flex flex-column gap-2">
                                            <button className="btn rounded-pill px-3 py-2 text-start" style={{ backgroundColor: "#25D366", color: "white", border: "none", fontSize: "0.85rem" }}>
                                                Explore investment options
                                            </button>
                                            <button className="btn rounded-pill px-3 py-2 text-start" style={{ backgroundColor: "#25D366", color: "white", border: "none", fontSize: "0.85rem" }}>
                                                Place a trade
                                            </button>
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

