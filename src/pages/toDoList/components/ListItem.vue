<template>
  <p v-if="item.edit === false">{{ item.title }}</p>
  <div v-else>
    <input type="text" v-model="item.title" /><span
      class="save"
      @click="editItem(item)"
      >save</span
    >
  </div>
  <div class="controls">
    <span @click="item.edit = true" class="editor"
      ><img src="@/assets/edit.png" alt=""
    /></span>
    <span @click="itemDelite(item)" class="close">✖</span>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: ["todo_prop"],
  data() {
    return {
      item: this.todo_prop,
    };
  },

  methods: {
    itemDelite(index) {
      this.listItems = this.listItems.filter((item) => item != index);
    },
    editItem(elem) {
      console.log(elem);
      elem.edit = false;
      this.ItemEdit = "";
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  display: flex;
}
input {
  background-color: #494949;
  padding: 0px 20px;
  margin-right: 10px;
  color: #fff;
  border-radius: 10px;
  height: 40px;
  border: 1px solid #fff;
}
button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  background-color: #494949;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 0px 10px;
  cursor: pointer;
  &.deactive {
    pointer-events: none;
    opacity: 0.5;
  }
}
</style>
