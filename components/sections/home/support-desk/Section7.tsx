import Link from "next/link";

export default function Section7() {
    return (
        <>
            {/*tax-software section 7*/}
            <section className="tax-software-section-7 position-relative overflow-hidden">
                <div className="container position-relative z-1 pt-200 pb-150 border-top">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="text-center">
                                <div className="logo-top position-relative" data-aos="zoom-in" data-aos-delay={200}>
                                    <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={53} height={60} viewBox="0 0 53 60" fill="none">
                                        <g clipPath="url(#clip0_349_9353)">
                                            <path d="M5.00025 47.8567V17.9002L26.2478 5.75925L47.5005 17.9002V42.0975L26.2478 54.2407L15 47.8125V23.703L26.2478 17.2755L37.5 23.703V36.294L26.2478 42.7222L25.0005 42.0097V29.5072L31.287 25.9132L26.2478 23.0347L20.0002 26.607V44.91L26.2478 48.4815L42.5003 39.1942V20.8027L26.2478 11.5185L10.0005 20.8027V50.7127L26.2478 60L52.5 45V15L26.2478 0L0 15V45L5.00025 47.8567Z" fill="#794AFF" />
                                        </g>
                                    </svg>
                                    <div className="ellipse-1 position-absolute top-50 start-50 translate-middle" />
                                    <div className="ellipse-2 position-absolute top-50 start-50 translate-middle" />
                                    <div className="ellipse-3 position-absolute top-50 start-50 translate-middle" />
                                </div>
                                <h2 className="text-anime-style-3">
                                    Ready to grow your <br />
                                    business? Start with <span className="text-primary">Astrax</span> &amp; become <br />
                                    faster every second.
                                </h2>
                                <div className="d-flex align-items-center justify-content-center gap-4 pt-6">
                                    <Link data-aos="fade-up" data-aos-delay={200} href="/contact" className="btn btn-primary">
                                        get started
                                    </Link>
                                    <Link data-aos="fade-up" data-aos-delay={400} href="/pricing-plan" className="btn btn-outline-dark">
                                        try for free
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

