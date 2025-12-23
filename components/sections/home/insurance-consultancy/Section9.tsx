import Link from "next/link";

export default function Section9() {
    return (
        <>
            {/*insurance-consultancy section 9 - Social Media Marketing Pricing*/}
            <section className="insurance-consultancy-section-9 overflow-hidden py-5 bg-white">
                <div className="container">
                    {/* Pricing Cards Section */}
                    <div className="row justify-content-center text-center mb-5">
                        <div className="col-lg-10">
                            <h2
                                className="mb-4"
                                style={{
                                    fontSize: '40px',
                                    lineHeight: '1.3',
                                    fontWeight: 400,
                                    fontFamily:
                                        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                                }}
                            >
                                <span style={{ fontWeight: 'bold' }}>Social Media Marketing</span> — Pricing Cards
                            </h2>
                            <p
                                className="mb-0"
                                style={{
                                    fontSize: '18px',
                                    lineHeight: '1.7',
                                    color: '#333',
                                    maxWidth: '1100px',
                                    margin: '0 auto',
                                }}
                            >
                                Choose the perfect plan to build your social media presence, grow engagement, and scale your brand.
                            </p>
                        </div>
                    </div>

                    {/* Pricing Cards Row */}
                    <div className="row g-4">
                        {/* Starter Plan */}
                        <div className="col-md-4">
                            <div
                                className="h-100 text-center px-4 py-5 rounded-4"
                                style={{ backgroundColor: '#f9f9f9', border: '2px solid #eee' }}
                            >
                                <div className="mb-3">
                                    <span style={{ fontSize: '48px' }}>⭐</span>
                                </div>
                                <h3
                                    className="mb-3"
                                    style={{
                                        fontSize: '28px',
                                        lineHeight: '1.3',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Starter Social Plan
                                </h3>
                                <div className="mb-4">
                                    <h4
                                        style={{
                                            fontSize: '36px',
                                            fontWeight: 'bold',
                                            color: '#000',
                                        }}
                                    >
                                        ₹14,999<span style={{ fontSize: '18px', fontWeight: 400 }}> / month</span>
                                    </h4>
                                    <p style={{ fontSize: '16px', color: '#666' }}>
                                        Perfect for building a consistent social presence.
                                    </p>
                                </div>
                                <ul
                                    className="list-unstyled text-start mb-4"
                                    style={{ fontSize: '16px', lineHeight: '2', color: '#333' }}
                                >
                                    <li>Social media management</li>
                                    <li>12 posts / month</li>
                                    <li>Content calendar & scheduling</li>
                                    <li>Basic engagement monitoring</li>
                                    <li>Monthly performance report</li>
                                </ul>
                                <Link
                                    href="/contact"
                                    className="btn btn-primary"
                                    style={{
                                        border: '2px solid #000',
                                        borderRadius: '999px',
                                        padding: '12px 32px',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        backgroundColor: '#000',
                                        color: '#fff',
                                        display: 'inline-block',
                                        textDecoration: 'none',
                                    }}
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>

                        {/* Growth Plan */}
                        <div className="col-md-4">
                            <div
                                className="h-100 text-center px-4 py-5 rounded-4"
                                style={{ backgroundColor: '#000', border: '2px solid #FDB913', color: '#fff' }}
                            >
                                <div className="mb-3">
                                    <span style={{ fontSize: '48px' }}>🚀</span>
                                </div>
                                <h3
                                    className="mb-3"
                                    style={{
                                        fontSize: '28px',
                                        lineHeight: '1.3',
                                        fontWeight: 'bold',
                                        color: '#FDB913',
                                    }}
                                >
                                    Growth Social Plan
                                </h3>
                                <div className="mb-4">
                                    <h4
                                        style={{
                                            fontSize: '36px',
                                            fontWeight: 'bold',
                                            color: '#FDB913',
                                        }}
                                    >
                                        ₹29,999<span style={{ fontSize: '18px', fontWeight: 400, color: '#fff' }}> / month</span>
                                    </h4>
                                    <p style={{ fontSize: '16px', color: '#ddd' }}>
                                        Designed to grow reach, engagement, and leads.
                                    </p>
                                </div>
                                <ul
                                    className="list-unstyled text-start mb-4"
                                    style={{ fontSize: '16px', lineHeight: '2', color: '#fff' }}
                                >
                                    <li>Social media management</li>
                                    <li>Reels & creative strategy</li>
                                    <li>Paid ads management (1 platform)*</li>
                                    <li>Audience targeting & optimization</li>
                                    <li>Monthly analytics report</li>
                                </ul>
                                <Link
                                    href="/contact"
                                    className="btn"
                                    style={{
                                        border: '2px solid #FDB913',
                                        borderRadius: '999px',
                                        padding: '12px 32px',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        backgroundColor: '#FDB913',
                                        color: '#000',
                                        display: 'inline-block',
                                        textDecoration: 'none',
                                    }}
                                >
                                    Grow Your Brand
                                </Link>
                            </div>
                        </div>

                        {/* Premium Plan */}
                        <div className="col-md-4">
                            <div
                                className="h-100 text-center px-4 py-5 rounded-4"
                                style={{ backgroundColor: '#f9f9f9', border: '2px solid #eee' }}
                            >
                                <div className="mb-3">
                                    <span style={{ fontSize: '48px' }}>🏆</span>
                                </div>
                                <h3
                                    className="mb-3"
                                    style={{
                                        fontSize: '28px',
                                        lineHeight: '1.3',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Premium Brand Growth
                                </h3>
                                <div className="mb-4">
                                    <h4
                                        style={{
                                            fontSize: '36px',
                                            fontWeight: 'bold',
                                            color: '#000',
                                        }}
                                    >
                                        ₹49,999<span style={{ fontSize: '18px', fontWeight: 400 }}> / month</span>
                                    </h4>
                                    <p style={{ fontSize: '16px', color: '#666' }}>
                                        End-to-end social media growth for scaling brands.
                                    </p>
                                </div>
                                <ul
                                    className="list-unstyled text-start mb-4"
                                    style={{ fontSize: '16px', lineHeight: '2', color: '#333' }}
                                >
                                    <li>Complete social media management</li>
                                    <li>Advanced reels & creative strategy</li>
                                    <li>Paid ads (multi-platform)*</li>
                                    <li>Brand growth & engagement strategy</li>
                                    <li>Priority support & detailed reporting</li>
                                </ul>
                                <Link
                                    href="/contact"
                                    className="btn btn-primary"
                                    style={{
                                        border: '2px solid #000',
                                        borderRadius: '999px',
                                        padding: '12px 32px',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        backgroundColor: '#000',
                                        color: '#fff',
                                        display: 'inline-block',
                                        textDecoration: 'none',
                                    }}
                                >
                                    Scale Your Presence
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Ad Spend Notice */}
                    <div className="row mt-3">
                        <div className="col-12 text-center">
                            <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic' }}>
                                *Ad spend not included
                            </p>
                        </div>
                    </div>

                    {/* Package Comparison Table */}
                    <div className="row mt-5">
                        <div className="col-12 text-center mb-5">
                            <h2
                                className="mb-3"
                                style={{
                                    fontSize: '44px',
                                    lineHeight: '1.3',
                                    fontWeight: 400,
                                    fontFamily:
                                        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                                }}
                            >
                                📊 <span style={{ fontWeight: 'bold' }}>Social Media Package</span> Comparison
                            </h2>
                        </div>
                    </div>

                    {/* Comparison Table */}
                    <div className="row">
                        <div className="col-12">
                            <div className="table-responsive">
                                <table
                                    className="table table-bordered text-center"
                                    style={{
                                        fontSize: '16px',
                                        backgroundColor: '#fff',
                                    }}
                                >
                                    <thead style={{ backgroundColor: '#000', color: '#fff' }}>
                                        <tr>
                                            <th style={{ padding: '20px', fontWeight: 600 }}>Features</th>
                                            <th style={{ padding: '20px', fontWeight: 600 }}>Starter</th>
                                            <th style={{ padding: '20px', fontWeight: 600, backgroundColor: '#FDB913', color: '#000' }}>
                                                Growth
                                            </th>
                                            <th style={{ padding: '20px', fontWeight: 600 }}>Premium</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{ padding: '16px', textAlign: 'left', fontWeight: 500 }}>
                                                Account Management
                                            </td>
                                            <td style={{ padding: '16px' }}>Yes</td>
                                            <td style={{ padding: '16px', backgroundColor: '#fffbf0' }}>Yes</td>
                                            <td style={{ padding: '16px' }}>Yes</td>
                                        </tr>
                                        <tr style={{ backgroundColor: '#f9f9f9' }}>
                                            <td style={{ padding: '16px', textAlign: 'left', fontWeight: 500 }}>Monthly Posts</td>
                                            <td style={{ padding: '16px' }}>12</td>
                                            <td style={{ padding: '16px', backgroundColor: '#fffbf0' }}>16–20</td>
                                            <td style={{ padding: '16px' }}>25+</td>
                                        </tr>
                                        <tr>
                                            <td style={{ padding: '16px', textAlign: 'left', fontWeight: 500 }}>Reels Strategy</td>
                                            <td style={{ padding: '16px' }}>No</td>
                                            <td style={{ padding: '16px', backgroundColor: '#fffbf0' }}>Yes</td>
                                            <td style={{ padding: '16px' }}>Yes</td>
                                        </tr>
                                        <tr style={{ backgroundColor: '#f9f9f9' }}>
                                            <td style={{ padding: '16px', textAlign: 'left', fontWeight: 500 }}>
                                                Paid Ads Management
                                            </td>
                                            <td style={{ padding: '16px' }}>No</td>
                                            <td style={{ padding: '16px', backgroundColor: '#fffbf0' }}>✔ (1 platform)</td>
                                            <td style={{ padding: '16px' }}>✔ (Multi-platform)</td>
                                        </tr>
                                        <tr>
                                            <td style={{ padding: '16px', textAlign: 'left', fontWeight: 500 }}>
                                                Engagement Strategy
                                            </td>
                                            <td style={{ padding: '16px' }}>Basic</td>
                                            <td style={{ padding: '16px', backgroundColor: '#fffbf0' }}>Advanced</td>
                                            <td style={{ padding: '16px' }}>High-Level</td>
                                        </tr>
                                        <tr style={{ backgroundColor: '#f9f9f9' }}>
                                            <td style={{ padding: '16px', textAlign: 'left', fontWeight: 500 }}>
                                                Monthly Reports
                                            </td>
                                            <td style={{ padding: '16px' }}>Yes</td>
                                            <td style={{ padding: '16px', backgroundColor: '#fffbf0' }}>Yes</td>
                                            <td style={{ padding: '16px' }}>Yes</td>
                                        </tr>
                                        <tr>
                                            <td style={{ padding: '16px', textAlign: 'left', fontWeight: 500 }}>Best For</td>
                                            <td style={{ padding: '16px' }}>Small Brands</td>
                                            <td style={{ padding: '16px', backgroundColor: '#fffbf0' }}>Growing Businesses</td>
                                            <td style={{ padding: '16px' }}>Established Brands</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Annual Plans Section */}
                    <div className="row mt-5">
                        <div className="col-12 text-center mb-5">
                            <h2
                                className="mb-3"
                                style={{
                                    fontSize: '44px',
                                    lineHeight: '1.3',
                                    fontWeight: 400,
                                    fontFamily:
                                        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                                }}
                            >
                                💼 <span style={{ fontWeight: 'bold' }}>Annual Plans</span> (Save More)
                            </h2>
                        </div>
                    </div>

                    <div className="row g-4">
                        {/* Starter Annual */}
                        <div className="col-lg-4">
                            <div
                                className="h-100 p-5"
                                style={{
                                    border: '1px solid #f0f0f0',
                                    backgroundColor: '#fff',
                                }}
                            >
                                <div className="mb-3">
                                    <span style={{ fontSize: '40px' }}>⭐</span>
                                </div>
                                <h3
                                    className="mb-3"
                                    style={{ fontSize: '26px', lineHeight: '1.3', fontWeight: 600, color: '#000' }}
                                >
                                    Starter Annual Plan
                                </h3>
                                <h4
                                    className="mb-2"
                                    style={{ fontSize: '32px', fontWeight: 'bold', color: '#000' }}
                                >
                                    ₹1,49,999<span style={{ fontSize: '18px', fontWeight: 400 }}> / year</span>
                                </h4>
                                <p
                                    className="mb-0"
                                    style={{ fontSize: '16px', lineHeight: '1.8', color: '#28a745', fontWeight: 600 }}
                                >
                                    (Save ₹30,000)
                                </p>
                            </div>
                        </div>

                        {/* Growth Annual */}
                        <div className="col-lg-4">
                            <div
                                className="h-100 p-5"
                                style={{
                                    border: '2px solid #FDB913',
                                    backgroundColor: '#fffbf0',
                                }}
                            >
                                <div className="mb-3">
                                    <span style={{ fontSize: '40px' }}>🚀</span>
                                </div>
                                <h3
                                    className="mb-3"
                                    style={{ fontSize: '26px', lineHeight: '1.3', fontWeight: 600, color: '#000' }}
                                >
                                    Growth Annual Plan
                                </h3>
                                <h4
                                    className="mb-2"
                                    style={{ fontSize: '32px', fontWeight: 'bold', color: '#000' }}
                                >
                                    ₹2,99,999<span style={{ fontSize: '18px', fontWeight: 400 }}> / year</span>
                                </h4>
                                <p
                                    className="mb-0"
                                    style={{ fontSize: '16px', lineHeight: '1.8', color: '#28a745', fontWeight: 600 }}
                                >
                                    (Save ₹60,000)
                                </p>
                            </div>
                        </div>

                        {/* Premium Annual */}
                        <div className="col-lg-4">
                            <div
                                className="h-100 p-5"
                                style={{
                                    border: '1px solid #f0f0f0',
                                    backgroundColor: '#fff',
                                }}
                            >
                                <div className="mb-3">
                                    <span style={{ fontSize: '40px' }}>🏆</span>
                                </div>
                                <h3
                                    className="mb-3"
                                    style={{ fontSize: '26px', lineHeight: '1.3', fontWeight: 600, color: '#000' }}
                                >
                                    Premium Annual Plan
                                </h3>
                                <h4
                                    className="mb-2"
                                    style={{ fontSize: '32px', fontWeight: 'bold', color: '#000' }}
                                >
                                    ₹4,99,999<span style={{ fontSize: '18px', fontWeight: 400 }}> / year</span>
                                </h4>
                                <p
                                    className="mb-0"
                                    style={{ fontSize: '16px', lineHeight: '1.8', color: '#28a745', fontWeight: 600 }}
                                >
                                    (Save ₹90,000)
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Annual Benefits */}
                    <div className="row mt-4">
                        <div className="col-12">
                            <div
                                className="p-4 rounded-4"
                                style={{ backgroundColor: '#f9f9f9', border: '1px solid #eee' }}
                            >
                                <ul
                                    className="list-unstyled mb-0"
                                    style={{ fontSize: '16px', lineHeight: '2', color: '#333' }}
                                >
                                    <li>Priority support</li>
                                    <li>Long-term growth planning</li>
                                    <li>Dedicated account manager (Premium)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Add-On Services Section */}
                    <div className="row mt-5">
                        <div className="col-12 text-center mb-5">
                            <h2
                                className="mb-3"
                                style={{
                                    fontSize: '44px',
                                    lineHeight: '1.3',
                                    fontWeight: 400,
                                    fontFamily:
                                        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                                }}
                            >
                                🎯 <span style={{ fontWeight: 'bold' }}>Add-On Services</span>
                            </h2>
                        </div>
                    </div>

                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div
                                className="d-flex justify-content-between align-items-center p-4"
                                style={{
                                    border: '1px solid #f0f0f0',
                                    backgroundColor: '#fff',
                                }}
                            >
                                <div>
                                    <h4 style={{ fontSize: '20px', fontWeight: 600, color: '#000', marginBottom: '4px' }}>
                                        Extra Reels (4 / month)
                                    </h4>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '24px', fontWeight: 'bold', color: '#000', marginBottom: 0 }}>
                                        ₹3,999
                                    </h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div
                                className="d-flex justify-content-between align-items-center p-4"
                                style={{
                                    border: '1px solid #f0f0f0',
                                    backgroundColor: '#fff',
                                }}
                            >
                                <div>
                                    <h4 style={{ fontSize: '20px', fontWeight: 600, color: '#000', marginBottom: '4px' }}>
                                        Influencer Collaboration Setup
                                    </h4>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '24px', fontWeight: 'bold', color: '#000', marginBottom: 0 }}>
                                        ₹4,999+
                                    </h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div
                                className="d-flex justify-content-between align-items-center p-4"
                                style={{
                                    border: '1px solid #f0f0f0',
                                    backgroundColor: '#fff',
                                }}
                            >
                                <div>
                                    <h4 style={{ fontSize: '20px', fontWeight: 600, color: '#000', marginBottom: '4px' }}>
                                        Ad Creative Design (Per Campaign)
                                    </h4>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '24px', fontWeight: 'bold', color: '#000', marginBottom: 0 }}>
                                        ₹2,999
                                    </h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div
                                className="d-flex justify-content-between align-items-center p-4"
                                style={{
                                    border: '1px solid #f0f0f0',
                                    backgroundColor: '#fff',
                                }}
                            >
                                <div>
                                    <h4 style={{ fontSize: '20px', fontWeight: 600, color: '#000', marginBottom: '4px' }}>
                                        Community Management (Advanced)
                                    </h4>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '24px', fontWeight: 'bold', color: '#000', marginBottom: 0 }}>
                                        ₹4,999
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="row mt-5">
                        <div className="col-12">
                            <div
                                className="text-center py-5 px-4 rounded-4"
                                style={{ backgroundColor: '#000', color: '#fff' }}
                            >
                                <h2
                                    className="mb-4"
                                    style={{
                                        fontSize: '40px',
                                        lineHeight: '1.3',
                                        fontWeight: 600,
                                        color: '#fff',
                                    }}
                                >
                                    🚀 Ready to grow your brand on social media?
                                </h2>
                                <p
                                    className="mb-5"
                                    style={{
                                        fontSize: '18px',
                                        lineHeight: '1.7',
                                        color: '#ddd',
                                        maxWidth: '800px',
                                        margin: '0 auto 40px',
                                    }}
                                >
                                    Let&apos;s build visibility, engagement, and real business results.
                                </p>
                                <div className="d-flex flex-wrap justify-content-center gap-3">
                                    <Link
                                        href="/contact"
                                        className="btn"
                                        style={{
                                            border: '2px solid #FDB913',
                                            borderRadius: '999px',
                                            padding: '14px 36px',
                                            fontSize: '16px',
                                            fontWeight: 600,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            backgroundColor: '#FDB913',
                                            color: '#000',
                                            display: 'inline-block',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        👉 Book a Free Strategy Call
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="btn"
                                        style={{
                                            border: '2px solid #fff',
                                            borderRadius: '999px',
                                            padding: '14px 36px',
                                            fontSize: '16px',
                                            fontWeight: 600,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            backgroundColor: 'transparent',
                                            color: '#fff',
                                            display: 'inline-block',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        👉 Get a Custom Quote
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="btn"
                                        style={{
                                            border: '2px solid #fff',
                                            borderRadius: '999px',
                                            padding: '14px 36px',
                                            fontSize: '16px',
                                            fontWeight: 600,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            backgroundColor: '#fff',
                                            color: '#000',
                                            display: 'inline-block',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        👉 Start Your Growth Journey
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
