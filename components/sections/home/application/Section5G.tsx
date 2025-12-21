export default function Section5G() {
    return (
        <>
            {/*application home section 5g - Monetize and Scale*/}
            <section className="application-home-section-5g position-relative overflow-hidden py-120" style={{ backgroundColor: "#1a1a1a" }}>
                <div className="container position-relative z-1">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="bg-dark rounded-4 p-5 h-100" style={{ backgroundColor: "#2a2a2a" }}>
                                <h3 className="text-white mb-4 fw-bold" style={{ fontSize: "1.8rem", lineHeight: "1.4" }}>
                                    How to Monetize a SaaS Application?
                                </h3>
                                <h4 className="text-white mb-4 fw-bold">Steps:</h4>
                                <ol className="text-white ps-4" style={{ fontSize: "1rem", lineHeight: "1.8", color: "#e0e0e0" }}>
                                    <li className="mb-3">Choose a pricing model like subscription-based, freemium, or pay-per-use.</li>
                                    <li className="mb-3">Offer tiered plans to cater to different user needs.</li>
                                    <li className="mb-3">Integrate secure payment gateways like Stripe or PayPal.</li>
                                    <li className="mb-3">Provide free trials to attract potential customers.</li>
                                    <li className="mb-3">Implement upselling and cross-selling strategies.</li>
                                    <li className="mb-0">Continuously improve features to increase customer retention.</li>
                                </ol>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="bg-dark rounded-4 p-5 h-100" style={{ backgroundColor: "#2a2a2a" }}>
                                <h3 className="text-white mb-4 fw-bold" style={{ fontSize: "1.8rem", lineHeight: "1.4" }}>
                                    How to Scale a SaaS Application?
                                </h3>
                                <h4 className="text-white mb-4 fw-bold">Steps:</h4>
                                <ol className="text-white ps-4" style={{ fontSize: "1rem", lineHeight: "1.8", color: "#e0e0e0" }}>
                                    <li className="mb-3">Optimize database queries and use caching techniques.</li>
                                    <li className="mb-3">Implement microservices architecture for better scalability.</li>
                                    <li className="mb-3">Use auto-scaling cloud services to handle traffic spikes.</li>
                                    <li className="mb-3">Optimize front-end performance with lazy loading and CDN.</li>
                                    <li className="mb-3">Monitor system performance with real-time analytics.</li>
                                    <li className="mb-0">Regularly update and improve the application based on user feedback.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

