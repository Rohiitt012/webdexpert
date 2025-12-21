import Link from "next/link";

export default function Section3({ display, title1, title2, background }: any) {
    return (
        <>
            {/*creative-studio section 3*/}
            <section className={`creative-studio-section-3 position-relative overflow-hidden py-120 ${background}`}>
                <div className="container">
                    <div className={`text-center mb-80 ${title1} wow img-custom-anim-left`}>
                        <h2>
                        Our Creative & Digital Marketing Solutions<span className="text-primary">.</span>
                        </h2>
                        <p>
                        We deliver impactful branding, engaging designs, conversion-focused visuals, and SEO-driven content to strengthen your <br />  online presence, build trust, and drive consistent business growth across all digital platforms.
                        </p>
                    </div>
                    <div className={`text-center mb-80 ${title2} wow img-custom-anim-left`}>
                        <h2>View More Services</h2>
                        <p>
                            At Astrax, we offer a comprehensive suite of creative services designed to <br />
                            elevate your brand and bring your vision to life. From eye-catching design.
                        </p>
                    </div>
                    <div className="row mt-10 justify-content-between">
                        <div className="col-12 border-top">
                            <div className="card-service tg-img-reveal-item w-100 border-bottom py-5">
                                <div className="d-md-flex align-items-center">
                                    <div className="service-card-title">
                                        <Link href=".services-details">
                                            <h1 className="service-number stroke-white text-start mb-0">01.</h1>
                                        </Link>
                                    </div>
                                    <div className="d-md-flex flex-column justify-content-end w-100 ms-md-8">
                                        <div className="row justify-content-between">
                                            <div className="col-lg-4">
                                                <Link href=".services-details">
                                                    <h4 className="mb-0">Logo & Brand Identity</h4>
                                                </Link>
                                            </div>
                                            <div className="col-lg-6 offset-lg-1">
                                                <p className="service-card-text mb-0">
                                                We create distinctive logos and complete brand identities that reflect your business values, establish credibility, and ensure consistent visual recognition across all digital and offline platforms, helping your brand stand out and connect with your target audience effectively.
                                                </p>
                                            </div>
                                            <div className="col-lg-1 ms-auto text-end">
                                                <Link href=".services-details" className="icon-arrow">
                                                    <span className="service-card-icon icon-shape ms-auto icon-md rounded-circle d-none d-md-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                            <g opacity="0.3" clipPath="url(#clip0_649_1422)">
                                                                <path d="M13.2129 2.15987C13.2126 2.15987 13.2123 2.15983 13.212 2.15985L8.60471 2.17098C8.25955 2.17182 7.98038 2.45228 7.9812 2.7975C7.98201 3.14268 8.26249 3.42183 8.60767 3.42102L11.701 3.4135L2.3416 12.7729C2.09752 13.017 2.09752 13.4127 2.3416 13.6568C2.58568 13.9009 2.9814 13.9009 3.22548 13.6568L12.5849 4.29741L12.5774 7.39069C12.5766 7.73587 12.8557 8.01635 13.2009 8.01717C13.5461 8.01801 13.8266 7.73877 13.8274 7.39365L13.8386 2.78632C13.8386 2.78606 13.8385 2.78579 13.8385 2.7855C13.8389 2.43966 13.5576 2.15949 13.2129 2.15987Z" fill="white" />
                                                            </g>
                                                        </svg>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="card-service tg-img-reveal-item w-100 border-bottom py-5">
                                <div className="d-md-flex align-items-center">
                                    <div className="service-card-title">
                                        <Link href=".services-details">
                                            <h1 className="service-number stroke-white text-start mb-0">02.</h1>
                                        </Link>
                                    </div>
                                    <div className="d-md-flex flex-column justify-content-end w-100 ms-md-8">
                                        <div className="row justify-content-between">
                                            <div className="col-lg-4">
                                                <Link href=".services-details">
                                                    <h4 className="mb-0">Social Media Creatives</h4>
                                                </Link>
                                            </div>
                                            <div className="col-lg-6 offset-lg-1">
                                                <p className="service-card-text mb-0">
                                                We design visually compelling social media creatives tailored to your brand voice, helping you boost engagement, grow followers, and communicate your message clearly across platforms while maintaining consistency, creativity, and a strong visual impact.
                                                </p>
                                            </div>
                                            <div className="col-lg-1 ms-auto text-end">
                                                <Link href=".services-details" className="icon-arrow">
                                                    <span className="service-card-icon icon-shape ms-auto icon-md rounded-circle d-none d-md-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                            <g opacity="0.3" clipPath="url(#clip0_649_1422)">
                                                                <path d="M13.2129 2.15987C13.2126 2.15987 13.2123 2.15983 13.212 2.15985L8.60471 2.17098C8.25955 2.17182 7.98038 2.45228 7.9812 2.7975C7.98201 3.14268 8.26249 3.42183 8.60767 3.42102L11.701 3.4135L2.3416 12.7729C2.09752 13.017 2.09752 13.4127 2.3416 13.6568C2.58568 13.9009 2.9814 13.9009 3.22548 13.6568L12.5849 4.29741L12.5774 7.39069C12.5766 7.73587 12.8557 8.01635 13.2009 8.01717C13.5461 8.01801 13.8266 7.73877 13.8274 7.39365L13.8386 2.78632C13.8386 2.78606 13.8385 2.78579 13.8385 2.7855C13.8389 2.43966 13.5576 2.15949 13.2129 2.15987Z" fill="white" />
                                                            </g>
                                                        </svg>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="card-service tg-img-reveal-item w-100 border-bottom py-5">
                                <div className="d-md-flex align-items-center">
                                    <div className="service-card-title">
                                        <Link href=".services-details">
                                            <h1 className="service-number stroke-white text-start mb-0">03.</h1>
                                        </Link>
                                    </div>
                                    <div className="d-md-flex flex-column justify-content-end w-100 ms-md-8">
                                        <div className="row justify-content-between">
                                            <div className="col-lg-4">
                                                <Link href=".services-details">
                                                    <h4 className="mb-0">Website Banners & UI Graphics</h4>
                                                </Link>
                                            </div>
                                            <div className="col-lg-6 offset-lg-1">
                                                <p className="service-card-text mb-0">
                                                We design modern website banners and UI graphics that enhance user experience, highlight key messages, and improve conversions by combining clean layouts, strategic visuals, and brand-focused design elements optimized for all devices.
                                                </p>
                                            </div>
                                            <div className="col-lg-1 ms-auto text-end">
                                                <Link href=".services-details" className="icon-arrow">
                                                    <span className="service-card-icon icon-shape ms-auto icon-md rounded-circle d-none d-md-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                            <g opacity="0.3" clipPath="url(#clip0_649_1422)">
                                                                <path d="M13.2129 2.15987C13.2126 2.15987 13.2123 2.15983 13.212 2.15985L8.60471 2.17098C8.25955 2.17182 7.98038 2.45228 7.9812 2.7975C7.98201 3.14268 8.26249 3.42183 8.60767 3.42102L11.701 3.4135L2.3416 12.7729C2.09752 13.017 2.09752 13.4127 2.3416 13.6568C2.58568 13.9009 2.9814 13.9009 3.22548 13.6568L12.5849 4.29741L12.5774 7.39069C12.5766 7.73587 12.8557 8.01635 13.2009 8.01717C13.5461 8.01801 13.8266 7.73877 13.8274 7.39365L13.8386 2.78632C13.8386 2.78606 13.8385 2.78579 13.8385 2.7855C13.8389 2.43966 13.5576 2.15949 13.2129 2.15987Z" fill="white" />
                                                            </g>
                                                        </svg>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="card-service tg-img-reveal-item w-100 border-bottom py-5">
                                <div className="d-md-flex align-items-center">
                                    <div className="service-card-title">
                                        <Link href=".services-details">
                                            <h1 className="service-number stroke-white text-start mb-0">04.</h1>
                                        </Link>
                                    </div>
                                    <div className="d-md-flex flex-column justify-content-end w-100 ms-md-8">
                                        <div className="row justify-content-between">
                                            <div className="col-lg-4">
                                                <Link href=".services-details">
                                                    <h4 className="mb-0">SEO Copywriting & Marketing Content</h4>
                                                </Link>
                                            </div>
                                            <div className="col-lg-6 offset-lg-1">
                                                <p className="service-card-text mb-0">
                                                We craft SEO-optimized copy and marketing content that improves search visibility, attracts relevant traffic, and converts visitors into customers through clear messaging, strategic keywords, and persuasive, audience-focused storytelling.
                                                </p>
                                            </div>
                                            <div className="col-lg-1 ms-auto text-end">
                                                <Link href=".services-details" className="icon-arrow">
                                                    <span className="service-card-icon icon-shape ms-auto icon-md rounded-circle d-none d-md-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                            <g opacity="0.3" clipPath="url(#clip0_649_1422)">
                                                                <path d="M13.2129 2.15987C13.2126 2.15987 13.2123 2.15983 13.212 2.15985L8.60471 2.17098C8.25955 2.17182 7.98038 2.45228 7.9812 2.7975C7.98201 3.14268 8.26249 3.42183 8.60767 3.42102L11.701 3.4135L2.3416 12.7729C2.09752 13.017 2.09752 13.4127 2.3416 13.6568C2.58568 13.9009 2.9814 13.9009 3.22548 13.6568L12.5849 4.29741L12.5774 7.39069C12.5766 7.73587 12.8557 8.01635 13.2009 8.01717C13.5461 8.01801 13.8266 7.73877 13.8274 7.39365L13.8386 2.78632C13.8386 2.78606 13.8385 2.78579 13.8385 2.7855C13.8389 2.43966 13.5576 2.15949 13.2129 2.15987Z" fill="white" />
                                                            </g>
                                                        </svg>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className={`${display}`}>
                <div className="py-4 wow img-custom-anim-left overflow-hidden d-none d-lg-block border-bottom">
                    <div className="scroll-move-left">
                        <h1 className="fs-200 text-nowrap mb-0">Reducing major emissions</h1>
                    </div>
                </div>
            </div>
        </>
    );
}
