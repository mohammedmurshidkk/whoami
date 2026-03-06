import { CONTACT_INFO } from "@/lib/constants";

const ForkRibbon = () => {
  return (
    <a
      href={CONTACT_INFO.github}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-0 left-0 z-40"
      title="Fork this template on GitHub"
    >
      <svg width="80" height="80" viewBox="0 0 250 250" className="fill-foreground/80 hover:fill-foreground transition-colors">
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" className="fill-primary" />
        <text
          x="50%" y="30%"
          textAnchor="middle"
          className="fill-primary-foreground"
          style={{ fontSize: "14px", fontFamily: "sans-serif", fontWeight: 600 }}
          transform="rotate(-45, 125, 125) translate(30, -30)"
        >
          Fork me
        </text>
      </svg>
    </a>
  );
};

export default ForkRibbon;
