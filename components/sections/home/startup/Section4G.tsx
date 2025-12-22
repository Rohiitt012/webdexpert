import Link from "next/link";

export default function Section4G() {
    return (
        <>
            {/*startup home section 4G - Benefits of Website Redesigning*/}
            <section className="startup-home-section-4g position-relative py-60" style={{ backgroundColor: "#1a1a2e" }}>
                <div className="container position-relative z-1">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 text-center mb-5">
                            <h2 className="text-white mb-4 text-anime-style-2 fw-bold">
                                Benefits of Website Redesigning
                            </h2>
                            <p className="text-white text-opacity-75 fs-6 mx-auto" style={{ maxWidth: "900px" }}>
                                Our <span className="text-primary fw-semibold">website redesigning services</span> go far beyond cosmetic upgrades. We build strategic, <span className="text-primary fw-semibold">SEO-friendly websites</span> designed to elevate user experience, increase visibility, and convert visitors into customers. Here's how your business benefits from partnering with <span className="text-primary fw-semibold">XzectLabs</span>:
                            </p>
                        </div>
                    </div>
                    <div className="row g-1 justify-content-center position-relative">
                        {/* Card 1: Improved User Experience & Navigation */}
                        <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay={0}>
                            <div className="bg-white bg-opacity-10 rounded-4 p-4 p-lg-5 border border-white border-opacity-20 h-100">
                                <div className="mb-3">
                                    <div className="icon-shape icon-60 bg-primary rounded-3 d-flex align-items-center justify-content-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
                                            <circle cx={16} cy={16} r={14} stroke="white" strokeWidth={2} fill="none" />
                                            <circle cx={12} cy={12} r={2} fill="white" />
                                            <circle cx={20} cy={12} r={2} fill="white" />
                                            <path d="M10 20 Q16 24 22 20" stroke="white" strokeWidth={2} strokeLinecap="round" />
                                        </svg>
                                    </div>
                                </div>
                                <h4 className="text-white fw-bold mb-3">Improved User Experience & Navigation</h4>
                                <p className="text-white text-opacity-75 mb-0">
                                    We optimize layout, content structure, and flow, making it easier for users to find what they need and take action.
                                </p>
                            </div>
                        </div>

                        {/* Card 2: Faster Loading Speed */}
                        <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                            <div className="bg-white bg-opacity-10 rounded-4 p-4 p-lg-5 border border-white border-opacity-20 h-100">
                                <div className="mb-3">
                                    <div className="icon-shape icon-60 bg-primary rounded-3 d-flex align-items-center justify-content-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
                                            <path d="M16 6 L20 12 L28 14 L22 20 L24 28 L16 24 L8 28 L10 20 L4 14 L12 12 Z" fill="white" />
                                        </svg>
                                    </div>
                                </div>
                                <h4 className="text-white fw-bold mb-3">Faster Loading Speed across All Devices</h4>
                                <p className="text-white text-opacity-75 mb-0">
                                    A slow website kills conversions. We optimize page speed for better performance, SEO, and lower bounce rates.
                                </p>
                            </div>
                        </div>

                        {/* Card 3: Higher Search Engine Rankings */}
                        <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay={400}>
                            <div className="bg-white bg-opacity-10 rounded-4 p-4 p-lg-5 border border-white border-opacity-20 h-100">
                                <div className="mb-3">
                                    <div className="icon-shape icon-60 bg-primary rounded-3 d-flex align-items-center justify-content-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
                                            <rect x={6} y={20} width={6} height={8} rx={1} fill="white" />
                                            <rect x={13} y={16} width={6} height={12} rx={1} fill="white" />
                                            <rect x={20} y={12} width={6} height={16} rx={1} fill="white" />
                                        </svg>
                                    </div>
                                </div>
                                <h4 className="text-white fw-bold mb-3">Higher Search Engine Rankings</h4>
                                <p className="text-white text-opacity-75 mb-0">
                                    With on-page SEO best practices and content structuring, your redesigned site gains better visibility and organic traffic.
                                </p>
                            </div>
                        </div>

                        {/* Card 4: Better Mobile & Cross-Device Experience */}
                        <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay={600}>
                            <div className="bg-white bg-opacity-10 rounded-4 p-4 p-lg-5 border border-white border-opacity-20 h-100">
                                <div className="mb-3">
                                    <div className="icon-shape icon-60 bg-primary rounded-3 d-flex align-items-center justify-content-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
                                            <rect x={8} y={6} width={12} height={20} rx={2} stroke="white" strokeWidth={2} fill="none" />
                                            <rect x={20} y={10} width={4} height={12} rx={1} stroke="white" strokeWidth={2} fill="none" />
                                        </svg>
                                    </div>
                                </div>
                                <h4 className="text-white fw-bold mb-3">Better Mobile & Cross-Device Experience</h4>
                                <p className="text-white text-opacity-75 mb-0">
                                    Our mobile-first approach ensures your website looks and performs great on smartphones, tablets, and desktops.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

