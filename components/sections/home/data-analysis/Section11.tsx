import Link from "next/link";

export default function Section11() {
    return (
        <>
            {/*data-analysis home section 11 - Blogs*/}
            <section className="data-analysis-home-section-11 position-relative overflow-hidden py-80 bg-white">
                <div className="container position-relative z-1">
                    <div className="text-center">
                        <div className="d-flex align-items-center justify-content-center gap-3">
                            <span className="small-line" />
                            <span className="btn-text text-primary">Blogs</span>
                            <span className="small-line" />
                        </div>
                        <h2 className="text-dark mt-3 mb-8 text-anime-style-2">Latest insights on AI solutions</h2>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card-news position-relative hover-up h-100">
                                <Link href="/blog-details" className="card-news-img position-relative d-block">
                                    <img
                                        className="w-100 rounded-3 rounded-bottom-0"
                                        src="/assets/img/data-analysis-img/pages/data-analysis/page-home/home-section-2/img-card.png"
                                        alt="AI Chatbots & Assistants"
                                    />
                                    <span className="text-uppercase text-white bg-primary rounded-2 px-2 py-1 position-absolute top-0 start-0 m-3 fs-8 fw-semibold">
                                        Chatbots
                                    </span>
                                </Link>
                                <div className="card-news-body border p-4 rounded-3 rounded-top-0 border-top-0">
                                    <div className="d-flex card-news-information gap-4 mb-2">
                                        <div className="d-flex align-items-center gap-1">
                                            <span className="opacity-75 fs-8">December 21, 2025</span>
                                        </div>
                                    </div>
                                    <div className="card-news-title mt-1">
                                        <Link href="/blog-details">
                                            <h6>How AI chatbots transform 24/7 customer support.</h6>
                                        </Link>
                                        <p className="mb-0">
                                            Discover how AI chatbots and virtual assistants handle complex conversations, reduce response time, and
                                            keep your customers engaged around the clock.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card-news position-relative hover-up h-100">
                                <Link href="/blog-details" className="card-news-img position-relative d-block">
                                    <img
                                        className="w-100 rounded-3 rounded-bottom-0"
                                        src="/assets/img/data-analysis-img/pages/data-analysis/page-home/home-section-2/img-card.png"
                                        alt="AI Content & Post Generation"
                                    />
                                    <span className="text-uppercase text-white bg-primary rounded-2 px-2 py-1 position-absolute top-0 start-0 m-3 fs-8 fw-semibold">
                                        Content
                                    </span>
                                </Link>
                                <div className="card-news-body border p-4 rounded-3 rounded-top-0 border-top-0">
                                    <div className="d-flex card-news-information gap-4 mb-2">
                                        <div className="d-flex align-items-center gap-1">
                                            <span className="opacity-75 fs-8">December 18, 2025</span>
                                        </div>
                                    </div>
                                    <div className="card-news-title mt-1">
                                        <Link href="/blog-details">
                                            <h6>Creating high-quality content with AI—without losing your voice.</h6>
                                        </Link>
                                        <p className="mb-0">
                                            Learn how AI content tools help teams scale blogs, posts, and campaigns while keeping messaging on-brand
                                            and human.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card-news position-relative hover-up h-100">
                                <Link href="/blog-details" className="card-news-img position-relative d-block">
                                    <img
                                        className="w-100 rounded-3 rounded-bottom-0"
                                        src="/assets/img/data-analysis-img/pages/data-analysis/page-home/home-section-2/img-card.png"
                                        alt="AI Automation & Workflows"
                                    />
                                    <span className="text-uppercase text-white bg-primary rounded-2 px-2 py-1 position-absolute top-0 start-0 m-3 fs-8 fw-semibold">
                                        Automation
                                    </span>
                                </Link>
                                <div className="card-news-body border p-4 rounded-3 rounded-top-0 border-top-0">
                                    <div className="d-flex card-news-information gap-4 mb-2">
                                        <div className="d-flex align-items-center gap-1">
                                            <span className="opacity-75 fs-8">December 10, 2025</span>
                                        </div>
                                    </div>
                                    <div className="card-news-title mt-1">
                                        <Link href="/blog-details">
                                            <h6>Designing AI workflows that never miss a lead.</h6>
                                        </Link>
                                        <p className="mb-0">
                                            Explore how AI-powered workflows follow up with every prospect automatically and keep your pipeline active
                                            without manual effort.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


