import Link from "next/link";

export default function Section9() {
    return (
        <>
            {/*marketing-agency-home home section 8*/}
            <section className="marketing-agency-home-section-9 position-relative overflow-hidden">
                <div className="cta" data-background="/assets/img/marketing-agency-img/pages/marketing-agency/page-home/home-section-9/bg.png">
                    <div className="bg-overlay" />
                    <div className="container position-relative z-1">
                        <div className="d-flex flex-wrap justify-content-center justify-content-lg-between align-items-center gap-5">
                            <h2 className="text-white mb-0 text-center text-anime-style-2">Let's talk if you have something for us.</h2>
                            <Link href="#" className="btn btn-white" data-aos="zoom-in" data-aos-delay={200}>
                                <span className="text-dark">contact us</span>
                                <i className="bi bi-arrow-right text-primary" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

