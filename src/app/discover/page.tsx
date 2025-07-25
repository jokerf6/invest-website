import Navigator from "@/components/home/navigator/navigator.component";
import AllPageLayout from "@/components/layouts/allPage.layout";
import HomeLayout from "@/components/layouts/home.layout";
import React from "react";

export default function page() {
  return (
    <AllPageLayout>
      <Navigator current={4} />
      <HomeLayout>
        <h1>Comming Soon</h1>
      </HomeLayout>
    </AllPageLayout>
  );
}
