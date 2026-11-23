// Todos os textos, links e imagens do site ficam aqui.
// Para trocar algo, edite só este arquivo.

export const clinic = {
  // true = mostra o aviso "prévia" no rodapé e pede aos buscadores para não indexar.
  // Trocar para false quando o site for publicado.
  emPrevia: true,

  nome: "Silvana Di Stasi",
  profissao: "Psicóloga",
  registro: "CRP 06/33874",
  cidade: "São Paulo",

  // WhatsApp (só números, com DDI+DDD, ex.: "5511999999999"). Vazio = os botões levam à seção de contato.
  whatsapp: "5511997767770",
  whatsappMensagem: "Olá, Silvana! Vim pelo seu site e gostaria de agendar uma conversa.",

  foto: "/img/silvana.jpg",
  fotoAlt: "Silvana Di Stasi",

  hero: {
    rotulo: "Psicóloga · São Paulo",
    tituloAntes: "Cuidar da mente com ",
    tituloDestaque: "presença",
    subtitulo:
      "Atendimento a adultos e público 50+, abordagem centrada na pessoa (humanista), online, por convênios e particular.",
    botaoPrincipal: "Marcar primeira conversa",
    linkSecundario: "Conhecer o trabalho",
    atendimento: "Atendimento online",
    dica: "Role para conhecer",
  },

  // três cartões sobre o retrato
  destaques: [
    { icone: "hex", titulo: "Centrada na Pessoa", legenda: "Abordagem" },
    { icone: "tela", titulo: "Atendimento online", legenda: "Atendimento" },
    { icone: "chat", titulo: "Adultos e público 50+", legenda: "Atende" },
  ],

  faixa: [
    { icone: "escudo", rotulo: "Registro profissional", valor: "CRP 06/33874" },
    { icone: "pin", rotulo: "Atendimento em", valor: "São Paulo e online" },
  ],

  manifesto: {
    rotulo: "Manifesto",
    antes: "Olhar para o que dói pede ",
    destaque: "cuidado",
    depois: ", método e uma escuta que não tem pressa.",
    sub: "Aqui, o seu tempo e a sua história vêm em primeiro lugar.",
    valores: ["Escuta", "Cuidado", "Ética", "Respeito"],
  },

  sobre: {
    rotulo: "Sobre",
    tituloAntes: "Silvana, em ",
    tituloDestaque: "poucas",
    tituloDepois: " palavras",
    paragrafos: [
      "Psicóloga clínica na modalidade online, com atendimento a pacientes de diversos convênios e particular.",
    ],
    ficha: [
      { rotulo: "Abordagem", valor: "Abordagem Centrada na Pessoa (humanista)" },
      { rotulo: "Atende", valor: "Adultos e público 50+" },
    ],
  },

  temas: {
    rotulo: "Quando procurar",
    tituloAntes: "Temas em que ",
    tituloDestaque: "posso",
    tituloDepois: " ajudar",
    lista: [
      "Ansiedade",
      "Estresse",
      "Luto",
      "Envelhecimento",
      "Apoio a cuidadores",
      "Transições de vida",
      "Conflitos pessoais",
    ],
  },

  passos: {
    rotulo: "Como funciona",
    tituloAntes: "O percurso começa com ",
    tituloDestaque: "tranquilidade",
    lista: [
      { icone: "chat", titulo: "Primeiro contato", texto: "Você escreve e combinamos o melhor dia e formato." },
      { icone: "calendario", titulo: "Primeira conversa", texto: "Entendemos o que te trouxe e o que você espera." },
      { icone: "hex", titulo: "Sessões", texto: "Encontros regulares, no ritmo que faz sentido para você." },
      { icone: "coracao", titulo: "Acompanhamento", texto: "Revisamos o caminho juntos e ajustamos o que for preciso." },
    ],
  },

  atendimento: {
    rotulo: "Formas de atendimento",
    tituloAntes: "Como é o ",
    tituloDestaque: "atendimento",
    cartoes: [
      {
        icone: "tela",
        rotulo: "Online",
        titulo: "Por vídeo, de onde você estiver",
        itens: ["Mesmo sigilo e mesmos cuidados do atendimento presencial"],
      },
      {
        icone: "escudo",
        rotulo: "Convênios",
        titulo: "Convênios e particular",
        itens: ["Atendimento por convênios e particular"],
      },
    ],
    botaoCartao: "Agendar",
    convite: "Quer saber qual formato combina melhor com você?",
    botaoConvite: "Agendar uma conversa",
  },

  contato: {
    rotulo: "Contato",
    tituloAntes: "Comece por uma ",
    tituloDestaque: "conversa",
    texto: "Escreva para combinar o melhor dia e o melhor formato para você.",
    botao: "Agendar conversa",
    selo: { titulo: "Atendimento online", legenda: "Por vídeo, de onde você estiver" },
    infos: [
      { rotulo: "Online", valor: "Atendimento por vídeo" },
      { rotulo: "Convênios", valor: "Atendimento por convênios e particular" },
    ],
  },

  rodape: {
    navegacao: [
      { rotulo: "Sobre", href: "#sobre" },
      { rotulo: "Temas", href: "#temas" },
      { rotulo: "Como funciona", href: "#como-funciona" },
      { rotulo: "Atendimento", href: "#atendimento" },
    ],
    temas: ["Ansiedade", "Estresse", "Luto", "Envelhecimento", "Apoio a cuidadores"],
    contato: ["Atendimento online"],
    emergencia: "Em situação de emergência, ligue 188 (CVV) ou 192 (SAMU).",
    botao: "Agendar conversa",
    avisoPrevia: "Prévia ilustrativa criada para apresentação. Ainda não publicada.",
  },
};

export function linkWhatsapp(): string {
  const n = clinic.whatsapp.replace(/\D/g, "");
  if (!n) return "#contato";
  return `https://wa.me/${n}?text=${encodeURIComponent(clinic.whatsappMensagem)}`;
}
