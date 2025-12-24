import { useEffect, useRef, useState } from "react"
import api from "../../services/api";
import '../Download/download.css'

export default function Download () {
    let [links, setLinks] = useState([]);
    
    const inputName = useRef();
    const inputURL = useRef();

    async function createDownload() {
        try {
            console.log("TOKEN:", localStorage.getItem("token"));
            await api.post('/archive/', {
                //user: 'vitorandre',
                name: inputName.current.value,
                url: inputURL.current.value
            })
            alert("Cadastro efetuado com sucesso");
        } catch (e) {
            alert("Download sem sucesso");
            console.error("Erro ao cadastrar download: ", e);
        }
    }

    async function getLinks() {
        try {
            const linksApi = await api.get('/archive/');
            setLinks(linksApi.data);
            console.log(links)
        } catch (e) {
            console.error("Erro ao buscar arquivos: ", e);
        }
    }

    useEffect(() => {
        getLinks();
    }, [])

    return (
        <section className="downloads">
            <h1>Meus Downloads</h1>

            <form className="download-form">
                <div className="form-fields">
                    <input placeholder="Nome do arquivo" ref={inputName} />
                    <input placeholder="URL do arquivo" ref={inputURL} />
                </div>
                <button type="button" onClick={createDownload}>Adicionar</button>
            </form>


            <div className="download-list">
                {links.map(link => (
                <div className="download-card" key={link.id}>
                    <h3>{link.name}</h3>
                    <a href={link.archive} download>Baixar</a>
                </div>
                ))}
            </div>
        </section>
    )
}