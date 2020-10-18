<template>
  <div>
    <CategoryListEach
      v-for="category in categories"
      :category="category"
      :key="category['.key']"
    />
  </div>
</template>

<script>
import CategoryListEach from './CategoryListEach'
export default {
  components: {
    CategoryListEach
  },
  props: {
    categories: {
      required: true,
      type: Array
    }
  }
}
</script>

<style scoped></style>
