import Link from "next/link";

export default function Section8() {
    return (
        <>
            {/*data-analysis home section 8*/}
            <section className="data-analysis-home-section-8 position-relative overflow-hidden py-80 bg-secondary-2">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="text-center hover-up">
                                <span className="btn-text text-primary">process</span>
                                <h2 className="text-anime-style-2">How it works anyway</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-6 g-4">
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                            <div className="text-center hover-up">
                                <Link href="#">
                                    <img src="/assets/img/data-analysis-img/pages/data-analysis/page-home/home-section-8/img-1.png" alt="AI Chatbots & Assistants" />
                                </Link>
                                <Link href="#">
                                    <h6 className="mt-5">AI Chatbots &amp; Assistants</h6>
                                </Link>
                                <p className="mt-3">
                                    24/7 customer support with intelligent <br />
                                    conversation handling and seamless integration.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={300}>
                            <div className="text-center hover-up">
                                <Link href="#">
                                    <img src="/assets/img/data-analysis-img/pages/data-analysis/page-home/home-section-8/img-2.png" alt="AI Content & Post Generation" />
                                </Link>
                                <Link href="#">
                                    <h6 className="mt-5">AI Content &amp; Post Generation</h6>
                                </Link>
                                <p className="mt-3">
                                    High-quality blog posts, social media content, <br />
                                    and marketing copy tailored to your brand voice.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={400}>
                            <div className="text-center hover-up">
                                <Link href="#">
                                    <img src="/assets/img/data-analysis-img/pages/data-analysis/page-home/home-section-8/img-3.png" alt="AI Automation for Lead Follow-ups" />
                                </Link>
                                <Link href="#">
                                    <h6 className="mt-5">AI Automation for Lead Follow-ups</h6>
                                </Link>
                                <p className="mt-3">
                                    Automated lead capture, qualification, and <br />
                                    personalized follow-up sequences.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={500}>
                            <div className="text-center hover-up">
                                <Link href="#">
                                    <img src="/assets/img/data-analysis-img/pages/data-analysis/page-home/home-section-8/img-1.png" alt="AI-based Recommendation Systems" />
                                </Link>
                                <Link href="#">
                                    <h6 className="mt-5">AI-based Recommendation Systems</h6>
                                </Link>
                                <p className="mt-3">
                                    Personalized product suggestions and content <br />
                                    recommendations using machine learning.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={600}>
                            <div className="text-center hover-up">
                                <Link href="#">
                                    <img src="/assets/img/data-analysis-img/pages/data-analysis/page-home/home-section-8/img-2.png" alt="AI Tools for Business" />
                                </Link>
                                <Link href="#">
                                    <h6 className="mt-5">AI Tools for Business</h6>
                                </Link>
                                <p className="mt-3">
                                    Custom AI models and intelligent workflows <br />
                                    tailored to your specific business needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
