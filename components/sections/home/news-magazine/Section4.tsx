import Link from "next/link";

export default function Section4() {
    return (
        <>
            {/*news-magazine-home-section-4*/}
            <section className="news-magazine-home-section-4 position-relative overflow-hidden">
                <div className="container mt-80">
                    <div className="subscribe-card p-lg-9 p-md-5 p-4" data-background="/assets/img/news-magazine-img/pages/news-magazine/page-home/home-section-3/img-bg.png">
                        <div className="position-relative z-1 row g-4 align-items-start">
                            <Link href="/" className="col-lg-2 col-md-6 d-flex gap-3" data-aos="fade-up" data-aos-delay={0}>
                                <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none">
                                    <path d="M24.5014 9.79627L22.7053 18.3971L35.29 17.1938L37.1088 7.00508L24.5014 9.79627Z" fill="#F7775E" />
                                    <path d="M31.9141 17.6827L23.2668 20.618L30.6304 30.3856L40.7201 26.6535L31.9141 17.6827Z" fill="#F7775E" />
                                    <path d="M28.4175 27.859L21.4576 22.2303L16.329 33.3239L24.7267 39.7337L28.4175 27.859Z" fill="#F7775E" />
                                    <path d="M17.5883 29.997L19.1883 21.3623L6.63172 22.8278L5.04519 33.0501L17.5883 29.997Z" fill="#F7775E" />
                                    <path d="M10.2888 22.1767L18.8688 19.0623L11.2829 9.45248L1.27884 13.3935L10.2888 22.1767Z" fill="#F7775E" />
                                    <path d="M13.7213 12.2233L20.8091 17.7044L25.6846 6.50841L17.1413 0.276579L13.7213 12.2233Z" fill="#F7775E" />
                                </svg>
                                <h5 className="mb-0 text-white">Astrax</h5>
                            </Link>
                            <div className="col-lg-4 col-md-6 ps-lg-8" data-aos="fade-up" data-aos-delay={400}>
                                <h6 className="mb-0 text-white">Keep up to date with the most important news</h6>
                            </div>
                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={800}>
                                <form action="#">
                                    <div className="input-group">
                                        <input type="text" className="form-control email rounded-0" aria-label="Text input with segmented dropdown button" placeholder="Business email" />
                                        <button aria-label="subscribe" type="submit" className="btn btn-primary rounded-0">
                                            subscribe
                                        </button>
                                    </div>
                                </form>
                                <p className="mt-4 text-white text-opacity-50 fs-8">
                                    By pressing the Subscribe button, you confirm that you have read and are agreeing to <br />
                                    our
                                    <Link href="#" className="text-white text-decoration-underline text-opacity-50">
                                        Privacy Policy
                                    </Link>
                                    and
                                    <Link href="#" className="text-white text-decoration-underline text-opacity-50">
                                        Terms of Use
                                    </Link>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
