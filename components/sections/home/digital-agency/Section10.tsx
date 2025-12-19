import Link from "next/link";

export default function Section10() {
    return (
        <>
            {/*digital-agency home section 10 - Cost Section*/}
            <section className="position-relative overflow-hidden py-120" style={{ backgroundColor: "#000000" }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2
                            className="mb-4"
                            style={{
                                fontSize: "40px",
                                lineHeight: "1.3",
                                fontWeight: 400,
                                color: "#ffffff",
                                fontFamily: "inherit",
                            }}
                        >
                            How Much Does <span style={{ color: "#f6af1a", fontWeight: 700 }}>Website Maintenance</span> Cost in India?
                        </h2>
                        <p
                            className="mx-auto mb-3"
                            style={{
                                fontSize: "16px",
                                lineHeight: "1.8",
                                color: "#ffffff",
                                maxWidth: "1100px",
                                fontFamily: "inherit",
                            }}
                        >
                            The cost of website maintenance can vary depending on several factors, including the complexity of your
                            website, its size, the frequency of updates and maintenance tasks, and the level of expertise required.
                        </p>
                        <p
                            className="mx-auto mb-0"
                            style={{
                                fontSize: "16px",
                                lineHeight: "1.8",
                                color: "#ffffff",
                                maxWidth: "1100px",
                                fontFamily: "inherit",
                            }}
                        >
                            Here are some common factors that can influence the cost of website maintenance:
                        </p>
                    </div>

                    {/* Row 1 */}
                    <div className="row g-4 mb-4">
                        <div className="col-lg-6">
                            <div
                                className="h-100 p-5 border border-warning"
                                style={{ backgroundColor: "transparent" }}
                            >
                                <h3
                                    className="mb-3"
                                    style={{
                                        fontSize: "28px",
                                        lineHeight: "1.3",
                                        fontWeight: 600,
                                        color: "#f6af1a",
                                        fontFamily: "inherit",
                                    }}
                                >
                                    Basic Maintenance
                                </h3>
                                <p
                                    className="mb-0"
                                    style={{
                                        fontSize: "16px",
                                        lineHeight: "1.8",
                                        color: "#ffffff",
                                        fontFamily: "inherit",
                                    }}
                                >
                                    This typically includes tasks such as updating software, plugins, and themes, performing backups,
                                    and monitoring security to ensure optimal performance. Basic maintenance services can range from{" "}
                                    <strong>$50 to $200 per month</strong>, depending on the size and complexity of your website.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="h-100 p-5 border border-warning"
                                style={{ backgroundColor: "transparent" }}
                            >
                                <h3
                                    className="mb-3"
                                    style={{
                                        fontSize: "28px",
                                        lineHeight: "1.3",
                                        fontWeight: 600,
                                        color: "#f6af1a",
                                        fontFamily: "inherit",
                                    }}
                                >
                                    Content Updates
                                </h3>
                                <p
                                    className="mb-0"
                                    style={{
                                        fontSize: "16px",
                                        lineHeight: "1.8",
                                        color: "#ffffff",
                                        fontFamily: "inherit",
                                    }}
                                >
                                    If you require regular content updates, such as adding new pages, uploading blog posts, or updating
                                    images, the cost can increase. Content management services can range from{" "}
                                    <strong>$100 to $500 per month</strong>, depending on the frequency and volume of updates.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="row g-4 mb-4">
                        <div className="col-lg-6">
                            <div
                                className="h-100 p-5 border border-warning"
                                style={{ backgroundColor: "transparent" }}
                            >
                                <h3
                                    className="mb-3"
                                    style={{
                                        fontSize: "28px",
                                        lineHeight: "1.3",
                                        fontWeight: 600,
                                        color: "#f6af1a",
                                        fontFamily: "inherit",
                                    }}
                                >
                                    E‑commerce Maintenance
                                </h3>
                                <p
                                    className="mb-0"
                                    style={{
                                        fontSize: "16px",
                                        lineHeight: "1.8",
                                        color: "#ffffff",
                                        fontFamily: "inherit",
                                    }}
                                >
                                    For e‑commerce websites, maintenance may include product updates, inventory management, order
                                    processing, and maintaining the payment gateway. Costs can range from{" "}
                                    <strong>$200 to $1000+ per month</strong>, depending on complexity and size.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="h-100 p-5 border border-warning"
                                style={{ backgroundColor: "transparent" }}
                            >
                                <h3
                                    className="mb-3"
                                    style={{
                                        fontSize: "28px",
                                        lineHeight: "1.3",
                                        fontWeight: 600,
                                        color: "#f6af1a",
                                        fontFamily: "inherit",
                                    }}
                                >
                                    Custom Development &amp; Enhancements
                                </h3>
                                <p
                                    className="mb-0"
                                    style={{
                                        fontSize: "16px",
                                        lineHeight: "1.8",
                                        color: "#ffffff",
                                        fontFamily: "inherit",
                                    }}
                                >
                                    If you need custom development or specific enhancements, the cost can vary significantly. These
                                    tasks are usually billed hourly, ranging from <strong>$50 to $200 or more per hour</strong>,
                                    depending on the expertise and experience of the developers.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="row g-4 mb-4">
                        <div className="col-lg-6">
                            <div
                                className="h-100 p-5 border border-warning"
                                style={{ backgroundColor: "transparent" }}
                            >
                                <h3
                                    className="mb-3"
                                    style={{
                                        fontSize: "28px",
                                        lineHeight: "1.3",
                                        fontWeight: 600,
                                        color: "#f6af1a",
                                        fontFamily: "inherit",
                                    }}
                                >
                                    Emergency Support
                                </h3>
                                <p
                                    className="mb-0"
                                    style={{
                                        fontSize: "16px",
                                        lineHeight: "1.8",
                                        color: "#ffffff",
                                        fontFamily: "inherit",
                                    }}
                                >
                                    In the event of unforeseen issues or emergencies, you may require immediate assistance. Emergency
                                    support services are often billed hourly, typically ranging from{" "}
                                    <strong>$100 to $300 or more per hour</strong>, depending on urgency and complexity.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="h-100 p-5 border border-warning"
                                style={{ backgroundColor: "transparent" }}
                            >
                                <h3
                                    className="mb-3"
                                    style={{
                                        fontSize: "28px",
                                        lineHeight: "1.3",
                                        fontWeight: 600,
                                        color: "#f6af1a",
                                        fontFamily: "inherit",
                                    }}
                                >
                                    Ongoing Support &amp; Consultation
                                </h3>
                                <p
                                    className="mb-0"
                                    style={{
                                        fontSize: "16px",
                                        lineHeight: "1.8",
                                        color: "#ffffff",
                                        fontFamily: "inherit",
                                    }}
                                >
                                    Some website maintenance services provide ongoing support and consultation, offering technical
                                    guidance, advice, and assistance with website‑related queries. This is often charged on a monthly
                                    or hourly basis, in addition to regular maintenance fees.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Note */}
                    <div className="row mt-5">
                        <div className="col-12">
                            <p
                                className="mx-auto mb-3 text-center"
                                style={{
                                    fontSize: "16px",
                                    lineHeight: "1.8",
                                    color: "#ffffff",
                                    maxWidth: "1200px",
                                    fontFamily: "inherit",
                                }}
                            >
                                It&apos;s important to remember these ranges are general estimates and can vary depending on your
                                website and service provider. We recommend consulting multiple providers and requesting quotes tailored to
                                your specific requirements for a more accurate understanding of website maintenance costs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


