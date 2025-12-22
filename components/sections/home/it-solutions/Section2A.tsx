import Link from "next/link";

export default function Section2A() {
    return (
        <>
            {/*it solutions home section 2A – custom domain email hosting*/}
            <section className="it-solutions-home-section-2a position-relative overflow-hidden pt-120 pb-120 bg-light-2">
                <div className="container position-relative z-1">
                    <div className="row align-items-center g-lg-5 g-4">
                        <div className="col-lg-6">
                            <span className="text-primary fs-7 fw-medium position-relative z-1 btn-text border-top border-primary px-2 py-2">
                                Why choose XzectLabs?
                            </span>
                            <h2 className="text-dark my-3 text-anime-style-3">
                                Why choose XzectLabs to host your custom domain emails?
                            </h2>
                            <div className="p-4 p-md-5 rounded-4 bg-warning bg-opacity-10">
                                <h5 className="mb-3 text-dark">Domain and email, all in one place</h5>
                                <p className="mb-0 text-dark text-opacity-75">
                                    XzectLabs helps start your business communication from scratch. If you
                                    don&apos;t already own a domain, you can purchase one with XzectLabs and
                                    use it to set up custom email addresses for your team, all managed from a
                                    single, easy-to-use dashboard.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ps-lg-4">
                                <ul className="list-unstyled mb-0">
                                    <li className="d-flex align-items-start mb-4">
                                        <span className="me-3 icon-shape icon-40 rounded-circle bg-primary-subtle d-inline-flex align-items-center justify-content-center">
                                            <i className="bi bi-chevron-right text-primary" />
                                        </span>
                                        <div>
                                            <p className="fw-semibold text-dark mb-1">Multiple email accounts for one domain</p>
                                            <p className="mb-0 text-muted">
                                                Create separate mailboxes for every department and role under a single domain –
                                                for example <strong>info@</strong>, <strong>sales@</strong> and{" "}
                                                <strong>support@yourdomain.com</strong> – so your communication stays
                                                organised and professional.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-start mb-4">
                                        <span className="me-3 icon-shape icon-40 rounded-circle bg-primary-subtle d-inline-flex align-items-center justify-content-center">
                                            <i className="bi bi-chevron-right text-primary" />
                                        </span>
                                        <div>
                                            <p className="fw-semibold text-dark mb-1">Seamlessly collaborate with your team</p>
                                            <p className="mb-0 text-muted">
                                                Use shared inboxes, group addresses and smart forwarding to keep your team in
                                                sync without sharing passwords, so everyone can reply faster to customers.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-start mb-4">
                                        <span className="me-3 icon-shape icon-40 rounded-circle bg-primary-subtle d-inline-flex align-items-center justify-content-center">
                                            <i className="bi bi-chevron-right text-primary" />
                                        </span>
                                        <div>
                                            <p className="fw-semibold text-dark mb-1">Protect your data with our ad-free mailbox</p>
                                            <p className="mb-0 text-muted">
                                                Enjoy a clean, ad‑free mailbox with built‑in spam filtering and secure
                                                infrastructure, so your business data and customer conversations stay private.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-start mb-4">
                                        <span className="me-3 icon-shape icon-40 rounded-circle bg-primary-subtle d-inline-flex align-items-center justify-content-center">
                                            <i className="bi bi-chevron-right text-primary" />
                                        </span>
                                        <div>
                                            <p className="fw-semibold text-dark mb-1">Get support at any time</p>
                                            <p className="mb-0 text-muted">
                                                The XzectLabs team is available to help with setup, migration and day‑to‑day
                                                issues, so you&apos;re never stuck when something goes wrong.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-start">
                                        <span className="me-3 icon-shape icon-40 rounded-circle bg-primary-subtle d-inline-flex align-items-center justify-content-center">
                                            <i className="bi bi-chevron-right text-primary" />
                                        </span>
                                        <div>
                                            <p className="fw-semibold text-dark mb-1">Free plan* for small businesses</p>
                                            <p className="mb-0 text-muted">
                                                Start with an affordable starter plan designed for small teams, so you can
                                                launch professional email on your own domain without a large upfront cost.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12">
                            <p className="small text-muted mb-0">
                                *Plan availability and limits may vary.{" "}
                                <Link href="/contact" className="text-primary text-decoration-underline">
                                    Talk to XzectLabs
                                </Link>{" "}
                                to find the right option for your business.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}



