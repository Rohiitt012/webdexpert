import Link from "next/link";

export default function Section9({ bordertop }: any) {
    return (
        <>
            {/*ai-solutions-about section 9*/}
            <section className="ai-solutions-about-section-9 position-relative overflow-hidden">
                <div className={`container position-relative z-1 ${bordertop} py-120`}>
                    <div className="text-center">
                        <div className="d-flex align-items-center justify-content-center gap-3">
                            <span className="small-line" />
                            <span className="btn-text text-warning">Blogs </span>
                            <span className="small-line" />
                        </div>
                        <h2 className="text-dark mt-3 mb-8">Read Latest Articles & Post</h2>
                    </div>
                    <div className="row mt-8">
                        <div className="col-lg-4 col-md-6">
                            <div className="card-news position-relative mb-lg-0 mb-5 hover-up">
                                <Link href="/blog-details" className="card-news-img position-relative d-block">
                                    <img className="w-100 rounded-3 rounded-bottom-0" src="/assets/img/ai-solutions-img/pages/ai-solutions/page-home/home-section-8/img-1.png" alt="Xzect Labs" />
                                    <span className="text-uppercase text-white bg-linear-1 rounded-2 px-2 py-1 position-absolute top-0 start-0 m-4 fs-8 fw-semibold">Monitoring</span>
                                </Link>
                                <div className="card-news-body border p-4 rounded-3 rounded-top-0 border-top-0">
                                    <div className="d-flex card-news-information gap-4">
                                        <div className="d-flex align-items-center gap-1">
                                            <img src="/assets/img/ai-solutions-img/template/icons/icon-1.svg" alt="Xzect Labs" />
                                            <p className="mb-0">December 21, 2025</p>
                                        </div>
                                        {/* <div className="d-flex align-items-center gap-1">
                                            <img src="/assets/img/ai-solutions-img/template/icons/icon-2.svg" alt="Xzect Labs" />
                                            <span className="opacity-50">By</span>
                                            <Link href="#" className="mb-0">
                                                Admin
                                            </Link>
                                        </div> */}
                                    </div>
                                    <div className="card-news-title mt-2">
                                        <Link href="/blog-details">
                                            <h6>Why Reddit Monitoring Is Now Essential for GEO and SEO Success in 2026.</h6>
                                        </Link>
                                        <p>Reddit has become a powerful source of real user intent and trending discussions. Monitoring subreddits now plays a key role in improving GEO targeting and boosting SEO performance in 2026.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card-news position-relative mb-lg-0 mb-5 hover-up">
                                <Link href="/blog-details" className="card-news-img position-relative d-block">
                                    <img className="w-100 rounded-3 rounded-bottom-0" src="/assets/img/ai-solutions-img/pages/ai-solutions/page-home/home-section-8/img-2.png" alt="Xzect Labs" />
                                    <span className="text-uppercase text-white bg-linear-1 rounded-2 px-2 py-1 position-absolute top-0 start-0 m-4 fs-8 fw-semibold">Visibility</span>
                                </Link>
                                <div className="card-news-body border p-4 rounded-3 rounded-top-0 border-top-0">
                                    <div className="d-flex card-news-information gap-4">
                                        <div className="d-flex align-items-center gap-1">
                                            <img src="/assets/img/ai-solutions-img/template/icons/icon-1.svg" alt="Xzect Labs" />
                                            <p className="mb-0">December 21, 2025</p>
                                        </div>
                                        {/* <div className="d-flex align-items-center gap-1">
                                            <img src="/assets/img/ai-solutions-img/template/icons/icon-2.svg" alt="Xzect Labs" />
                                            <span className="opacity-50">By</span>
                                            <Link href="#" className="mb-0">
                                                Admin
                                            </Link>
                                        </div> */}
                                    </div>
                                    <div className="card-news-title mt-2">
                                        <Link href="/blog-details">
                                            <h6>SEO for Personal Trainers: How to Get More Clients Online in 2026.</h6>
                                        </Link>
                                        <p>n 2026, personal trainers can grow their client base faster by focusing on online visibility. Effective SEO helps your website or Google Business Profile appear at the top of search results.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card-news position-relative mb-lg-0 mb-5 hover-up">
                                <Link href="/blog-details" className="card-news-img position-relative d-block">
                                    <img className="w-100 rounded-3 rounded-bottom-0" src="/assets/img/ai-solutions-img/pages/ai-solutions/page-home/home-section-8/img-3.png" alt="Xzect Labs" />
                                    <span className="text-uppercase text-white bg-linear-1 rounded-2 px-2 py-1 position-absolute top-0 start-0 m-4 fs-8 fw-semibold">Humanization</span>
                                </Link>
                                <div className="card-news-body border p-4 rounded-3 rounded-top-0 border-top-0">
                                    <div className="d-flex card-news-information gap-4">
                                        <div className="d-flex align-items-center gap-1">
                                            <img src="/assets/img/ai-solutions-img/template/icons/icon-1.svg" alt="Xzect Labs" />
                                            <p className="mb-0">December 21, 2025</p>
                                        </div>
                                        {/* <div className="d-flex align-items-center gap-1">
                                            <img src="/assets/img/ai-solutions-img/template/icons/icon-2.svg" alt="Xzect Labs" />
                                            <span className="opacity-50">By</span>
                                            <Link href="#" className="mb-0">
                                                Admin
                                            </Link>
                                        </div>  */}
                                    </div>
                                    <div className="card-news-title mt-2">
                                        <Link href="/blog-details">
                                            <h6>AI-Proof Content: How to Write And Humanize AI Content.</h6>
                                        </Link>
                                        <p>With the rise of AI-generated writing, creating content that feels truly human has become more important than ever. In 2026, audiences are looking for authenticity, emotion, and real personality in every piece of content they consume.</p>
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
