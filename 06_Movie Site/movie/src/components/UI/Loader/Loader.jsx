import React from 'react';
import { useLoading, Puff } from "@agney/react-loading";

export const Loader = () => {
    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <Puff width="80" />,
    });
    return (
        <section style={{width: "100%", textAlign: 'center'}} {...containerProps}>
            {indicatorEl}
        </section>
    );
};