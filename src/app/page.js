import About from "@/components/about";
import Footer from "@/components/footer";
import Image from "next/image";

export default function Home() {
    return (
        <main className="">
            {/* main section */}
            {/* <section className="">
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
                        <h1 className="mt-[26px] text-[#444957] leading-[27.408px] text-[16.445px] font-normal">Naturally made Healthcare Products for the bettter care & support of your body.</h1>
                        <button className="bg-[#E23744] rounded-full py-[14px] px-[34px] mt-[55px] text-white">Explore Now!</button>
                    </div>
                </div>
            </section> */}
            <About/>
            <Footer/>
        </main>
    );
}
