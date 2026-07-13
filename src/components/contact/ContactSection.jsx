import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <p className="text-blue-600 font-semibold uppercase tracking-widest">
              Contact Us
            </p>

            <h2 className="text-5xl font-bold mt-4 text-slate-800">
              Got a Question?
            </h2>

            <p className="mt-6 text-slate-600 leading-8">
              We'd love to hear from you.
              Send us your enquiry and our team
              will get back to you shortly.
            </p>

            <div className="mt-12 space-y-6">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  📧
                </div>

                <div>
                  <p className="font-semibold">
                    Email
                  </p>

                  <p className="text-slate-500">
                    support@company.com
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  📞
                </div>

                <div>
                  <p className="font-semibold">
                    Phone
                  </p>

                  <p className="text-slate-500">
                    +91 99999 99999
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Right */}

          <ContactForm />

        </div>

      </div>
    </section>
  );
};

export default ContactSection;