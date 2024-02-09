import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
    bgSrc: string;
    bgHoverSrc: string;
    alt: string;
    href?: string;
    fullWidth?: boolean;
}

const Button: FC<ButtonProps> = ({
    href,
    bgSrc,
    bgHoverSrc,
    alt,
    fullWidth,
}) => {
    const [background, setBackground] = useState(bgSrc);

    const handleMouseEnter = () => {
        setBackground(bgHoverSrc);
    };

    const handleMouseLeave = () => {
        setBackground(bgSrc);
    };

    if (!href) {
        return (
            <img
                src={background}
                alt={alt}
                className={`${
                    fullWidth ? 'w-full' : ''
                } h-14 hover:cursor-pointer`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
        );
    }

    return (
        <Link to={href}>
            <img
                src={background}
                alt={alt}
                className={`${
                    fullWidth ? 'w-full' : ''
                } h-14 hover:cursor-pointer`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
        </Link>
    );
};

export default Button;
