import { useState, useEffect } from "react";

export const useScrollTop = (treshold = 10) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handeScroll = () => {
            if (window.scrollY > treshold) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handeScroll);
        return () => window.removeEventListener("scroll", handeScroll);
    }, [treshold]);

    return scrolled;
};
