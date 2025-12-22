import Link from "next/link";

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
        <path
            d="M9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0ZM7.64486 13.1158L3.76768 9.23858L5.1799 7.82636L7.64486 10.2913L12.8201 5.1161L14.2323 6.52832L7.64486 13.1158Z"
            fill="#794AFF"
        />
    </svg>
);

export default function Section4() {
    const perks = ["Get 30 day free trial", "You can cancel anytime", "No any hidden fees pay"];

    return (
        <section className="tax-software-section-4 position-relative overflow-hidden py-120 bg-white">
            <div className="container-fluid px-4">
                {/* Intro block full-width above pricing */}
                <div className="row justify-content-center text-center mb-6">
                    <div className="col-xl-8 col-lg-10">
                        <span className="btn-text text-primary">our plans</span>
                        <h2 className="text-dark my-3">
                            Simple &amp; Affordable <span className="text-primary text-decoration-underline">Automation Plans</span>
                        </h2>
                        <p className="pb-3">
                            Choose a WhatsApp automation plan that matches your stage of growth—from getting started
                            with basic chatbots to running full-funnel automation across CRM, payments and marketing.
                        </p>
                        <div className="d-flex flex-wrap justify-content-center gap-4">
                            {perks.map((perk) => (
                                <div className="d-flex align-items-center gap-3" key={perk}>
                                    <CheckIcon />
                                    <p className="mb-0 text-dark">{perk}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Pricing cards row full width */}
                <div className="row g-4">
                    <div className="col-lg-4">
                        <div className="card-pricing rounded-4 border p-md-6 p-4">
                            <span className="text-primary btn-text">Basic Plan – For Small Businesses</span>
                            <h1 className="mb-3">
                                ₹3,999 <span className="fs-7 text-muted">/ month</span>
                            </h1>
                            <p className="fs-7">Starting at ₹3,999 / month.</p>
                            <Link href="/contact" className="btn btn-outline-dark w-100 mb-6 mt-2 hover-up">
                                get in touch
                            </Link>
                            <span className="btn-text">What’s included:</span>
                            <ul className="list-unstyled mt-3 mb-0">
                                <li className="d-flex border-top py-3">
                                    <p className="fs-7 mb-0">WhatsApp basic chatbot setup</p>
                                </li>
                                <li className="d-flex border-top py-3">
                                    <p className="fs-7 mb-0">Lead capture form integration</p>
                                </li>
                                <li className="d-flex border-top py-3">
                                    <p className="fs-7 mb-0">Automated welcome &amp; follow-up messages</p>
                                </li>
                                <li className="d-flex border-top pt-3">
                                    <p className="fs-7 mb-0">Basic sales or marketing automation</p>
                                </li>
                                <li className="d-flex border-top pt-3">
                                    <p className="fs-7 mb-0">Email / WhatsApp support</p>
                                </li>
                            </ul>
                            <p className="fs-8 mt-4 mb-0 text-muted">Best for: Startups &amp; local businesses</p>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card-pricing rounded-4 border border-primary p-md-6 p-4 position-relative">
                            <span className="text-primary btn-text">Standard Plan – For Growing Businesses</span>
                            <h1 className="mb-3">
                                ₹7,999 <span className="fs-7 text-muted">/ month</span>
                            </h1>
                            <p className="fs-7">Starting at ₹7,999 / month.</p>
                            <Link href="/contact" className="btn btn-primary border-dark w-100 mb-6 mt-2 hover-up">
                                get in touch
                            </Link>
                            <span className="btn-text">What’s included:</span>
                            <ul className="list-unstyled mt-3 mb-0">
                                <li className="d-flex border-top border-opacity-25 py-3">
                                    <p className="fs-7 mb-0">Advanced WhatsApp chatbots &amp; flows</p>
                                </li>
                                <li className="d-flex border-top border-opacity-25 py-3">
                                    <p className="fs-7 mb-0">Lead capture → follow-up automation</p>
                                </li>
                                <li className="d-flex border-top border-opacity-25 py-3">
                                    <p className="fs-7 mb-0">Sales &amp; marketing automation workflows</p>
                                </li>
                                <li className="d-flex border-top border-opacity-25 pt-3">
                                    <p className="fs-7 mb-0">Payment / CRM API integration</p>
                                </li>
                                <li className="d-flex border-top border-opacity-25 pt-3">
                                    <p className="fs-7 mb-0">Zapier / Make basic workflow setup</p>
                                </li>
                                <li className="d-flex border-top border-opacity-25 pt-3">
                                    <p className="fs-7 mb-0">Priority support</p>
                                </li>
                            </ul>
                            <p className="fs-8 mt-4 mb-0 text-muted">Best for: Growing brands &amp; service providers</p>
                            <span className="sale-off text-primary fs-8 position-absolute top-0 end-0 me-6 px-3">Recommended</span>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card-pricing rounded-4 border p-md-6 p-4">
                            <span className="text-primary btn-text">Pro Plan – For Scaling Businesses</span>
                            <h1 className="mb-3">
                                ₹14,999 <span className="fs-7 text-muted">/ month</span>
                            </h1>
                            <p className="fs-7">Starting at ₹14,999 / month.</p>
                            <Link href="/contact" className="btn btn-outline-dark w-100 mb-6 mt-2 hover-up">
                                get in touch
                            </Link>
                            <span className="btn-text">What’s included:</span>
                            <ul className="list-unstyled mt-3 mb-0">
                                <li className="d-flex border-top py-3">
                                    <p className="fs-7 mb-0">Custom WhatsApp automation &amp; broadcasts</p>
                                </li>
                                <li className="d-flex border-top py-3">
                                    <p className="fs-7 mb-0">Advanced lead nurturing automation</p>
                                </li>
                                <li className="d-flex border-top py-3">
                                    <p className="fs-7 mb-0">Full sales &amp; marketing automation system</p>
                                </li>
                                <li className="d-flex border-top pt-3">
                                    <p className="fs-7 mb-0">CRM, ERP &amp; payment gateway integrations</p>
                                </li>
                                <li className="d-flex border-top pt-3">
                                    <p className="fs-7 mb-0">Zapier, Make &amp; n8n advanced workflows</p>
                                </li>
                                <li className="d-flex border-top pt-3">
                                    <p className="fs-7 mb-0">Dedicated support &amp; optimization</p>
                                </li>
                            </ul>
                            <p className="fs-8 mt-4 mb-0 text-muted">Best for: Agencies &amp; high-volume businesses</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
