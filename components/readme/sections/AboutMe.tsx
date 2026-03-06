import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";

const AboutMe = () => {
  return (
    <section id="about">
      <h2 className="text-foreground" style={{ fontSize: "1.5em", fontWeight: 600, paddingBottom: "0.3em", borderBottom: "1px solid hsl(var(--border))", marginTop: "24px", marginBottom: "16px" }}>
        👨‍💻 About Me
      </h2>
      <ul style={{ paddingLeft: "2em", marginBottom: "16px" }}>
        <li style={{ marginTop: "0.25em" }}>
          🔭 I'm currently building <strong>RELAYET</strong> - AI-powered ordering & appointment automation
        </li>
        <li style={{ marginTop: "0.25em" }}>
          🏢 Senior Frontend Architect at <strong>Information Kerala Mission</strong> (Government of Kerala)
        </li>
        <li style={{ marginTop: "0.25em" }}>
          🤖 Superpower: <strong>AI-augmented development</strong> (Claude Code, GitHub Copilot, Cursor)
        </li>
        <li style={{ marginTop: "0.25em" }}>
          💬 Ask me about <strong>Product engineering, AI integration, microfrontends, 0-to-1 development</strong>
        </li>
        <li style={{ marginTop: "0.25em" }}>
          📫 How to reach me: <strong><a href={SOCIAL_LINKS.email} className="text-primary hover:underline">{CONTACT_INFO.email}</a></strong>
        </li>
        <li style={{ marginTop: "0.25em" }}>
          ⚡ Fun fact: <strong>Built RELAYET's cafe plugin in 1 week using AI agents (normally 3-4 weeks)</strong>
        </li>
      </ul>
    </section>
  );
};

export default AboutMe;
