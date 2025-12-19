import "../../public/assets/css/application-css/vendors/bootstrap.min.css";
import "../../public/assets/css/application-css/vendors/swiper-bundle.min.css";
import "../../public/assets/css/application-css/vendors/aos.css";
import "../../public/assets/css/application-css/vendors/carouselTicker.css";
import "../../public/assets/css/application-css/vendors/odometer.css";
import "../../public/assets/css/application-css/vendors/magnific-popup.css";
import "../../public/assets/fonts/application-fonts/bootstrap-icons/bootstrap-icons.min.css";
import "../../public/assets/fonts/application-fonts/boxicons/boxicons.min.css";
import "../../public/assets/fonts/application-fonts/remixicon/remixicon.css";
import "../../public/assets/fonts/application-fonts/fontawesome/fontawesome.min.css";
import "../../public/assets/fonts/application-fonts/fontawesome/solid.min.css";
import "../../public/assets/fonts/application-fonts/fontawesome/regular.min.css";
import "../../public/assets/css/application-css/main.css";
import "../../public/assets/css/application-css/style.css";

export default function ApplicationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}


