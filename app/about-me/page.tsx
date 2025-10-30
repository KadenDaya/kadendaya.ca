import Image from "next/image";
import Aboutme from "@/components/main/Aboutme";
import Education from "@/components/main/Education";

export default function AboutMePage() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Aboutme />
        <Education />

      </div>
    </main>
  );
}
