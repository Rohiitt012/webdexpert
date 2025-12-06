export default function Section5() {
    return (
        <>
            {/*application home section 5*/}
            <section className="application-home-section-5 position-relative overflow-hidden">
                <div className="container wow img-custom-anim-top">
                    <div className="p-5 rounded-5 overflow-hidde position-relative">
                        <div className="position-absolute top-50 start-50 translate-middle w-100 z-0 h-100">
                            <img className="w-100 h-100" src="/assets/img/application-img/pages/application/page-home/home-section-5/bg-img.png" alt="AstraX" />
                        </div>
                        <div className="row g-5 position-relative z-1 align-items-center">
                            <div className="col-lg-4 rate-stars d-flex justify-content-center gap-5">
                                <div className="border-end pe-5 border-white border-opacity-25">
                                    <h1 className="mb-0 text-white">4.9</h1>
                                    <div className="stars mb-3">
                                        <i className="ri-star-fill text-yellow fs-10" />
                                        <i className="ri-star-fill text-yellow fs-10" />
                                        <i className="ri-star-fill text-yellow fs-10" />
                                        <i className="ri-star-fill text-yellow fs-10" />
                                        <i className="ri-star-fill text-yellow fs-10" />
                                    </div>
                                    <span className="fw-regular fs-7 text-white">2999 Ratings</span>
                                </div>
                                <div>
                                    <h1 className="mb-0 text-white">5k+</h1>
                                    <p className="fw-regular fs-7">
                                        Amazing team to care <br className="d-lg-block d-block d-md-none" />
                                        for projects
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-7 ps-lg-10 offset-lg-1 text-lg-end">
                                <div className="right d-flex flex-wrap flex-lg-nowrap gap-3 justify-content-center">
                                    <h5 className="text-white text-md-center text-lg-end">
                                        Trusted by <span className="text-white text-opacity-50">30,000+</span>
                                        happy users are crafting with our product.
                                    </h5>
                                    <div className="d-flex align-items-center ">
                                        <div className="avatar-1 icon-shape rounded-circle overflow-hidden">
                                            <img src="/assets/img/application-img/pages/application/page-about/author-1.png" alt="AstraX" />
                                        </div>
                                        <div className="avatar-2 icon-shape rounded-circle overflow-hidden">
                                            <img src="/assets/img/application-img/pages/application/page-about/author-2.png" alt="AstraX" />
                                        </div>
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
