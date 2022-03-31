import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://laralrncod.herokuapp.com'
})

// /usuarios/logar
export const login = async (url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data.token)
}

//usuarios/cadastro
export const cadastroUsuario = async (url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}

//serve para lista tema e lista postagem
export const busca = async (url: any, setDado: any, header: any) => {
    const resposta = await api.get(url, header)
    setDado(resposta.data)
}

//serve para buscar pelo id kkkkkk
export const buscaId = async (url: any, setDado: any, header: any) => {
    const resposta = await api.get(url, header)
    setDado(resposta.data)
}

//serve para cadastrar
export const post = async (url: any, dados: any, setDado: any, header: any) => {
    const resposta = await api.post(url, dados, header)
    setDado(resposta.data)
}

//serve para atualizar
export const put = async (url: any, dados: any, setDado: any, header: any) => {
    const resposta = await api.put(url, dados, header)
    setDado(resposta.data)
}

//serve para deletar
export const deleteId = async (url: any,  header: any) => {
     await api.delete(url, header)
}



