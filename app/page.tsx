import Header from "@/components/Settings/Header";
import MyTabs from "@/components/Settings/Tabs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-[100vh] pt-10 px-4 lg:px-20">
      <Header/>
      <MyTabs/>

    </div>
  );
}
