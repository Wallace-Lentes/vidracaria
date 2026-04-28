import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-D0fTOeif.js";
import { L as Link, h as heroImg } from "./router-sLvNlCae.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$n = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$n);
const __iconNode$m = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$m);
const __iconNode$l = [
  ["path", { d: "M10 12h4", key: "a56b0p" }],
  ["path", { d: "M10 8h4", key: "1sr2af" }],
  ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3", key: "1rgiei" }],
  [
    "path",
    {
      d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
      key: "secmi2"
    }
  ],
  ["path", { d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16", key: "16ra0t" }]
];
const Building2 = createLucideIcon("building-2", __iconNode$l);
const __iconNode$k = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$k);
const __iconNode$j = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
];
const Clock = createLucideIcon("clock", __iconNode$j);
const __iconNode$i = [
  ["path", { d: "M11 20H2", key: "nlcfvz" }],
  [
    "path",
    {
      d: "M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z",
      key: "au4z13"
    }
  ],
  ["path", { d: "M11 4H8a2 2 0 0 0-2 2v14", key: "74r1mk" }],
  ["path", { d: "M14 12h.01", key: "1jfl7z" }],
  ["path", { d: "M22 20h-3", key: "vhrsz" }]
];
const DoorOpen = createLucideIcon("door-open", __iconNode$i);
const __iconNode$h = [
  [
    "path",
    { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }
  ]
];
const Facebook = createLucideIcon("facebook", __iconNode$h);
const __iconNode$g = [
  ["path", { d: "m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9", key: "1hayfq" }],
  ["path", { d: "m18 15 4-4", key: "16gjal" }],
  [
    "path",
    {
      d: "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",
      key: "15ts47"
    }
  ]
];
const Hammer = createLucideIcon("hammer", __iconNode$g);
const __iconNode$f = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
];
const House = createLucideIcon("house", __iconNode$f);
const __iconNode$e = [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
];
const Instagram = createLucideIcon("instagram", __iconNode$e);
const __iconNode$d = [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
];
const Layers = createLucideIcon("layers", __iconNode$d);
const __iconNode$c = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$c);
const __iconNode$b = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$b);
const __iconNode$a = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
];
const Menu = createLucideIcon("menu", __iconNode$a);
const __iconNode$9 = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
];
const MessageCircle = createLucideIcon("message-circle", __iconNode$9);
const __iconNode$8 = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode$8);
const __iconNode$7 = [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
];
const Quote = createLucideIcon("quote", __iconNode$7);
const __iconNode$6 = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode$6);
const __iconNode$5 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const ShieldCheck = createLucideIcon("shield-check", __iconNode$5);
const __iconNode$4 = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode$4);
const __iconNode$3 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
];
const Square = createLucideIcon("square", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
      key: "1ngwbx"
    }
  ]
];
const Wrench = createLucideIcon("wrench", __iconNode);
const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" }
];
function SiteHeader() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2.5 group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-9 w-9 rounded-md gradient-amber grid place-items-center font-display font-bold text-amber-foreground shadow-amber transition-transform group-hover:scale-105", children: "VR" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold tracking-tight text-sm", children: "VIDRAÇARIA RAMOS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: "Vidros · Esquadrias" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-8 text-sm font-medium", children: nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: n.href, className: "text-foreground/80 hover:text-amber transition-colors", children: n.label }, n.href)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "#orcamento",
          className: "hidden md:inline-flex items-center gap-2 rounded-md gradient-amber px-4 py-2 text-sm font-semibold text-amber-foreground shadow-amber hover:opacity-95 transition",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
            " Orçamento"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          "aria-label": "Menu",
          className: "md:hidden p-2 rounded-md hover:bg-muted",
          onClick: () => setOpen(!open),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
        }
      )
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden border-t border-border bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 flex flex-col gap-3", children: [
      nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: n.href, onClick: () => setOpen(false), className: "py-1 text-sm font-medium", children: n.label }, n.href)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#orcamento", onClick: () => setOpen(false), className: "mt-2 inline-flex items-center justify-center gap-2 rounded-md gradient-amber px-4 py-2.5 text-sm font-semibold text-amber-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
        " Solicitar Orçamento"
      ] })
    ] }) })
  ] });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "gradient-steel text-primary-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-10 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-10 w-10 rounded-md gradient-amber grid place-items-center font-display font-bold text-amber-foreground", children: "VR" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold", children: "VIDRAÇARIA RAMOS" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.2em] text-primary-foreground/60", children: "Vidros · Esquadrias · Alumínio" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-primary-foreground/70 max-w-sm leading-relaxed", children: "Mais de 20 anos transformando ambientes com vidros temperados, esquadrias de alumínio e soluções sob medida. Qualidade, segurança e acabamento impecável." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-sm font-semibold mb-4 text-amber", children: "Serviços" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-primary-foreground/70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Box de banheiro" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Janelas e portas" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Esquadrias de alumínio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Guarda-corpo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Espelhos sob medida" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Fachadas comerciais" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-sm font-semibold mb-4 text-amber", children: "Contato" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-primary-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 mt-0.5 text-amber" }),
            " (11) 99999-0000"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 mt-0.5 text-amber" }),
            " contato@vidracariaramos.com.br"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 mt-0.5 text-amber" }),
            " Rua das Oficinas, 123 — São Paulo/SP"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "h-9 w-9 rounded-md border border-primary-foreground/20 grid place-items-center hover:bg-amber hover:text-amber-foreground hover:border-amber transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "h-9 w-9 rounded-md border border-primary-foreground/20 grid place-items-center hover:bg-amber hover:text-amber-foreground hover:border-amber transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "h-4 w-4" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-primary-foreground/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 py-5 text-xs text-primary-foreground/50 flex flex-col md:flex-row gap-2 justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Vidraçaria Ramos. Todos os direitos reservados."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "CNPJ 00.000.000/0001-00 · Atendimento Seg–Sáb" })
    ] }) })
  ] });
}
function WhatsAppFloat() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: "https://wa.me/5511999990000?text=Olá!%20Gostaria%20de%20um%20orçamento.",
      target: "_blank",
      rel: "noreferrer",
      "aria-label": "Falar no WhatsApp",
      className: "fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full grid place-items-center bg-[#25D366] text-white shadow-elegant hover:scale-110 transition-transform",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-6 w-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full animate-ping bg-[#25D366]/40" })
      ]
    }
  );
}
const installImg = "/assets/installation-1TfHkKW9.jpg";
const boxImg = "/assets/box-banheiro-DL1qj3uk.jpg";
const portasImg = "/assets/portas-Dx4FhVxv.jpg";
const guardaImg = "/assets/guarda-corpo-CnG9LLHm.jpg";
const services = [{
  icon: Square,
  title: "Box de Banheiro",
  desc: "Vidros temperados incolor, fumê e jateado, com perfis em alumínio ou ferragens cromadas."
}, {
  icon: DoorOpen,
  title: "Portas de Vidro",
  desc: "Portas pivotantes, de correr e basculantes — residenciais e comerciais."
}, {
  icon: House,
  title: "Janelas e Esquadrias",
  desc: "Janelas de alumínio com vidros simples ou duplos, máxima vedação acústica."
}, {
  icon: Building2,
  title: "Fachadas Comerciais",
  desc: "Pele de vidro, structural glazing e fachadas ventiladas para lojas e escritórios."
}, {
  icon: Layers,
  title: "Guarda-Corpo de Vidro",
  desc: "Sacadas, escadas e mezaninos com vidros laminados de segurança."
}, {
  icon: Sparkles,
  title: "Espelhos sob Medida",
  desc: "Espelhos bisotados, lapidados e com iluminação LED para qualquer ambiente."
}, {
  icon: Wrench,
  title: "Manutenção e Reparos",
  desc: "Troca de vidros, regulagens, ferragens e reposição de peças com agilidade."
}, {
  icon: ShieldCheck,
  title: "Vidros de Segurança",
  desc: "Laminados, temperados e antivandalismo conforme normas ABNT."
}];
const stats = [{
  n: "20+",
  label: "Anos de mercado"
}, {
  n: "3.500+",
  label: "Obras entregues"
}, {
  n: "98%",
  label: "Clientes satisfeitos"
}, {
  n: "48h",
  label: "Orçamento expresso"
}];
const why = [{
  icon: Award,
  title: "Equipe Especializada",
  desc: "Vidraceiros e instaladores com certificação e anos de experiência em obra."
}, {
  icon: ShieldCheck,
  title: "Garantia em Todos os Serviços",
  desc: "Cobertura de 5 anos em estrutura e instalação. Tranquilidade total."
}, {
  icon: Clock,
  title: "Prazo que se Cumpre",
  desc: "Cronograma claro desde a medição até a entrega — sem surpresas."
}, {
  icon: Hammer,
  title: "Materiais Premium",
  desc: "Vidros e alumínio das melhores fabricantes do Brasil."
}];
const process = [{
  step: "01",
  title: "Solicitação",
  desc: "Você fala conosco pelo WhatsApp, formulário ou telefone."
}, {
  step: "02",
  title: "Medição Técnica",
  desc: "Visita gratuita e sem compromisso para medir e orientar."
}, {
  step: "03",
  title: "Orçamento Detalhado",
  desc: "Proposta clara em até 48h com prazos e materiais."
}, {
  step: "04",
  title: "Produção",
  desc: "Fabricamos sob medida em nossa oficina com controle de qualidade."
}, {
  step: "05",
  title: "Instalação",
  desc: "Equipe própria instala com agilidade e acabamento impecável."
}];
const testimonials = [{
  name: "Mariana Costa",
  role: "Arquiteta",
  text: "Trabalho de altíssima qualidade. Entregaram um guarda-corpo lindo e dentro do prazo combinado."
}, {
  name: "Carlos Henrique",
  role: "Cliente residencial",
  text: "Trocaram todas as janelas da casa em 2 dias. Equipe limpa, educada e técnica. Recomendo!"
}, {
  name: "Studio M+A",
  role: "Escritório de design",
  text: "Parceiros de várias obras. Atenção ao detalhe e acabamento que faz diferença no projeto."
}];
const faqs = [{
  q: "Vocês fazem visita técnica gratuita?",
  a: "Sim. Atendemos São Paulo capital e região metropolitana sem custo de visita para medição e orçamento."
}, {
  q: "Qual o prazo médio de entrega?",
  a: "Após aprovação, varia de 5 a 15 dias úteis dependendo do produto. Box de banheiro fica pronto em até 7 dias."
}, {
  q: "Que tipos de vidros vocês trabalham?",
  a: "Temperados, laminados, insulados, jateados, fumê, refletivos, espelhos e vidros impressos. Espessuras de 4mm a 19mm."
}, {
  q: "Vocês oferecem garantia?",
  a: "Sim, 5 anos em estrutura e instalação. Vidros e ferragens seguem garantia do fabricante."
}, {
  q: "Aceitam parcelamento?",
  a: "Aceitamos PIX, transferência, dinheiro e cartão em até 12x."
}];
function Home_() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Why, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Gallery, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Process, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(QuoteForm, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppFloat, {})
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "inicio", className: "relative pt-16 min-h-[100svh] flex items-center overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Fachada de vidro moderna ao pôr do sol", className: "h-full w-full object-cover", width: 1920, height: 1080 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-steel-deep/95 via-steel-deep/80 to-steel-deep/40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid opacity-30" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-6 lg:px-10 py-24 text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber/10 backdrop-blur px-3 py-1 text-xs font-medium text-amber uppercase tracking-widest", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-amber animate-pulse" }),
        " Desde 2003 · São Paulo"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-tight text-balance", children: [
        "Vidros, alumínio e ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-amber", children: "precisão" }),
        " em cada projeto."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-primary-foreground/80 max-w-2xl leading-relaxed", children: "A Vidraçaria Ramos entrega soluções completas em vidros temperados, esquadrias de alumínio, box de banheiro, portas, janelas e fachadas — com instalação própria e garantia." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col sm:flex-row gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#orcamento", className: "inline-flex items-center justify-center gap-2 rounded-md gradient-amber px-6 py-3.5 text-sm font-semibold text-amber-foreground shadow-amber hover:opacity-95 transition", children: [
          "Solicitar orçamento grátis ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#servicos", className: "inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/20 px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition", children: "Ver serviços" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl", children: ["Visita técnica grátis", "Garantia de 5 anos", "Orçamento em 48h", "Equipe própria"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 text-sm text-primary-foreground/85", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 mt-0.5 text-amber shrink-0" }),
        " ",
        t
      ] }, t)) })
    ] }) })
  ] });
}
function Stats() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-6", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center md:text-left", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl md:text-5xl font-extrabold text-foreground", children: s.n }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs uppercase tracking-widest text-muted-foreground", children: s.label })
  ] }, s.label)) }) });
}
function SectionHeader({
  kicker,
  title,
  desc
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-amber font-semibold", children: kicker }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight text-balance", children: title }),
    desc && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: desc })
  ] });
}
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "servicos", className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { kicker: "Nossos Serviços", title: "Soluções completas em vidros e esquadrias", desc: "Trabalhamos com tudo que envolve vidro e alumínio para residências, comércios e obras de arquitetura." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative rounded-xl border border-border bg-card p-6 hover:border-amber/60 transition-all hover:-translate-y-1 hover:shadow-elegant", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-md gradient-amber grid place-items-center text-amber-foreground shadow-amber/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-lg font-semibold", children: s.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: s.desc })
    ] }, s.title)) })
  ] }) });
}
function Why() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { kicker: "Por que Ramos", title: "Detalhes que fazem o acabamento perfeito.", desc: "Não somos apenas instaladores. Somos um time apaixonado por vidro, com obsessão por nivelamento, vedação e estética." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 grid sm:grid-cols-2 gap-5", children: why.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-card border border-border p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-md bg-steel-deep text-primary-foreground grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(w.icon, { className: "h-5 w-5 text-amber" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display font-semibold", children: w.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: w.desc })
    ] }, w.title)) })
  ] }) });
}
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "sobre", className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: installImg, alt: "Instalador Vidraçaria Ramos montando janela de alumínio", loading: "lazy", width: 1024, height: 1024, className: "rounded-2xl shadow-elegant w-full object-cover aspect-[4/5]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-5 shadow-elegant max-w-[220px] hidden md:block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-amber", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest font-semibold", children: "Equipe própria" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-foreground", children: "Mais de 25 profissionais entre vidraceiros, serralheiros e instaladores." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { kicker: "Sobre nós", title: "Duas décadas transformando ambientes em São Paulo." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-4 text-muted-foreground leading-relaxed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "A ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Vidraçaria Ramos" }),
          " nasceu em 2003, em uma pequena oficina familiar. Desde então, crescemos para nos tornar referência em vidros, alumínio e esquadrias para residências e empreendimentos comerciais — sempre com o mesmo cuidado artesanal das nossas primeiras obras."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Combinamos tecnologia de fabricação, materiais certificados e uma equipe própria treinada continuamente. Cada projeto é tratado como único, da medição ao último silicone." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 grid sm:grid-cols-2 gap-3", children: ["Atendimento residencial e comercial", "Projetos arquitetônicos sob medida", "Vidros e perfis certificados ABNT", "Limpeza e proteção pós-obra"].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 mt-0.5 text-amber shrink-0" }),
        " ",
        i
      ] }, i)) })
    ] })
  ] }) });
}
function Gallery() {
  const items = [{
    img: boxImg,
    title: "Box frameless",
    tag: "Banheiro"
  }, {
    img: portasImg,
    title: "Porta pivotante",
    tag: "Entrada"
  }, {
    img: guardaImg,
    title: "Guarda-corpo de vidro",
    tag: "Sacada"
  }, {
    img: heroImg,
    title: "Fachada comercial",
    tag: "Pele de vidro"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "galeria", className: "py-24 bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between flex-wrap gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { kicker: "Portfólio", title: "Obras que falam por nós." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#orcamento", className: "text-sm font-semibold text-amber hover:underline inline-flex items-center gap-1", children: [
        "Quero um projeto assim ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "group relative overflow-hidden rounded-xl aspect-[3/4] bg-muted border border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: it.img, alt: it.title, loading: "lazy", width: 800, height: 1066, className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-steel-deep/95 via-steel-deep/30 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "absolute bottom-0 inset-x-0 p-5 text-primary-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.2em] text-amber", children: it.tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg font-semibold", children: it.title })
      ] })
    ] }, i)) })
  ] }) });
}
function Process() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { kicker: "Como Trabalhamos", title: "Um processo simples, do orçamento à entrega." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid md:grid-cols-5 gap-5", children: process.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-xl border border-border bg-card p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl font-extrabold text-gradient-amber", children: p.step }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display font-semibold", children: p.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: p.desc }),
      i < process.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute top-9 -right-3 text-amber", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-5 w-5" }) })
    ] }, p.step)) })
  ] }) });
}
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 gradient-steel text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-amber font-semibold", children: "Depoimentos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight", children: "Quem contrata, recomenda." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid md:grid-cols-3 gap-6", children: testimonials.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 backdrop-blur p-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-7 w-7 text-amber" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-primary-foreground/90 leading-relaxed", children: [
        '"',
        t.text,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-semibold", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-primary-foreground/60", children: t.role })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 text-amber", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-current" }, i)) })
      ] })
    ] }, t.name)) })
  ] }) });
}
function FAQ() {
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { kicker: "Dúvidas frequentes", title: "Tudo que você precisa saber." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 divide-y divide-border border-y border-border", children: faqs.map((f, i) => {
      const isOpen = open === i;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(isOpen ? null : i), className: "w-full flex items-center justify-between gap-4 py-6 text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold text-lg", children: f.q }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-8 w-8 rounded-full grid place-items-center transition-all ${isOpen ? "gradient-amber text-amber-foreground rotate-45" : "border border-border"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl leading-none", children: "+" }) })
        ] }),
        isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pb-6 text-muted-foreground leading-relaxed -mt-2", children: f.a })
      ] }, f.q);
    }) })
  ] }) });
}
function QuoteForm() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "orcamento", className: "py-24 bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "contato", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { kicker: "Solicite seu orçamento", title: "Conte seu projeto. Respondemos em até 24h.", desc: "Preencha o formulário ou fale direto pelo WhatsApp. Atendemos toda a Grande São Paulo." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 space-y-5", children: [{
        icon: Phone,
        label: "Telefone / WhatsApp",
        value: "(11) 99999-0000"
      }, {
        icon: Mail,
        label: "E-mail",
        value: "contato@vidracariaramos.com.br"
      }, {
        icon: MapPin,
        label: "Endereço",
        value: "Rua das Oficinas, 123 — São Paulo/SP"
      }, {
        icon: Clock,
        label: "Horário",
        value: "Seg–Sex 8h–18h · Sáb 8h–13h"
      }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 shrink-0 rounded-md bg-card border border-border grid place-items-center text-amber", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: c.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-foreground", children: c.value })
        ] })
      ] }, c.label)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
      e.preventDefault();
      setSent(true);
      setTimeout(() => setSent(false), 4e3);
      e.target.reset();
    }, className: "rounded-2xl bg-card border border-border p-8 shadow-elegant", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Nome", name: "nome", placeholder: "Seu nome", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Telefone", name: "telefone", placeholder: "(11) 00000-0000", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "E-mail", name: "email", type: "email", placeholder: "voce@email.com", className: "sm:col-span-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2", children: "Tipo de Serviço" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "servico", required: true, className: "w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Selecione..." }),
            services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: s.title }, s.title)),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Outro" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2", children: "Detalhes do projeto" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "mensagem", rows: 4, placeholder: "Conte medidas, prazos ou referências...", className: "w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber resize-none" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "mt-6 w-full inline-flex items-center justify-center gap-2 rounded-md gradient-amber px-6 py-3.5 text-sm font-semibold text-amber-foreground shadow-amber hover:opacity-95 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }),
        " Enviar pedido de orçamento"
      ] }),
      sent && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-amber font-medium text-center", children: "✓ Pedido enviado! Em breve entraremos em contato." })
    ] })
  ] }) });
}
function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name, type, placeholder, required, className: "w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber" })
  ] });
}
export {
  Home_ as component
};
