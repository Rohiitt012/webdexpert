import Link from "next/link";

export default function Section3() {
    return (
        <>
            {/*digital-agency-home-section-3*/}
            <section className="digital-agency-home-section-3 position-relative overflow-hidden pt-120 pb-120" data-background="/assets/img/digital-agency-img/pages/digital-agency/page-home/home-section-3/img-bg.png">
                <div className="container position-relative z-1">
                    <div className="row g-4 pb-120">
                        <div className="col-lg-2 wow img-custom-anim-left">
                            <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={153} height={174} viewBox="0 0 153 174" fill="none">
                                <g clipPath="url(#clip0_550_1150)">
                                    <path d="M14.5722 138.785V51.9107L76.4934 16.7018L138.43 51.9107V122.083L76.4934 157.298L43.7143 138.656V68.7387L76.4934 50.0989L109.286 68.7387V105.253L76.4934 123.895L72.8586 121.828V85.571L91.1793 75.1484L76.4934 66.8008L58.2864 77.1603V130.239L76.4934 140.596L123.858 113.663V60.328L76.4934 33.4036L29.1443 60.328V147.067L76.4934 174L153 130.5V43.5L76.4934 0L0 43.5V130.5L14.5722 138.785Z" fill="#292929" />
                                </g>
                            </svg>
                        </div>
                        <div className="col-lg-5 offset-lg-1 pe-lg-10">
                            <h2 className="text-white text-anime-style-3">
                                Core features about our <strong className="text-primary">business</strong> &amp; digital agency/ <strong className="text-primary">company</strong>
                            </h2>
                        </div>
                        <div className="col-lg-4 mx-lg-auto">
                            <p className="fs-18 text-white text-opacity-75 text-anime-style-1">Our website maintenance services include regular updates & backups to keep your site running smoothly, security fixes & malware protection to safeguard your digital assets, and content & product updates to keep your website fresh and current. We provide comprehensive solutions that ensure your website remains secure, up-to-date, and performing optimally.</p>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-6 align-self-stretch">
                            <div className="bg-white p-5 rounded-3 h-100 wow" data-aos="fade-up" data-aos-delay={0}>
                                <p className="fs-18 mb-4">Mission &amp; vision</p>
                                <h5 className="fw-medium fs-30">We provide comprehensive website maintenance services including regular updates & backups, security fixes & malware protection, and content & product updates. Our mission is to ensure your website remains secure, up-to-date, and performing at its best, allowing you to focus on growing your business.</h5>
                                <Link href="/contact" className="btn btn-outline-dark mt-6">
                                    <span>get in touch</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                        <g clipPath="url(#clip0_1176_573)">
                                            <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="#24222C" />
                                        </g>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-stretch">
                            <div className="rounded-3 overflow-hidden h-100 wow" data-aos="fade-up" data-aos-delay={200}>
                                <div className="position-relative">
                                    <Link href="/about">
                                        <img className="w-100 h-100" src="/assets/img/digital-agency-img/pages/digital-agency/page-home/home-section-3/img-1.png" alt="Xzect Labs" />
                                    </Link>
                                    <div className="position-absolute top-100 end-0 me-8 translate-middle-y icon-shape icon-80 rounded-circle bg-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={34} height={34} viewBox="0 0 34 34" fill="none">
                                            <path d="M14.0117 17.9961H19.9883V19.9883H14.0117V17.9961Z" fill="#24222C" />
                                            <path d="M27.5838 19.9883H21.9805V20.9844C21.9805 21.5348 21.5348 21.9805 20.9844 21.9805H13.0156C12.4652 21.9805 12.0195 21.5348 12.0195 20.9844V19.9883H6.41624C5.12833 19.9883 3.9893 19.1673 3.58153 17.9455L0 7.1991V28.9531C0 30.6008 1.34058 31.9414 2.98828 31.9414H31.0117C32.6594 31.9414 34 30.6008 34 28.9531V7.19987L30.4182 17.9455C30.0107 19.1673 28.8717 19.9883 27.5838 19.9883Z" fill="#24222C" />
                                            <path d="M20.9854 2.05859H13.0166C11.3689 2.05859 10.0283 3.39917 10.0283 5.04688V6.04297H1.71484L5.47173 17.3152C5.60791 17.7227 5.98819 17.9961 6.41724 17.9961H12.0205V17C12.0205 16.4496 12.4662 16.0039 13.0166 16.0039H20.9854C21.5358 16.0039 21.9815 16.4496 21.9815 17V17.9961H27.5847C28.0138 17.9961 28.3941 17.7227 28.5303 17.3152L32.2874 6.04297H23.9736V5.04688C23.9736 3.39917 22.6331 2.05859 20.9854 2.05859ZM12.0205 6.04297V5.04688C12.0205 4.49721 12.4669 4.05078 13.0166 4.05078H20.9854C21.535 4.05078 21.9815 4.49721 21.9815 5.04688V6.04297H12.0205Z" fill="#24222C" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="bg-primary p-4">
                                        <p className="fs-18 text-dark">Mission &amp; vision</p>
                                        <Link href="/about">
                                            <h5 className="fw-medium fs-30">Trusted website maintenance partner ensuring your site stays secure, updated, and optimized with regular backups, security protection, and content management.</h5>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
