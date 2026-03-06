import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface ShieldBadgeProps {
  label: string;
  color: string;
  logo?: string;
  logoColor?: string;
  proficiency?: string;
  href?: string;
}

const ShieldBadge = ({ label, color, logo, logoColor = "white", proficiency, href }: ShieldBadgeProps) => {
  const badge = (
    <span
      className={`inline-flex items-center rounded-sm text-xs font-medium mr-1 mb-1 ${href ? "cursor-pointer hover:opacity-80 transition-opacity" : "cursor-default"}`}
      style={{ height: "20px" }}
      onClick={() => href && window.open(href, "_blank")}
    >
      {logo && (
        <span
          className="inline-flex items-center px-1.5 rounded-l-sm"
          style={{ backgroundColor: "#555", color: logoColor, height: "20px", fontSize: "11px" }}
        >
          {logo}
        </span>
      )}
      <span
        className="inline-flex items-center px-1.5 text-white"
        style={{
          backgroundColor: color,
          height: "20px",
          fontSize: "11px",
          borderRadius: logo ? "0 2px 2px 0" : "2px",
        }}
      >
        {label}
      </span>
    </span>
  );

  if (proficiency) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>{badge}</TooltipTrigger>
        <TooltipContent>
          <p className="text-xs">{proficiency}</p>
        </TooltipContent>
      </Tooltip>
    );
  }

  return badge;
};

export default ShieldBadge;
