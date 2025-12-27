import Link from "next/link";
import { useState } from "react";

export default function SectionFAQ() {
    const faqs = [
        {
            question: "Who are we and what do we do?",
            answer: "We are a full-service digital solutions company providing website development, automation, AI, marketing, and scalable technology solutions to help businesses grow online efficiently."
        },
        {
            question: "What industries do you work with?",
            answer: "We work with startups, small businesses, enterprises, and agencies across industries like e-commerce, fintech, healthcare, education, real estate, and service-based businesses."
        },
        {
            question: "Do you provide custom website and software solutions?",
            answer: "Yes, all our websites, web applications, CRM systems, and SaaS platforms are custom-built based on your business needs, goals, and future scalability requirements."
        },
        {
            question: "Can you redesign and optimize an existing website?",
            answer: "Absolutely. We specialize in website redesign, performance optimization, mobile responsiveness, and SEO improvements to enhance user experience and search engine rankings."
        },
        {
            question: "Do you offer ongoing website maintenance and support?",
            answer: "Yes, we provide regular updates, backups, security monitoring, content updates, and technical support to ensure your website remains secure and up-to-date."
        },
        {
            question: "What automation and integration services do you provide?",
            answer: "We automate lead capture, follow-ups, sales workflows, and system integrations using WhatsApp, APIs, CRM tools, Zapier, Make, and n8n for improved efficiency."
        },
        {
            question: "Do you develop AI-powered solutions?",
            answer: "Yes, we build AI chatbots, content generation tools, recommendation systems, and AI automation workflows to enhance customer engagement and decision-making."
        },
        {
            question: "Can you build CRM and SaaS platforms?",
            answer: "We design and develop custom CRM systems, SaaS platforms, dashboards, and admin panels with secure integrations and automation for business growth."
        },
        {
            question: "Do you help with marketing and SEO?",
            answer: "Yes, we offer performance marketing, SEO services, conversion tracking, CRO, and social media marketing to drive traffic, leads, and measurable ROI."
        },
        {
            question: "Why should businesses choose you as their digital partner?",
            answer: "We combine technology, creativity, automation, and marketing under one roof, delivering scalable, secure, and result-driven solutions tailored to your business goals."
        }
    ];

    return (
        <>
            <section className="faq-section position-relative overflow-hidden pt-20 pb-120 bg-white">
                <div className="container position-relative z-1">
                    <div className="text-center mb-5">
                        <h2 className="text-dark">Frequently Asked Questions</h2>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="accordion-2" id="accordionFAQ">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="card border-0 rounded-0 bg-transparent mb-3">
                                        <div className="card-header border-0 p-0 bg-transparent">
                                            <Link
                                                className="p-4 fw-bold d-flex align-items-center text-decoration-none collapsed"
                                                data-bs-toggle="collapse"
                                                href={`#collapseExample${index}`}
                                                role="button"
                                                aria-expanded="false"
                                                aria-controls={`collapseExample${index}`}
                                                style={{ backgroundColor: '#FF5722', color: 'white' }}
                                            >
                                                <h6 className="mb-0 text-white me-auto">
                                                    {faq.question}
                                                </h6>
                                                <span className="ms-auto arrow" />
                                            </Link>
                                        </div>
                                        <div id={`collapseExample${index}`} className="collapse" data-bs-parent="#accordionFAQ">
                                            <div className="card-body bg-white text-dark p-4 border border-top-0 border-warning">
                                                <p className="mb-0">{faq.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
