import Link from "next/link";

export default function Section2B() {
    return (
        <>
            {/*data-analysis section 2b - Article Content*/}
            <section className="data-analysis-home-section-2b position-relative overflow-hidden bg-white" style={{ width: '100%' }}>
                {/* Header/Introduction */}
                <div className="container-fluid px-0" style={{ width: '100%' }}>
                    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px 30px' }}>
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <p className="mb-3" style={{ fontSize: '14px', color: '#666', fontWeight: '400', letterSpacing: '0.5px' }}>AI Solutions</p>
                                <h1 className="mb-4" style={{ fontSize: '42px', fontWeight: '700', lineHeight: '1.2', color: '#000', letterSpacing: '-0.5px' }}>
                                    Transform Your Business with AI-Powered Solutions
                                </h1>
                                <p className="mb-0" style={{ fontSize: '18px', lineHeight: '1.75', color: '#333', fontWeight: '400' }}>
                                    Welcome to xzectlabs, where artificial intelligence meets business innovation. We provide cutting-edge AI solutions that automate processes, enhance customer experiences, and drive growth. Our comprehensive suite of AI services includes chatbots, content generation, lead automation, recommendation systems, and custom AI tools tailored to your business needs.
                                </p>
                            </div>
                            <div className="col-lg-6 mt-4 mt-lg-0">
                                <img
                                    src="/assets/img/data-analysis-img/pages/data-analysis/page-home/home-section-2/img-card.png"
                                    alt="App Icons Grid"
                                    className="img-fluid w-100"
                                    style={{ display: 'block', height: 'auto' }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px 30px' }}>
                        <div className="row">
                            <div className="col-12">
                                <p className="mb-5" style={{ fontSize: '18px', lineHeight: '1.75', color: '#333', fontWeight: '400' }}>
                                    At xzectlabs, we understand the challenges businesses face in today's competitive landscape. Our AI solutions are designed to automate repetitive tasks, improve customer engagement, generate quality content, and provide intelligent insights. Whether you're looking to enhance customer support, streamline marketing efforts, or optimize operations, our AI-powered tools deliver measurable results.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Orange CTA Box */}
                    <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px 50px' }}>
                        <div className="row">
                            <div className="col-12">
                                <div className="p-4" style={{ backgroundColor: '#FF8C42', color: '#fff', borderRadius: '4px' }}>
                                    <p className="mb-3" style={{ fontSize: '20px', fontWeight: '500', margin: '0' }}>
                                        Ready to transform your business with AI? Get started today!
                                    </p>
                                    <button className="btn px-4 py-2" style={{ fontSize: '16px', fontWeight: '600', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                                        GET STARTED
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section: "If you're a developer, you know that..." */}
                <div className="container-fluid px-0" style={{ width: '100%', backgroundColor: '#fff' }}>
                    <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
                        <div className="row">
                            <div className="col-12">
                                <h2 className="mb-5" style={{ fontSize: '32px', fontWeight: '700', lineHeight: '1.3', color: '#000', letterSpacing: '-0.3px' }}>
                                    Why businesses need AI solutions
                                </h2>
                                <ul className="mb-5" style={{ fontSize: '18px', lineHeight: '2', paddingLeft: '24px', color: '#333', fontWeight: '400' }}>
                                    <li style={{ marginBottom: '8px' }}>Manual customer support is time-consuming and costly.</li>
                                    <li style={{ marginBottom: '8px' }}>Content creation requires significant time and resources.</li>
                                    <li style={{ marginBottom: '8px' }}>Lead follow-ups often get missed or delayed.</li>
                                    <li style={{ marginBottom: '8px' }}>Personalization at scale is challenging.</li>
                                    <li style={{ marginBottom: '8px' }}>Business processes need intelligent automation.</li>
                                    <li style={{ marginBottom: '8px' }}>Competition demands faster response times.</li>
                                    <li style={{ marginBottom: '8px' }}>Data-driven insights are crucial for growth.</li>
                                    <li style={{ marginBottom: '8px' }}>Scalability requires intelligent systems.</li>
                                    <li style={{ marginBottom: '8px' }}>Customer expectations are constantly rising.</li>
                                    <li style={{ marginBottom: '8px' }}>Efficiency improvements drive profitability.</li>
                                </ul>
                                <p className="mb-0" style={{ fontSize: '18px', lineHeight: '1.75', color: '#333', fontWeight: '400' }}>
                                    At xzectlabs, we've built our AI solutions with businesses in mind. We understand the unique challenges you face every day, and we're here to help you overcome them. Our AI-powered tools are designed to automate processes, enhance customer experiences, and drive measurable business growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section: "How to make your work productive and less frustrating?" - Image Right */}
                <div className="container-fluid px-0" style={{ width: '100%', backgroundColor: '#fff' }}>
                    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: '700', lineHeight: '1.3', color: '#000', letterSpacing: '-0.3px' }}>
                                    How AI solutions transform business operations
                                </h2>
                                <p className="mb-4" style={{ fontSize: '18px', lineHeight: '1.75', color: '#333', fontWeight: '400' }}>
                                    Success isn't just about working harder—it's about working smarter with AI. At xzectlabs, we believe in a strategic approach that combines intelligent automation, data-driven insights, and continuous learning to transform how businesses operate and grow.
                                </p>
                                <p className="mb-0" style={{ fontSize: '18px', lineHeight: '1.75', color: '#333', fontWeight: '400' }}>
                                    Our proven AI implementation methodology follows a strategic cycle: Analyze your needs, Deploy AI solutions, and Optimize performance. This iterative approach ensures continuous improvement and helps you achieve maximum ROI from your AI investments while avoiding common implementation pitfalls.
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <img 
                                    src="/assets/img/data-analysis-img/pages/data-analysis/page-home/home-section-2/img-card.png" 
                                    alt="Plan Build Test Cycle" 
                                    className="img-fluid"
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section: "A simple solution for your daily work" - Image Left */}
                <div className="container-fluid px-0" style={{ width: '100%', backgroundColor: '#fff' }}>
                    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-lg-2">
                                <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: '700', lineHeight: '1.3', color: '#000', letterSpacing: '-0.3px' }}>
                                    Comprehensive AI solutions for your business
                                </h2>
                                <p className="mb-4" style={{ fontSize: '18px', lineHeight: '1.75', color: '#333', fontWeight: '400' }}>
                                    xzectlabs offers a comprehensive suite of AI solutions designed to transform your business operations. From AI chatbots and content generation to lead automation and recommendation systems, our platform provides everything you need to automate processes, enhance customer experiences, and drive growth—all integrated seamlessly into your existing workflow.
                                </p>
                                <button className="btn px-4 py-2" style={{ fontSize: '16px', fontWeight: '600', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', padding: '12px 24px' }}>
                                    Learn More
                                </button>
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <img 
                                    src="/assets/img/data-analysis-img/pages/data-analysis/page-home/home-section-2/img-card.png" 
                                    alt="Comprehensive AI Solutions" 
                                    className="img-fluid"
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section: "Features" - Image Right */}
                <div className="container-fluid px-0" style={{ width: '100%', backgroundColor: '#fff' }}>
                    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: '700', lineHeight: '1.3', color: '#000', letterSpacing: '-0.3px' }}>
                                    Our AI Services
                                </h2>
                                <p className="mb-4" style={{ fontSize: '18px', lineHeight: '1.75', color: '#333', fontWeight: '400' }}>
                                    xzectlabs comes packed with powerful AI services that transform how you do business. Our comprehensive suite includes AI chatbots for 24/7 customer support, intelligent content generation tools, automated lead follow-up systems, recommendation engines, and custom AI models tailored to your specific business needs.
                                </p>
                                <p className="mb-0" style={{ fontSize: '18px', lineHeight: '1.75', color: '#333', fontWeight: '400' }}>
                                    As you can see, our AI platform provides a clean, intuitive interface that makes it easy to manage all your AI solutions in one place. Whether you're deploying chatbots, generating content, automating lead follow-ups, or analyzing recommendations, everything is seamlessly integrated and accessible from a single dashboard.
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <img 
                                    src="/assets/img/data-analysis-img/pages/data-analysis/page-home/home-section-2/img-card.png" 
                                    alt="Features Screenshot" 
                                    className="img-fluid"
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section: "Another feature" - Image Left */}
                <div className="container-fluid px-0" style={{ width: '100%', backgroundColor: '#fff' }}>
                    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-lg-2">
                                <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: '700', lineHeight: '1.3', color: '#000', letterSpacing: '-0.3px', whiteSpace: 'nowrap' }}>
                                    AI Content & Post Generation
                                </h2>
                                <p className="mb-4" style={{ fontSize: '18px', lineHeight: '1.75', color: '#333', fontWeight: '400' }}>
                                    Beyond basic automation, xzectlabs offers advanced AI content generation that sets us apart from the competition. Our intelligent content tools help you create high-quality blog posts, social media content, product descriptions, and marketing copy automatically, saving time and maintaining brand consistency while you focus on strategic growth.
                                </p>
                                <button className="btn px-4 py-2" style={{ fontSize: '16px', fontWeight: '600', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', padding: '12px 24px' }}>
                                    Learn More
                                </button>
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <img 
                                    src="/assets/img/data-analysis-img/pages/data-analysis/page-home/home-section-2/img-card.png" 
                                    alt="AI Content Generation" 
                                    className="img-fluid"
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section: "More features" - Image Right */}
                <div className="container-fluid px-0" style={{ width: '100%', backgroundColor: '#fff' }}>
                    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: '700', lineHeight: '1.3', color: '#000', letterSpacing: '-0.3px' }}>
                                    AI Chatbots & Assistants
                                </h2>
                                <p className="mb-4" style={{ fontSize: '18px', lineHeight: '1.75', color: '#333', fontWeight: '400' }}>
                                    Customer communication is key to business success. xzectlabs includes intelligent AI chatbots and virtual assistants that provide 24/7 customer support, answer queries instantly, handle complex conversations naturally, and integrate seamlessly with your website, messaging platforms, and CRM systems—ensuring no customer inquiry goes unanswered.
                                </p>
                                <p className="mb-0" style={{ fontSize: '18px', lineHeight: '1.75', color: '#333', fontWeight: '400' }}>
                                    Our AI chatbot interface is designed for clarity and efficiency. You can deploy chatbots across multiple channels, customize conversation flows, track interactions in real-time, and analyze customer satisfaction—all within the xzectlabs platform, ensuring consistent and intelligent customer engagement.
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <img 
                                    src="/assets/img/data-analysis-img/pages/data-analysis/page-home/home-section-2/img-card.png" 
                                    alt="Chat Interface Screenshot" 
                                    className="img-fluid"
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section: "Even more features" - Image Left */}
                <div className="container-fluid px-0" style={{ width: '100%', backgroundColor: '#fff' }}>
                    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-lg-2">
                                <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: '700', lineHeight: '1.3', color: '#000', letterSpacing: '-0.3px', whiteSpace: 'nowrap' }}>
                                    AI Automation for Lead Follow-ups
                                </h2>
                                <p className="mb-4" style={{ fontSize: '18px', lineHeight: '1.75', color: '#333', fontWeight: '400' }}>
                                    xzectlabs continues to evolve with advanced AI automation features based on business needs. Our intelligent lead automation systems automatically capture, qualify, and nurture leads through personalized follow-up sequences, ensuring no opportunity is missed and significantly improving conversion rates and sales efficiency.
                                </p>
                                <button className="btn px-4 py-2" style={{ fontSize: '16px', fontWeight: '600', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', padding: '12px 24px' }}>
                                    Learn More
                                </button>
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <img 
                                    src="/assets/img/data-analysis-img/pages/data-analysis/page-home/home-section-2/img-card.png" 
                                    alt="AI Automation" 
                                    className="img-fluid"
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section: "What makes us different from others?" - Image Right */}
                <div className="container-fluid px-0" style={{ width: '100%', backgroundColor: '#fff' }}>
                    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: '700', lineHeight: '1.3', color: '#000', letterSpacing: '-0.3px' }}>
                                    AI-based Recommendation Systems
                                </h2>
                                <p className="mb-4" style={{ fontSize: '18px', lineHeight: '1.75', color: '#333', fontWeight: '400' }}>
                                    At xzectlabs, we understand that businesses need intelligent systems that deliver personalized experiences at scale. Our AI recommendation engines analyze user behavior, preferences, and patterns to deliver personalized product suggestions, content recommendations, and cross-sell opportunities—increasing engagement, sales, and customer satisfaction across e-commerce, streaming, and content platforms.
                                </p>
                                <p className="mb-0" style={{ fontSize: '18px', lineHeight: '1.75', color: '#333', fontWeight: '400' }}>
                                    Our integrated recommendation system provides everything you need to deliver personalized experiences efficiently. With support for multiple data sources, real-time learning algorithms, and seamless integration with your existing platforms, xzectlabs is the perfect choice for businesses looking to enhance customer engagement and drive sales through intelligent recommendations.
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <img 
                                    src="/assets/img/data-analysis-img/pages/data-analysis/page-home/home-section-2/img-card.png" 
                                    alt="Code Editor Screenshot" 
                                    className="img-fluid"
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section: "Our pricing" - Image Left */}
                <div className="container-fluid px-0" style={{ width: '100%', backgroundColor: '#fff' }}>
                    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-lg-2">
                                <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: '700', lineHeight: '1.3', color: '#000', letterSpacing: '-0.3px' }}>
                                    AI Tools for Business (Custom Models & Workflows)
                                </h2>
                                <p className="mb-4" style={{ fontSize: '18px', lineHeight: '1.75', color: '#333', fontWeight: '400' }}>
                                    xzectlabs offers custom AI models and intelligent workflows tailored to your specific business needs. Whether you're a small startup or a large enterprise, we build, train, and deploy AI models that solve unique business challenges, optimize operations, and drive innovation across your organization.
                                </p>
                                <p className="mb-0" style={{ fontSize: '18px', lineHeight: '1.75', color: '#333', fontWeight: '400' }}>
                                    Our custom AI solutions integrate seamlessly with your existing infrastructure, from predictive analytics and data processing to automated decision-making systems. We work closely with your team to understand your unique requirements and deliver AI-powered tools that transform how you operate, compete, and grow in today's digital marketplace.
                                </p>
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <img 
                                    src="/assets/img/data-analysis-img/pages/data-analysis/page-home/home-section-2/img-card.png" 
                                    alt="Pricing Plans Screenshot" 
                                    className="img-fluid"
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

