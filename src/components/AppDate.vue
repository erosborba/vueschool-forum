<template>
  <span :title="timestamp | humanFriendlyDate">{{
    timestamp | diffForHumans
  }}</span>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    timestamp: {
      required: true,
      type: Number
    }
  },
  filters: {
    humanFriendlyDate(date) {
      return moment.locale('pt'), moment.unix(date).format('lll')
    },
    diffForHumans(date) {
      return moment.unix(date).fromNow()
    }
  }
}
</script>

<style></style>
