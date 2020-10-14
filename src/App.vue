<template>
  <div id="app">
    <div id="nav">
      <div class="container">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
        <router-view />
      </div>
    </div>
  </div>
</template>

<style>
@import 'assets/css/index.css';
</style>
