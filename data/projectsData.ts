interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'GeoMonitor',
    description: `O **GeoMonitor** é uma solução acadêmica desenvolvida como parte do desafio Global Solution da FIAP, com foco no monitoramento inteligente de zonas de risco como encostas, barragens e regiões suscetíveis a desastres naturais. Utilizando sensores IoT, inteligência artificial e mensageria assíncrona, o projeto viabiliza acompanhamento preditivo, geração de alertas automáticos e resposta ágil a eventos críticos.`,
    imgSrc: '',
    href: '/blog/GeoMonitor',
  },
  {
    title: 'Java BlackJack',
    description: `O **Java BlackJack** é um projeto que traz o clássico jogo de cartas para o universo Java, com uma implementação robusta, modular e conectada a um banco de dados real! Utilizando a [Deck of Cards API](https://www.deckofcardsapi.com/) e arquitetura em camadas, o projeto serve tanto como exemplo de boas práticas em desenvolvimento quanto como um divertido passatempo para amantes de programação e jogos.`,
    imgSrc: '',
    href: '/blog/Java_BlackJack',
  },
  {
    title: 'Chess System Java',
    description: `O **Chess System Java** é um projeto que traz o clássico jogo de xadrez para o terminal, totalmente implementado em Java. Com arquitetura orientada a objetos e lógica fiel às regras oficiais do xadrez, o sistema oferece uma experiência completa e educativa tanto para jogadores quanto para estudantes de programação.`,
    imgSrc: '',
    href: '/blog/Chess_System_Java',
  },
  {
    title: 'Valorant WebSite',
    description: `O **Valorant WebSite** é uma plataforma web dedicada aos fãs do game Valorant, desenvolvida com as tecnologias mais atuais do ecossistema React. O site reúne informações completas sobre agentes, mapas, arsenal e estratégias, proporcionando uma experiência envolvente e informativa para jogadores de todos os níveis.`,
    imgSrc: '',
    href: '/blog/Valorant_WebSite',
  },
]

export default projectsData
