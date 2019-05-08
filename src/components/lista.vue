<template>
  <div>
    <q-list v-for="produto in produtos" :key="produto['.key']" >
      <q-item :class="{ 'hidden': !produto.active }">
        {{ produto.name }}
      </q-item>
    </q-list>
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
      produtos: []
    }
  }
}
</script>

<style>

</style>
