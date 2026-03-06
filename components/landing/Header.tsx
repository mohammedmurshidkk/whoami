import Link from "next/link";
import { FileDown, Mail, Linkedin, Phone, MessageSquare } from "lucide-react";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-14 px-6">
        <Link
          href="/"
          className="text-sm font-bold tracking-tight text-foreground hover:text-primary transition-colors font-mono-code"
        >
          MURSHID<span className="text-primary">.DEV</span>
        </Link>

        <div className="flex items-center gap-2">
          <a
            href="/resume.pdf"
            download="Mohammed_Murshid_Resume.pdf"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <FileDown size={14} />
            Resume
          </a>

          <Dialog>
            <DialogTrigger asChild>
              <button
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Mail size={14} />
                Contact
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Let's Connect</DialogTitle>
                <DialogDescription>
                  Choose your preferred way to reach out. I typically respond within 24 hours.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <a
                  href={SOCIAL_LINKS.email}
                  className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted transition-colors"
                >
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Email</div>
                    <div className="text-xs text-muted-foreground">{CONTACT_INFO.email}</div>
                  </div>
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted transition-colors"
                >
                  <div className="p-2 rounded-full bg-blue-600/10 text-blue-600">
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">LinkedIn</div>
                    <div className="text-xs text-muted-foreground">{CONTACT_INFO.linkedin.replace("https://", "")}</div>
                  </div>
                </a>
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted transition-colors"
                >
                  <div className="p-2 rounded-full bg-green-600/10 text-green-600">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">WhatsApp</div>
                    <div className="text-xs text-muted-foreground">{CONTACT_INFO.phone}</div>
                  </div>
                </a>
                <a
                  href={SOCIAL_LINKS.tel}
                  className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted transition-colors"
                >
                  <div className="p-2 rounded-full bg-slate-600/10 text-slate-600">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Call</div>
                    <div className="text-xs text-muted-foreground">{CONTACT_INFO.phone}</div>
                  </div>
                </a>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
