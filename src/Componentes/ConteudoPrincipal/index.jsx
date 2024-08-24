import ContactForm from "../ContactForm";
import PersonalInfo from "../PersonalInfo";
import Skills from "../Skills";
const skils = [
    {
        nome: "Java Script",
        nivel: "Avançado"
    },
    {
        nome: "Html",
        nivel: "Avançado"
    },
    {
        nome: "Css",
        nivel: "Avançado"
    }
]


function ConteudoPrincipal() {
    return (
        <div className="mainInfo">
            <section id='info'>
                <PersonalInfo
                    nome="Pedro Almeida e Camacho"
                    email="pedroalmeidacamacho@gmail.com"
                    tel="(55) 11 9873 1310"
                />
                <h2>Habilidades</h2>
                {skils.map(skill => <Skills nome={skill.nome} nivel={skill.nivel} />)}
            </section>
            <ContactForm />
        </div>
    );
}

export default ConteudoPrincipal;