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
  name: "CreateItem",
  data() {
    return {
      listItemName: "",
      ItemEdit: "",
      listItems: [{ title: "text1", edit: false }],
    };
  },
  methods: {
    addItem() {
      const newItem = {
        title: this.listItemName,
        edit: false,
      };
      this.listItems.push(newItem);
      this.listItemName = "";
    },
  },
}

</script>

<style lang="scss" scoped></style>
