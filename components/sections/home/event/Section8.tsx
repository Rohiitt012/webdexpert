import Link from "next/link";

export default function Section8() {
    return (
        <>
            {/*event-home section 8*/}
            <section className="event-home-section-8 position-relative overflow-hidden">
                <div className="background-opacity pt-80 pb-80" data-background="/assets/img/event-img/pages/event/page-home/home-section-8/img-bg.png">
                    <div className="container">
                        <div className="d-flex justify-content-between flex-wrap gap-4">
                            <div className="d-lg-flex gap-4">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={70} height={70} viewBox="0 0 70 70" fill="none">
                                        <path d="M10.5 65.3334V67.6668H24.5V60.6668C24.5 60.3308 24.5198 59.9983 24.5502 59.6704C24.514 59.6319 24.4813 59.5911 24.444 59.5538C23.3017 58.4104 21.8459 57.6318 20.2608 57.3163C18.6757 57.0008 17.0326 57.1627 15.5396 57.7816C14.0466 58.4004 12.7708 59.4483 11.8737 60.7927C10.9766 62.137 10.4985 63.7173 10.5 65.3334Z" fill="#1AAA59" />
                                        <path d="M59.4994 67.6668V65.3335C59.5016 63.7039 59.0157 62.1111 58.1043 60.7603C57.1929 59.4095 55.8977 58.3626 54.3858 57.7548C52.8739 57.1469 51.2145 57.0058 49.6217 57.3498C48.0289 57.6937 46.5756 58.5069 45.4492 59.6845C45.4796 60.0076 45.4994 60.3355 45.4994 60.6668V67.6668H59.4994Z" fill="#1AAA59" />
                                        <path d="M26.832 60.6667V67.6667H43.1654V60.6667C43.1654 58.5007 42.305 56.4235 40.7734 54.892C39.2419 53.3604 37.1646 52.5 34.9987 52.5C32.8328 52.5 30.7555 53.3604 29.224 54.892C27.6924 56.4235 26.832 58.5007 26.832 60.6667Z" fill="#1AAA59" />
                                        <path
                                            d="M64.1654 6.99984C64.1654 6.381 63.9195 5.78751 63.482 5.34992C63.0444 4.91234 62.4509 4.6665 61.832 4.6665H57.1654V2.33317C57.1654 2.02375 57.0425 1.72701 56.8237 1.50821C56.6049 1.28942 56.3081 1.1665 55.9987 1.1665C55.6893 1.1665 55.3925 1.28942 55.1737 1.50821C54.9549 1.72701 54.832 2.02375 54.832 2.33317V4.6665H46.6654V2.33317C46.6654 2.02375 46.5425 1.72701 46.3237 1.50821C46.1049 1.28942 45.8081 1.1665 45.4987 1.1665C45.1893 1.1665 44.8925 1.28942 44.6737 1.50821C44.4549 1.72701 44.332 2.02375 44.332 2.33317V4.6665H36.1654V2.33317C36.1654 2.02375 36.0425 1.72701 35.8237 1.50821C35.6049 1.28942 35.3081 1.1665 34.9987 1.1665C34.6893 1.1665 34.3925 1.28942 34.1737 1.50821C33.9549 1.72701 33.832 2.02375 33.832 2.33317V4.6665H25.6654V2.33317C25.6654 2.02375 25.5424 1.72701 25.3237 1.50821C25.1049 1.28942 24.8081 1.1665 24.4987 1.1665C24.1893 1.1665 23.8925 1.28942 23.6737 1.50821C23.4549 1.72701 23.332 2.02375 23.332 2.33317V4.6665H15.1654V2.33317C15.1654 2.02375 15.0424 1.72701 14.8237 1.50821C14.6049 1.28942 14.3081 1.1665 13.9987 1.1665C13.6893 1.1665 13.3925 1.28942 13.1737 1.50821C12.9549 1.72701 12.832 2.02375 12.832 2.33317V4.6665H8.16536C7.54653 4.6665 6.95303 4.91234 6.51545 5.34992C6.07786 5.78751 5.83203 6.381 5.83203 6.99984V9.33317H64.1654V6.99984Z"
                                            fill="#1AAA59"
                                        />
                                        <path
                                            opacity="0.4"
                                            d="M29.6959 27.048C29.8829 27.273 29.9794 27.5596 29.9665 27.8518L29.7495 32.5558C29.8265 32.6632 29.8802 32.6842 29.949 32.6608L34.6157 30.9913C34.8698 30.8996 35.1479 30.8996 35.402 30.9913L40.0687 32.6608C40.0942 32.6699 40.1214 32.6727 40.1482 32.6691C40.175 32.6654 40.2006 32.6554 40.2227 32.6398L40.0442 27.8565C40.0307 27.5639 40.1277 27.277 40.316 27.0527L43.088 23.7405C43.1302 23.6939 43.1591 23.6369 43.1716 23.5753C43.1841 23.5137 43.1798 23.4499 43.1592 23.3905C43.1379 23.3232 43.0992 23.2626 43.0469 23.2151C42.9947 23.1675 42.9308 23.1347 42.8617 23.1198L38.545 21.9835C38.2759 21.9119 38.0413 21.7464 37.8835 21.5168L35.1465 17.5653C35.133 17.5413 35.1134 17.5213 35.0896 17.5074C35.0658 17.4934 35.0388 17.4861 35.0112 17.4861C34.9836 17.4861 34.9566 17.4934 34.9328 17.5074C34.909 17.5213 34.8893 17.5413 34.8759 17.5653L32.14 21.518C31.9816 21.7473 31.7467 21.9127 31.4774 21.9847L27.1607 23.121C27.0918 23.1358 27.0279 23.1684 26.9757 23.2158C26.9235 23.2631 26.8846 23.3234 26.8632 23.3905C26.8425 23.4499 26.8382 23.5137 26.8508 23.5753C26.8633 23.6369 26.8922 23.6939 26.9344 23.7405L29.6959 27.048Z"
                                            fill="#1AAA59"
                                        />
                                        <path opacity="0.4" d="M18.6667 54.8333C21.244 54.8333 23.3333 52.744 23.3333 50.1667C23.3333 47.5893 21.244 45.5 18.6667 45.5C16.0893 45.5 14 47.5893 14 50.1667C14 52.744 16.0893 54.8333 18.6667 54.8333Z" fill="#1AAA59" />
                                        <path
                                            d="M8.16536 45.4998H13.462C14.1158 44.766 14.9173 44.1787 15.8141 43.7766C16.7109 43.3745 17.6826 43.1666 18.6654 43.1666C19.6482 43.1666 20.6199 43.3745 21.5166 43.7766C22.4134 44.1787 23.215 44.766 23.8687 45.4998H27.9987C27.9987 43.6433 28.7362 41.8628 30.049 40.5501C31.3617 39.2373 33.1422 38.4998 34.9987 38.4998C36.8552 38.4998 38.6357 39.2373 39.9484 40.5501C41.2612 41.8628 41.9987 43.6433 41.9987 45.4998H46.1287C46.7824 44.766 47.584 44.1787 48.4808 43.7766C49.3775 43.3745 50.3492 43.1666 51.332 43.1666C52.3148 43.1666 53.2865 43.3745 54.1833 43.7766C55.0801 44.1787 55.8816 44.766 56.5354 45.4998H61.832C62.4509 45.4998 63.0444 45.254 63.482 44.8164C63.9195 44.3788 64.1654 43.7853 64.1654 43.1665V11.6665H5.83203V43.1665C5.83203 43.7853 6.07786 44.3788 6.51545 44.8164C6.95303 45.254 7.54653 45.4998 8.16536 45.4998ZM24.627 22.6775C24.7677 22.2357 25.0184 21.8368 25.3555 21.5185C25.6927 21.2001 26.1052 20.9727 26.5544 20.8575L30.4487 19.8332L32.9407 16.2352C33.1717 15.9047 33.479 15.6349 33.8366 15.4486C34.1942 15.2622 34.5914 15.1649 34.9946 15.1649C35.3978 15.1649 35.7951 15.2622 36.1526 15.4486C36.5102 15.6349 36.8175 15.9047 37.0485 16.2352L39.5487 19.8332L43.4477 20.8587C43.8969 20.9738 44.3094 21.2013 44.6465 21.5196C44.9837 21.838 45.2343 22.2368 45.375 22.6787C45.5145 23.1125 45.5413 23.5747 45.4527 24.0217C45.3641 24.4687 45.1631 24.8858 44.8687 25.2337L42.3895 28.197L42.582 32.4448C42.6006 32.8445 42.5201 33.2426 42.3477 33.6037C42.1753 33.9648 41.9164 34.2777 41.5939 34.5145C41.2639 34.7584 40.8789 34.9173 40.4729 34.9769C40.0669 35.0365 39.6525 34.9951 39.2664 34.8563L34.9987 33.328L30.7275 34.8563C30.3414 34.9954 29.9269 35.037 29.5209 34.9774C29.1149 34.9177 28.7298 34.7587 28.4 34.5145C28.078 34.2775 27.8194 33.9648 27.647 33.604C27.4746 33.2432 27.3939 32.8454 27.4119 32.446L27.6125 28.1958L25.1322 25.2325C24.838 24.8846 24.6372 24.4674 24.5488 24.0204C24.4605 23.5734 24.4874 23.1112 24.627 22.6775Z"
                                            fill="#1AAA59"
                                        />
                                        <path opacity="0.4" d="M34.9987 50.1668C37.576 50.1668 39.6654 48.0775 39.6654 45.5002C39.6654 42.9228 37.576 40.8335 34.9987 40.8335C32.4214 40.8335 30.332 42.9228 30.332 45.5002C30.332 48.0775 32.4214 50.1668 34.9987 50.1668Z" fill="#1AAA59" />
                                        <path opacity="0.4" d="M51.3346 54.8333C53.912 54.8333 56.0013 52.744 56.0013 50.1667C56.0013 47.5893 53.912 45.5 51.3346 45.5C48.7573 45.5 46.668 47.5893 46.668 50.1667C46.668 52.744 48.7573 54.8333 51.3346 54.8333Z" fill="#1AAA59" />
                                    </svg>
                                </div>
                                <h2 className="text-white wow img-custom-anim-left">
                                    Hurry up! Don't waste time <br />
                                    important event.
                                </h2>
                            </div>
                            <div className="d-flex flex-wrap gap-4 timer">
                                <div className="text-center" data-aos="fade-down" data-aos-delay={0}>
                                    <div className="icon-shape icon-80 rounded-circle border border-white border-opacity-25">
                                        <h4 className="text-white mb-0 time-box">
                                            <span id="days1" className="time-value">
                                                12
                                            </span>
                                        </h4>
                                    </div>
                                    <p className="text-uppercase text-white opacity-75 mt-2 mb-0">days</p>
                                </div>
                                <div className="text-center" data-aos="fade-down" data-aos-delay={200}>
                                    <div className="icon-shape icon-80 rounded-circle border border-white border-opacity-25">
                                        <h4 className="text-white mb-0 time-box">
                                            <span id="hours1" className="time-value">
                                                39
                                            </span>
                                        </h4>
                                    </div>
                                    <p className="text-uppercase text-white opacity-75 mt-2 mb-0">hours</p>
                                </div>
                                <div className="text-center" data-aos="fade-down" data-aos-delay={400}>
                                    <div className="icon-shape icon-80 rounded-circle border border-white border-opacity-25">
                                        <h4 className="text-white mb-0 time-box">
                                            <span id="minutes1" className="time-value">
                                                00
                                            </span>
                                        </h4>
                                    </div>
                                    <p className="text-uppercase text-white opacity-75 mt-2 mb-0">minute</p>
                                </div>
                                <div className="text-center" data-aos="fade-down" data-aos-delay={600}>
                                    <div className="icon-shape icon-80 rounded-circle border border-white border-opacity-25">
                                        <h4 className="text-white mb-0 time-box">
                                            <span id="seconds1" className="time-value">
                                                44
                                            </span>
                                        </h4>
                                    </div>
                                    <p className="text-uppercase text-white opacity-75 mt-2 mb-0">seconds</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex overflow-hidden">
                    <div className="hall-photo w-25">
                        <img className="w-100" src="/assets/img/event-img/pages/event/page-home/home-section-8/img-1.png" alt="AstraX" />
                        <div className="bg-overlay" />
                        <div>
                            <h6 className="text-white fs-20 position-absolute bottom-0 start-0 m-5">Central hall photo</h6>
                        </div>
                    </div>
                    <div className="hall-photo w-25">
                        <img className="w-100" src="/assets/img/event-img/pages/event/page-home/home-section-8/img-2.png" alt="AstraX" />
                        <div className="bg-overlay" />
                        <div>
                            <h6 className="text-white fs-20 position-absolute bottom-0 start-0 m-5">Central hall photo</h6>
                        </div>
                    </div>
                    <div className="hall-photo w-25">
                        <img className="w-100" src="/assets/img/event-img/pages/event/page-home/home-section-8/img-3.png" alt="AstraX" />
                        <div className="bg-overlay" />
                        <div>
                            <h6 className="text-white fs-20 position-absolute bottom-0 start-0 m-5">Central hall photo</h6>
                        </div>
                    </div>
                    <div className="hall-photo w-25">
                        <img className="w-100" src="/assets/img/event-img/pages/event/page-home/home-section-8/img-4.png" alt="AstraX" />
                        <div className="bg-overlay" />
                        <div>
                            <h6 className="text-white fs-20 position-absolute bottom-0 start-0 m-5">Central hall photo</h6>
                        </div>
                    </div>
                </div>
                <div className="text-center logo-page pb-100">
                    <h1 className="fs-200 stroke-primary mb-0 text-white">Astrax.Event</h1>
                </div>
            </section>
        </>
    );
}
