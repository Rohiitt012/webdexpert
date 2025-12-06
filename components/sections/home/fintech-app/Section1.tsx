import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*fintech-app home section 1*/}
            <section className="fintech-app-home-section-1 position-relative pt-250 pb-250 rounded-bottom-5 z-4" data-background="/assets/img/fintech-app-img/pages/fintech-app/page-home/home-section-1/img-bg.png">
                <div className="container position-relative pt-8 text-lg-start text-center overflow-hidden">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <span className="content-top btn-text text-white">MONITOR YOUR MONEY</span>
                            <h1 className="title-stroke my-3 text-primary" data-aos="fade-up" data-aos-delay={300}>
                                Astrax
                                <span className="text-white">
                                    is <br />
                                    shaping the
                                </span>
                                <span className="text-secondary"> future </span> <br />
                                <span className="text-white">of</span>
                                <span className="stroke-primary text-dark">business.</span>
                            </h1>
                            <div className="d-flex align-items-center justify-content-center justify-content-lg-start flex-wrap mt-8" data-aos="fade-up" data-aos-delay={800}>
                                <Link href="/contact" className="btn btn-dashed">
                                    <span> get started now </span>
                                    <i className="fa-solid fa-arrow-right-long text-primary" />
                                </Link>
                                <div className="d-flex align-items-center ps-md-6 pt-md-0 pt-5">
                                    <div className="d-flex align-items-center gap-1">
                                        <img className="icon-shape rounded-circle avatar-1" src="/assets/img/fintech-app-img/pages/fintech-app/page-home/home-section-1/avatar-1.png" alt="AstraX" />
                                        <img className="icon-shape rounded-circle avatar-2" src="/assets/img/fintech-app-img/pages/fintech-app/page-home/home-section-1/avatar-2.png" alt="AstraX" />
                                    </div>
                                    <div className="ms-3">
                                        <h6 className="mb-0 text-start">5k</h6>
                                        <p className="mb-0 text-primary">Happy C ustomers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner position-absolute bottom-0 start-40 z-1 ps-10 d-none d-lg-block">
                    <img data-aos="fade-up" data-aos-delay={500} src="/assets/img/fintech-app-img/pages/fintech-app/page-home/home-section-1/img-phone.png" alt="AstraX" />
                </div>
            </section>
        </>
    );
}
