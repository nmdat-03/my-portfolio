import avatar from "../assets/avatar.jpg";
import { ButtonPrimary, ButtonOutline } from "./Button";
import { Download, User } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        {/* LEFT SIDE */}
        <div>
          <h2 className="headline-1">Hi, I'm NguyenDat</h2>
          <h2 className="typing-headline mt-5 mb-8 lg:mb-10">
            <TypeAnimation
              sequence={[
                "Front-end Developer",
                1500, // dừng 1.5s
                "", // xóa
                500, // chờ 0.5s
                "Software Engineer",
                1500,
                "", // xóa
                500,
              ]}
              speed={10} // tốc độ gõ (ms cho mỗi ký tự)
              deletionSpeed={10} // tốc độ xóa
              repeat={Infinity} // lặp vô hạn
              wrapper="span"
              className="inline-block"
            />
          </h2>

          <p className="mb-8 text-zinc-300">
            I enjoy creating simple, modern, and responsive websites that
            provide great user experiences.
          </p>

          <div className="flex items-center gap-5 mb-10">
            <ButtonPrimary label="Download CV" icon={<Download />} />
            <ButtonOutline href="#about" label="About Me" icon={<User />} />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <figure className="w-full max-w-[480px] rounded-xl overflow-hidden">
            <img
              src={avatar}
              alt="avatar"
              className="w-full h-auto object-cover rounded-xl"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
