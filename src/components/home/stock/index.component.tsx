import HomeLayout from "@/components/layouts/home.layout";
import GraphBox from "../main/graphBox.component";
import News from "../news/index.component";
import About from "./about.component";
import HeaderNav from "./headerNav.component";
import Recommendations from "./recommendations.component";
import StockCard from "./stockCard.component";
import { stocksStore } from "@/store/stocks";
import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { GetSymbolId } from "@/services/home/getSymbolId";
import { useEffect, useState } from "react";
import LoadingAi from "../collection/loadingAi";
import ContentLoader from "react-content-loader";

export default function Stock() {
  const { stocks, setStocks } = stocksStore();
  const pathName = usePathname();
  const [prop, setProp] = useState<string>("0");

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["symbolId"],
    queryFn: () => GetSymbolId(setProp, pathName.split("/").pop()!),
    // enabled: false,
  });
  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <HomeLayout>
      <HeaderNav />
      {<StockCard data={data} loading={isLoading} />}
      <GraphBox
        title="Performance"
        stock={true}
        id={prop}
        data={data}
        loading={isLoading}
      />

      <div className=" flex gap-4 mt-4 h-full  w-full xl:flex-row lg:flex-row md:flex-row flex-col ">
        <div className=" flex flex-col gap-3 h-fit ">
          {!isLoading && <About data={data} />} <Recommendations />
        </div>
        <News symbolId={pathName.split("/").pop()!} />
      </div>
    </HomeLayout>
  );
}
