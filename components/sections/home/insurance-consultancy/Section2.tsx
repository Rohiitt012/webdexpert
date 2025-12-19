"use client";
import Link from "next/link";

export default function Section2() {
    return (
        <>
            <style jsx>{`
                .btn-dark:hover {
                    background-color: #ff652e !important;
                    transition: background-color 0.3s ease;
                }
            `}</style>
            <style jsx>{`
                .ticker {
                    width: 100vw;
                    overflow: hidden;
                    background: #000;
                    color: #fff;
                    padding: 16px 0;
                    position: relative;
                    left: 50%;
                    margin-left: -50vw;
                    display: block;
                }
                .ticker__track {
                    display: inline-block;
                    white-space: nowrap;
                    will-change: transform;
                    animation: tickerMove 28s linear infinite;
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                    font-size: 26px;
                    font-weight: 600;
                }
                .ticker__item { display: inline-block; }
                .ticker__item + .ticker__item::before {
                    content: "*";
                    display: inline-block;
                    color: #fff;
                    opacity: 0.95;
                    margin: 0 36px;
                    vertical-align: middle;
                    line-height: 1;
                    transform: translateY(0.12em);
                }
                @keyframes tickerMove {
                    0% {
                        transform: translateX(100%);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }
            `}</style>
            {/*insurance-consultancy-home home section 2*/}
            <section className="insurance-consultancy-home-section-2 position-relative overflow-hidden pt-120 pb-120">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-5">
                            <div className="border-top border-primary-2 border-2 d-flex flex-column h-100 wow img-custom-anim-top">
                                <p className="mb-4 mt-4">Are you searching for the best social media management services in india? Webdexpert is a trusted social media management company with real results. We don't just "post".We manage, strategize, and grow your brand's presence across platforms like Instagram, Facebook, Twitter, and LinkedIn turning your social profiles into active sales channels.</p>
                                <Link href="#" className="text-primary btn-text">
                                    read more
                                </Link>
                                <img className="mt-8" src="/assets/img/insurance-consultancy-img/pages/insurance-consultancy/page-home/home-section-2/img-1.png" alt="AstraX" />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="text-center mb-8">
                                <div className="position-relative bg-white icon-shape icon-160 rounded-circle">
                                    <svg className="fill-primary-2" xmlns="http://www.w3.org/2000/svg" width={43} height={50} viewBox="0 0 43 50" fill="none">
                                        <g clipPath="url(#clip0_454_1335)">
                                            <path d="M4.09544 39.8806V14.9169L21.4982 4.79938L38.9052 14.9169V35.0812L21.4982 45.2006L12.2857 39.8437V19.7525L21.4982 14.3962L30.7143 19.7525V30.245L21.4982 35.6019L20.4766 35.0081V24.5894L25.6255 21.5944L21.4982 19.1956L16.3812 22.1725V37.425L21.4982 40.4012L34.8097 32.6619V17.3356L21.4982 9.59875L8.19089 17.3356V42.2606L21.4982 50L43 37.5V12.5L21.4982 0L0 12.5V37.5L4.09544 39.8806Z" fill="#794AFF" />
                                        </g>
                                    </svg>
                                    <div className="position-absolute top-50 start-50 translate-middle w-100">
                                        <h6 className="circle-text rotateme text-primary">we serve quality service base nyc - nyc</h6>
                                    </div>
                                </div>
                            </div>
                            <h2 className="text-primary-2 mb-4 text-anime-style-3">Build Visibility, Earn Trust, Drive Sales with Best Social Media Management Services</h2>
                            <p className="wow img-custom-anim-top">In a world where attention spans are short and the scroll never stops, your brand has just three seconds to stand out or be forgotten. That's where Webdexpert comes in. We help businesses not just exist on social media, but dominate it.

At Webdexpert, we don’t believe in posting randomly or using generic content calendars. We believe in strategy, storytelling, and sales. Our social media management services are designed for one clear purpose: growth. Whether you're looking to build brand awareness, drive traffic, or generate qualified leads, our team turns your social presence into a performance powerhouse.
</p>
                            <Link href="/contact" className="btn btn-outline-secondary mt-6" data-aos="fade-up" data-aos-delay={0}>
                                <span>get in touch</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                    <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="#005153" />
                                </svg>
                            </Link>
                        </div>
                        <div className="col-lg-2">
                            <div className="client">
                                <div className="icon-shape icon-177 bg-white border rounded-circle text-center" data-aos="fade-up" data-aos-delay={0}>
                                    <div>
                                        <h5 className="text-primary-2">99.9%</h5>
                                        <p className="fs-10 text-uppercase mb-0">Client Satisfaction</p>
                                    </div>
                                </div>
                                <div className="icon-shape icon-177 bg-white border rounded-circle text-center" data-aos="fade-up" data-aos-delay={200}>
                                    <div>
                                        <h5 className="text-primary-2">10+</h5>
                                        <p className="fs-10 text-uppercase mb-0">worldwide capture</p>
                                    </div>
                                </div>
                                <div className="icon-shape icon-177 bg-white border rounded-circle text-center" data-aos="fade-up" data-aos-delay={400}>
                                    <div>
                                        <h5 className="text-primary-2">99.9%</h5>
                                        <p className="fs-10 text-uppercase mb-0">Client Satisfaction</p>
                                    </div>
                                </div>
                                <div className="icon-shape icon-177 bg-white border rounded-circle text-center" data-aos="fade-up" data-aos-delay={600}>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={80} height={80} viewBox="0 0 80 80" fill="none">
                                            <g clipPath="url(#clip0_480_885)">
                                                <path d="M12.8137 51.436L5.24779 66.5654C4.88402 67.2924 4.92309 68.156 5.34972 68.8469C5.77758 69.5372 6.53075 69.9578 7.34313 69.9578H18.7244L25.553 79.0624C25.9967 79.6562 26.6931 79.9999 27.4261 79.9999C28.3996 79.9999 29.1669 79.4188 29.5233 78.7047L36.6528 64.4451C27.0135 63.5234 18.515 58.6357 12.8137 51.436Z" fill="#FF652E" />
                                                <path d="M74.7097 66.5654L67.1438 51.436C61.4425 58.6357 52.944 63.5234 43.3047 64.4451L50.4348 78.7047C50.7906 79.4188 51.5579 79.9999 52.5314 79.9999C53.2644 79.9999 53.9614 79.6562 54.4052 79.0624L61.2332 69.9578H72.6144C73.4268 69.9578 74.1799 69.5372 74.6078 68.8469C75.0344 68.156 75.0735 67.2924 74.7097 66.5654Z" fill="#FF652E" />
                                                <path d="M43.9019 23.0695L39.9791 16.803L36.0576 23.0695C35.736 23.5834 35.2275 23.9526 34.6398 24.0997L27.4688 25.8936L32.2161 31.5601C32.6055 32.0245 32.7996 32.6221 32.7574 33.2269L32.2466 40.6012L39.1027 37.8375C39.4286 37.7063 40.0951 37.5311 40.855 37.8375L47.7117 40.6012L47.2014 33.2269C47.1599 32.6221 47.354 32.0245 47.7434 31.5601L52.4907 25.8936L45.3197 24.0997C44.7319 23.9526 44.2235 23.5834 43.9019 23.0695Z" fill="#FF652E" />
                                                <path
                                                    d="M69.9385 29.9585C69.9385 13.4393 56.4991 0 39.98 0C23.4608 0 10.0215 13.4393 10.0215 29.9585C10.0215 46.4771 23.4608 59.917 39.98 59.917C56.4991 59.917 69.9385 46.4777 69.9385 29.9585ZM58.4895 26.0333L51.9441 33.8458L52.6472 44.0131C52.7028 44.8187 52.3402 45.5963 51.6871 46.0712C51.0334 46.5454 50.182 46.6504 49.4331 46.3489L39.98 42.5385L30.5269 46.3489C30.2736 46.4508 29.2646 46.7914 28.2728 46.0712C27.6198 45.5963 27.2572 44.8187 27.3127 44.0131L28.0171 33.8458L21.4717 26.0339C20.9529 25.4144 20.7893 24.5721 21.0389 23.8043C21.2886 23.0365 21.916 22.4506 22.6997 22.2546L32.5862 19.7815L37.9933 11.142C38.4218 10.4578 39.1725 10.0421 39.98 10.0421C40.7875 10.0421 41.5382 10.4578 41.9667 11.142L47.375 19.7815L57.2615 22.2546C58.0452 22.4506 58.6726 23.0365 58.9222 23.8043C59.1719 24.5721 59.0083 25.4144 58.4895 26.0333Z"
                                                    fill="#005153"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <div className="ticker" aria-label="key-highlights">
                            <div className="ticker__track">
                                <span className="ticker__item">1000+ Projects</span>
                                <span className="ticker__item">20+ Team members</span>
                                <span className="ticker__item">Top Rated plus on Upwork</span>
                                <span className="ticker__item">world wide clients</span>
                                <span className="ticker__item">1000+ Projects</span>
                                <span className="ticker__item">20+ Team members</span>
                                <span className="ticker__item">Top Rated plus on Upwork</span>
                                <span className="ticker__item">world wide clients</span>
                            </div>
                        </div>
                    </div>


                    {/* New Social Media Management Section */}
                    <div className="row g-5 mt-120 align-items-center">
                        <div className="col-lg-6">
                            <h2 className="mb-4" style={{ fontSize: '40px', lineHeight: '1.3', fontWeight: '400', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                <span style={{ fontWeight: 'bold' }}>Skyrocket Your Brand</span> With An Expert Social Media Management Company In India
                            </h2>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                In a world where attention spans are short and the scroll never stops, your brand has just three seconds to stand out or be forgotten. That's where Webdexpert Technologies comes in. We help businesses not just exist on social media, but dominate it.
                            </p>
                            <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                At Webdexpert Technologies, we don't believe in posting randomly or using generic content calendars. We believe in strategy, storytelling, and sales. Our social media management services are designed for one clear purpose: growth. Whether you're looking to build brand awareness, drive traffic, or generate qualified leads, our team turns your social presence into a performance powerhouse.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-center">
                                <img src="/assets/img/insurance-consultancy-img/pages/insurance-consultancy/page-home/home-section-2/social-media-illustration.png" alt="Social Media Management" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>
                        </div>
                    </div>

                    {/* Why Social Media Management Matters Section */}
                    <div className="row g-5 mt-120 align-items-center">
                        <div className="col-lg-6">
                            <div className="text-center">
                                <img src="/assets/img/insurance-consultancy-img/pages/insurance-consultancy/page-home/home-section-2/why-social-media.png" alt="Why Social Media Management Matters" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="mb-4" style={{ fontSize: '40px', lineHeight: '1.3', fontWeight: '400', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Why <span style={{ fontWeight: 'bold' }}>Social Media</span> Management Matters?
                            </h2>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Your customers are online, scrolling through Instagram, searching on Facebook, connecting on LinkedIn, and sharing on Twitter. But here's the catch: they won't notice you unless you stand out. That's where expert social media management comes in.
                            </p>
                            <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                It's not just about posting pretty pictures or going viral; it's about building trust, authority, and ultimately, driving real business results. From brand awareness to lead generation, social media is the most powerful tool to scale your brand in 2026—<span style={{ fontWeight: 'bold' }}>and Webdexpert Technologies helps you harness it strategically.</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Difference Between Social Media Management and Marketing Section */}
                <div className="container-fluid" style={{ marginTop: '150px' }}>
                    <div className="row g-5 py-80 align-items-center" style={{ backgroundColor: '#e6edee' }}>
                        <div className="col-lg-6 offset-lg-1">
                            <h2 className="mb-4" style={{ fontSize: '40px', lineHeight: '1.3', fontWeight: '400', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                <span style={{ color: '#000' }}>What Is The </span>
                                <span style={{ color: '#ff652e', fontWeight: 'bold' }}>Difference Between Social Media Management</span>
                                <span style={{ color: '#000' }}> And Social Media Marketing?</span>
                            </h2>
                            <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Social Media Management and Social Media Marketing are closely related but have distinct roles in a digital marketing strategy.
                            </p>
                        </div>
                        <div className="col-lg-4">
                            <div className="text-center">
                                <img src="/assets/img/insurance-consultancy-img/pages/insurance-consultancy/page-home/home-section-2/difference-illustration.png" alt="Social Media Management vs Marketing" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Should You Hire Section */}
                <div className="container">
                    <div className="row g-5 mt-120 align-items-center">
                        <div className="col-lg-6">
                            <div className="text-center">
                                <img src="/assets/img/insurance-consultancy-img/pages/insurance-consultancy/page-home/home-section-2/hire-illustration.png" alt="Why Hire Webdexpert Technologies" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="mb-4" style={{ fontSize: '40px', lineHeight: '1.3', fontWeight: '400', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Why Should You Hire Webdexpert Technologies As <span style={{ fontWeight: 'bold' }}>Your Social Media Management Company In India</span>
                            </h2>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                With 4.8 billion social media users, do you still think there could be any other place where you can find your target audience? Grab today's consumers on social media with the right social media management services!
                            </p>
                            <p className="mb-5" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                With <span style={{ fontWeight: 'bold' }}>12+ years of experience</span> and a portfolio that spans <span style={{ fontWeight: 'bold' }}>500+ successful clients globally</span>, Webdexpert Technologies is one of India's most trusted digital growth partners. We've helped brands across India, the US, UK, Canada, Australia, UAE, and other parts of the world break through the noise and become leaders in their industries.
                            </p>
                            <a href="/contact" className="btn btn-outline-dark px-5 py-3" style={{ fontSize: '16px', fontWeight: '500', border: '2px solid #000', borderRadius: '4px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Let's Talk To Expert →
                            </a>
                        </div>
                    </div>

                    {/* What You Get Section */}
                    <div className="row mt-120">
                        <div className="col-lg-12 text-center mb-5">
                            <h2 className="mb-4" style={{ fontSize: '40px', lineHeight: '1.3', fontWeight: '400', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                What You Get With Webdexpert's <span style={{ fontWeight: 'bold' }}>Social Media Management Services</span>
                            </h2>
                            <p className="mx-auto" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', maxWidth: '900px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Every business is different, and so is our strategy. We build a <span style={{ fontWeight: 'bold' }}>customized roadmap</span> that reflects your brand voice, speaks to your target audience, and focuses on <span style={{ fontWeight: 'bold' }}>revenue—not just reach</span>.
                            </p>
                        </div>
                    </div>

                    <div className="row g-4 mb-120">
                        <div className="col-lg-4 col-md-6">
                            <div className="card h-100 border rounded-3 p-5 text-center" style={{ borderColor: '#e0e0e0' }}>
                                <div className="mb-4 d-flex justify-content-center">
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="80" height="80" rx="10" fill="#f5f5f5"/>
                                        <path d="M30 25C28.3431 25 27 26.3431 27 28V52C27 53.6569 28.3431 55 30 55H34C35.6569 55 37 53.6569 37 52V28C37 26.3431 35.6569 25 34 25H30ZM30 28H34V52H30V28Z" fill="#000"/>
                                        <path d="M46 25C44.3431 25 43 26.3431 43 28V52C43 53.6569 44.3431 55 46 55H50C51.6569 55 53 53.6569 53 52V28C53 26.3431 51.6569 25 50 25H46ZM46 28H50V52H46V28Z" fill="#000"/>
                                    </svg>
                                </div>
                                <h4 className="mb-3" style={{ fontSize: '20px', fontWeight: 'bold', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    End-to-End Social Media Strategy
                                </h4>
                                <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    From research to execution, we handle it all
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card h-100 border rounded-3 p-5 text-center" style={{ borderColor: '#e0e0e0' }}>
                                <div className="mb-4 d-flex justify-content-center">
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="80" height="80" rx="10" fill="#f5f5f5"/>
                                        <path d="M30 25C28.3431 25 27 26.3431 27 28V47H30V28H48V31H51V28C51 26.3431 49.6569 25 48 25H30Z" fill="#000"/>
                                        <path d="M27 50H30V53H27V50Z" fill="#000"/>
                                        <path d="M33 50H51V53H33V50Z" fill="#000"/>
                                    </svg>
                                </div>
                                <h4 className="mb-3" style={{ fontSize: '20px', fontWeight: 'bold', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    Content That Converts
                                </h4>
                                <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    Posts, stories, reels, and creatives designed to spark action
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card h-100 border rounded-3 p-5 text-center" style={{ borderColor: '#e0e0e0' }}>
                                <div className="mb-4 d-flex justify-content-center">
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="80" height="80" rx="10" fill="#f5f5f5"/>
                                        <path d="M30 25C28.3431 25 27 26.3431 27 28V48C27 49.6569 28.3431 51 30 51H50C51.6569 51 53 49.6569 53 48V28C53 26.3431 51.6569 25 50 25H30ZM30 28H50V48H30V28Z" fill="#000"/>
                                        <path d="M35 32H38V35H35V32Z" fill="#000"/>
                                        <path d="M42 32H45V35H42V32Z" fill="#000"/>
                                        <path d="M35 38H45V41H35V38Z" fill="#000"/>
                                    </svg>
                                </div>
                                <h4 className="mb-3" style={{ fontSize: '20px', fontWeight: 'bold', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    Paid Ads That Work
                                </h4>
                                <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    Targeted ad campaigns for maximum ROI
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card h-100 border rounded-3 p-5 text-center" style={{ borderColor: '#e0e0e0' }}>
                                <div className="mb-4 d-flex justify-content-center">
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="80" height="80" rx="10" fill="#f5f5f5"/>
                                        <path d="M40 25C35.5817 25 32 28.5817 32 33C32 37.4183 35.5817 41 40 41C44.4183 41 48 37.4183 48 33C48 28.5817 44.4183 25 40 25ZM40 28C42.7614 28 45 30.2386 45 33C45 35.7614 42.7614 38 40 38C37.2386 38 35 35.7614 35 33C35 30.2386 37.2386 28 40 28Z" fill="#000"/>
                                        <path d="M28 44C26.3431 44 25 45.3431 25 47V52C25 53.6569 26.3431 55 28 55C29.6569 55 31 53.6569 31 52V47C31 45.3431 29.6569 44 28 44Z" fill="#000"/>
                                        <path d="M40 44C38.3431 44 37 45.3431 37 47V52C37 53.6569 38.3431 55 40 55C41.6569 55 43 53.6569 43 52V47C43 45.3431 41.6569 44 40 44Z" fill="#000"/>
                                        <path d="M52 44C50.3431 44 49 45.3431 49 47V52C49 53.6569 50.3431 55 52 55C53.6569 55 55 53.6569 55 52V47C55 45.3431 53.6569 44 52 44Z" fill="#000"/>
                                    </svg>
                                </div>
                                <h4 className="mb-3" style={{ fontSize: '20px', fontWeight: 'bold', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    Engagement & Community Building
                                </h4>
                                <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    Turn followers into fans and fans into customers
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card h-100 border rounded-3 p-5 text-center" style={{ borderColor: '#e0e0e0' }}>
                                <div className="mb-4 d-flex justify-content-center">
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="80" height="80" rx="10" fill="#f5f5f5"/>
                                        <path d="M30 25C28.3431 25 27 26.3431 27 28V48C27 49.6569 28.3431 51 30 51H50C51.6569 51 53 49.6569 53 48V28C53 26.3431 51.6569 25 50 25H30ZM30 28H50V48H30V28Z" fill="#000"/>
                                        <circle cx="40" cy="34" r="3" fill="#000"/>
                                        <path d="M33 40H47L42 45L38 42L33 40Z" fill="#000"/>
                                    </svg>
                                </div>
                                <h4 className="mb-3" style={{ fontSize: '20px', fontWeight: 'bold', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    Advanced Analytics
                                </h4>
                                <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    Real-time performance tracking & monthly reports
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card h-100 border rounded-3 p-5 text-center" style={{ borderColor: '#e0e0e0' }}>
                                <div className="mb-4 d-flex justify-content-center">
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="80" height="80" rx="10" fill="#f5f5f5"/>
                                        <path d="M30 30C28.3431 30 27 31.3431 27 33V47C27 48.6569 28.3431 50 30 50H50C51.6569 50 53 48.6569 53 47V33C53 31.3431 51.6569 30 50 30H30ZM30 33H50V47H30V33Z" fill="#000"/>
                                        <rect x="32" y="36" width="4" height="8" fill="#000"/>
                                        <rect x="38" y="40" width="4" height="4" fill="#000"/>
                                        <rect x="44" y="38" width="4" height="6" fill="#000"/>
                                    </svg>
                                </div>
                                <h4 className="mb-3" style={{ fontSize: '20px', fontWeight: 'bold', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    Competitor & Trend Analysis
                                </h4>
                                <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    Stay ahead, not just in the game
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 text-center mb-5">
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                From <span style={{ fontWeight: 'bold' }}>Instagram reels</span> that go viral to <span style={{ fontWeight: 'bold' }}>LinkedIn campaigns</span> that attract B2B leads—our work speaks for itself. And our clients agree.
                            </p>
                            <a href="/contact" className="btn btn-dark px-5 py-3" style={{ fontSize: '16px', fontWeight: '500', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Get Start Now →
                            </a>
                        </div>
                    </div>
                </div>

                {/* Made Just For You Section */}
                <div className="container-fluid py-80" style={{ backgroundColor: '#e6edee', marginTop: '80px' }}>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 text-center">
                            <h2 className="mb-4" style={{ fontSize: '40px', lineHeight: '1.3', fontWeight: '400', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                <span style={{ color: '#ff652e', fontWeight: 'bold' }}>Social Media Management Services</span>
                                <span style={{ color: '#000' }}> That're Made Just-For-You</span>
                            </h2>
                            <h4 className="mb-5" style={{ fontSize: '24px', lineHeight: '1.4', color: '#ff652e', fontWeight: 'bold', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                You know what's your destination, we know the way!
                            </h4>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                If you find your social media activities to be slimming down, or you don't see progress in your social media accounts, we can handle them all! First, we will step back to see the bigger picture and identify the slips and errors that were obstructing your social media progress. Then, we will create an action plan to address these issues.
                            </p>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Thereafter, we will execute and implement the strategies and then track the improvement.
                            </p>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                As a social media management company, we believe that one strategy can't fit all. You need a customized plan that is specifically designed to meet the needs of your social media.
                            </p>
                            <p className="mb-5" style={{ fontSize: '16px', lineHeight: '1.8', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                We also assess the needs of the hour and ensure everything is delivered on time.
                            </p>
                            <div className="d-flex justify-content-center gap-3 flex-wrap">
                                <a href="/contact" className="btn px-5 py-3" style={{ fontSize: '16px', fontWeight: '500', backgroundColor: '#ff652e', color: '#fff', border: 'none', borderRadius: '4px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    REQUEST PROPOSAL →
                                </a>
                                <a href="/pricing" className="btn px-5 py-3" style={{ fontSize: '16px', fontWeight: '500', backgroundColor: '#fff', color: '#000', border: 'none', borderRadius: '4px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    SMM PACKAGES →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Count On Our Social Media Management Company Section */}
                <div className="container">
                    <div className="row mt-120">
                        <div className="col-lg-10 offset-lg-1 text-center">
                            <p className="mb-3" style={{ fontSize: '18px', lineHeight: '1.6', color: '#333', fontWeight: '500', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Social Media Advertising & Social Media Optimization
                            </p>
                            <h2 className="mb-5" style={{ fontSize: '40px', lineHeight: '1.3', fontWeight: '400', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Count On <span style={{ fontWeight: 'bold' }}>Our Social Media Management Company</span> To Get The Best Of Both Things
                            </h2>
                            <p className="mb-5" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                When it comes to social media management, there are two strategies you can choose from. The first one is <span style={{ color: '#ff652e', fontWeight: '500' }}>Social Media Advertising</span>, and the second one is <span style={{ color: '#ff652e', fontWeight: '500' }}>Social Media Optimization</span> and Handling. As a social media management company, we are familiar with both these strategies and have helped hundreds of our clients attain their goals.
                            </p>
                        </div>
                    </div>

                    {/* Social Media Advertising Section */}
                    <div className="row g-5 mt-120 align-items-center">
                        <div className="col-lg-6">
                            <h3 className="mb-4" style={{ fontSize: '32px', lineHeight: '1.3', fontWeight: 'bold', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Social Media Advertising
                            </h3>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                The first strategy is Social Media Advertising. Paid social media marketing is undoubtedly a faster and more effective way to reach a broader audience in a short period. Pioneers like Facebook and Twitter are enabling businesses to advertise on their social media platforms. For instance, on Facebook, there are ads, and on Instagram, there are promoted tweets.
                            </p>
                            <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                It is based on the idea of reaching a large audience and exposing them to the product or service you want to promote. This strategy is often employed by companies seeking to generate leads or increase exposure when introducing a new product or service.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-center">
                                <img src="/assets/img/insurance-consultancy-img/pages/insurance-consultancy/page-home/home-section-2/social-media-advertising.png" alt="Social Media Advertising" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>
                        </div>
                    </div>

                    {/* Social Media Optimization Section */}
                    <div className="row g-5 mt-120 align-items-center">
                        <div className="col-lg-6">
                            <div className="text-center">
                                <img src="/assets/img/insurance-consultancy-img/pages/insurance-consultancy/page-home/home-section-2/social-media-optimization.png" alt="Social Media Optimization" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3 className="mb-4" style={{ fontSize: '32px', lineHeight: '1.3', fontWeight: 'bold', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Social Media Optimization and Handling
                            </h3>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                It is based on the idea of connecting with the audience and engaging them to increase their knowledge about the product or service being promoted.
                            </p>
                            <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                In this strategy, the primary focus is to make the content of the social media profile engaging and attractive, thereby attracting more visitors. The best-kept secret of this strategy is consistency and quality content.
                            </p>
                        </div>
                    </div>

                    {/* Client Benefits Section */}
                    <div className="row g-5 mt-120 align-items-center">
                        <div className="col-lg-6">
                            <div className="text-center">
                                <img src="/assets/img/insurance-consultancy-img/pages/insurance-consultancy/page-home/home-section-2/social-media-work.png" alt="Social Media Work" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                clients' businesses includes:
                            </p>
                            <ul className="list-unstyled mb-4">
                                <li className="mb-3" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    <span style={{ marginRight: '10px' }}>›</span> Making the best use of current social media marketing
                                </li>
                                <li className="mb-3" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    <span style={{ marginRight: '10px' }}>›</span> Avoiding the common pitfalls
                                </li>
                                <li className="mb-3" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    <span style={{ marginRight: '10px' }}>›</span> Implementation of the right social media optimization and handling strategies
                                </li>
                            </ul>
                            <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Although Social Media Optimization and Handling require a lot of time, skills, and knowledge in order to be able to achieve what you want, the results are always worth it.
                            </p>
                        </div>
                    </div>

                    {/* Final CTA Heading */}
                    <div className="row mt-120">
                        <div className="col-lg-12 text-center">
                            <h2 className="mb-5" style={{ fontSize: '40px', lineHeight: '1.3', fontWeight: '400', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Let's Grow Your <span style={{ fontWeight: 'bold' }}>Brand Together With Right Social Media Management</span> Company
                            </h2>
                            <p className="mb-5 mx-auto" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', maxWidth: '1100px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Indeed, advertising on a social media account is a faster way to reach your target audience, outcompete your competitors, and generate leads and conversions. You can achieve this organically as well. As a social media management company, we are well-trained and experienced in helping businesses' social media accounts reach new heights in an organic way. Our trained social media specialists can help you make the most of social media accounts without having you to bear the advertising costs.
                            </p>
                            <h4 className="mb-5" style={{ fontSize: '24px', lineHeight: '1.4', color: '#000', fontWeight: 'bold', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Here's how we make this possible!
                            </h4>
                        </div>
                    </div>

                    {/* Social Media Strategy & Planning Section */}
                    <div className="row g-5 mb-120 align-items-center">
                        <div className="col-lg-6">
                            <h3 className="mb-4" style={{ fontSize: '32px', lineHeight: '1.3', fontWeight: 'bold', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Social Media Strategy & Planning
                            </h3>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                A social media strategy is the foundation of effective social media management. If you are looking to manage or create your social media accounts, then you will need a comprehensive social media strategy. As a social media management company, we design strategies to help you achieve your business goals through your social channels.
                            </p>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                It is a plan that helps you identify which social networks you should be on, what content to share, and how to generate engagement. Moreover, our social media strategy is a living document, meaning it evolves as we grow as a business.
                            </p>
                            <a href="/contact" className="btn btn-dark px-5 py-3" style={{ fontSize: '16px', fontWeight: '500', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Let's Talk To Expert →
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-center">
                                <img src="/assets/img/insurance-consultancy-img/pages/insurance-consultancy/page-home/home-section-2/strategy-planning.png" alt="Social Media Strategy & Planning" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>
                        </div>
                    </div>

                    {/* Designing Profile Section */}
                    <div className="row g-5 mt-120 align-items-center">
                        <div className="col-lg-6">
                            <div className="text-center">
                                <img src="/assets/img/insurance-consultancy-img/pages/insurance-consultancy/page-home/home-section-2/designing-profile.png" alt="Designing Profile" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3 className="mb-4" style={{ fontSize: '32px', lineHeight: '1.3', fontWeight: 'bold', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Designing Profile
                            </h3>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Social media platforms are overpopulated with businesses that don't have a profile. It's essential to have a profile because it will serve as your direct point of contact with the customer. Ideally, you want your social media profile to be the first thing people see when they search for your business on social media platforms. That's why it's crucial to have a well-designed profile.
                            </p>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                As an experienced social media management company, we can confidently say that a well-designed profile will make your business stand out on social media platforms. A poorly designed profile can lead people to overlook your business and opt for a competitor.
                            </p>
                            <a href="/contact" className="btn btn-dark px-5 py-3" style={{ fontSize: '16px', fontWeight: '500', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Get a Quote →
                            </a>
                        </div>
                    </div>

                    {/* Content Creation Section */}
                    <div className="row g-5 mt-120 mb-120 align-items-center">
                        <div className="col-lg-6">
                            <h3 className="mb-4" style={{ fontSize: '32px', lineHeight: '1.3', fontWeight: 'bold', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Content Creation
                            </h3>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Content creation is one of the most vital tasks for the success of any social media campaign. It will not only help you to stay in touch with your followers and provide them with the latest news about your company, but also help you to generate more traffic to your website.
                            </p>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                A well-crafted content strategy will help you drive more traffic and establish an online presence for your brand. To stay ahead in the fiercely competitive online world, you must stand out from the crowd and make a lasting impression on your target audience.
                            </p>
                            <a href="/contact" className="btn btn-dark px-5 py-3" style={{ fontSize: '16px', fontWeight: '500', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Contact Now →
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-center">
                                <img src="/assets/img/insurance-consultancy-img/pages/insurance-consultancy/page-home/home-section-2/img-1.png" alt="Content Creation" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>
                        </div>
                    </div>

                    {/* Scheduling & Posting Section */}
                    <div className="row g-5 mt-120 align-items-center">
                        <div className="col-lg-6">
                            <div className="text-center">
                                <img src="/assets/img/insurance-consultancy-img/pages/insurance-consultancy/page-home/home-section-2/scheduling-posting.png" alt="Scheduling & Posting" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3 className="mb-4" style={{ fontSize: '32px', lineHeight: '1.3', fontWeight: 'bold', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Scheduling & Posting
                            </h3>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                When you have a busy schedule, it becomes challenging to manage the social media tasks that you need to perform. If you have a business and you don't have enough time to dedicate to your social media accounts, then you need social media management services.
                            </p>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Our specialists will handle tasks such as posting, scheduling, and other related tasks. Not only will this help you to save a lot of time by doing this, but it will also enhance your visibility on social media.
                            </p>
                            <a href="/contact" className="btn btn-dark px-5 py-3" style={{ fontSize: '16px', fontWeight: '500', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Let's Talk To Expert →
                            </a>
                        </div>
                    </div>

                    {/* Inbound Engagement Monitoring Section */}
                    <div className="row g-5 mt-120 align-items-center">
                        <div className="col-lg-6">
                            <h3 className="mb-4" style={{ fontSize: '32px', lineHeight: '1.3', fontWeight: 'bold', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Inbound Engagement Monitoring
                            </h3>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                How do you measure the success of your social media marketing efforts? Quite simply, by tracking the engagement of your posts. It helps to find the best time for social media posting and to create content that is more interesting and valuable to customers. It includes the analysis of the content for social media, tweets, and posts, which helps to determine what is the most popular among users and what content needs improvement.
                            </p>
                            <a href="/contact" className="btn btn-dark px-5 py-3" style={{ fontSize: '16px', fontWeight: '500', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Contact Now →
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-center">
                                <img src="/assets/img/insurance-consultancy-img/pages/insurance-consultancy/page-home/home-section-2/inbound-engagement.png" alt="Inbound Engagement Monitoring" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>
                        </div>
                    </div>

                    {/* Influencer Management Section */}
                    <div className="row g-5 mt-120 align-items-center">
                        <div className="col-lg-6">
                            <div className="text-center">
                                <img src="/assets/img/insurance-consultancy-img/pages/insurance-consultancy/page-home/home-section-2/influencer-management.png" alt="Influencer Management" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3 className="mb-4" style={{ fontSize: '32px', lineHeight: '1.3', fontWeight: 'bold', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Influencer Management
                            </h3>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                The lifestyle filled with the glitz and glamor of influencers attracts everyone. If you want them to work in your favor, then you must know that influencer management is a spectacular way to grow your social media accounts by connecting with people who are already engaged with your target audience. As a social media management company, we will search and match your business with influencers who have a similar audience taste and can contribute to increasing brand awareness.
                            </p>
                            <a href="/contact" className="btn btn-dark px-5 py-3" style={{ fontSize: '16px', fontWeight: '500', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Contact Now →
                            </a>
                        </div>
                    </div>

                    {/* Social Media Training Section */}
                    <div className="row g-5 mt-120 align-items-center">
                        <div className="col-lg-6">
                            <h3 className="mb-4" style={{ fontSize: '32px', lineHeight: '1.3', fontWeight: 'bold', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Social Media Training
                            </h3>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                As a social media management company in India, we believe that true power is gained by sharing knowledge and by not hoarding it.
                            </p>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                We assume that our years of experience and wisdom will be wasted if we keep it to ourselves; hence, we like to share our knowledge through our blogs, newsletters, podcasts, presentations, and more.
                            </p>
                            <a href="/contact" className="btn btn-dark px-5 py-3" style={{ fontSize: '16px', fontWeight: '500', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Contact Now →
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-center">
                                <img src="/assets/img/insurance-consultancy-img/pages/insurance-consultancy/page-home/home-section-2/social-media-training.png" alt="Social Media Training" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>
                        </div>
                    </div>

                    {/* Event Management Section */}
                    <div className="row g-5 mt-120 mb-120 align-items-center">
                        <div className="col-lg-6">
                            <div className="text-center">
                                <img src="/assets/img/insurance-consultancy-img/pages/insurance-consultancy/page-home/home-section-2/event-management.png" alt="Event Management" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3 className="mb-4" style={{ fontSize: '32px', lineHeight: '1.3', fontWeight: 'bold', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Event Management
                            </h3>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Events are an excellent way to generate buzz about your business on social media. Our social media management company organizes events or promotional activities tailored to your budget to increase brand awareness and enhance customer engagement by maximizing public participation in the event.
                            </p>
                            <a href="/contact" className="btn btn-dark px-5 py-3" style={{ fontSize: '16px', fontWeight: '500', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Get a Quote →
                            </a>
                        </div>
                    </div>
                    
                    {/* Content Creation Section */}
                    <div className="row g-5 mt-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="text-center">
                                <img src="/assets/img/insurance-consultancy-img/pages/insurance-consultancy/page-home/home-section-2/content-creation.png" alt="Content Creation" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3 className="mb-4" style={{ fontSize: '32px', lineHeight: '1.3', fontWeight: 'bold', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif' }}>
                                Content Creation
                            </h3>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif' }}>
                                We understand the significance of engaging and relevant content in establishing a strong social media presence for your company.
                            </p>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif' }}>
                                Our content creators take the time to comprehend your brand’s voice and goal in order to make sure our material is in line with your company’s values.
                            </p>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif' }}>
                                Our group of proficient content creators can produce a range of content, including informational infographics, imaginative carousels, and videos that will engage your audience and keep them captivated.
                            </p>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif' }}>
                                Our production process also takes into account the increasing demand for visuals in today’s social media landscape. We strive to ensure that all our visuals are of top‑notch quality and are optimized for the platform being used.
                            </p>
                            <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif' }}>
                                Whether it’s creating interactive polls or utilizing various design elements, our content creation process will capture your brand’s unique voice and convey it in a way that resonates with your audience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Social Media Management Services Section */}
            <section style={{ backgroundColor: '#e6edee', paddingTop: '80px', paddingBottom: '80px' }}>
                <div className="container">
                    {/* Section Header */}
                    <div className="row">
                        <div className="col-12 text-center mb-5">
                            <h2 className="mb-4" style={{ fontSize: '40px', lineHeight: '1.3', fontWeight: 'normal', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Our <span style={{ fontWeight: 'bold' }}>Social Media Management Services</span> In India
                            </h2>
                            <p className="mb-4" style={{ fontSize: '18px', lineHeight: '1.6', fontWeight: '500', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                No matter which social media platform you select, we've got you covered!
                            </p>
                            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', maxWidth: '1100px', margin: '0 auto' }}>
                                Every social media platform is unique and requires a completely different planning, strategy, and roadmap towards success. As a social media management company, we bring years of experience in growing social accounts for our clients' businesses across various social media platforms. We know the nuances of different social platforms and give our clients most of our social media management services. Whether it is about increasing Instagram followers or YouTube subscribers, we can be a game-changer!
                            </p>
                        </div>
                    </div>

                    {/* Facebook Management Section */}
                    <div className="row g-5 mt-5 align-items-center">
                        <div className="col-lg-6">
                            <h3 className="mb-4" style={{ fontSize: '32px', lineHeight: '1.3', fontWeight: 'bold', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Facebook Management
                            </h3>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Facebook is the most used Social media platform in the world. However, managing Facebook is no easy task. As a business, you want to get the most out of your Facebook page and make sure that it's driving the ROI. Thankfully! We're here to derive outcomes from your Facebook page.
                            </p>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                <span style={{ fontWeight: 'bold' }}>Webdexpert Technologies</span>, a social media marketing agency, helps businesses leverage the potential of Facebook marketing. To do this, we have a team of highly skilled experts who are passionate about Facebook marketing. Moreover, we offer strategy recommendations, content creation, inbound marketing, and Facebook advertising.
                            </p>
                            <a href="/contact" className="btn btn-dark px-5 py-3" style={{ fontSize: '16px', fontWeight: '500', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Read More →
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-center">
                                <img src="/assets/img/insurance-consultancy-img/pages/insurance-consultancy/page-home/home-section-2/facebook-management.png" alt="Facebook Management" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>
                        </div>
                    </div>

                    {/* Twitter Management Section */}
                    <div className="row g-5 mt-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="text-center">
                                <img src="/assets/img/insurance-consultancy-img/pages/insurance-consultancy/page-home/home-section-2/twitter-management.png" alt="Twitter Management" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3 className="mb-4" style={{ fontSize: '32px', lineHeight: '1.3', fontWeight: 'bold', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Twitter Management
                            </h3>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Twitter is one of the most eminent social networking sites with nearly 300 million users. Twitter marketing is a great way to get your business to grow and develop. However, it is not an easy task.
                            </p>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                At <span style={{ fontWeight: 'bold' }}>Webdexpert Technologies</span>, we will ensure your Twitter account is running smoothly and delivering the most value for your investment. We will help the right followers reach and retain at your account.
                            </p>
                            <a href="/contact" className="btn btn-dark px-5 py-3" style={{ fontSize: '16px', fontWeight: '500', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Read More →
                            </a>
                        </div>
                    </div>

                    {/* Instagram Management Section */}
                    <div className="row g-5 mt-5 align-items-center">
                        <div className="col-lg-6">
                            <h3 className="mb-4" style={{ fontSize: '32px', lineHeight: '1.3', fontWeight: 'bold', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Instagram Management
                            </h3>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Instagram was launched in 2010 and was acquired by Facebook for $1 billion the very next year. Since then, Instagram's popularity has continued to increase. Today, Instagram has become a highly effective marketing tool for businesses, as it enables them to connect with their customers in a more personal way.
                            </p>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                As an Instagram Management and Marketing Company, we bring extensive experience to the table. From preparing Instagram stories, formulating reels, managing IG interstitial ads and creating posts, we do it all.
                            </p>
                            <a href="/contact" className="btn btn-dark px-5 py-3" style={{ fontSize: '16px', fontWeight: '500', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Read More →
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-center">
                                <img src="/assets/img/insurance-consultancy-img/pages/insurance-consultancy/page-home/home-section-2/instagram-management.png" alt="Instagram Management" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>
                        </div>
                    </div>

                    {/* LinkedIn Management Section */}
                    <div className="row g-5 mt-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="text-center">
                                <img src="/assets/img/insurance-consultancy-img/pages/insurance-consultancy/page-home/home-section-2/linkedin-management.png" alt="LinkedIn Management" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3 className="mb-4" style={{ fontSize: '32px', lineHeight: '1.3', fontWeight: 'bold', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                LinkedIn Management
                            </h3>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                LinkedIn is a powerful platform that can help you manage your brand's image. However, it's not easy to maintain a professional reputation on LinkedIn. You have to have a lot of content, consistency and interactivity. This is where a LinkedIn management company can help, i.e. by handling the day to day management needs.
                            </p>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Through our LinkedIn Management services, we raise your brand's credibility, combat the competitors, and expand customers' reach.
                            </p>
                            <a href="/contact" className="btn btn-dark px-5 py-3" style={{ fontSize: '16px', fontWeight: '500', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Read More →
                            </a>
                        </div>
                    </div>

                    {/* YouTube Management Section */}
                    <div className="row g-5 mt-5 align-items-center">
                        <div className="col-lg-6">
                            <h3 className="mb-4" style={{ fontSize: '32px', lineHeight: '1.3', fontWeight: 'bold', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                YouTube Management
                            </h3>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                It's no secret that YouTube is one of the most popular sites on the internet. However, the problem with YouTube is that among millions of videos, it can be very difficult to come into sight of the audience. Webdexpert Technologies has a solution for this problem. We offer social media management services that can help put your company's YouTube channel and content on the map. We can help you find new viewers and fans for your channel, as well as assist you in managing the channel itself.
                            </p>
                            <a href="/contact" className="btn btn-dark px-5 py-3" style={{ fontSize: '16px', fontWeight: '500', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Read More →
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-center">
                                <img src="/assets/img/insurance-consultancy-img/pages/insurance-consultancy/page-home/home-section-2/youtube-management.png" alt="YouTube Management" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>
                        </div>
                    </div>

                    {/* Pinterest Management Section */}
                    <div className="row g-5 mt-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="text-center">
                                <img src="/assets/img/insurance-consultancy-img/pages/insurance-consultancy/page-home/home-section-2/pinterest-management.png" alt="Pinterest Management" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3 className="mb-4" style={{ fontSize: '32px', lineHeight: '1.3', fontWeight: 'bold', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Pinterest Management
                            </h3>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Pinterest is the fastest-growing social media platform. It is increasingly becoming the go-to social media platform for online businesses.
                            </p>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                It is a social media platform that is almost exclusively used for sharing images and videos. From pictures of dresses to videos of dogs, people use this platform to share a wide range of content.
                            </p>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                With Pinterest social media management services from Webdexpert Technologies, you gain comprehensive analytics and insights into what your target audience wants.
                            </p>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                From scheduling fresh pins, joining community boards, to strategically performing inbound marketing and ensuring the relevancy of content to the target audience, we do it all!
                            </p>
                            <a href="/contact" className="btn btn-dark px-5 py-3" style={{ fontSize: '16px', fontWeight: '500', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Read More →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section style={{ backgroundColor: '#000', paddingTop: '80px', paddingBottom: '80px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-5">
                            <h2 className="mb-5" style={{ fontSize: '40px', lineHeight: '1.3', fontWeight: 'normal', color: '#fff', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Why Choose <span style={{ color: '#FDB913', fontWeight: 'bold' }}>Webdexpert Technologies</span> For Best Social Media Management Services?
                            </h2>
                        </div>
                    </div>

                    {/* First Row - 4 Cards */}
                    <div className="row g-4 mb-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="text-center p-4" style={{ border: '1px solid #FDB913', borderRadius: '8px', height: '100%', backgroundColor: 'transparent' }}>
                                <div className="mb-4 d-flex justify-content-center">
                                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#FDB913', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img src="/assets/img/insurance-consultancy-img/pages/insurance-consultancy/page-home/home-section-2/icon-experience.png" alt="Experience" style={{ width: '40px', height: '40px' }} />
                                    </div>
                                </div>
                                <h4 style={{ fontSize: '18px', fontWeight: '500', color: '#fff', lineHeight: '1.4', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    8+ Years of Industry Experience
                                </h4>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="text-center p-4" style={{ border: '1px solid #FDB913', borderRadius: '8px', height: '100%', backgroundColor: 'transparent' }}>
                                <div className="mb-4 d-flex justify-content-center">
                                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#FDB913', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img src="/assets/img/insurance-consultancy-img/pages/insurance-consultancy/page-home/home-section-2/icon-clients.png" alt="Clients" style={{ width: '40px', height: '40px' }} />
                                    </div>
                                </div>
                                <h4 style={{ fontSize: '18px', fontWeight: '500', color: '#fff', lineHeight: '1.4', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    Managed 50+ Clients Across 10+ Countries
                                </h4>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="text-center p-4" style={{ border: '1px solid #FDB913', borderRadius: '8px', height: '100%', backgroundColor: 'transparent' }}>
                                <div className="mb-4 d-flex justify-content-center">
                                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#FDB913', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img src="/assets/img/insurance-consultancy-img/pages/insurance-consultancy/page-home/home-section-2/icon-news.png" alt="News" style={{ width: '40px', height: '40px' }} />
                                    </div>
                                </div>
                                <h4 style={{ fontSize: '18px', fontWeight: '500', color: '#fff', lineHeight: '1.4', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    Featured in India News Channels
                                </h4>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="text-center p-4" style={{ border: '1px solid #FDB913', borderRadius: '8px', height: '100%', backgroundColor: 'transparent' }}>
                                <div className="mb-4 d-flex justify-content-center">
                                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#FDB913', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img src="/assets/img/insurance-consultancy-img/pages/insurance-consultancy/page-home/home-section-2/icon-rating.png" alt="Rating" style={{ width: '40px', height: '40px' }} />
                                    </div>
                                </div>
                                <h4 style={{ fontSize: '18px', fontWeight: '500', color: '#fff', lineHeight: '1.4', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    130+ Google Ratings 4.9★
                                </h4>
                            </div>
                        </div>
                    </div>

                    {/* Second Row - 4 Cards */}
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="text-center p-4" style={{ border: '1px solid #FDB913', borderRadius: '8px', height: '100%', backgroundColor: 'transparent' }}>
                                <div className="mb-4 d-flex justify-content-center">
                                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#FDB913', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img src="/assets/img/insurance-consultancy-img/pages/insurance-consultancy/page-home/home-section-2/icon-managers.png" alt="Managers" style={{ width: '40px', height: '40px' }} />
                                    </div>
                                </div>
                                <h4 style={{ fontSize: '18px', fontWeight: '500', color: '#fff', lineHeight: '1.4', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    Expert Social Media Managers
                                </h4>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="text-center p-4" style={{ border: '1px solid #FDB913', borderRadius: '8px', height: '100%', backgroundColor: 'transparent' }}>
                                <div className="mb-4 d-flex justify-content-center">
                                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#FDB913', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img src="/assets/img/insurance-consultancy-img/pages/insurance-consultancy/page-home/home-section-2/icon-tools.png" alt="Tools" style={{ width: '40px', height: '40px' }} />
                                    </div>
                                </div>
                                <h4 style={{ fontSize: '18px', fontWeight: '500', color: '#fff', lineHeight: '1.4', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    Trusted Social Media Tools
                                </h4>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="text-center p-4" style={{ border: '1px solid #FDB913', borderRadius: '8px', height: '100%', backgroundColor: 'transparent' }}>
                                <div className="mb-4 d-flex justify-content-center">
                                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#FDB913', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img src="/assets/img/insurance-consultancy-img/pages/insurance-consultancy/page-home/home-section-2/icon-pricing.png" alt="Pricing" style={{ width: '40px', height: '40px' }} />
                                    </div>
                                </div>
                                <h4 style={{ fontSize: '18px', fontWeight: '500', color: '#fff', lineHeight: '1.4', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    Transparent Pricing
                                </h4>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="text-center p-4" style={{ border: '1px solid #FDB913', borderRadius: '8px', height: '100%', backgroundColor: 'transparent' }}>
                                <div className="mb-4 d-flex justify-content-center">
                                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#FDB913', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img src="/assets/img/insurance-consultancy-img/pages/insurance-consultancy/page-home/home-section-2/icon-reporting.png" alt="Reporting" style={{ width: '40px', height: '40px' }} />
                                    </div>
                                </div>
                                <h4 style={{ fontSize: '18px', fontWeight: '500', color: '#fff', lineHeight: '1.4', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                    Timely Reporting
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Social Media Management Process Section */}
            <section style={{ backgroundColor: '#fff', paddingTop: '80px', paddingBottom: '80px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="mb-4" style={{ fontSize: '40px', lineHeight: '1.3', fontWeight: 'normal', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Our <span style={{ fontWeight: 'bold' }}>Social Media Management</span> Process
                            </h2>
                            <h3 className="mb-5" style={{ fontSize: '32px', lineHeight: '1.4', fontWeight: 'normal', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Managed By Pros. Designed To Sell. <span style={{ fontWeight: 'bold' }}>Powered By Webdexpert Technologies.</span>
                            </h3>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', maxWidth: '1100px', margin: '0 auto 30px' }}>
                                It is crucial to follow the right social media management process for the success of any social media campaign. If you plan on hiring a social media agency, then it's crucial to make sure you comprehend how they handle your social media. What tactics do they employ? How are results determined?
                            </p>
                            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', maxWidth: '1100px', margin: '0 auto' }}>
                                At Webdexpert Technologies, we are known for our transparency and take onus of everything we do. We don't hesitate to share our methodologies and work processes with the entire world. We believe that our clients have the right to know what social media management strategies we follow to make their social media thrive.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Social Media Management Strategy Section */}
            <section style={{ backgroundColor: '#fff', paddingTop: '80px', paddingBottom: '80px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-5">
                            <h2 className="mb-3" style={{ fontSize: '40px', lineHeight: '1.3', fontWeight: 'bold', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Our Social Media Management Strategy
                            </h2>
                            <p style={{ fontSize: '18px', lineHeight: '1.6', fontWeight: '500', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Here is a detailed review of our social media management process
                            </p>
                        </div>
                    </div>

                    {/* Research and Analysis Section */}
                    <div className="row g-5 mt-5 align-items-center">
                        <div className="col-lg-6">
                            <h3 className="mb-4" style={{ fontSize: '32px', lineHeight: '1.3', fontWeight: 'bold', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Research and Analysis
                            </h3>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Research and analysis are recognized as essential components of social media management. At Webdexpert Technologies, we conduct thorough research and analysis to target the right audience for your business. The success of any social media efforts needs proper research and analysis.
                            </p>
                            <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                We start the social media management process by doing extensive research and analysis. This requires carefully examining the client's industry and target market. By doing this, we ensure that we tailor the plan to the client's requirements rather than using a generic strategy.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-center">
                                <img src="/assets/img/insurance-consultancy-img/pages/insurance-consultancy/page-home/home-section-2/research-analysis.png" alt="Research and Analysis" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>
                        </div>
                    </div>

                    {/* Competitive Analysis Section */}
                    <div className="row g-5 mt-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="text-center">
                                <img src="/assets/img/insurance-consultancy-img/pages/insurance-consultancy/page-home/home-section-2/competitive-analysis.png" alt="Competitive Analysis" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <p className="mb-3" style={{ fontSize: '18px', lineHeight: '1.6', fontWeight: '500', color: '#666', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Data Analysis
                            </p>
                            <h3 className="mb-4" style={{ fontSize: '32px', lineHeight: '1.3', fontWeight: 'bold', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Competitive Analysis
                            </h3>
                            <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                The next step is a comprehensive competitive analysis. This entails paying careful attention to what rivals are doing. The study enables us to comprehend what appeals to target consumers (and what doesn't). Through this, we can easily avoid techniques or tools that don't attract consumers. With the research's comprehensive data on social media trends at our disposal, we create content using the powerful social media tools that resonates with the client's intended audience.
                            </p>
                        </div>
                    </div>

                    {/* Strategy Development Section */}
                    <div className="row g-5 mt-5 align-items-center">
                        <div className="col-lg-6">
                            <h3 className="mb-4" style={{ fontSize: '32px', lineHeight: '1.3', fontWeight: 'bold', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Strategy Development
                            </h3>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                The next step in our social media management approach is developing a strategy. It is a plan that outlines our client's social media goals and measures their performance.
                            </p>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                Our specialized staff creates customized strategies for each client's use of social media.
                            </p>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                We make sure to meet and surpass our clients' goals and objectives while always keeping their bottom line in mind.
                            </p>
                            <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                We outline precisely what has to be done on each platform and demonstrate to our customers the benefits that their social media efforts would have. We ensure that our customers get the most out of their social media efforts by setting clear goals and objectives for them to reach and measuring the outcomes through analytics.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-center">
                                <img src="/assets/img/insurance-consultancy-img/pages/insurance-consultancy/page-home/home-section-2/strategy-development.png" alt="Strategy Development" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>
                        </div>
                    </div>

                    {/* Content Creation Section */}
                    <div className="row g-5 mt-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="text-center">
                                <img src="/assets/img/insurance-consultancy-img/pages/insurance-consultancy/page-home/home-section-2/content-creation.png" alt="Content Creation" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="mb-4" style={{ fontSize: '40px', lineHeight: '1.3', fontWeight: 'bold', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif' }}>
                                Content Creation
                            </h2>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif' }}>
                                We understand the significance of engaging and relevant content in establishing a strong social media presence for your company.
                            </p>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif' }}>
                                Our content creators take the time to comprehend your brand's voice and goal in order to make sure our material is in line with your company's values.
                            </p>
                            <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif' }}>
                                Our group of proficient content creators can produce a range of content, including informational infographics, imaginative carousels, and videos that will engage your audience and keep them captivated.
                            </p>
                        </div>
                    </div>

                    {/* Social Media Advertising Section */}
                    <div className="row g-5 mt-120 align-items-center">
                        <div className="col-lg-6">
                            <h2 className="mb-4" style={{ fontSize: '40px', lineHeight: '1.3', fontWeight: 'bold', color: '#000', fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif' }}>
                                Social Media Advertising
                            </h2>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif' }}>
                                To guarantee our clients get the best outcomes from their advertising campaigns, we create a tailored plan. This enables them to reach their target audience and generate leads for their business. Our team of social media marketing experts has a wealth of expertise in creating and offering insight into the various ad forms. Also, we specialize in maximizing the return on investment from advertising initiatives (ROI).
                            </p>
                            <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif' }}>
                                We put a lot of effort into creating a thorough plan that considers the demographics and psychographics of the target market, financial constraints, platform best practices, and the brand’s own characteristics.
                            </p>
                            <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif' }}>
                                The advertising campaigns we create are highly successful and tailored to deliver the highest return on investment, thanks to our thorough research and a team of highly skilled social media ad specialists.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-center">
                                <img src="/assets/img/insurance-consultancy-img/pages/insurance-consultancy/page-home/home-section-2/img-1.png" alt="Social Media Advertising" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
