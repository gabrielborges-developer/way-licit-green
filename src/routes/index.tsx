import { createFileRoute } from "@tanstack/react-router";
import { Search, Filter, Heart, FileText, ArrowRight, CheckCircle2, Shield, Zap, Users, TrendingUp, Building2, Clock, Award } from "lucide-react";
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
  {
    id: "WAY-001",
    numero: "035/2025",
    tipo: "Credenciamento",
    orgao: "Prefeitura Municipal de Belo Horizonte",
    objeto: "Credenciamento de empresas para prestação de serviços de saúde complementar ao SUS, com atendimento ambulatorial e exames especializados.",
    data: "20/05/2026",
    status: "Aberto",
  },
  {
    id: "WAY-002",
    numero: "024/2025",
    tipo: "Credenciamento",
    orgao: "Prefeitura Municipal de Curitiba",
    objeto: "Credenciamento de empresas especializadas em consultoria técnica e intelectual para acompanhamento estratégico das demandas municipais.",
    data: "18/05/2026",
    status: "Aberto",
  },
  {
    id: "WAY-003",
    numero: "052/2025",
    tipo: "Inexigibilidade",
    orgao: "Prefeitura Municipal de Jaboatão dos Guararapes",
    objeto: "Aquisição de inscrições para servidores da Secretaria Municipal de Educação participarem de capacitação técnica nacional.",
    data: "15/05/2026",
    status: "Aberto",
  },
  {
    id: "WAY-004",
    numero: "046/2025",
    tipo: "Credenciamento",
    orgao: "Prefeitura Municipal de São Lourenço",
    objeto: "Credenciamento de fornecedores para impressão de material gráfico exclusivo de combate à Dengue para a Vigilância Epidemiológica.",
    data: "12/05/2026",
    status: "Aberto",
  },
  {
    id: "WAY-005",
    numero: "118/2025",
    tipo: "Credenciamento",
    orgao: "Prefeitura Municipal de Barra Longa",
    objeto: "Credenciamento de prestadores de serviços médicos especializados nas áreas de cardiologia, ortopedia e pediatria.",
    data: "10/05/2026",
    status: "Aberto",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] shadow-[var(--shadow-elegant)]">
              <span className="text-lg font-black text-primary-foreground">W</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-black tracking-tight text-foreground">WAY</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">Sistemas</span>
            </div>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#processos" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Processos</a>
            <a href="#como-funciona" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Como funciona</a>
            <a href="#beneficios" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Benefícios</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="text-foreground hover:bg-secondary">Entrar</Button>
            <Button variant="hero">Cadastrar</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[image:var(--gradient-soft)]" />
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-[image:var(--gradient-primary)] opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full bg-primary-glow opacity-10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Badge variant="outline" className="mb-6 border-primary/30 bg-primary/5 text-primary">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Plataforma oficial de credenciamento
              </Badge>
              <h1 className="text-5xl font-black tracking-tight text-foreground lg:text-6xl">
                Credenciamento de fornecedores,
                <span className="block bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
                  simples e transparente.
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                A WAY Sistemas conecta órgãos públicos e fornecedores em processos licitatórios abertos. Cadastre-se uma vez, participe quantas vezes quiser.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="hero" size="lg" className="gap-2">
                  Cadastrar fornecedor <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="border-primary/30 text-foreground hover:bg-primary/5">
                  Ver processos abertos
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
                <div>
                  <div className="text-3xl font-black text-foreground">+2.400</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Fornecedores</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-foreground">+180</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Órgãos públicos</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-foreground">98%</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Aprovação</div>
                </div>
              </div>
            </div>

            {/* Hero card preview */}
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-[image:var(--gradient-primary)] opacity-30 blur-2xl" />
              <div className="relative rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm font-semibold text-foreground">Processo de Credenciamento</span>
                  </div>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/15">Aberto</Badge>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Dados da empresa", done: true },
                    { label: "Documentação fiscal", done: true },
                    { label: "Atestados técnicos", done: true },
                    { label: "Proposta enviada", done: false },
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-full ${step.done ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>
                        {step.done ? <CheckCircle2 className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-foreground">{step.label}</div>
                        <div className="h-1.5 mt-1 overflow-hidden rounded-full bg-secondary">
                          <div className={`h-full bg-[image:var(--gradient-primary)] ${step.done ? "w-full" : "w-1/3"}`} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="hero" className="mt-6 w-full">Continuar credenciamento</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search + Processos */}
      <section id="processos" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-foreground">Processos abertos</h2>
            <p className="mt-1 text-muted-foreground">Encontre oportunidades de credenciamento em tempo real.</p>
          </div>
          <Badge variant="outline" className="w-fit border-primary/30 bg-primary/5 text-primary">
            <Heart className="mr-1.5 h-3 w-3 fill-primary" /> Favoritos
          </Badge>
        </div>

        <div className="mb-6 flex flex-col gap-3 rounded-2xl border border-border bg-card p-3 shadow-[var(--shadow-card)] sm:flex-row">
          <Button variant="outline" className="gap-2 border-primary/20 text-foreground hover:bg-primary/5">
            <Filter className="h-4 w-4" /> Filtros
          </Button>
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Pesquise por ID, número do processo, órgão público ou objeto"
              className="border-0 bg-secondary/50 pl-10 text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
            />
          </div>
        </div>

        <div className="space-y-4">
          {processos.map((p) => (
            <article
              key={p.id}
              className="group relative grid grid-cols-[140px_1fr_120px_56px] overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-[var(--transition-smooth)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-0.5"
            >
              {/* Left tag */}
              <div className="relative flex flex-col items-center justify-center bg-[image:var(--gradient-card)] p-6 text-primary-foreground">
                <Badge className="absolute left-3 top-3 bg-primary-foreground/15 text-[10px] text-primary-foreground backdrop-blur hover:bg-primary-foreground/20">
                  {p.numero}
                </Badge>
                <Award className="mb-2 h-7 w-7" />
                <span className="text-xs font-bold uppercase tracking-wider">{p.tipo}</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-2 flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-primary" />
                  <h3 className="font-bold text-foreground">{p.orgao}</h3>
                </div>
                <p className="line-clamp-2 text-sm text-muted-foreground">{p.objeto}</p>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="font-mono font-semibold text-foreground">ID {p.id}</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span>{p.numero}</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span>{p.data}</span>
                </div>
              </div>

              {/* Contract chip */}
              <div className="flex flex-col items-center justify-center gap-1 border-l border-border bg-secondary/30">
                <FileText className="h-5 w-5 text-primary" />
                <span className="text-xs font-semibold text-foreground">Contrato</span>
              </div>

              {/* Arrow */}
              <button className="flex items-center justify-center bg-[image:var(--gradient-primary)] text-primary-foreground transition-transform group-hover:scale-105">
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="border-y border-border bg-secondary/30 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4 border-primary/30 bg-background text-primary">Como funciona</Badge>
            <h2 className="text-4xl font-black tracking-tight text-foreground">Três passos para se credenciar</h2>
            <p className="mt-3 text-muted-foreground">Um fluxo enxuto, pensado para fornecedores de qualquer porte.</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { n: "01", icon: Users, title: "Cadastre sua empresa", desc: "Envie os dados e a documentação uma única vez. A WAY mantém tudo seguro e validado." },
              { n: "02", icon: Search, title: "Explore processos abertos", desc: "Filtre por região, tipo e órgão. Receba alertas dos editais que combinam com você." },
              { n: "03", icon: CheckCircle2, title: "Envie sua proposta", desc: "Acompanhe cada etapa do credenciamento com transparência total e em tempo real." },
            ].map((step) => (
              <div key={step.n} className="relative rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
                <div className="absolute -top-3 right-6 rounded-full bg-[image:var(--gradient-primary)] px-3 py-1 text-xs font-black text-primary-foreground shadow-[var(--shadow-elegant)]">
                  {step.n}
                </div>
                <step.icon className="h-10 w-10 text-primary" />
                <h3 className="mt-4 text-lg font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/5 text-primary">Por que WAY</Badge>
            <h2 className="text-4xl font-black tracking-tight text-foreground">Construído para a transparência pública.</h2>
            <p className="mt-4 text-muted-foreground">
              Reduzimos a burocracia entre administração pública e fornecedores. Tudo rastreável, auditável e em conformidade com a Lei 14.133/21.
            </p>
            <Button variant="hero" size="lg" className="mt-6 gap-2">
              Conhecer a plataforma <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Shield, title: "Conformidade legal", desc: "Aderente à Nova Lei de Licitações." },
              { icon: Zap, title: "Processo rápido", desc: "Credenciamento concluído em minutos." },
              { icon: TrendingUp, title: "Mais oportunidades", desc: "Acesso a editais de todo o país." },
              { icon: Users, title: "Suporte humano", desc: "Equipe especializada para fornecedores." },
            ].map((b) => (
              <div key={b.title} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-[var(--transition-smooth)] hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <b.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-bold text-foreground">{b.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[image:var(--gradient-primary)] p-12 text-center shadow-[var(--shadow-elegant)] lg:p-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="relative">
            <h2 className="text-4xl font-black tracking-tight text-primary-foreground lg:text-5xl">
              Pronto para participar de novas licitações?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
              Cadastre sua empresa hoje e seja avisado quando um novo edital de credenciamento for publicado.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                Cadastrar fornecedor
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                Falar com a WAY
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[image:var(--gradient-primary)]">
              <span className="text-sm font-black text-primary-foreground">W</span>
            </div>
            <span className="text-sm font-semibold text-foreground">WAY Sistemas © 2026</span>
          </div>
          <p className="text-xs text-muted-foreground">Plataforma de credenciamento e licitações públicas.</p>
        </div>
      </footer>
    </div>
  );
}
