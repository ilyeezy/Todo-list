<template>
  <div class="cardOfTask">
    <div class="idTask" v-if="task && isLoaded">
      <div>
        <h1 class="titleTask">{{ task.title }}</h1>
      </div>
      <form
        @keydown.enter="$event.preventDefault()"
        style="margin: 0 auto; width: 60%"
        @submit.prevent
        class="CreateTusk__form form"
      >
        <div class="form__inputs inputs">
          <div v-if="task.tags.length" class="user-input-wrp1">
            <label for="tags" style="" class="floating-label">Tags</label>
            <br />
            <div class="tags">
              <div
                v-for="tag in task.tags"
                :key="tag"
                style="padding: 0 20px"
                class="tags__nameTags"
              >
                {{ tag }}
              </div>
            </div>
          </div>

          <div class="user-input-wrp">
            <br />
            <div style="display: flex">
              <input
                style="border-radius: 10px 0px 0px 10px"
                placeholder=" "
                :disabled="task.TaskStatus === 'Завершено'"
                class="inputText inputTime"
                v-model="time"
                id="time"
                type="time"
              />
              <input
                style="border-radius: 0px 10px 10px 0px"
                placeholder=" "
                :disabled="task.TaskStatus === 'Завершено'"
                v-model="date"
                id="date"
                type="date"
                class="inputText"
              />
            </div>
          </div>
        </div>
        <div class="form__decrtiption decrtiption user-input-wrp">
          <br />
          <span
            class="lenght"
            :class="this.status === true ? lengthLimit() : ''"
            v-bind="decrtiptionLimitation()"
          >
            {{ decrtiption.length }} / 2048</span
          >
          <textarea
            :disabled="task.TaskStatus === 'Завершено'"
            @keydown.enter="$event.stopPropagation()"
            v-bind="decrtiptionLength()"
            id="description"
            placeholder=" "
            style="float: right; overflow: hidden"
            :class="this.status === true ? limit() : ''"
            class="decrtiption__text text inputText inputText__border"
            :maxlength="maxLength"
            v-model="decrtiption"
            @focus="resizeTextarea"
            @keyup="resizeTextarea"
            ref="textarea"
          ></textarea>
          <label
            for="description"
            class="floating-label floating-label__descrip"
            >Description</label
          >
        </div>
        <div class="form__button" v-if="task.TaskStatus !== 'Завершено'">
          <button type="submit" @click="submitHandler" class="button__Save">
            Save edits
          </button>
          <button
            type="button"
            @click="CompleteTask"
            class="button__Complete"
            style="margin-left: 2rem"
          >
            Complete task
          </button>
        </div>

        <p class="form__TaskComplete" v-else>Задача успешно завершена</p>
      </form>
    </div>
    <p v-else-if="!isLoaded">Задача загружается</p>
    <p v-else>Task not found</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoaded: false,
      tags: [],
      tag: "",
      maxLength: 2048,
      status: false,
      click: false,
      decrtiption: "",
      title: "",
      date: "",
      time: "",
    };
  },
  computed: {
    task() {
      return this.$store.getters.getTaskbyId(+this.$route.params.id);
    },
  },

  mounted() {
    setTimeout(() => {
      this.decrtiption = this.task.decrtiption;
      this.date = this.task.date;
      this.time = this.task.time;
      this.isLoaded = true;
      setTimeout(() => {
        this.resizeTextarea();
      });
    }, 100);
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
    resizeTextarea() {
      let { textarea } = this.$refs;
      textarea.style.height = "33px";
      textarea.style.height = textarea.scrollHeight + "px";
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
      this.$store.dispatch("updateTask", {
        id: this.task.id,
        decrtiption: this.decrtiption,
        date: this.date,
        time: this.time,
      });
      this.$toast.success("Задача обновлена");
    },
    CompleteTask() {
      this.$store.dispatch("CompleteTask", this.task.id);
      this.$toast.success("Задача выполнена");
    },
  },
};
</script>

<style lang="scss" scoped>
.cardOfTask {
  padding-top: 65px;
  background-color: black;
}
.idTask {
  height: 100vh;
}
.fade-enter-active,
.fade-leave-active {
  animation: 1s fadeIn;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
.fade {
  margin-top: 20px;
  text-align: center;
  font-size: 24px;
  padding: 20px 0;
}
.form {
  color: white;
  &__TaskComplete {
    text-align: center;
    font-size: 24px;
    margin-top: 20px;
  }
}

.button {
  &__Save {
    border: 1px solid white;
    border-radius: 4px;
    &:active {
      left: 0;
      top: 4px;
    }
  }
  &__Complete {
    border: 1px solid white;
    box-shadow: 0 0 8px white;
    border-radius: 4px;
    &:active {
      left: 0;
      top: 4px;
    }
  }
}
.user-input-wrp:not(:placeholder-shown) .inputText textarea:focus {
  outline-color: blue;
}
.inputText {
  &__border {
    border: none;
    outline: auto;
  }
}
.titleTask {
  margin: 20px 0;
  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 45px;
  letter-spacing: 2.4px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
