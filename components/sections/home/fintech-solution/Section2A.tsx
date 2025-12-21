import Link from "next/link";

export default function Section2A() {
    return (
        <>
            {/*fintech-solution section 2a - CRM Services*/}
            <section className="fintech-solution-section-2a position-relative overflow-hidden py-120">
                <div className="container">
                    {/* Custom CRM Systems - Image Left, Content Right */}
                    <div className="row py-120 align-items-center">
                        <div className="col-lg-5">
                            <img className="mt-lg-0 mb-md-5 mb-3 wow img-custom-anim-left" src="/assets/img/fintech-solution-img/pages/fintech-solution/page-home/home-section-2/img-card.png" alt="Custom CRM Systems" />
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <h2 className="mb-3 text-anime-style-2">🔧 Custom CRM Systems</h2>
                            <p className="pb-md-4 text-anime-style-3">
                                We design and develop fully customized CRM systems that are built specifically around your business processes, sales workflows, and operational requirements. Unlike generic CRM tools, our custom solutions give you complete control over features, data, and integrations. From lead capture to customer retention, everything is streamlined into a single platform, improving efficiency, team productivity, and decision-making while scaling effortlessly as your business grows.
                            </p>
                        </div>
                    </div>

                    {/* Lead & Pipeline Management - Image Right, Content Left */}
                    <div className="row py-120 align-items-center">
                        <div className="col-lg-5 order-lg-2 offset-lg-1">
                            <img className="mt-lg-0 mb-md-5 mb-3 wow img-custom-anim-right" src="/assets/img/fintech-solution-img/pages/fintech-solution/page-home/home-section-2/img-card.png" alt="Lead & Pipeline Management" />
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <h2 className="mb-3 text-anime-style-2">📊 Lead & Pipeline Management</h2>
                            <p className="pb-md-4 text-anime-style-3">
                                Our advanced lead and pipeline management solutions help you capture leads from multiple sources, assign them automatically, track their journey across every sales stage, and prioritize high-value opportunities. With clear pipeline visibility, status updates, and performance tracking, your sales team can focus on closing deals faster while management gains full transparency into sales progress and bottlenecks.
                            </p>
                        </div>
                    </div>

                    {/* Client & Sales Tracking - Image Left, Content Right */}
                    <div className="row py-120 align-items-center">
                        <div className="col-lg-5">
                            <img className="mt-lg-0 mb-md-5 mb-3 wow img-custom-anim-left" src="/assets/img/fintech-solution-img/pages/fintech-solution/page-home/home-section-2/img-card.png" alt="Client & Sales Tracking" />
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <h2 className="mb-3 text-anime-style-2">🤝 Client & Sales Tracking</h2>
                            <p className="pb-md-4 text-anime-style-3">
                                We enable complete tracking of client interactions, communication history, deals, and sales performance in real time. Every call, message, meeting, and transaction is logged within the CRM, helping your team maintain strong client relationships, identify repeat opportunities, and improve customer satisfaction through personalized engagement and timely follow-ups.
                            </p>
                        </div>
                    </div>

                    {/* Automated WhatsApp / Email Follow-ups - Image Right, Content Left */}
                    <div className="row py-120 align-items-center">
                        <div className="col-lg-5 order-lg-2 offset-lg-1">
                            <img className="mt-lg-0 mb-md-5 mb-3 wow img-custom-anim-right" src="/assets/img/fintech-solution-img/pages/fintech-solution/page-home/home-section-2/img-card.png" alt="Automated Follow-ups" />
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <h2 className="mb-3 text-anime-style-2">🔁 Automated WhatsApp / Email Follow-ups</h2>
                            <p className="pb-md-4 text-anime-style-3">
                                Our CRM solutions include powerful automation for WhatsApp and email follow-ups, ensuring no lead or customer is ever missed. Automated messages, reminders, and notifications are triggered based on user actions, lead status, or time intervals. This reduces manual work, improves response time, increases conversion rates, and keeps your communication consistent and professional at scale.
                            </p>
                        </div>
                    </div>

                    {/* CRM + API Integrations - Image Left, Content Right */}
                    <div className="row py-120 align-items-center">
                        <div className="col-lg-5">
                            <img className="mt-lg-0 mb-md-5 mb-3 wow img-custom-anim-left" src="/assets/img/fintech-solution-img/pages/fintech-solution/page-home/home-section-2/img-card.png" alt="CRM API Integrations" />
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <h2 className="mb-3 text-anime-style-2">🔗 CRM + API Integrations (Meta, Google, WhatsApp)</h2>
                            <p className="pb-md-4 text-anime-style-3">
                                We seamlessly integrate your CRM with platforms like Meta Ads, Google Ads, and WhatsApp through secure APIs. This allows real-time lead syncing, automated data flow, accurate conversion tracking, and centralized reporting. With all marketing and sales data connected, you gain deeper insights, better campaign optimization, and a unified system that drives smarter business decisions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

