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
    foto: "/img/silvana-sobre.jpg",
    paragrafos: [
      "Sou Silvana, psicóloga clínica com atendimento online para pacientes de diversos convênios e particular. Meu trabalho é oferecer um espaço seguro, ético e profundamente humano para quem está atravessando um momento difícil. Aqui você é escutada com atenção, sem julgamento e sem fórmulas prontas. Cada história é única e cada processo respeita o seu tempo.",
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
      {
        titulo: "Ansiedade",
        texto:
          "Quando a mente não descansa, o corpo tensiona e o dia a dia fica pesado. A terapia ajuda a compreender o que está por trás da ansiedade e a construir formas mais leves de lidar com ela.",
      },
      {
        titulo: "Estresse",
        texto:
          "Quando as exigências aumentam e a energia acaba. Um espaço para organizar pensamentos, reconhecer limites e recuperar o equilíbrio.",
      },
      {
        titulo: "Luto",
        texto:
          "A perda muda tudo. Aqui o luto é acolhido com respeito, sem pressa e sem a obrigação de superar rápido. Cada dor tem seu tempo.",
      },
      {
        titulo: "Envelhecimento",
        texto:
          "Envelhecer traz perguntas, medos e também novas possibilidades. Um espaço para falar de solidão, invisibilidade, autonomia e recomeço, com dignidade e protagonismo depois dos 50 e dos 60.",
      },
      {
        titulo: "Apoio a quem cuida de um familiar",
        texto:
          "Este espaço é para quem cuida de um familiar: pai, mãe, marido, esposa, filho, irmão. Não é só para o cuidador profissional contratado. É principalmente para você, que cuida por amor, em casa, todos os dias, e muitas vezes sem ajuda. Cuidar de quem a gente ama é bonito, mas também cansa, sobrecarrega e isola. Aqui você encontra escuta qualificada, apoio emocional e ferramentas para se organizar, colocar limites e cuidar sem se anular. Quem cuida de um familiar também precisa ser cuidado.",
      },
      {
        titulo: "Transições de vida",
        texto:
          "Aposentadoria, ninho vazio, separação, mudanças. Momentos de travessia pedem espaço para elaborar o que ficou para trás e construir o que vem pela frente.",
      },
      {
        titulo: "Conflitos pessoais",
        texto:
          "Quando as relações ficam difíceis, em família, no trabalho ou consigo mesma. A terapia ajuda a colocar em palavras o que estava apenas doendo, e a encontrar novas formas de se relacionar.",
      },
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
    temas: ["Ansiedade", "Estresse", "Luto", "Envelhecimento", "Apoio a quem cuida de um familiar"],
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
