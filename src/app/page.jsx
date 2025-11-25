import Banner from "@/Components/Banner";
import ContactSection from "@/Components/ContactSection";
import CustomerReviews from "@/Components/CustomerReviews";

import Latest from "@/Components/Latest";
import Outlet from "@/Components/Outlet";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-zinc-50 font-sans text-black">
      <Banner></Banner>
      <Latest></Latest>
      <CustomerReviews></CustomerReviews>
      <Outlet></Outlet>
      <ContactSection></ContactSection>
    </div>
  );
}
