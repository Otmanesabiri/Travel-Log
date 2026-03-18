<script setup lang="ts">
import { useSession } from "../lib/auth-client";

const session = useSession();
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

        <ClientOnly>
          <template v-if="!session.data?.user">
            <AuthButton />
          </template>
          <template v-else>
            <NuxtLink to="/profile" class="btn btn-primary">
              Go to my Profile
            </NuxtLink>
          </template>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>
