<template>
  <form
    @keydown.enter="$event.preventDefault()"
    @submit.prevent="submitHandler"
    class="CreateTusk__form form"
  >
    <div class="form__inputs inputs">
      <div class="user-input-wrp">
        <br />
        <input
          placeholder=" "
          v-model="title"
          id="title"
          required
          type="text"
          class="inputText"
        />
        <label for="title" class="floating-label">Title</label>
      </div>
      <div class="user-input-wrp">
        <br />
        <div class="tags">
          <div v-for="(tag, i) in tags" :key="tag" class="tags__nameTags">
            {{ tag }}
            <button @click="deleteTag(i)" class="tags__button">x</button>
          </div>
        </div>
        <input
          placeholder=" "
          id="tags"
          @keyup.prevent.enter="addTag(tag) | myFilter()"
          type="text"
          v-model="tag"
          class="inputText"
        />
        <label for="tags" class="floating-label">Tags</label>
      </div>
      <div class="user-input-wrp">
        <br />
        <div style="display: flex">
          <input
            style="border-radius: 10px 0 0 10px"
            placeholder=" "
            class="inputText inputTime"
            v-model="time"
            id="time"
            type="time"
            required
          />
          <input
            style="border-radius: 0px 10px 10px 0px"
            placeholder=" "
            v-model="date"
            id="date"
            type="date"
            class="inputText"
            required
          />
        </div>
      </div>
    </div>
    <div class="form__decrtiption decrtiption user-input-wrp">
      <!-- что за магическая хуйня -->
      <br />
      <span
        class="lenght"
        :class="this.status === true ? lengthLimit() : ''"
        v-bind="decrtiptionLimitation()"
      >
        {{ decrtiption.length }} / 2048</span
      >
      <textarea
        @keydown.enter="$event.stopPropagation()"
        v-bind="decrtiptionLength()"
        id="description"
        placeholder=" "
        style="float: right; wrap: soft"
        :class="this.status === true ? limit() : ''"
        class="decrtiption__text text inputText inputText__border"
        :maxlength="maxLength"
        v-model="decrtiption"
        wrap="hard"
      ></textarea>
      <label for="description" class="floating-label floating-label__descrip"
        >Description</label
      >
    </div>

    <div class="form__button">
      <button type="submit" class="button__create">create</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      tags: [],
      tag: "",
      maxLength: 2048,
      status: false,
      time: "",
      decrtiption: "",
      title: "",
      date: "",
    };
  },

  mounted() {
    const textarea = document.querySelector("textarea");
    textarea.addEventListener("keyup", (e) => {
      textarea.style.height = `33px`;
      let scHeight = e.target.scrollHeight;
      textarea.style.height = `${scHeight}px`;
    });

    this.date = new Date().toISOString().slice(0, 10);
    this.time = new Date().toLocaleTimeString().slice(0, 5);
  },
  destroyed() {
    if (this.date && this.date.destroy) {
      this.date.destroy();
    }
    if (this.tags && this.tags.destroy) {
      this.tags.destroy();
    }
  },
  methods: {
    addTag(tag) {
      if (this.tag === "") {
        return;
      } else {
        this.tags.push(tag);
        this.tag = "";
      }
    },
    deleteTag(index) {
      this.tags.splice(index, 1);
    },
    myFilter() {
      this.tags = [...new Set(this.tags)];
      return this.tags;
    },
    decrtiptionLimitation() {
      if (this.decrtiption.length > 2048) {
        this.decrtiption = this.maxLength;
      }
    },

    drawSheves() {
      return false;
    },

    limit() {
      let classes = [""];
      classes.push("limit");
      return classes.join(" ");
    },
    lengthLimit() {
      let lenght = [""];
      lenght.push("Lenghtlimit");
      return lenght.join(" ");
    },

    decrtiptionLength() {
      if (this.decrtiption.length >= 2048) {
        this.status = true;
      } else {
        this.status = false;
      }
    },
    submitHandler() {
      try {
        const task = {
          title: this.title,
          tags: this.tags,
          time: this.time,
          date: this.date,
          decrtiption: this.decrtiption,
          id: Date.now(),
          TaskStatus: "В работе",
        };
        /**
         * * удали ебаные консоль логи
         */

        this.$store.dispatch("createTask", task);
        setTimeout(() => {
          this.$toast.success("Задание добавлено");
          this.$router.push("/ListTask");
        }, 400);
      } catch (e) {
        this.$toast.error(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
/**
 * * Хули пусто опять
 */
.inputTime {
}
</style>
