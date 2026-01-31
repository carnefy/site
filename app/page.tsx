/* 
  Arquivo: site/app/page.tsx
  Descrição: Landing Page do Carnefy recriada em Next.js com foco em SEO e performance.
*/

import Image from "next/image";
import type { Metadata } from "next";
import React from "react";
import NewsletterForm from "@/components/newsletterForm";
// import NewsletterForm from "@/components/newsletterForm";

// Configuração de Metadados para SEO (Server-Side)
export const metadata: Metadata = {
  title: "Carnefy",
  description:
    "Carnefy traz a experiência premium de um açougue artesanal direto para você. Qualidade, variedade e conveniência em um único aplicativo.",
  keywords: [
    "carne",
    "açougue",
    "delivery",
    "churrasco",
    "premium",
    "app de carne",
  ],
  openGraph: {
    title: "Carnefy - O seu açougue na palma da mão",
    description:
      "Receba carnes nobres e cortes especiais em casa com o Carnefy.",
    url: "https://carnefy.com",
    siteName: "Carnefy",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carnefy - O seu açougue na palma da mão",
    description:
      "A experiência premium de um açougue artesanal no seu smartphone.",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-800 font-sans selection:bg-[#FF484B] selection:text-white">
      {/* Header / Navegação */}
      <header className="sticky top-0 z-50 bg-zinc-900/95 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="relative h-10 w-32">
            <Image
              src="/assets/logo_carnefy.svg"
              alt="Carnefy"
              fill
              className="object-contain object-left"
              priority
            />
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-300">
            <a
              href="#funcionalidades"
              className="hover:text-[#FF484B] transition-colors duration-200"
            >
              Funcionalidades
            </a>
            <a
              href="#como-funciona"
              className="hover:text-[#FF484B] transition-colors duration-200"
            >
              Como Funciona
            </a>
            <a
              href="#baixar"
              className="hover:text-[#FF484B] transition-colors duration-200"
            >
              Baixar App
            </a>
          </nav>

          <button className="md:hidden text-white">
            <span className="sr-only">Abrir menu</span>☰
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-12 md:py-24 flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-zinc-900">
              O seu açougue na{" "}
              <span className="text-[#FF484B]">palma da mão</span>
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed max-w-lg">
              Carnefy traz a experiência premium de um açougue artesanal direto
              para você. Qualidade, variedade e conveniência em um único
              aplicativo.
            </p>

            <div className="space-y-6 py-2">
              <FeatureItem
                icon={
                  <Image
                    src="/assets/flame_icon.svg"
                    alt="Carnefy"
                    width={24}
                    height={24}
                  />
                }
                title="Carnes Premium Selecionadas"
                desc="Apenas os melhores cortes de fornecedores confiáveis"
              />
              <FeatureItem
                icon={
                  <Image
                    src="/assets/clock.svg"
                    alt="Carnefy"
                    width={24}
                    height={24}
                  />
                }
                title="Entrega Rápida"
                desc="Receba suas carnes frescas em poucas horas"
              />
              <FeatureItem
                icon={
                  <Image
                    src="/assets/store.svg"
                    alt="Carnefy"
                    width={24}
                    height={24}
                  />
                }
                title="Açougues Parceiros"
                desc="Conecte-se com os melhores açougues da sua região"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mt-8">
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 px-4 py-3 rounded-lg border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF484B]/50 transition-all"
                aria-label="Endereço de e-mail para notificação"
              />
              <button className="bg-[#FF484B] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#e03e41] transition-colors shadow-lg shadow-[#FF484B]/20">
                Notificar
              </button>
            </div>
          </div>

          <div className="md:w-1/2 relative w-full">
            {/* Imagem Principal - Usando next/image para otimização automática */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              {/* Como não tenho a imagem original recortada, estou usando a imagem do site como placeholder. 
                   Em produção, substitua por uma imagem de alta qualidade das carnes. */}
              <Image
                src="/assets/image_beef.webp"
                alt="Seleção de carnes premium Carnefy"
                fill
                className="object-cover object-top"
                priority // Carrega com prioridade para melhorar LCP (Largest Contentful Paint)
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Seção: Por que escolher */}
        <section id="funcionalidades" className="bg-white py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900 mb-4">
                Por que escolher Carnefy?
              </h2>
              <div className="w-20 h-1 bg-[#FF484B] mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                }
                title="App Intuitivo"
                desc="Interface elegante e fácil de usar, desenvolvida para oferecer a melhor experiência de compra."
              />
              <Card
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>
                }
                title="Qualidade Garantida"
                desc="Todas as carnes passam por rigoroso controle de qualidade e higiene antes de chegar a você."
              />
              <Card
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                }
                title="Cobertura Local"
                desc="Conectamos você aos melhores açougues da sua região com entrega rápida e segura."
              />
            </div>
          </div>
        </section>

        {/* Seção: App Preview */}
        <section className="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-16 overflow-hidden">
          <div className="md:w-1/2 relative">
            {/* Placeholder visual para o App */}
            <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
              <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
              <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
                {/* Aqui iria a imagem da tela do app */}
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-400 flex-col">
                  <Image
                    src="/assets/splash.png"
                    alt="Seleção de carnes premium Carnefy"
                    fill
                    className="object-cover"
                    priority // Carrega com prioridade para melhorar LCP (Largest Contentful Paint)
                    sizes="(max-width: 768px) 100vw, 100vw"
                  />
                </div>
                {/* Simulando conteúdo do app */}
                <div className="absolute top-0 w-full h-full from-transparent via-transparent to-black/50 pointer-events-none"></div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2A1C15]">
              Experiência Premium no seu Smartphone
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              O app Carnefy oferece uma experiência completa e sofisticada.
              Navegue por uma seleção curada de carnes premium, compare preços
              de diferentes açougues, e faça suas compras com poucos cliques.
            </p>
            <ul className="space-y-4">
              <CheckItem text="Catálogo completo de carnes e cortes especiais" />
              <CheckItem text="Histórico de pedidos e recomendações personalizadas" />
              <CheckItem text="Rastreamento de entrega em tempo real" />
              <CheckItem text="Avaliações e reviews de outros clientes" />
            </ul>
          </div>
        </section>

        {/* Seção: Como Funciona */}
        <section
          id="como-funciona"
          className="bg-white text-white py-24 relative overflow-hidden"
        >
          {/* Background pattern sutil */}
          <div className="absolute inset-0 opacity-5 bg-[url('/assets/pattern.png')]"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-[#2A1C15]">
                Como Funciona
              </h2>
              <p className="text-zinc-400">
                Do açougue para sua mesa em 4 passos simples
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              <Step
                number="1"
                title="Baixe o App"
                desc="Disponível em breve na App Store e Google Play"
              />
              <Step
                number="2"
                title="Escolha suas Carnes"
                desc="Navegue por nossa seleção premium de cortes"
              />
              <Step
                number="3"
                title="Faça seu Pedido"
                desc="Escolha o açougue e confirme sua compra"
              />
              <Step
                number="4"
                title="Receba em Casa"
                desc="Entrega rápida e segura na sua porta"
              />
            </div>
          </div>
        </section>

        {/* Seção: Em Breve / CTA */}
        <section
          id="baixar"
          className="container mx-auto px-6 py-24 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-zinc-900 mb-6">
            Em Breve
          </h2>
          <p className="text-xl text-zinc-600 mb-12 max-w-2xl mx-auto">
            Carnefy estará disponível em breve nas principais lojas de
            aplicativos. Prepare-se para mudar a forma como você compra carne.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <StoreButton store="apple" label="App Store" />
            <StoreButton store="google" label="Google Play" />
          </div>

          <div className="max-w-xl mx-auto bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="font-bold text-xl mb-2">Seja o primeiro a saber</h3>
            <p className="text-sm text-zinc-500 mb-6">
              Inscreva-se acima para receber uma notificação exclusiva de
              lançamento.
            </p>
            <NewsletterForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white pt-16 pb-8 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="relative h-10 w-32">
                <Image
                  src="/assets/logo_carnefy.svg"
                  alt="Carnefy"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                O seu açougue na palma da mão. Conectando você à qualidade e
                tradição.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-white">Produto</h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Funcionalidades
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Como Funciona
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Para Açougues
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-white">Empresa</h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-white">Rede Sociais</h4>
              <div className="flex gap-4">
                {/* Social Icons Placeholders */}
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF484B] transition-colors"
                >
                  <Image
                    src="/assets/instagram.svg"
                    alt="Carnefy"
                    width={20}
                    height={20}
                  />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF484B] transition-colors"
                >
                  <Image
                    src="/assets/facebook.svg"
                    alt="Carnefy"
                    width={20}
                    height={20}
                  />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF484B] transition-colors"
                >
                  <Image
                    src="/assets/linkedin.svg"
                    alt="Carnefy"
                    width={20}
                    height={20}
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-zinc-500 text-xs">
            <p>
              &copy; {new Date().getFullYear()} Carnefy. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Componentes Auxiliares para manter o código limpo

