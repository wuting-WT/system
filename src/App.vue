<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import count from './components/count'
export default {
  name: 'App',
  components: { count },
  template: `
    <div class="app">
      <counter></counter>
    </div>
  `
}
</script>

<style>
html,
body {
  background: #f2f2f2;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body,
ol,
ul,
h1,
h2,
h3,
h4,
h5,
h6,
p,
th,
td,
dl,
dd,
form,
fieldset,
legend,
input,
textarea,
select {
  margin: 0;
  padding: 0;
}
body {
  font: 12px "宋体", "Arial Narrow", HELVETICA;
  -webkit-text-size-adjust: 100%;
}
a {
  color: #2d374b;
  text-decoration: none;
}
a:hover {
  color: #cd0200;
  text-decoration: underline;
}
em {
  font-style: normal;
}
li {
  list-style: none;
}
img {
  border: 0;
  vertical-align: middle;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
p {
  word-wrap: break-word;
}
</style>
