<template>
  <div>
    <div class="content-body">
      <ListItem
        v-for="item in listItems"
        :key="item"
        class="content-body-item"
        v-bind:todo_prop="item"
      />
    </div>
    <AddItem />
  </div>
</template>

<script>
import ListItem from "@/pages/toDoList/components/ListItem";
import AddItem from "@/pages/toDoList/components/AddItem";

export default {
  name: "ToDoList",
  data() {
    return {
      listItemName: "",
      ItemEdit: "",
      listItems: [{ title: "text1", edit: false }],
    };
  },
  components: {
    ListItem,
    AddItem,
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

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #313131;
  color: #fff;
}
p {
  margin: 0;
}
.content {
  &-body {
    display: flex;
    width: 100%;
    justify-content: space-between;
    &-item {
      position: relative;
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
      .controls {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .close {
        margin-left: 20px;
        cursor: pointer;
      }
      .save {
        cursor: pointer;
        top: 2px;
        right: 22px;
        position: absolute;
        z-index: 100;
        background-color: #313131;
      }
      .editor {
        cursor: pointer;
        width: 15px;
        height: 15px;
        transition: 0.5s;
        margin-left: 40px;
        img {
          width: 100%;
        }
      }
    }
  }
  &-add {
    margin-top: 100px;
    display: flex;
    align-items: center;
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
  }
}
</style>
