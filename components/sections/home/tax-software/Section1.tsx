import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*tax-software section 1*/}
            <section className="tax-software-section-1 overflow-hidden">
                <div className="position-relative overflow-hidden pb-120 pt-200 bg-light-2">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="text-center">
                                    <span className="text-primary btn-text">Website Design & Development</span>
                                    <h1 className="mb-2">
                                    Professional <span className="text-primary text-decoration-underline">Business Websites, </span>
                                        <span className="text-primary">E-commerce &amp; Custom Solutions</span>
                                    </h1>
                                    <p className="text-anime-style-3">We create stunning, high-performing websites including business websites, e-commerce stores (Shopify & WooCommerce), landing pages & funnels, and custom web applications. Our expert team delivers modern, responsive, and conversion-focused designs tailored to your business needs.</p>
                                    <Link href="/contact" className="btn btn-outline-dark mt-6">
                                        <span>Get Started</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <g clipPath="url(#clip0_941_521)">
                                                <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="#292929" />
                                            </g>
                                        </svg>
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
