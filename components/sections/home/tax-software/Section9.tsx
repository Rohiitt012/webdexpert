import Link from "next/link";

export default function Section9() {
    return (
        <>
            {/*tax-software-home section 9 - Tax Software Pricing*/}
            <section className="tax-software-home-section-9 position-relative overflow-hidden py-5 bg-white">
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
                                <span style={{ fontWeight: 'bold' }}>Website Design & Development</span> — Pricing Plans
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
                                Choose the perfect plan to build your online presence, grow your business, and scale your brand.
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
                                    Starter Website
                                </h3>
                                <div className="mb-4">
                                    <h4
                                        style={{
                                            fontSize: '36px',
                                            fontWeight: 'bold',
                                            color: '#000',
                                        }}
                                    >
                                        ₹29,999<span style={{ fontSize: '18px', fontWeight: 400 }}> / project</span>
                                    </h4>
                                    <p style={{ fontSize: '16px', color: '#666' }}>
                                        Perfect for small businesses and startups.
                                    </p>
                                </div>
                                <ul
                                    className="list-unstyled text-start mb-4"
                                    style={{ fontSize: '16px', lineHeight: '2', color: '#333' }}
                                >
                                    <li>Up to 5 pages</li>
                                    <li>Responsive design</li>
                                    <li>Basic SEO setup</li>
                                    <li>Contact form integration</li>
                                    <li>30 days support</li>
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
                                    Business Website
                                </h3>
                                <div className="mb-4">
                                    <h4
                                        style={{
                                            fontSize: '36px',
                                            fontWeight: 'bold',
                                            color: '#FDB913',
                                        }}
                                    >
                                        ₹59,999<span style={{ fontSize: '18px', fontWeight: 400, color: '#fff' }}> / project</span>
                                    </h4>
                                    <p style={{ fontSize: '16px', color: '#ddd' }}>
                                        Designed for growing businesses.
                                    </p>
                                </div>
                                <ul
                                    className="list-unstyled text-start mb-4"
                                    style={{ fontSize: '16px', lineHeight: '2', color: '#fff' }}
                                >
                                    <li>Up to 10 pages</li>
                                    <li>Premium responsive design</li>
                                    <li>Advanced SEO optimization</li>
                                    <li>CMS integration</li>
                                    <li>90 days support & maintenance</li>
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
                                    Grow Your Business
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
                                    Enterprise Website
                                </h3>
                                <div className="mb-4">
                                    <h4
                                        style={{
                                            fontSize: '36px',
                                            fontWeight: 'bold',
                                            color: '#000',
                                        }}
                                    >
                                        ₹1,49,999<span style={{ fontSize: '18px', fontWeight: 400 }}> / project</span>
                                    </h4>
                                    <p style={{ fontSize: '16px', color: '#666' }}>
                                        Complete solution for large businesses.
                                    </p>
                                </div>
                                <ul
                                    className="list-unstyled text-start mb-4"
                                    style={{ fontSize: '16px', lineHeight: '2', color: '#333' }}
                                >
                                    <li>Unlimited pages</li>
                                    <li>Custom design & development</li>
                                    <li>Enterprise SEO & analytics</li>
                                    <li>Custom CMS & integrations</li>
                                    <li>1 year support & maintenance</li>
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
                                    Scale Your Brand
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="row mt-80">
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
                                    🚀 Ready to build your dream website?
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
                                    Let&apos;s create a website that drives real business results.
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
                                        👉 Get Free Consultation
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
                                        👉 View Our Portfolio
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
