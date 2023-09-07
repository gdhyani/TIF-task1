import About from "@/components/about";
import Article from "@/components/article";
import Footer from "@/components/footer";
import Image from "next/image";

export default function Home() {
    return (
        <main className="">
            {/* main section */}
            <section className="min-h-screen">
                <div className="flex flex-row justify-between">
                    <Image
                        className="sm:block hidden absolute top-[33px] left-[100px] w-[107px] h-[83px]"
                        src="/truck.svg"
                        width={100}
                        height={100}
                        alt="truck.svg"
                    />
                    <button className="z-20 text-white h-[31px] w-[87.891px] sm:w-auto sm:py-4  flex text-[11px] sm:text-[16px] sm:px-[26px] rounded-full border-2 justify-center items-center absolute top-[32px] right-[12px] font-semibold">
                        Get In Touch
                    </button>
                </div>
                <div className="flex flex-col-reverse sm:flex-row">
                    <div className="sm:w-1/2 text-center sm:text-left sm:mt-[227px] sm:px-[100px] px-[67px]">
                        <h1 className="text-[#0E2368] sm:w-4/6 text-[38px] sm:text-[62px] sm:leading-[69px] font-bold leading-[46px]">Discover the <span className="text-[#E23744]">Best</span> Food and Drinks</h1>
                        <h1 className="mt-[21px] text-[#444957] text-[11px] sm:text-[16.5px] sm:leading-[27.4px] sm:w-4/6 sm:pr-4 openSans font-normal leading-[18px]">Naturally made Healthcare Products for the better care & support of your body.</h1>

                        <button className="bg-[#E23744] rounded-full sm:py-[14px] sm:px-[34px] py-[12px] px-[30px] sm:mt-[55px] mt-[28px] text-white">
                            Explore Now!
                        </button>
                    </div>
                    <div className="sm:w-1/2">
                        <Image
                            className="z-10  ml-auto mb-[63px] sm:mb-[150px]"
                            src="/vector.svg"
                            width={752}
                            height={839}
                            alt="vector"
                        />
                        <Image
                            className="-z-10  absolute top-0 right-0"
                            src="/main.svg"
                            width={735}
                            height={804}
                            alt="vector"
                        />
                    </div>
                </div>
            </section>

            <About />
            <Article/>
            <Footer />
        </main>
    );
}
{
    /* <section className="min-h-screen">
                <div className="">
                    <Image
                        className="absolute top-[33px] left-[100px] w-[107px] h-[83px]"
                        src="/truck.svg"
                        width={100}
                        height={100}
                        alt="truck.svg"
                    />
                    <button className="z-20 text-white px-[26px] py-[10px] rounded-3xl border absolute top-[32px] right-[12px]">
                        Get In Touch
                    </button>
                    <Image
                        className="absolute top-0 right-0"
                        src="/main.svg"
                        alt="main.svg"
                        width={735}
                        height={804}
                    />
                    <Image
                        className="absolute top-0 right-0"
                        src="/vector.svg"
                        alt="vector.svg"
                        width={752}
                        height={839}
                    />
                    <div className="absolute w-[370px] top-[227px] left-[100px] ">
                        <h1 className="text-[#0E2368] leading-[69px] font-bold text-[62px]">
                            Discover the{" "}
                            <span className="text-[#E23744]">Best</span> Food
                            and Drinks
                        </h1>
                        <h1 className="mt-[26px] text-[#444957] leading-[27.408px] text-[16.445px] font-normal">
                            Naturally made Healthcare Products for the bettter
                            care & support of your body.
                        </h1>
                        <button className="bg-[#E23744] rounded-full py-[14px] px-[34px] mt-[55px] text-white">
                            Explore Now!
                        </button>
                    </div>
                </div>
            </section> */
}
