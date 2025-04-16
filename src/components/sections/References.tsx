import Image from "next/image";

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    text: `Jess had a huge impact on both albo and Pondo. At albo she helped scale abea during a key stage. Later, she led the full design of Pondo from the ground up. She's fast, strategic, and has great taste. I trust her with design decisions and would love to work with her again.`,
    name: "Ángel Sahagún",
    title: "Founder & CEO at albo and Pondo",
    image: "/images/profile-pic.png",
  },
  {
    id: 2,
    text: `Working with Jess truly feels like teamwork. She's full of innovative ideas, open to feedback, and always brings genuine care for both the user experience and visual quality. On top of that, she's kind, easy to communicate with, and a joy to collaborate with.`,
    name: "Tania",
    title: "Sr. Product Designer at albo",
    image: "/images/profile-pic.png",
  },
  {
    id: 3,
    text: `Jess had a huge impact on both albo and Pondo. At albo she helped scale abea during a key stage. Later, she led the full design of Pondo from the ground up. She's fast, strategic, and has great taste. I trust her with design decisions and would love to work with her again.`,
    name: "Ángel Sahagún",
    title: "Founder & CEO at albo and Pondo",
    image: "/images/profile-pic.png",
  },
  {
    id: 4,
    text: `Working with Jess truly feels like teamwork. She's full of innovative ideas, open to feedback, and always brings genuine care for both the user experience and visual quality. On top of that, she's kind, easy to communicate with, and a joy to collaborate with.`,
    name: "Tania",
    title: "Sr. Product Designer at albo",
    image: "/images/profile-pic.png",
  },
];

export default function References() {
  return (
    <section
      id="references"
      className="min-h-screen  backdrop-blur-sm bg-[#1A1A1A]/1 text-snow-base py-20"
    >
      <div>
        <h2 className="text-5xl font-bold mb-20 uppercase">References</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#1A1A1A] rounded-lg p-12 flex flex-col items-center text-center"
            >
              <div className="w-[116px] h-[116px] rounded-full overflow-hidden mb-8">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={116}
                  height={116}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="italic font-light text-xl text-gray-200 mb-8 whitespace-pre-line">
                {testimonial.text}
              </p>
              <div>
                <div className="font-bold text-xl text-white">
                  {testimonial.name}
                </div>
                <div className="text-gray-400 text-lg">{testimonial.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
