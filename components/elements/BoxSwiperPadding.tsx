import { useEffect, useState } from "react";

interface SwiperPaddingProps {
    rootSelector?: string; // Selector của phần tử gốc để lấy padding
    targetSelector?: string; // Selector của phần tử cần set padding
}

const SwiperPadding: React.FC<SwiperPaddingProps> = ({ rootSelector = ".swipper-root", targetSelector = ".box-swiper-padding" }) => {
    const [leftPadding, setLeftPadding] = useState(0);

    useEffect(() => {
        const updatePadding = () => {
            const swiperRoot = document.querySelector(rootSelector) as HTMLElement | null;
            let padding = 0;

            if (swiperRoot) {
                padding = swiperRoot.getBoundingClientRect().left;
            }

            const targetElement = document.querySelector(targetSelector) as HTMLElement | null;
            if (targetElement) {
                targetElement.style.paddingLeft = `${padding}px`;
            }

            setLeftPadding(padding);
        };

        updatePadding();
        window.addEventListener("resize", updatePadding);

        return () => {
            window.removeEventListener("resize", updatePadding);
        };
    }, [rootSelector, targetSelector]);

    return null;
};

export default SwiperPadding;
