import Link from "next/link";

export default function Section2E() {
    return (
        <>
            {/*tax-software section 2e - More Action Cards*/}
            <section className="tax-software-section-2e position-relative overflow-hidden py-120" style={{ backgroundColor: "white" }}>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-4">
                            <div className="bg-white rounded-4 p-4 h-100 border">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <circle cx="20" cy="20" r="20" fill="#25D366"/>
                                        <path d="M20 10C14.48 10 10 14.48 10 20C10 22.8 11.2 25.28 13.12 27.04L11.6 30L15.52 29.12C17.2 30.64 19.28 31.6 21.52 31.6C27.04 31.6 31.52 27.12 31.52 21.6C31.52 16.08 27.04 11.6 21.52 11.6H20V10Z" fill="white"/>
                                    </svg>
                                    <div>
                                        <h5 className="text-dark mb-1 fw-bold">Get a Business Profile</h5>
                                        <p className="text-dark text-opacity-75 mb-0" style={{ fontSize: "0.9rem" }}>Retrieves the details of the WhatsApp business profile by the sender ID.</p>
                                    </div>
                                </div>
                                <span className="badge" style={{ backgroundColor: "#ff00ff", color: "white" }}>
                                    ⚡ Action
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-white rounded-4 p-4 h-100 border">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <circle cx="20" cy="20" r="20" fill="#25D366"/>
                                        <path d="M20 10C14.48 10 10 14.48 10 20C10 22.8 11.2 25.28 13.12 27.04L11.6 30L15.52 29.12C17.2 30.64 19.28 31.6 21.52 31.6C27.04 31.6 31.52 27.12 31.52 21.6C31.52 16.08 27.04 11.6 21.52 11.6H20V10Z" fill="white"/>
                                    </svg>
                                    <div>
                                        <h5 className="text-dark mb-1 fw-bold">Register a Sender</h5>
                                        <p className="text-dark text-opacity-75 mb-0" style={{ fontSize: "0.9rem" }}>Registers a sender by its ID and a 6 digits pin.</p>
                                    </div>
                                </div>
                                <span className="badge" style={{ backgroundColor: "#ff00ff", color: "white" }}>
                                    ⚡ Action
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-white rounded-4 p-4 h-100 border">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <circle cx="20" cy="20" r="20" fill="#25D366"/>
                                        <path d="M20 10C14.48 10 10 14.48 10 20C10 22.8 11.2 25.28 13.12 27.04L11.6 30L15.52 29.12C17.2 30.64 19.28 31.6 21.52 31.6C27.04 31.6 31.52 27.12 31.52 21.6C31.52 16.08 27.04 11.6 21.52 11.6H20V10Z" fill="white"/>
                                    </svg>
                                    <div>
                                        <h5 className="text-dark mb-1 fw-bold">Send a Message</h5>
                                        <p className="text-dark text-opacity-75 mb-0" style={{ fontSize: "0.9rem" }}>Sends a message.</p>
                                    </div>
                                </div>
                                <span className="badge" style={{ backgroundColor: "#ff00ff", color: "white" }}>
                                    ⚡ Action
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-white rounded-4 p-4 h-100 border">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <circle cx="20" cy="20" r="20" fill="#25D366"/>
                                        <path d="M20 10C14.48 10 10 14.48 10 20C10 22.8 11.2 25.28 13.12 27.04L11.6 30L15.52 29.12C17.2 30.64 19.28 31.6 21.52 31.6C27.04 31.6 31.52 27.12 31.52 21.6C31.52 16.08 27.04 11.6 21.52 11.6H20V10Z" fill="white"/>
                                    </svg>
                                    <div>
                                        <h5 className="text-dark mb-1 fw-bold">Send a Template Message</h5>
                                        <p className="text-dark text-opacity-75 mb-0" style={{ fontSize: "0.9rem" }}>Sends a template message.</p>
                                    </div>
                                </div>
                                <span className="badge" style={{ backgroundColor: "#ff00ff", color: "white" }}>
                                    ⚡ Action
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-white rounded-4 p-4 h-100 border">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <circle cx="20" cy="20" r="20" fill="#25D366"/>
                                        <path d="M20 10C14.48 10 10 14.48 10 20C10 22.8 11.2 25.28 13.12 27.04L11.6 30L15.52 29.12C17.2 30.64 19.28 31.6 21.52 31.6C27.04 31.6 31.52 27.12 31.52 21.6C31.52 16.08 27.04 11.6 21.52 11.6H20V10Z" fill="white"/>
                                    </svg>
                                    <div>
                                        <h5 className="text-dark mb-1 fw-bold">Update a Business Profile</h5>
                                        <p className="text-dark text-opacity-75 mb-0" style={{ fontSize: "0.9rem" }}>Updates a WhatsApp business profile by the sender ID.</p>
                                    </div>
                                </div>
                                <span className="badge" style={{ backgroundColor: "#ff00ff", color: "white" }}>
                                    ⚡ Action
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-white rounded-4 p-4 h-100 border">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <circle cx="20" cy="20" r="20" fill="#25D366"/>
                                        <path d="M20 10C14.48 10 10 14.48 10 20C10 22.8 11.2 25.28 13.12 27.04L11.6 30L15.52 29.12C17.2 30.64 19.28 31.6 21.52 31.6C27.04 31.6 31.52 27.12 31.52 21.6C31.52 16.08 27.04 11.6 21.52 11.6H20V10Z" fill="white"/>
                                    </svg>
                                    <div>
                                        <h5 className="text-dark mb-1 fw-bold">Upload a Media</h5>
                                        <p className="text-dark text-opacity-75 mb-0" style={{ fontSize: "0.9rem" }}>Uploads a media and retrieves its ID.</p>
                                    </div>
                                </div>
                                <span className="badge" style={{ backgroundColor: "#ff00ff", color: "white" }}>
                                    ⚡ Action
                                </span>
                            </div>
                        </div>
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

