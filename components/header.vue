<template>
  <header>
    <!-- TODO: настрой линтер, чтоб у тя все красиво было -->
    <nav>
      <div class="navbar">
        <div class="navbar__title">
          <h1 class="title">
            <nuxt-link
              class="a"
              no-prefetch
              id="nav_tasks"
              active-class="acrive"
              :to="'/mainTask'"
              >TodoList</nuxt-link
            >
          </h1>
        </div>
        <div class="navbar__menu">
          <ul class="menu__list">
            <li class="list__element">
              <nuxt-link class="a" :to="'/CreateTusk'">Create </nuxt-link>
            </li>
            <li class="list__element">
              <nuxt-link class="a" :to="'/ListTask'">List</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
a.nuxt-link-active {
  color: rgb(255, 238, 0);
  height: 0;
  cursor: text;
}
a.nuxt-link-exact-active {
  color: black;
  color: rgb(255, 238, 0);
  height: 0;
  cursor: text;
}
.title {
  display: flex;
  align-items: center;
  font-weight: 450;
  height: 100%;
  :hover {
    color: rgb(255, 238, 0);
  }
}
.navbar {
  z-index: 3;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  align-items: center;
  background-color: black;
  height: 70px;
  padding: 0 10px;
  box-shadow: 0px 4px 4px white;

  &__title {
    height: 100%;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 30px;
    letter-spacing: 2px;
  }
  &__menu {
    height: 100%;
    display: flex;
    flex: 1 1 auto;
    justify-content: flex-end;
  }
}
.a {
  height: 100%;
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
}
.menu {
  &__list {
    height: 100%;
    flex: 0 0 25%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
}
.list {
  &__element {
    list-style-type: none;
    font-size: 25px;
    letter-spacing: 2px;
    height: 100%;
    display: flex;
    align-items: center;
    :hover {
      color: rgb(255, 238, 0);
    }
  }
}
</style>
