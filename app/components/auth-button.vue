<script setup lang="ts">
import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore();
</script>

<template>
  <button
    class="btn btn-accent"
    :disabled="authStore.loading"
    @click="authStore.loginWithGoogle"
  >
    <span v-if="authStore.loading" class="loading loading-spinner" />
    <template v-else>
      Sign in with Google <Icon name="uim:google" size="20" />
    </template>
  </button>
</template>