function FeatureItem({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-gray-100">
      <span className="text-2xl bg-[#FF484B]/10 w-12 h-12 flex items-center justify-center rounded-full shrink-0">
        {icon}
      </span>
      <div>
        <h3 className="font-bold text-zinc-900 text-lg">{title}</h3>
        <p className="text-sm text-zinc-500 mt-1">{desc}</p>
      </div>
    </div>
  );
}

function Card({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-[#FDFBF7] p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-14 h-14 bg-[#FF484B] text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[#FF484B]/30 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-zinc-900">{title}</h3>
      <p className="text-zinc-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 text-zinc-700">
      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#FF484B]/10 text-[#FF484B] text-xs font-bold">
        ✓
      </span>
      {text}
    </li>
  );
}

function Step({
  number,
  title,
  desc,
}: {
  number: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="relative group">
      <div className="w-20 h-20 bg-[#FF484B] text-[#FFFF] rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg shadow-black/30 group-hover:scale-110 transition-transform duration-300">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-sm text-zinc-400 max-w-[200px] mx-auto">{desc}</p>
    </div>
  );
}

function StoreButton({
  store,
  label,
}: {
  store: "apple" | "google";
  label: string;
}) {
  return (
    <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-gray-800 transition-colors shadow-lg">
      {store === "apple" ? (
        ""
      ) : (
        <svg className="w-4 h-4 fill-current ml-1" viewBox="0 0 24 24">
          <path d="M5 3.79004V20.21C5 20.58 5.34 20.84 5.67 20.66L19.35 12.45C19.66 12.27 19.66 11.73 19.35 11.55L5.67 3.34004C5.34 3.16004 5 3.42004 5 3.79004Z" />
        </svg>
      )}
      <div className="text-left leading-tight">
        <div className="text-[10px] uppercase tracking-wider opacity-70">
          Disponível na
        </div>
        <div className="font-bold text-sm">{label}</div>
      </div>
    </button>
  );
}
