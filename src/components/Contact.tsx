import { useState } from 'react';
import { Mail, Linkedin, Github, Send, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export function Contact() {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !senderEmail.trim() || !message.trim()) {
      setStatusMessage('Please fill in your name, email, and message.');
      return;
    }

    const emailSubject = encodeURIComponent(subject.trim() || `Portfolio Inquiry from ${senderName}`);
    const emailBody = encodeURIComponent(
      `Hello Sumit,\n\n${message}\n\nFrom: ${senderName} (${senderEmail})`
    );

    window.location.href = `mailto:${profileData.email}?subject=${emailSubject}&body=${emailBody}`;
    setStatusMessage('Launching your email client to send the message.');
  };

  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-100">
            Contact
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
            Reach out regarding project collaborations, engineering opportunities, or technical inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Actions Column */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-xl bg-white/90 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-4">
              <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-200">
                Direct Channels
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Feel free to start a conversation via email or connect professionally on LinkedIn.
              </p>

              <div className="pt-2 space-y-2.5">
                <a
                  id="btn-direct-email-launch"
                  href={`mailto:${profileData.email}`}
                  className="w-full px-4 py-2.5 rounded-lg bg-neutral-950 hover:bg-neutral-850 text-white dark:bg-neutral-100 dark:hover:bg-white dark:text-neutral-950 text-xs font-medium transition-colors flex items-center justify-between shadow-xs cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-neutral-300 dark:text-neutral-800" />
                    <span>Send an Email</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  id="btn-linkedin-profile"
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-neutral-900 hover:bg-slate-50 dark:hover:bg-neutral-850 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800 text-xs font-medium transition-colors flex items-center justify-between shadow-xs"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                    <span>Connect on LinkedIn</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400" />
                </a>

                <a
                  id="btn-github-profile"
                  href={profileData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-neutral-900 hover:bg-slate-50 dark:hover:bg-neutral-850 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800 text-xs font-medium transition-colors flex items-center justify-between shadow-xs"
                >
                  <span className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
                    <span>View GitHub Repositories</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400" />
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/70 dark:bg-neutral-900/30 border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-600 dark:text-neutral-400 space-y-1 shadow-xs">
              <span className="text-neutral-500 dark:text-neutral-500 block uppercase text-[10px]">Location Bases</span>
              <p className="text-neutral-800 dark:text-neutral-300 font-sans">Samastipur, Bihar &bull; Bengaluru, Karnataka</p>
            </div>

          </div>

          {/* Direct Email Drafter Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSendMessage}
              className="p-6 sm:p-8 rounded-xl bg-white/90 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-4"
            >
              <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-200 pb-2 border-b border-neutral-200/80 dark:border-neutral-800">
                Compose Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="contact-sender-name" className="text-xs text-neutral-600 dark:text-neutral-400 block font-mono">
                    Your Name *
                  </label>
                  <input
                    id="contact-sender-name"
                    type="text"
                    required
                    placeholder="Name"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 text-xs text-neutral-900 dark:text-neutral-200 placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:border-neutral-500 dark:focus:border-neutral-600 focus:bg-white transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="contact-sender-email" className="text-xs text-neutral-600 dark:text-neutral-400 block font-mono">
                    Your Email *
                  </label>
                  <input
                    id="contact-sender-email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 text-xs text-neutral-900 dark:text-neutral-200 placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:border-neutral-500 dark:focus:border-neutral-600 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="contact-subject" className="text-xs text-neutral-600 dark:text-neutral-400 block font-mono">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Opportunity / Collaboration"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg bg-slate-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 text-xs text-neutral-900 dark:text-neutral-200 placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:border-neutral-500 dark:focus:border-neutral-600 focus:bg-white transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="contact-message" className="text-xs text-neutral-600 dark:text-neutral-400 block font-mono">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg bg-slate-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 text-xs text-neutral-900 dark:text-neutral-200 placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:border-neutral-500 dark:focus:border-neutral-600 focus:bg-white resize-none transition-colors"
                />
              </div>

              {statusMessage && (
                <div className="p-2.5 rounded bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-800 dark:text-neutral-300">
                  {statusMessage}
                </div>
              )}

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-neutral-500 font-mono">
                  Dispatches via default mail client
                </span>
                <button
                  id="btn-submit-contact-form"
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-neutral-950 hover:bg-neutral-850 text-white dark:bg-neutral-100 dark:hover:bg-white dark:text-neutral-950 text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>Launch in Mail Client</span>
                  <Send className="w-3 h-3" />
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
