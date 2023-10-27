import { H3 } from "./Typography";
import Image from "next/image";
import Slider from "./Slider";


interface CardProps {
  title: string;
  subtitle?: string;
  photos: string[];
}

export default function Card({ title, subtitle, photos }: CardProps) {
  return (
    <div className="shadow bg-white dark:bg-gray-800 w-full rounded-xl flex flex-col sm:w-[calc(50vw-37px)] lg:w-[calc(33vw-30px)] xl:w-[calc(25vw-30px)] 2xl:w-96">
      <div className="w-full max-h-80 md:h-96 ">
        <Slider photos={photos} />
      </div>
      <div className="gap-2 p-4">
        <H3 classes="italic break-normal">{title}</H3>
        <div className="">{subtitle}</div>
      </div>
    </div>
  );
}
