import Image from "next/image";

interface PhoneFrameProps {
  gifSrc: string;
  alt?: string;
  className?: string;
}

export default function PhoneFrame({
  gifSrc,
  alt = "Phone demo",
  className = "",
}: PhoneFrameProps) {
  return (
    <div className={`relative group ${className}`}>
      {/* iPhone Frame */}
      <div className="relative mx-auto w-[280px] h-[580px] bg-graphite-base rounded-[3rem] border-[14px] border-graphite-darker shadow-xl transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl animate-float">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[30px] bg-graphite-darker rounded-t-[1rem] z-10" />

        {/* Screen Content */}
        <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
          <Image
            src={gifSrc}
            alt={alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            unoptimized // This is important for GIFs
          />
        </div>
      </div>
    </div>
  );
}
