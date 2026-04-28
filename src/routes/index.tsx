import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Hammer,
  Sparkles,
  Clock,
  Award,
  Users,
  Phone,
  Mail,
  MapPin,
  Send,
  DoorOpen,
  Square,
  Home,
  Building2,
  Layers,
  Wrench,
  Quote,
  Star,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

import heroImg from "@/assets/hero-glass.jpg";
import installImg from "@/assets/installation.jpg";
import boxImg from "@/assets/box-banheiro.jpg";
import portasImg from "@/assets/portas.jpg";
import guardaImg from "@/assets/guarda-corpo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vidraçaria Ramos — Vidros, Esquadrias e Alumínio em São Paulo" },
      {
        name: "description",
        content:
          "Vidraçaria Ramos: instalação de janelas, portas, box de banheiro, esquadrias de alumínio e guarda-corpo. Orçamento rápido e sem compromisso.",
      },
      { property: "og:title", content: "Vidraçaria Ramos — Vidros e Esquadrias sob Medida" },
      { property: "og:description", content: "Mais de 20 anos em vidros temperados, alumínio e instalações premium. Orçamento grátis." },
      { property: "og:image", content: heroImg },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home_,
});

const services = [
  { icon: Square, title: "Box de Banheiro", desc: "Vidros temperados incolor, fumê e jateado, com perfis em alumínio ou ferragens cromadas." },
  { icon: DoorOpen, title: "Portas de Vidro", desc: "Portas pivotantes, de correr e basculantes — residenciais e comerciais." },
  { icon: Home, title: "Janelas e Esquadrias", desc: "Janelas de alumínio com vidros simples ou duplos, máxima vedação acústica." },
  { icon: Building2, title: "Fachadas Comerciais", desc: "Pele de vidro, structural glazing e fachadas ventiladas para lojas e escritórios." },
  { icon: Layers, title: "Guarda-Corpo de Vidro", desc: "Sacadas, escadas e mezaninos com vidros laminados de segurança." },
  { icon: Sparkles, title: "Espelhos sob Medida", desc: "Espelhos bisotados, lapidados e com iluminação LED para qualquer ambiente." },
  { icon: Wrench, title: "Manutenção e Reparos", desc: "Troca de vidros, regulagens, ferragens e reposição de peças com agilidade." },
  { icon: ShieldCheck, title: "Vidros de Segurança", desc: "Laminados, temperados e antivandalismo conforme normas ABNT." },
];

const stats = [
  { n: "20+", label: "Anos de mercado" },
  { n: "3.500+", label: "Obras entregues" },
  { n: "98%", label: "Clientes satisfeitos" },
  { n: "48h", label: "Orçamento expresso" },
];

const why = [
  { icon: Award, title: "Equipe Especializada", desc: "Vidraceiros e instaladores com certificação e anos de experiência em obra." },
  { icon: ShieldCheck, title: "Garantia em Todos os Serviços", desc: "Cobertura de 5 anos em estrutura e instalação. Tranquilidade total." },
  { icon: Clock, title: "Prazo que se Cumpre", desc: "Cronograma claro desde a medição até a entrega — sem surpresas." },
  { icon: Hammer, title: "Materiais Premium", desc: "Vidros e alumínio das melhores fabricantes do Brasil." },
];

const process = [
  { step: "01", title: "Solicitação", desc: "Você fala conosco pelo WhatsApp, formulário ou telefone." },
  { step: "02", title: "Medição Técnica", desc: "Visita gratuita e sem compromisso para medir e orientar." },
  { step: "03", title: "Orçamento Detalhado", desc: "Proposta clara em até 48h com prazos e materiais." },
  { step: "04", title: "Produção", desc: "Fabricamos sob medida em nossa oficina com controle de qualidade." },
  { step: "05", title: "Instalação", desc: "Equipe própria instala com agilidade e acabamento impecável." },
];

const testimonials = [
  { name: "Mariana Costa", role: "Arquiteta", text: "Trabalho de altíssima qualidade. Entregaram um guarda-corpo lindo e dentro do prazo combinado." },
  { name: "Carlos Henrique", role: "Cliente residencial", text: "Trocaram todas as janelas da casa em 2 dias. Equipe limpa, educada e técnica. Recomendo!" },
  { name: "Studio M+A", role: "Escritório de design", text: "Parceiros de várias obras. Atenção ao detalhe e acabamento que faz diferença no projeto." },
];

const faqs = [
  { q: "Vocês fazem visita técnica gratuita?", a: "Sim. Atendemos São Paulo capital e região metropolitana sem custo de visita para medição e orçamento." },
  { q: "Qual o prazo médio de entrega?", a: "Após aprovação, varia de 5 a 15 dias úteis dependendo do produto. Box de banheiro fica pronto em até 7 dias." },
  { q: "Que tipos de vidros vocês trabalham?", a: "Temperados, laminados, insulados, jateados, fumê, refletivos, espelhos e vidros impressos. Espessuras de 4mm a 19mm." },
  { q: "Vocês oferecem garantia?", a: "Sim, 5 anos em estrutura e instalação. Vidros e ferragens seguem garantia do fabricante." },
  { q: "Aceitam parcelamento?", a: "Aceitamos PIX, transferência, dinheiro e cartão em até 12x." },
];

