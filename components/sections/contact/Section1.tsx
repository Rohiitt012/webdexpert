import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*ai-solutions-blog-details section 1*/}
            <section className="ai-solutions-blog-details-section-1 position-relative overflow-hidden py-120">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="card-contact card rounded-4 position-relative h-100" data-aos="fade-up" data-aos-delay={0}>
                                <Link href="#" className="card-contact-img position-relative d-block zoom-img rounded-3 rounded-bottom-0 overflow-hidden">
                                    <img className="w-100" src="/assets/img/ai-solutions-img/pages/ai-solutions/page-contact/img-1.png" alt="Xzect Labs" />
                                </Link>
                                <div className="card-contact-body p-4 d-flex flex-column">
                                    <div className="card-contact-info mt-2 mb-auto">
                                        <Link href="#">
                                            <h6>NEW DELHI</h6>
                                        </Link>
                                        <p className="mb-0">203, 2-A/3, Asaf Ali Rd, Delhi - 110002</p>
                                        <p className="mb-0"> Delhi - 110002</p>
                                        <p className="mb-0">INDIA</p>
                                    </div>
                                    <div className="d-flex flex-column mt-3 gap-2 mb-4">
                                        <Link href="#" className="fs-7">
                                            <i className="ri-mail-open-line text-primary" />
                                            <span className="@@color-text"> &nbsp; contact@xzect.com </span>
                                        </Link>
                                        <Link href="telto:(123) 456 789 00" className="fs-7">
                                            <i className="ri-phone-line text-primary" />
                                            <span className="@@color-text"> +91 98188 06393 </span>
                                        </Link>
                                    </div>
                                    <Link href="#" className="text-decoration-underline text-uppercase">
                                        View on Google Map
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid wow img-custom-anim-top pt-90">
                    <div className="contact-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5876794017618!2d77.23031607495713!3d28.642117283646346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd2389e98491%3A0x2a5c4c1ba14b5b0e!2s203%202%2C%20Jawahar%20Mal%20Mansion%2C%20A%203%2F15%2C%20Asaf%20Ali%20Rd%2C%20Turkman%20Gate%2C%20Chandni%20Chowk%2C%20New%20Delhi%2C%20Delhi%2C%20110002!5e0!3m2!1sen!2sin!4v1765529317127!5m2!1sen!2sin" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </div>
            </section>
        </>
    );
}
