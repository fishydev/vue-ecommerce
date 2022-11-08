<template>
  <header class="navbar">
    <div class="navbar-container center">
      <div class="navbar-main-wrapper">
        <div class="col">
          <img class="logo" src="@/assets/shopy-logo.png" alt="shopy-logo" />
          <span>Shop</span>
        </div>
        <div class="col">
          <span>Cart</span>
          <span>Login</span>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
.navbar {
  width: 100%;
  max-width: 100vw;
}

.navbar-main-wrapper > .col {
  display: flex;
  align-items: center;
}

.navbar-main-wrapper > .col > :not(:last-child) {
  margin-right: 2rem;
}

.navbar-main-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}

.logo {
  height: 2rem;
}
</style>
