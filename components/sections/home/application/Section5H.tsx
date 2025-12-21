export default function Section5H() {
    return (
        <>
            {/*application home section 5h - Reduce Costs*/}
            <section className="application-home-section-5h position-relative overflow-hidden py-120" style={{ backgroundColor: "#1a1a1a" }}>
                <div className="container position-relative z-1">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="bg-dark rounded-4 p-5 h-100" style={{ backgroundColor: "#2a2a2a" }}>
                                <h3 className="text-white mb-4 fw-bold" style={{ fontSize: "1.8rem", lineHeight: "1.4" }}>
                                    How to Reduce SaaS Development Costs?
                                </h3>
                                <h4 className="text-white mb-4 fw-bold">Steps:</h4>
                                <ol className="text-white ps-4" style={{ fontSize: "1rem", lineHeight: "1.8", color: "#e0e0e0" }}>
                                    <li className="mb-3">Define a Minimum Viable Product (MVP) with essential features.</li>
                                    <li className="mb-3">Use open-source technologies to reduce licensing costs.</li>
                                    <li className="mb-0">Choose an outsourcing partner to cut development expenses.</li>
                                </ol>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="bg-dark rounded-4 p-5 h-100" style={{ backgroundColor: "#2a2a2a" }}>
                                <h3 className="text-white mb-4 fw-bold" style={{ fontSize: "1.8rem", lineHeight: "1.4" }}>
                                    How to Reduce SaaS Development Costs?
                                </h3>
                                <h4 className="text-white mb-4 fw-bold">Steps:</h4>
                                <ol className="text-white ps-4" style={{ fontSize: "1rem", lineHeight: "1.8", color: "#e0e0e0" }} start={4}>
                                    <li className="mb-3">Implement cloud cost optimization strategies.</li>
                                    <li className="mb-3">Automate repetitive tasks to reduce manual work.</li>
                                    <li className="mb-0">Continuously monitor and optimize server usage.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

