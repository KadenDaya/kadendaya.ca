import Image from "next/image";
import Aboutme from "@/components/main/Aboutme";

export default function AboutMePage() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Aboutme />
        

      </div>
    </main>
  );
}
