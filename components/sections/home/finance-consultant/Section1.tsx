import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*finance-consultant home section 1*/}
            <section className="finance-consultant-home-section-1 position-relative">
                <div className="pt-300 bg-green-5">
                    <div className="container position-relative z-1">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-12">
                                <span className="fs-7 fw-medium bg-primary px-2 py-1 text-dark text-capitalize">Solid solution for your business</span>
                                <h1 className="text-white my-3 text-anime-style-2">
                                    Solution for your <span className="text-primary">business</span>
                                </h1>
                                <Link href="/about" className="btn btn-white mt-5" data-aos="fade-up" data-aos-delay={400}>
                                    <span className="text-dark">our expertise</span>
                                    <i className="bi bi-arrow-right text-dark" />
                                </Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="position-relative mb-8 pb-2 mt-10" data-aos="fade-up" data-aos-delay={200}>
                                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar rounded-pill wow img-custom-anim-left" style={{ width: "25%" }} />
                                    </div>
                                    <span className="text-primary fw-bold fs-7 pe-10 pb-2 position-absolute z-1 bottom-0 start-0">Since 2012</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-primary-2">
                    <div className="container pb-120 border-bottom position-relative">
                        <div className="row pt-5">
                            <div className="col-lg-5">
                                <div className="d-flex align-items-center gap-5">
                                    <div data-aos="fade-up" data-aos-delay={400}>
                                        <h5 className="fs-5">4.5 / 5</h5>
                                        <p className="fs-5">From over 1000 reviews</p>
                                    </div>
                                    <div data-aos="fade-up" data-aos-delay={600}>
                                        <h5 className="fs-5">1000+</h5>
                                        <p className="fs-5">Good star ratings</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 offset-lg-1 mt-lg-0 mt-8 d-none d-lg-block">
                                <div className="position-absolute bottom-50 text-end">
                                    <img className="img-fluid wow img-custom-anim-top" src="/assets/img/finance-consultant-img/pages/finance-consultant/page-home/home-section-1/img-1.png" alt="AstraX" />
                                    <div className="position-absolute bottom-0 start-100 translate-middle-x">
                                        <div className="rotateme">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={219} height={231} viewBox="0 0 219 231" fill="none">
                                                <path d="M90.3175 231L93.5146 142.771L19.1825 190.094L0 156.406L78.3285 115.5L0 74.5937L19.1825 40.9063L93.5146 88.2292L90.3175 0H128.682L125.485 88.2292L199.818 40.9063L219 74.5937L140.672 115.5L219 156.406L199.818 190.094L125.485 142.771L128.682 231H90.3175Z" fill="white" />
                                            </svg>
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
