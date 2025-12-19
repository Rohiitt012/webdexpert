type FaqItem = {
    id: string;
    question: string;
    answer: string;
};

export default function Section10() {
    const leftFaqs: FaqItem[] = [
        {
            id: "hosting-faq-1",
            question: "What is web hosting?",
            answer:
                "Web hosting is a service that stores your website’s files on a secure server and makes your site accessible to people on the internet 24/7.",
        },
        {
            id: "hosting-faq-2",
            question: "What types of web hosting options are available?",
            answer:
                "Popular options include shared hosting, VPS (Virtual Private Server), cloud hosting and dedicated servers. Each offers different levels of performance, control and pricing.",
        },
        {
            id: "hosting-faq-3",
            question: "How can I get a free domain name?",
            answer:
                "Many of our hosting plans include a free domain name for the first year. During signup you choose an available domain and we register it for you as part of the plan.",
        },
        {
            id: "hosting-faq-4",
            question: "What is the 30-day money-back guarantee?",
            answer:
                "If you’re not satisfied within the first 30 days, you can cancel eligible hosting services and receive a refund in line with our refund policy and terms.",
        },
    ];

    const rightFaqs: FaqItem[] = [
        {
            id: "hosting-faq-5",
            question: "Is Xzect hosting recommended for WordPress?",
            answer:
                "Yes. Our servers are optimized for WordPress with one‑click installs, automatic updates, built‑in caching and security tools to keep your site fast and secure.",
        },
        {
            id: "hosting-faq-6",
            question: "Can I get professional email hosting?",
            answer:
                "You can create custom email addresses using your domain name (like you@yourbrand.com) and access them via webmail or your favorite email client.",
        },
        {
            id: "hosting-faq-7",
            question: "Why choose Xzect for hosting?",
            answer:
                "We combine fast SSD/NVMe storage, strong security, 24/7 support and scalable plans so your website stays online, protected and ready to grow with your business.",
        },
        {
            id: "hosting-faq-8",
            question: "Can I upgrade or downgrade my plan later?",
            answer:
                "Yes. You can change plans as your traffic and resource needs evolve, and our team will help you migrate with minimal or no downtime.",
        },
    ];

    const renderItem = (item: FaqItem, index: number, parentClass: string) => (
        <div key={item.id} className="border-top py-3">
            <button
                className="w-100 d-flex align-items-center justify-content-between bg-transparent border-0 text-start px-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${item.id}`}
                aria-expanded={index === 0}
                aria-controls={item.id}
            >
                <p className="mb-0 fw-semibold text-uppercase letter-spacing-1">{item.question}</p>
                <div
                    className="d-inline-flex align-items-center justify-content-center rounded-circle border border-primary text-primary flex-shrink-0 ms-3"
                    style={{ width: 40, height: 40 }}
                >
                    <span className="fs-4">+</span>
                </div>
            </button>
            <div
                id={item.id}
                className={`collapse${index === 0 ? " show" : ""}`}
                data-bs-parent={`.${parentClass}`}
            >
                <p className="mt-3 mb-0 text-muted">{item.answer}</p>
            </div>
        </div>
    );

    return (
        <>
            {/*it-solutions-home-section-10 – FAQs*/}
            <section className="it-solutions-home-section-10 position-relative overflow-hidden pt-120 pb-120 bg-white border-top">
                <div className="container position-relative z-1">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h2 className="text-dark display-5 mb-0">FAQs</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 hosting-faq-left">{leftFaqs.map((item, index) => renderItem(item, index, "hosting-faq-left"))}</div>
                        <div className="col-lg-6 mt-4 mt-lg-0 hosting-faq-right">{rightFaqs.map((item, index) => renderItem(item, index, "hosting-faq-right"))}</div>
                    </div>
                </div>
            </section>
        </>
    );
}


