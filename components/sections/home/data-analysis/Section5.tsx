import Link from "next/link";

export default function Section5() {
    return (
        <>
            {/*data-analysis-home section 5*/}
            <section className="data-analysis-home-section-5 position-relative overflow-hidden pt-3">
                <div className="container">
                    <div className="d-flex justify-content-center" data-aos="zoom-in">
                        <Link href="#" className="icon-shape icon-60 bg-dark rounded-circle hover-up">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                <g clipPath="url(#clip0_349_7116)">
                                    <path d="M3.80852 11.8173L7.99998 16L12.1914 11.8173L11.3084 10.9325L8.62497 13.6104L8.62497 -3.11788e-07L7.37499 -4.21065e-07L7.37498 13.6104L4.69148 10.9325L3.80852 11.8173Z" fill="white" />
                                </g>
                            </svg>
                        </Link>
                    </div>
                    <div className="d-flex flex-wrap align-items-center justify-content-center gap-md-5 py-60">
                        <Link href="#" className="border-bottom tg-img-reveal-item" data-fx={1}>
                            <span className="fs-64 fw-semibold">AI Chatbots &amp; Assistants</span>
                        </Link>
                        <span className="opacity-10 fs-64 fw-semibold">/</span>
                        <Link href="#" className="border-bottom tg-img-reveal-item" data-fx={1}>
                            <span className="fs-64 fw-semibold">AI Content &amp; Post Generation</span>
                        </Link>
                        <span className="opacity-10 fs-64 fw-semibold">/</span>
                        <Link href="#" className="border-bottom tg-img-reveal-item" data-fx={1}>
                            <span className="fs-64 fw-semibold">AI Automation for Lead Follow-ups</span>
                        </Link>
                        <span className="opacity-10 fs-64 fw-semibold">/</span>
                        <Link href="#" className="border-bottom tg-img-reveal-item" data-fx={1}>
                            <span className="fs-64 fw-semibold">AI-based Recommendation Systems</span>
                        </Link>
                        <span className="opacity-10 fs-64 fw-semibold">/</span>
                        <Link href="#" className="border-bottom tg-img-reveal-item" data-fx={1}>
                            <span className="fs-64 fw-semibold">AI Tools for Business</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
