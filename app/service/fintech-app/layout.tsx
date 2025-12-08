import "/public/assets/css/fintech-app-css/vendors/bootstrap.min.css";
import "/public/assets/css/fintech-app-css/vendors/swiper-bundle.min.css";
import "/public/assets/css/fintech-app-css/vendors/aos.css";
import "/public/assets/css/fintech-app-css/vendors/carouselTicker.css";
import "/public/assets/css/fintech-app-css/vendors/odometer.css";
import "/public/assets/css/fintech-app-css/vendors/magnific-popup.css";
import "/public/assets/fonts/fintech-app-fonts/bootstrap-icons/bootstrap-icons.min.css";
import "/public/assets/fonts/fintech-app-fonts/boxicons/boxicons.min.css";
import "/public/assets/fonts/fintech-app-fonts/remixicon/remixicon.css";
import "/public/assets/fonts/fintech-app-fonts/fontawesome/fontawesome.min.css";
import "/public/assets/fonts/fintech-app-fonts/fontawesome/solid.min.css";
import "/public/assets/fonts/fintech-app-fonts/fontawesome/regular.min.css";
import "/public/assets/css/fintech-app-css/main.css";
import "/public/assets/css/fintech-app-css/style.css";

export default function FintechAppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

