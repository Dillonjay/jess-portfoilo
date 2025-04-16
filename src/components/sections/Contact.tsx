import { EmailIcon, LinkedInIcon } from "../common/Icons";

const JESSE_EMAIL = "jess.romun@gmail.com";
const JESSE_LINKEDIN = "https://www.linkedin.com/in/jess-romun/";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center  py-20"
    >
      <div className="text-center">
        <h2 className="text-5xl md:text-6xl font-light">Got a project?</h2>
        <h2 className="text-5xl md:text-6xl font-light">
          Let&apos;s make it{" "}
          <span className="italic font-bold text-white">happen.</span>
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-24">
          <a href={`mailto:${JESSE_EMAIL}`} className="hover-bounce">
            <EmailIcon className="h-12 w-12" />
          </a>
          <a
            href={JESSE_LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-bounce"
          >
            <LinkedInIcon className="h-12 w-12" />
          </a>
        </div>
      </div>
    </section>
  );
}
