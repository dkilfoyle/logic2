<template>
  <div class="hello">
    <span class="msg">{{ msg }}</span>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 100%;
  height: 100%;
  padding: 5px;
  background-color: cadetblue;
}
.msg {
  font-size: 16pt;
  color: white;
  text-align: center;
}
</style>
