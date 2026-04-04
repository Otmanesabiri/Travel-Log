<script setup lang="ts">
import { computed } from "vue";
import { useSession } from "../lib/auth-client";

const { data: ssrSession } = await useSession(useFetch);
const session = useSession();
const user = computed(() => session.value.data?.user || ssrSession.value?.user || null);
</script>

<template>
  <div class="hero bg-base-300 container mx-auto mt-4">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">
          Travel Log
        </h1>
        <p class="py-6">
          Explore the world and share your adventures with Travel Log.
          Create your own travel diary, connect with fellow travelers,
          and discover new destinations. Start your journey today!
        </p>

        <template v-if="!user">
          <AuthButton />
        </template>
        <template v-else>
          <NuxtLink to="/dashboard" class="btn btn-primary">
            Go to Dashboard
          </NuxtLink>
        </template>
      </div>
    </div>
  </div>
</template>
