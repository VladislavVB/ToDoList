import { createRouter, createWebHashHistory } from "vue-router";

const ToDoList = () => import("@/pages/toDoList/ToDoList.vue");

const routes = [
  {
    path: "/",
    name: "ToDoList",
    component: ToDoList,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
