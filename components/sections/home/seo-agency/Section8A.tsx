"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    watchOverflow: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
};

export default function Section8A() {
    return (
        <>
            {/*seo-agency home section 8A - Types Of SEO Services*/}
            <section className="seo-agency-home-section-8a position-relative overflow-hidden py-80" style={{ backgroundColor: '#eff6ff' }}>
                <div className="container position-relative z-1">
                    {/* Heading Section */}
                    <div className="row justify-content-center mb-60">
                        <div className="col-lg-10">
                            <div className="text-center">
                                <h2 className="text-dark mb-4" style={{ fontSize: '48px', lineHeight: '1.3', fontWeight: '400' }}>
                                    Types Of <span style={{ fontWeight: 'bold' }}>SEO Services We Offer</span>
                                </h2>
                                <p className="text-dark mx-auto" style={{ fontSize: '18px', lineHeight: '1.8', maxWidth: '1000px' }}>
                                    At XzectLabs Technologies, we provide a complete range of SEO services tailored to meet the needs of businesses of every size and industry. Whether you're a small local shop looking to attract nearby customers or a global brand aiming to dominate competitive markets, our SEO solutions are designed to deliver measurable growth.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Local SEO Services Section */}
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="content-wrapper pe-lg-5">
                                <h3 className="text-dark mb-4" style={{ fontSize: '38px', lineHeight: '1.3', fontWeight: 'bold' }}>
                                    Local SEO Services
                                </h3>
                                <p className="text-dark mb-5" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                                    Our Local SEO Services help businesses dominate local search results, attract nearby customers, and grow their presence in target cities or regions. Our services include Google Business Profile optimization, local keyword targeting, citation building, localized content creation, and reputation management to ensure your business shows up when customers search for services near them.
                                </p>
                                <a href="#contact" className="btn btn-dark btn-lg rounded-2" style={{ fontSize: '16px', fontWeight: '500', padding: '14px 40px' }}>
                                    Local SEO Services &gt;&gt;
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="image-wrapper text-center">
                                <img
                                    src="/assets/img/seo-agency-img/pages/seo-agency/page-home/section-8a/local-seo.png"
                                    alt="Local SEO Services"
                                    className="img-fluid"
                                    style={{ maxWidth: '550px', width: '100%' }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Ecommerce SEO Services Section */}
                    <div className="row align-items-center mt-100">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="image-wrapper text-center">
                                <img
                                    src="/assets/img/seo-agency-img/pages/seo-agency/page-home/section-8a/ecommerce-seo.png"
                                    alt="Ecommerce SEO Services"
                                    className="img-fluid"
                                    style={{ maxWidth: '550px', width: '100%' }}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="content-wrapper ps-lg-5">
                                <h3 className="text-dark mb-4" style={{ fontSize: '38px', lineHeight: '1.3', fontWeight: 'bold' }}>
                                    Ecommerce SEO Services
                                </h3>
                                <p className="text-dark mb-5" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                                    Our eCommerce SEO Services help online stores increase visibility, attract qualified shoppers, and boost sales across global markets. Our services include product page optimization, technical SEO for better site performance, category and filter page SEO, content marketing, and strategic link building, all designed to drive more traffic and conversions. With over a decade of SEO expertise and successful SEO campaigns worldwide, XzectLabs ensures your eCommerce business stands out in competitive search results and delivers measurable growth.
                                </p>
                                <a href="#contact" className="btn btn-dark btn-lg rounded-2" style={{ fontSize: '16px', fontWeight: '500', padding: '14px 40px' }}>
                                    Ecommerce SEO Services &gt;&gt;
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Small Business SEO Services Section */}
                    <div className="row align-items-center mt-100">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="content-wrapper pe-lg-5">
                                <h3 className="text-dark mb-4" style={{ fontSize: '38px', lineHeight: '1.3', fontWeight: 'bold' }}>
                                    Small Business SEO Services
                                </h3>
                                <p className="text-dark mb-5" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                                    Our Small Business SEO Services help local and growing companies boost their online visibility, attract more customers, and compete with bigger brands. Our services include local SEO optimization, Google Business Profile management, targeted keyword research, content creation, and ethical link building, everything a small business needs to generate leads and grow online. With over 14 years of experience, we ensure your small business achieves measurable results without breaking the budget.
                                </p>
                                <a href="#contact" className="btn btn-dark btn-lg rounded-2" style={{ fontSize: '16px', fontWeight: '500', padding: '14px 40px' }}>
                                    Small Business SEO &gt;&gt;
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="image-wrapper text-center">
                                <img
                                    src="/assets/img/seo-agency-img/pages/seo-agency/page-home/section-8a/small-business-seo.png"
                                    alt="Small Business SEO Services"
                                    className="img-fluid"
                                    style={{ maxWidth: '550px', width: '100%' }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Outsourced SEO Services Section */}
                    <div className="row align-items-center mt-100">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="image-wrapper text-center">
                                <img
                                    src="/assets/img/seo-agency-img/pages/seo-agency/page-home/section-8a/outsourced-seo.png"
                                    alt="Outsourced SEO Services"
                                    className="img-fluid"
                                    style={{ maxWidth: '550px', width: '100%' }}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="content-wrapper ps-lg-5">
                                <h3 className="text-dark mb-4" style={{ fontSize: '38px', lineHeight: '1.3', fontWeight: 'bold' }}>
                                    Outsourced SEO Services
                                </h3>
                                <p className="text-dark mb-5" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                                    We provide outsourced SEO Services for businesses worldwide and white-label SEO Services for agencies at very affordable monthly charges. As an end-to-end marketing business, web designer, or web developer, you may want to include SEO in your list of services.
                                </p>
                                <a href="#contact" className="btn btn-dark btn-lg rounded-2" style={{ fontSize: '16px', fontWeight: '500', padding: '14px 40px' }}>
                                    Outsourced SEO Service &gt;&gt;
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* WordPress SEO Services Section */}
                    <div className="row align-items-center mt-100">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="content-wrapper pe-lg-5">
                                <h3 className="text-dark mb-4" style={{ fontSize: '38px', lineHeight: '1.3', fontWeight: 'bold' }}>
                                    WordPress SEO Services
                                </h3>
                                <p className="text-dark mb-5" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                                    Our WordPress SEO services help businesses of all sizes leverage the power of Search Engine Optimization to attract high-quality traffic to their WordPress websites.
                                </p>
                                <a href="#contact" className="btn btn-dark btn-lg rounded-2" style={{ fontSize: '16px', fontWeight: '500', padding: '14px 40px' }}>
                                    WordPress SEO Services &gt;&gt;
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="image-wrapper text-center">
                                <img
                                    src="/assets/img/seo-agency-img/pages/seo-agency/page-home/section-8a/wordpress-seo.png"
                                    alt="WordPress SEO Services"
                                    className="img-fluid"
                                    style={{ maxWidth: '550px', width: '100%' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*seo-agency home section 8A Part 2 - Deliverables Of Our SEO Services*/}
            <section className="seo-agency-home-section-8a-part2 position-relative overflow-hidden py-80 bg-white">
                <div className="container position-relative z-1">
                    {/* Heading Section */}
                    <div className="row justify-content-center mb-60">
                        <div className="col-lg-10">
                            <div className="text-center">
                                <h2 className="text-dark mb-5" style={{ fontSize: '48px', lineHeight: '1.3', fontWeight: '400' }}>
                                    Deliverables Of Our <span style={{ fontWeight: 'bold' }}>SEO Services</span>
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* SEO Audit Section */}
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="content-wrapper pe-lg-5">
                                <h3 className="text-dark mb-4" style={{ fontSize: '38px', lineHeight: '1.3', fontWeight: 'bold' }}>
                                    SEO Audit
                                </h3>
                                <p className="text-dark mb-5" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                                    Our SEO audit evaluates your website's health to identify opportunities for improvement. To ensure comprehensiveness, our SEO executives perform both manual and automated audits to prevent errors from slipping through the cracks. We utilize powerful SEO tools, such as SEMrush, SE Ranking, and Google Search Console, to analyze various aspects of your website. Here we check/identify:
                                </p>
                                <ul className="list-unstyled" style={{ fontSize: '18px', lineHeight: '2' }}>
                                    <li className="mb-3">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Issues with indexing, crawlability, and site-architecture
                                    </li>
                                    <li className="mb-3">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Issues with content quality, keyword usage, and URL structure
                                    </li>
                                    <li className="mb-3">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Issues with page load speed and mobile friendliness.
                                    </li>
                                    <li className="mb-0">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Which keywords are most effective and can help achieve goals
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="image-wrapper text-center">
                                <img
                                    src="/assets/img/seo-agency-img/pages/seo-agency/page-home/section-8a/seo-audit.png"
                                    alt="SEO Audit"
                                    className="img-fluid"
                                    style={{ maxWidth: '550px', width: '100%' }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Competitor Analysis Section */}
                    <div className="row align-items-center mt-100">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="image-wrapper text-center">
                                <img
                                    src="/assets/img/seo-agency-img/pages/seo-agency/page-home/section-8a/competitor-analysis.png"
                                    alt="Competitor Analysis"
                                    className="img-fluid"
                                    style={{ maxWidth: '550px', width: '100%' }}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="content-wrapper ps-lg-5">
                                <h3 className="text-dark mb-4" style={{ fontSize: '38px', lineHeight: '1.3', fontWeight: 'bold' }}>
                                    Competitor Analysis
                                </h3>
                                <p className="text-dark mb-5" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                                    In SEO, analyzing your competitors' SEO strategies is essential for gaining insights and developing effective roadmaps to achieve higher search rankings. RankON's SEO experts do this perfectly, fetching out every powerful detail from your competitors' SEO strategy.  Here's how we perform competitor analysis:
                                </p>
                                <ul className="list-unstyled" style={{ fontSize: '18px', lineHeight: '2' }}>
                                    <li className="mb-3">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Domain Age and Authority Analysis
                                    </li>
                                    <li className="mb-3">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Backlink Audit
                                    </li>
                                    <li className="mb-3">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Content Audit
                                    </li>
                                    <li className="mb-3">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Blogging Strategy
                                    </li>
                                    <li className="mb-3">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Link Intersect
                                    </li>
                                    <li className="mb-3">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Keyword Gap/Content Gap
                                    </li>
                                    <li className="mb-0">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Loading Speed, etc.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Keyword Research & Mapping Section */}
                    <div className="row align-items-center mt-100">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="content-wrapper pe-lg-5">
                                <h3 className="text-dark mb-4" style={{ fontSize: '38px', lineHeight: '1.3', fontWeight: 'bold' }}>
                                    Keyword Research & Mapping
                                </h3>
                                <p className="text-dark mb-5" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                                    Through keyword research and mapping, we determine the keywords your audience uses to find services or products relevant to your business. Through mapping, we create a strategy that assigns keywords to specific pages on your website. Here's how we filter and map  your keywords for further SEO:
                                </p>
                                <ul className="list-unstyled" style={{ fontSize: '18px', lineHeight: '2' }}>
                                    <li className="mb-3">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Using advanced SEO tools like Semrush, SE Ranking, Google Keyword Planner, and more.
                                    </li>
                                    <li className="mb-3">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Understanding the intent of keywords, including informational, navigational, commercial, and transactional.
                                    </li>
                                    <li className="mb-0">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Filtering keywords against various factors like relevance, search volume, difficulty, and more.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="image-wrapper text-center">
                                <img
                                    src="/assets/img/seo-agency-img/pages/seo-agency/page-home/section-8a/keyword-research.png"
                                    alt="Keyword Research & Mapping"
                                    className="img-fluid"
                                    style={{ maxWidth: '550px', width: '100%' }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* On-Page SEO Section */}
                    <div className="row align-items-center mt-100">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="image-wrapper text-center">
                                <img
                                    src="/assets/img/seo-agency-img/pages/seo-agency/page-home/section-8a/on-page-seo.png"
                                    alt="On-Page SEO"
                                    className="img-fluid"
                                    style={{ maxWidth: '550px', width: '100%' }}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="content-wrapper ps-lg-5">
                                <h3 className="text-dark mb-4" style={{ fontSize: '38px', lineHeight: '1.3', fontWeight: 'bold' }}>
                                    On-Page SEO
                                </h3>
                                <p className="text-dark mb-5" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                                    On-Page SEO is integral. Our professional SEO experts perform a detailed audit of your website to rule out all the on-page factors that may be affecting your website's organic search rankings.  We review and refine your website's content and structure to make it search-engine-friendly and engaging for users. An on-page SEO service includes:
                                </p>
                                <ul className="list-unstyled" style={{ fontSize: '18px', lineHeight: '2' }}>
                                    <li className="mb-3">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Optimizing headings, meta titles, and meta descriptions for target keywords
                                    </li>
                                    <li className="mb-3">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Ensuring proper use of HTML tags (H1, H2, H3) and structured data
                                    </li>
                                    <li className="mb-3">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Improving readability, keyword placement, and content relevance
                                    </li>
                                    <li className="mb-3">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Implementing canonical tags and fixing duplicate content issues
                                    </li>
                                    <li className="mb-3">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Optimizing internal linking for efficient transfer of link juice
                                    </li>
                                    <li className="mb-0">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Using proper anchor text for targeted keywords
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Off-page SEO Section */}
                    <div className="row align-items-center mt-100">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="content-wrapper pe-lg-5">
                                <h3 className="text-dark mb-4" style={{ fontSize: '38px', lineHeight: '1.3', fontWeight: 'bold' }}>
                                    Off-page SEO
                                </h3>
                                <p className="text-dark mb-5" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                                    Search engines check for high-quality backlinks to trust and rank your website. Our off-page SEO services aim to drive quality website traffic and improve your website's search rankings and domain authority. We perform off-page SEO by:
                                </p>
                                <ul className="list-unstyled" style={{ fontSize: '18px', lineHeight: '2' }}>
                                    <li className="mb-3">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Identifying quality and high-authoritative websites relevant to your niche.
                                    </li>
                                    <li className="mb-3">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Building backlinks through different backlink building techniques like Email outreach, editorial backlinks, resources, and link roundups, followed by regular off-page SEO activities.
                                    </li>
                                    <li className="mb-3">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Optimizing Google Business Profile and local directory listings
                                    </li>
                                    <li className="mb-3">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Promoting content on social platforms to drive engagement and traffic.
                                    </li>
                                    <li className="mb-3">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Building a consistent brand presence across channels.
                                    </li>
                                    <li className="mb-3">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        NAP Syndication
                                    </li>
                                    <li className="mb-0">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Competitor Backlink Research
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="image-wrapper text-center">
                                <img
                                    src="/assets/img/seo-agency-img/pages/seo-agency/page-home/section-8a/off-page-seo.png"
                                    alt="Off-page SEO"
                                    className="img-fluid"
                                    style={{ maxWidth: '550px', width: '100%' }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Content Strategization and Creation Section */}
                    <div className="row align-items-center mt-100">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="image-wrapper text-center">
                                <img
                                    src="/assets/img/seo-agency-img/pages/seo-agency/page-home/section-8a/content-strategy.png"
                                    alt="Content Strategization and Creation"
                                    className="img-fluid"
                                    style={{ maxWidth: '550px', width: '100%' }}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="content-wrapper ps-lg-5">
                                <h3 className="text-dark mb-4" style={{ fontSize: '38px', lineHeight: '1.3', fontWeight: 'bold' }}>
                                    Content Strategization and Creation
                                </h3>
                                <p className="text-dark mb-5" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                                    Every update rolled out by Google directs website owners to focus on the type of content they're serving to website visitors. With content being the king of SEO, XzectLabs Technologies has a team of skilled content writers who craft high-quality, relevant, and engaging content tailored to your audience's needs, thereby elevating engagement.  Here's what we do to improve your website's content:
                                </p>
                                <ul className="list-unstyled" style={{ fontSize: '18px', lineHeight: '2' }}>
                                    <li className="mb-3">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Creating content that's informative, engaging, and well-structured
                                    </li>
                                    <li className="mb-3">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Updating existing content for freshness and relevance
                                    </li>
                                    <li className="mb-3">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Conducting in-depth research for on-page blogs and web content
                                    </li>
                                    <li className="mb-0">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Performing grammar corrections to ensure your website is error-free.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Google Business Profile Optimization Section */}
                    <div className="row align-items-center mt-100">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="content-wrapper pe-lg-5">
                                <h3 className="text-dark mb-4" style={{ fontSize: '38px', lineHeight: '1.3', fontWeight: 'bold' }}>
                                    Google Business Profile Optimization
                                </h3>
                                <p className="text-dark mb-5" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                                    We have been in this industry for 14 years and have a deep understanding of the value a well-optimized GBP profile can offer to any business. From enhancing local visibility to boosting map rankings, and from attracting potential customers to establishing trust, a GBP role can be beneficial in many ways. Here's what we do to optimize your GBP profile-
                                </p>
                                <ul className="list-unstyled" style={{ fontSize: '18px', lineHeight: '2' }}>
                                    <li className="mb-3">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Completing your GBP with accurate information, including name, address, phone number, and website URL.
                                    </li>
                                    <li className="mb-3">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Writing an enthralling and keyword-rich business description showcasing your website's products and services.
                                    </li>
                                    <li className="mb-3">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Choosing the appropriate category to increase discoverability in searches.
                                    </li>
                                    <li className="mb-3">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Adding images, videos, and more to enhance engagement and showcase your business.
                                    </li>
                                    <li className="mb-3">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Encouraging and responding to positive reviews, and providing thoughtful replies to negative ones.
                                    </li>
                                    <li className="mb-0">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Aligning GBP optimization with Local SEO to improve local search visibility.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="image-wrapper text-center">
                                <img
                                    src="/assets/img/seo-agency-img/pages/seo-agency/page-home/section-8a/gbp-optimization.png"
                                    alt="Google Business Profile Optimization"
                                    className="img-fluid"
                                    style={{ maxWidth: '550px', width: '100%' }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Monthly Reporting Section */}
                    <div className="row align-items-center mt-100">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="image-wrapper text-center">
                                <img
                                    src="/assets/img/seo-agency-img/pages/seo-agency/page-home/section-8a/monthly-reporting.png"
                                    alt="Monthly Reporting"
                                    className="img-fluid"
                                    style={{ maxWidth: '550px', width: '100%' }}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="content-wrapper ps-lg-5">
                                <h3 className="text-dark mb-4" style={{ fontSize: '38px', lineHeight: '1.3', fontWeight: 'bold' }}>
                                    Monthly Reporting
                                </h3>
                                <p className="text-dark mb-5" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                                    XzectLabs's SEO services in India are client-centric, and we go above and beyond to ensure our clients feel answered. To achieve this, we send reports to our clients on a monthly basis, keeping them updated on the SEO performance of their website. Here's what our monthly report includes:
                                </p>
                                <ul className="list-unstyled" style={{ fontSize: '18px', lineHeight: '2' }}>
                                    <li className="mb-3">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Improvement or decline in keyword rankings
                                    </li>
                                    <li className="mb-3">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Website's traffic and top-performing pages for that month
                                    </li>
                                    <li className="mb-3">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Overview of high-quality backlinks acquired in that month.
                                    </li>
                                    <li className="mb-0">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Next steps and strategic recommendations for continued growth
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* AEO Focussed SEO Section */}
                    <div className="row align-items-center mt-100">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="content-wrapper pe-lg-5">
                                <h3 className="text-dark mb-4" style={{ fontSize: '38px', lineHeight: '1.3', fontWeight: 'bold' }}>
                                    AEO Focussed SEO
                                </h3>
                                <p className="text-dark mb-5" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                                    XzectLabs's SEO services help your website's visibility across answer-driven search results. Through multiple trials and hits, we have developed an approach that helps your website appear in featured snippets, voice search results, and other direct-answer formats. We do this by:
                                </p>
                                <ul className="list-unstyled" style={{ fontSize: '18px', lineHeight: '2' }}>
                                    <li className="mb-3">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Optimizing your website for FAQs
                                    </li>
                                    <li className="mb-3">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Implementing structured data across pages
                                    </li>
                                    <li className="mb-3">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        Including questions that start with the 4 W's: "which", "where", "when", and "what".
                                    </li>
                                    <li className="mb-0">
                                        <span style={{ marginRight: '10px' }}>›</span>
                                        We use Google's "People Also Ask" section to answer the most common questions in your industry.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="image-wrapper text-center">
                                <img
                                    src="/assets/img/seo-agency-img/pages/seo-agency/page-home/section-8a/aeo-focused-seo.png"
                                    alt="AEO Focussed SEO"
                                    className="img-fluid"
                                    style={{ maxWidth: '550px', width: '100%' }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="row mt-80">
                        <div className="col-12 text-center">
                            <a href="#contact" className="btn btn-outline-dark btn-lg px-5 py-3 rounded-2" style={{ fontSize: '18px', fontWeight: '500' }}>
                                Join Hundreds of Successful Clients—Get Started Now →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/*seo-agency home section 8A Part 3 - SEO Process*/}
            <section className="seo-agency-home-section-8a-part3 position-relative overflow-hidden py-80" style={{ backgroundColor: '#eff6ff' }}>
                <div className="container position-relative z-1">
                    {/* Heading Section */}
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="text-center">
                                <h2 className="text-dark mb-4" style={{ fontSize: '48px', lineHeight: '1.3', fontWeight: '400' }}>
                                    XzectLabs's <span style={{ fontWeight: 'bold' }}>SEO Process</span>
                                </h2>
                                <h4 className="text-dark mb-4" style={{ fontSize: '28px', lineHeight: '1.4', fontWeight: 'bold' }}>
                                    Defined by SEO Experts in India with 14 years of Industry Experience
                                </h4>
                                <h3 className="text-dark mb-5" style={{ fontSize: '32px', lineHeight: '1.4', fontWeight: 'bold' }}>
                                    How Our SEO Company India Boosts Your Rankings Fast
                                </h3>
                                <p className="text-dark mx-auto mb-4" style={{ fontSize: '18px', lineHeight: '1.8', maxWidth: '1100px' }}>
                                    At XzectLabs Technologies, we're proud to be the most preferred SEO agency in India. We go beyond traditional SEO and focus on creating tailored strategies that align with your brand's goals.
                                </p>
                                <p className="text-dark mx-auto mb-4" style={{ fontSize: '18px', lineHeight: '1.8', maxWidth: '1100px' }}>
                                    We didn't create the process defined below overnight. But it is the result of years of experimentation, research, trials, and hard work that has helped us land on something that actually works and deliver results.
                                </p>
                                <p className="text-dark mx-auto mb-0" style={{ fontSize: '18px', lineHeight: '1.8', maxWidth: '1100px' }}>
                                    Check out the step-by-step process our SEO company in India follows  to take your business rankings to new heights-
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* SEO Process Steps */}
                    <div className="row mt-80">
                        <div className="col-12">
                            {/* Step 1 - Performing Business Research */}
                            <div className="process-step position-relative mb-5" style={{ paddingLeft: '40px' }}>
                                <div style={{ position: 'absolute', left: '29px', top: '60px', bottom: '-50px', width: '2px', backgroundColor: '#000' }}></div>
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-start">
                                            <div className="step-number bg-dark text-white rounded-circle d-flex align-items-center justify-content-center position-relative" style={{ width: '60px', height: '60px', fontSize: '28px', fontWeight: 'bold', flexShrink: 0, zIndex: 2 }}>
                                                1
                                            </div>
                                            <div className="ms-4">
                                                <h4 className="text-dark mb-3" style={{ fontSize: '26px', fontWeight: 'bold' }}>
                                                    Performing Business Research
                                                </h4>
                                                <p className="text-dark mb-0" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                                                    We start by understanding your business goals, target audience, and existing online presence. This session helps ensure that our SEO approach aligns with your objectives and expectations.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 - Conducting Initial Audit */}
                            <div className="process-step position-relative mb-5" style={{ paddingLeft: '40px' }}>
                                <div style={{ position: 'absolute', left: '29px', top: '0', height: '30px', width: '2px', backgroundColor: '#000' }}></div>
                                <div style={{ position: 'absolute', left: '29px', top: '30px', right: 'calc(50% - 29px)', height: '2px', backgroundColor: '#000', borderRadius: '0 20px 20px 0' }}></div>
                                <div style={{ position: 'absolute', right: 'calc(50% - 31px)', top: '30px', bottom: '-50px', width: '2px', backgroundColor: '#000' }}></div>
                                <div className="row align-items-center">
                                    <div className="col-lg-6 offset-lg-6">
                                        <div className="p-4">
                                            <div className="d-flex align-items-start justify-content-end">
                                                <div className="me-4 text-end">
                                                    <h4 className="text-dark mb-3" style={{ fontSize: '26px', fontWeight: 'bold' }}>
                                                        Conducting Initial Audit
                                                    </h4>
                                                    <p className="text-dark mb-0" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                                                        Our SEO experts in India perform a detailed audit of your website to identify technical issues, content gaps, and other missed SEO opportunities. We evaluate everything, right from on-page elements to site speed, crawlability, and user experience.
                                                    </p>
                                                </div>
                                                <div className="step-number bg-dark text-white rounded-circle d-flex align-items-center justify-content-center position-relative" style={{ width: '60px', height: '60px', fontSize: '28px', fontWeight: 'bold', flexShrink: 0, zIndex: 2 }}>
                                                    2
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 - Top 3 Competitor Analysis */}
                            <div className="process-step position-relative mb-5" style={{ paddingLeft: '40px' }}>
                                <div style={{ position: 'absolute', right: 'calc(50% - 31px)', top: '0', height: '30px', width: '2px', backgroundColor: '#000' }}></div>
                                <div style={{ position: 'absolute', left: '29px', right: 'calc(50% - 29px)', top: '30px', height: '2px', backgroundColor: '#000', borderRadius: '20px 0 0 20px' }}></div>
                                <div style={{ position: 'absolute', left: '29px', top: '30px', bottom: '-50px', width: '2px', backgroundColor: '#000' }}></div>
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="p-4">
                                            <div className="d-flex align-items-start">
                                                <div className="step-number bg-dark text-white rounded-circle d-flex align-items-center justify-content-center position-relative" style={{ width: '60px', height: '60px', fontSize: '28px', fontWeight: 'bold', flexShrink: 0, zIndex: 2 }}>
                                                    3
                                                </div>
                                                <div className="ms-4">
                                                    <h4 className="text-dark mb-3" style={{ fontSize: '26px', fontWeight: 'bold' }}>
                                                        Top 3 Competitor Analysis
                                                    </h4>
                                                    <p className="text-dark mb-0" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                                                        We analyze your top three competitors to unleash what's driving their rankings. It helps us not only compete with them but also outperform them by building a stronger SEO strategy that surpasses their efforts in your niche.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 4 - In-Depth Keyword Research */}
                            <div className="process-step position-relative mb-5" style={{ paddingLeft: '40px' }}>
                                <div style={{ position: 'absolute', left: '29px', top: '0', height: '30px', width: '2px', backgroundColor: '#000' }}></div>
                                <div style={{ position: 'absolute', left: '29px', top: '30px', right: 'calc(50% - 29px)', height: '2px', backgroundColor: '#000', borderRadius: '0 20px 20px 0' }}></div>
                                <div style={{ position: 'absolute', right: 'calc(50% - 31px)', top: '30px', bottom: '-50px', width: '2px', backgroundColor: '#000' }}></div>
                                <div className="row align-items-center">
                                    <div className="col-lg-6 offset-lg-6">
                                        <div className="p-4">
                                            <div className="d-flex align-items-start justify-content-end">
                                                <div className="me-4 text-end">
                                                    <h4 className="text-dark mb-3" style={{ fontSize: '26px', fontWeight: 'bold' }}>
                                                        In-Depth Keyword Research
                                                    </h4>
                                                    <p className="text-dark mb-0" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                                                        It is the fourth and most critical step in the overall SEO process. Understanding its significance in the overall SEO process, we utilize advanced tools such as SEMrush, SE Rankings, Google Keyword Planner, and Google Search Console to identify high-intent and high-traffic keywords that your target audience is actually searching for.
                                                    </p>
                                                </div>
                                                <div className="step-number bg-dark text-white rounded-circle d-flex align-items-center justify-content-center position-relative" style={{ width: '60px', height: '60px', fontSize: '28px', fontWeight: 'bold', flexShrink: 0, zIndex: 2 }}>
                                                    4
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 5 - Determining an SEO Strategy */}
                            <div className="process-step position-relative mb-5" style={{ paddingLeft: '40px' }}>
                                <div style={{ position: 'absolute', right: 'calc(50% - 31px)', top: '0', height: '30px', width: '2px', backgroundColor: '#000' }}></div>
                                <div style={{ position: 'absolute', left: '29px', right: 'calc(50% - 29px)', top: '30px', height: '2px', backgroundColor: '#000', borderRadius: '20px 0 0 20px' }}></div>
                                <div style={{ position: 'absolute', left: '29px', top: '30px', bottom: '-50px', width: '2px', backgroundColor: '#000' }}></div>
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="p-4">
                                            <div className="d-flex align-items-start">
                                                <div className="step-number bg-dark text-white rounded-circle d-flex align-items-center justify-content-center position-relative" style={{ width: '60px', height: '60px', fontSize: '28px', fontWeight: 'bold', flexShrink: 0, zIndex: 2 }}>
                                                    5
                                                </div>
                                                <div className="ms-4">
                                                    <h4 className="text-dark mb-3" style={{ fontSize: '26px', fontWeight: 'bold' }}>
                                                        Determining an SEO Strategy
                                                    </h4>
                                                    <p className="text-dark mb-0" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                                                        Based on your chosen SEO package in India from XzectLabs Technologies that includes the Basic SEO package, Advanced SEO package, and Enterprise SEO package, and understanding your business goals, we create a tailored SEO roadmap that outlines changes in on-page SEO, off-page SEO, technical SEO, and more to boost your rankings and visibility.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 6 - Kicking off and Aligning the Project */}
                            <div className="process-step position-relative mb-5" style={{ paddingLeft: '40px' }}>
                                <div style={{ position: 'absolute', left: '29px', top: '0', height: '30px', width: '2px', backgroundColor: '#000' }}></div>
                                <div style={{ position: 'absolute', left: '29px', top: '30px', right: 'calc(50% - 29px)', height: '2px', backgroundColor: '#000', borderRadius: '0 20px 20px 0' }}></div>
                                <div style={{ position: 'absolute', right: 'calc(50% - 31px)', top: '30px', bottom: '-50px', width: '2px', backgroundColor: '#000' }}></div>
                                <div className="row align-items-center">
                                    <div className="col-lg-6 offset-lg-6">
                                        <div className="p-4">
                                            <div className="d-flex align-items-start justify-content-end">
                                                <div className="me-4 text-end">
                                                    <h4 className="text-dark mb-3" style={{ fontSize: '26px', fontWeight: 'bold' }}>
                                                        Kicking off and Aligning the Project
                                                    </h4>
                                                    <p className="text-dark mb-0" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                                                        Before execution, we ensure complete alignment between your in-house team and ours. We will provide regular communication and transparent reporting to keep you updated on every step of the process. Additionally, we utilize a project management tool to facilitate your approvals and help you stay organized.
                                                    </p>
                                                </div>
                                                <div className="step-number bg-dark text-white rounded-circle d-flex align-items-center justify-content-center position-relative" style={{ width: '60px', height: '60px', fontSize: '28px', fontWeight: 'bold', flexShrink: 0, zIndex: 2 }}>
                                                    6
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 7 - Setting Up Tracking Tools & Systems */}
                            <div className="process-step position-relative mb-5" style={{ paddingLeft: '40px' }}>
                                <div style={{ position: 'absolute', right: 'calc(50% - 31px)', top: '0', height: '30px', width: '2px', backgroundColor: '#000' }}></div>
                                <div style={{ position: 'absolute', left: '29px', right: 'calc(50% - 29px)', top: '30px', height: '2px', backgroundColor: '#000', borderRadius: '20px 0 0 20px' }}></div>
                                <div style={{ position: 'absolute', left: '29px', top: '30px', bottom: '-50px', width: '2px', backgroundColor: '#000' }}></div>
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="p-4">
                                            <div className="d-flex align-items-start">
                                                <div className="step-number bg-dark text-white rounded-circle d-flex align-items-center justify-content-center position-relative" style={{ width: '60px', height: '60px', fontSize: '28px', fontWeight: 'bold', flexShrink: 0, zIndex: 2 }}>
                                                    7
                                                </div>
                                                <div className="ms-4">
                                                    <h4 className="text-dark mb-3" style={{ fontSize: '26px', fontWeight: 'bold' }}>
                                                        Setting Up Tracking Tools & Systems
                                                    </h4>
                                                    <p className="text-dark mb-0" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                                                        Our team sets up all necessary tools, tracking systems, and SEO frameworks to monitor performance effectively. It includes Google Analytics, Search Console, and other premium SEO tools.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 8 - Executing SEO Strategies */}
                            <div className="process-step position-relative mb-5" style={{ paddingLeft: '40px' }}>
                                <div style={{ position: 'absolute', left: '29px', top: '0', height: '30px', width: '2px', backgroundColor: '#000' }}></div>
                                <div style={{ position: 'absolute', left: '29px', top: '30px', right: 'calc(50% - 29px)', height: '2px', backgroundColor: '#000', borderRadius: '0 20px 20px 0' }}></div>
                                <div style={{ position: 'absolute', right: 'calc(50% - 31px)', top: '30px', bottom: '-50px', width: '2px', backgroundColor: '#000' }}></div>
                                <div className="row align-items-center">
                                    <div className="col-lg-6 offset-lg-6">
                                        <div className="p-4">
                                            <div className="d-flex align-items-start justify-content-end">
                                                <div className="me-4 text-end">
                                                    <h4 className="text-dark mb-3" style={{ fontSize: '26px', fontWeight: 'bold' }}>
                                                        Executing SEO Strategies
                                                    </h4>
                                                    <p className="text-dark mb-0" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                                                        We begin implementing the strategy through on-page optimization, link building, content creation, and technical improvements, all focused on long-term, white-hat growth.
                                                    </p>
                                                </div>
                                                <div className="step-number bg-dark text-white rounded-circle d-flex align-items-center justify-content-center position-relative" style={{ width: '60px', height: '60px', fontSize: '28px', fontWeight: 'bold', flexShrink: 0, zIndex: 2 }}>
                                                    8
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 9 - Reporting on Defined Dates */}
                            <div className="process-step position-relative mb-5" style={{ paddingLeft: '40px' }}>
                                <div style={{ position: 'absolute', right: 'calc(50% - 31px)', top: '0', height: '30px', width: '2px', backgroundColor: '#000' }}></div>
                                <div style={{ position: 'absolute', left: '29px', right: 'calc(50% - 29px)', top: '30px', height: '2px', backgroundColor: '#000', borderRadius: '20px 0 0 20px' }}></div>
                                <div style={{ position: 'absolute', left: '29px', top: '30px', bottom: '-50px', width: '2px', backgroundColor: '#000' }}></div>
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="p-4">
                                            <div className="d-flex align-items-start">
                                                <div className="step-number bg-dark text-white rounded-circle d-flex align-items-center justify-content-center position-relative" style={{ width: '60px', height: '60px', fontSize: '28px', fontWeight: 'bold', flexShrink: 0, zIndex: 2 }}>
                                                    9
                                                </div>
                                                <div className="ms-4">
                                                    <h4 className="text-dark mb-3" style={{ fontSize: '26px', fontWeight: 'bold' }}>
                                                        Reporting on Defined Dates
                                                    </h4>
                                                    <p className="text-dark mb-0" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                                                        We provide our clients with monthly SEO reports, which offer valuable insights into traffic, rankings, backlink submissions, website SEO health, and conversions. We also share strategic recommendations for continual growth.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 10 - Analyzing Outcomes and Following Up */}
                            <div className="process-step position-relative mb-5" style={{ paddingLeft: '40px' }}>
                                <div style={{ position: 'absolute', left: '29px', top: '0', height: '30px', width: '2px', backgroundColor: '#000' }}></div>
                                <div style={{ position: 'absolute', left: '29px', top: '30px', right: 'calc(50% - 29px)', height: '2px', backgroundColor: '#000', borderRadius: '0 20px 20px 0' }}></div>
                                <div className="row align-items-center">
                                    <div className="col-lg-6 offset-lg-6">
                                        <div className="p-4">
                                            <div className="d-flex align-items-start justify-content-end">
                                                <div className="me-4 text-end">
                                                    <h4 className="text-dark mb-3" style={{ fontSize: '26px', fontWeight: 'bold' }}>
                                                        Analyzing Outcomes and Following Up
                                                    </h4>
                                                    <p className="text-dark mb-0" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                                                        We continually monitor results, analyze outcomes, and refine strategies to achieve sustained improvement. Our team remains proactive in adapting to changes in search algorithms and emerging opportunities. We also take our clients' needs into account and tailor our strategies to align with their business goals.
                                                    </p>
                                                </div>
                                                <div className="step-number bg-dark text-white rounded-circle d-flex align-items-center justify-content-center position-relative" style={{ width: '60px', height: '60px', fontSize: '28px', fontWeight: 'bold', flexShrink: 0, zIndex: 2 }}>
                                                    10
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*seo-agency home section 8A Part 4 - Get SEO Services CTA*/}
            <section className="seo-agency-home-section-8a-part4 position-relative overflow-hidden py-80" style={{ backgroundColor: '#ffffff' }}>
                <div className="container position-relative z-1">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="text-center">
                                <h2 className="mb-4" style={{ fontSize: '48px', lineHeight: '1.3', fontWeight: '400' }}>
                                    <span style={{ color: '#794aff', fontWeight: 'bold' }}>Get SEO Services</span>{' '}
                                    <span className="text-dark">In India From Industry SEO Experts</span>
                                </h2>
                                <h4 className="text-dark mb-5" style={{ fontSize: '24px', lineHeight: '1.4', fontWeight: 'bold' }}>
                                    Trusted by 1000+ Clients Worldwide | 98% Success Rate on Upwork | Proven Track Record
                                </h4>
                                <p className="text-dark mx-auto mb-4" style={{ fontSize: '18px', lineHeight: '1.8', maxWidth: '1100px' }}>
                                    With over 14 years of work experience and a client base spanning the globe, our SEO agency's founders have been the guiding force behind XzectLabs's success and achievements.
                                </p>
                                <p className="text-dark mx-auto mb-5" style={{ fontSize: '18px', lineHeight: '1.8', maxWidth: '1100px' }}>
                                    Additionally, we have a team of over 20 members, including highly skilled and experienced SEO experts, content strategists, graphic designers, and website developers who collaborate to craft <span style={{ fontWeight: 'bold' }}>customized, white-hat SEO strategies</span> that align with your business objectives.
                                </p>
                                <a href="#contact" className="btn btn-lg px-5 py-3 rounded-2" style={{ backgroundColor: '#794aff', color: '#fff', fontSize: '18px', fontWeight: '500', border: 'none' }}>
                                    Let's Take Your Business to the Top—Contact Us →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*seo-agency home section 8A Part 5 - SEO Tools*/}
            <section className="seo-agency-home-section-8a-part5 position-relative overflow-hidden py-80" style={{ backgroundColor: '#ffffff' }}>
                <div className="container position-relative z-1">
                    {/* Heading */}
                    <div className="row justify-content-center mb-80">
                        <div className="col-lg-10">
                            <div className="text-center">
                                <h2 className="text-dark mb-0" style={{ fontSize: '48px', lineHeight: '1.3', fontWeight: '400', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    <span style={{ fontWeight: 'bold' }}>Tools We Use As A Leading SEO Agency In India</span> To Provide Quality SEO Services
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* Tools Grid */}
                    <div className="row">
                        {/* Left Column */}
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            {/* On-Page SEO Tools */}
                            <div className="mb-5">
                                <h4 className="text-dark mb-4" style={{ fontSize: '28px', fontWeight: 'bold', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    On-Page SEO Tools
                                </h4>
                                <ul className="list-unstyled" style={{ fontSize: '18px', lineHeight: '2', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    <li className="mb-2">
                                        <span style={{ marginRight: '10px' }}>»</span>
                                        Google Search Console
                                    </li>
                                    <li className="mb-2">
                                        <span style={{ marginRight: '10px' }}>»</span>
                                        Ahrefs Site Audit
                                    </li>
                                    <li className="mb-2">
                                        <span style={{ marginRight: '10px' }}>»</span>
                                        SEMrush Site Audit Tool
                                    </li>
                                    <li className="mb-2">
                                        <span style={{ marginRight: '10px' }}>»</span>
                                        Yoast SEO / Rank Math
                                    </li>
                                    <li className="mb-2">
                                        <span style={{ marginRight: '10px' }}>»</span>
                                        GTmetrix
                                    </li>
                                    <li className="mb-0">
                                        <span style={{ marginRight: '10px' }}>»</span>
                                        Google PageSpeed Insights
                                    </li>
                                </ul>
                            </div>

                            {/* Off-Page SEO Tools */}
                            <div>
                                <h4 className="text-dark mb-4" style={{ fontSize: '28px', fontWeight: 'bold', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    Off-Page SEO Tools
                                </h4>
                                <ul className="list-unstyled" style={{ fontSize: '18px', lineHeight: '2', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    <li className="mb-2">
                                        <span style={{ marginRight: '10px' }}>»</span>
                                        Ahrefs
                                    </li>
                                    <li className="mb-2">
                                        <span style={{ marginRight: '10px' }}>»</span>
                                        SEMrush Backlink Audit Tool
                                    </li>
                                    <li className="mb-0">
                                        <span style={{ marginRight: '10px' }}>»</span>
                                        Google Search Console
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Middle Column */}
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            {/* Technical SEO Tools */}
                            <div className="mb-5">
                                <h4 className="text-dark mb-4" style={{ fontSize: '28px', fontWeight: 'bold', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    Technical SEO Tools
                                </h4>
                                <ul className="list-unstyled" style={{ fontSize: '18px', lineHeight: '2', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    <li className="mb-2">
                                        <span style={{ marginRight: '10px' }}>»</span>
                                        Google Search Console
                                    </li>
                                    <li className="mb-2">
                                        <span style={{ marginRight: '10px' }}>»</span>
                                        Google Mobile-Friendly Test
                                    </li>
                                    <li className="mb-0">
                                        <span style={{ marginRight: '10px' }}>»</span>
                                        Schema.org Markup Generator
                                    </li>
                                </ul>
                            </div>

                            {/* Content Optimization Tools */}
                            <div>
                                <h4 className="text-dark mb-4" style={{ fontSize: '28px', fontWeight: 'bold', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    Content Optimization Tools
                                </h4>
                                <ul className="list-unstyled" style={{ fontSize: '18px', lineHeight: '2', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    <li className="mb-2">
                                        <span style={{ marginRight: '10px' }}>»</span>
                                        Grammarly
                                    </li>
                                    <li className="mb-2">
                                        <span style={{ marginRight: '10px' }}>»</span>
                                        ChatGPT
                                    </li>
                                    <li className="mb-2">
                                        <span style={{ marginRight: '10px' }}>»</span>
                                        Perplexity
                                    </li>
                                    <li className="mb-0">
                                        <span style={{ marginRight: '10px' }}>»</span>
                                        Google Gemini
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="col-lg-4">
                            {/* Keyword Research Tools */}
                            <div className="mb-5">
                                <h4 className="text-dark mb-4" style={{ fontSize: '28px', fontWeight: 'bold', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    Keyword Research Tools
                                </h4>
                                <ul className="list-unstyled" style={{ fontSize: '18px', lineHeight: '2', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    <li className="mb-2">
                                        <span style={{ marginRight: '10px' }}>»</span>
                                        Google Keyword Planner
                                    </li>
                                    <li className="mb-2">
                                        <span style={{ marginRight: '10px' }}>»</span>
                                        Ahrefs Keywords Explorer
                                    </li>
                                    <li className="mb-2">
                                        <span style={{ marginRight: '10px' }}>»</span>
                                        SEMrush Keyword Magic Tool
                                    </li>
                                    <li className="mb-2">
                                        <span style={{ marginRight: '10px' }}>»</span>
                                        Ubersuggest
                                    </li>
                                    <li className="mb-0">
                                        <span style={{ marginRight: '10px' }}>»</span>
                                        AnswerThePublic
                                    </li>
                                </ul>
                            </div>

                            {/* Analytics & Reporting Tools */}
                            <div>
                                <h4 className="text-dark mb-4" style={{ fontSize: '28px', fontWeight: 'bold', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    Analytics & Reporting Tools
                                </h4>
                                <ul className="list-unstyled" style={{ fontSize: '18px', lineHeight: '2', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    <li className="mb-2">
                                        <span style={{ marginRight: '10px' }}>»</span>
                                        Google Analytics 4 (GA4)
                                    </li>
                                    <li className="mb-0">
                                        <span style={{ marginRight: '10px' }}>»</span>
                                        SEMrush Position Tracking
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*seo-agency home section 8A Part 6 - Best SEO Company Industries*/}
            <section className="seo-agency-home-section-8a-part6 position-relative overflow-hidden py-80" style={{ backgroundColor: '#ffffff' }}>
                <div className="container position-relative z-1">
                    {/* Heading */}
                    <div className="row justify-content-center mb-60">
                        <div className="col-lg-10">
                            <div className="text-center">
                                <h2 className="mb-4" style={{ fontSize: '48px', lineHeight: '1.3', fontWeight: '400', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    <span className="text-dark" style={{ fontWeight: 'bold' }}>Best SEO Company In India</span>{' '}
                                    <span className="text-dark">Serving All Major Industries</span>
                                </h2>
                                <h4 className="text-dark mb-4" style={{ fontSize: '24px', lineHeight: '1.4', fontWeight: 'bold', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    Top Rated SEO Agency in India Serving Majority of Businesses Worldwide
                                </h4>
                                <p className="text-dark mx-auto mb-4" style={{ fontSize: '18px', lineHeight: '1.8', maxWidth: '1100px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    An SEO strategy that works well for an e-commerce business may not be effective for a dental business. Here's when XzectLabs's industry-specialized SEO services work wonders.
                                </p>
                                <p className="text-dark mx-auto mb-4" style={{ fontSize: '18px', lineHeight: '1.8', maxWidth: '1100px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    We have experience working with a range of clients across various industries and business models. Our in-depth industry understanding enables us to tailor SEO strategies that align with each sector's unique goals, audience behavior, and other key factors.
                                </p>
                                <p className="text-dark mx-auto mb-0" style={{ fontSize: '18px', lineHeight: '1.8', maxWidth: '1100px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    We have experience catering to a diverse range of clients, including those in the wellness, dental, and beauty industries, among others. If you're looking for an SEO company in India that can help you gain heights in your industry, then count on XzectLabs Technologies. Check out the various industries we serve below:
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Industry Cards */}
                    <div className="row justify-content-center g-4">
                        {/* Healthcare SEO */}
                        <div className="col-lg-6 col-md-6">
                            <div className="text-center p-5 border rounded-3" style={{ borderColor: '#e0e0e0' }}>
                                <div className="mb-4">
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="80" height="80" rx="10" fill="#f5f5f5" />
                                        <path d="M40 20C31.7157 20 25 26.7157 25 35C25 43.2843 31.7157 50 40 50C48.2843 50 55 43.2843 55 35C55 26.7157 48.2843 20 40 20ZM40 45C34.4772 45 30 40.5228 30 35C30 29.4772 34.4772 25 40 25C45.5228 25 50 29.4772 50 35C50 40.5228 45.5228 45 40 45Z" fill="#333" />
                                        <path d="M40 28C38.8954 28 38 28.8954 38 30V33H35C33.8954 33 33 33.8954 33 35C33 36.1046 33.8954 37 35 37H38V40C38 41.1046 38.8954 42 40 42C41.1046 42 42 41.1046 42 40V37H45C46.1046 37 47 36.1046 47 35C47 33.8954 46.1046 33 45 33H42V30C42 28.8954 41.1046 28 40 28Z" fill="#333" />
                                    </svg>
                                </div>
                                <h4 className="text-dark mb-3" style={{ fontSize: '24px', fontWeight: 'bold', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    Healthcare SEO
                                </h4>
                                <p className="text-dark mb-0" style={{ fontSize: '18px', lineHeight: '1.8', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    The way you eliminate sickness and keep us fit, we eliminate SEO errors that take your website to the top of SERPs
                                </p>
                            </div>
                        </div>

                        {/* Hospitality SEO */}
                        <div className="col-lg-6 col-md-6">
                            <div className="text-center p-5 border rounded-3" style={{ borderColor: '#e0e0e0' }}>
                                <div className="mb-4">
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="80" height="80" rx="10" fill="#f5f5f5" />
                                        <path d="M30 25H50V30H30V25Z" fill="#333" />
                                        <path d="M28 32H52C53.1046 32 54 32.8954 54 34V52C54 53.1046 53.1046 54 52 54H28C26.8954 54 26 53.1046 26 52V34C26 32.8954 26.8954 32 28 32ZM30 36V50H50V36H30Z" fill="#333" />
                                        <path d="M35 40H37V44H35V40ZM43 40H45V44H43V40Z" fill="#333" />
                                    </svg>
                                </div>
                                <h4 className="text-dark mb-3" style={{ fontSize: '24px', fontWeight: 'bold', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    Hospitality SEO
                                </h4>
                                <p className="text-dark mb-0" style={{ fontSize: '18px', lineHeight: '1.8', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    Just like you care for your guests' comfort and conveniences, we take care of your site's SEO
                                </p>
                            </div>
                        </div>

                        {/* Legal SEO */}
                        <div className="col-lg-6 col-md-6">
                            <div className="text-center p-5 border rounded-3" style={{ borderColor: '#e0e0e0' }}>
                                <div className="mb-4">
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="80" height="80" rx="10" fill="#f5f5f5" />
                                        <path d="M35 25H45V28H42V50H38V28H35V25Z" fill="#333" />
                                        <path d="M30 50H50V54H30V50Z" fill="#333" />
                                        <path d="M32 35H36V40H32V35ZM44 35H48V40H44V35Z" fill="#333" />
                                    </svg>
                                </div>
                                <h4 className="text-dark mb-3" style={{ fontSize: '24px', fontWeight: 'bold', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    Legal SEO
                                </h4>
                                <p className="text-dark mb-0" style={{ fontSize: '18px', lineHeight: '1.8', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    You help your clients navigate the SEO maze; we help you navigate the search engine's maze
                                </p>
                            </div>
                        </div>

                        {/* Financial SEO */}
                        <div className="col-lg-6 col-md-6">
                            <div className="text-center p-5 border rounded-3" style={{ borderColor: '#e0e0e0' }}>
                                <div className="mb-4">
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="80" height="80" rx="10" fill="#f5f5f5" />
                                        <path d="M25 35H30V52H25V35ZM35 30H40V52H35V30ZM45 38H50V52H45V38Z" fill="#333" />
                                        <path d="M23 54H57V58H23V54Z" fill="#333" />
                                        <path d="M52 28L56 32L52 36V28Z" fill="#333" />
                                    </svg>
                                </div>
                                <h4 className="text-dark mb-3" style={{ fontSize: '24px', fontWeight: 'bold', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    Financial SEO
                                </h4>
                                <p className="text-dark mb-0" style={{ fontSize: '18px', lineHeight: '1.8', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    You keep your clients' finances in check, and we will keep your organic rankings in check.
                                </p>
                            </div>
                        </div>

                        {/* Tradies/Contractors SEO */}
                        <div className="col-lg-6 col-md-6">
                            <div className="text-center p-5 border rounded-3" style={{ borderColor: '#e0e0e0' }}>
                                <div className="mb-4">
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="80" height="80" rx="10" fill="#f5f5f5" />
                                        <path d="M30 45L35 40L40 45L50 35L52 37L40 49L35 44L32 47L30 45Z" fill="#333" />
                                        <path d="M28 25H32V50H28V25ZM36 30H40V50H36V30ZM44 35H48V50H44V35ZM52 28H56V50H52V28Z" fill="#333" />
                                        <path d="M25 52H58V55H25V52Z" fill="#333" />
                                    </svg>
                                </div>
                                <h4 className="text-dark mb-3" style={{ fontSize: '24px', fontWeight: 'bold', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    Tradies/Contractors SEO
                                </h4>
                                <p className="text-dark mb-0" style={{ fontSize: '18px', lineHeight: '1.8', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    Just like you ensure a strong foundation for your home, we ensure your website's strong SEO foundation
                                </p>
                            </div>
                        </div>

                        {/* Consultant and Coaches SEO */}
                        <div className="col-lg-6 col-md-6">
                            <div className="text-center p-5 border rounded-3" style={{ borderColor: '#e0e0e0' }}>
                                <div className="mb-4">
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="80" height="80" rx="10" fill="#f5f5f5" />
                                        <path d="M25 28H55V48H25V28ZM28 31V45H52V31H28Z" fill="#333" />
                                        <path d="M30 50H50V53H30V50Z" fill="#333" />
                                        <path d="M38 53H42V56H38V53Z" fill="#333" />
                                        <path d="M32 35L35 38L42 31L48 37" stroke="#333" strokeWidth="2" fill="none" />
                                    </svg>
                                </div>
                                <h4 className="text-dark mb-3" style={{ fontSize: '24px', fontWeight: 'bold', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    Consultant and Coaches SEO
                                </h4>
                                <p className="text-dark mb-0" style={{ fontSize: '18px', lineHeight: '1.8', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    You guide your clients to success, and we guide your website to the top of search results.
                                </p>
                            </div>
                        </div>

                        {/* Moving and Logistics SEO */}
                        <div className="col-lg-6 col-md-6">
                            <div className="text-center p-5 border rounded-3" style={{ borderColor: '#e0e0e0' }}>
                                <div className="mb-4">
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="80" height="80" rx="10" fill="#f5f5f5" />
                                        <path d="M25 35H40V48H25V35ZM42 40H55V48H42V40Z" fill="#333" />
                                        <path d="M55 48H58V50H55V48Z" fill="#333" />
                                        <path d="M30 50C30 51.6569 28.6569 53 27 53C25.3431 53 24 51.6569 24 50C24 48.3431 25.3431 47 27 47C28.6569 47 30 48.3431 30 50Z" fill="#333" />
                                        <path d="M54 50C54 51.6569 52.6569 53 51 53C49.3431 53 48 51.6569 48 50C48 48.3431 49.3431 47 51 47C52.6569 47 54 48.3431 54 50Z" fill="#333" />
                                        <path d="M40 35L42 30H52L55 35H40Z" fill="#333" />
                                    </svg>
                                </div>
                                <h4 className="text-dark mb-3" style={{ fontSize: '24px', fontWeight: 'bold', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    Moving and Logistics SEO
                                </h4>
                                <p className="text-dark mb-0" style={{ fontSize: '18px', lineHeight: '1.8', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    You move stuff efficiently; we move your website up the SERPs just as fast.
                                </p>
                            </div>
                        </div>

                        {/* Education SEO */}
                        <div className="col-lg-6 col-md-6">
                            <div className="text-center p-5 border rounded-3" style={{ borderColor: '#e0e0e0' }}>
                                <div className="mb-4">
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="80" height="80" rx="10" fill="#f5f5f5" />
                                        <path d="M26 28H54V46H26V28ZM29 31V43H51V31H29Z" fill="#333" />
                                        <path d="M32 48H48V51H32V48Z" fill="#333" />
                                        <path d="M38 51H42V54H38V51Z" fill="#333" />
                                        <path d="M33 35H47V37H33V35ZM33 39H47V41H33V39Z" fill="#333" />
                                    </svg>
                                </div>
                                <h4 className="text-dark mb-3" style={{ fontSize: '24px', fontWeight: 'bold', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    Education SEO
                                </h4>
                                <p className="text-dark mb-0" style={{ fontSize: '18px', lineHeight: '1.8', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    You teach minds; we teach search engines why your website deserves the top spot.
                                </p>
                            </div>
                        </div>

                        {/* Real Estate SEO */}
                        <div className="col-lg-6 col-md-6">
                            <div className="text-center p-5 border rounded-3" style={{ borderColor: '#e0e0e0' }}>
                                <div className="mb-4">
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="80" height="80" rx="10" fill="#f5f5f5" />
                                        <path d="M25 45V55H35V45H25ZM45 45V55H55V45H45Z" fill="#333" />
                                        <path d="M28 35H32V42H28V35ZM36 35H40V42H36V35ZM48 35H52V42H48V35Z" fill="#333" />
                                        <path d="M40 20L55 32V35H25V32L40 20Z" fill="#333" />
                                        <path d="M48 48H52V52H48V48Z" fill="#333" />
                                    </svg>
                                </div>
                                <h4 className="text-dark mb-3" style={{ fontSize: '24px', fontWeight: 'bold', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    Real Estate SEO
                                </h4>
                                <p className="text-dark mb-0" style={{ fontSize: '18px', lineHeight: '1.8', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    You find dream homes for clients; we find dream rankings for your website.
                                </p>
                            </div>
                        </div>

                        {/* Ecommerce SEO */}
                        <div className="col-lg-6 col-md-6">
                            <div className="text-center p-5 border rounded-3" style={{ borderColor: '#e0e0e0' }}>
                                <div className="mb-4">
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="80" height="80" rx="10" fill="#f5f5f5" />
                                        <path d="M26 28H54V46H26V28ZM29 31V43H51V31H29Z" fill="#333" />
                                        <path d="M30 48H50V51H30V48Z" fill="#333" />
                                        <path d="M38 51H42V54H38V51Z" fill="#333" />
                                        <path d="M35 35H40V40H35V35Z" fill="#333" />
                                        <path d="M44 35H48V37H44V35ZM44 38H48V40H44V38Z" fill="#333" />
                                    </svg>
                                </div>
                                <h4 className="text-dark mb-3" style={{ fontSize: '24px', fontWeight: 'bold', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    Ecommerce SEO
                                </h4>
                                <p className="text-dark mb-0" style={{ fontSize: '18px', lineHeight: '1.8', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    You sell products; we help your website rank higher in Google, making it the product everyone wants to click.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*seo-agency home section 8A Part 7 - Final CTA*/}
            <section className="seo-agency-home-section-8a-part7 position-relative overflow-hidden py-80" style={{ backgroundColor: '#eff6ff' }}>
                <div className="container position-relative z-1">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="text-center">
                                <h2 className="mb-4" style={{ fontSize: '48px', lineHeight: '1.3', fontWeight: '400', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    <span style={{ color: '#794aff', fontWeight: 'bold' }}>Get Trusted SEO Services</span>{' '}
                                    <span className="text-dark">From The Best SEO Agency In India</span>
                                </h2>
                                <h4 className="text-dark mb-5" style={{ fontSize: '24px', lineHeight: '1.4', fontWeight: 'bold', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    Give Your Business The Recognition, Trust, And Growth It Deserves By Hiring XzectLabs Technologies
                                </h4>
                                <p className="text-dark mx-auto mb-4" style={{ fontSize: '18px', lineHeight: '1.8', maxWidth: '1100px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    XzectLabs's SEO experts will go above and beyond and do everything possible to optimize your website, boost your search engine rankings, and drive targeted traffic that converts into tangible outcomes.
                                </p>
                                <p className="text-dark mx-auto mb-5" style={{ fontSize: '18px', lineHeight: '1.8', maxWidth: '1100px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    Your one call today can help your business grow tomorrow!
                                </p>
                                <a href="#contact" className="btn btn-lg px-5 py-3 rounded-2" style={{ backgroundColor: '#794aff', color: '#fff', fontSize: '18px', fontWeight: '500', border: 'none', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    Give in touch with our SEO experts →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*seo-agency home section 8A Part 8 - Testimonials*/}
            <section className="seo-agency-home-section-7 position-relative overflow-hidden py-120">
                <div className="container position-relative z-1">
                    <div className="row flex-wrap align-items-end">
                        <div className="col-lg-5">
                            <p className="text-dark btn-text rounded-3 border border-primary px-2 py-1 bg-white d-inline-block">testimonials</p>
                            <h2 className="text-dark mb-0 d-block text-anime-style-2">
                                Loved by <span className="text-primary">founders</span>
                            </h2>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 ms-lg-auto text-center mt-3 mt-lg-0">
                            <div className="position-relative mx-auto">
                                <div className="d-inline-flex border h-100 d-flex align-items-center gap-1 rounded-pill mx-auto bg-white position-relative z-1">
                                    <div className="swiper-button-prev mt-0 position-relative border-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <g clipPath="url(#clip0_349_1382)">
                                                <path d="M4.18271 3.80852L4.99823e-08 7.99998L4.18271 12.1914L5.06751 11.3084L2.3896 8.62497L16 8.62497L16 7.37498L2.3896 7.37498L5.06751 4.69148L4.18271 3.80852Z" fill="#292929" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="swiper-pagination position-relative top-0 bottom-0 mb-1" />
                                    <div className="swiper-button-next mt-0 position-relative border-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <g clipPath="url(#clip0_349_1381)">
                                                <path d="M11.8173 12.1915L16 8.00002L11.8173 3.80859L10.9325 4.69155L13.6104 7.37503L-1.55894e-07 7.37503L-2.10532e-07 8.62502L13.6104 8.62502L10.9325 11.3085L11.8173 12.1915Z" fill="#292929" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <span className="border-top position-absolute top-50 start-50 translate-middle w-100 z-0" />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-8">
                        {/* Swiper */}
                        <Swiper {...swiperOptions} className="swiper slider-3">
                            <div className="swiper-wrapper z-1">
                                <SwiperSlide>
                                    <div className="card-testimonial rounded-4 p-5 mb-lg-0 mb-5" data-aos="fade-up" data-aos-delay={0}>
                                        <div className="founder d-flex justify-content-between border-bottom pb-5">
                                            <div className="d-flex align-items-center">
                                                <Link href="#">
                                                    <img className="rounded-circle icon-shape icon-50" src="/assets/img/seo-agency-img/pages/seo-agency/page-home/section-7/avatar-1.png" alt="AstraX" />
                                                </Link>
                                                <div className="text-start ms-3">
                                                    <Link href="#">
                                                        <span className="btn-text">Kristin Watson</span>
                                                    </Link>
                                                    <p className="mb-0 fs-7">Head Of Idea, Treve LLC</p>
                                                </div>
                                            </div>
                                            <div className="quote icon-shape icon-50 bg-white rounded-circle">
                                                <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={22} height={16} viewBox="0 0 22 16" fill="none">
                                                    <g clipPath="url(#clip0_349_1387)">
                                                        <path d="M0.0605469 -0.0449219V15.9551L8.31055 7.95508V-0.0449219H0.0605469Z" fill="#0D6EFD" />
                                                        <path d="M13.8105 -0.0449219V15.9551L22.0605 7.95508V-0.0449219H13.8105Z" fill="#0D6EFD" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                        <h6 className="mb-0 mt-5">" Unmatched excellence superior to all others. Highly recommended for both beginners and advanced users. "</h6>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card-testimonial rounded-4 p-5 mb-lg-0 mb-5" data-aos="fade-up" data-aos-delay={200}>
                                        <div className="founder d-flex justify-content-between border-bottom pb-5">
                                            <div className="d-flex align-items-center">
                                                <Link href="#">
                                                    <img className="rounded-circle icon-shape icon-50" src="/assets/img/seo-agency-img/pages/seo-agency/page-home/section-7/avatar-2.png" alt="AstraX" />
                                                </Link>
                                                <div className="text-start ms-3">
                                                    <Link href="#">
                                                        <span className="btn-text">Guy Hawkins</span>
                                                    </Link>
                                                    <p className="mb-0 fs-7">Head Of Idea, Treve LLC</p>
                                                </div>
                                            </div>
                                            <div className="quote icon-shape icon-50 bg-white rounded-circle">
                                                <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={22} height={16} viewBox="0 0 22 16" fill="none">
                                                    <g clipPath="url(#clip0_349_1387)">
                                                        <path d="M0.0605469 -0.0449219V15.9551L8.31055 7.95508V-0.0449219H0.0605469Z" fill="#0D6EFD" />
                                                        <path d="M13.8105 -0.0449219V15.9551L22.0605 7.95508V-0.0449219H13.8105Z" fill="#0D6EFD" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                        <h6 className="mb-0 mt-5">" Unrivaled brilliance surpassing all others. Highly recommended for novices and experts alike. We will hire them for sure. "</h6>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card-testimonial rounded-4 p-5 mb-lg-0 mb-5" data-aos="fade-up" data-aos-delay={400}>
                                        <div className="founder d-flex justify-content-between border-bottom pb-5">
                                            <div className="d-flex align-items-center">
                                                <Link href="#">
                                                    <img className="rounded-circle icon-shape icon-50" src="/assets/img/seo-agency-img/pages/seo-agency/page-home/section-7/avatar-3.png" alt="AstraX" />
                                                </Link>
                                                <div className="text-start ms-3">
                                                    <Link href="#">
                                                        <span className="btn-text">Jane Cooper</span>
                                                    </Link>
                                                    <p className="mb-0 fs-7">Head Of Idea, Treve LLC</p>
                                                </div>
                                            </div>
                                            <div className="quote icon-shape icon-50 bg-white rounded-circle">
                                                <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={22} height={16} viewBox="0 0 22 16" fill="none">
                                                    <g clipPath="url(#clip0_349_1387)">
                                                        <path d="M0.0605469 -0.0449219V15.9551L8.31055 7.95508V-0.0449219H0.0605469Z" fill="#0D6EFD" />
                                                        <path d="M13.8105 -0.0449219V15.9551L22.0605 7.95508V-0.0449219H13.8105Z" fill="#0D6EFD" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                        <h6 className="mb-0 mt-5">" Unmatched brilliance exceeding all others. Highly endorsed for beginners and advanced users alike. We appreciate this... "</h6>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card-testimonial rounded-4 p-5 mb-lg-0 mb-5" data-aos="fade-up" data-aos-delay={600}>
                                        <div className="founder d-flex justify-content-between border-bottom pb-5">
                                            <div className="d-flex align-items-center">
                                                <Link href="#">
                                                    <img className="rounded-circle icon-shape icon-50" src="/assets/img/seo-agency-img/pages/seo-agency/page-home/section-7/avatar-1.png" alt="AstraX" />
                                                </Link>
                                                <div className="text-start ms-3">
                                                    <Link href="#">
                                                        <span className="btn-text">Kristin Watson</span>
                                                    </Link>
                                                    <p className="mb-0 fs-7">Head Of Idea, Treve LLC</p>
                                                </div>
                                            </div>
                                            <div className="quote icon-shape icon-50 bg-white rounded-circle">
                                                <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={22} height={16} viewBox="0 0 22 16" fill="none">
                                                    <g clipPath="url(#clip0_349_1387)">
                                                        <path d="M0.0605469 -0.0449219V15.9551L8.31055 7.95508V-0.0449219H0.0605469Z" fill="#0D6EFD" />
                                                        <path d="M13.8105 -0.0449219V15.9551L22.0605 7.95508V-0.0449219H13.8105Z" fill="#0D6EFD" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                        <h6 className="mb-0 mt-5">" Unmatched excellence superior to all others. Highly recommended for both beginners and advanced users. "</h6>
                                    </div>
                                </SwiperSlide>
                            </div>
                        </Swiper>
                        {/* Swiper JS */}
                    </div>
                    <div className="row text-center justify-content-center mt-7">
                        <h6 className="text-primary mb-0 text-anime-style-2">
                            1M+ <span className="text-dark"> happy user review on board.</span>
                        </h6>
                        <div>
                            <Link href="/pricing" className="btn btn-outline-secondary mt-5" data-aos="zoom-in" data-aos-delay={400}>
                                <span>hire us today</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                    <g clipPath="url(#clip0_816_117)">
                                        <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="#292929" />
                                    </g>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
