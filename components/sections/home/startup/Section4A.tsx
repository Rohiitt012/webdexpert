import Link from "next/link";

export default function Section4A() {
    return (
        <>
            {/*startup home section 4A - Website Redesigning Services in India*/}
            <section className="startup-home-section-4a position-relative py-60 bg-white">
                <div className="container position-relative z-1">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-12 text-center">
                            <h2 className="text-dark mb-4 text-anime-style-2 fw-bold">
                                Website Redesigning Services in India
                            </h2>
                            <p className="text-dark text-opacity-75 fs-6 mb-4 mx-auto" style={{ maxWidth: "900px" }}>
                                Revamp your outdated website into a modern, mobile-friendly, and SEO-optimized platform. Boost user experience and conversions with our expert team.
                            </p>
                            <p className="text-dark text-opacity-75 fs-6 mb-5 mx-auto" style={{ maxWidth: "900px" }}>
                                Whether you're struggling with low engagement, slow loading, or poor SEO rankings, our <span className="text-primary fw-semibold">website redesigning service in India</span> helps you stand out online with fast, user-focused, and high-performing websites.
                            </p>
                            <Link href="/contact" className="btn btn-primary hover-up">
                                <span>Get a Free Website Audit</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                    <g clipPath="url(#clip0_903_198)">
                                        <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                    </g>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

