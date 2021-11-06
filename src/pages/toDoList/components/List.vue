<template>
  <div class="content-body">
    <div v-for="item in listItems" :key="item" class="content-body-item">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      ItemEdit: "",
      listItems: [{ title: "text1", edit: false }],
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

<style lang="scss" scoped></style>
