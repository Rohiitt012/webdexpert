import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*application home section 1*/}
            <section className="application-home-section-1 position-relative pt-150 pb-120 overflow-hidden" data-background="/assets/img/application-img/pages/application/page-home/home-section-1/bg-img.png">
                <div className="position-absolute top-0 start-0 pt-8">
                    <h1 className="fs-200 opacity-10 text-nowrap scroll-move-left">Astrax mobile applications</h1>
                </div>
                <div className="position-absolute bottom-0 end-0">
                    <h1 className="fs-200 opacity-10 text-nowrap scroll-move-right">Astrax mobile applications</h1>
                </div>
                <div className="container position-relative z-1">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="top-content d-flex align-items-center gap-3">
                                <span className="line" />
                                <span className="btn-text text-primary fw-bold">financial/business app</span>
                            </div>
                            <h1 className="text-dark mt-3 ds-1 mb-7 text-anime-style-2">ROI grow check mobile application</h1>
                            <div className="d-flex gap-4">
                                <Link href="#" className="shadow rounded-4 overflow-hidden hover-up">
                                    <img src="/assets/img/application-img/pages/application/page-home/home-section-1/app-1.png" alt="AstraX" />
                                </Link>
                                <Link href="#" className="shadow rounded-4 overflow-hidden hover-up">
                                    <img src="/assets/img/application-img/pages/application/page-home/home-section-1/app-2.png" alt="AstraX" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1 text-center">
                            <div className="position-relative d-inline-block mt-lg-0 mt-5">
                                <div className="position-relative z-1 shake-2">
                                    <div className="parallax-item">
                                        <img className="wow img-custom-anim-top" src="/assets/img/application-img/pages/application/page-home/home-section-1/phone.png" alt="AstraX" />
                                    </div>
                                </div>
                                <div className="bg-circle position-absolute top-50 start-50 translate-middle z-0">
                                    <div className="bg-circle-inner" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
