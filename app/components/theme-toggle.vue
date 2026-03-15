<script lang="ts" setup>
import { computed } from "vue";
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(value) {
    colorMode.preference = value ? "dark" : "light";
  },
});
</script>

<template>
  <label class="swap swap-rotate mx-4">
    <!-- input controls the mode via checked and @change to avoid v-model issues with computed colorMode -->
    <input
      :checked="isDark"
      type="checkbox"
      @change="isDark = !isDark"
    >

    <!-- sun icon (shown when theme is dark) -->
    <Icon
      class="swap-off"
      name="material-symbols:sunny-outline"
      size="23"
    />

    <!-- moon icon (shown when theme is light) -->
    <Icon
      class="swap-on"
      name="material-symbols:dark-mode-outline"
      size="23"
    />
  </label>
</template>
