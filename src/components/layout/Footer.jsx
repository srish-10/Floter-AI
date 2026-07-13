import {
  footerSections,
  contactInfo,
} from "../../data/footer";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-[#1e293b] via-[#768fd6] to-[#1e293b]  text-white">

      {/* Top */}

      <div className="max-w-7xl mx-auto px- py-5">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-14">

          {/* Company */}

          <div>

            <p className="text-2xl font-bold ">
              LOGO
            </p>

            <p className="mt-8 leading-8">
              Building modern digital experiences with
              scalable architecture, beautiful interfaces,
              and innovative technology.
            </p>

          </div>

          {/* Dynamic Sections */}

          {footerSections.map((section) => (

            <div key={section.title}>

              <h3 className="text-xl font-semibold mb-6">
                {section.title}
              </h3>

              <ul className="space-y-4">

                {section.links.map((link) => (

                  <li key={link.name}>

                    <a
                      href={link.href}
                      className="
                      
                        hover:text-blue-400
                        transition-colors
                        duration-300
                      "
                    >
                      {link.name}
                    </a>

                  </li>

                ))}

              </ul>

            </div>

          ))}

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              {contactInfo.map((item) => (

                <div
                  key={item.value}
                  className="flex items-center gap-4"
                >

                  <span className="text-xl">
                    {item.icon}
                  </span>

                  <span >
                    {item.value}
                  </span>

                </div>

              ))}

            </div>

        

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-white text-sm">
            © {year} LOGO. All Rights Reserved.
          </p>

          <div className="flex gap-8 text-sm">

            <a
              href="#"
              className="text-white hover:text-blue-400 transition"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-white hover:text-blue-400 transition"
            >
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;