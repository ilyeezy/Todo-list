<template>
  <div class="CreateTusk">
    <div class="container">
      <div class="CreateTusk__content">
        <h1 class="CreateTusk__title">Create your tusk</h1>
        <!-- TODO: <postForm /> -->
        <postForm></postForm>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
.CreateTusk {
  padding-top: 65px;
  background-color: black;
  color: white;
}
.lenght {
  text-align: right;
}
.tags {
  margin: 10px 0;
  &__nameTags {
    display: inline-block;
    background: #e7e7e7e7;
    border-radius: 14px;
    padding: 0 12px;
    height: 32px;
    line-height: 32px;
    background-color: #e4e4e4;
    margin-bottom: 5px;
    margin-right: 5px;
  }
  &__button {
    border: none;
    background: none;
    cursor: pointer;
    font-weight: 300;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    float: right;
    font-size: 16px;
    line-height: 32px;
    padding-left: 8px;
  }
}

.container {
  margin: 0 auto;
  max-width: 600px;
}
.CreateTusk {
  &__content {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  &__title {
    font-size: 40px;
    margin: 20px 0;
    letter-spacing: 3px;
    font-family: "Courier New", Courier, monospace;
  }
}

div.user-input-wrp {
  display: flex;
  flex-direction: column-reverse;
}

textarea,
input.inputText {
  border-radius: 10px;
  box-shadow: 0 0 10px white;
  border: none;
  padding: 1rem;
  margin-top: 2rem;
  font-size: 1.6rem;
  border-bottom: 3px solid #ffffff;
  outline: none;
}
label.floating-label {
  font-size: 24px;
  padding-left: 0.5rem;
  color: #919191;
  transform: translateY(4.8rem);
  transform-origin: left top;
  cursor: text;
  transition: all 0.3s;
  &__descrip {
    transform: translateY(2.4rem);
  }
}

.user-input-wrp:not(:placeholder-shown) .inputText:focus {
  border-color: black;

  outline-color: yellow;
}

.user-input-wrp input:focus ~ .floating-label,
.user-input-wrp input:not(:placeholder-shown) ~ .floating-label {
  padding: 0;
  color: yellow;
  transform: translateY(2rem) scale(0.8);
}
.user-input-wrp textarea:focus ~ .floating-label,
.user-input-wrp textarea:not(:placeholder-shown) ~ .floating-label {
  padding: 0;
  color: yellow;
  transform: translateY(0rem) scale(0.8);
}

.form {
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 4px 0 30px white;
  background-color: black;
  padding-bottom: 20px;
  &__inputs {
    flex-direction: column;
    display: flex;

    padding: 10px 5px;
  }

  &__button {
    margin: 10px 0;
    button {
      background: none;
      border: none;
      font-size: 20px;
      letter-spacing: 3px;
      color: white;
      padding: 10px;
      cursor: pointer;
      text-transform: uppercase;
      border: 1px solid white;
      border-radius: 4px;
      box-shadow: 0 0 8px white;
      &:active {
        box-shadow: 0 0 0;
        position: relative;
        left: 0;
        top: 4px;
      }
    }
  }
}

textarea::-webkit-scrollbar {
  width: 0px;
}
.decrtiption {
  width: 65.3%;
  &__text {
    width: 100%;
    height: 33px;
    margin: 10px 0;
    padding: 0 5px;
    resize: none;
  }
}
.inputs {
  text-align: left;
  margin: 10px 0;
}

textarea.decrtiption__text.text.inputText.inputText__border.limit {
  border-bottom: 1px solid red;
  outline-color: red;
}

.Lenghtlimit,
span.Lenghtlimit {
  color: red;
  animation: Lenghtlimit 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97);
}
@keyframes Lenghtlimit {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
