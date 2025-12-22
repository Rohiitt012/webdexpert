import Link from "next/link";

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
        <path
            d="M9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0ZM7.64486 13.1158L3.76768 9.23858L5.1799 7.82636L7.64486 10.2913L12.8201 5.1161L14.2323 6.52832L7.64486 13.1158Z"
            fill="#794AFF"
        />
    </svg>
);

export default function Section4() {
    return (
        <section className="tax-software-section-4 position-relative overflow-hidden py-120 bg-white">
            <div className="container-fluid px-4">
                {/* Intro block */}
                <div className="row justify-content-center text-center mb-6">
                    <div className="col-xl-8 col-lg-10">
                        <span className="btn-text text-primary">our plans</span>
                        <h2 className="text-dark my-3">
                            Simple &amp; Affordable <span className="text-primary text-decoration-underline">Website Design Plans</span>
                        </h2>
                        <p className="pb-3">
                            Choose a website design plan that matches your business needs—from professional business websites to e-commerce stores, landing pages, and custom web applications.
                        </p>
                    </div>
                </div>

                {/* Pricing Cards - 4 Services */}
                <div className="row g-4 mb-5">
                    {/* Business Website */}
                    <div className="col-lg-3 col-md-6">
                        <div className="card-pricing rounded-4 border p-md-6 p-4 h-100">
                            <div className="d-flex align-items-center gap-2 mb-3">
                                <span className="fs-3">💼</span>
                                <span className="text-primary btn-text fw-bold">Business Website</span>
                            </div>
                            <h1 className="mb-3">
                                ₹19,999 <span className="fs-7 text-muted">/ one-time</span>
                            </h1>
                            <p className="fs-7 mb-4">Starting from ₹19,999</p>
                            <p className="fs-7 mb-4 text-muted">Professional business websites designed for credibility, performance, and lead generation.</p>
                            <Link href="/contact" className="btn btn-outline-dark w-100 mb-4 mt-2 hover-up">
                                Get Your Business Website
                            </Link>
                            <span className="btn-text">What's included:</span>
                            <ul className="list-unstyled mt-3 mb-0">
                                <li className="d-flex border-top py-2">
                                    <CheckIcon />
                                    <p className="fs-7 mb-0 ms-2">Custom UI design</p>
                                </li>
                                <li className="d-flex border-top py-2">
                                    <CheckIcon />
                                    <p className="fs-7 mb-0 ms-2">Mobile-responsive layout</p>
                                </li>
                                <li className="d-flex border-top py-2">
                                    <CheckIcon />
                                    <p className="fs-7 mb-0 ms-2">SEO-optimized structure</p>
                                </li>
                                <li className="d-flex border-top py-2">
                                    <CheckIcon />
                                    <p className="fs-7 mb-0 ms-2">Contact &amp; inquiry forms</p>
                                </li>
                                <li className="d-flex border-top pt-2">
                                    <CheckIcon />
                                    <p className="fs-7 mb-0 ms-2">Up to 8 pages</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* E-commerce Website */}
                    <div className="col-lg-3 col-md-6">
                        <div className="card-pricing rounded-4 border border-primary p-md-6 p-4 h-100 position-relative">
                            <span className="sale-off text-primary fs-8 position-absolute top-0 end-0 me-4 mt-3 px-3">Popular</span>
                            <div className="d-flex align-items-center gap-2 mb-3">
                                <span className="fs-3">🛒</span>
                                <span className="text-primary btn-text fw-bold">E-commerce Website</span>
                            </div>
                            <p className="fs-7 mb-2 text-muted">(Shopify / WooCommerce)</p>
                            <h1 className="mb-3">
                                ₹29,999 <span className="fs-7 text-muted">/ one-time</span>
                            </h1>
                            <p className="fs-7 mb-4">Starting from ₹29,999</p>
                            <p className="fs-7 mb-4 text-muted">Scalable e-commerce solutions built to drive sales and manage growth effortlessly.</p>
                            <Link href="/contact" className="btn btn-primary border-dark w-100 mb-4 mt-2 hover-up">
                                Launch Your Online Store
                            </Link>
                            <span className="btn-text">What's included:</span>
                            <ul className="list-unstyled mt-3 mb-0">
                                <li className="d-flex border-top border-opacity-25 py-2">
                                    <CheckIcon />
                                    <p className="fs-7 mb-0 ms-2">Store &amp; product setup</p>
                                </li>
                                <li className="d-flex border-top border-opacity-25 py-2">
                                    <CheckIcon />
                                    <p className="fs-7 mb-0 ms-2">Payment gateway integration</p>
                                </li>
                                <li className="d-flex border-top border-opacity-25 py-2">
                                    <CheckIcon />
                                    <p className="fs-7 mb-0 ms-2">Order &amp; inventory management</p>
                                </li>
                                <li className="d-flex border-top border-opacity-25 py-2">
                                    <CheckIcon />
                                    <p className="fs-7 mb-0 ms-2">Secure &amp; mobile-friendly design</p>
                                </li>
                                <li className="d-flex border-top border-opacity-25 pt-2">
                                    <CheckIcon />
                                    <p className="fs-7 mb-0 ms-2">Basic performance optimization</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Landing Pages & Funnels */}
                    <div className="col-lg-3 col-md-6">
                        <div className="card-pricing rounded-4 border p-md-6 p-4 h-100">
                            <div className="d-flex align-items-center gap-2 mb-3">
                                <span className="fs-3">🎯</span>
                                <span className="text-primary btn-text fw-bold">Landing Pages &amp; Funnels</span>
                            </div>
                            <h1 className="mb-3">
                                ₹9,999 <span className="fs-7 text-muted">/ one-time</span>
                            </h1>
                            <p className="fs-7 mb-4">Starting from ₹9,999</p>
                            <p className="fs-7 mb-4 text-muted">High-converting landing pages optimized for campaigns, ads, and lead generation.</p>
                            <Link href="/contact" className="btn btn-outline-dark w-100 mb-4 mt-2 hover-up">
                                Build High-Converting Pages
                            </Link>
                            <span className="btn-text">What's included:</span>
                            <ul className="list-unstyled mt-3 mb-0">
                                <li className="d-flex border-top py-2">
                                    <CheckIcon />
                                    <p className="fs-7 mb-0 ms-2">Conversion-focused design</p>
                                </li>
                                <li className="d-flex border-top py-2">
                                    <CheckIcon />
                                    <p className="fs-7 mb-0 ms-2">Lead forms &amp; CTAs</p>
                                </li>
                                <li className="d-flex border-top py-2">
                                    <CheckIcon />
                                    <p className="fs-7 mb-0 ms-2">Fast loading speed</p>
                                </li>
                                <li className="d-flex border-top pt-2">
                                    <CheckIcon />
                                    <p className="fs-7 mb-0 ms-2">Analytics &amp; tracking setup</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Custom Web Applications */}
                    <div className="col-lg-3 col-md-6">
                        <div className="card-pricing rounded-4 border p-md-6 p-4 h-100">
                            <div className="d-flex align-items-center gap-2 mb-3">
                                <span className="fs-3">🧩</span>
                                <span className="text-primary btn-text fw-bold">Custom Web Applications</span>
                            </div>
                            <h1 className="mb-3">
                                ₹59,999 <span className="fs-7 text-muted">/ one-time</span>
                            </h1>
                            <p className="fs-7 mb-4">Starting from ₹59,999</p>
                            <p className="fs-7 mb-4 text-muted">Custom-built web applications tailored to complex business requirements.</p>
                            <Link href="/contact" className="btn btn-outline-dark w-100 mb-4 mt-2 hover-up">
                                Request Custom Development
                            </Link>
                            <span className="btn-text">What's included:</span>
                            <ul className="list-unstyled mt-3 mb-0">
                                <li className="d-flex border-top py-2">
                                    <CheckIcon />
                                    <p className="fs-7 mb-0 ms-2">Custom UI/UX &amp; backend logic</p>
                                </li>
                                <li className="d-flex border-top py-2">
                                    <CheckIcon />
                                    <p className="fs-7 mb-0 ms-2">Secure authentication &amp; APIs</p>
                                </li>
                                <li className="d-flex border-top py-2">
                                    <CheckIcon />
                                    <p className="fs-7 mb-0 ms-2">Scalable architecture</p>
                                </li>
                                <li className="d-flex border-top pt-2">
                                    <CheckIcon />
                                    <p className="fs-7 mb-0 ms-2">Performance &amp; security optimization</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="row mt-5 mb-5">
                    <div className="col-12">
                        <div className="text-center mb-4">
                            <h3 className="text-dark mb-3">📊 Feature Comparison</h3>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-bordered text-center" style={{ fontSize: '14px' }}>
                                <thead style={{ backgroundColor: '#f9fafb' }}>
                                    <tr>
                                        <th className="text-start fw-bold">Features</th>
                                        <th className="fw-bold">Business Website</th>
                                        <th className="fw-bold">E-commerce</th>
                                        <th className="fw-bold">Landing Page</th>
                                        <th className="fw-bold">Web Application</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-start">Custom Design</td>
                                        <td><span className="text-success">✔</span></td>
                                        <td><span className="text-success">✔</span></td>
                                        <td><span className="text-success">✔</span></td>
                                        <td><span className="text-success">✔</span></td>
                                    </tr>
                                    <tr>
                                        <td className="text-start">Mobile Responsive</td>
                                        <td><span className="text-success">✔</span></td>
                                        <td><span className="text-success">✔</span></td>
                                        <td><span className="text-success">✔</span></td>
                                        <td><span className="text-success">✔</span></td>
                                    </tr>
                                    <tr>
                                        <td className="text-start">SEO Structure</td>
                                        <td><span className="text-success">✔</span></td>
                                        <td><span className="text-success">✔</span></td>
                                        <td><span className="text-success">✔</span></td>
                                        <td><span className="text-success">✔</span></td>
                                    </tr>
                                    <tr>
                                        <td className="text-start">Payment Gateway</td>
                                        <td><span className="text-danger">✖</span></td>
                                        <td><span className="text-success">✔</span></td>
                                        <td><span className="text-danger">✖</span></td>
                                        <td><span className="text-success">✔</span></td>
                                    </tr>
                                    <tr>
                                        <td className="text-start">Admin Dashboard</td>
                                        <td><span className="text-danger">✖</span></td>
                                        <td><span className="text-success">✔</span></td>
                                        <td><span className="text-danger">✖</span></td>
                                        <td><span className="text-success">✔</span></td>
                                    </tr>
                                    <tr>
                                        <td className="text-start">Scalability</td>
                                        <td>Medium</td>
                                        <td>High</td>
                                        <td>Low</td>
                                        <td>Very High</td>
                                    </tr>
                                    <tr>
                                        <td className="text-start">Best For</td>
                                        <td>Business Presence</td>
                                        <td>Online Sales</td>
                                        <td>Campaigns</td>
                                        <td>Complex Systems</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Recommended Packages */}
                <div className="row mt-5">
                    <div className="col-12 text-center mb-4">
                        <h3 className="text-dark mb-3">🚀 Recommended Packages</h3>
                        <p className="text-muted">Choose a comprehensive package that combines multiple services for maximum value</p>
                    </div>
                </div>
                <div className="row g-4">
                    {/* Startup Digital Package */}
                    <div className="col-lg-4">
                        <div className="card-pricing rounded-4 border p-md-6 p-4 h-100">
                            <div className="d-flex align-items-center gap-2 mb-3">
                                <span className="fs-3">⭐</span>
                                <span className="text-primary btn-text fw-bold">Startup Digital Package</span>
                            </div>
                            <h1 className="mb-3">
                                ₹24,999 <span className="fs-7 text-muted">/ one-time</span>
                            </h1>
                            <Link href="/contact" className="btn btn-outline-dark w-100 mb-4 mt-2 hover-up">
                                Get Started
                            </Link>
                            <span className="btn-text">What's included:</span>
                            <ul className="list-unstyled mt-3 mb-0">
                                <li className="d-flex border-top py-2">
                                    <CheckIcon />
                                    <p className="fs-7 mb-0 ms-2">Business website</p>
                                </li>
                                <li className="d-flex border-top py-2">
                                    <CheckIcon />
                                    <p className="fs-7 mb-0 ms-2">Mobile responsive design</p>
                                </li>
                                <li className="d-flex border-top pt-2">
                                    <CheckIcon />
                                    <p className="fs-7 mb-0 ms-2">SEO-optimized structure</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Growth Commerce Package */}
                    <div className="col-lg-4">
                        <div className="card-pricing rounded-4 border border-primary p-md-6 p-4 h-100 position-relative">
                            <span className="sale-off text-primary fs-8 position-absolute top-0 end-0 me-4 mt-3 px-3">Recommended</span>
                            <div className="d-flex align-items-center gap-2 mb-3">
                                <span className="fs-3">🚀</span>
                                <span className="text-primary btn-text fw-bold">Growth Commerce Package</span>
                            </div>
                            <h1 className="mb-3">
                                ₹49,999 <span className="fs-7 text-muted">/ one-time</span>
                            </h1>
                            <Link href="/contact" className="btn btn-primary border-dark w-100 mb-4 mt-2 hover-up">
                                Get Started
                            </Link>
                            <span className="btn-text">What's included:</span>
                            <ul className="list-unstyled mt-3 mb-0">
                                <li className="d-flex border-top border-opacity-25 py-2">
                                    <CheckIcon />
                                    <p className="fs-7 mb-0 ms-2">E-commerce website</p>
                                </li>
                                <li className="d-flex border-top border-opacity-25 py-2">
                                    <CheckIcon />
                                    <p className="fs-7 mb-0 ms-2">Payment &amp; shipping setup</p>
                                </li>
                                <li className="d-flex border-top border-opacity-25 pt-2">
                                    <CheckIcon />
                                    <p className="fs-7 mb-0 ms-2">Speed &amp; performance optimization</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Enterprise Digital Package */}
                    <div className="col-lg-4">
                        <div className="card-pricing rounded-4 border p-md-6 p-4 h-100">
                            <div className="d-flex align-items-center gap-2 mb-3">
                                <span className="fs-3">🏆</span>
                                <span className="text-primary btn-text fw-bold">Enterprise Digital Package</span>
                            </div>
                            <h1 className="mb-3">
                                ₹99,999+ <span className="fs-7 text-muted">/ one-time</span>
                            </h1>
                            <Link href="/contact" className="btn btn-outline-dark w-100 mb-4 mt-2 hover-up">
                                Get Started
                            </Link>
                            <span className="btn-text">What's included:</span>
                            <ul className="list-unstyled mt-3 mb-0">
                                <li className="d-flex border-top py-2">
                                    <CheckIcon />
                                    <p className="fs-7 mb-0 ms-2">Custom web application</p>
                                </li>
                                <li className="d-flex border-top py-2">
                                    <CheckIcon />
                                    <p className="fs-7 mb-0 ms-2">Advanced UI/UX design</p>
                                </li>
                                <li className="d-flex border-top py-2">
                                    <CheckIcon />
                                    <p className="fs-7 mb-0 ms-2">API integrations &amp; security</p>
                                </li>
                                <li className="d-flex border-top pt-2">
                                    <CheckIcon />
                                    <p className="fs-7 mb-0 ms-2">Scalable architecture</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
