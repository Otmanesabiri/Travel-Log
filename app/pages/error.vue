<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const error = route.query.error || "an unknown error occurred";
</script>

<template>
  <div class="flex items-center justify-center mt-12 px-4">
    <div class="card bg-base-200 w-full max-w-lg shadow-xl border border-base-300">
      <div class="card-body items-center text-center">
        <div class="bg-error/10 p-4 rounded-full mb-2 text-error">
          <Icon name="uim:exclamation-triangle" size="40" />
        </div>

        <h2 class="card-title text-2xl font-bold mb-1">
          Authentification Failed
        </h2>
        <div class="w-full bg-base-100 p-4 rounded-lg shadow-inner border border-error/30 text-error font-medium my-4">
          {{ error }}
        </div>

        <div class="card-actions mt-2">
          <NuxtLink to="/" class="btn btn-primary">
            <Icon name="material-symbols:arrow-back-rounded" size="20" />
            Back to Home
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
