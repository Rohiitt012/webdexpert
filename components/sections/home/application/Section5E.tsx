export default function Section5E() {
    return (
        <>
            {/*application home section 5e - Tech Stack*/}
            <section className="application-home-section-5e position-relative overflow-hidden py-120" style={{ backgroundColor: "#1a1a1a" }}>
                <div className="container position-relative z-1">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="bg-dark rounded-4 p-5 h-100" style={{ backgroundColor: "#2a2a2a" }}>
                                <h3 className="text-white mb-4 fw-bold" style={{ fontSize: "1.8rem", lineHeight: "1.4" }}>
                                    How to Choose the Right Tech Stack for a SaaS Application?
                                </h3>
                                <h4 className="text-white mb-4 fw-bold">Steps:</h4>
                                <ol className="text-white ps-4" style={{ fontSize: "1rem", lineHeight: "1.8", color: "#e0e0e0" }}>
                                    <li className="mb-3">Identify your business needs and scalability requirements.</li>
                                    <li className="mb-3">Choose a cloud provider like AWS, Google Cloud, or Azure.</li>
                                    <li className="mb-3">Select a backend framework like Node.js, Python, or Ruby on Rails.</li>
                                    <li className="mb-0">Use a frontend framework like React, Angular, or Vue.js.</li>
                                </ol>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="bg-dark rounded-4 p-5 h-100" style={{ backgroundColor: "#2a2a2a" }}>
                                <h3 className="text-white mb-4 fw-bold" style={{ fontSize: "1.8rem", lineHeight: "1.4" }}>
                                    How to Choose the Right Tech Stack for a SaaS Application?
                                </h3>
                                <h4 className="text-white mb-4 fw-bold">Steps:</h4>
                                <ol className="text-white ps-4" style={{ fontSize: "1rem", lineHeight: "1.8", color: "#e0e0e0" }} start={5}>
                                    <li className="mb-3">Pick a database system such as PostgreSQL, MySQL, or MongoDB.</li>
                                    <li className="mb-3">Implement DevOps tools for CI/CD and automation.</li>
                                    <li className="mb-0">Ensure security with authentication, encryption, and compliance measures.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

