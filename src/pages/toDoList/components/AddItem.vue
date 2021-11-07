<template>
  <div class="content-add">
    <input
      @keydown.enter="addItem()"
      v-model="listItemName"
      type="text"
      placeholder="text"
    />
    <button :class="listItemName != '' ? '' : 'deactive'" @click="addItem()">
      Add
    </button>
  </div>
</template>

<script>
export default {
  name: "AddItem",
  props: {
    title: String,
  },
  data() {
    return {
      listItemName: ''
      // listItemName: this.add_prop
    }
  },
  methods() {

  }
};
</script>

<style lang="scss" scoped></style>
