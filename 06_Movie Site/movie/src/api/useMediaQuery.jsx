import { useEffect, useState } from "react";

export const useMediaQuery = (query, initialValue = true) => {
    const [value, setValue] = useState(initialValue);
    useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        const handleTabletChange = () => {
            if (mediaQuery.matches) {
                setValue(true);
            } else {
                setValue(false);
            }
        };
        mediaQuery.addListener(handleTabletChange);
        handleTabletChange(mediaQuery);
        return () => {
            mediaQuery.removeListener(handleTabletChange);
        };
    }, [query]);
    return value;
};
