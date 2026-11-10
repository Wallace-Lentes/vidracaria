import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

// Nome do repositório no GitHub. O GitHub Pages publica o site em
// https://<usuario>.github.io/<repositorio>/, então todos os arquivos
// precisam ser servidos a partir desse caminho.
const BASE_PATH = "/vidracaria/";

export default defineConfig({
  base: BASE_PATH,
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart({
      // Gera HTML estático (index.html) no build, já que o GitHub Pages
      // não executa servidor.
      prerender: {
        enabled: true,
        crawlLinks: true,
      },
    }),
    viteReact(),
  ],
  resolve: {
    dedupe: ["react", "react-dom", "@tanstack/react-router"],
  },
});
