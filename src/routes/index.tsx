import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, ArrowUpRight, CheckCircle2, Shield, Zap, Users, TrendingUp, Building2, Calendar, Sparkles, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "WAY Sistemas — Credenciamento e Licitações" },
      { name: "description", content: "Plataforma WAY Sistemas para credenciamento de fornecedores em processos licitatórios. Simples, transparente e moderna." },
    ],
  }),
});

const processos = [
  { id: "WAY-001", numero: "035/2025", tipo: "Credenciamento", orgao: "Prefeitura Municipal de Belo Horizonte", uf: "MG", objeto: "Credenciamento de empresas para prestação de serviços de saúde complementar ao SUS, com atendimento ambulatorial e exames especializados.", data: "20/05/2026", prazo: "12 dias" },
  { id: "WAY-002", numero: "024/2025", tipo: "Credenciamento", orgao: "Prefeitura Municipal de Curitiba", uf: "PR", objeto: "Credenciamento de empresas especializadas em consultoria técnica e intelectual para acompanhamento estratégico das demandas municipais.", data: "18/05/2026", prazo: "10 dias" },
  { id: "WAY-003", numero: "052/2025", tipo: "Inexigibilidade", orgao: "Prefeitura Municipal de Jaboatão dos Guararapes", uf: "PE", objeto: "Aquisição de inscrições para servidores da Secretaria Municipal de Educação participarem de capacitação técnica nacional.", data: "15/05/2026", prazo: "7 dias" },
  { id: "WAY-004", numero: "046/2025", tipo: "Credenciamento", orgao: "Prefeitura Municipal de São Lourenço", uf: "MG", objeto: "Credenciamento de fornecedores para impressão de material gráfico exclusivo de combate à Dengue para a Vigilância Epidemiológica.", data: "12/05/2026", prazo: "4 dias" },
  { id: "WAY-005", numero: "118/2025", tipo: "Credenciamento", orgao: "Prefeitura Municipal de Barra Longa", uf: "MG", objeto: "Credenciamento de prestadores de serviços médicos especializados nas áreas de cardiologia, ortopedia e pediatria.", data: "10/05/2026", prazo: "2 dias" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top utility bar */}
      <div className="border-b border-border bg-foreground text-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Portal oficial de credenciamento — Lei 14.133/21</span>
          <span className="hidden sm:block opacity-70">Suporte: contato@waysistemas.com.br</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-foreground">
              <span className="text-lg font-black text-primary">W</span>
              <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-primary ring-2 ring-background" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-base font-black tracking-tight text-foreground">WAY Sistemas</span>
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">Licitações públicas</span>
            </div>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#processos" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Processos</a>
            <a href="#como-funciona" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Como funciona</a>
            <a href="#beneficios" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Benefícios</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" className="text-foreground hover:bg-secondary"><Link to="/login">Entrar</Link></Button>
            <Button variant="hero" className="rounded-full">Cadastrar</Button>
          </div>
        </div>
      </header>

      {/* Hero — dark editorial */}
      <section className="relative overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="absolute right-[-10%] top-[-30%] h-[600px] w-[600px] rounded-full bg-primary/30 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Sparkles className="h-3 w-3" /> Novo • 12 editais publicados esta semana
              </div>
              <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[0.95] tracking-tight">
                Credenciar é<br />
                <span className="text-primary">mais simples</span><br />
                quando é<span className="italic font-serif font-normal"> direto.</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg text-background/70">
                A plataforma WAY conecta fornecedores aos editais de credenciamento de órgãos públicos do Brasil inteiro. Sem burocracia, sem intermediário.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button variant="hero" size="lg" className="rounded-full gap-2">
                  Cadastrar fornecedor <ArrowUpRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-background/30 bg-transparent text-background hover:bg-background/10 hover:text-background">
                  Ver editais abertos
                </Button>
              </div>
            </div>

            {/* Right side: ticker stack */}
            <div className="lg:col-span-5 space-y-3">
              {[
                { k: "Editais ativos", v: "247", trend: "+18%" },
                { k: "Fornecedores", v: "2.412", trend: "+9%" },
                { k: "Órgãos parceiros", v: "186", trend: "+12%" },
              ].map((s, i) => (
                <div key={s.k} className="flex items-center justify-between rounded-2xl border border-background/15 bg-background/[0.04] px-6 py-5 backdrop-blur">
                  <div>
                    <div className="text-[11px] font-medium uppercase tracking-widest text-background/60">{String(i + 1).padStart(2, "0")} · {s.k}</div>
                    <div className="mt-1 text-4xl font-black tabular-nums">{s.v}</div>
                  </div>
                  <Badge className="rounded-full bg-primary/15 text-primary hover:bg-primary/20 border border-primary/30">{s.trend}</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Processos — list with sidebar */}
      <section id="processos" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-primary">— Oportunidades</div>
            <h2 className="mt-2 text-4xl font-black tracking-tight text-foreground">Processos abertos agora</h2>
          </div>
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Buscar por órgão, número ou objeto" className="h-12 rounded-full border-border bg-secondary/40 pl-11 pr-4 focus-visible:ring-primary" />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
          {/* Sidebar filters */}
          <aside className="space-y-6 rounded-2xl border border-border bg-card p-6 h-fit lg:sticky lg:top-24">
            <div>
              <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">Tipo</h3>
              <div className="space-y-2">
                {["Credenciamento", "Inexigibilidade", "Pregão eletrônico", "Concorrência"].map((t, i) => (
                  <label key={t} className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-secondary">
                    <span className="flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full ${i === 0 ? "bg-primary" : "bg-border"}`} />
                      {t}
                    </span>
                    <span className="text-xs text-muted-foreground">{[28, 14, 9, 6][i]}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="border-t border-border pt-5">
              <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">Região</h3>
              <div className="flex flex-wrap gap-1.5">
                {["MG", "SP", "PR", "PE", "RS", "BA", "CE"].map((uf) => (
                  <button key={uf} className="rounded-md border border-border px-2.5 py-1 text-xs font-semibold text-foreground transition-colors hover:border-primary hover:bg-primary/5 hover:text-primary">
                    {uf}
                  </button>
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-foreground p-4 text-background">
              <div className="text-xs uppercase tracking-wider text-primary">Pro tip</div>
              <p className="mt-2 text-sm">Receba alertas dos editais que combinam com sua área.</p>
              <Button size="sm" className="mt-3 w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90">Ativar alertas</Button>
            </div>
          </aside>

          {/* List */}
          <div className="divide-y divide-border rounded-2xl border border-border bg-card">
            {processos.map((p, i) => (
              <article key={p.id} className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-6 px-6 py-6 transition-colors hover:bg-secondary/40">
                <div className="absolute left-0 top-6 bottom-6 w-1 rounded-r bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex flex-col items-center gap-1 text-center">
                  <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Nº</div>
                  <div className="font-mono text-sm font-black text-foreground">{p.numero}</div>
                  <span className="mt-1 inline-flex h-6 items-center rounded-full bg-primary/10 px-2 text-[10px] font-bold uppercase tracking-wider text-primary">{p.tipo}</span>
                </div>
                <div className="min-w-0">
                  <div className="mb-1.5 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <span className="font-mono font-semibold text-foreground">{p.id}</span>
                    <span className="h-1 w-1 rounded-full bg-border" />
                    <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> {p.uf}</span>
                    <span className="h-1 w-1 rounded-full bg-border" />
                    <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.data}</span>
                  </div>
                  <h3 className="flex items-center gap-2 font-bold text-foreground">
                    <Building2 className="h-4 w-4 text-primary shrink-0" /> {p.orgao}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">{p.objeto}</p>
                </div>
                <div className="flex flex-col items-end gap-3">
                  <div className="text-right">
                    <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Encerra em</div>
                    <div className="text-sm font-black text-foreground">{p.prazo}</div>
                  </div>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-primary transition-transform group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona — horizontal numbered */}
      <section id="como-funciona" className="border-y border-border bg-secondary/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-primary">— Processo</div>
              <h2 className="mt-2 text-4xl font-black tracking-tight text-foreground max-w-xl">Três passos. Zero papel.</h2>
            </div>
            <p className="max-w-sm text-muted-foreground">Um fluxo desenhado para fornecedores de qualquer porte, com validação automática.</p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
            {[
              { n: "01", icon: Users, title: "Cadastre sua empresa", desc: "Envie os dados e a documentação uma única vez. Mantemos tudo seguro e validado." },
              { n: "02", icon: Search, title: "Explore editais", desc: "Filtre por região, tipo e órgão. Receba alertas dos editais que combinam com você." },
              { n: "03", icon: CheckCircle2, title: "Envie sua proposta", desc: "Acompanhe cada etapa do credenciamento com transparência total em tempo real." },
            ].map((step) => (
              <div key={step.n} className="group relative bg-card p-8 transition-colors hover:bg-foreground">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-5xl font-black text-primary">{step.n}</span>
                  <step.icon className="h-7 w-7 text-foreground transition-colors group-hover:text-primary" />
                </div>
                <h3 className="mt-12 text-xl font-bold text-foreground transition-colors group-hover:text-background">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground transition-colors group-hover:text-background/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-primary">— Por que WAY</div>
            <h2 className="mt-2 text-4xl font-black tracking-tight text-foreground">Transparência pública, sem fricção.</h2>
            <p className="mt-4 text-muted-foreground">
              Reduzimos a burocracia entre administração pública e fornecedores. Tudo rastreável, auditável e em conformidade com a Lei 14.133/21.
            </p>
            <Button variant="hero" size="lg" className="mt-8 rounded-full gap-2">
              Conhecer a plataforma <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Shield, title: "Conformidade legal", desc: "Aderente à Nova Lei de Licitações 14.133/21." },
              { icon: Zap, title: "Processo rápido", desc: "Credenciamento concluído em minutos, não dias." },
              { icon: TrendingUp, title: "Mais oportunidades", desc: "Acesso a editais de todo o território nacional." },
              { icon: Users, title: "Suporte humano", desc: "Equipe especializada para acompanhar fornecedores." },
            ].map((b, i) => (
              <div key={b.title} className={`rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary ${i % 2 === 0 ? "sm:translate-y-6" : ""}`}>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-bold text-foreground">{b.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-foreground p-12 lg:p-20">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/30 blur-[120px]" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-[100px]" />
          <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-primary">— Comece agora</div>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-background lg:text-5xl">
                Pronto para ganhar a próxima licitação?
              </h2>
              <p className="mt-4 max-w-xl text-background/70">
                Cadastre sua empresa hoje e seja avisado quando um novo edital de credenciamento for publicado.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 text-base gap-2">
                Cadastrar fornecedor <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-background/30 bg-transparent text-background hover:bg-background/10 hover:text-background h-14 text-base">
                Falar com a WAY
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-8 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-foreground">
              <span className="text-xs font-black text-primary">W</span>
            </div>
            <span className="text-sm font-semibold text-foreground">WAY Sistemas</span>
          </div>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} WAY Sistemas. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
