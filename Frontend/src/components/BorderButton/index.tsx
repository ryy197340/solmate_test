import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

interface BorderButtonProps {
    text: string;
    mode: number;
}
const themes = [
    {
        background_url: '/assets/Button_Background1.svg',
        background_hover_url: '/assets/Button_Background1_hover.svg',
        color: 'text-white',
    },
    {
        background_url: '/assets/Button_Background2.svg',
        background_hover_url: '/assets/Button_Background2_hover.svg',
        color: 'text-black',
    },
];
export default function BorderButton({ text, mode }: BorderButtonProps) {
    const [clicked, setClicked] = useState<boolean>(false);
    const [background, setBackground] = useState(
        themes[mode % 2 || 0].background_url
    );

    const handleMouseEnter = () => {
        setBackground(themes[mode % 2 || 0].background_hover_url);
    };
    const handleMouseLeave = () => {
        setBackground(themes[mode % 2 || 0].background_url);
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="m-2 relative inline-block hover:cursor-pointer text-sm"
        >
            <img src={background} style={{ width: '160px', height: '50px' }} />
            <div
                className={`flex items-center justify-center absolute left-0 top-[-3px] w-full h-full ${
                    themes[mode % 2 || 0].color
                }`}
            >
                {text || 'Button'}
            </div>
        </div>
    );
}
