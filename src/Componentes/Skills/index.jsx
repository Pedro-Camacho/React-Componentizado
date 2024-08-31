import Card from "../Card";


function Skills({ skills }) {
  const habilidades = [
    {
      titulo: "Html",
      nivel: "avancado",
      cor: "#a34b4b"
    },
    {
      titulo: "Node",
      nivel: "iniciante",
      cor: "#0292bd"
    },
    {
      titulo: "SQL",
      nivel: "Query",
      cor: "#356d4d"
    }

  ]
  return (
    <div className="skills">
      <Card habilidades={habilidades} />
    </div>
  );
}

export default Skills;