import Link from "next/link";

export default function Section4E() {
    return (
        <>
            {/*startup home section 4E - Our Website Redesigning Approach*/}
            <section className="startup-home-section-4e position-relative py-60 bg-light">
                <div className="container position-relative z-1">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 text-center mb-5">
                            <h2 className="text-dark mb-4 text-anime-style-2 fw-bold">
                                Our Website Redesigning Approach
                            </h2>
                            <p className="text-dark text-opacity-75 fs-6 mx-auto" style={{ maxWidth: "900px" }}>
                                At <span className="text-primary fw-semibold">XzectLabs</span>, we take a strategic and user-focused approach to <span className="text-primary fw-semibold">website redesigning</span>. From performance audits to mobile responsiveness and SEO migration, every step is designed to ensure your new website is faster, more engaging, and ready to perform in search rankings.
                            </p>
                        </div>
                    </div>
                    <div className="row g-1">
                        {/* Card 1: Website Audit & Analysis */}
                        <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay={0}>
                            <div className="bg-white rounded-4 p-4 p-lg-5 shadow-sm border h-100">
                                <div className="mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none">
                                        <rect width={48} height={48} rx={8} fill="#794AFF" fillOpacity="0.1" />
                                        <path d="M24 16C22.9 16 22 16.9 22 18V24C22 25.1 22.9 26 24 26C25.1 26 26 25.1 26 24V18C26 16.9 25.1 16 24 16ZM24 28C22.9 28 22 28.9 22 30V32C22 33.1 22.9 34 24 34C25.1 34 26 33.1 26 32V30C26 28.9 25.1 28 24 28Z" fill="#794AFF" />
                                    </svg>
                                </div>
                                <h4 className="text-dark fw-bold mb-3">Website Audit & Analysis</h4>
                                <p className="text-dark text-opacity-75 mb-0">
                                    We begin with a complete review of your current website identifying pain points in structure, content, speed, and SEO.
                                </p>
                            </div>
                        </div>

                        {/* Card 2: UI/UX Planning & Wireframing */}
                        <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                            <div className="bg-white rounded-4 p-4 p-lg-5 shadow-sm border h-100">
                                <div className="mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none">
                                        <rect width={48} height={48} rx={8} fill="#794AFF" fillOpacity="0.1" />
                                        <rect x={12} y={12} width={8} height={8} rx={2} fill="#794AFF" />
                                        <rect x={22} y={12} width={8} height={8} rx={2} fill="#794AFF" />
                                        <rect x={32} y={12} width={4} height={8} rx={2} fill="#794AFF" />
                                        <rect x={12} y={22} width={8} height={8} rx={2} fill="#794AFF" />
                                        <rect x={22} y={22} width={8} height={8} rx={2} fill="#794AFF" />
                                        <rect x={32} y={22} width={4} height={8} rx={2} fill="#794AFF" />
                                    </svg>
                                </div>
                                <h4 className="text-dark fw-bold mb-3">UI/UX Planning & Wireframing</h4>
                                <p className="text-dark text-opacity-75 mb-0">
                                    Our designers focus on creating intuitive, mobile-first layouts that offer a seamless user experience across all devices.
                                </p>
                            </div>
                        </div>

                        {/* Card 3: Custom Design & Development */}
                        <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay={400}>
                            <div className="bg-white rounded-4 p-4 p-lg-5 shadow-sm border h-100">
                                <div className="mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none">
                                        <rect width={48} height={48} rx={8} fill="#794AFF" fillOpacity="0.1" />
                                        <rect x={14} y={14} width={20} height={20} rx={2} stroke="#794AFF" strokeWidth={2} fill="none" />
                                        <path d="M18 20H30M18 24H30M18 28H26" stroke="#794AFF" strokeWidth={2} strokeLinecap="round" />
                                    </svg>
                                </div>
                                <h4 className="text-dark fw-bold mb-3">Custom Design & Development</h4>
                                <p className="text-dark text-opacity-75 mb-0">
                                    We build a visually appealing and custom-designed website tailored to your brand fully optimized for performance and functionality.
                                </p>
                            </div>
                        </div>

                        {/* Card 4: SEO Migration & Optimization */}
                        <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay={600}>
                            <div className="bg-white rounded-4 p-4 p-lg-5 shadow-sm border h-100">
                                <div className="mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none">
                                        <rect width={48} height={48} rx={8} fill="#794AFF" fillOpacity="0.1" />
                                        <circle cx={24} cy={20} r={6} stroke="#794AFF" strokeWidth={2} fill="none" />
                                        <path d="M18 32L24 26L30 32" stroke="#794AFF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h4 className="text-dark fw-bold mb-3">SEO Migration & Optimization</h4>
                                <p className="text-dark text-opacity-75 mb-0">
                                    To protect and improve your rankings, we handle SEO migration, optimize on-page elements, and enhance site architecture for search engines.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

