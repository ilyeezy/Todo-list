<template>
  <div class="wrapper">
    <div class="wrapper__main">Welcome to Todo list</div>
  </div>
</template>

<script></script>

<style lang="scss">
.wrapper {
  background-color: black;
  padding-top: 70px;
  &__main {
    color: white;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 65px;
    letter-spacing: 3px;
    font-family: Helvetica;
  }
  &__main {
    -webkit-mask-image: linear-gradient(
      -75deg,
      rgba(0, 0, 0, 0.6) 30%,
      #000 50%,
      rgba(0, 0, 0, 0.6) 70%
    );
    -webkit-mask-size: 200%;
    animation: wave 2s infinite;
  }

  @-webkit-keyframes wave {
    from {
      -webkit-mask-position: 150%;
    }
    to {
      -webkit-mask-position: -50%;
    }
  }
}
</style>
