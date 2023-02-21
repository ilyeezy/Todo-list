<template>
  <div>
    <selectStatus v-model="select" :options="sortOptions" />
    <div class="table" v-if="tasks.length && isLoaded">
      <div class="table__elements">
        <div class="table__elements__element number" id="№">№</div>
        <div class="table__elements__element title" id="Title">Title</div>
        <div class="table__elements__element date" id="Date">Date</div>
        <div class="table__elements__element description" id="Description">
          Description
        </div>
        <div class="table__elements__element status" id="Status">Status</div>
        <div class="table__elements__element more" id="More">More</div>
      </div>

      <TaskItem
        :index="i"
        :task="task"
        v-for="(task, i) in filterTasks"
        :key="task.id"
      />
    </div>
    <p v-else-if="!isLoaded">Задачи загружаются . . .</p>
    <p v-else>Oh,sorry, but you have not added any task</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    isLoaded: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      sortOptions: [
        { value: "В работе", name: "В работе" },
        { value: "Завершено", name: "Заверешено" },
        { value: "Просрочена", name: "Просрочено" },
        { value: "show_all", name: "Показать всё" },
      ],
      select: " ",
    };
  },
  computed: {
    ...mapGetters({
      tasks: "getTask",
    }),
    filterTasks() {
      return this.tasks.filter((task) => {
        if (this.select == "show_all" || this.select == " ") {
          return true;
        } else {
          return task.TaskStatus == this.select;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.table {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  &__elements {
    display: flex;
    width: 100%;

    &__element {
      padding: 1em;
      box-sizing: border-box;

      flex-grow: 1;

      overflow: hidden;
      //padding: 0 20px;
    }
  }
}
.description {
  width: 35.5%;
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
