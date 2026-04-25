import type { ReactElement } from "react";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Button } from "../components/ui/Button";
import "./Contact.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import TextField from "../components/ui/TextField";
import TextArea from "../components/ui/TextArea";

interface ContactOption {
  icon: ReactElement;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

const CONTACT_OPTIONS: ContactOption[] = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "hello@owennicholson.com",
    href: "mailto:hello@owennicholson.com",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "/in/nicholowen",
    href: "https://www.linkedin.com/in/nicholowen",
    external: true,
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "@turtle-dev-nz",
    href: "https://github.com/turtle-dev-nz",
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionHeader
          label="Contact"
          title="Let's work together"
          subtitle="Open to freelance projects, collaborations, and full-time opportunities."
        />

        <div className="contact__options">
          {CONTACT_OPTIONS.map(({ icon, label, value, href, external }) => (
            <a
              key={label}
              href={href}
              className="contact-card"
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              <span className="contact-card__icon" aria-hidden="true">
                {icon}
              </span>
              <div>
                <p className="contact-card__label">{label}</p>
                <p className="contact-card__value">{value}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="contact-form__area">
          <form id="contact-form" className="contact__form" onSubmit={(e) => e.preventDefault()}>
            <div className="contact-form__header">
              <h3 className="contact-form__title">Send a message</h3>
              <p className="contact-form__subtitle">I'll get back to you as soon as possible.</p>
            </div>

            <div className="contact-form__details">
              <TextField id="contact-name" label="Name" fullWidth />
              <TextField id="contact-email" label="Email" type="email" fullWidth />
            </div>

            <TextArea id="contact-message" autoGrow={false} minHeight={140} label="Message" fullWidth />

            <div className="contact-form__actions">
              <Button>Send Message</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
