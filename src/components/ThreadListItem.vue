<template>
  <div class="thread">
    <div>
      <p>
        <router-link
          :to="{ name: 'ThreadShow', params: { id: thread['.key'] } }"
          >{{ thread.title }}</router-link
        >
      </p>
      <p class="text-faded text-xsmall">
        By <a href="profile.html">{{ user.name }}</a
        >, <AppDate :timestamp="thread.publishedAt" />.
      </p>
    </div>

    <div class="activity">
      <p class="replies-count">
        {{ repliesCount }}
      </p>

      <img
        class="avatar-medium"
        src="https://firebasestorage.googleapis.com/v0/b/forum-2a982.appspot.com/o/images%2Favatars%2Fraynathan?alt=media&amp;token=bd9a0f0e-60f2-4e60-b092-77d1ded50a7e"
        alt=""
      />
      <span>
        <a class="text-xsmall" href="profile.html">Ray-Nathan James</a>
        <p class="text-faded text-xsmall"></p>
      </span>
    </div>
  </div>
</template>

<script>
import sourceData from '@/data'

export default {
  props: {
    thread: {
      required: true,
      type: Object
    }
  },
  computed: {
    repliesCount() {
      return Object.keys(this.thread.posts).length - 1
    },
    user() {
      return sourceData.users[this.thread.userId]
    }
  }
}
</script>

<style></style>
