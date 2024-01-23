"us client"

import { FormEvent, useState } from "react";

export default function CreateEstado() {

    const [ nome, setNome ] = useState('');
    const [ sigla, setSigla ] = useState('');

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const data = {
            nome,
            sigla
        }

        const requestInit : RequestInit = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    }
    
    return(
        <main className="container m-auto" >
            <h1>Cadastro de estados: {nome}-{} </h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="nome" id="nome" onChange={(event)=> {}} />
                </div>
                
                <div>
                    <label htmlFor="sigla">Sigla</label>
                    <input type="text" name="sigla" id="sigla" />
                </div>

                <div>
                    <button type="submit">Cadastrar</button>
                    <button type="reset">Limpar</button>
                </div>

            </form>
        
        </main>
    )

}