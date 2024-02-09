import { FC, useState } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import CustomParticles from '../components/CustomParticles';
import Button from '../components/Button';

const ContactUS: FC = () => {
    const [mode, setMode] = useState(0);
    return (
        <div className="contactus relative flex flex-col home">
            <CustomParticles />
            <div className="flex flex-col min-h-screen">
                <div>
                    <Header />
                </div>
                <div className="grow text-primary p-4">
                    <div className="mt-12">
                        <p className="text-xl md:text-4xl text-secondary text-center font-body">
                            C O N T A C T <span className="px-3"></span> U S
                        </p>
                        <p className="text-lg md:text-2xl text-primary text-center">
                            Drop us a line and tell us what's on your mind!
                        </p>
                    </div>

                    <div className="text-sm md:text-md text-primary flex items-center justify-center mt-12">
                        <div className="flex flex-col items-center w-2/3 xl:w-1/3">
                            <div className="w-full">
                                <p>Name*</p>
                                <p>
                                    <input className=" py-1 w-full border border-primary bg-transparent" />
                                </p>
                            </div>

                            <div className="mt-4 w-full">
                                <p>Email*</p>
                                <p>
                                    <input className=" py-1 w-full border border-primary bg-transparent" />
                                </p>
                            </div>

                            <div className="my-4 w-full">
                                <p>Message*</p>
                                <p>
                                    <textarea className=" py-1 w-full border border-primary bg-transparent" />
                                </p>
                            </div>
                            <div className="w-[90%]">
                                <Button
                                    bgSrc="/assets/btn_send.svg"
                                    bgHoverSrc="/assets/btn_send_hover.svg"
                                    alt="Send"
                                    fullWidth
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-32">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default ContactUS;
