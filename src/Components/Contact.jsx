import { FaUser, FaEnvelope, FaTwitter, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 text-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Contact Info Card */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent" />
            <div className="relative p-8 bg-card rounded-3xl shadow-2xl border-2 border-white">
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Fill out the form and I'll get back to you as soon as possible.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <FaEnvelope className="text-primary text-xl" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">your@email.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <FaTwitter className="text-primary text-xl" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Social Media</p>
                    <p className="text-sm text-muted-foreground">@yourusername</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <FaLinkedin className="text-primary text-xl" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">linkedin.com/in/yourusername</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div>
            <div className="relative p-8 bg-card rounded-3xl shadow-2xl border-2 border-white">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <div className="flex items-center border border-white rounded-md bg-transparent">
                    <FaUser className="text-white text-3xl pl-3" />
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-transparent text-white placeholder:text-muted-foreground rounded-md focus:outline-none focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <div className="flex items-center border border-white rounded-md bg-transparent">
                    <FaEnvelope className="text-white text-3xl pl-3" />
                    <input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-transparent text-white placeholder:text-muted-foreground rounded-md focus:outline-none focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <div className="flex items-center border border-white rounded-md bg-transparent">
                    <FaPaperPlane className="text-white text-3xl pl-3" />
                    <textarea
                      id="message"
                      placeholder="Your message"
                      className="w-full px-4 py-3 bg-transparent text-white placeholder:text-muted-foreground min-h-[150px] rounded-md focus:outline-none focus:border-transparent"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 text-white bg-primary rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-primary/80 focus:outline-none focus:ring-4 focus:ring-primary/50 border-2 border-white"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
