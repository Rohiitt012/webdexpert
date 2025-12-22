import Link from "next/link";

export default function Section2B() {
    return (
        <>
            {/*it solutions home section 2B – how to create custom email addresses*/}
            <section className="it-solutions-home-section-2b position-relative overflow-hidden pt-120 pb-120 bg-white">
                <div className="container position-relative z-1">
                    <div className="row align-items-start g-lg-5 g-4">
                        <div className="col-lg-6">
                            <h2 className="text-dark mb-3 text-anime-style-3">
                                How to create custom email addresses with XzectLabs
                            </h2>
                            <p className="text-primary fs-6 fw-semibold mb-3">Simple steps to get you going.</p>
                            <p className="text-muted mb-0">
                                The migration process from your existing provider to XzectLabs is simple, and you can create custom domain email accounts for all of your employees with no downtime.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <div className="ps-lg-4">
                                <div className="mb-4">
                                    <div className="d-flex align-items-start mb-3">
                                        <span className="text-primary fw-bold fs-5 me-3">Step 1:</span>
                                        <p className="mb-0 text-dark">
                                            Add and verify your domain, or buy a new domain with XzectLabs.
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="d-flex align-items-start mb-3">
                                        <span className="text-primary fw-bold fs-5 me-3">Step 2:</span>
                                        <p className="mb-0 text-dark">
                                            Add users and create custom domain email accounts (or) Import users from a CSV file or from your Active Directory.
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="d-flex align-items-start mb-3">
                                        <span className="text-primary fw-bold fs-5 me-3">Step 3:</span>
                                        <p className="mb-0 text-dark">
                                            Create domain-based email accounts for groups, using distribution lists to allow multiple members to receive emails from common accounts like <strong>info@yourdomain.com</strong> or <strong>contact@yourdomain.com</strong>.
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="d-flex align-items-start mb-3">
                                        <span className="text-primary fw-bold fs-5 me-3">Step 4:</span>
                                        <p className="mb-0 text-dark">
                                            Configure your domain&apos;s <strong>MX records</strong> to point to XzectLabs Mail servers, so you can start receiving emails to your domain accounts in XzectLabs.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="d-flex align-items-start mb-3">
                                        <span className="text-primary fw-bold fs-5 me-3">Step 5:</span>
                                        <p className="mb-0 text-dark">
                                            Simultaneously start email migration for your users.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Workflow Diagram */}
                    <div className="row mt-5 pt-5">
                        <div className="col-12">
                            <div className="d-flex flex-wrap justify-content-between align-items-center position-relative">
                                {/* Step 1 */}
                                <div className="text-center mb-4 mb-md-0" style={{ flex: "1 1 auto", minWidth: "150px" }}>
                                    <div className="position-relative d-inline-block mb-3">
                                        <div className="icon-shape icon-80 rounded-circle bg-primary-subtle d-flex align-items-center justify-content-center position-relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none">
                                                <path d="M20 10C14.48 10 10 14.48 10 20C10 25.52 14.48 30 20 30C25.52 30 30 25.52 30 20C30 14.48 25.52 10 20 10ZM20 28C15.59 28 12 24.41 12 20C12 15.59 15.59 12 20 12C24.41 12 28 15.59 28 20C28 24.41 24.41 28 20 28Z" fill="#0D6EFD" />
                                                <path d="M20 16C18.9 16 18 16.9 18 18C18 19.1 18.9 20 20 20C21.1 20 22 19.1 22 18C22 16.9 21.1 16 20 16Z" fill="#0D6EFD" />
                                                <path d="M20 22C19.45 22 19 22.45 19 23V25C19 25.55 19.45 26 20 26C20.55 26 21 25.55 21 25V23C21 22.45 20.55 22 20 22Z" fill="#0D6EFD" />
                                            </svg>
                                            <span className="position-absolute bottom-0 end-0 badge bg-warning rounded-circle d-flex align-items-center justify-content-center" style={{ width: "24px", height: "24px" }}>
                                                <i className="bi bi-check text-dark" style={{ fontSize: "12px" }} />
                                            </span>
                                        </div>
                                    </div>
                                    <p className="mb-0 fw-semibold text-dark small">Add &amp; Verify Domain</p>
                                </div>
                                
                                {/* Connector */}
                                <div className="d-none d-md-block position-absolute" style={{ left: "20%", top: "40px", width: "15%", height: "2px", borderTop: "2px dashed #0D6EFD" }} />
                                
                                {/* Step 2 */}
                                <div className="text-center mb-4 mb-md-0" style={{ flex: "1 1 auto", minWidth: "150px" }}>
                                    <div className="position-relative d-inline-block mb-3">
                                        <div className="icon-shape icon-80 rounded-circle bg-primary-subtle d-flex align-items-center justify-content-center position-relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none">
                                                <circle cx="20" cy="20" r="15" stroke="#0D6EFD" strokeWidth="2" fill="none" />
                                                <circle cx="15" cy="18" r="3" fill="#0D6EFD" />
                                                <circle cx="25" cy="18" r="3" fill="#0D6EFD" />
                                                <path d="M15 25Q20 28 25 25" stroke="#0D6EFD" strokeWidth="2" fill="none" />
                                            </svg>
                                            <span className="position-absolute top-0 end-0 badge bg-warning rounded-circle d-flex align-items-center justify-content-center" style={{ width: "24px", height: "24px" }}>
                                                <i className="bi bi-plus text-dark" style={{ fontSize: "12px" }} />
                                            </span>
                                        </div>
                                    </div>
                                    <p className="mb-0 fw-semibold text-dark small">Add User &amp; Groups</p>
                                </div>
                                
                                {/* Connector */}
                                <div className="d-none d-md-block position-absolute" style={{ left: "40%", top: "40px", width: "15%", height: "2px", borderTop: "2px dashed #0D6EFD" }} />
                                
                                {/* Step 3 */}
                                <div className="text-center mb-4 mb-md-0" style={{ flex: "1 1 auto", minWidth: "150px" }}>
                                    <div className="position-relative d-inline-block mb-3">
                                        <div className="icon-shape icon-80 rounded-circle bg-primary-subtle d-flex align-items-center justify-content-center position-relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none">
                                                <rect x="10" y="12" width="20" height="16" rx="2" stroke="#0D6EFD" strokeWidth="2" fill="none" />
                                                <path d="M10 18H30" stroke="#0D6EFD" strokeWidth="2" />
                                                <path d="M15 22H25" stroke="#0D6EFD" strokeWidth="2" />
                                            </svg>
                                            <span className="position-absolute bottom-0 start-0 badge bg-warning rounded-circle d-flex align-items-center justify-content-center" style={{ width: "24px", height: "24px" }}>
                                                <i className="bi bi-tools text-dark" style={{ fontSize: "12px" }} />
                                            </span>
                                        </div>
                                    </div>
                                    <p className="mb-0 fw-semibold text-dark small">Change MX records</p>
                                </div>
                                
                                {/* Connector */}
                                <div className="d-none d-md-block position-absolute" style={{ left: "60%", top: "40px", width: "15%", height: "2px", borderTop: "2px dashed #0D6EFD" }} />
                                
                                {/* Step 4 */}
                                <div className="text-center mb-4 mb-md-0" style={{ flex: "1 1 auto", minWidth: "150px" }}>
                                    <div className="position-relative d-inline-block mb-3">
                                        <div className="icon-shape icon-80 rounded-circle bg-primary-subtle d-flex align-items-center justify-content-center position-relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none">
                                                <rect x="8" y="10" width="12" height="20" rx="2" fill="#FFC107" stroke="#0D6EFD" strokeWidth="2" />
                                                <rect x="20" y="10" width="12" height="20" rx="2" fill="none" stroke="#0D6EFD" strokeWidth="2" />
                                                <path d="M14 18L18 22L26 14" stroke="#0D6EFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M20 18L24 22L32 14" stroke="#0D6EFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="mb-0 fw-semibold text-dark small">Email Migration</p>
                                </div>
                                
                                {/* Connector */}
                                <div className="d-none d-md-block position-absolute" style={{ left: "80%", top: "40px", width: "15%", height: "2px", borderTop: "2px dashed #0D6EFD" }} />
                                
                                {/* Step 5 */}
                                <div className="text-center mb-4 mb-md-0" style={{ flex: "1 1 auto", minWidth: "150px" }}>
                                    <div className="position-relative d-inline-block mb-3">
                                        <div className="icon-shape icon-80 rounded-circle bg-primary-subtle d-flex align-items-center justify-content-center position-relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none">
                                                <rect x="10" y="8" width="20" height="24" rx="2" stroke="#0D6EFD" strokeWidth="2" fill="none" />
                                                <path d="M14 16H26" stroke="#0D6EFD" strokeWidth="2" />
                                                <path d="M14 20H26" stroke="#0D6EFD" strokeWidth="2" />
                                                <path d="M14 24H20" stroke="#0D6EFD" strokeWidth="2" />
                                                <circle cx="20" cy="14" r="2" fill="#0D6EFD" />
                                            </svg>
                                            <span className="position-absolute bottom-0 end-0 badge bg-warning rounded-circle d-flex align-items-center justify-content-center" style={{ width: "24px", height: "24px" }}>
                                                <i className="bi bi-tools text-dark" style={{ fontSize: "12px" }} />
                                            </span>
                                        </div>
                                    </div>
                                    <p className="mb-0 fw-semibold text-dark small">Custom Domain Email Address</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

