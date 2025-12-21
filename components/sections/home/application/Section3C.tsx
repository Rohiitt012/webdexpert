export default function Section3C() {
    return (
        <>
            {/*application home section 3c - Two Column with Sidebar*/}
            <section className="application-home-section-3c position-relative overflow-hidden py-120" style={{ backgroundColor: "#1a1a1a" }}>
                <div className="container position-relative z-1">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="bg-dark rounded-4 p-5 h-100" style={{ backgroundColor: "#2a2a2a" }}>
                                <h3 className="text-white mb-4" style={{ color: "#ff8c00", fontSize: "1.8rem", fontWeight: "700" }}>
                                    SaaS App Maintenance & Support
                                </h3>
                                <p className="text-white" style={{ fontSize: "1rem", lineHeight: "1.7", color: "#e0e0e0" }}>
                                    Continuous product improvement and support are essential for SaaS solutions. We offer competitively priced managed service contracts with personalized SLAs. Our dedicated client success team provides proactive monitoring and reactive troubleshooting, regular system audits, health checks, and addresses critical alerts. We also perform regular upgrades to optimize performance, incorporate new features, plug security vulnerabilities, and train internal teams for 24/7 support, ensuring enhanced client investment value.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="bg-dark rounded-4 p-5 h-100" style={{ backgroundColor: "#2a2a2a" }}>
                                <h3 className="text-white mb-4" style={{ color: "#ff8c00", fontSize: "1.8rem", fontWeight: "700" }}>
                                    Modern Development Stack
                                </h3>
                                <p className="text-white" style={{ fontSize: "1rem", lineHeight: "1.7", color: "#e0e0e0" }}>
                                    We deploy technology stacks that build resilient and performant SAAS solutions. We use suitable platforms like MEAN, MERN, and Python/Django, front-end frameworks such as React or Angular for interactive experiences, and serverless and containerization. We handle data storage and querying from scalable databases like MongoDB and PostgreSQL, progressive delivery using pipelines and configuration management, and use microservices for modularity, all contributing to a sound architecture.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

