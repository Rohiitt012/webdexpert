export default function Section8() {
    return (
        <>
            {/*finance-consultant home section 8*/}
            <section className="finance-consultant-home-section-8 position-relative overflow-hidden pt-120 pb-lg-250 pb-120">
                <div className="container position-relative z-1">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="position-relative d-inline-block mt-lg-0 mt-5">
                                <img className="position-relative z-0 wow img-custom-anim-left" src="/assets/img/finance-consultant-img/pages/finance-consultant/page-home/home-section-8/img-1.png" alt="AstraX" />
                                <div className="d-none d-lg-block" data-aos="fade-up" data-aos-delay={600}>
                                    <img className="position-absolute top-100 start-100 translate-middle z-1 border border-4 border-white shadow" src="/assets/img/finance-consultant-img/pages/finance-consultant/page-home/home-section-8/img-2.png" alt="AstraX" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <form action="#" className="input-group mb-3 position-relative wow img-custom-anim-top">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label htmlFor="username" className="text-sm-medium">
                                            Full name
                                        </label>
                                        <input type="text" className="py-3 form-control username border-0" name="name" placeholder="Enter here" id="username" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="email" className="text-sm-medium">
                                            Email address
                                        </label>
                                        <input type="text" className="py-3 form-control email border-0" name="name" placeholder="Enter here" id="email" />
                                    </div>
                                    <div className="col-12 mt-5">
                                        <label htmlFor="message" className="text-sm-medium">
                                            Message
                                        </label>
                                        <textarea name="message" id="message" cols={30} rows={8} className="py-3 form-control website border-0" placeholder="Enter here" defaultValue={""} />
                                    </div>
                                    <div className="col-12 mt-5">
                                        <button className="btn btn-green-5" type="submit" aria-label="Get A Quote">
                                            <span>Get A Quote</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                <g clipPath="url(#clip0_886_362)">
                                                    <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                                </g>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
