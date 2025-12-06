import Link from "next/link";

export default function Section3() {
    return (
        <>
            {/*logistics-home-section-3*/}
            <section className="logistics-home-section-3 position-relative z-0 overflow-hidden bg-primary-2 py-120">
                <div className="container">
                    <div className="text-center">
                        <div className="d-flex align-items-center justify-content-center gap-3" data-aos="fade-left" data-aos-delay={200}>
                            <div className="d-none d-md-block">
                                <span className="icon-shape icon-40 bg-primary rounded-circle">
                                    <i className="fa-solid fa-arrow-right-long text-white rotate-45" />
                                </span>
                            </div>
                            <h2 className="stroke-white opacity-50 text-start mb-0">Transform the</h2>
                        </div>
                        <h2 className="text-white text-anime-style-2">transport experience</h2>
                    </div>
                    <div className="row justify-content-center mt-5 g-5">
                        <div className="col-lg-4 col-md-6">
                            <div className="card-services" data-aos="fade-up" data-aos-delay={0}>
                                <div className="line-border position-absolute top-50 start-50 translate-middle" />
                                <div className="position-relative content p-5">
                                    <div className="content-top d-flex pb-5 align-items-center gap-3 border-bottom border-white border-opacity-10">
                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={46} height={60} viewBox="0 0 46 60" fill="none">
                                                <path
                                                    d="M12.6041 3.57451C12.6041 1.60039 14.2044 0 16.1786 0C17.8214 0 19.1908 1.11451 19.609 2.62412C19.6577 2.62157 19.7036 2.60961 19.753 2.60961C21.237 2.60961 22.44 3.81265 22.44 5.29667C22.44 5.65863 22.3662 6.00294 22.2365 6.31804L22.2375 6.31794C23.1575 6.31794 23.9033 7.06363 23.9033 7.98363C23.9033 8.90353 23.1576 9.64941 22.2375 9.64941C21.3176 9.64941 20.5718 8.90373 20.5718 7.98363C20.5718 7.93392 20.5821 7.88706 20.5865 7.83843C20.3226 7.925 20.0459 7.98363 19.7531 7.98363C18.8559 7.98363 18.0664 7.53941 17.5783 6.86353C17.1483 7.04677 16.6756 7.14902 16.1786 7.14902C14.2045 7.14902 12.6041 5.54863 12.6041 3.57451ZM14.2265 21.2821H9.33067C8.47175 21.2821 7.77548 21.9783 7.77548 22.8373V33.2497L23.0015 25.9563L38.228 33.2497V22.8373C38.228 21.9783 37.5317 21.2821 36.6729 21.2821H31.777M31.777 19.7269V18.7738C31.777 17.9149 31.0808 17.2186 30.2219 17.2186H26.4446L25.7692 11.0294H20.2344L19.5591 17.2186H15.7818C14.9228 17.2186 14.2266 17.9149 14.2266 18.7738V19.7269H31.777ZM23.0017 27.6809L0.378906 38.5174L7.07802 58.0603C10.1879 56.6141 14.1846 55.2655 18.2815 55.2655C24.8649 55.2655 30.1561 58.4012 37.1063 60H38.2607L45.6246 38.5174L23.0017 27.6809Z"
                                                    fill="#FF652E"
                                                />
                                            </svg>
                                        </div>
                                        <Link href="/services-details">
                                            <h6 className="mb-0 text-white">
                                                Air freight <br />
                                                transportation
                                            </h6>
                                        </Link>
                                    </div>
                                    <div className="content-bottom mt-8">
                                        <p className="mb-0 text-white mb-3">We offer a wide range of digital market services that cater to business and any kind of logistics thing.</p>
                                        <Link href="/services-details" className="fw-bold">
                                            <span className="text-white">Read More</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card-services" data-aos="fade-up" data-aos-delay={200}>
                                <div className="line-border position-absolute top-50 start-50 translate-middle" />
                                <div className="position-relative content p-5">
                                    <div className="content-top d-flex pb-5 align-items-center gap-3 border-bottom border-white border-opacity-10">
                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={60} height={34} viewBox="0 0 60 34" fill="none">
                                                <path
                                                    d="M51.7851 20.6315L48.9714 24.6846H15.243L14.0037 22.031C13.6449 21.2626 12.8737 20.7717 12.0257 20.7717H11.6244V11.8797C11.6244 11.5552 11.4394 11.0992 11.2135 10.8662L9.5763 9.17906C9.34052 8.93602 8.87052 8.7372 8.53189 8.7372H5.16945C4.84367 8.7372 4.38641 8.92328 4.15328 9.15073L2.39946 10.8613C2.15789 11.0969 1.96025 11.5658 1.96025 11.9032V20.7716H0.728486C0.207311 20.7716 -0.144942 21.3034 0.0584882 21.7832L4.12357 31.3741C4.69475 32.7216 6.01759 33.5957 7.48121 33.5927L49.2565 33.5051C50.4849 33.5025 51.6291 32.8802 52.2989 31.8504L59.881 20.1923C60.1959 19.7081 59.8485 19.0679 59.2709 19.0679H54.7741C53.5817 19.068 52.4651 19.6521 51.7851 20.6315ZM7.86042 12.5408H10.1787V14.1013H7.86042V12.5408ZM7.86042 17.0505H10.1787V18.6111H7.86042V17.0505ZM3.55799 12.5408H5.87641V14.1013H3.55799V12.5408ZM3.55799 17.0505H5.87641V18.6111H3.55799V17.0505ZM22.4548 19.0444L28.9344 23.0565C28.6442 23.2066 28.3198 23.2995 27.9706 23.2995H17.2468C16.8309 23.2995 16.4458 23.175 16.119 22.9674L22.4548 19.0444ZM36.4553 10.4498H25.7316C25.3157 10.4498 24.9306 10.3254 24.6038 10.1177L30.9396 6.19476L37.4191 10.2067C37.129 10.357 36.8045 10.4498 36.4553 10.4498ZM34.3294 23.2996C33.9135 23.2996 33.5283 23.1751 33.2015 22.9674L39.5373 19.0444L46.0169 23.0565C45.7268 23.2066 45.4024 23.2995 45.053 23.2995L34.3294 23.2996ZM29.8303 22.1665L23.6215 18.3221L29.8659 14.4556C29.9994 14.7325 30.0806 15.0391 30.0806 15.367V21.1894C30.0807 21.5441 29.9849 21.8732 29.8303 22.1665ZM40.7039 18.3221L46.9484 14.4556C47.082 14.7325 47.1631 15.0391 47.1631 15.367V21.1894C47.1631 21.5439 47.0673 21.8731 46.9127 22.1665L40.7039 18.3221ZM32.3921 22.0239C32.2815 21.7678 32.2192 21.4862 32.2192 21.1894V15.3671C32.2192 15.0974 32.2744 14.8417 32.3666 14.6046L38.3706 18.3221L32.3921 22.0239ZM22.4548 17.5998L16.048 13.633C16.3888 13.3969 16.801 13.257 17.2468 13.257H27.9706C28.3505 13.257 28.7019 13.3653 29.0099 13.541L22.4548 17.5998ZM23.7943 9.17426C23.6838 8.91818 23.6215 8.63642 23.6215 8.33985V2.51751C23.6215 2.24781 23.6766 1.99212 23.7689 1.75507L29.7728 5.4725L23.7943 9.17426ZM15.3095 22.0239C15.1991 21.7678 15.1366 21.4862 15.1366 21.1894V15.3671C15.1366 15.0974 15.1919 14.8417 15.2841 14.6046L21.288 18.3221L15.3095 22.0239ZM30.9396 4.75006L24.5328 0.783304C24.8736 0.547226 25.2858 0.407227 25.7315 0.407227H36.4552C36.8352 0.407227 37.1866 0.515559 37.4945 0.691343L30.9396 4.75006ZM34.3294 13.2569H45.053C45.433 13.2569 45.7845 13.3652 46.0924 13.541L39.5373 17.5997L33.1306 13.6329C33.4714 13.397 33.8836 13.2569 34.3294 13.2569ZM32.1063 5.4725L38.3508 1.60605C38.4842 1.88301 38.5655 2.18957 38.5655 2.51751V8.33985C38.5655 8.69455 38.4696 9.02367 38.3151 9.3169L32.1063 5.4725Z"
                                                    fill="#FF652E"
                                                />
                                            </svg>
                                        </div>
                                        <Link href="/services-details">
                                            <h6 className="mb-0 text-white">
                                                Ocean freight <br />
                                                transportation
                                            </h6>
                                        </Link>
                                    </div>
                                    <div className="content-bottom mt-8">
                                        <p className="mb-0 text-white mb-3">We offer a wide range of digital market services that cater to business and any kind of logistics thing.</p>
                                        <Link href="/services-details" className="fw-bold">
                                            <span className="text-white">Read More</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card-services" data-aos="fade-up" data-aos-delay={400}>
                                <div className="line-border position-absolute top-50 start-50 translate-middle" />
                                <div className="position-relative content p-5">
                                    <div className="content-top d-flex pb-5 align-items-center gap-3 border-bottom border-white border-opacity-10">
                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={60} height={50} viewBox="0 0 60 50" fill="none">
                                                <path
                                                    d="M58.7964 11.6561L31.2337 0.397781C30.2884 0.0117029 29.2289 0.014644 28.2858 0.406114L1.19343 11.6523C0.470882 11.9523 0 12.6576 0 13.4399V17.4703C0 18.5393 0.866567 19.4058 1.93549 19.4058H3.38715C3.65441 19.4058 3.87107 19.6224 3.87107 19.8897V45.535C3.87107 47.9401 5.82078 49.8899 8.22597 49.8899H9.49077V26.6211H50.5093V49.8898H51.7741C54.1792 49.8898 56.129 47.9401 56.129 45.5349V19.8897C56.129 19.6225 56.3457 19.4058 56.6129 19.4058H58.0646C59.1336 19.4058 60.0001 18.5392 60.0001 17.4703V13.4479C59.9999 12.6616 59.5241 11.9534 58.7964 11.6561ZM19.3549 19.4058H9.67744V15.0509H19.3548L19.3549 19.4058ZM34.8386 19.4058H25.1612V15.0509H34.8386V19.4058ZM50.3226 19.4058H40.645V15.0509H50.3225L50.3226 19.4058ZM21.8724 40.2158H19.1182V44.0154H17.8315V40.2158H15.0604C14.0588 40.2158 13.2469 41.0276 13.2469 42.0292V48.0762C13.2469 49.0778 14.0589 49.8896 15.0604 49.8896H21.8723C22.8739 49.8896 23.6857 49.0778 23.6857 48.0762V42.0292C23.6858 41.0276 22.8739 40.2158 21.8724 40.2158ZM33.4095 40.2158H30.6552V44.0154H29.3686V40.2158H26.5975C25.5959 40.2158 24.7841 41.0276 24.7841 42.0292V48.0762C24.7841 49.0778 25.596 49.8896 26.5975 49.8896H33.4094C34.4109 49.8896 35.2228 49.0778 35.2228 48.0762V42.0292C35.223 41.0276 34.411 40.2158 33.4095 40.2158ZM45.1609 40.2158H42.4067V44.0154H41.12V40.2158H38.349C37.3474 40.2158 36.5355 41.0276 36.5355 42.0292V48.0762C36.5355 49.0778 37.3474 49.8896 38.349 49.8896H45.1608C46.1624 49.8896 46.9742 49.0778 46.9742 48.0762V42.0292C46.9744 41.0276 46.1624 40.2158 45.1609 40.2158ZM27.6649 29.3035H24.9106V33.1032H23.624V29.3035H20.8529C19.8513 29.3035 19.0395 30.1155 19.0395 31.1169V37.164C19.0395 38.1656 19.8514 38.9774 20.8529 38.9774H27.6649C28.6664 38.9774 29.4783 38.1656 29.4783 37.164V31.1169C29.4784 30.1155 28.6663 29.3035 27.6649 29.3035ZM39.4835 29.3035H36.7292V33.1032H35.4426V29.3035H32.6715C31.67 29.3035 30.8581 30.1155 30.8581 31.1169V37.164C30.8581 38.1656 31.67 38.9774 32.6715 38.9774H39.4835C40.485 38.9774 41.2968 38.1656 41.2968 37.164V31.1169C41.2969 30.1155 40.485 29.3035 39.4835 29.3035Z"
                                                    fill="#FF652E"
                                                />
                                            </svg>
                                        </div>
                                        <Link href="/services-details">
                                            <h6 className="mb-0 text-white">
                                                Warehousing <br />
                                                &amp; box transport
                                            </h6>
                                        </Link>
                                    </div>
                                    <div className="content-bottom mt-8">
                                        <p className="mb-0 text-white mb-3">We offer a wide range of digital market services that cater to business and any kind of logistics thing.</p>
                                        <Link href="/services-details" className="fw-bold">
                                            <span className="text-white">Read More</span>
                                        </Link>
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
