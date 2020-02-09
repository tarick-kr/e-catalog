<template>
  <v-row justify="end" class="mr-4">
    <v-dialog v-model="dialog" max-width="760px">
      <template v-slot:activator="{ on }">
        <v-btn class="my-2" color="success" small dark v-on="on">
          изменить
          <v-icon size="18" right>edit</v-icon>
        </v-btn>
      </template>
      <v-card height="200" style="background-color: white">

      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'EditProduct',
  data () {
    return {
      dialog: false
    }
  }
}
</script>

<style scoped>

</style>
