async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos"); // Lembrar de usar o comando: json-server --watch db.json ou npx json-server --watch db.json par iniciar o servidor.
    
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
    listaVideos
}
