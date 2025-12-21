export default function Section5D() {
    return (
        <>
            {/*application home section 5d - How to Develop SaaS*/}
            <section className="application-home-section-5d position-relative overflow-hidden py-120" style={{ backgroundColor: "#1a1a1a" }}>
                <div className="container position-relative z-1">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="bg-dark rounded-4 p-5 h-100" style={{ backgroundColor: "#2a2a2a" }}>
                                <h3 className="text-white mb-4 fw-bold" style={{ fontSize: "1.8rem", lineHeight: "1.4" }}>
                                    How to Develop a SaaS Application for My Business?
                                </h3>
                                <h4 className="text-white mb-4 fw-bold">Steps:</h4>
                                <ol className="text-white ps-4" style={{ fontSize: "1rem", lineHeight: "1.8", color: "#e0e0e0" }}>
                                    <li className="mb-3">Define your SaaS idea, target audience, and core features.</li>
                                    <li className="mb-3">Choose the right technology stack based on scalability and performance.</li>
                                    <li className="mb-3">Design a user-friendly and intuitive interface for easy navigation.</li>
                                    <li className="mb-3">Develop the backend with secure cloud infrastructure and APIs.</li>
                                    <li className="mb-0">Implement multi-tenancy to support multiple users efficiently.</li>
                                </ol>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="bg-dark rounded-4 p-5 h-100" style={{ backgroundColor: "#2a2a2a" }}>
                                <h3 className="text-white mb-4 fw-bold" style={{ fontSize: "1.8rem", lineHeight: "1.4" }}>
                                    How to Develop a SaaS Application for My Business?
                                </h3>
                                <h4 className="text-white mb-4 fw-bold">Steps:</h4>
                                <ol className="text-white ps-4" style={{ fontSize: "1rem", lineHeight: "1.8", color: "#e0e0e0" }} start={6}>
                                    <li className="mb-3">Integrate payment gateways for subscription-based revenue models.</li>
                                    <li className="mb-3">Test thoroughly to ensure performance, security, and reliability.</li>
                                    <li className="mb-3">Deploy the application on cloud platforms like AWS or Azure.</li>
                                    <li className="mb-0">Monitor performance and update features based on user feedback.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

