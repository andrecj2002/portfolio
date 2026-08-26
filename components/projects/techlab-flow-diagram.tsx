"use client";

import { useLocale } from "@/hooks/use-locale";

const stepsByLocale = {
  en: [
    {
      leftTitle: "User Starts a Conversation",
      leftText: "Web interface\nDisplay and write messages;\nUpload files",
      rightTitle: "React +\nTypeScript",
    },
    {
      leftTitle: "Application Logic",
      leftText: "Message validation;\nProcess images;\nPrepare API request",
      rightTitle: "Node.js +\nTypeScript",
    },
    {
      leftTitle: "Bot Accesses Instructions",
      leftText:
        "SYSTEM_PROMPT_TEMPLATE:\nFlow and rules\ndoc content, context, services\nRESPONSE_STYLE: Formatting",
      rightTitle: "API - Claude\nAnthropic SDK",
    },
    {
      leftTitle: "Claude Returns a Response",
      leftText:
        "Based on the received context,\nit returns a response and\nsends a progress marker",
      rightTitle: "API - Claude\nAnthropic SDK\nMax: 1024 tokens",
    },
    {
      leftTitle: "Claude Collects Information",
      leftText:
        "Collects information about the\nconversation with the user and\ngenerates structured JSON",
      rightTitle: "API - Claude\nAnthropic SDK",
    },
    {
      leftTitle: "Claude Converts JSON to PDF",
      leftText: "Creates a PDF according to\nTechLab requirements",
      rightTitle: "jsPDF",
    },
    {
      leftTitle: "Email Sending and Export",
      leftText: "Sends the exported PDF by email\nand allows user download",
      rightTitle: "Node.js + Mailgun\nAPI",
    },
  ],
  pt: [
    {
      leftTitle: "Utilizador Inicia Conversa",
      leftText:
        "Interface web\nMostrar e Escrever Mensagens;\nEnviar Ficheiros",
      rightTitle: "React +\nTypeScript",
    },
    {
      leftTitle: "Lógica da Aplicação",
      leftText:
        "Validação das mensagens;\nProcessa imagens;\nPrepara pedido à API",
      rightTitle: "Node.js +\nTypeScript",
    },
    {
      leftTitle: "Bot acede a instruções",
      leftText:
        "SYSTEM_PROMPT_TEMPLATE:\nFluxo e Regras\ndoc content, sen; serviços\nRESPONSE_STYLE: Formatação",
      rightTitle: "API - Claude\nAnthropic SDK",
    },
    {
      leftTitle: "Claude Retorna Resposta",
      leftText:
        "Com base no contexto\nrecebido, retorna resposta e\nenvia marcador para barra de progresso",
      rightTitle: "API - Claude\nAnthropic SDK\nMáx: 1024 tokens",
    },
    {
      leftTitle: "Claude Recolhe Informações",
      leftText:
        "Recolhe informações sobre a\nconversa com o utilizador e\ngera um JSON estruturado",
      rightTitle: "API - Claude\nAnthropic SDK",
    },
    {
      leftTitle: "Claude converte JSON para PDF",
      leftText: "Criado PDF de acordo com as\nnecessidades do TechLab",
      rightTitle: "Jspdf",
    },
    {
      leftTitle: "Envio por E-mail e Exportação",
      leftText:
        "Envia PDF exportado para e-mail\ne permite download ao utilizador",
      rightTitle: "Node.js + Mailgun\nAPI",
    },
  ],
} as const;

export function TechLabFlowDiagram() {
  const { locale } = useLocale();
  const steps = stepsByLocale[locale] ?? stepsByLocale.pt;

  return (
    <section className="mt-12 rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-6">
      <div className="mb-5">
        <h2 className="text-2xl font-semibold">
          {locale === "en" ? "Application Flow" : "Fluxo da aplicação"}
        </h2>
      </div>

      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={`${step.leftTitle}-${index}`}>
            <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[minmax(0,1fr)_120px_minmax(0,1fr)]">
              <div className="rounded-xl border border-white/15 bg-white/5 p-4 text-left shadow-sm">
                <p className="text-base font-semibold text-foreground">
                  {step.leftTitle}
                </p>
                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-foreground/80">
                  {step.leftText}
                </p>
              </div>

              <div className="hidden items-center justify-center md:flex">
                <div className="h-px w-full bg-foreground/30" />
                <div className="ml-1 h-0 w-0 border-y-[6px] border-l-[8px] border-y-transparent border-l-foreground/60" />
              </div>

              <div className="rounded-xl border border-white/15 bg-white/5 p-4 text-left shadow-sm">
                <p className="text-base font-semibold text-foreground">
                  {step.rightTitle}
                </p>
              </div>
            </div>

            {index < steps.length - 1 && (
              <div className="mx-auto my-2 h-8 w-px bg-foreground/20" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
