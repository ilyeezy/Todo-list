<template>
  <div class="selectStatus">
    <select :value="value" @change="$emit('input', $event.target.value)">
      <option disabled v-show="false" value=" ">Сортировка по статусу</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.selectStatus {
  padding-right: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
