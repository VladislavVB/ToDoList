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

<script></script>

<style lang="scss" scoped></style>
