"use client";
import Image from "next/image";
import { useState } from "react";
export default function Article() {
    const list1 = [
        "Grilled Tomatoes at Home",
        "Snacks for Travel",
        "Post-workout Recipes",
    ];
    const list2 = [
        "How to Grill Corn",
        "Crunchwrap Supreme",
        "Broccoli Cheese Soup",
    ];
    const [page, setPage] = useState(1);
    return (
        <section className=" transition-all sm:pt-[158px] pt-[132px] sm:px-[108px] px-[52px]">
            <div className="sm:mb-[41px] mb-[23px]">
                <h1 className="sm:leading-[42px] poppins text-[#0E2368] font-semibold sm:text-[56px] text-[28px] text-center sm:text-left">
                    Latest Articles
                </h1>
            </div>
            <div
                className={`${
                    page === 1 ? "flex" : "hidden"
                } transition-all sm:mb-[65px]  flex-col sm:justify-between sm:flex-row`}
            >
                {list1.map((el) => (
                    <div className=" border sm:border-[1.37px] border-[#373737] sm:border-[#93a2d361] mb-[60px] sm:mb-0 rounded-3xl p-[33px] text-center sm:text-left sm:w-[381px] ">
                        <Image
                            className="rounded-3xl mb-[39px]   sm:w-[326px]"
                            src={`/img (${list1.indexOf(el) + 1}).svg`}
                            width={1000}
                            height={1000}
                            alt="img"
                        />
                        <div className="sm:mx-[10px]">
                            <h1 className="text-[#0E2368] poppins sm:leading-[27px] font-bold sm:text-[20px] text-[16px] leading-[35px] sm:mb-[14px]">
                                {el}
                            </h1>
                            <p className="hidden text-left sm:block sm:text-[15px] text-[12px] leading-[22px] mb-[26px] sm:mb-[30.5px] text-[#444957] font-normal sm:leading-[27px]">
                                PLorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard...
                            </p>
                            <p className="block text-left sm:hidden openSans sm:text-[15px] text-[12px] leading-[22px] mb-[26px] sm:mb-[30.5px] text-[#444957] font-normal sm:leading-[27px]">
                                PLorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever
                                since the 1500s, when an unknown printer took a
                                galley....
                            </p>
                            <button className="rounded-[21px] sourceSans text-[11px] sm:text-[16.445px] tracking-[0.33px] py-1 border-2 sm:border px-[33px] border-[#424961] text-[#424961] sm:leading-[35.593px] sm:py-[3.141px] sm:mb-[13.1px] sm:px-[26.171px] font-semibold">
                                Read More
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div
                className={`${
                    page === 2 ? "flex " : "hidden"
                } transition-all sm:mb-[65px] flex-col sm:justify-between sm:flex-row`}
            >
                {list2.map((el) => (
                    <div className=" border sm:border-[1.37px] border-[#373737] sm:border-[#93a2d361] mb-[60px] sm:mb-0 rounded-3xl p-[33px] text-center sm:text-left sm:w-[381px] ">
                        <Image
                            className="rounded-3xl mb-[39px]   sm:w-[326px]"
                            src={`/img (${list2.indexOf(el) + 4}).svg`}
                            width={1000}
                            height={1000}
                            alt="img"
                        />
                        <div className="sm:mx-[10px]">
                            <h1 className="text-[#0E2368] poppins sm:leading-[27px] font-bold sm:text-[20px] text-[16px] leading-[35px] sm:mb-[14px]">
                                {el}
                            </h1>
                            <p className="hidden text-left sm:block sm:text-[15px] text-[12px] leading-[22px] mb-[26px] sm:mb-[30.5px] text-[#444957] font-normal sm:leading-[27px]">
                                PLorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard...
                            </p>
                            <p className="block text-left sm:hidden openSans sm:text-[15px] text-[12px] leading-[22px] mb-[26px] sm:mb-[30.5px] text-[#444957] font-normal sm:leading-[27px]">
                                PLorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever
                                since the 1500s, when an unknown printer took a
                                galley....
                            </p>
                            <button className="rounded-[21px] sourceSans text-[11px] sm:text-[16.445px] tracking-[0.33px] py-1 border-2 sm:border px-[33px] border-[#424961] text-[#424961] sm:leading-[35.593px] sm:py-[3.141px] sm:mb-[13.1px] sm:px-[26.171px] font-semibold">
                                Read More
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-center gap-2 sm:mb-[65px] mb-[57px]">
                <button
                    className={` rounded-xl ${page === 1 ? "opacity-50" : ""}`}
                    onClick={() => {
                        page === 1 ? "" : setPage(page - 1);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[14px] sm:w-[28px]"
                        width="28"
                        height="29"
                        viewBox="0 0 28 29"
                        fill="none"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M18.4419 22.8523C18.9949 22.5393 19.1753 21.7427 18.8083 21.234C18.706 21.0921 17.1257 19.6312 15.2964 17.9875L11.9704 14.999L15.2973 12.0101C17.127 10.3662 18.7074 8.90503 18.8093 8.76312C18.9289 8.59653 18.9947 8.35683 18.9951 8.08643C18.9956 7.71445 18.9549 7.6306 18.6296 7.33388C18.2955 7.02916 18.2193 7 17.7585 7H17.2535L13.1268 10.7639L9 14.5277V14.959C9 15.2142 9.06299 15.4772 9.15418 15.6029C9.37757 15.9112 16.5225 22.452 16.9588 22.7478C17.3877 23.0386 18.0326 23.084 18.4419 22.8523Z"
                            fill="#424961"
                        />
                        <rect
                            x="0.5"
                            y="0.5"
                            width="27"
                            height="28"
                            rx="4.5"
                            stroke="#424961"
                        />
                    </svg>
                </button>
                <h2 className="text-[#424961] text-[12px] sm:text-[22px]  font-normal leading-[27.218px]">
                    {page}/2
                </h2>
                <button
                    className={` rounded-xl ${page === 2 ? "opacity-50" : ""}`}
                    onClick={() => {
                        page === 2 ? "" : setPage(page + 1);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[14px] sm:w-[28px]"
                        width="28"
                        height="29"
                        viewBox="0 0 28 29"
                        fill="none"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9.55811 7.1477C9.00514 7.46068 8.82474 8.25727 9.19166 8.766C9.29397 8.9079 10.8743 10.3688 12.7036 12.0125L16.0296 15.001L12.7027 17.9899C10.873 19.6338 9.29256 21.095 9.19072 21.2369C9.07115 21.4035 9.00533 21.6432 9.00495 21.9136C9.00438 22.2855 9.04512 22.3694 9.37036 22.6661C9.70446 22.9708 9.78065 23 10.2415 23H10.7465L14.8732 19.2361L19 15.4723V15.041C19 14.7858 18.937 14.5228 18.8458 14.3971C18.6224 14.0888 11.4775 7.54798 11.0412 7.2522C10.6123 6.96142 9.96737 6.916 9.55811 7.1477Z"
                            fill="#424961"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9.55811 7.1477C9.00514 7.46068 8.82474 8.25727 9.19166 8.766C9.29397 8.9079 10.8743 10.3688 12.7036 12.0125L16.0296 15.001L12.7027 17.9899C10.873 19.6338 9.29256 21.095 9.19072 21.2369C9.07115 21.4035 9.00533 21.6432 9.00495 21.9136C9.00438 22.2855 9.04512 22.3694 9.37036 22.6661C9.70446 22.9708 9.78065 23 10.2415 23H10.7465L14.8732 19.2361L19 15.4723V15.041C19 14.7858 18.937 14.5228 18.8458 14.3971C18.6224 14.0888 11.4775 7.54798 11.0412 7.2522C10.6123 6.96142 9.96737 6.916 9.55811 7.1477Z"
                            fill="#424961"
                        />
                        <rect
                            x="0.5"
                            y="0.5"
                            width="27"
                            height="28"
                            rx="4.5"
                            stroke="#424961"
                        />
                    </svg>
                </button>
            </div>
        </section>
    );
}
