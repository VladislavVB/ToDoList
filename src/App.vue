<template>
  <div>
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
        <span @click="item.edit = true" class="editor"
          ><img src="@/assets/edit.png" alt=""
        /></span>
        <span @click="itemDelite(item)" class="close">✖</span>
      </div>
    </div>
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
  </div>
</template>

<script>
export default {
  name: "App",
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
  /* text-align: center; */
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
    &-item {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &:hover {
        .editor {
          opacity: 1;
          visibility: visible;
        }
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
        position: absolute;
        top: 2px;
        cursor: pointer;
        width: 15px;
        height: 15px;
        right: 40px;
        transition: 0.5s;
        opacity: 0;
        visibility: hidden;
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
