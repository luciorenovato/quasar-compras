<template>
  <div class="col-grow">
    <q-label class="text-h6">Produtos</q-label>
    <q-btn round size="xs" color="primary" icon="add" @click="prompt = true" />
    <q-list bordered class="rounded-borders">
      <q-expansion-item
        expand-separator
        label="Geral"
      >
        <q-card v-for="produto in produtos" :key="produto['.key']" :class="{ 'bg-green-3': produto.active
         }" @click="toggleActive(produto, produto['.key'])">
          <q-card-section>
            {{ produto.name }}
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 400px">
        <q-card-section>
          <div class="text-h6">Novo Produto</div>
        </q-card-section>
        <q-card-section>
          <q-input v-model="produto.name" autofocus @keyup.enter="prompt = false">
            <q-btn flat icon="cancel" v-close-popup @click="clearProduct"/>
            <q-btn flat icon="check" v-close-popup @click="addProduct(produto)"/>
          </q-input>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { db } from '../firebase'
export default {
  firebase: {
    produtos: db.ref('items')
  },
  data () {
    return {
      produto: { name: '', active: false },
      produtos: [],
      prompt: false
    }
  },
  methods: {
    toggleActive (produto, chave) {
      produto.active = !produto.active
      console.log(produto.active + ' ' + chave)
      if (chave === undefined) {
        this.$firebaseRefs.produtos.push({ name: produto.name, active: produto.active })
      } else {
        console.log('name: ' + produto.name)
        this.$firebaseRefs.produtos.child(chave).update({ active: produto.active })
      }
    },
    clearProduct () {
      this.produto.name = ''
    },
    addProduct (produto) {
      this.$firebaseRefs.produtos.push({ name: produto.name, active: true })
      this.produto.name = ''
    }
  }
}
</script>

<style>

</style>
