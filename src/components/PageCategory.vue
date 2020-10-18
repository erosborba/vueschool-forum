<template>
  <div class="col-full">
    <h1>{{ category.name }}</h1>
    <CategoryListEach :category="category" />
  </div>
</template>

<script>
import CategoryListEach from '@/components/CategoryListEach'
import sourceData from '@/data'
export default {
  components: {
    CategoryListEach
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    category() {
      return sourceData.categories[this.id]
    }
  }
}
</script>

<style scoped></style>
