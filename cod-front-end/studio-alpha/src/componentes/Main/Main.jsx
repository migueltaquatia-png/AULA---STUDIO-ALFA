import ServicoCard from "../ServicoCard/ServicoCard";
import "./Main.css";


const servicos = [
  {
    titulo: "Design de interface",
    icone: "🪟",
    descricao: "Telas clara, pensadas para o usuário"
  },
  {
    titulo: "Responsividade",
    icone: "📱",
    descricao: "O mesmo site em qualquer tela"
  },
  {
    titulo: "Performance",
    icone: "🚀",
    descricao: "Páginas leves que carregam rápido"
  }
];

function Main() {
  return (
    <main className="main">
      <section className="hero">
        <h1>Criamos sites que funcionam</h1>
        <p>
          Layouts renponsivos, rápidos e acessiveis para o seu negócio crescer
          na web.
        </p>

        <div className="hero-buttons">
          <a href="#orçamento" className="btn-primary">
            Peça um orçamento</a>
          <a href="#portifolio" className="btn-secondary"> Ver portifólio</a>
        </div>
      </section>

      <section className="servicos">
        <h2>Nossos serviços</h2>

        <div className="servicos-grid">
          {
            servicos.map((servico) => (
              <ServicoCard
                key={servico.id}
                titulo={servico.titulo}
                icone={servico.icone}
                descricao={servico.descricao}
              />
            ))
          }
        </div>
      </section>
    </main>
  );
}

export default Main;