import Link from "next/link";

export default function Section5() {
    return (
        <>
            {/*crypto-agency home section 5*/}
            <section className="crypto-agency-home-section-5 position-relative pt-120 pb-120 rounded-bottom-5 overflow-hidden">
                <div className="container">
                    <div className="text-center">
                        <span className="border-linear btn-text text-white px-3 py-2 rounded-4">Partners</span>
                        <h2 className="mt-3 mb-3 text-anime-style-3">
                            Supported by global <br />
                            partners
                        </h2>
                    </div>
                    <div className="d-flex flex-wrap mt-80">
                        <div data-aos="fade-up" data-aos-delay={0} className="logo-event w-lg-25 w-md-25 w-50 d-flex align-items-center justify-content-center border-end-lg border-bottom">
                            <Link href="#">
                                <img src="/assets/img/crypto-agency-img/pages/crypto-agency/page-home/home-section-5/logo-3.png" alt="AstraX" />
                            </Link>
                        </div>
                        <div data-aos="fade-up" data-aos-delay={200} className="logo-event w-lg-25 w-md-25 w-50 d-flex align-items-center justify-content-center border-end-lg border-bottom">
                            <Link href="#">
                                <img src="/assets/img/crypto-agency-img/pages/crypto-agency/page-home/home-section-5/logo-4.png" alt="AstraX" />
                            </Link>
                        </div>
                        <div data-aos="fade-up" data-aos-delay={400} className="logo-event w-lg-25 w-md-25 w-50 d-flex align-items-center justify-content-center border-end-lg border-bottom">
                            <Link href="#">
                                <img src="/assets/img/crypto-agency-img/pages/crypto-agency/page-home/home-section-5/logo-5.png" alt="AstraX" />
                            </Link>
                        </div>
                        <div data-aos="fade-up" data-aos-delay={600} className="logo-event w-lg-25 w-md-25 w-50 d-flex align-items-center justify-content-center border-bottom">
                            <Link href="#">
                                <img src="/assets/img/crypto-agency-img/pages/crypto-agency/page-home/home-section-5/logo-6.png" alt="AstraX" />
                            </Link>
                        </div>
                        <div data-aos="fade-up" data-aos-delay={0} className="logo-event w-lg-25 w-md-25 w-50 d-flex align-items-center justify-content-center border-end-lg border-bottom border-bottom-lg-0">
                            <Link href="#">
                                <img src="/assets/img/crypto-agency-img/pages/crypto-agency/page-home/home-section-5/logo-7.png" alt="AstraX" />
                            </Link>
                        </div>
                        <div data-aos="fade-up" data-aos-delay={200} className="logo-event w-lg-25 w-md-25 w-50 d-flex align-items-center justify-content-center border-end-lg border-bottom border-bottom-lg-0">
                            <Link href="#">
                                <img src="/assets/img/crypto-agency-img/pages/crypto-agency/page-home/home-section-5/logo-8.png" alt="AstraX" />
                            </Link>
                        </div>
                        <div data-aos="fade-up" data-aos-delay={400} className="logo-event w-lg-25 w-md-25 w-50 d-flex align-items-center justify-content-center border-end-lg border-bottom border-bottom-lg-0">
                            <Link href="#">
                                <img src="/assets/img/crypto-agency-img/pages/crypto-agency/page-home/home-section-5/logo-9.png" alt="AstraX" />
                            </Link>
                        </div>
                        <div data-aos="fade-up" data-aos-delay={600} className="logo-event w-lg-25 w-md-25 w-50 d-flex align-items-center justify-content-center border-bottom border-bottom-lg-0">
                            <Link href="#">
                                <img src="/assets/img/crypto-agency-img/pages/crypto-agency/page-home/home-section-5/logo-10.png" alt="AstraX" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
