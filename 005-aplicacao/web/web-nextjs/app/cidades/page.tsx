import Link from "next/link";
import CidadeInterface from "../types/cidade";
import Line from "../components/Line";

const getAllCidades = async () => {
    
    const cidades = await fetch('http://localhost:5000/cidades', { cache: 'no-store'});

    return cidades.json();

}

export default async function Cidade() {
    
    const cidades : CidadeInterface[] = await getAllCidades();

    return(
        <main>
            <h1>Lista de cidades</h1>
            <Link href="/cidades/create">Cadastrar</Link>

            <ul>
                {

                    cidades.map( (cidade) =>{

                        const nome = `${cidade.nome} - ${cidade.estado.sigla}`;

                        return(
                            <Line key={cidade.id} id={cidade.id} description={cidade.nome} />
                        )

                    })

                }
            </ul>
        </main>
    )
}