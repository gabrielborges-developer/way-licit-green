import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Lock, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Acessar — WAY Sistemas" },
      { name: "description", content: "Acesse a Central de Compras Compartilhadas da WAY Sistemas." },
      { property: "og:title", content: "Acessar — WAY Sistemas" },
      { property: "og:description", content: "Central de Compras Compartilhadas." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [login, setLogin] = useState("");
  const [pswd, setPswd] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // SC_FORM_SUBMIT_CALL hook — integrar com backend Scriptcase
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      {/* Form side */}
      <div className="flex flex-col px-6 sm:px-12 lg:px-20 py-10">
        <Link to="/" className="inline-flex items-center gap-2 group w-fit">
          <span className="grid place-items-center h-10 w-10 rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground font-black shadow-[var(--shadow-elegant)]">
            W
          </span>
          <span className="font-semibold tracking-tight">
            WAY <span className="text-muted-foreground font-normal">Sistemas</span>
          </span>
        </Link>

        <div className="flex-1 flex items-center">
          <div className="w-full max-w-md mx-auto">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">
                <span className="h-1 w-6 bg-primary rounded-full" />
                Central de Compras Compartilhadas
              </div>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05]">
                Bem-vindo de volta.
              </h1>
              <p className="mt-3 text-muted-foreground">
                Acesse sua conta para gerenciar credenciamentos, propostas e processos licitatórios.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
              // SC_FORM_ATTR / SC_FORM_HIDDEN — campos ocultos remember_me e new_user vão aqui
            >
              {/* Login */}
              <div className="group">
                <label htmlFor="login" className="text-xs font-medium text-foreground/70 uppercase tracking-wider">
                  Login
                </label>
                <div className="mt-2 relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <input
                    id="login"
                    name="login"
                    type="text"
                    required
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    className="w-full h-12 rounded-xl border border-border bg-card pl-10 pr-4 text-sm shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
                    placeholder="seu.usuario"
                  />
                </div>
              </div>

              {/* Senha */}
              <div className="group">
                <div className="flex items-center justify-between">
                  <label htmlFor="pswd" className="text-xs font-medium text-foreground/70 uppercase tracking-wider">
                    Senha
                  </label>
                  <a href="#" className="text-xs font-medium text-primary hover:underline">
                    Esqueceu a senha?
                  </a>
                </div>
                <div className="mt-2 relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <input
                    id="pswd"
                    name="pswd"
                    type="password"
                    required
                    value={pswd}
                    onChange={(e) => setPswd(e.target.value)}
                    className="w-full h-12 rounded-xl border border-border bg-card pl-10 pr-4 text-sm shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {/* Remember me */}
              <label htmlFor="remember-me" className="flex items-center gap-3 cursor-pointer select-none">
                <span className="relative">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="peer sr-only"
                  />
                  <span className="block h-5 w-5 rounded-md border border-border bg-card transition-all peer-checked:bg-primary peer-checked:border-primary" />
                  <svg
                    className="absolute inset-0 m-auto h-3 w-3 text-primary-foreground opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="2,6.5 5,9.5 10,3" />
                  </svg>
                </span>
                <span className="text-sm text-foreground/80">Manter-me conectado</span>
              </label>

              {/* SC_CAPTCHA placeholder */}
              <div className="hidden" id="sc-captcha-slot" />

              <Button type="submit" variant="hero" size="lg" className="w-full h-12 rounded-xl text-base group">
                Acessar
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>

              <p className="text-center text-sm text-muted-foreground pt-2">
                Ainda não tem conta?{" "}
                <a href="#" className="font-medium text-primary hover:underline">
                  Cadastre-se como fornecedor
                </a>
              </p>
            </form>
          </div>
        </div>

        <footer className="text-xs text-muted-foreground flex flex-wrap items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} WAY Sistemas. Way Licita.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">Privacidade</a>
            <a href="#" className="hover:text-foreground">Suporte</a>
          </div>
        </footer>
      </div>

      {/* Visual side */}
      <div className="hidden lg:block relative overflow-hidden bg-[image:var(--gradient-primary)]">
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 0, transparent 40%), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.3) 0, transparent 50%)",
          }}
        />
        <div className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        <div className="relative h-full flex flex-col justify-between p-12 text-primary-foreground">
          <div className="flex items-center gap-2 text-sm font-medium">
            <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
            Plataforma online · 247 editais ativos
          </div>

          <div className="space-y-8">
            <div className="text-[10px] font-mono tracking-[0.3em] opacity-70">
              WAY • LICITA / 2026
            </div>
            <h2 className="text-4xl xl:text-5xl font-semibold leading-[1.1] tracking-tight max-w-md">
              Credenciamento, transparência e velocidade em um só lugar.
            </h2>
            <p className="text-primary-foreground/80 max-w-md">
              Centralize processos licitatórios, conecte fornecedores qualificados e mantenha conformidade legal com a Lei 14.133/21.
            </p>

            <div className="grid grid-cols-3 gap-6 max-w-md pt-6 border-t border-white/20">
              <Stat n="2.4k" l="Fornecedores" />
              <Stat n="186" l="Órgãos" />
              <Stat n="98%" l="Conformidade" />
            </div>
          </div>

          <blockquote className="max-w-md text-sm">
            <p className="opacity-90 leading-relaxed">
              "Reduzimos em 60% o tempo de credenciamento depois que migramos para a WAY."
            </p>
            <footer className="mt-3 text-xs opacity-70">— Diretoria de Compras, Prefeitura parceira</footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="text-2xl font-semibold">{n}</div>
      <div className="text-xs opacity-70 uppercase tracking-wider">{l}</div>
    </div>
  );
}
