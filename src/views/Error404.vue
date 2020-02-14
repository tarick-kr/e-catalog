<template>
  <v-container>
    <div class="position-center">
      <div class="title">Что-то пошло не так...</div>
      <div class="title">Похоже такой страницы не существует</div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: '404'
}
</script>

<style scoped lang="sass">
  .position-center
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -80%)
</style>
