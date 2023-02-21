<template>
  <div class="TaskList">
    <h1 class="title">Task List</h1>

    <TaskList :is-loaded="isLoaded" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoaded: false,
    };
  },
  mounted() {
    this.isLoaded = true;
  },
};
</script>

<style lang="scss" scoped>
.TaskList {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding-top: 65px;
}
.title {
  text-transform: uppercase;
  letter-spacing: 4px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  text-align: center;
  margin: 15px 0;
}
</style>
