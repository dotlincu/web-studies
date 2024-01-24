
const getAllEstados = async () => {
    try {
        const estados = await fetch('http://localhost:5000/estados')

        if (!estados.ok) {
            throw new Error(estados.statusText);
        }

        return estados.json();

    } catch (error) {
        console.log("Erro ao obter estados:", error);
        return [];
    }
}

interface EstadoInterface {
    id: number;
    nome: string;
    sigla: string;
    created_at: string;
    updated_at: string;
}

export default async function Estado() {
    try {

        const estados : EstadoInterface[] = await getAllEstados();

        return(
            <main>
                <h1>Lista de estados</h1>

                <ul>
                    {

                        estados.map( (estado) =>{

                            return(
                                <li key={estado.id}>
                                    {estado.nome}-{estado.sigla}
                                </li>
                            )

                        })

                    }
                </ul>
            </main>
        );
    } catch (error) {
        console.log("Erro ao renderizar lista de estados:", error);
        return (
            <main>
                <h1>Erro ao carregar a lista de estados</h1>
            </main>
        )
    }
}