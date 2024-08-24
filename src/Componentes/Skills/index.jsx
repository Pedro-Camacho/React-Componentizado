function Skills({ skills, nome, nivel }) {
  return (
    <div className="skills">
      <div class="skill-card">
        <h3>{nome}</h3>
        <p>Nível: {nivel}</p>
      </div>
    </div>
  );
}

export default Skills;