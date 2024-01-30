import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation";
import Input from "@/app/components/forms/Input";

export default function CreateEstado() {

    const [nome, setNome] = useState('');
    const [estado, setEstado] = useState('');

    const { push } = useRouter()

    async function handleSubmit(event : FormEvent) {
        event.preventDefault();

        const data = {
            nome,
            estado_id: estado
        }

        const requestInit : RequestInit = {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        }

        try {
            
            const response = await fetch('http://localhost:5000/estados', requestInit)

            if (response.ok) {
                const cidade = await response.json();
                const { id } = cidade;
                window.alert(`Cidade inserida com sucesso! Id: ${id}`)
                // Redirect -> /estados
                push('/estados')
            }

        } catch (error) {
            
        }

    }


    return(
        <main className="container m-auto">

            <h1>Cadastro de estados: {nome}-{}</h1>

            <form onSubmit={handleSubmit}>

                <Input name="nome" label="Nome" setValue={(event) =>{setNome(event.target.value)}} />

                <Input name="estadoId" label="EstadoId" setValue={(event) =>{setEstado(event.target.value)}} />

                <div>
                    <button 
                        type="submit">Cadastrar</button>  
                    <button type="reset">Limpar</button> 
                </div>

            </form>

        </main>
    )

}