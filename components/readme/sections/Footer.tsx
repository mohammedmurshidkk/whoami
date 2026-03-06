import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";

const Footer = () => {
  return (
    <section id="connect">
      <h2 className="text-foreground" style={{ fontSize: "1.5em", fontWeight: 600, paddingBottom: "0.3em", borderBottom: "1px solid hsl(var(--border))", marginTop: "24px", marginBottom: "16px" }}>
        📫 Contact Me
      </h2>
      <p className="mb-4 text-foreground">
        Interested in RELAYET, looking for a product engineer, or just curious about what I'm building? Let's connect!
      </p>
      <p className="text-foreground mb-1">
        📧 Email: <a href={SOCIAL_LINKS.email} className="text-primary hover:underline">{CONTACT_INFO.email}</a>
      </p>
      <p className="text-foreground mb-1">
        💼 LinkedIn: <a href={SOCIAL_LINKS.linkedin} className="text-primary hover:underline">{CONTACT_INFO.linkedin.replace("https://", "")}</a>
      </p>
      <p className="text-foreground mb-4">
        💬 WhatsApp: <a href={SOCIAL_LINKS.whatsapp} className="text-primary hover:underline">{CONTACT_INFO.phone}</a>
      </p>

      <hr className="my-6" style={{ height: "0.25em", backgroundColor: "hsl(var(--border))", border: "0", borderRadius: "2px" }} />

      <p className="text-center text-muted-foreground">
        🚀 Currently scaling RELAYET | Building products that matter
      </p>
      <p className="text-center text-muted-foreground text-sm mt-4">
        Made with 💙 by {CONTACT_INFO.name}
      </p>
    </section>
  );
};

export default Footer;
