<template>
  <div class="signIn">
      <button @click="singnIn">点击登录</button>
  </div>
</template>

<script>


export default {
  name: 'signIn',
    data() {
      return {

      }
    },
    methods: {
        singnIn() {
            this.$router.replace({
                name: 'dailyList'
            })
        }
    }
}
</script>
