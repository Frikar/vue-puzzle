<template>
  <div>
    <h1>Records</h1>
    <button @click="getRecords">Refrescar</button>
    <div v-for="(r, index) of records" :key="index">{{index + 1}} - {{r.elapsedTime}}</div>
  </div>
</template>

<script>
export default {
  name: "Records",
  data() {
    return {
      records: [],
    };
  },
  created() {
    this.getRecords()
  },
  methods: {
    getRecords() {
      this.records = JSON.parse(localStorage.getItem("records")) || [];
    }
  },
}
</script>

<style scoped>

</style>
