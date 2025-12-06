import Link from "next/link";

export default function Section6() {
    return (
        <>
            {/*application section 6*/}
            <section className="application-home-section-6 position-relative overflow-hidden">
                <div className="container position-relative z-1">
                    <div className="row py-120 align-items-center">
                        <div className="col-lg-5">
                            <img className="mt-lg-0 mb-5 wow img-custom-anim-left" src="/assets/img/application-img/pages/application/page-home/home-section-6/img-1.png" alt="AstraX" />
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <h2 className="my-3 text-anime-style-2">User authentication</h2>
                            <p className="pb-4 text-anime-style-1">We offer a wide range of digital marketing services that cater to business of all sizes. A forward-thinking and clever approach.</p>
                            <ul className="list-unstyled">
                                <li className="d-flex align-items-center mb-3 gap-3" data-aos="fade-up" data-aos-delay={200}>
                                    <div className="position-relative">
                                        <svg className="fill-primary position-absolute top-50 start-50 translate-middle" xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
                                            <path opacity="0.2" d="M17.0711 3.79231C15.1823 1.9036 12.6711 0.863403 10 0.863403C7.32887 0.863403 4.81762 1.9036 2.92891 3.79231C1.04016 5.68106 0 8.19231 0 10.8634C0 13.5345 1.04016 16.0457 2.92891 17.9345C4.81766 19.8232 7.32887 20.8634 10 20.8634C12.6711 20.8634 15.1823 19.8232 17.0711 17.9345C18.9598 16.0457 20 13.5345 20 10.8634C20 8.19231 18.9598 5.6811 17.0711 3.79231ZM10 19.6915C5.13215 19.6915 1.17188 15.7313 1.17188 10.8634C1.17188 5.99555 5.13215 2.03528 10 2.03528C14.8679 2.03528 18.8281 5.99555 18.8281 10.8634C18.8281 15.7313 14.8679 19.6915 10 19.6915Z" fill="#794AFF" />
                                        </svg>
                                        <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={10} height={8} viewBox="0 0 10 8" fill="none">
                                            <path d="M9.77752 0.654773C9.54873 0.426023 9.17771 0.426023 8.94893 0.654812L3.77475 5.82899L1.05104 3.10528C0.822246 2.87649 0.45123 2.87649 0.222402 3.10528C-0.00642578 3.33407 -0.00642578 3.70509 0.222402 3.93391L3.36041 7.07192C3.47482 7.18634 3.62478 7.24352 3.77471 7.24352C3.92463 7.24352 4.07463 7.1863 4.189 7.07192L9.77752 1.48341C10.0063 1.25462 10.0063 0.883601 9.77752 0.654773Z" fill="#794AFF" />
                                        </svg>
                                    </div>
                                    <p className="mb-0 text-dark">Run loyalty program to reward customers</p>
                                </li>
                                <li className="d-flex align-items-center mb-3 gap-3" data-aos="fade-up" data-aos-delay={400}>
                                    <div className="position-relative">
                                        <svg className="fill-primary position-absolute top-50 start-50 translate-middle" xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
                                            <path opacity="0.2" d="M17.0711 3.79231C15.1823 1.9036 12.6711 0.863403 10 0.863403C7.32887 0.863403 4.81762 1.9036 2.92891 3.79231C1.04016 5.68106 0 8.19231 0 10.8634C0 13.5345 1.04016 16.0457 2.92891 17.9345C4.81766 19.8232 7.32887 20.8634 10 20.8634C12.6711 20.8634 15.1823 19.8232 17.0711 17.9345C18.9598 16.0457 20 13.5345 20 10.8634C20 8.19231 18.9598 5.6811 17.0711 3.79231ZM10 19.6915C5.13215 19.6915 1.17188 15.7313 1.17188 10.8634C1.17188 5.99555 5.13215 2.03528 10 2.03528C14.8679 2.03528 18.8281 5.99555 18.8281 10.8634C18.8281 15.7313 14.8679 19.6915 10 19.6915Z" fill="#794AFF" />
                                        </svg>
                                        <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={10} height={8} viewBox="0 0 10 8" fill="none">
                                            <path d="M9.77752 0.654773C9.54873 0.426023 9.17771 0.426023 8.94893 0.654812L3.77475 5.82899L1.05104 3.10528C0.822246 2.87649 0.45123 2.87649 0.222402 3.10528C-0.00642578 3.33407 -0.00642578 3.70509 0.222402 3.93391L3.36041 7.07192C3.47482 7.18634 3.62478 7.24352 3.77471 7.24352C3.92463 7.24352 4.07463 7.1863 4.189 7.07192L9.77752 1.48341C10.0063 1.25462 10.0063 0.883601 9.77752 0.654773Z" fill="#794AFF" />
                                        </svg>
                                    </div>
                                    <p className="mb-0 text-dark">Keep notes on valuable customer preferences</p>
                                </li>
                            </ul>
                            <Link href="/about" className="btn btn-outline-dark mt-4 hover-up">
                                <span>read more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                    <g clipPath="url(#clip0_903_198)">
                                        <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="#292929" />
                                    </g>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="bg-secondary-2">
                    <div className="container">
                        <div className="row py-120 align-items-center">
                            <div className="col-lg-5 order-lg-2 offset-lg-1">
                                <img className="mt-lg-0 mb-5 wow img-custom-anim-right" src="/assets/img/application-img/pages/application/page-home/home-section-6/img-2.png" alt="AstraX" />
                            </div>
                            <div className="col-lg-5 order-lg-1">
                                <h2 className="my-3 text-anime-style-2">Tax form integration</h2>
                                <p className="pb-4 text-anime-style-1">We offer a wide range of digital marketing services that cater to business of all sizes. A forward-thinking and clever approach.</p>
                                <ul className="list-unstyled">
                                    <li className="d-flex align-items-center mb-3 gap-3" data-aos="fade-up" data-aos-delay={200}>
                                        <div className="position-relative">
                                            <svg className="fill-primary position-absolute top-50 start-50 translate-middle" xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
                                                <path opacity="0.2" d="M17.0711 3.79231C15.1823 1.9036 12.6711 0.863403 10 0.863403C7.32887 0.863403 4.81762 1.9036 2.92891 3.79231C1.04016 5.68106 0 8.19231 0 10.8634C0 13.5345 1.04016 16.0457 2.92891 17.9345C4.81766 19.8232 7.32887 20.8634 10 20.8634C12.6711 20.8634 15.1823 19.8232 17.0711 17.9345C18.9598 16.0457 20 13.5345 20 10.8634C20 8.19231 18.9598 5.6811 17.0711 3.79231ZM10 19.6915C5.13215 19.6915 1.17188 15.7313 1.17188 10.8634C1.17188 5.99555 5.13215 2.03528 10 2.03528C14.8679 2.03528 18.8281 5.99555 18.8281 10.8634C18.8281 15.7313 14.8679 19.6915 10 19.6915Z" fill="#794AFF" />
                                            </svg>
                                            <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={10} height={8} viewBox="0 0 10 8" fill="none">
                                                <path d="M9.77752 0.654773C9.54873 0.426023 9.17771 0.426023 8.94893 0.654812L3.77475 5.82899L1.05104 3.10528C0.822246 2.87649 0.45123 2.87649 0.222402 3.10528C-0.00642578 3.33407 -0.00642578 3.70509 0.222402 3.93391L3.36041 7.07192C3.47482 7.18634 3.62478 7.24352 3.77471 7.24352C3.92463 7.24352 4.07463 7.1863 4.189 7.07192L9.77752 1.48341C10.0063 1.25462 10.0063 0.883601 9.77752 0.654773Z" fill="#794AFF" />
                                            </svg>
                                        </div>
                                        <p className="mb-0 text-dark">Run loyalty program to reward customers</p>
                                    </li>
                                    <li className="d-flex align-items-center mb-3 gap-3" data-aos="fade-up" data-aos-delay={400}>
                                        <div className="position-relative">
                                            <svg className="fill-primary position-absolute top-50 start-50 translate-middle" xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
                                                <path opacity="0.2" d="M17.0711 3.79231C15.1823 1.9036 12.6711 0.863403 10 0.863403C7.32887 0.863403 4.81762 1.9036 2.92891 3.79231C1.04016 5.68106 0 8.19231 0 10.8634C0 13.5345 1.04016 16.0457 2.92891 17.9345C4.81766 19.8232 7.32887 20.8634 10 20.8634C12.6711 20.8634 15.1823 19.8232 17.0711 17.9345C18.9598 16.0457 20 13.5345 20 10.8634C20 8.19231 18.9598 5.6811 17.0711 3.79231ZM10 19.6915C5.13215 19.6915 1.17188 15.7313 1.17188 10.8634C1.17188 5.99555 5.13215 2.03528 10 2.03528C14.8679 2.03528 18.8281 5.99555 18.8281 10.8634C18.8281 15.7313 14.8679 19.6915 10 19.6915Z" fill="#794AFF" />
                                            </svg>
                                            <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={10} height={8} viewBox="0 0 10 8" fill="none">
                                                <path d="M9.77752 0.654773C9.54873 0.426023 9.17771 0.426023 8.94893 0.654812L3.77475 5.82899L1.05104 3.10528C0.822246 2.87649 0.45123 2.87649 0.222402 3.10528C-0.00642578 3.33407 -0.00642578 3.70509 0.222402 3.93391L3.36041 7.07192C3.47482 7.18634 3.62478 7.24352 3.77471 7.24352C3.92463 7.24352 4.07463 7.1863 4.189 7.07192L9.77752 1.48341C10.0063 1.25462 10.0063 0.883601 9.77752 0.654773Z" fill="#794AFF" />
                                            </svg>
                                        </div>
                                        <p className="mb-0 text-dark">Keep notes on valuable customer preferences</p>
                                    </li>
                                </ul>
                                <Link href="/about" className="btn btn-outline-dark mt-4 hover-up">
                                    <span>read more</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                        <g clipPath="url(#clip0_903_198)">
                                            <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="#292929" />
                                        </g>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-dark-2">
                    <div className="container">
                        <div className="row py-120 align-items-center">
                            <div className="col-lg-5">
                                <img className="mt-lg-0 mb-5 wow img-custom-anim-left" src="/assets/img/application-img/pages/application/page-home/home-section-6/img-3.png" alt="AstraX" />
                            </div>
                            <div className="col-lg-6 offset-lg-1">
                                <h2 className="my-3 text-white">Income &amp; expense track</h2>
                                <p className="pb-4 text-white text-opacity-75">
                                    We offer a wide range of digital marketing services that cater to business <br />
                                    of all sizes. A forward-thinking and clever approach.
                                </p>
                                <ul className="list-unstyled">
                                    <li className="d-flex align-items-center mb-3 gap-3" data-aos="fade-up" data-aos-delay={200}>
                                        <div className="position-relative">
                                            <svg className="position-absolute top-50 start-50 translate-middle" xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
                                                <path opacity="0.2" d="M17.0711 3.79231C15.1823 1.9036 12.6711 0.863403 10 0.863403C7.32887 0.863403 4.81762 1.9036 2.92891 3.79231C1.04016 5.68106 0 8.19231 0 10.8634C0 13.5345 1.04016 16.0457 2.92891 17.9345C4.81766 19.8232 7.32887 20.8634 10 20.8634C12.6711 20.8634 15.1823 19.8232 17.0711 17.9345C18.9598 16.0457 20 13.5345 20 10.8634C20 8.19231 18.9598 5.6811 17.0711 3.79231ZM10 19.6915C5.13215 19.6915 1.17188 15.7313 1.17188 10.8634C1.17188 5.99555 5.13215 2.03528 10 2.03528C14.8679 2.03528 18.8281 5.99555 18.8281 10.8634C18.8281 15.7313 14.8679 19.6915 10 19.6915Z" fill="white" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={10} height={8} viewBox="0 0 10 8" fill="none">
                                                <path d="M9.77752 0.654773C9.54873 0.426023 9.17771 0.426023 8.94893 0.654812L3.77475 5.82899L1.05104 3.10528C0.822246 2.87649 0.45123 2.87649 0.222402 3.10528C-0.00642578 3.33407 -0.00642578 3.70509 0.222402 3.93391L3.36041 7.07192C3.47482 7.18634 3.62478 7.24352 3.77471 7.24352C3.92463 7.24352 4.07463 7.1863 4.189 7.07192L9.77752 1.48341C10.0063 1.25462 10.0063 0.883601 9.77752 0.654773Z" fill="white" />
                                            </svg>
                                        </div>
                                        <p className="mb-0 text-white">Run loyalty program to reward customers</p>
                                    </li>
                                    <li className="d-flex align-items-center mb-3 gap-3" data-aos="fade-up" data-aos-delay={400}>
                                        <div className="position-relative">
                                            <svg className="position-absolute top-50 start-50 translate-middle" xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
                                                <path opacity="0.2" d="M17.0711 3.79231C15.1823 1.9036 12.6711 0.863403 10 0.863403C7.32887 0.863403 4.81762 1.9036 2.92891 3.79231C1.04016 5.68106 0 8.19231 0 10.8634C0 13.5345 1.04016 16.0457 2.92891 17.9345C4.81766 19.8232 7.32887 20.8634 10 20.8634C12.6711 20.8634 15.1823 19.8232 17.0711 17.9345C18.9598 16.0457 20 13.5345 20 10.8634C20 8.19231 18.9598 5.6811 17.0711 3.79231ZM10 19.6915C5.13215 19.6915 1.17188 15.7313 1.17188 10.8634C1.17188 5.99555 5.13215 2.03528 10 2.03528C14.8679 2.03528 18.8281 5.99555 18.8281 10.8634C18.8281 15.7313 14.8679 19.6915 10 19.6915Z" fill="white" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={10} height={8} viewBox="0 0 10 8" fill="none">
                                                <path d="M9.77752 0.654773C9.54873 0.426023 9.17771 0.426023 8.94893 0.654812L3.77475 5.82899L1.05104 3.10528C0.822246 2.87649 0.45123 2.87649 0.222402 3.10528C-0.00642578 3.33407 -0.00642578 3.70509 0.222402 3.93391L3.36041 7.07192C3.47482 7.18634 3.62478 7.24352 3.77471 7.24352C3.92463 7.24352 4.07463 7.1863 4.189 7.07192L9.77752 1.48341C10.0063 1.25462 10.0063 0.883601 9.77752 0.654773Z" fill="white" />
                                            </svg>
                                        </div>
                                        <p className="mb-0 text-white">Keep notes on valuable customer preferences</p>
                                    </li>
                                </ul>
                                <Link href="/about" className="btn btn-linear-3 mt-4 hover-up">
                                    <span>read more</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                        <g clipPath="url(#clip0_903_198)">
                                            <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                        </g>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
