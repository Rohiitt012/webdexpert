import Link from "next/link";

export default function Section2D() {
    return (
        <>
            {/*tax-software section 2d - Build WhatsApp Business Cloud integrations*/}
            <section className="tax-software-section-2d position-relative overflow-hidden py-120">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="text-dark mb-3 fw-bold" style={{ fontSize: "2.5rem", color: "#4a148c" }}>
                            Build your WhatsApp Business Cloud integrations.
                        </h2>
                        <p className="text-dark mx-auto" style={{ maxWidth: "800px", fontSize: "1.1rem", color: "#4a148c" }}>
                            Create custom WhatsApp Business Cloud workflows by choosing triggers, actions, and searches. A trigger is an event that launches the workflow, an action is the event.
                        </p>
                    </div>
                    <div className="d-flex justify-content-center gap-3 mb-5 flex-wrap">
                        <button className="btn rounded-pill px-4 py-2 fw-bold" style={{ backgroundColor: "#ff00ff", color: "white", border: "none" }}>
                            All Modules (11)
                        </button>
                        <button className="btn rounded-pill px-4 py-2 fw-bold" style={{ backgroundColor: "white", color: "#ff00ff", border: "2px solid #ff00ff" }}>
                            Triggers (1)
                        </button>
                        <button className="btn rounded-pill px-4 py-2 fw-bold" style={{ backgroundColor: "white", color: "#ff00ff", border: "2px solid #ff00ff" }}>
                            Actions (10)
                        </button>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4">
                            <div className="bg-light rounded-4 p-4 h-100">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <circle cx="20" cy="20" r="20" fill="#25D366"/>
                                        <path d="M20 10C14.48 10 10 14.48 10 20C10 22.8 11.2 25.28 13.12 27.04L11.6 30L15.52 29.12C17.2 30.64 19.28 31.6 21.52 31.6C27.04 31.6 31.52 27.12 31.52 21.6C31.52 16.08 27.04 11.6 21.52 11.6H20V10Z" fill="white"/>
                                    </svg>
                                    <div>
                                        <h5 className="text-dark mb-1 fw-bold">Deregister a Sender</h5>
                                        <p className="text-dark text-opacity-75 mb-0" style={{ fontSize: "0.9rem" }}>Deregisters a sender by its ID.</p>
                                    </div>
                                </div>
                                <span className="badge" style={{ backgroundColor: "#ff00ff", color: "white" }}>
                                    ⚡ Action
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-light rounded-4 p-4 h-100">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <circle cx="20" cy="20" r="20" fill="#25D366"/>
                                        <path d="M20 10C14.48 10 10 14.48 10 20C10 22.8 11.2 25.28 13.12 27.04L11.6 30L15.52 29.12C17.2 30.64 19.28 31.6 21.52 31.6C27.04 31.6 31.52 27.12 31.52 21.6C31.52 16.08 27.04 11.6 21.52 11.6H20V10Z" fill="white"/>
                                    </svg>
                                    <div>
                                        <h5 className="text-dark mb-1 fw-bold">Download a Media</h5>
                                        <p className="text-dark text-opacity-75 mb-0" style={{ fontSize: "0.9rem" }}>Downloads a media by its ID.</p>
                                    </div>
                                </div>
                                <span className="badge" style={{ backgroundColor: "#ff00ff", color: "white" }}>
                                    ⚡ Action
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-light rounded-4 p-4 h-100">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <circle cx="20" cy="20" r="20" fill="#25D366"/>
                                        <path d="M20 10C14.48 10 10 14.48 10 20C10 22.8 11.2 25.28 13.12 27.04L11.6 30L15.52 29.12C17.2 30.64 19.28 31.6 21.52 31.6C27.04 31.6 31.52 27.12 31.52 21.6C31.52 16.08 27.04 11.6 21.52 11.6H20V10Z" fill="white"/>
                                    </svg>
                                    <div>
                                        <h5 className="text-dark mb-1 fw-bold">Enable Two-Step Verification</h5>
                                        <p className="text-dark text-opacity-75 mb-0" style={{ fontSize: "0.9rem" }}>Activates the two-step verification for a sender number by its ID and a 6 digits pin.</p>
                                    </div>
                                </div>
                                <span className="badge" style={{ backgroundColor: "#ff00ff", color: "white" }}>
                                    ⚡ Action
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

