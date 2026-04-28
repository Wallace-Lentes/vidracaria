import { Link } from "@tanstack/react-router";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";

const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="h-9 w-9 rounded-md gradient-amber grid place-items-center font-display font-bold text-amber-foreground shadow-amber transition-transform group-hover:scale-105">
            VR
          </span>
          <div className="leading-tight">
            <div className="font-display font-bold tracking-tight text-sm">VIDRAÇARIA RAMOS</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Vidros · Esquadrias</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-foreground/80 hover:text-amber transition-colors">
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href="#orcamento"
          className="hidden md:inline-flex items-center gap-2 rounded-md gradient-amber px-4 py-2 text-sm font-semibold text-amber-foreground shadow-amber hover:opacity-95 transition"
        >
          <Phone className="h-4 w-4" /> Orçamento
        </a>

        <button
          aria-label="Menu"
          className="md:hidden p-2 rounded-md hover:bg-muted"
          onClick={() => setOpen(!open)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-1 text-sm font-medium">
                {n.label}
              </a>
            ))}
            <a href="#orcamento" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 rounded-md gradient-amber px-4 py-2.5 text-sm font-semibold text-amber-foreground">
              <Phone className="h-4 w-4" /> Solicitar Orçamento
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
