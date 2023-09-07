import Image from "next/image";
import "../app/globals.css";
export default function Footer() {
    return (
        <section className="flex flex-col sm:flex-row bg-[#F8F8F8] px-[42px] sm:px-[104px] sm:py-[84px] justify-between">
            <div className=" flex justify-center pt-[52px] sm:pt-0 sm:items-center mb-[42px] sm:mb-0">
                <Image
                    className=" w-[75px] sm:w-[161px] sm:h-[125px]"
                    src="/truck.svg"
                    width={300}
                    height={300}
                    alt="truck.svg"
                />
            </div>
            <div className="mb-[29px] flex flex-col  sm:w-[217px] sm:gap-[15px]">
                <h1 className="text-[#0E2368] tracking-[0.473px] poppins text-[15.771px] sm:text-[18.843px] font-semibold leading-[34.804px]">
                    Contact Us
                </h1>
                <h1 className="text-[#646874]  sm:w-[250px] text-[8.762px] sm:text-[14.656px] pr-[19px] font-normal leading-[12.266px] sm:leading-[23.031px]">
                    Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near
                    YTM Market, XYZ-343434
                </h1>
                <h1 className="text-[#646874] text-[8.762px] font-normal sm:text-[14.656px] leading-[29.45px]">
                    example2020@gmail.com
                </h1>
                <h1 className="text-[#646874] text-[8.762px] font-normal sm:text-[14.656px] leading-[29.45px]">
                    (904) 443-0343
                </h1>
            </div>
            <div className="sourceSans flex flex-col sm:gap-[15px]">
                <h1 className="text-[#0E2368] tracking-[0.473px] poppins text-[15.771px] sm:text-[18.843px] font-semibold leading-[29.45px]">
                    More
                </h1>
                <h1 className="text-[#646874] text-[8.762px] sm:text-[14.656px] font-normal leading-[29.45px]">
                    About Us
                </h1>
                <h1 className="text-[#646874] text-[8.762px] sm:text-[14.656px] font-normal leading-[29.45px]">
                    Products
                </h1>
                <h1 className="text-[#646874] text-[8.762px] sm:text-[14.656px] font-normal leading-[29.45px]">
                    Carrer
                </h1>
                <h1 className="text-[#646874] text-[8.762px] sm:text-[14.656px] font-normal leading-[29.45px]">
                    Contact Us
                </h1>
            </div>
            <div className="flex flex-col-reverse sm:justify-between sm:flex-col justify-center pb-[34.65px] sm:pb-[0px]">
                <div className="flex flex-col text-center ">
                    <h1 className="hidden sm:block poppins tracking-[0.473px] text-[#0E2368] sourceSans text-[15.771px] sm:text-[19px] font-semibold leading-[29.45px]">
                        Social Links
                    </h1>

                    <div className="flex mt-[10px] flex-row justify-center text-center gap-[22px] ">
                        <Image
                            className="w-[12px] sm:w-auto"
                            src="/insta.svg"
                            width={21}
                            height={21}
                            alt="icon"
                        />
                        <Image
                            className="w-[12px] sm:w-auto"
                            src="/twitter.svg"
                            width={21}
                            height={21}
                            alt="icon"
                        />
                        <Image
                            className="w-[12px] sm:w-auto"
                            src="/face.svg"
                            width={21}
                            height={21}
                            alt="icon"
                        />
                    </div>
                </div>

                <h1 className="roboto text-center text-[#828b9c] text-[8.762px] sm:text-[14.656px] font-normal leading-[32.127px]">
                    © 2022 Food Truck Example
                </h1>
            </div>
        </section>
    );
}
