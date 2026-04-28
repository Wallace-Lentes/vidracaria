import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="gradient-steel text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="h-10 w-10 rounded-md gradient-amber grid place-items-center font-display font-bold text-amber-foreground">VR</span>
            <div>
              <div className="font-display font-bold">VIDRAÇARIA RAMOS</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground/60">Vidros · Esquadrias · Alumínio</div>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/70 max-w-sm leading-relaxed">
            Mais de 20 anos transformando ambientes com vidros temperados, esquadrias de alumínio e
            soluções sob medida. Qualidade, segurança e acabamento impecável.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold mb-4 text-amber">Serviços</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li>Box de banheiro</li>
            <li>Janelas e portas</li>
            <li>Esquadrias de alumínio</li>
            <li>Guarda-corpo</li>
            <li>Espelhos sob medida</li>
            <li>Fachadas comerciais</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold mb-4 text-amber">Contato</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-amber" /> (11) 99999-0000</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-amber" /> contato@vidracariaramos.com.br</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-amber" /> Rua das Oficinas, 123 — São Paulo/SP</li>
          </ul>
          <div className="flex gap-3 mt-5">
            <a href="#" className="h-9 w-9 rounded-md border border-primary-foreground/20 grid place-items-center hover:bg-amber hover:text-amber-foreground hover:border-amber transition"><Instagram className="h-4 w-4" /></a>
            <a href="#" className="h-9 w-9 rounded-md border border-primary-foreground/20 grid place-items-center hover:bg-amber hover:text-amber-foreground hover:border-amber transition"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 text-xs text-primary-foreground/50 flex flex-col md:flex-row gap-2 justify-between">
          <span>© {new Date().getFullYear()} Vidraçaria Ramos. Todos os direitos reservados.</span>
          <span>CNPJ 00.000.000/0001-00 · Atendimento Seg–Sáb</span>
        </div>
      </div>
    </footer>
  );
}
