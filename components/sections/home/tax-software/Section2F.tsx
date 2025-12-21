import Link from "next/link";

export default function Section2F() {
    return (
        <>
            {/*tax-software section 2f - Connect any app with WhatsApp Business Cloud*/}
            <section className="tax-software-section-2f position-relative overflow-hidden py-120">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="text-dark mb-4 fw-bold" style={{ fontSize: "2.5rem", color: "#4a148c" }}>
                            Connect any app with WhatsApp Business Cloud
                        </h2>
                        <div className="d-flex justify-content-center mb-5">
                            <div className="position-relative" style={{ maxWidth: "400px", width: "100%" }}>
                                <input type="text" className="form-control rounded-pill px-4 py-3" placeholder="Search by App" style={{ border: "2px solid #f5f0ff" }} />
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="position-absolute" style={{ right: "15px", top: "50%", transform: "translateY(-50%)" }}>
                                    <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="#ff00ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M19 19L14.65 14.65" stroke="#ff00ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center gap-4 mb-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                <circle cx="30" cy="30" r="30" fill="#25D366"/>
                                <path d="M30 15C22.27 15 16 21.27 16 29C16 33.6 18.4 37.68 22 40.2L20 45L25 43C27.6 44.2 30.6 45 33.8 45C41.53 45 47.8 38.73 47.8 31C47.8 23.27 41.53 17 33.8 17H30V15Z" fill="white"/>
                            </svg>
                            <div className="d-flex gap-2">
                                <div className="rounded-circle" style={{ width: "40px", height: "40px", backgroundColor: "#f5f0ff", border: "2px dashed #ff00ff" }}></div>
                                <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px", backgroundColor: "#f5f0ff", border: "2px solid #ff00ff" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <path d="M15 5V25M5 15H25" stroke="#ff00ff" strokeWidth="3" strokeLinecap="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4">
                        {/* App Icons Grid */}
                        {[
                            { name: "Google Sheets", color: "#0F9D58" },
                            { name: "OpenAI (ChatGPT,...)", color: "#10A37F" },
                            { name: "Gmail", color: "#EA4335" },
                            { name: "Google Drive", color: "#FFC107" },
                            { name: "Telegram Bot", color: "#0088cc" },
                            { name: "Airtable", color: "#18BFFF" },
                            { name: "Pinterest", color: "#BD081C" },
                            { name: "Notion", color: "#000000" },
                            { name: "Google Docs", color: "#4285F4" },
                            { name: "Slack", color: "#4A154B" },
                            { name: "Google Gemini AI", color: "#4285F4" },
                            { name: "Google Calendar", color: "#4285F4" },
                            { name: "Facebook Lead Ads", color: "#1877F2" },
                            { name: "Facebook Pages", color: "#1877F2" },
                            { name: "Make AI Toolkit", color: "#703FFA" },
                            { name: "Microsoft 365 Email", color: "#0078D4" },
                            { name: "Instagram for Business", color: "#E4405F" },
                            { name: "monday.com", color: "#FF0052" },
                            { name: "WordPress", color: "#21759B" },
                            { name: "HubSpot CRM", color: "#FF7A59" },
                            { name: "Google Forms", color: "#673AB7" },
                            { name: "Dropbox", color: "#0061FF" },
                            { name: "Tally", color: "#000000" },
                            { name: "Make AI Agents", color: "#703FFA" },
                            { name: "ClickUp", color: "#7B68EE" },
                            { name: "LinkedIn", color: "#0077B5" },
                            { name: "Shopify", color: "#96BF48" }
                        ].map((app, index) => (
                            <div key={index} className="col-lg-2 col-md-3 col-4 text-center">
                                <div className="d-flex flex-column align-items-center">
                                    <div className="rounded-circle d-flex align-items-center justify-content-center mb-2" style={{ width: "60px", height: "60px", backgroundColor: app.color }}>
                                        <span className="text-white fw-bold" style={{ fontSize: "0.7rem" }}>{app.name.substring(0, 2)}</span>
                                    </div>
                                    <span className="text-dark" style={{ fontSize: "0.85rem" }}>{app.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-5">
                        <button className="btn rounded-pill px-5 py-2" style={{ backgroundColor: "white", color: "#ff00ff", border: "2px solid #ff00ff" }}>
                            Load More
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