function Home_() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <Stats />
      <Services />
      <Why />
      <About />
      <Gallery />
      <Process />
      <Testimonials />
      <FAQ />
      <QuoteForm />
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative pt-16 min-h-[100svh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Fachada de vidro moderna ao pôr do sol" className="h-full w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-steel-deep/95 via-steel-deep/80 to-steel-deep/40" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 text-primary-foreground">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber/10 backdrop-blur px-3 py-1 text-xs font-medium text-amber uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse" /> Desde 2003 · São Paulo
          </span>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-tight text-balance">
            Vidros, alumínio e <span className="text-gradient-amber">precisão</span> em cada projeto.
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl leading-relaxed">
            A Vidraçaria Ramos entrega soluções completas em vidros temperados, esquadrias de alumínio,
            box de banheiro, portas, janelas e fachadas — com instalação própria e garantia.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a href="#orcamento" className="inline-flex items-center justify-center gap-2 rounded-md gradient-amber px-6 py-3.5 text-sm font-semibold text-amber-foreground shadow-amber hover:opacity-95 transition">
              Solicitar orçamento grátis <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#servicos" className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/20 px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition">
              Ver serviços
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
            {[
              "Visita técnica grátis",
              "Garantia de 5 anos",
              "Orçamento em 48h",
              "Equipe própria",
            ].map((t) => (
              <div key={t} className="flex items-start gap-2 text-sm text-primary-foreground/85">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-amber shrink-0" /> {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <div className="font-display text-4xl md:text-5xl font-extrabold text-foreground">{s.n}</div>
            <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHeader({ kicker, title, desc }: { kicker: string; title: string; desc?: string }) {
  return (
    <div className="max-w-2xl">
      <span className="text-xs uppercase tracking-[0.25em] text-amber font-semibold">{kicker}</span>
      <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight text-balance">{title}</h2>
      {desc && <p className="mt-4 text-muted-foreground leading-relaxed">{desc}</p>}
    </div>
  );
}

function Services() {
  return (
    <section id="servicos" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          kicker="Nossos Serviços"
          title="Soluções completas em vidros e esquadrias"
          desc="Trabalhamos com tudo que envolve vidro e alumínio para residências, comércios e obras de arquitetura."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative rounded-xl border border-border bg-card p-6 hover:border-amber/60 transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="h-11 w-11 rounded-md gradient-amber grid place-items-center text-amber-foreground shadow-amber/40">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5">
          <SectionHeader
            kicker="Por que Ramos"
            title="Detalhes que fazem o acabamento perfeito."
            desc="Não somos apenas instaladores. Somos um time apaixonado por vidro, com obsessão por nivelamento, vedação e estética."
          />
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
          {why.map((w) => (
            <div key={w.title} className="rounded-xl bg-card border border-border p-6">
              <div className="h-10 w-10 rounded-md bg-steel-deep text-primary-foreground grid place-items-center">
                <w.icon className="h-5 w-5 text-amber" />
              </div>
              <h3 className="mt-4 font-display font-semibold">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <img src={installImg} alt="Instalador Vidraçaria Ramos montando janela de alumínio" loading="lazy" width={1024} height={1024} className="rounded-2xl shadow-elegant w-full object-cover aspect-[4/5]" />
          <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-5 shadow-elegant max-w-[220px] hidden md:block">
            <div className="flex items-center gap-2 text-amber"><Users className="h-4 w-4" /> <span className="text-xs uppercase tracking-widest font-semibold">Equipe própria</span></div>
            <p className="mt-2 text-sm text-foreground">Mais de 25 profissionais entre vidraceiros, serralheiros e instaladores.</p>
          </div>
        </div>
        <div>
          <SectionHeader
            kicker="Sobre nós"
            title="Duas décadas transformando ambientes em São Paulo."
          />
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              A <strong className="text-foreground">Vidraçaria Ramos</strong> nasceu em 2003, em uma pequena oficina familiar.
              Desde então, crescemos para nos tornar referência em vidros, alumínio e esquadrias para residências
              e empreendimentos comerciais — sempre com o mesmo cuidado artesanal das nossas primeiras obras.
            </p>
            <p>
              Combinamos tecnologia de fabricação, materiais certificados e uma equipe própria treinada
              continuamente. Cada projeto é tratado como único, da medição ao último silicone.
            </p>
          </div>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {[
              "Atendimento residencial e comercial",
              "Projetos arquitetônicos sob medida",
              "Vidros e perfis certificados ABNT",
              "Limpeza e proteção pós-obra",
            ].map((i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-amber shrink-0" /> {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const items = [
    { img: boxImg, title: "Box frameless", tag: "Banheiro" },
    { img: portasImg, title: "Porta pivotante", tag: "Entrada" },
    { img: guardaImg, title: "Guarda-corpo de vidro", tag: "Sacada" },
    { img: heroImg, title: "Fachada comercial", tag: "Pele de vidro" },
  ];
  return (
    <section id="galeria" className="py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <SectionHeader kicker="Portfólio" title="Obras que falam por nós." />
          <a href="#orcamento" className="text-sm font-semibold text-amber hover:underline inline-flex items-center gap-1">
            Quero um projeto assim <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <figure
              key={i}
              className="group relative overflow-hidden rounded-xl aspect-[3/4] bg-muted border border-border"
            >
              <img src={it.img} alt={it.title} loading="lazy" width={800} height={1066} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-steel-deep/95 via-steel-deep/30 to-transparent" />
              <figcaption className="absolute bottom-0 inset-x-0 p-5 text-primary-foreground">
                <span className="text-[10px] uppercase tracking-[0.2em] text-amber">{it.tag}</span>
                <div className="font-display text-lg font-semibold">{it.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader kicker="Como Trabalhamos" title="Um processo simples, do orçamento à entrega." />
        <div className="mt-14 grid md:grid-cols-5 gap-5">
          {process.map((p, i) => (
            <div key={p.step} className="relative rounded-xl border border-border bg-card p-6">
              <div className="font-display text-3xl font-extrabold text-gradient-amber">{p.step}</div>
              <h3 className="mt-3 font-display font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              {i < process.length - 1 && (
                <div className="hidden md:block absolute top-9 -right-3 text-amber">
                  <ArrowRight className="h-5 w-5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24 gradient-steel text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-amber font-semibold">Depoimentos</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight">
            Quem contrata, recomenda.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 backdrop-blur p-7">
              <Quote className="h-7 w-7 text-amber" />
              <p className="mt-4 text-primary-foreground/90 leading-relaxed">"{t.text}"</p>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <div className="font-display font-semibold">{t.name}</div>
                  <div className="text-xs text-primary-foreground/60">{t.role}</div>
                </div>
                <div className="flex gap-0.5 text-amber">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <SectionHeader kicker="Dúvidas frequentes" title="Tudo que você precisa saber." />
        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-6 text-left"
                >
                  <span className="font-display font-semibold text-lg">{f.q}</span>
                  <span className={`h-8 w-8 rounded-full grid place-items-center transition-all ${isOpen ? "gradient-amber text-amber-foreground rotate-45" : "border border-border"}`}>
                    <span className="text-xl leading-none">+</span>
                  </span>
                </button>
                {isOpen && <p className="pb-6 text-muted-foreground leading-relaxed -mt-2">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function QuoteForm() {
  const [sent, setSent] = useState(false);
  return (
    <section id="orcamento" className="py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-14">
        <div id="contato">
          <SectionHeader
            kicker="Solicite seu orçamento"
            title="Conte seu projeto. Respondemos em até 24h."
            desc="Preencha o formulário ou fale direto pelo WhatsApp. Atendemos toda a Grande São Paulo."
          />
          <div className="mt-10 space-y-5">
            {[
              { icon: Phone, label: "Telefone / WhatsApp", value: "(11) 99999-0000" },
              { icon: Mail, label: "E-mail", value: "contato@vidracariaramos.com.br" },
              { icon: MapPin, label: "Endereço", value: "Rua das Oficinas, 123 — São Paulo/SP" },
              { icon: Clock, label: "Horário", value: "Seg–Sex 8h–18h · Sáb 8h–13h" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <div className="h-11 w-11 shrink-0 rounded-md bg-card border border-border grid place-items-center text-amber">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                  <div className="font-medium text-foreground">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 4000);
            (e.target as HTMLFormElement).reset();
          }}
          className="rounded-2xl bg-card border border-border p-8 shadow-elegant"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Nome" name="nome" placeholder="Seu nome" required />
            <Field label="Telefone" name="telefone" placeholder="(11) 00000-0000" required />
            <Field label="E-mail" name="email" type="email" placeholder="voce@email.com" className="sm:col-span-2" />
            <div className="sm:col-span-2">
              <label className="block text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2">Tipo de Serviço</label>
              <select name="servico" required className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber">
                <option value="">Selecione...</option>
                {services.map((s) => <option key={s.title}>{s.title}</option>)}
                <option>Outro</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2">Detalhes do projeto</label>
              <textarea name="mensagem" rows={4} placeholder="Conte medidas, prazos ou referências..." className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber resize-none" />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-md gradient-amber px-6 py-3.5 text-sm font-semibold text-amber-foreground shadow-amber hover:opacity-95 transition"
          >
            <Send className="h-4 w-4" /> Enviar pedido de orçamento
          </button>
          {sent && (
            <p className="mt-4 text-sm text-amber font-medium text-center">
              ✓ Pedido enviado! Em breve entraremos em contato.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, required, className = "" }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean; className?: string }) {
  return (
    <div className={className}>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber"
      />
    </div>
  );
}
