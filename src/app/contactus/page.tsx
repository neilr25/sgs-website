export default function ContactUsPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8 pt-12 pb-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy tracking-tight leading-tight">
          Contact Us
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8 pb-16">
        <div className="border-t border-gray-200 mb-10" />

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="flex-1 max-w-2xl">
            <form action="#" method="POST" className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold text-navy mb-2"
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm text-sm text-[var(--sgs-dark)] bg-white focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors"
                    placeholder="First Name"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-semibold text-navy mb-2"
                  >
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm text-sm text-[var(--sgs-dark)] bg-white focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-navy mb-2"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm text-sm text-[var(--sgs-dark)] bg-white focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors"
                  placeholder="Email Address"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-navy mb-2"
                >
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm text-sm text-[var(--sgs-dark)] bg-white focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-navy mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm text-sm text-[var(--sgs-dark)] bg-white focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors resize-y"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="bg-navy text-white px-8 py-3 font-semibold text-sm tracking-wide uppercase hover:bg-[var(--sgs-navy-light)] transition-colors rounded-sm"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Office Info */}
          <div className="lg:w-80 xl:w-96 shrink-0">
            <div className="border-t-2 border-teal pt-6">
              <h2 className="text-xl md:text-2xl font-bold text-navy mb-4">
                Our Office
              </h2>
              <div className="text-[var(--sgs-gray)] leading-relaxed text-sm">
                <p className="mb-2">
                  1st Floor, McCallum House
                  <br />
                  Watermark Business Park
                  <br />
                  375 Govan Road
                  <br />
                  Glasgow
                  <br />
                  G51 2SE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}