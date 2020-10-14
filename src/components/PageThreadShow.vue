<template>
  <div>
    <div class="col-large push-top">
      <h1>{{ thread.title }}</h1>
      <PostList :posts="posts" />
      <form>
        <div class="form-group">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            :value="newPostText"
            @input="newPostText = $event.target.value"
          ></textarea>
        </div>
        <div class="form-actions">
          <button class="btn-blue">Enviar Post</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import sourceData from '@/data'
import PostList from '@/components/PostList'
export default {
  components: {
    PostList
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      thread: sourceData.threads[this.id],
      newPostText: ''
    }
  },
  computed: {
    posts() {
      const postIds = Object.values(this.thread.posts)
      return Object.values(sourceData.posts).filter(post =>
        postIds.includes(post['.key'])
      )
    }
  }
}
</script>

<style></style>
