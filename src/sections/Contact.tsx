import { useEffect, useState, type ReactElement } from "react";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Button } from "../components/ui/Button";
import "./Contact.css";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import TextField from "../components/ui/TextField";
import TextArea from "../components/ui/TextArea";

const CONTACT_FORM_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxgOwvT32kOlobx4ZHVq7Hsw_y-bDyArdSqGvPnaoXq3hilRZXf7X3h4H05KtBxItrrrg/exec";

interface ContactFormResponse {
  success: boolean;
  error?: string;
}

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
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusContent, setStatusContent] = useState<{ type: "success" | "error"; message: string }>({
    type: "success",
    message: "",
  });

  useEffect(() => {
    if (submitStatus !== "success") return;

    const timeoutId = window.setTimeout(() => {
      setSubmitStatus("idle");
    }, 2600);

    return () => window.clearTimeout(timeoutId);
  }, [submitStatus]);

  const onHandleMouseMove = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    const submit = async () => {
      setIsSubmitting(true);
      setSubmitStatus("idle");

      const accentColor = getComputedStyle(document.documentElement).getPropertyValue("--color-accent").trim();
      const payload = {
        ...formData,
        accentColor,
      };

      try {
        const response = await fetch(CONTACT_FORM_ENDPOINT, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = (await response.json()) as ContactFormResponse;

        if (!data.success) {
          throw new Error(data.error ?? "Unable to send message.");
        }

        setFormData({ name: "", email: "", message: "" });
        setStatusContent({ type: "success", message: "Thanks for reaching out. Your message has been sent." });
        setSubmitStatus("success");
      } catch (error) {
        setStatusContent({
          type: "error",
          message: error instanceof Error ? error.message : "Something went wrong while sending your message.",
        });
        setSubmitStatus("error");
      } finally {
        setIsSubmitting(false);
      }
    };

    void submit();
  };

  const handleInputChange = (field: "name" | "email" | "message", value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionHeader
          label="Contact"
          title="Let's work together"
          subtitle="Currently employed and open to new full-time opportunities — feel free to reach out."
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
          <form id="contact-form" className="contact__form" onSubmit={submitForm} onMouseMove={onHandleMouseMove}>
            <div className="contact-form__header">
              <h3 className="contact-form__title">Send a message</h3>
              <p className="contact-form__subtitle">I'll get back to you as soon as possible.</p>
            </div>

            <div className="contact-form__details">
              <TextField
                id="contact-name"
                name="name"
                label="Name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
                disabled={isSubmitting}
                fullWidth
              />
              <TextField
                id="contact-email"
                name="email"
                label="Email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                autoComplete="email"
                required
                disabled={isSubmitting}
                fullWidth
              />
            </div>

            <TextArea
              id="contact-message"
              name="message"
              autoGrow={false}
              minHeight={140}
              label="Message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              required
              disabled={isSubmitting}
              fullWidth
            />

            <div className="contact-form__actions">
              <Button type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>
                {isSubmitting ? (
                  <span className="contact-submit" aria-live="polite">
                    <span className="contact-submit__spinner" aria-hidden="true" />
                    <span>Sending message</span>
                  </span>
                ) : (
                  "Send Message"
                )}
              </Button>
            </div>

            <div
              className={`contact-form__status-shell ${submitStatus !== "idle" ? "is-visible" : ""}`}
              aria-live="polite"
            >
              <div
                className={`contact-form__status ${statusContent.type === "error" ? "is-error" : "is-success"}`}
                role={statusContent.type === "error" ? "alert" : "status"}
                aria-hidden={submitStatus === "idle"}
              >
                <span className="contact-form__status-icon" aria-hidden="true">
                  {statusContent.type === "success" ? "✓" : "!"}
                </span>
                <div>
                  <p className="contact-form__status-title">
                    {statusContent.type === "success" ? "Message sent successfully" : "Unable to send message"}
                  </p>
                  <p className="contact-form__status-text">{statusContent.message}</p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
