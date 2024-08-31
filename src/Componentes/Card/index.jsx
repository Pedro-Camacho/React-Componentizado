import './Card.css';
export default function Card({ habilidades }) {
    return (


        <>
            {
                habilidades.map((habilidade, index) =>
                    <div
                        className="skill-card"
                        key={index}
                        style={
                            {
                                backgroundColor: habilidade.cor
                            }
                        }>
                        <h3>{habilidade.titulo}</h3>
                        <p>Nível: {habilidade.nivel}</p>

                    </div>
                )
            }
        </>
    );
}   