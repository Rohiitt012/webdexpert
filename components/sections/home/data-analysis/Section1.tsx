import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*data-analysis home section 1*/}
            <section className="data-analysis-home-section-1 position-relative overflow-hidden pt-250">
                <div className="position-absolute top-50 start-50 translate-middle w-100 z-0">
                    <img src="/assets/img/data-analysis-img/pages/data-analysis/page-home/home-section-1/img-bg.png" alt="AstraX" />
                </div>
                <div className="container position-relative z-1">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <span className="btn-text text-primary">AI Solutions</span>
                            <h1 className="text-dark my-3 text-anime-style-3 ">Advanced AI Technologies Designed for Business Growth.</h1>
                            <p>We deliver smart AI solutions that automate processes, enhance customer engagement, generate content, optimize lead follow-ups, and drive data-powered decisions to help businesses scale faster and smarter.</p>
                            <form className="input-group mb-3 mt-4 position-relative">
                                <input type="text" className="py-3 form-control email rounded-start-4 border-end-0 border-primary" name="name" placeholder="Business email" />
                                <div className="border border-start-0 border-primary rounded-end-4 bg-white">
                                    <button className="btn btn-dark m-2 fs-7 fw-bold" type="button" aria-label="request a demo">
                                        request a demo
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-5 offset-lg-1 mt-lg-0 mt-8">
                            <div className="parallax-item">
                                <img className="img-fluid w-100" src="/assets/img/data-analysis-img/pages/data-analysis/page-home/home-section-1/img-1.png" alt="AI Solutions Illustration" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
