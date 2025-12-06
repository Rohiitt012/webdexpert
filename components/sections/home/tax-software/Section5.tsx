import Link from "next/link";

export default function Section5() {
    return (
        <>
            {/*tax-software section 5*/}
            <section className="tax-software-section-5 position-relative overflow-hidden bg-light-2 py-120">
                <div className="container position-relative z-1">
                    <div className="row align-items-center">
                        <div className="col-lg-6 d-none d-lg-block">
                            <div className="position-relative d-inline-block mt-lg-0 mt-5">
                                <img data-aos="fade-up" className="rounded-3 position-relative z-1" src="/assets/img/tax-software-img/pages/tax-software/page-home/home-section-5/portrait-1.png" alt="AstraX" />
                                <img className="rounded-3 position-absolute bottom-0 start-50 translate-middle-x z-0 wow img-custom-anim-left" src="/assets/img/tax-software-img/pages/tax-software/page-home/home-section-5/bg.png" alt="AstraX" />
                            </div>
                        </div>
                        <div className="col-lg-6 mt-lg-0 mt-5">
                            <span className="text-primary btn-text">faq</span>
                            <h2 className="text-dark mt-3 mb-7 wow img-custom-anim-left">
                                Get every a.
                                <span className="text-primary text-decoration-underline">&amp; question</span>
                            </h2>
                            <div className="accordion">
                                <div className="px-0 card border-0 mb-3 collapse-custom" data-aos="fade-up" data-aos-delay={200}>
                                    <div className="p-0 card-header border-0 rounded-3">
                                        <a className="p-5 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse-1">
                                            <h6 className="text-dark fs-20 mb-0">How to develop a wesbite?</h6>
                                            <span className="ms-auto arrow" />
                                        </a>
                                    </div>
                                    <div id="collapse-1" className="collapse show" data-bs-parent=".accordion">
                                        <p className="px-5 fs-6 fw-regular">Business is what you're offered four times a year by designers and style is what you choose. The key to style is learning who you are which takes years.</p>
                                    </div>
                                </div>
                                <div className="px-0 card border-0 mb-3 collapse-custom" data-aos="fade-up" data-aos-delay={400}>
                                    <div className="p-0 card-header border-0 rounded-3">
                                        <a className="collapsed p-5 pb-3 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse-2">
                                            <h6 className="text-dark fs-20 mb-0">How can I got componants?</h6>
                                            <span className="ms-auto arrow" />
                                        </a>
                                    </div>
                                    <div id="collapse-2" className="collapse" data-bs-parent=".accordion">
                                        <p className="px-5 fs-6 fw-regular">Business is what you're offered four times a year by designers and style is what you choose. The key to style is learning who you are which takes years.</p>
                                    </div>
                                </div>
                                <div className="px-0 card border-0 mb-3 collapse-custom" data-aos="fade-up" data-aos-delay={600}>
                                    <div className="p-0 card-header border-0 rounded-3">
                                        <a className="collapsed p-5 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse-3">
                                            <h6 className="text-dark fs-20 mb-0">Where I can get free videos?</h6>
                                            <span className="ms-auto arrow" />
                                        </a>
                                    </div>
                                    <div id="collapse-3" className="collapse" data-bs-parent=".accordion">
                                        <p className="px-5 fs-6 fw-regular">Business is what you're offered four times a year by designers and style is what you choose. The key to style is learning who you are which takes years.</p>
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
