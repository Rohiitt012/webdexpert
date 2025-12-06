import Link from "next/link";

export default function Section6({ background }: any) {
    return (
        <>
            {/*creative-studio section 6*/}
            <section className={`creative-studio-section-6 position-relative overflow-hidden pt-120 ${background}`}>
                <div className="container pb-120">
                    <div className="row g-5">
                        <div className="col-lg-5">
                            <h2 className="wow img-custom-anim-left">Question about us</h2>
                            <p className="mb-80 wow img-custom-anim-left">Exclusive collaboration feature designed to make workflows smoother for your entire team is ready anytime.</p>
                            <img className="rounded-4 wow img-custom-anim-left" src="/assets/img/creative-studio-img/pages/creative-studio/page-home/home-section-6/img-1.png" alt="AstraX" />
                        </div>
                        <div className="col-lg-5 ms-lg-auto">
                            <img className="rounded-4 wow img-custom-anim-top" src="/assets/img/creative-studio-img/pages/creative-studio/page-home/home-section-6/img-2.png" alt="AstraX" />
                            <div className="accordion pt-120">
                                <div className="px-0 card collapse-custom border-0" data-aos="fade-up" data-aos-delay={200}>
                                    <div className="p-0 card-header border-0">
                                        <Link className="collapsed py-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse1">
                                            <span className="me-3 arrow" />
                                            <h6 className="mb-0 fs-20">
                                                <span>How valuable is studying abroad?</span>
                                            </h6>
                                        </Link>
                                    </div>
                                    <div id="collapse1" className="collapse" data-bs-parent=".accordion">
                                        <p className="px-3 fs-6 fw-regular  opacity-50 ps-5">In today’s fast-paced digital era, startups have become synonymous with innovation and disruption. These entrepreneurial ventures are transforming industries and driving technological advancements across various sectors.</p>
                                    </div>
                                </div>
                                <div className="px-0 card collapse-custom border-0" data-aos="fade-up" data-aos-delay={400}>
                                    <div className="p-0 card-header border-0">
                                        <Link className="py-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse2">
                                            <span className="me-3 arrow" />
                                            <h6 className="mb-0 fs-20">
                                                <span>How can company support well-being?</span>
                                            </h6>
                                        </Link>
                                    </div>
                                    <div id="collapse2" className="collapse show" data-bs-parent=".accordion">
                                        <p className="px-3 fs-6 fw-regular  opacity-50 ps-5">In today’s fast-paced digital era, startups have become synonymous with innovation and disruption. These entrepreneurial ventures are transforming industries and driving technological advancements across various sectors.</p>
                                    </div>
                                </div>
                                <div className="px-0 card collapse-custom border-0" data-aos="fade-up" data-aos-delay={600}>
                                    <div className="p-0 card-header border-0">
                                        <Link className="collapsed py-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse3">
                                            <span className="me-3 arrow" />
                                            <h6 className="mb-0 fs-20">
                                                <span>Are university degrees worth it?</span>
                                            </h6>
                                        </Link>
                                    </div>
                                    <div id="collapse3" className="collapse" data-bs-parent=".accordion">
                                        <p className="px-3 fs-6 fw-regular opacity-50 ps-5">In today’s fast-paced digital era, startups have become synonymous with innovation and disruption. These entrepreneurial ventures are transforming industries and driving technological advancements across various sectors.</p>
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
