<template>
  <div>
    <Puzzle @puzzle-changed="selectedPuzzleId = $event" />
    <Records />
    <SliderPuzzle :puzzleId="selectedPuzzleId" />
  </div>
</template>

<script>
import SliderPuzzle from "./components/SliderPuzzle.vue";
import Puzzle from "./components/Puzzle.vue";
import Records from "./components/Records.vue";

export default {
  name: "App",
  components: {
    SliderPuzzle,
    Puzzle,
    Records,
  },
  data() {
    return {
      selectedPuzzleId: "cut-pink",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
