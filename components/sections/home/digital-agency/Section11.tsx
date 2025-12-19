import Link from "next/link";

export default function Section11() {
    return (
        <>
            {/*digital-agency home section 11 - Fundamentals / Verticals / Virtues*/}
            <section className="position-relative overflow-hidden py-120" style={{ backgroundColor: "#ffffff" }}>
                <div className="container">
                    {/* Fundamentals */}
                    <div className="text-center mb-5">
                        <h2
                            className="mb-4"
                            style={{
                                fontSize: "40px",
                                lineHeight: "1.3",
                                fontWeight: 400,
                                color: "#000",
                                fontFamily: "inherit",
                            }}
                        >
                            Fundamentals Of Our{" "}
                            <span style={{ fontWeight: 700 }}>Website Maintenance</span> Services
                        </h2>
                        <p
                            className="mx-auto mb-0"
                            style={{
                                fontSize: "16px",
                                lineHeight: "1.8",
                                color: "#333",
                                maxWidth: "1100px",
                                fontFamily: "inherit",
                            }}
                        >
                            Our website maintenance services are built on a strong foundation of key fundamentals,
                            including:
                        </p>
                    </div>

                    <div className="row g-4 mb-80">
                        {/* Fundamentals left */}
                        <div className="col-lg-6">
                            <div
                                className="h-100 p-5 rounded-4 border"
                                style={{ backgroundColor: "#ffffff", borderColor: "#f2f2f2" }}
                            >
                                {[
                                    "Continuous monitoring and performance optimization",
                                    "Content management and updates",
                                    "Timely backups and disaster recovery options",
                                    "Bug fixes and issue resolution",
                                    "Regular software updates and security patches",
                                ].map((text, idx) => (
                                    <div className="d-flex align-items-start mb-3" key={idx}>
                                        <div className="flex-shrink-0 me-3">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                style={{ marginTop: "4px" }}
                                            >
                                                <circle cx="10" cy="10" r="9" fill="#E63946" stroke="#E63946" strokeWidth="1.5" />
                                                <path
                                                    d="M6 10L8.5 12.5L14 7"
                                                    stroke="white"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <p
                                            className="mb-0"
                                            style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", fontFamily: "inherit" }}
                                        >
                                            {text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Fundamentals right */}
                        <div className="col-lg-6">
                            <div
                                className="h-100 p-5 rounded-4 border"
                                style={{ backgroundColor: "#ffffff", borderColor: "#f2f2f2" }}
                            >
                                {[
                                    "SEO optimization and keyword monitoring",
                                    "Responsive design and mobile compatibility",
                                    "Social media integration and updates",
                                    "E‑commerce maintenance and inventory management",
                                    "Website analytics and reporting",
                                ].map((text, idx) => (
                                    <div className="d-flex align-items-start mb-3" key={idx}>
                                        <div className="flex-shrink-0 me-3">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                style={{ marginTop: "4px" }}
                                            >
                                                <circle cx="10" cy="10" r="9" fill="#E63946" stroke="#E63946" strokeWidth="1.5" />
                                                <path
                                                    d="M6 10L8.5 12.5L14 7"
                                                    stroke="white"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <p
                                            className="mb-0"
                                            style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", fontFamily: "inherit" }}
                                        >
                                            {text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Verticals heading */}
                    <div className="text-center mb-5">
                        <h2
                            className="mb-4"
                            style={{
                                fontSize: "40px",
                                lineHeight: "1.3",
                                fontWeight: 400,
                                color: "#000",
                                fontFamily: "inherit",
                            }}
                        >
                            Different Verticals of Our{" "}
                            <span style={{ fontWeight: 700 }}>Website Maintenance</span> Services
                        </h2>
                    </div>

                    {/* Verticals cards */}
                    <div className="row g-4 mb-80">
                        {[
                            {
                                title: "Website Maintenance",
                                text: "Our website maintenance services cover all aspects of website management, including updates, bug fixes, security enhancements, content management, and performance optimization.",
                            },
                            {
                                title: "WordPress Maintenance",
                                text: "We specialize in WordPress maintenance, providing regular updates, plugin management, theme updates, security patches, and performance optimization for WordPress websites.",
                            },
                            {
                                title: "WooCommerce Maintenance",
                                text: "For WooCommerce websites, we offer dedicated maintenance that includes product updates, inventory management, payment gateway integration, security audits, and performance optimization.",
                            },
                            {
                                title: "Blog Maintenance",
                                text: "Our blog maintenance services encompass content updates, plugin management, comment moderation, spam control, and overall blog performance optimization.",
                            },
                        ].map((item, idx) => (
                            <div className="col-lg-6" key={idx}>
                                <div
                                    className="h-100 p-5 rounded-4 border border-dark"
                                    style={{ backgroundColor: "#f6af1a" }}
                                >
                                    <h3
                                        className="mb-3"
                                        style={{
                                            fontSize: "24px",
                                            lineHeight: "1.3",
                                            fontWeight: 600,
                                            color: "#000",
                                            fontFamily: "inherit",
                                        }}
                                    >
                                        {item.title}
                                    </h3>
                                    <p
                                        className="mb-0"
                                        style={{ fontSize: "16px", lineHeight: "1.8", color: "#000", fontFamily: "inherit" }}
                                    >
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Virtues heading */}
                    <div className="text-center mb-5">
                        <h2
                            className="mb-4"
                            style={{
                                fontSize: "40px",
                                lineHeight: "1.3",
                                fontWeight: 400,
                                color: "#000",
                                fontFamily: "inherit",
                            }}
                        >
                            What Are The Virtues Of Our{" "}
                            <span style={{ fontWeight: 700 }}>Website Maintenance</span> Services?
                        </h2>
                    </div>

                    {/* Virtues cards */}
                    <div className="row g-4">
                        {[
                            {
                                title: "Proactive Approach",
                                text: "We take a proactive approach to website maintenance, identifying and addressing potential issues before they become major problems.",
                            },
                            {
                                title: "Expert Team",
                                text: "Our experienced professionals possess in‑depth knowledge and expertise to effectively handle all aspects of website maintenance.",
                            },
                            {
                                title: "Customized Solutions",
                                text: "Every website is unique, so we tailor our maintenance services to meet your specific requirements and business goals.",
                            },
                            {
                                title: "Regular Updates",
                                text: "We ensure that your website stays updated with the latest technology, security patches, and software upgrades.",
                            },
                        ].map((item, idx) => (
                            <div className="col-lg-6" key={idx}>
                                <div
                                    className="h-100 p-5 rounded-4 border"
                                    style={{ backgroundColor: "#ffffff", borderColor: "#f2f2f2" }}
                                >
                                    <h3
                                        className="mb-3"
                                        style={{
                                            fontSize: "24px",
                                            lineHeight: "1.3",
                                            fontWeight: 600,
                                            color: "#000",
                                            fontFamily: "inherit",
                                        }}
                                    >
                                        {item.title}
                                    </h3>
                                    <p
                                        className="mb-0"
                                        style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", fontFamily: "inherit" }}
                                    >
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Why Choose section */}
                    <div className="text-center mt-120 mb-5">
                        <h2
                            className="mb-4"
                            style={{
                                fontSize: "40px",
                                lineHeight: "1.3",
                                fontWeight: 400,
                                color: "#000",
                                fontFamily: "inherit",
                            }}
                        >
                            Why Choose <span style={{ fontWeight: 700 }}>Website Maintenance</span> Services From Rankon
                            Technologies?
                        </h2>
                    </div>

                    <div className="row g-4">
                        {[
                            {
                                title: "Enhanced Security",
                                text: "We implement robust security measures to protect your website from potential threats and vulnerabilities.",
                            },
                            {
                                title: "Industry Expertise",
                                text: "We have years of experience in website maintenance, ensuring that your website is in capable hands.",
                            },
                            {
                                title: "Customized Solutions",
                                text: "We tailor our maintenance services to match your specific requirements and business goals.",
                            },
                            {
                                title: "Proactive Approach",
                                text: "Our proactive stance helps identify and address potential issues before they impact your website’s performance.",
                            },
                            {
                                title: "Dedicated Support",
                                text: "We provide timely and efficient support to address any queries or concerns you may have.",
                            },
                            {
                                title: "Affordable Pricing",
                                text: "Our maintenance packages offer competitive pricing to provide the best value for your investment.",
                            },
                        ].map((item, idx) => (
                            <div className="col-lg-6" key={idx}>
                                <div
                                    className="h-100 p-5 rounded-4 border"
                                    style={{ backgroundColor: "#ffffff", borderColor: "#f2f2f2" }}
                                >
                                    <h3
                                        className="mb-3"
                                        style={{
                                            fontSize: "24px",
                                            lineHeight: "1.3",
                                            fontWeight: 600,
                                            color: "#000",
                                            fontFamily: "inherit",
                                        }}
                                    >
                                        {item.title}
                                    </h3>
                                    <p
                                        className="mb-0"
                                        style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", fontFamily: "inherit" }}
                                    >
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}


