<script setup>
import CategoryForm from "../components/category/CategoryForm.vue";
import CategoryList from "../components/category/CategoryList.vue";
import {useStore} from "vuex";
import {computed, onMounted, ref, watchEffect, reactive} from "vue";

const store = useStore()

// const message = computed(() => store.getters['category/message'])
const categories = computed(() => store.getters['category/categories'])
const loading = computed(() => store.getters['category/loading'])


const categoryForm = reactive({
  title: '',
  description: '',
  gasto: true,
})

const isCreatedActive = ref(true)

const toggleCreatedActive = () => {
  isCreatedActive.value = !isCreatedActive.value
}

const createCategory = (e) => {
  e.preventDefault()
  const {title, description, gasto} = categoryForm
  console.log({title, description, gasto})
  store.dispatch('category/addCategory', {title, description, gasto})
}

onMounted(() => {
  store.dispatch('category/getCategory')
})

watchEffect(() => (newValue, oldValue) => {
  if (oldValue !== undefined && oldValue !== newValue) {
    console.log('created', newValue)
  }
})

</script>

<template>

  <div class="p-5">

    <button class="button is-info is-outlined is-fullwidth" @click="toggleCreatedActive">Crear</button>
  </div>
  <div v-show="isCreatedActive">
    <category-form :loading="loading"
                   :categoryForm="categoryForm"
                   :createCategory="createCategory"
    />

  </div>

  <div>
    <category-list :categories="categories" :loading="loading"/>
  </div>

</template>

<style scoped>

</style>