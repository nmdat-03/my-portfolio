import githubIcon from "../icons/github.svg";
import facebookIcon from "../icons/facebook.svg";
import zaloIcon from "../icons/zalo.svg";
import instagramIcon from "../icons/instagram.svg";

const socialLinks = [
  { href: "https://github.com/nmdat-03", icon: githubIcon, alt: "GitHub" },
  {
    href: "https://web.facebook.com/n.m.dat2910/",
    icon: facebookIcon,
    alt: "Facebook",
  },
  { href: "https://zalo.me/0862012063", icon: zaloIcon, alt: "Zalo" },
  {
    href: "https://www.instagram.com/_nmdat03_/",
    icon: instagramIcon,
    alt: "Instagram",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section min-h-screen flex items-center">
      <div className="container lg:grid grid-cols-2 lg:items-stretch">
        <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
          <h2 className="headline-2 mb-8 lg:max-w-[12ch] reveal-up">
            Contact me
          </h2>

          <div className="flex items-center gap-2">
            {socialLinks.map(({ href, icon, alt }, key) => (
              <a
                key={key}
                href={href}
                target="_blank"
                className="w-16 h-16 grid place-items-center ring-inset ring-1 ring-zinc-50 rounded-lg transition-[background-color, color] hover:bg-zinc-50/10 hover:shadow-md hover:shadow-white transition-all duration-300 reveal-up"
              >
                {icon ? (
                  <img src={icon} alt={alt} className="w-12 h-12" />
                ) : (
                  alt
                )}
              </a>
            ))}
          </div>
        </div>

        <form action="" method="POST" className="xl:pl-10 2xl:pl-20">
          <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
            <div className="mb-4">
              <label htmlFor="name" className="label reveal-up">
                Name
              </label>

              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                placeholder="Your name"
                className="text-field reveal-up"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="label reveal-up">
                Email
              </label>

              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                placeholder="youremail@example.com"
                className="text-field reveal-up"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="label reveal-up">
              Message
            </label>

            <textarea
              name="message"
              id="message"
              required
              placeholder="Your message"
              className="text-field resize-y min-h-32 max-h-80 reveal-up"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary [&]:max-w-full w-full justify-center reveal-up"
          >
            <span className="text-lg font-normal">Send Message</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
