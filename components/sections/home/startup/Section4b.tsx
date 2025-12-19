import Link from "next/link";

export default function Section4b() {
    return (
        <>
            {/*startup home section 4b - Website Redesign & Optimization*/}
            <section className="startup-home-section-4b position-relative overflow-hidden py-120 bg-white">
                <div className="container">
                    {/* Top Badge */}
                    <div className="text-center mb-5">
                        <div className="d-inline-block position-relative">
                            <div className="position-absolute top-50 start-0 w-100 h-1 bg-primary opacity-25" style={{ height: '2px' }} />
                            <span className="btn-text bg-white px-4 py-2 text-primary position-relative z-1 rounded-pill border border-primary border-opacity-25">
                                Why Your Website Needs a Redesign
                            </span>
                            <div className="position-absolute top-50 end-0 w-100 h-1 bg-primary opacity-25" style={{ height: '2px' }} />
                        </div>
                    </div>

                    {/* Main Heading */}
                    <div className="text-center mb-8">
                        <h2 className="text-dark text-anime-style-2">Website Redesign &amp; Optimization</h2>
                    </div>

                    {/* First Row: Large Graphic + 2 Cards */}
                    <div className="row g-4 mb-8 align-items-center">
                        <div className="col-lg-5">
                            <div className="bg-secondary rounded-4 p-5 h-100 d-flex align-items-center justify-content-center" style={{ minHeight: '400px' }}>
                                <div className="text-center">
                                    <div className="icon-shape icon-120 rounded-circle bg-primary mx-auto mb-3 d-flex align-items-center justify-content-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 60 60" fill="none">
                                            <path d="M30 5L35 20H50L38 30L43 45L30 35L17 45L22 30L10 20H25L30 5Z" fill="white" />
                                        </svg>
                                    </div>
                                    <p className="text-dark mb-0">Modern UI/UX Design</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="bg-white rounded-4 p-4 shadow-sm border h-100">
                                        <div className="icon-shape icon-50 rounded-circle bg-secondary mb-3 d-flex align-items-center justify-content-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M12 2L2 7V10C2 16 6 21.09 12 22C18 21.09 22 16 22 10V7L12 2Z" fill="#794AFF" />
                                                <path d="M12 8V12M12 16H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                        <h5 className="mb-3">Outdated Design &amp; Poor User Experience</h5>
                                        <p className="mb-0 text-dark text-opacity-75">
                                            An old-fashioned interface or cluttered layout can make your brand look outdated. A fresh, modern design with intuitive navigation helps build trust and keeps visitors engaged longer.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="bg-white rounded-4 p-4 shadow-sm border h-100">
                                        <div className="icon-shape icon-50 rounded-circle bg-secondary mb-3 d-flex align-items-center justify-content-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <circle cx="12" cy="12" r="10" stroke="#794AFF" strokeWidth="2" />
                                                <path d="M12 6V12L16 14" stroke="#794AFF" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                        <h5 className="mb-3">Slow Loading Speed</h5>
                                        <p className="mb-0 text-dark text-opacity-75">
                                            If your website takes more than a few seconds to load, users leave — and so does your Google ranking. Speed optimization ensures faster load times, better user experience, and improved SEO performance.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Row: 6 Service Cards */}
                    <div className="row g-4 mb-8">
                        <div className="col-lg-4 col-md-6">
                            <div className="bg-white rounded-4 p-4 shadow-sm border h-100">
                                <div className="icon-shape icon-60 rounded-circle bg-secondary mb-3 d-flex align-items-center justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 30 30" fill="none">
                                        <rect x="5" y="5" width="20" height="20" rx="3" fill="#794AFF" />
                                        <path d="M12 15L14 17L18 13" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <h5 className="mb-3">Not Mobile-Friendly</h5>
                                <p className="mb-0 text-dark text-opacity-75">
                                    With most traffic coming from mobile devices, a non-responsive website can drive away potential customers. A responsive redesign ensures seamless browsing across all screen sizes.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="bg-white rounded-4 p-4 shadow-sm border h-100">
                                <div className="icon-shape icon-60 rounded-circle bg-secondary mb-3 d-flex align-items-center justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 30 30" fill="none">
                                        <rect x="5" y="5" width="20" height="20" rx="3" fill="#794AFF" />
                                        <circle cx="15" cy="15" r="3" fill="white" />
                                    </svg>
                                </div>
                                <h5 className="mb-3">Low Conversion Rates</h5>
                                <p className="mb-0 text-dark text-opacity-75">
                                    If your website isn't generating leads or sales, your design and content may not be conversion-optimized. Our redesign strategies focus on better CTAs, user flow, and engagement to boost conversions.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="bg-white rounded-4 p-4 shadow-sm border h-100">
                                <div className="icon-shape icon-60 rounded-circle bg-secondary mb-3 d-flex align-items-center justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 30 30" fill="none">
                                        <circle cx="15" cy="15" r="10" stroke="#794AFF" strokeWidth="2" />
                                        <circle cx="15" cy="15" r="5" fill="#794AFF" />
                                    </svg>
                                </div>
                                <h5 className="mb-3">Website Audit &amp; Analysis</h5>
                                <p className="mb-0 text-dark text-opacity-75">
                                    We conduct a detailed audit of your current website — evaluating design, UX, SEO structure, and performance metrics to identify improvement areas.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="bg-white rounded-4 p-4 shadow-sm border h-100">
                                <div className="icon-shape icon-60 rounded-circle bg-secondary mb-3 d-flex align-items-center justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 30 30" fill="none">
                                        <path d="M15 5L20 10H25V25H5V10H10L15 5Z" fill="#794AFF" />
                                    </svg>
                                </div>
                                <h5 className="mb-3">Strategy &amp; Wireframing</h5>
                                <p className="mb-0 text-dark text-opacity-75">
                                    Our experts plan the redesign architecture — from sitemap structure and user flow to UI layout — ensuring it aligns with your brand goals.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="bg-white rounded-4 p-4 shadow-sm border h-100">
                                <div className="icon-shape icon-60 rounded-circle bg-secondary mb-3 d-flex align-items-center justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 30 30" fill="none">
                                        <rect x="5" y="5" width="20" height="20" rx="2" fill="#794AFF" />
                                        <path d="M10 15L13 18L20 11" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <h5 className="mb-3">UI/UX Design</h5>
                                <p className="mb-0 text-dark text-opacity-75">
                                    We craft a modern, responsive design with intuitive navigation, clear CTAs, and a consistent brand identity that enhances user trust and engagement.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="bg-white rounded-4 p-4 shadow-sm border h-100">
                                <div className="icon-shape icon-60 rounded-circle bg-secondary mb-3 d-flex align-items-center justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 30 30" fill="none">
                                        <rect x="5" y="5" width="20" height="15" rx="2" fill="#794AFF" />
                                        <rect x="8" y="8" width="14" height="9" fill="white" />
                                    </svg>
                                </div>
                                <h5 className="mb-3">Development &amp; Optimization</h5>
                                <p className="mb-0 text-dark text-opacity-75">
                                    We rebuild your site using cutting-edge technologies (React, Laravel, WordPress, etc.) while optimizing for speed, SEO, and security.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Third Row: 3 Service Cards */}
                    <div className="row g-4 mb-8">
                        <div className="col-lg-4 col-md-6">
                            <div className="bg-white rounded-4 p-4 shadow-sm border h-100">
                                <div className="icon-shape icon-60 rounded-circle bg-secondary mb-3 d-flex align-items-center justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 30 30" fill="none">
                                        <path d="M15 5L18 12H25L19 16L22 23L15 19L8 23L11 16L5 12H12L15 5Z" fill="#794AFF" />
                                    </svg>
                                </div>
                                <h5 className="mb-3">SEO &amp; Performance Optimization</h5>
                                <p className="mb-0 text-dark text-opacity-75">
                                    From on-page SEO to Core Web Vitals, we ensure your redesigned website performs exceptionally across search engines and all devices.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="bg-white rounded-4 p-4 shadow-sm border h-100">
                                <div className="icon-shape icon-60 rounded-circle bg-secondary mb-3 d-flex align-items-center justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 30 30" fill="none">
                                        <path d="M15 5L20 10H25V25H5V10H10L15 5Z" fill="#794AFF" />
                                        <path d="M12 15L15 18L20 13" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <h5 className="mb-3">Testing &amp; Launch</h5>
                                <p className="mb-0 text-dark text-opacity-75">
                                    We test across browsers, devices, and performance metrics before going live — ensuring a flawless user experience.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="bg-white rounded-4 p-4 shadow-sm border h-100">
                                <div className="icon-shape icon-60 rounded-circle bg-secondary mb-3 d-flex align-items-center justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 30 30" fill="none">
                                        <rect x="5" y="5" width="20" height="20" rx="3" fill="#794AFF" />
                                        <path d="M10 15L13 18L20 11" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <h5 className="mb-3">Strategic, Data-Driven Approach</h5>
                                <p className="mb-0 text-dark text-opacity-75">
                                    With years of experience in ecommerce, real estate, healthcare, BFSI, and B2B sectors, our multidisciplinary team understands what works — and delivers tailor-made solutions for every brand.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Heading */}
                    <div className="text-center">
                        <h2 className="text-primary mb-3">Our Proven Process &amp; Services we provide</h2>
                        <p className="text-dark text-opacity-75 mb-0">
                            We follow a transparent and collaborative process to ensure your success from day one.
                        </p>
                    </div>

                    {/* Fourth Row: 4 Feature Cards */}
                    <div className="row g-4 mt-6">
                        <div className="col-lg-3 col-md-6">
                            <div className="bg-white rounded-4 p-4 shadow-sm border h-100 text-center">
                                <div className="icon-shape icon-60 rounded-circle bg-secondary mx-auto mb-3 d-flex align-items-center justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 30 30" fill="none">
                                        <circle cx="15" cy="10" r="3" fill="#794AFF" />
                                        <circle cx="10" cy="20" r="3" fill="#794AFF" />
                                        <circle cx="20" cy="20" r="3" fill="#794AFF" />
                                        <path d="M15 13L10 20M15 13L20 20" stroke="#794AFF" strokeWidth="2" />
                                    </svg>
                                </div>
                                <h5 className="mb-3">Expert Team Across Industries</h5>
                                <p className="mb-0 text-dark text-opacity-75">
                                    We don't redesign blindly. Every change is backed by in-depth analytics, heatmaps, and user behavior insights to ensure your new website drives measurable results.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="bg-white rounded-4 p-4 shadow-sm border h-100 text-center">
                                <div className="icon-shape icon-60 rounded-circle bg-secondary mx-auto mb-3 d-flex align-items-center justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 30 30" fill="none">
                                        <rect x="5" y="5" width="20" height="20" rx="3" fill="#794AFF" />
                                        <path d="M10 15L13 18L20 11" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <h5 className="mb-3">Conversion-Focused Design</h5>
                                <p className="mb-0 text-dark text-opacity-75">
                                    Our redesign process integrates SEO from day one — from site structure and meta optimization to Core Web Vitals — ensuring your website ranks higher and attracts the right audience.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="bg-white rounded-4 p-4 shadow-sm border h-100 text-center">
                                <div className="icon-shape icon-60 rounded-circle bg-secondary mx-auto mb-3 d-flex align-items-center justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 30 30" fill="none">
                                        <circle cx="15" cy="15" r="10" stroke="#794AFF" strokeWidth="2" />
                                        <circle cx="15" cy="15" r="5" fill="#794AFF" />
                                    </svg>
                                </div>
                                <h5 className="mb-3">SEO-First Development</h5>
                                <p className="mb-0 text-dark text-opacity-75">
                                    We combine creativity with marketing psychology to craft interfaces that engage users and convert traffic into leads. Every CTA, image, and layout element is built for performance.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="bg-white rounded-4 p-4 shadow-sm border h-100 text-center">
                                <div className="icon-shape icon-60 rounded-circle bg-secondary mx-auto mb-3 d-flex align-items-center justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 30 30" fill="none">
                                        <rect x="5" y="5" width="20" height="20" rx="3" fill="#794AFF" />
                                        <path d="M10 10H20M10 15H20M10 20H15" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <h5 className="mb-3">Strategic, Data-Driven Approach</h5>
                                <p className="mb-0 text-dark text-opacity-75">
                                    With years of experience in ecommerce, real estate, healthcare, BFSI, and B2B sectors, our multidisciplinary team understands what works — and delivers tailor-made solutions for every brand.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

