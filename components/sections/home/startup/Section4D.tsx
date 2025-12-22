import Link from "next/link";

export default function Section4D() {
    return (
        <>
            {/*startup home section 4D - Why Redesign Your Website*/}
            <section className="startup-home-section-4d position-relative py-60 bg-white">
                <div className="container position-relative z-1">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pe-lg-5 col-md-10">
                            <h2 className="text-dark my-3 text-anime-style-2 fw-bold">
                                Why Redesign Your Website?
                            </h2>
                            <p className="pb-4 wow img-custom-anim-top text-dark text-opacity-75">
                                Your website is often the first impression potential customers have of your business. A well-designed, fast, and user-friendly website not only improves your SEO rankings but also enhances user experience and builds trust in your brand.
                            </p>
                            <p className="pb-4 wow img-custom-anim-top text-dark text-opacity-75">
                                Our <span className="text-primary fw-semibold">website redesigning service</span> helps you transform your underperforming website into a powerful marketing tool. We focus on improving speed, user experience, and search engine visibility, ensuring your website stands out in today's competitive digital landscape. Our team in <span className="text-primary fw-semibold">India</span> delivers modern, conversion-focused designs that drive results.
                            </p>
                            <Link href="/contact" className="btn btn-primary mt-4 hover-up">
                                <span>Book a Call</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                    <g clipPath="url(#clip0_903_198)">
                                        <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                    </g>
                                </svg>
                            </Link>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-block">
                                <div className="position-relative d-inline-block mt-lg-0 mt-5">
                                    <img data-aos="zoom-in" data-aos-delay={600} className="rounded-3 shadow position-relative z-1 shadow-1" src="/assets/img/startup-img/pages/startup/page-home/home-section-4/img-1.png" alt="Website Redesign" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

