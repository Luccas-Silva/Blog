interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'GeoMonitor',
    description: `GeoMonitor é uma solução acadêmica criada no desafio Global Solution da FIAP para monitorar zonas de risco (encostas, barragens e áreas sujeitas a desastres). O projeto usa sensores IoT, IA e mensageria assíncrona para prever riscos, gerar alertas automáticos e agilizar respostas a eventos críticos.`,
    imgSrc: '',
    href: '/blog/GeoMonitor',
  },
  {
    title: 'Java BlackJack',
    description: `Java BlackJack é um projeto que recria o clássico jogo de cartas em Java, usando a Deck of Cards API, arquitetura em camadas e integração com banco de dados. Combina boas práticas de desenvolvimento com diversão para quem gosta de programação e jogos.`,
    imgSrc: '',
    href: '/blog/Java_BlackJack',
  },
  {
    title: 'Valorant WebSite',
    description: `Valorant WebSite é uma plataforma web feita em React para fãs de Valorant, reunindo informações sobre agentes, mapas, armas e estratégias, oferecendo uma experiência envolvente e informativa para jogadores de todos os níveis.`,
    imgSrc: '/static/images/Valorant.png',
    href: '/blog/Valorant_WebSite',
  },
  {
    title: 'Chess System Java',
    description: `Chess System Java é um jogo de xadrez para terminal, desenvolvido em Java com orientação a objetos e regras oficiais, oferecendo uma experiência completa e educativa para jogadores e estudantes de programação.`,
    imgSrc: '/static/images/Chess-System-Java.png',
    href: '/blog/Chess_System_Java',
  },
]

export default projectsData
