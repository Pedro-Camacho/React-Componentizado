import ContactForm from "../ContactForm";
import PersonalInfo from "../PersonalInfo";
import Skills from "../Skills";


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
                <Skills />
            </section>
            <ContactForm />
        </div>
    );
}

export default ConteudoPrincipal;