export default {
    namespaced: true,
    state: {
        produtos: [],
        
    },
    getters: {
        valorTotal (state) {
            return state.produtos.map(p => p.quantidade * p.preco).reduce((total, atual) => total + atual, 0)
        }
    },
    mutations: {
        adicionarProduto (state, payload) {// payload representa nesse caso o produto uma mutation recebe dois paratos o state e um unico valor
            state.produtos.push(payload)
        },
        
    },
    actions: {
        adicionarProduto (context, payload) {
            setTimeout(() => {
                context.commit('adicionarProduto', payload)
            }, 1000);
        }
    }
}