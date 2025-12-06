import Link from "next/link";

export default function Section8({ background }: any) {
    return (
        <>
            {/*creative-studio section 8*/}
            <section className={`creative-studio-section-8 position-relative overflow-hidden ${background} py-120`}>
                <div className="container">
                    <div className="text-center mb-80 wow img-custom-anim-left">
                        <h2>Company news &amp; updates</h2>
                        <p>
                            You’re in the middle of the design process, and stakeholders expect you to deliver faster. How do <br />
                            you best manage a situation like this think the design is taking too long.
                        </p>
                    </div>
                    <div className="row">
                        <div className="d-flex flex-wrap flex-lg-nowrap align-items-center gap-5">
                            <div className="card-news position-relative" data-aos="fade-up" data-aos-delay={400}>
                                <Link href="#" className="card-news-img position-relative d-block zoom-img overflow-hidden rounded-4">
                                    <img className="w-100" src="/assets/img/creative-studio-img/pages/creative-studio/page-home/home-section-7/img-1.png" alt="AstraX" />
                                </Link>
                                <div className="card-news-body">
                                    <div className="d-flex card-news-information mt-5 gap-4">
                                        <div className="d-flex align-items-center gap-1">
                                            <img src="/assets/img/creative-studio-img/template/icons/icon-1.svg" alt="AstraX" />
                                            <p className="mb-0">December 21, 2025</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-1">
                                            <img src="/assets/img/creative-studio-img/template/icons/icon-2.svg" alt="AstraX" />
                                            <span className="opacity-50">By</span>
                                            <Link href="#" className="mb-0">
                                                Admin
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-news-title mt-2">
                                        <Link href="#">
                                            <h6 className="fs-20 text-anime-style-1">#01 Brace for the 'big one' cyber attack as always.</h6>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card-news position-relative" data-aos="fade-up" data-aos-delay={200}>
                                <Link href="#" className="card-news-img position-relative d-block zoom-img overflow-hidden rounded-4">
                                    <img className="w-100" src="/assets/img/creative-studio-img/pages/creative-studio/page-home/home-section-7/img-2.png" alt="AstraX" />
                                </Link>
                                <div className="card-news-body">
                                    <div className="d-flex card-news-information mt-5 gap-4">
                                        <div className="d-flex align-items-center gap-1">
                                            <img src="/assets/img/creative-studio-img/template/icons/icon-1.svg" alt="AstraX" />
                                            <p className="mb-0">December 21, 2025</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-1">
                                            <img src="/assets/img/creative-studio-img/template/icons/icon-2.svg" alt="AstraX" />
                                            <span className="opacity-50">By</span>
                                            <Link href="#" className="mb-0">
                                                Admin
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-news-title mt-2">
                                        <Link href="#">
                                            <h6 className="fs-20 text-anime-style-1">Company updated with the latest trends &amp; business news.</h6>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card-news position-relative mb-lg-0 mb-8 align-self-start" data-aos="fade-up" data-aos-delay={0}>
                                <Link href="#" className="card-news-img position-relative d-block zoom-img overflow-hidden rounded-4">
                                    <img className="w-100" src="/assets/img/creative-studio-img/pages/creative-studio/page-home/home-section-7/img-3.png" alt="AstraX" />
                                </Link>
                                <div className="card-news-body">
                                    <div className="d-flex card-news-information mt-5 gap-4">
                                        <div className="d-flex align-items-center gap-1">
                                            <img src="/assets/img/creative-studio-img/template/icons/icon-1.svg" alt="AstraX" />
                                            <p className="mb-0">December 21, 2025</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-1">
                                            <img src="/assets/img/creative-studio-img/template/icons/icon-2.svg" alt="AstraX" />
                                            <span className="opacity-50">By</span>
                                            <Link href="#" className="mb-0">
                                                Admin
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-news-title mt-2">
                                        <Link href="#">
                                            <h6 className="fs-20 text-anime-style-1">We make the creative solutions for&nbsp;problems!</h6>
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
