<script setup>
import {ref, watchEffect} from "vue";

defineProps(['categories', 'loading'])

const filtro = ref('all')
const search = ref('')

watchEffect(() => {
  console.log('watchEffect', search.value)
})
</script>

<template>
  <div class="card p-5">
    <div class="card-header">
      <div class="card-header-title">List Category</div>
    </div>
    <div class="container card-content">

      <article class="panel is-info">
        <p class="panel-heading">
          Info
          <progress class="progress is-small is-info" max="100" v-show="loading">50%</progress>
        </p>
        <p class="panel-tabs">
          <a :class="{'is-active': filtro === 'all'}" @click="filtro = 'all'">All</a>
          <a :class="{'is-active': filtro === 'Ingreso'}" @click="filtro = 'Ingreso'">Gastos</a>
          <a :class="{'is-active': filtro === 'Gasto'}" @click="filtro = 'Gasto'">Ingresos</a>
        </p>
        <div class="panel-block">
          <p class="control has-icons-left">
            <input class="input is-info" type="text" placeholder="Search">
            <span class="icon is-left">
        <i class="fas fa-search" aria-hidden="true"></i>
      </span>
          </p>
        </div>
        <template v-for="x in categories">
          <a class="panel-block " :key="x.id"
             v-if="(x.gasto ? 'Gasto' : 'Ingreso') !== filtro && (x.title === search || search === '')">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
            <span class="tag is-info mr-4" v-bind:class="{'is-danger': x.gasto}">
            {{ x.gasto ? 'Gasto' : 'Ingreso' }}
          </span>
            {{ x.title }} - {{ x.description }}
          </a>
        </template>


      </article>
    </div>

  </div>

</template>

<style scoped>
.tag {
  width: 100px;
}
</style>