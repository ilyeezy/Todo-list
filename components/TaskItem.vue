<template>
  <div class="TaskItem__elements">
    <div id="N" class="TaskItem__elements__element number">{{ index + 1 }}</div>
    <div id="Title" class="TaskItem__elements__element title">
      {{ task.title }}
    </div>
    <div id="Date" class="TaskItem__elements__element date">
      До: {{ task.time }} {{ task.date }}
    </div>

    <div id="Description" class="TaskItem__elements__element description">
      {{ task.decrtiption }}
    </div>
    <div id="Status" class="TaskItem__elements__element status">
      {{ task.TaskStatus }}
    </div>
    <div id="More" class="TaskItem__elements__element more">
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
      this.$toast.error("Задача удалена");
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
      box-sizing: border-box;
      flex-grow: 1;
      overflow: hidden;
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
.description {
  width: 35.5%;
  text-overflow: ellipsis;
}
.date {
  width: 20%;
}
.title {
  width: 13%;
}
.number {
  width: 5%;
}
.status {
  width: 13%;
}
.more {
  width: 13.5%;
}
</style>
