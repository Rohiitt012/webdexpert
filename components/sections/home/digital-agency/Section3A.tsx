import Link from "next/link";

export default function Section3A() {
    return (
        <>
            {/*digital-agency home section 3A - Website Maintenance & Support Services Pricing*/}
            <section className="digital-agency-home-section-3a position-relative py-60 bg-white">
                <div className="container position-relative z-1">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 text-center mb-5">
                            <span className="content-top btn-text text-primary fw-semibold rounded-pill border border-primary px-3 py-2 bg-white">
                                Our Pricing
                            </span>
                            <h2 className="text-dark mt-3 mb-4 text-anime-style-2 fw-bold">
                                🔧 Website Maintenance &amp; Support Services
                            </h2>
                        </div>
                    </div>

                    {/* Individual Services */}
                    <div className="row g-1 mb-5">
                        {/* Service 1: Regular Updates & Backups */}
                        <div className="col-xl-4 col-lg-6">
                            <div className="h-100 border rounded-4 p-4 p-lg-5 bg-white shadow-sm">
                                <div className="d-flex align-items-center gap-2 mb-3">
                                    <span className="fs-3">🔄</span>
                                    <h4 className="text-dark mb-0">Regular Updates &amp; Backups</h4>
                                </div>
                                <div className="d-flex align-items-baseline mb-3">
                                    <span className="fs-1 fw-bold text-dark">₹2,499</span>
                                </div>
                                <p className="text-muted mb-4">Starting from ₹2,499 / month</p>
                                <p className="text-dark text-opacity-75 fs-7 mb-4">
                                    We ensure your website remains up-to-date, stable, and protected with regular system updates and automated backups.
                                </p>
                                <Link href="/contact" className="btn btn-primary w-100 mb-4 hover-up">
                                    Get Started
                                </Link>
                                <div className="text-start small text-muted">
                                    <ul className="list-unstyled mb-0">
                                        <li className="mb-2 d-flex align-items-start">
                                            <i className="bi bi-check-lg text-success me-2 mt-1" />
                                            <span>WordPress / CMS core updates</span>
                                        </li>
                                        <li className="mb-2 d-flex align-items-start">
                                            <i className="bi bi-check-lg text-success me-2 mt-1" />
                                            <span>Theme &amp; plugin updates</span>
                                        </li>
                                        <li className="mb-2 d-flex align-items-start">
                                            <i className="bi bi-check-lg text-success me-2 mt-1" />
                                            <span>Automated daily / weekly backups</span>
                                        </li>
                                        <li className="mb-2 d-flex align-items-start">
                                            <i className="bi bi-check-lg text-success me-2 mt-1" />
                                            <span>Quick rollback in case of issues</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Service 2: Security Fixes & Malware Protection */}
                        <div className="col-xl-4 col-lg-6">
                            <div className="h-100 border rounded-4 p-4 p-lg-5 bg-white shadow-sm">
                                <div className="d-flex align-items-center gap-2 mb-3">
                                    <span className="fs-3">🔐</span>
                                    <h4 className="text-dark mb-0">Security Fixes &amp; Malware Protection</h4>
                                </div>
                                <div className="d-flex align-items-baseline mb-3">
                                    <span className="fs-1 fw-bold text-dark">₹3,499</span>
                                </div>
                                <p className="text-muted mb-4">Starting from ₹3,499 / month</p>
                                <p className="text-dark text-opacity-75 fs-7 mb-4">
                                    We proactively secure your website against threats, vulnerabilities, and malware attacks.
                                </p>
                                <Link href="/contact" className="btn btn-primary w-100 mb-4 hover-up">
                                    Get Started
                                </Link>
                                <div className="text-start small text-muted">
                                    <ul className="list-unstyled mb-0">
                                        <li className="mb-2 d-flex align-items-start">
                                            <i className="bi bi-check-lg text-success me-2 mt-1" />
                                            <span>Security monitoring &amp; vulnerability fixes</span>
                                        </li>
                                        <li className="mb-2 d-flex align-items-start">
                                            <i className="bi bi-check-lg text-success me-2 mt-1" />
                                            <span>Malware scanning &amp; removal</span>
                                        </li>
                                        <li className="mb-2 d-flex align-items-start">
                                            <i className="bi bi-check-lg text-success me-2 mt-1" />
                                            <span>Firewall &amp; brute-force protection</span>
                                        </li>
                                        <li className="mb-2 d-flex align-items-start">
                                            <i className="bi bi-check-lg text-success me-2 mt-1" />
                                            <span>Login &amp; access hardening</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Service 3: Content & Product Updates */}
                        <div className="col-xl-4 col-lg-6">
                            <div className="h-100 border rounded-4 p-4 p-lg-5 bg-white shadow-sm">
                                <div className="d-flex align-items-center gap-2 mb-3">
                                    <span className="fs-3">📝</span>
                                    <h4 className="text-dark mb-0">Content &amp; Product Updates</h4>
                                </div>
                                <div className="d-flex align-items-baseline mb-3">
                                    <span className="fs-1 fw-bold text-dark">₹1,999</span>
                                </div>
                                <p className="text-muted mb-4">Starting from ₹1,999 / month</p>
                                <p className="text-dark text-opacity-75 fs-7 mb-4">
                                    We handle routine content and product updates to keep your website accurate and up to date.
                                </p>
                                <Link href="/contact" className="btn btn-primary w-100 mb-4 hover-up">
                                    Get Started
                                </Link>
                                <div className="text-start small text-muted">
                                    <ul className="list-unstyled mb-0">
                                        <li className="mb-2 d-flex align-items-start">
                                            <i className="bi bi-check-lg text-success me-2 mt-1" />
                                            <span>Content text updates</span>
                                        </li>
                                        <li className="mb-2 d-flex align-items-start">
                                            <i className="bi bi-check-lg text-success me-2 mt-1" />
                                            <span>Product uploads &amp; edits</span>
                                        </li>
                                        <li className="mb-2 d-flex align-items-start">
                                            <i className="bi bi-check-lg text-success me-2 mt-1" />
                                            <span>Image replacements</span>
                                        </li>
                                        <li className="mb-2 d-flex align-items-start">
                                            <i className="bi bi-check-lg text-success me-2 mt-1" />
                                            <span>Minor layout adjustments</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Monthly Maintenance Packages */}
                    <div className="row mt-5">
                        <div className="col-xl-10 mx-auto">
                            <div className="border rounded-4 p-4 p-lg-5 bg-light">
                                <h4 className="text-dark mb-4 text-center">📦 Monthly Maintenance Packages</h4>
                                <div className="row g-1">
                                    {/* Basic Care Plan */}
                                    <div className="col-md-4">
                                        <div className="d-flex flex-column justify-content-between h-100 bg-white rounded-4 p-4 shadow-sm border">
                                            <div>
                                                <div className="d-flex align-items-center gap-2 mb-3">
                                                    <span className="fs-3">⭐</span>
                                                    <h5 className="text-dark mb-0">Basic Care Plan</h5>
                                                </div>
                                                <div className="d-flex align-items-baseline mb-3">
                                                    <span className="fs-1 fw-bold text-dark">₹3,999</span>
                                                </div>
                                                <p className="text-muted mb-4">/ month</p>
                                                <ul className="list-unstyled mb-0 text-start small text-muted">
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-lg text-success me-2 mt-1" />
                                                        <span>Regular updates &amp; backups</span>
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-lg text-success me-2 mt-1" />
                                                        <span>Basic security monitoring</span>
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-lg text-success me-2 mt-1" />
                                                        <span>Up to 3 content updates</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="mt-4">
                                                <p className="fw-semibold text-primary mb-0">Best for: Small business websites</p>
                                                <Link href="/contact" className="btn btn-primary w-100 mt-3 hover-up">
                                                    Choose Plan
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Business Care Plan (Most Popular) */}
                                    <div className="col-md-4">
                                        <div
                                            className="d-flex flex-column justify-content-between h-100 rounded-4 p-4 shadow-sm position-relative"
                                            style={{ backgroundColor: '#000', border: '2px solid #FDB913', color: '#fff' }}
                                        >
                                            <div className="position-absolute top-0 start-50 translate-middle-x mt-0">
                                                <span
                                                    className="badge rounded-pill px-3 py-2 fw-semibold"
                                                    style={{ backgroundColor: '#FDB913', color: '#000' }}
                                                >
                                                    Most Popular
                                                </span>
                                            </div>
                                            <div className="mt-4 pt-3">
                                                <div className="d-flex align-items-center gap-2 mb-3">
                                                    <span className="fs-3">🚀</span>
                                                    <h5 className="mb-0" style={{ color: '#FDB913' }}>Business Care Plan</h5>
                                                </div>
                                                <div className="d-flex align-items-baseline mb-3">
                                                    <span className="fs-1 fw-bold">₹6,999</span>
                                                </div>
                                                <p className="mb-4" style={{ color: '#ccc' }}>/ month</p>
                                                <ul className="list-unstyled mb-0 text-start small">
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-lg me-2 mt-1" style={{ color: '#FDB913' }} />
                                                        <span>Regular updates &amp; backups</span>
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-lg me-2 mt-1" style={{ color: '#FDB913' }} />
                                                        <span>Advanced security &amp; malware protection</span>
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-lg me-2 mt-1" style={{ color: '#FDB913' }} />
                                                        <span>Up to 10 content / product updates</span>
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-lg me-2 mt-1" style={{ color: '#FDB913' }} />
                                                        <span>Performance monitoring</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="mt-4">
                                                <p className="fw-semibold mb-0" style={{ color: '#FDB913' }}>Best for: Active business &amp; trading websites</p>
                                                <Link
                                                    href="/contact"
                                                    className="btn w-100 mt-3 hover-up"
                                                    style={{
                                                        backgroundColor: '#FDB913',
                                                        color: '#000',
                                                        fontWeight: 'bold',
                                                        border: 'none'
                                                    }}
                                                >
                                                    Choose Plan
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Premium Care Plan */}
                                    <div className="col-md-4">
                                        <div className="d-flex flex-column justify-content-between h-100 bg-white rounded-4 p-4 shadow-sm border">
                                            <div>
                                                <div className="d-flex align-items-center gap-2 mb-3">
                                                    <span className="fs-3">🏆</span>
                                                    <h5 className="text-dark mb-0">Premium Care Plan</h5>
                                                </div>
                                                <div className="d-flex align-items-baseline mb-3">
                                                    <span className="fs-1 fw-bold text-dark">₹11,999</span>
                                                </div>
                                                <p className="text-muted mb-4">/ month</p>
                                                <ul className="list-unstyled mb-0 text-start small text-muted">
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-lg text-success me-2 mt-1" />
                                                        <span>Priority updates &amp; backups</span>
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-lg text-success me-2 mt-1" />
                                                        <span>Advanced security &amp; firewall protection</span>
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-lg text-success me-2 mt-1" />
                                                        <span>Unlimited content &amp; product updates</span>
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-lg text-success me-2 mt-1" />
                                                        <span>Performance &amp; uptime monitoring</span>
                                                    </li>
                                                    <li className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-check-lg text-success me-2 mt-1" />
                                                        <span>Priority support</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="mt-4">
                                                <p className="fw-semibold text-primary mb-0">Best for: High-traffic &amp; enterprise websites</p>
                                                <Link href="/contact" className="btn btn-primary w-100 mt-3 hover-up">
                                                    Choose Plan
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-top text-center">
                                    <p className="text-muted mb-0 small">
                                        <strong className="text-dark">📌 Professional Note:</strong> Maintenance plans are billed monthly and can be customized based on website size and activity level.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

