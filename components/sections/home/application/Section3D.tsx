export default function Section3D() {
    return (
        <>
            {/*application home section 3d - Two Column Services*/}
            <section className="application-home-section-3d position-relative overflow-hidden py-120" style={{ backgroundColor: "#fff" }}>
                <div className="container position-relative z-1">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="rounded-4 p-5 h-100 border" style={{ backgroundColor: "#fff" }}>
                                <h3 className="mb-4" style={{ color: "#ff8c00", fontSize: "1.8rem", fontWeight: "700" }}>
                                    SaaS Architecture Design
                                </h3>
                                <p style={{ fontSize: "1rem", lineHeight: "1.7", color: "#666" }}>
                                    Blueprinting scalable architecture for bespoke SaaS applications is crucial for long-term success. We begin by gathering functional and non-functional demands, then use proven design methodologies for transitioning from monolith to microservices architecture. Key focus areas include layered structure, independent services, distributed systems, asynchronous processing, load balancing, caching, and security. Our advanced design practices ensure SaaS solutions remain relevant, optimize resource usage, minimize downtimes, and simplify evolutions, ultimately leading to high-performing bespoke SaaS solutions.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="rounded-4 p-5 h-100 border" style={{ backgroundColor: "#fff" }}>
                                <h3 className="mb-4" style={{ color: "#ff8c00", fontSize: "1.8rem", fontWeight: "700" }}>
                                    SaaS Cloud Migration Services
                                </h3>
                                <p style={{ fontSize: "1rem", lineHeight: "1.7", color: "#666" }}>
                                    We offer managed migration and implementation services to leading cloud platforms based on business specifications. Our certified engineers assess on-premise infrastructure, re-platform applications, containerize, refactor, re-implement security, and deploy on major cloud providers like AWS, Azure, and GCP, enabling infrastructure elasticity and PAYG (Pay-As-You-Go) flexibility. We provide robust post-migration support, including monitoring, optimizations, and compliance maintenance, to ensure optimal performance, cost efficiency, and ease of evolutions through proactive managed services. This expertise allows bespoke SaaS solutions on scalable cloud infrastructure to achieve unlimited growth and seamless transitions without disruptions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

