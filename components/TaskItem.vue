<template>
  <div class="TaskItem__elements">
    <div id="N" class="TaskItem__elements__element ">{{ index + 1 }}</div>
    <div id="Title" class="TaskItem__elements__element ">
      {{ task.title }}
    </div>
    <div id="Date" class="TaskItem__elements__element ">
      До: {{ task.time }} {{ task.date }}
    </div>

    <div id="Description" class="TaskItem__elements__element ">
      {{ task.decrtiption }}
    </div>
    <div id="Status" class="TaskItem__elements__element ">
      {{ task.TaskStatus }}
    </div>
    <div id="More" class="TaskItem__elements__element ">
      <nuxt-link class="btnLink" :to="'/tasks/' + task.id">Open</nuxt-link>
      <span class="btn"
        ><button
          class="btn__button"
          v-if="task.TaskStatus == 'Завершено'"
          @click="removeTask(index)"
        >
          Delete
        </button></span
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      tasks: "getTask",
    }),
  },
  props: {
    task: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    removeTask() {
      this.$store.dispatch("removeTask", this.index);
      this.$toast.success("Задача удалена");
    },
  },
};
</script>

<style lang="scss" scoped>
.TaskItem {
  &__elements {
    display: flex;
    width: 100%;

    &__element {
      padding: 0.8em 1em;
      max-width: 16.66%;
      box-sizing: border-box;
      word-break: break-word;
      flex-grow: 1;
      list-style: none;
    }
  }
}

.btnLink {
  color: rgb(123, 69, 159);
  text-decoration: none;
  font-family: "Courier New", Courier, monospace;
  font-size: 16px;
  font-weight: 600;

  margin-right: 5px;
}
.btn {
  font-weight: 500;
  &__button {
    font-weight: 600;
    color: rgb(255, 0, 0);
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-size: 16px;
    font-family: "Courier New", Courier, monospace;
  }
}
</style>
