<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useSession } from "../lib/auth-client";
import { useAuthStore } from "../stores/auth";

const { data: ssrSession } = await useSession(useFetch);
const session = useSession();
const authStore = useAuthStore();
const route = useRoute();

const user = computed(() => session.value.data?.user || ssrSession.value?.user || null);
const isPending = computed(() => session.value.isPending && !user.value);
const isHomeRoute = computed(() => route.path === "/");
const showCompactLogo = computed(() => Boolean(user.value) && !isHomeRoute.value);
</script>

<template>
  <div class="navbar bg-base-100 shadow-sm">
    <div class="flex-1">
      <NuxtLink to="/" class="logo-link h-auto px-2 py-1 normal-case">
        <TravelLogLogo
          :size="34"
          :show-text="!showCompactLogo"
          :show-tagline="!showCompactLogo"
        />
      </NuxtLink>
    </div>

    <div class="flex-none gap-2">
      <ThemeToggle />

      <template v-if="isPending">
        <span class="loading loading-spinner text-primary" />
      </template>

      <template v-else-if="user">
        <div class="dropdown dropdown-end">
          <div
            tabindex="0"
            role="button"
            class="btn btn-ghost btn-circle avatar border border-base-300"
          >
            <div class="w-10 rounded-full">
              <img
                :src="user.image || `https://api.dicebear.com/9.x/initials/svg?seed=${user.name}`"
                :alt="user.name"
              >
            </div>
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow-sm">
            <li class="menu-title px-4 py-2">
              {{ user.name }}
            </li>
            <li>
              <NuxtLink to="/profile">
                Profile
              </NuxtLink>
            </li>
            <li><a class="text-error font-medium" @click="authStore.logout"><Icon name="solar:logout-2-outline" /> Logout </a></li>
          </ul>
        </div>
      </template>

      <template v-else>
        <AuthButton />
      </template>
    </div>
  </div>
</template>

<style scoped>
.logo-link {
  display: inline-flex;
  align-items: center;
  border-radius: 0.5rem;
  background-color: transparent;
  transition: none;
}

.logo-link:hover,
.logo-link:focus-visible,
.logo-link:active {
  background-color: transparent;
}
</style>
