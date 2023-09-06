import Image from "next/image";
import "../app/globals.css";
export default function Footer() {
    return (
        <section className="flex flex-col sm:flex-row bg-[#F8F8F8] px-[42px] sm:px-[104px] sm:py-[84px] justify-between">
            <div className=" flex justify-center pt-[52px] sm:pt-0 sm:items-center mb-[42px] sm:mb-0">
                <Image
                    className="w-[107px] h-[83px]"
                    src="/truck.svg"
                    width={100}
                    height={100}
                    alt="truck.svg"
                />
            </div>
            <div className="mb-[29px] roboto sm:w-[217px]">
                <h1 className="text-[#0E2368]  text-[15.771px] font-semibold leading-[34.804px]">
                    Contact Us
                </h1>
                <h1 className="text-[#646874] sm:w-[160px] text-[8.762px] pr-[19px] font-normal leading-[12.266px]">
                    Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near
                    YTM Market, XYZ-343434
                </h1>
                <h1 className="text-[#646874] text-[8.762px] font-normal leading-[29.45px]">
                    example2020@gmail.com
                </h1>
                <h1 className="text-[#646874] text-[8.762px] font-normal leading-[29.45px]">
                    (904) 443-0343
                </h1>
            </div>
            <div className="sourceSans">
                <h1 className="text-[#0E2368] text-[15.771px] font-semibold leading-[29.45px]">
                    More
                </h1>
                <h1 className="text-[#646874] text-[8.762px] font-normal leading-[29.45px]">
                    About Us
                </h1>
                <h1 className="text-[#646874] text-[8.762px] font-normal leading-[29.45px]">
                    Products
                </h1>
                <h1 className="text-[#646874] text-[8.762px] font-normal leading-[29.45px]">
                    Carrer
                </h1>
                <h1 className="text-[#646874] text-[8.762px] font-normal leading-[29.45px]">
                    Contact Us
                </h1>
            </div>
            <div className="flex flex-col-reverse sm:justify-between sm:flex-col justify-center pb-[34.65px] sm:pb-[0px]">
                <div className="flex flex-col text-center ">
                    <h1 className="hidden sm:block text-[#0E2368] text-[15.771px] font-semibold leading-[29.45px]">
                        Social Links
                    </h1>

                    <div className="flex flex-row justify-center text-center gap-[22px] ">
                        <Image
                            src="/insta.svg"
                            width={12}
                            height={12}
                            alt="icon"
                        />
                        <Image
                            src="/twitter.svg"
                            width={12}
                            height={12}
                            alt="icon"
                        />
                        <Image
                            src="/face.svg"
                            width={12}
                            height={12}
                            alt="icon"
                        />
                    </div>
                </div>

                <h1 className="roboto text-center text-[#828b9c] text-[8.762px] font-normal leading-[32.127px]">
                    © 2022 Food Truck Example
                </h1>
            </div>
        </section>
    );
}
