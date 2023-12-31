import Image from "next/image";
import "../app/globals.css"
export default function About() {
    return (
        <section className="flex flex-row py-[130px] gap-[200px] sm:py-0 about px-[50px] sm:px-[205px]">
            <div className="hidden sm:block ">
                <Image
                    className=""
                    src="/about.jpg"
                    width={384}
                    height={384}
                    alt="about"
                />
            </div>
            <div className="text-center items-center sm:items-start sm:text-left  flex flex-col justify-center">
                <h1 className="text-[#0E2368] font-semibold text-[26px] sm:text-[45px] poppins leading-[35px]">
                    About Us
                </h1>
                <h1 className="mt-[21px] mb-[16px] text-[#444957] text-[11px] sm:text-[15px] sm:w-[430px] sm:leading-[27px] openSans leading-[21px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. t has survived not only five centuries.
                </h1>
                <button className="bg-[#E23744] text-white  px-[33px] py-[5px] rounded-full sm:leading-[36px]  sm:text-[16px] text-[11px]">
                    Read More
                </button>
            </div>
        </section>
    );
}
