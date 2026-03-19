import { Briefcase, Code, User } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Web Development",
    desc: "Creating responsive websites and web applications with modern framework.",
  },
  {
    icon: User,
    title: "UI/UX Design",
    desc: "Creating user-friendly interfaces and experiences for web applications.",
  },
  {
    icon: Briefcase,
    title: "Project Management",
    desc: "Overseeing projects from conception to completion, ensuring timely delivery and adherence to requirements.",
  },
];

const About = () => {
  return (
    <section id="about" className="section min-h-screen flex items-center">
      <div className="container">
        <h2 className="headline-2 mb-5 reveal-up">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal-up">
          <div className="max-w-prose mx-auto space-y-6 text-justify leading-relaxed tracking-normal text-zinc-300">
            <h3 className="text-2xl font-semibold text-white">
              Passionate Web Developer
            </h3>

            <p>
              Hi, my name is Nguyen Minh Dat. As a Front-end Developer, I’m
              always eager to learn and explore new technologies to design
              clean, responsive, and user-friendly websites. I enjoy
              transforming ideas into interactive digital experiences using
              modern tools like React and TailwindCSS. My goal is to create
              digital products that not only look great but also deliver
              meaningful and enjoyable user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 reveal-up">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={index} className="gradient-border p-6 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-zinc-600">
                      <Icon className="h-6 w-6 text-zinc-50" />
                    </div>

                    <div className="text-left">
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <p className="text-zinc-300">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
