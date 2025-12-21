import Link from "next/link";

export default function Section2M() {
    return (
        <>
            {/*tax-software section 2m - Types of Automated Messages*/}
            <section className="tax-software-section-2m position-relative overflow-hidden py-120 bg-light-2">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="text-dark mb-4 fw-bold" style={{ fontSize: "2.5rem" }}>
                            Types of Automated Messages
                        </h2>
                        <p className="text-dark text-opacity-75 mx-auto" style={{ maxWidth: "900px", fontSize: "1.1rem", lineHeight: "1.7" }}>
                            Utilize Transactional Messages for real-time updates, Behavioral Messages to boost engagement, Scheduled Messages for timely reminders, Lifecycle Messages for customer journey support, and Notification Messages to keep customers informed.
                        </p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4">
                            <div className="bg-white rounded-4 p-5 h-100 shadow-sm">
                                <div className="rounded-circle d-flex align-items-center justify-content-center mb-4 mx-auto" style={{ width: "80px", height: "80px", backgroundColor: "#E3F2FD" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                        <rect x="10" y="5" width="30" height="40" rx="3" stroke="#1877F2" strokeWidth="2" fill="none"/>
                                        <circle cx="25" cy="20" r="3" fill="#1877F2"/>
                                        <path d="M15 30 L25 35 L35 30" stroke="#1877F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <h4 className="text-dark mb-3 fw-bold">Transactional Messages</h4>
                                <p className="text-dark text-opacity-75 mb-0" style={{ fontSize: "1rem", lineHeight: "1.7" }}>
                                    These automated messages are triggered by specific actions taken by users, such as purchases, account changes, or bookings. They provide necessary information related to a transaction or account activity, ensuring customers are updated in real-time.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-white rounded-4 p-5 h-100 shadow-sm">
                                <div className="rounded-circle d-flex align-items-center justify-content-center mb-4 mx-auto" style={{ width: "80px", height: "80px", backgroundColor: "#E3F2FD" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                        <circle cx="20" cy="20" r="12" stroke="#1877F2" strokeWidth="2" fill="none"/>
                                        <path d="M30 15 Q35 20 30 25" stroke="#1877F2" strokeWidth="2" fill="none"/>
                                        <ellipse cx="35" cy="30" rx="8" ry="6" stroke="#1877F2" strokeWidth="2" fill="none"/>
                                    </svg>
                                </div>
                                <h4 className="text-dark mb-3 fw-bold">Behavioral Messages</h4>
                                <p className="text-dark text-opacity-75 mb-0" style={{ fontSize: "1rem", lineHeight: "1.7" }}>
                                    Triggered by specific behaviors or interactions users have with your service or website, such as visiting a particular page or abandoning a cart. These automated messages are tailored to the actions of the user to increase engagement and push towards conversion.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-white rounded-4 p-5 h-100 shadow-sm">
                                <div className="rounded-circle d-flex align-items-center justify-content-center mb-4 mx-auto" style={{ width: "80px", height: "80px", backgroundColor: "#E3F2FD" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                        <rect x="10" y="10" width="30" height="30" rx="3" stroke="#1877F2" strokeWidth="2" fill="none"/>
                                        <line x1="10" y1="18" x2="40" y2="18" stroke="#1877F2" strokeWidth="2"/>
                                        <line x1="18" y1="10" x2="18" y2="40" stroke="#1877F2" strokeWidth="2"/>
                                        <circle cx="30" cy="30" r="8" stroke="#1877F2" strokeWidth="2" fill="none"/>
                                        <line x1="30" y1="30" x2="30" y2="26" stroke="#1877F2" strokeWidth="2" strokeLinecap="round"/>
                                        <line x1="30" y1="30" x2="34" y2="30" stroke="#1877F2" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                </div>
                                <h4 className="text-dark mb-3 fw-bold">Scheduled Messages</h4>
                                <p className="text-dark text-opacity-75 mb-0" style={{ fontSize: "1rem", lineHeight: "1.7" }}>
                                    Scheduled automated messages that are sent at specific times or intervals, such as appointment reminders, subscription renewals, or seasonal greetings. They help maintain regular contact and keep your brand top of mind.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="bg-white rounded-4 p-5 h-100 shadow-sm">
                                <div className="rounded-circle d-flex align-items-center justify-content-center mb-4" style={{ width: "80px", height: "80px", backgroundColor: "#E3F2FD" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                        <rect x="15" y="10" width="20" height="5" rx="2" fill="#1877F2"/>
                                        <rect x="15" y="20" width="20" height="5" rx="2" fill="#1877F2"/>
                                        <rect x="15" y="30" width="20" height="5" rx="2" fill="#1877F2"/>
                                        <circle cx="25" cy="42" r="5" fill="#1877F2"/>
                                        <path d="M20 37 L25 42 L30 37" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <h4 className="text-dark mb-3 fw-bold">Lifecycle Messages</h4>
                                <p className="text-dark text-opacity-75 mb-0" style={{ fontSize: "1rem", lineHeight: "1.7" }}>
                                    Designed to engage customers at different stages of their relationship with your company. These might include onboarding messages for new users, re-engagement messages for inactive ones, or loyalty messages for long-term customers.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="bg-white rounded-4 p-5 h-100 shadow-sm">
                                <div className="rounded-circle d-flex align-items-center justify-content-center mb-4" style={{ width: "80px", height: "80px", backgroundColor: "#E3F2FD" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                        <ellipse cx="25" cy="20" rx="15" ry="12" stroke="#1877F2" strokeWidth="2" fill="none"/>
                                        <path d="M15 30 Q25 35 35 30" stroke="#1877F2" strokeWidth="2" fill="none"/>
                                        <path d="M20 15 L25 20 L30 15" stroke="#1877F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <circle cx="25" cy="20" r="3" fill="#1877F2"/>
                                    </svg>
                                </div>
                                <h4 className="text-dark mb-3 fw-bold">Notification Messages</h4>
                                <p className="text-dark text-opacity-75 mb-0" style={{ fontSize: "1rem", lineHeight: "1.7" }}>
                                    These include alerts and updates about products, services, or accounts, which are essential for keeping the user informed about relevant changes or actions needed.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

