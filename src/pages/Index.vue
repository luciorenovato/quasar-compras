<template>
   <q-page>
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Compras
        </q-toolbar-title>
        <q-tabs v-model="tab" shrink>
          <q-tab name="tab1" label="Criar" />
          <q-tab name="tab2" label="Comprar" />
        </q-tabs>
      </q-toolbar>
    </q-header>
    <q-card>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="tab1">
          <r-produtos></r-produtos>
        </q-tab-panel>
        <q-tab-panel name="tab2">
          <div class="text-h6">Lista Atual</div>
          <r-lista></r-lista>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<style>
</style>

<script>
import RProdutos from '../components/produtos'
import RLista from '../components/lista'
export default {
  name: 'PageIndex',
  components: { RProdutos, RLista },
  data () {
    return {
      tab: 'tab1'
    }
  }
}
</script>
