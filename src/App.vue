<template>
  <div>
    <div class="content-body">
      <div v-for="item in listItems" :key="item" class="content-body-item">
        <p>{{ item.title }}</p>
        <div @click="itemDelite(item)" class="close">✖</div>
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
      listItems: [
        { title: "text1" },
        { title: "text2" },
        { title: "text3" },
        { title: "text4" },
        { title: "text5" },
      ],
    };
  },
  methods: {
    addItem() {
      const newItem = {
        title: this.listItemName,
      };
      this.listItems.push(newItem);
      this.listItemName = "";
    },
    itemDelite(index) {
      this.listItems = this.listItems.filter((item) => item != index);
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
.content {
  &-body {
    &-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .close {
        margin-left: 20px;
        cursor: pointer;
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
