<template>
  <Painel
    titulo="Loja Virtual"
    verde
  >
    <div class="loja">
      <span>Adicionar</span>
      <input
        type="number"
        v-model.number="quantidade"
      >
      <span>itens de <strong>R$</strong></span>
      <input
        type="number"
        v-model.number="preco"
      >
      <button @click="adicionar">Agora!</button>
    </div>
  </Painel>
</template>

<script>
import { mapActions } from 'vuex'
export default {

  computed: {
    quantidade () {
      return this.$store.state.parametros.quantidade
    },
    preco () {
      return this.$store.state.parametros.preco
    }
  },
  data () {
    return {
      sequencia: 1,

    }
  },
  methods: {
    ...mapActions('carrinho', ['adicionarProduto']), //melhor utilizar quando existe várias mutations podendo acessa - las como locais
    adicionar () {
      const produto = {
        id: this.sequencia,
        nome: `Produto ${this.sequencia}`,
        quantidade: this.quantidade,
        preco: this.preco
      }
      this.sequencia++
      //    this.$store.state.produtos.push(produto)
      //utilizando mutations sem import com commit
      //   this.$store.commit('adicionarProduto', produto)
        this.adicionarProduto(produto)
     // this.$store.dispatch('adicionarProduto', produto)
    }
  }
}
</script>

<style>
.loja {
  display: flex;
  justify-content: center;
}

.loja > * {
  margin: 0px 10px;
}

input {
  font-size: 2rem;
  width: 90px;
}
</style>
