import Link from "next/link";

export default function Section7() {
    return (
        <>
            {/*crypto-agency home section 7*/}
            <section className="crypto-agency-home-section-7 position-relative bg-dark-2 overflow-hidden">
                <div className="container">
                    <div className="download-app position-relative z-1 text-center rounded-3 py-120 px-4" data-background="/assets/img/crypto-agency-img/pages/crypto-agency/page-home/home-section-7/img-bg.png">
                        <div className="position-relative z-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="53" height="60" viewBox="0 0 53 60" fill="none">
                                <path d="M30.5014 19.7972L28.7053 28.3981L41.29 27.1948L43.1088 17.0061L30.5014 19.7972Z" fill="#50EEFA" />
                                <path d="M37.9141 27.6837L29.2668 30.6189L36.6304 40.3865L46.7201 36.6545L37.9141 27.6837Z" fill="#50EEFA" />
                                <path d="M34.4175 37.86L27.4576 32.2312L22.329 43.3249L30.7267 49.7347L34.4175 37.86Z" fill="#50EEFA" />
                                <path d="M23.5883 39.998L25.1883 31.3633L12.6317 32.8288L11.0452 43.0511L23.5883 39.998Z" fill="#50EEFA" />
                                <path d="M16.2888 32.1777L24.8688 29.0632L17.2829 19.4535L7.27884 23.3945L16.2888 32.1777Z" fill="#50EEFA" />
                                <path d="M19.7213 22.2243L26.8091 27.7054L31.6846 16.5094L23.1413 10.2776L19.7213 22.2243Z" fill="#50EEFA" />
                            </svg>
                            <h2 className="pt-4 text-anime-style-3">
                                Astrax on a journey of <br />
                                learning and skill-building today
                            </h2>
                            <p className="text-white py-3 text-uppercase">Download our app from here:</p>
                            <div className="d-flex align-items-center justify-content-center gap-4">
                                <Link href="#" className="shadow rounded-4 overflow-hidden hover-up">
                                    <img data-aos="fade-up" data-aos-delay={200} src="/assets/img/crypto-agency-img/template/icons/app-1.png" alt="AstraX" />
                                </Link>
                                <Link href="#" className="shadow rounded-4 overflow-hidden hover-up">
                                    <img data-aos="fade-up" data-aos-delay={400} src="/assets/img/crypto-agency-img/template/icons/app-2.png" alt="AstraX" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
