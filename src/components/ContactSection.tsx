import { motion } from 'framer-motion'
import { Mail, Link } from 'lucide-react'

const CONTACTS = [
  {
    label: 'Email',
    href: 'mailto:hello@dukidetheprogrammer.dev',
    icon: Mail,
    text: 'hello@dukidetheprogrammer.dev',
    external: false,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/DukieTheProgrammer',
    icon: Link,
    text: 'github.com/DukieTheProgrammer',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/dukidetheprogrammer',
    icon: Link,
    text: 'linkedin.com/in/dukidetheprogrammer',
    external: true,
  },
  {
    label: 'Twitter / X',
    href: 'https://x.com/dukidetheprogrammer',
    icon: Link,
    text: '@dukidetheprogrammer',
    external: true,
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header text-center">
          <h2>Get in Touch</h2>
          <p>
            I&apos;m currently available for freelance work and open to
            collaborations. Let&apos;s build something great together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            {CONTACTS.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.external ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface hover:border-accent hover:bg-surface-hover transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <contact.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted font-mono">{contact.label}</p>
                  <p className="text-base font-medium text-primary truncate">
                    {contact.text}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-surface border border-border rounded-2xl p-8 text-center shadow-lg"
          >
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6 text-accent">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-3">
              Say hello
            </h3>
            <p className="text-secondary mb-6">
              Have a project in mind or just want to connect? Drop me a message.
            </p>
            <a
              href="mailto:hello@dukidetheprogrammer.dev"
              className="btn btn-primary"
            >
              Send Email
            </a>
          </motion.div>
        </div>
      </div>

      <footer className="border-t border-border py-8 mt-12 flex flex-col items-center gap-3 text-muted text-sm">
        <p>© {new Date().getFullYear()} Dukee TheProgrammer. All rights reserved.</p>
        <div className="flex gap-4 text-xs uppercase tracking-widest">
          <a href="#home" className="hover:text-primary transition-colors">
            Home
          </a>
          <a href="#projects" className="hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contact
          </a>
        </div>
      </footer>
    </section>
  )
}
