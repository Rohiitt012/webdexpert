import Link from "next/link";

export default function Section5() {
    return (
        <>
            {/*creative-studio section 5*/}
            <section className="creative-studio-section-5 position-relative overflow-hidden py-120" data-background="/assets/img/creative-studio-img/pages/creative-studio/page-home/home-section-5/img-bg.png">
                <div className="container">
                    <div className="text-center mb-80 wow img-custom-anim-left">
                        <h2 className="text-white my-3">Tailored pricing plans</h2>
                        <p>
                            Exclusive collaboration feature designed to make workflows smoother <br />
                            for your entire team is ready anytime.
                        </p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4">
                            <div data-aos="fade-up" data-aos-delay={200} className="card-pricing rounded-4 border p-md-6 p-4 bg-white">
                                <span className="text-primary btn-text">Basic</span>
                                <div className="d-flex mb-3">
                                    <h1 className="mb-0">$</h1>
                                    <h1 className="mb-0 text-price-basic">99</h1>
                                </div>
                                <p className="fs-7">Best for small business owners, startups who needes landing page.</p>
                                <Link href="#" className="btn btn-dark w-100 mb-6">
                                    try for free
                                </Link>
                                <span className="btn-text">What’s included:</span>
                                <ul className="list-unstyled mt-3 mb-0">
                                    <li className="d-flex align-items-center justify-content-between border-top py-3">
                                        <p className="fs-7 mb-0 text-decoration-line-through">Marketing strategy</p>
                                    </li>
                                    <li className="d-flex align-items-center justify-content-between border-top py-3">
                                        <p className="fs-7 mb-0">Competitive work analysis</p>
                                    </li>
                                    <li className="d-flex align-items-center justify-content-between border-top py-3">
                                        <p className="fs-7 mb-0 text-decoration-line-through">Social media share audit</p>
                                    </li>
                                    <li className="d-flex align-items-center justify-content-between border-top pt-3">
                                        <p className="fs-7 mb-0">24/7 online support</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div data-aos="fade-up" data-aos-delay={0} className="card-pricing rounded-4 p-md-6 p-4 bg-primary overflow-hidden">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <span className="text-white btn-text">Premium Plans</span>
                                        <div className="d-flex mb-3">
                                            <h1 className="mb-0 text-white">$</h1>
                                            <h1 className="mb-0 text-price-basic text-white">2999</h1>
                                        </div>
                                        <p className="fs-7 text-white">
                                            Our flexible pricing plan is designed <br />
                                            sizes, offering a range.
                                        </p>
                                    </div>
                                    <div className="position-relative  icon-shape icon-160 rounded-circle">
                                        <Link href="https://www.youtube.com/watch?v=2GOTlI8pYeo" className="popup-video w-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 60 60" fill="none">
                                                <path d="M25.6889 14.5219L10.7921 40.3125C10.1705 41.3891 10.002 42.6686 10.3238 43.8694C10.6455 45.0702 11.4311 46.094 12.5077 46.7156L26.7202 54.9281C26.4101 54.1562 26.251 53.3319 26.2514 52.5V22.7156C26.2499 20.0442 27.2851 17.4765 29.1389 15.5531L35.1202 9.375L30.6577 10.6313C28.5605 11.2366 26.7796 12.6311 25.6889 14.5219Z" fill="white" />
                                                <path d="M4.54822 31.4813C3.66945 32.3603 3.17578 33.5524 3.17578 34.7953C3.17578 36.0383 3.66945 37.2304 4.54822 38.1094L8.29822 41.8594C8.41803 40.9809 8.71462 40.1357 9.17009 39.375C11.3545 35.625 21.0107 18.8719 26.2513 9.87189C25.6232 10.3594 26.767 9.28126 4.54822 31.4813Z" fill="white" />
                                                <path d="M40.9766 36.5625H41.2484V32.8125H40.9766C40.4793 32.8125 40.0024 33.01 39.6507 33.3617C39.2991 33.7133 39.1016 34.1902 39.1016 34.6875C39.1016 35.1848 39.2991 35.6617 39.6507 36.0133C40.0024 36.365 40.4793 36.5625 40.9766 36.5625Z" fill="white" />
                                                <path
                                                    d="M47.8125 2.69061C47.4353 4.89754 46.4848 6.96662 45.0563 8.69061C44.6194 8.24128 44.0969 7.8841 43.5196 7.6402C42.9423 7.39631 42.322 7.27064 41.6953 7.27064C41.0686 7.27064 40.4483 7.39631 39.871 7.6402C39.2937 7.8841 38.7712 8.24128 38.3344 8.69061L30.4875 16.875C28.9754 18.4438 28.1288 20.5367 28.125 22.7156V52.5C28.125 53.7432 28.6189 54.9355 29.4979 55.8146C30.377 56.6936 31.5693 57.1875 32.8125 57.1875H50.625C51.8682 57.1875 53.0605 56.6936 53.9396 55.8146C54.8186 54.9355 55.3125 53.7432 55.3125 52.5V22.7156C55.3087 20.5367 54.4621 18.4438 52.95 16.875L47.6906 11.4187C46.5153 12.698 45.0801 13.7113 43.4813 14.3906C43.3661 14.7145 43.1641 15.0006 42.8973 15.2174C42.6306 15.4343 42.3093 15.5736 41.9687 15.6202C41.6281 15.6668 41.2812 15.6188 40.966 15.4816C40.6508 15.3443 40.3794 15.1231 40.1815 14.842C39.9836 14.5609 39.8668 14.2308 39.8438 13.8878C39.8208 13.5447 39.8926 13.202 40.0513 12.897C40.21 12.5921 40.4494 12.3366 40.7435 12.1585C41.0376 11.9805 41.375 11.8867 41.7188 11.8875C41.9788 11.8894 42.2356 11.9454 42.4729 12.0519C42.7101 12.1585 42.9226 12.3132 43.0969 12.5062C43.6729 12.2478 44.2224 11.9338 44.7375 11.5687C45.3278 11.1252 45.8797 10.6328 46.3875 10.0969C48.1401 8.06418 49.2839 5.5784 49.6875 2.92499L47.8125 2.69061ZM40.9781 30.9375H41.25V28.6594H43.125V30.9375H43.3969C44.3914 30.9375 45.3453 31.3326 46.0485 32.0358C46.7518 32.7391 47.1469 33.6929 47.1469 34.6875H45.2719C45.2719 34.1902 45.0743 33.7133 44.7227 33.3617C44.3711 33.01 43.8942 32.8125 43.3969 32.8125H43.125V36.5625H43.3969C44.3914 36.5625 45.3453 36.9576 46.0485 37.6608C46.7518 38.3641 47.1469 39.3179 47.1469 40.3125C47.1469 41.307 46.7518 42.2609 46.0485 42.9641C45.3453 43.6674 44.3914 44.0625 43.3969 44.0625H43.125V46.3406H41.25V44.0625H40.9781C39.9836 44.0625 39.0297 43.6674 38.3265 42.9641C37.6232 42.2609 37.2281 41.307 37.2281 40.3125H39.1031C39.1031 40.8098 39.3007 41.2867 39.6523 41.6383C40.0039 41.9899 40.4808 42.1875 40.9781 42.1875H41.25V38.4375H40.9781C39.9836 38.4375 39.0297 38.0424 38.3265 37.3391C37.6232 36.6359 37.2281 35.682 37.2281 34.6875C37.2281 33.6929 37.6232 32.7391 38.3265 32.0358C39.0297 31.3326 39.9836 30.9375 40.9781 30.9375Z"
                                                    fill="white"
                                                />
                                                <path d="M45.2719 40.3125C45.2719 39.8152 45.0743 39.3383 44.7227 38.9867C44.3711 38.635 43.8942 38.4375 43.3969 38.4375H43.125V42.1875H43.3969C43.8942 42.1875 44.3711 41.99 44.7227 41.6383C45.0743 41.2867 45.2719 40.8098 45.2719 40.3125Z" fill="white" />
                                            </svg>
                                        </Link>
                                        <div className="position-absolute top-50 start-50 translate-middle w-100">
                                            <h6 className="circle-text rotateme text-white fw-semibold fs-7">got feebacks from old guests since 1990</h6>
                                        </div>
                                    </div>
                                </div>
                                <Link href="#" className="btn btn-white w-100 mb-6">
                                    <span className="text-dark">try for free</span>
                                </Link>
                                <div className="row g-5">
                                    <div className="col-md-5">
                                        <div>
                                            <span className="btn-text text-white">What’s included:</span>
                                            <ul className="list-unstyled mt-3 mb-0">
                                                <li className="d-flex align-items-center justify-content-between border-top py-3">
                                                    <p className="fs-7 mb-0 text-white">Marketing strategy</p>
                                                </li>
                                                <li className="d-flex align-items-center justify-content-between border-top py-3">
                                                    <p className="fs-7 mb-0 text-white">Competitive work analysis</p>
                                                </li>
                                                <li className="d-flex align-items-center justify-content-between border-top py-3">
                                                    <p className="fs-7 mb-0 text-white text-decoration-line-through">Social media share audit</p>
                                                </li>
                                                <li className="d-flex align-items-center justify-content-between border-top pt-3">
                                                    <p className="fs-7 mb-0 text-white">24/7 online support</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-5 offset-md-2">
                                        <div>
                                            <span className="btn-text text-white">What’s included:</span>
                                            <ul className="list-unstyled mt-3 mb-0">
                                                <li className="d-flex align-items-center justify-content-between border-top py-3">
                                                    <p className="fs-7 mb-0 text-white">Marketing strategy</p>
                                                </li>
                                                <li className="d-flex align-items-center justify-content-between border-top py-3">
                                                    <p className="fs-7 mb-0 text-white">Competitive work analysis</p>
                                                </li>
                                                <li className="d-flex align-items-center justify-content-between border-top py-3">
                                                    <p className="fs-7 mb-0 text-white">Social media share audit</p>
                                                </li>
                                                <li className="d-flex align-items-center justify-content-between border-top pt-3">
                                                    <p className="fs-7 mb-0 text-white">24/7 online support</p>
                                                </li>
                                            </ul>
                                        </div>
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
