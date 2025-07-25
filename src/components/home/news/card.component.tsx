import { getTimeDifference } from "@/functions/dateDifference";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card(props: { item: any }) {
  const { item } = props;
  return (
    <Link
      target="_blank"
      href={item["url"]}
      className=" flex gap-2 cursor-pointer"
    >
      <Image
        src={item.image}
        alt="news Image"
        width={42}
        height={42}
        className=" rounded-lg h-[42px] w-[42px]"
      />
      <div className=" flex flex-col gap-1">
        <h1
          style={{ color: "#101828" }}
          className=" font-semibold text-[12px] overflow-hidden"
        >
          {item["title"]}
        </h1>
        <div className=" flex gap-1 xl:items-center lg:items-center items-start xl:flex-row lg:flex-row flex-col">
          <span
            className=" font-semibold text-[12px]"
            style={{ color: "#475467" }}
          >
            {item["site"]}
          </span>
          <div
            className=" w-2 h-2 rounded-full xl:flex lg:flex  hidden"
            style={{ backgroundColor: "#D9D9D9" }}
          ></div>
          <span style={{ color: "#475467" }} className=" text-[12px]">
            {getTimeDifference(item["publishedDate"])}
          </span>
        </div>
      </div>
    </Link>
  );
}
