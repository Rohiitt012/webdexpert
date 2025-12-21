import Link from "next/link";

export default function Section2C() {
    return (
        <>
            {/*tax-software section 2c - Connect WhatsApp Business Cloud integrations*/}
            <section className="tax-software-section-2c position-relative overflow-hidden py-120" style={{ backgroundColor: "#f5f0ff" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h2 className="text-dark mb-4 fw-bold" style={{ fontSize: "2.5rem", color: "#4a148c" }}>
                                Connect WhatsApp Business Cloud integrations
                            </h2>
                            <p className="text-dark mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
                                Connect WhatsApp Business Cloud with any of your favorite apps in just a few clicks. Design, build, and automate anything for your work by integrating apps like WhatsApp Business Cloud to create visual automated workflows. Choose from thousands of ready-made apps or use our no-code toolkit to connect to apps not yet in our library.
                            </p>
                            <div className="d-flex flex-wrap gap-3 mb-4">
                                <Link href="#" className="btn rounded-pill px-4 py-3 fw-bold" style={{ backgroundColor: "#ff00ff", color: "white", border: "none" }}>
                                    Get started free
                                </Link>
                                <Link href="#" className="btn rounded-pill px-4 py-3 fw-bold" style={{ backgroundColor: "white", color: "#4a148c", border: "2px solid #4a148c" }}>
                                    See Documentation →
                                </Link>
                            </div>
                            <div className="d-flex flex-column gap-2">
                                <div className="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#4a148c"/>
                                    </svg>
                                    <span className="text-dark">No credit card required</span>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#4a148c"/>
                                    </svg>
                                    <span className="text-dark">No time limit on Free plan</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="bg-white rounded-4 p-4 shadow-sm">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <div className="position-relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                            <circle cx="25" cy="25" r="25" fill="#25D366"/>
                                            <path d="M25 12C17.82 12 12 17.82 12 25C12 28.5 13.5 31.6 15.7 33.8L14.5 37.5L18.4 36.4C20.5 38.3 23.1 39.5 25.9 39.5C33.08 39.5 38.9 33.68 38.9 26.5C38.9 19.32 33.08 13.5 25.9 13.5H25V12Z" fill="white"/>
                                            <path d="M25 15C31.63 15 37 20.37 37 27C37 33.63 31.63 39 25 39C22.2 39 19.6 37.8 17.5 35.9L13.6 37L14.8 33.3C12.6 31.1 11 28 11 24.5C11 17.87 16.37 12.5 23 12.5H25V15Z" fill="white"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h5 className="text-dark mb-1 fw-bold">WhatsApp Business Cloud</h5>
                                        <span className="badge rounded-pill px-3 py-1" style={{ backgroundColor: "#e8d5ff", color: "#4a148c" }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" className="me-1">
                                                <path d="M10 3L4.5 8.5L2 6" stroke="#4a148c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            Verified
                                        </span>
                                    </div>
                                </div>
                                <p className="text-dark mb-2" style={{ fontSize: "0.9rem" }}>This app is supported and maintained by</p>
                                <div className="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="30" viewBox="0 0 80 30" fill="none">
                                        <rect x="0" y="10" width="4" height="10" fill="#4a148c"/>
                                        <rect x="6" y="5" width="4" height="15" fill="#4a148c"/>
                                        <rect x="12" y="0" width="4" height="20" fill="#4a148c"/>
                                        <text x="20" y="18" fill="#000" fontSize="14" fontWeight="bold">make</text>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

