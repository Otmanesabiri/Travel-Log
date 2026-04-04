<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useAuthStore } from "../stores/auth";

const SIDEBAR_KEY = "sidebar-collapsed";
const isSidebarCollapsed = ref(false);
const isSidebarReady = ref(false);
const isMobileMenuOpen = ref(false);
const authStore = useAuthStore();

const route = useRoute();

const navItems = [
  { label: "Overview", to: "/dashboard", icon: "tabler:layout-dashboard" },
  { label: "Locations", to: "/dashboard/locations", icon: "tabler:map-pin" },
  { label: "Gallery", to: "/dashboard/gallery", icon: "tabler:camera" },
];

const signOutItem = { label: "Sign Out", icon: "tabler:logout" };

onMounted(() => {
  const stored = localStorage.getItem(SIDEBAR_KEY);
  if (stored !== null) {
    isSidebarCollapsed.value = stored === "true";
  }
  isSidebarReady.value = true;
});

function toggleSidebar() {
  isSidebarCollapsed.value = !isSidebarCollapsed.value;
  localStorage.setItem(SIDEBAR_KEY, String(isSidebarCollapsed.value));
}

async function handleSignOut() {
  isMobileMenuOpen.value = false;
  await authStore.logout();
}
</script>

<template>
  <button
    type="button"
    class="btn btn-ghost btn-sm fixed left-3 top-3 z-30 lg:hidden"
    aria-label="Open menu"
    @click="isMobileMenuOpen = true"
  >
    <Icon
      name="tabler:menu-2"
      size="20"
    />
  </button>

  <Transition name="fade">
    <button
      v-if="isMobileMenuOpen"
      type="button"
      class="fixed inset-0 z-30 bg-black/35 lg:hidden"
      aria-label="Close menu"
      @click="isMobileMenuOpen = false"
    />
  </Transition>

  <Transition name="fade">
    <div
      v-if="authStore.isLoggingOut"
      class="fixed inset-0 z-50 grid place-items-center bg-base-300/50 backdrop-blur-sm"
    >
      <div class="rounded-2xl border border-base-300 bg-base-100 px-5 py-4 shadow-lg">
        <div class="flex items-center gap-3">
          <span class="loading loading-spinner text-error" />
          <p class="text-sm font-medium">
            Signing out...
          </p>
        </div>
      </div>
    </div>
  </Transition>

  <aside
    v-show="isSidebarReady"
    class="sidebar-panel fixed left-0 top-0 z-40 h-screen border-r border-base-300/70 bg-base-100/90 backdrop-blur-sm"
    :class="[
      isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
      isSidebarCollapsed ? 'w-20' : 'w-72',
    ]"
  >
    <div class="flex h-16 items-center justify-between border-b border-base-300 px-4">
      <TravelLogLogo
        :size="isSidebarCollapsed ? 28 : 30"
        :show-text="!isSidebarCollapsed"
        :show-tagline="false"
      />
      <button
        type="button"
        class="toggle-btn"
        aria-label="Toggle sidebar"
        @click="toggleSidebar"
      >
        <Icon
          :name="isSidebarCollapsed ? 'tabler:chevron-right' : 'tabler:chevron-left'"
          size="20"
        />
      </button>
    </div>

    <nav class="space-y-1 p-3">
      <NuxtLink
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        class="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 transition"
        :data-tip="isSidebarCollapsed ? item.label : null"
        :class="[route.path === item.to ? 'bg-primary/15 text-primary' : 'text-base-content/80 hover:bg-base-200', isSidebarCollapsed ? 'tooltip tooltip-right' : '']"
        @click="isMobileMenuOpen = false"
      >
        <Icon
          :name="item.icon"
          size="20"
        />
        <span v-if="!isSidebarCollapsed">{{ item.label }}</span>
      </NuxtLink>

      <div class="divider" />

      <button
        type="button"
        class="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-error/90 transition hover:bg-error/10"
        :class="[authStore.isLoggingOut ? 'cursor-not-allowed opacity-70' : '', isSidebarCollapsed ? 'tooltip tooltip-right' : '']"
        :data-tip="isSidebarCollapsed ? signOutItem.label : null"
        :disabled="authStore.isLoggingOut"
        @click="handleSignOut"
      >
        <Icon
          :name="authStore.isLoggingOut ? 'tabler:loader-2' : signOutItem.icon"
          size="20"
          :class="authStore.isLoggingOut ? 'animate-spin' : ''"
        />
        <span v-if="!isSidebarCollapsed">{{ authStore.isLoggingOut ? 'Signing out...' : signOutItem.label }}</span>
      </button>
    </nav>
  </aside>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.toggle-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: 0;
  border-radius: 0.375rem;
  background: transparent;
  color: inherit;
  cursor: pointer;
  transition: none;
}

.toggle-btn:hover,
.toggle-btn:focus-visible,
.toggle-btn:active {
  background: transparent;
  color: inherit;
  box-shadow: none;
  outline: none;
}

.sidebar-panel {
  transition-property: transform, width;
  transition-duration: 300ms;
  transition-timing-function: ease;
}
</style>
