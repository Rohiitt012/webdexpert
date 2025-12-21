export default function Section5F() {
    return (
        <>
            {/*application home section 5f - Security*/}
            <section className="application-home-section-5f position-relative overflow-hidden py-120" style={{ backgroundColor: "#1a1a1a" }}>
                <div className="container position-relative z-1">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="bg-dark rounded-4 p-5 h-100" style={{ backgroundColor: "#2a2a2a" }}>
                                <h3 className="text-white mb-4 fw-bold" style={{ fontSize: "1.8rem", lineHeight: "1.4" }}>
                                    How to Ensure Security in SaaS Application Development?
                                </h3>
                                <h4 className="text-white mb-4 fw-bold">Steps:</h4>
                                <ol className="text-white ps-4" style={{ fontSize: "1rem", lineHeight: "1.8", color: "#e0e0e0" }}>
                                    <li className="mb-3">Implement strong authentication using OAuth, JWT, or multi-factor authentication.</li>
                                    <li className="mb-3">Encrypt sensitive data using AES or RSA encryption.</li>
                                    <li className="mb-0">Follow secure coding practices to prevent SQL injection and XSS attacks.</li>
                                </ol>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="bg-dark rounded-4 p-5 h-100" style={{ backgroundColor: "#2a2a2a" }}>
                                <h3 className="text-white mb-4 fw-bold" style={{ fontSize: "1.8rem", lineHeight: "1.4" }}>
                                    How to Ensure Security in SaaS Application Development?
                                </h3>
                                <h4 className="text-white mb-4 fw-bold">Steps:</h4>
                                <ol className="text-white ps-4" style={{ fontSize: "1rem", lineHeight: "1.8", color: "#e0e0e0" }} start={4}>
                                    <li className="mb-3">Use role-based access control (RBAC) for data protection.</li>
                                    <li className="mb-3">Monitor security threats with real-time logging and analysis tools.</li>
                                    <li className="mb-0">Perform regular security audits and compliance checks.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

