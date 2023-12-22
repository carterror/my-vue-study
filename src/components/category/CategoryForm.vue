<script setup>

defineProps(['loading', 'categoryForm', 'createCategory'])

</script>

<template>
  <div class="card p-5">
    <div class="card-header">
      <div class="card-header-title">Create Category</div>
    </div>
    <div class="container card-content">
      <form v-on:submit="createCategory">
        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" v-model="categoryForm.title" required>
          </div>
        </div>

        <div class="field">
          <label class="label">Description</label>
          <div class="control">
        <textarea class="textarea" type="text" placeholder="Text input" v-model="categoryForm.description" required>
        </textarea>
          </div>
        </div>

        <div class="field">
          <label class="label">Type</label>
          <div class="control">
            <label class="radio">
              <input type="radio" id="Gasto" :value="true" v-model="categoryForm.gasto">
              Gasto
            </label>
            <label class="radio">
              <input type="radio" id="Ingreso" :value="false" v-model="categoryForm.gasto">
              Ingreso
            </label>
          </div>
        </div>


        <div class="control">
          <button type="submit" class="button is-link" v-bind:class="{'is-loading': loading }" >Submit
          </button>
          <button type="reset" class="button is-link is-light">Cancel</button>
        </div>

      </form>
    </div>
  </div>

</template>

<style scoped>

</style>