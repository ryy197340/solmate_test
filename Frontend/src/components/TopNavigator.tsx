import React, { FC, useEffect, useState } from 'react';

export const TopNavigator: FC = () => {
    const [isActive, setIsActive] = useState(false);
    const minScrollToShowArrow = 500;

    const handleActive = () => {
        if (window.scrollY >= minScrollToShowArrow) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    const onTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleActive);

        return () => {
            window.removeEventListener('scroll', handleActive);
        };
    }, [handleActive]);

    return (
        <div
            className={`fixed md:right-20 right-10 opacity-30 cursor-pointer hover:opacity-100 md:bottom-40 bottom-20 border border-whilte rounded-full p-4 ${
                isActive ? 'block' : 'hidden'
            }`}
        >
            <div className='' onClick={onTop}>
                <img
                    src='/assets/icon_top.svg'
                    alt='Top'
                    className='md:w-8 w-6'
                />
            </div>
        </div>
    );
};
