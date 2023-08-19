import imagem from "../img/assembly.png"
import "./conteudo.css"

const Conteudo = () => {
    return (
        <div className="div"> 
            <h2>O que são?</h2>
            <p>As linguagens de baixo nivel são voltadas para 
               para o entendimento de maquinas por isso não são 
               facilmente interpretadas por humanos.
            </p>
            <p>
                essas linguagens são constituidas por 0 e 1, 
               tambem conhecida como código binario, por esse motivo essas linguagens
               possuem instruções mais diretas para processadores o que faz com 
               que ela seja mais proxima da linguagem de maquina.
            </p>
            <p>
                Então para conseguir usa-la é preciso conhecer a linguagem e 
                o hardware em que vai trabalhar.
            </p>
            <p>
                Um exemplo dessas linguagens é o Assembly.
            </p>
            <img 
                className="imagem"
                src={imagem} 
                alt="Linguagem assembly"
                title="assembly language"
            />
            <h2>Qual sua importância?</h2>
            <p>
                Diversos malwares e vírus atuam em nível de comandos internos 
                de sistemas operacionais e linguagens de máquina,
                conhecer a linguagem assembly é fundamental para podermos decodificar 
                e interpretar as ações realizadas por estes códigos maliciosos.
            </p>
            <p>
                Desta forma, nas atividades de segurança da informação relacionadas a 
                "Threat Defense" você pode usar o recurso chamado de "engenharia reversa"
                para transformar um programa já compilado em código assembly.
            </p>
            <p>
                Realizando o processo de de-compilação você é capaz de entender 
                o comportamento de um malware ou ransoware via instruções de baixo nivel,
                quebrar códigos de proteção e crackear programas.

            </p>
        </div>
    )
}

export default Conteudo