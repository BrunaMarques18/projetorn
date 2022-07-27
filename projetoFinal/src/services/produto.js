import httpcommon from "./httpcommon";
const url_produto = "/products";

const listarTodos = () => {
    return httpcommon.get(url_produto);
}

const inserirProduto = (produto) => {
    return httpcommon.post(url_produto,produto);
}

export default {
    listarTodos,
    inserirProduto
};