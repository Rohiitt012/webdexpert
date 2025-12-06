import Link from "next/link";

export default function Section4() {
    return (
        <>
            {/*fintech-app home section 4*/}
            <section className="fintech-app-home-section-4 position-relative bg-dark-3 rounded-bottom-5">
                <div className="container overflow-hidden pt-120 pb-250">
                    <div className="row g-5">
                        <div className="col-lg-6 order-lg-1 order-2">
                            <div className="position-relative d-inline-block">
                                <img className="rounded-4 wow img-custom-anim-left" src="/assets/img/fintech-app-img/pages/fintech-app/page-home/home-section-4/img-1.png" alt="AstraX" />
                                <div data-aos="fade-up" data-aos-delay={200}>
                                    <img className="position-absolute top-100 start-100 translate-middle pe-10 d-none d-md-block" src="/assets/img/fintech-app-img/pages/fintech-app/page-home/home-section-4/img-list.png" alt="AstraX" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-2 order-1">
                            <span className="content-top btn-text text-white">roi checker banking</span>
                            <h2 className="mt-3 mb-5 text-primary position-relative wow img-custom-anim-left">
                                Special
                                <span className="text-white">
                                    checker <br />
                                    banking system
                                </span>
                                <span className="text-secondary"> and </span> <br />
                                <span className="text-white">ready</span>
                                <span className="stroke-primary text-dark">panels</span>
                            </h2>
                            <ul className="list-unstyled mb-8">
                                <li className="d-flex align-items-center mb-3 gap-3" data-aos="fade-up" data-aos-delay={200}>
                                    <div className="position-relative">
                                        <svg className="fill-primary position-absolute top-50 start-50 translate-middle" xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
                                            <path opacity="0.2" d="M17.0711 3.79231C15.1823 1.9036 12.6711 0.863403 10 0.863403C7.32887 0.863403 4.81762 1.9036 2.92891 3.79231C1.04016 5.68106 0 8.19231 0 10.8634C0 13.5345 1.04016 16.0457 2.92891 17.9345C4.81766 19.8232 7.32887 20.8634 10 20.8634C12.6711 20.8634 15.1823 19.8232 17.0711 17.9345C18.9598 16.0457 20 13.5345 20 10.8634C20 8.19231 18.9598 5.6811 17.0711 3.79231ZM10 19.6915C5.13215 19.6915 1.17188 15.7313 1.17188 10.8634C1.17188 5.99555 5.13215 2.03528 10 2.03528C14.8679 2.03528 18.8281 5.99555 18.8281 10.8634C18.8281 15.7313 14.8679 19.6915 10 19.6915Z" fill="#794AFF" />
                                        </svg>
                                        <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={10} height={8} viewBox="0 0 10 8" fill="none">
                                            <path d="M9.77752 0.654773C9.54873 0.426023 9.17771 0.426023 8.94893 0.654812L3.77475 5.82899L1.05104 3.10528C0.822246 2.87649 0.45123 2.87649 0.222402 3.10528C-0.00642578 3.33407 -0.00642578 3.70509 0.222402 3.93391L3.36041 7.07192C3.47482 7.18634 3.62478 7.24352 3.77471 7.24352C3.92463 7.24352 4.07463 7.1863 4.189 7.07192L9.77752 1.48341C10.0063 1.25462 10.0063 0.883601 9.77752 0.654773Z" fill="#794AFF" />
                                        </svg>
                                    </div>
                                    <p className="mb-0 text-white">Run loyalty program to reward customers</p>
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
                                    <p className="mb-0 text-white">Keep notes on valuable customer preferences</p>
                                </li>
                                <li className="d-flex align-items-center mb-3 gap-3" data-aos="fade-up" data-aos-delay={600}>
                                    <div className="position-relative">
                                        <svg className="fill-primary position-absolute top-50 start-50 translate-middle" xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
                                            <path opacity="0.2" d="M17.0711 3.79231C15.1823 1.9036 12.6711 0.863403 10 0.863403C7.32887 0.863403 4.81762 1.9036 2.92891 3.79231C1.04016 5.68106 0 8.19231 0 10.8634C0 13.5345 1.04016 16.0457 2.92891 17.9345C4.81766 19.8232 7.32887 20.8634 10 20.8634C12.6711 20.8634 15.1823 19.8232 17.0711 17.9345C18.9598 16.0457 20 13.5345 20 10.8634C20 8.19231 18.9598 5.6811 17.0711 3.79231ZM10 19.6915C5.13215 19.6915 1.17188 15.7313 1.17188 10.8634C1.17188 5.99555 5.13215 2.03528 10 2.03528C14.8679 2.03528 18.8281 5.99555 18.8281 10.8634C18.8281 15.7313 14.8679 19.6915 10 19.6915Z" fill="#794AFF" />
                                        </svg>
                                        <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width={10} height={8} viewBox="0 0 10 8" fill="none">
                                            <path d="M9.77752 0.654773C9.54873 0.426023 9.17771 0.426023 8.94893 0.654812L3.77475 5.82899L1.05104 3.10528C0.822246 2.87649 0.45123 2.87649 0.222402 3.10528C-0.00642578 3.33407 -0.00642578 3.70509 0.222402 3.93391L3.36041 7.07192C3.47482 7.18634 3.62478 7.24352 3.77471 7.24352C3.92463 7.24352 4.07463 7.1863 4.189 7.07192L9.77752 1.48341C10.0063 1.25462 10.0063 0.883601 9.77752 0.654773Z" fill="#794AFF" />
                                        </svg>
                                    </div>
                                    <p className="mb-0 text-white">24/7 online support available</p>
                                </li>
                            </ul>
                            <Link href="/features" className="btn btn-dashed">
                                <span> read more </span>
                                <i className="fa-solid fa-arrow-right-long text-primary" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
