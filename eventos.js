const eventContent = {
  casamentos: { title: 'Casamentos', line: 'O sabor que acompanha <em>o seu sim.</em>', description: 'Esta página está sendo preparada para receber as histórias, mesas e detalhes reais dos casamentos atendidos pela Lorena Buffet.' },
  aniversarios: { title: 'Aniversários', line: 'Motivos para celebrar <em>com sabor.</em>', description: 'Em breve, esta página reunirá momentos reais de aniversários celebrados com o cuidado da Lorena Buffet.' },
  confraternizacoes: { title: 'Confraternizações', line: 'Encontros que viram <em>boas memórias.</em>', description: 'Estamos preparando este espaço para mostrar as confraternizações que ganharam sabor e acolhimento com a Lorena Buffet.' },
  recepcoes: { title: 'Recepções', line: 'Receber bem começa <em>pela mesa.</em>', description: 'Esta página receberá, em breve, imagens reais das recepções servidas pela Lorena Buffet.' },
  corporativos: { title: 'Eventos corporativos', line: 'Profissionalismo servido <em>em cada detalhe.</em>', description: 'Estamos preparando este espaço com registros reais de coffee breaks, coquetéis e eventos corporativos.' },
  institucionais: { title: 'Eventos institucionais', line: 'Para encontros que pedem <em>presença e cuidado.</em>', description: 'Em breve, esta página mostrará a experiência da Lorena Buffet em eventos institucionais.' }
};
const content = eventContent[document.body.dataset.event];
document.title = `${content.title} | Lorena Buffet`;
document.querySelector('[data-event-title]').textContent = content.title;
document.querySelector('[data-event-line]').innerHTML = content.line;
document.querySelector('[data-event-description]').textContent = content.description;
