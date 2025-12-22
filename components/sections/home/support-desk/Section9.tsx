import Link from "next/link";

export default function Section9() {
    return (
        <>
            {/*support-desk section 9 - Cloud, Security & Performance Pricing*/}
            <section className="support-desk-section-9 overflow-hidden py-120 bg-white">
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
                                ☁️ <span style={{ fontWeight: 'bold' }}>Cloud, Security & Performance</span> — Pricing Cards
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
                                Protect, optimize, and scale your website with enterprise-grade security and performance solutions.
                            </p>
                        </div>
                    </div>

                    {/* Individual Services Row */}
                    <div className="row g-4">
                        {/* Cloudflare CDN */}
                        <div className="col-md-6 col-lg-3">
                            <div
                                className="h-100 text-center px-4 py-5 rounded-4"
                                style={{ backgroundColor: '#f9f9f9', border: '2px solid #eee' }}
                            >
                                <div className="mb-3">
                                    <span style={{ fontSize: '48px' }}>🛡</span>
                                </div>
                                <h3
                                    className="mb-3"
                                    style={{
                                        fontSize: '24px',
                                        lineHeight: '1.3',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Cloudflare CDN & DDoS
                                </h3>
                                <div className="mb-4">
                                    <h4
                                        style={{
                                            fontSize: '32px',
                                            fontWeight: 'bold',
                                            color: '#000',
                                        }}
                                    >
                                        ₹4,999<span style={{ fontSize: '16px', fontWeight: 400 }}> / year</span>
                                    </h4>
                                    <p style={{ fontSize: '14px', color: '#666' }}>
                                        Secure and accelerate your website using Cloudflare's global network.
                                    </p>
                                </div>
                                <ul
                                    className="list-unstyled text-start mb-4"
                                    style={{ fontSize: '14px', lineHeight: '1.8', color: '#333' }}
                                >
                                    <li>✔ Cloudflare CDN setup</li>
                                    <li>✔ DDoS & bot protection</li>
                                    <li>✔ DNS & SSL configuration</li>
                                    <li>✔ Performance caching rules</li>
                                </ul>
                                <Link
                                    href="/contact"
                                    className="btn btn-primary hover-up"
                                    style={{
                                        border: '2px solid #000',
                                        borderRadius: '999px',
                                        padding: '10px 28px',
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        backgroundColor: '#000',
                                        color: '#fff',
                                        display: 'inline-block',
                                        textDecoration: 'none',
                                    }}
                                >
                                    Protect My Website
                                </Link>
                            </div>
                        </div>

                        {/* Malware Removal */}
                        <div className="col-md-6 col-lg-3">
                            <div
                                className="h-100 text-center px-4 py-5 rounded-4"
                                style={{ backgroundColor: '#f9f9f9', border: '2px solid #eee' }}
                            >
                                <div className="mb-3">
                                    <span style={{ fontSize: '48px' }}>🔐</span>
                                </div>
                                <h3
                                    className="mb-3"
                                    style={{
                                        fontSize: '24px',
                                        lineHeight: '1.3',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Malware & Firewall
                                </h3>
                                <div className="mb-4">
                                    <h4
                                        style={{
                                            fontSize: '32px',
                                            fontWeight: 'bold',
                                            color: '#000',
                                        }}
                                    >
                                        ₹6,999<span style={{ fontSize: '16px', fontWeight: 400 }}> (One-Time)</span>
                                    </h4>
                                    <p style={{ fontSize: '14px', color: '#666' }}>
                                        Complete website cleanup and long-term security hardening.
                                    </p>
                                </div>
                                <ul
                                    className="list-unstyled text-start mb-4"
                                    style={{ fontSize: '14px', lineHeight: '1.8', color: '#333' }}
                                >
                                    <li>✔ Malware scan & removal</li>
                                    <li>✔ Infected file cleanup</li>
                                    <li>✔ Firewall & login protection</li>
                                    <li>✔ Security audit report</li>
                                </ul>
                                <Link
                                    href="/contact"
                                    className="btn btn-primary hover-up"
                                    style={{
                                        border: '2px solid #000',
                                        borderRadius: '999px',
                                        padding: '10px 28px',
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        backgroundColor: '#000',
                                        color: '#fff',
                                        display: 'inline-block',
                                        textDecoration: 'none',
                                    }}
                                >
                                    Secure My Website
                                </Link>
                            </div>
                        </div>

                        {/* Website Migration */}
                        <div className="col-md-6 col-lg-3">
                            <div
                                className="h-100 text-center px-4 py-5 rounded-4"
                                style={{ backgroundColor: '#f9f9f9', border: '2px solid #eee' }}
                            >
                                <div className="mb-3">
                                    <span style={{ fontSize: '48px' }}>🔄</span>
                                </div>
                                <h3
                                    className="mb-3"
                                    style={{
                                        fontSize: '24px',
                                        lineHeight: '1.3',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Website Migration
                                </h3>
                                <div className="mb-4">
                                    <h4
                                        style={{
                                            fontSize: '32px',
                                            fontWeight: 'bold',
                                            color: '#000',
                                        }}
                                    >
                                        ₹2,999
                                    </h4>
                                    <p style={{ fontSize: '14px', color: '#666' }}>
                                        Smooth and safe website migration with minimal downtime.
                                    </p>
                                </div>
                                <ul
                                    className="list-unstyled text-start mb-4"
                                    style={{ fontSize: '14px', lineHeight: '1.8', color: '#333' }}
                                >
                                    <li>✔ Hosting / server migration</li>
                                    <li>✔ Database & file transfer</li>
                                    <li>✔ Domain & DNS updates</li>
                                    <li>✔ Post-migration testing</li>
                                </ul>
                                <Link
                                    href="/contact"
                                    className="btn btn-primary hover-up"
                                    style={{
                                        border: '2px solid #000',
                                        borderRadius: '999px',
                                        padding: '10px 28px',
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        backgroundColor: '#000',
                                        color: '#fff',
                                        display: 'inline-block',
                                        textDecoration: 'none',
                                    }}
                                >
                                    Migrate My Website
                                </Link>
                            </div>
                        </div>

                        {/* Speed Optimization */}
                        <div className="col-md-6 col-lg-3">
                            <div
                                className="h-100 text-center px-4 py-5 rounded-4"
                                style={{ backgroundColor: '#f9f9f9', border: '2px solid #eee' }}
                            >
                                <div className="mb-3">
                                    <span style={{ fontSize: '48px' }}>⚡</span>
                                </div>
                                <h3
                                    className="mb-3"
                                    style={{
                                        fontSize: '24px',
                                        lineHeight: '1.3',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Speed Optimization
                                </h3>
                                <div className="mb-4">
                                    <h4
                                        style={{
                                            fontSize: '32px',
                                            fontWeight: 'bold',
                                            color: '#000',
                                        }}
                                    >
                                        ₹7,999
                                    </h4>
                                    <p style={{ fontSize: '14px', color: '#666' }}>
                                        Advanced optimization to improve speed and Core Web Vitals.
                                    </p>
                                </div>
                                <ul
                                    className="list-unstyled text-start mb-4"
                                    style={{ fontSize: '14px', lineHeight: '1.8', color: '#333' }}
                                >
                                    <li>✔ Server tuning & caching</li>
                                    <li>✔ Page speed optimization</li>
                                    <li>✔ Image & asset compression</li>
                                    <li>✔ Performance audit report</li>
                                </ul>
                                <Link
                                    href="/contact"
                                    className="btn btn-primary hover-up"
                                    style={{
                                        border: '2px solid #000',
                                        borderRadius: '999px',
                                        padding: '10px 28px',
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        backgroundColor: '#000',
                                        color: '#fff',
                                        display: 'inline-block',
                                        textDecoration: 'none',
                                    }}
                                >
                                    Boost Website Speed
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Service Comparison Table */}
                    <div className="row mt-160">
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
                                📊 <span style={{ fontWeight: 'bold' }}>Service Comparison</span> Table
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
                                            <th style={{ padding: '20px', fontWeight: 600 }}>Cloudflare & DDoS</th>
                                            <th style={{ padding: '20px', fontWeight: 600 }}>Malware & Firewall</th>
                                            <th style={{ padding: '20px', fontWeight: 600 }}>Migration</th>
                                            <th style={{ padding: '20px', fontWeight: 600 }}>Speed Optimization</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{ padding: '16px', textAlign: 'left', fontWeight: 500 }}>
                                                Security Protection
                                            </td>
                                            <td style={{ padding: '16px' }}>✔</td>
                                            <td style={{ padding: '16px' }}>✔</td>
                                            <td style={{ padding: '16px' }}>✖</td>
                                            <td style={{ padding: '16px' }}>✖</td>
                                        </tr>
                                        <tr style={{ backgroundColor: '#f9f9f9' }}>
                                            <td style={{ padding: '16px', textAlign: 'left', fontWeight: 500 }}>Performance Boost</td>
                                            <td style={{ padding: '16px' }}>✔</td>
                                            <td style={{ padding: '16px' }}>✖</td>
                                            <td style={{ padding: '16px' }}>✖</td>
                                            <td style={{ padding: '16px' }}>✔</td>
                                        </tr>
                                        <tr>
                                            <td style={{ padding: '16px', textAlign: 'left', fontWeight: 500 }}>Downtime Prevention</td>
                                            <td style={{ padding: '16px' }}>✔</td>
                                            <td style={{ padding: '16px' }}>✔</td>
                                            <td style={{ padding: '16px' }}>✔</td>
                                            <td style={{ padding: '16px' }}>✖</td>
                                        </tr>
                                        <tr style={{ backgroundColor: '#f9f9f9' }}>
                                            <td style={{ padding: '16px', textAlign: 'left', fontWeight: 500 }}>
                                                Firewall Setup
                                            </td>
                                            <td style={{ padding: '16px' }}>✔</td>
                                            <td style={{ padding: '16px' }}>✔</td>
                                            <td style={{ padding: '16px' }}>✖</td>
                                            <td style={{ padding: '16px' }}>✖</td>
                                        </tr>
                                        <tr>
                                            <td style={{ padding: '16px', textAlign: 'left', fontWeight: 500 }}>Best For</td>
                                            <td style={{ padding: '16px' }}>Protection & Speed</td>
                                            <td style={{ padding: '16px' }}>Cleanup & Safety</td>
                                            <td style={{ padding: '16px' }}>Server Change</td>
                                            <td style={{ padding: '16px' }}>Faster Website</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Recommended Packages Section */}
                    <div className="row mt-160">
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
                                📦 <span style={{ fontWeight: 'bold' }}>Recommended Packages</span>
                            </h2>
                        </div>
                    </div>

                    <div className="row g-4">
                        {/* Essential Package */}
                        <div className="col-lg-4">
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
                                    Essential Security
                                </h3>
                                <div className="mb-4">
                                    <h4
                                        style={{
                                            fontSize: '36px',
                                            fontWeight: 'bold',
                                            color: '#000',
                                        }}
                                    >
                                        ₹9,999
                                    </h4>
                                </div>
                                <ul
                                    className="list-unstyled text-start mb-4"
                                    style={{ fontSize: '16px', lineHeight: '2', color: '#333' }}
                                >
                                    <li>✔ Cloudflare CDN & DDoS protection</li>
                                    <li>✔ Basic firewall setup</li>
                                    <li>✔ Website migration (if required)</li>
                                </ul>
                                <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic' }}>
                                    Best for: Small & medium business websites
                                </p>
                            </div>
                        </div>

                        {/* Performance Package */}
                        <div className="col-lg-4">
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
                                    Performance & Protection
                                </h3>
                                <div className="mb-4">
                                    <h4
                                        style={{
                                            fontSize: '36px',
                                            fontWeight: 'bold',
                                            color: '#FDB913',
                                        }}
                                    >
                                        ₹19,999
                                    </h4>
                                </div>
                                <ul
                                    className="list-unstyled text-start mb-4"
                                    style={{ fontSize: '16px', lineHeight: '2', color: '#fff' }}
                                >
                                    <li>✔ Malware removal & firewall setup</li>
                                    <li>✔ Cloudflare advanced configuration</li>
                                    <li>✔ Server & speed optimization</li>
                                    <li>✔ Security & performance audit</li>
                                </ul>
                                <p style={{ fontSize: '14px', color: '#ddd', fontStyle: 'italic' }}>
                                    Best for: Trading & business websites
                                </p>
                            </div>
                        </div>

                        {/* Enterprise Package */}
                        <div className="col-lg-4">
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
                                    Enterprise Cloud
                                </h3>
                                <div className="mb-4">
                                    <h4
                                        style={{
                                            fontSize: '36px',
                                            fontWeight: 'bold',
                                            color: '#000',
                                        }}
                                    >
                                        ₹34,999
                                    </h4>
                                </div>
                                <ul
                                    className="list-unstyled text-start mb-4"
                                    style={{ fontSize: '16px', lineHeight: '2', color: '#333' }}
                                >
                                    <li>✔ Advanced Cloudflare setup</li>
                                    <li>✔ Malware cleanup & hardening</li>
                                    <li>✔ Server-level optimization</li>
                                    <li>✔ Zero-downtime migration</li>
                                    <li>✔ Priority support</li>
                                </ul>
                                <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic' }}>
                                    Best for: High-traffic & enterprise websites
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="row mt-160">
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
                                    }}
                                >
                                    🔔 Secure, optimize, and scale your website with confidence.
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
                                    We protect your digital assets while ensuring peak performance.
                                </p>
                                <div className="d-flex flex-wrap justify-content-center gap-3">
                                    <Link
                                        href="/contact"
                                        className="btn hover-up"
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
                                        👉 Get a Free Website Audit
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="btn hover-up"
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
                                        👉 Talk to a Security Expert
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="btn hover-up"
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
                                        👉 Protect & Optimize Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Professional Disclaimer */}
                    <div className="row mt-5">
                        <div className="col-12">
                            <div
                                className="p-4 rounded-4"
                                style={{ backgroundColor: '#fff9e6', border: '1px solid #ffd700' }}
                            >
                                <p
                                    className="mb-0"
                                    style={{ fontSize: '14px', lineHeight: '1.8', color: '#666', textAlign: 'center' }}
                                >
                                    📌 <strong>Professional Disclaimer:</strong> Cloudflare paid plans, hosting charges, or third-party licenses (if any) are billed separately. Pricing may vary based on website size and complexity.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

