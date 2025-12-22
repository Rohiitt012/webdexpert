import Link from "next/link";

export default function Section2A() {
    return (
        <>
            {/*data-analysis section 2a - Our Services*/}
            <section className="data-analysis-home-section-2a position-relative overflow-hidden py-60 bg-white">
                <div className="container">
                    <div className="row mb-50">
                        <div className="col-12 text-center">
                            <h2 className="text-dark text-anime-style-2">Our Services</h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Chatbots & Assistants - Image Left, Content Right */}
            <section className="data-analysis-section-2a-1 position-relative overflow-hidden py-60 bg-white">
                    <div className="container">
                        <div className="row py-60 align-items-center">
                            <div className="col-lg-5">
                                <img className="mt-lg-0 mb-md-5 mb-3 img-custom-anim-left" src="/assets/img/data-analysis-img/pages/data-analysis/page-home/home-section-2/img-card.png" alt="AI Chatbots & Assistants" />
                            </div>
                            <div className="col-lg-6 offset-lg-1">
                                <h2 className="mb-3 text-anime-style-2">AI Chatbots & Assistants</h2>
                                <p className="pb-md-4 text-anime-style-3">
                                    We develop intelligent AI chatbots and virtual assistants that provide 24/7 customer support, answer queries instantly, and handle complex conversations naturally. Our AI chatbots integrate seamlessly with your website, messaging platforms, and CRM systems, delivering personalized responses, automating routine tasks, and improving customer satisfaction while reducing operational costs.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* AI Content & Post Generation - Image Right, Content Left */}
                <section className="data-analysis-section-2a-2 position-relative overflow-hidden py-60 bg-white">
                    <div className="container">
                        <div className="row py-60 align-items-center">
                            <div className="col-lg-5 order-lg-2 offset-lg-1">
                                <img className="mt-lg-0 mb-md-5 mb-3 img-custom-anim-right" src="/assets/img/data-analysis-img/pages/data-analysis/page-home/home-section-2/img-card.png" alt="AI Content & Post Generation" />
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <h2 className="mb-3 text-anime-style-2">AI Content & Post Generation</h2>
                                <p className="pb-md-4 text-anime-style-3">
                                    Our AI-powered content generation tools create high-quality blog posts, social media content, product descriptions, and marketing copy tailored to your brand voice. Using advanced language models, we generate engaging, SEO-optimized content that saves time, maintains consistency, and scales your content marketing efforts across multiple platforms and formats.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* AI Automation for Lead Follow-ups - Image Left, Content Right */}
                <section className="data-analysis-section-2a-3 position-relative overflow-hidden py-60 bg-white">
                    <div className="container">
                        <div className="row py-60 align-items-center">
                            <div className="col-lg-5">
                                <img className="mt-lg-0 mb-md-5 mb-3 img-custom-anim-left" src="/assets/img/data-analysis-img/pages/data-analysis/page-home/home-section-2/img-card.png" alt="AI Automation for Lead Follow-ups" />
                            </div>
                            <div className="col-lg-6 offset-lg-1">
                                <h2 className="mb-3 text-anime-style-2">AI Automation for Lead Follow-ups</h2>
                                <p className="pb-md-4 text-anime-style-3">
                                    We build intelligent automation systems that automatically capture, qualify, and nurture leads through personalized follow-up sequences. Our AI-powered lead automation tracks lead behavior, scores prospects, sends timely messages via email, SMS, or messaging apps, and ensures no opportunity is missed, significantly improving conversion rates and sales efficiency.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* AI-based Recommendation Systems - Image Right, Content Left */}
                <section className="data-analysis-section-2a-4 position-relative overflow-hidden py-60 bg-white">
                    <div className="container">
                        <div className="row py-60 align-items-center">
                            <div className="col-lg-5 order-lg-2 offset-lg-1">
                                <img className="mt-lg-0 mb-md-5 mb-3 img-custom-anim-right" src="/assets/img/data-analysis-img/pages/data-analysis/page-home/home-section-2/img-card.png" alt="AI-based Recommendation Systems" />
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <h2 className="mb-3 text-anime-style-2">AI-based Recommendation Systems</h2>
                                <p className="pb-md-4 text-anime-style-3">
                                    We develop sophisticated AI recommendation engines that analyze user behavior, preferences, and patterns to deliver personalized product suggestions, content recommendations, and cross-sell opportunities. Our recommendation systems use machine learning algorithms to improve accuracy over time, increasing engagement, sales, and customer satisfaction across e-commerce, streaming, and content platforms.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* AI Tools for Business - Image Left, Content Right */}
                <section className="data-analysis-section-2a-5 position-relative overflow-hidden py-60 bg-white">
                    <div className="container">
                        <div className="row py-60 align-items-center">
                            <div className="col-lg-5">
                                <img className="mt-lg-0 mb-md-5 mb-3 img-custom-anim-left" src="/assets/img/data-analysis-img/pages/data-analysis/page-home/home-section-2/img-card.png" alt="AI Tools for Business" />
                            </div>
                            <div className="col-lg-6 offset-lg-1">
                                <h2 className="mb-3 text-anime-style-2" style={{ whiteSpace: 'nowrap' }}>
                                    AI Tools for Business
                                    <div>(custom models, workflows)</div>
                                </h2>
                                <p className="pb-md-4 text-anime-style-3">
                                    We create custom AI models and intelligent workflows tailored to your specific business needs. From predictive analytics and data processing to automated decision-making systems, our custom AI solutions integrate seamlessly with your existing infrastructure. We build, train, and deploy AI models that solve unique business challenges, optimize operations, and drive innovation across your organization.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    );
}

