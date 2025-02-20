import { FaUser, FaEnvelope, FaTwitter, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="py-20 text-black dark:text-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('contact.title')}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent" />
            <div className="relative p-8 bg-card rounded-3xl shadow-2xl border-2 dark:border-white">
              <h3 className="text-2xl font-semibold mb-4">{t('contact.contactInfo')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <FaEnvelope className="text-primary text-xl" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{t('contact.email')}</p>
                    <p className="text-sm text-muted-foreground">arijoose@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <FaTwitter className="text-primary text-xl" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{t('contact.socialMedia')}</p>
                    <p className="text-sm text-muted-foreground">@joose_arias</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <FaLinkedin className="text-primary text-xl" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">LinkedIn</p>
                    <a  href="https://www.linkedin.com/in/joosearias/" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground">linkedin.com/in/joosearias</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="relative p-8 bg-card rounded-3xl shadow-2xl border-2 dark:border-white">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    {t('contact.name')}
                  </label>
                  <div className="flex items-center border dark:border-white rounded-md bg-transparent">
                    <FaUser className="dark:text-white text-3xl pl-3" />
                    <input
                      id="name"
                      type="text"
                      placeholder={t('contact.plasholder')}
                      className="w-full px-4 py-3 bg-transparent dark:text-white placeholder:text-muted-foreground rounded-md focus:outline-none focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {t('contact.email')}
                  </label>
                  <div className="flex items-center border dark:border-white rounded-md bg-transparent">
                    <FaEnvelope className="dark:text-white text-3xl pl-3" />
                    <input
                      id="email"
                      type="email"
                      placeholder={t('contact.emailPlaceholder')}
                      className="w-full px-4 py-3 bg-transparent dark:text-white placeholder:text-muted-foreground rounded-md focus:outline-none focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    {t('contact.message')}
                  </label>
                  <div className="flex items-center border dark:border-white rounded-md bg-transparent">
                    <FaPaperPlane className="dark:text-white text-3xl pl-3" />
                    <textarea
                      id="message"
                      placeholder={t('contact.messagePlaceholder')}
                      className="w-full px-4 py-3 bg-transparent dark:text-white placeholder:text-muted-foreground min-h-[150px] rounded-md focus:outline-none focus:border-transparent"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full hover:cursor-pointer py-3 dark:text-white bg-primary rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-primary/80 focus:outline-none focus:ring-4 focus:ring-primary/50 border-2 dark:border-white"
                >
                  {t('contact.send')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
