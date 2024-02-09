import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export const Footer: FC = () => {
    return (
        <>
            <div className="m-8 flex md:flex-row flex-col-reverse justify-center md:items-end items-center lg:gap-16 gap-8">
                <div className="flex flex-col gap-6 items-center mx-8">
                    <Link to={'/'}>
                        <img
                            src="/assets/logo_footer.svg"
                            alt="Logo"
                            className="md:w-36 w-24"
                        />
                    </Link>
                    <div className="flex gap-4">
                        <a
                            href="https://www.google.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="/assets/icon_telegram.svg"
                                alt="Telegram"
                                className="w-8 h-8"
                            />
                        </a>
                        <a
                            href="https://www.google.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="/assets/icon_facebook.svg"
                                alt="Facebook"
                                className="w-8 h-8"
                            />
                        </a>
                        <a
                            href="https://www.google.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="/assets/icon_instagram.svg"
                                alt="Instagram"
                                className="w-8 h-8"
                            />
                        </a>
                        <a
                            href="https://www.google.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="/assets/icon_twitter.svg"
                                alt="Twitter"
                                className="w-8 h-8"
                            />
                        </a>
                        <a
                            href="https://www.google.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="/assets/icon_discord.svg"
                                alt="Discord"
                                className="w-8 h-8"
                            />
                        </a>
                        <a
                            href="https://www.google.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="/assets/icon_github.svg"
                                alt="Github"
                                className="w-8 h-8"
                            />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-8 items-center tracking-[.2em] mx-8">
                    <Button
                        bgSrc="/assets/btn_whitepaper.svg"
                        bgHoverSrc="/assets/btn_whitepaper_hover.svg"
                        href="/whitepaper"
                        alt="whitepaper"
                    />
                    <div className="text-center columns-1 md:columns-2 lg:columns-3 font-mono text-sm lg:text-xl text-primary">
                        <div className="p-2">
                            <Link to={'/'}>_BUY</Link>
                        </div>
                        <div className="p-2">
                            <Link to={'/'}>_LISTING</Link>
                        </div>
                        <div className="p-2">
                            <Link to={'/'}>_COMMUNITY</Link>
                        </div>
                        <div className="p-2">
                            <Link to={'/'}>_ECOSYSTEM</Link>
                        </div>
                        <div className="p-2">
                            <Link to={'/'}>_AGREEMENT</Link>
                        </div>
                        <div className="p-2">
                            <Link to={'/'}>_CONTACT</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-secondary h-12"></div>
        </>
    );
};
