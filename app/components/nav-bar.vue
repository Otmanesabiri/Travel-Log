<script setup lang="ts">
import { signIn, signOut, useSession } from "../lib/auth-client";

const session = useSession();

async function loginWithGoogle() {
  await signIn.social({
    provider: "google",
    callbackURL: "/",
  });
}

async function logout() {
  await signOut();
}
</script>

<template>
  <div class="navbar bg-base-100 shadow-sm">
    <div class="flex-1">
      <NuxtLink to="/" class="btn btn-ghost text-xl">
        Travel Log
      </NuxtLink>
    </div>

    <div class="flex-none gap-2">
      <ThemeToggle />

      <ClientOnly>
        <template #fallback>
          <span class="loading loading-spinner text-primary" />
        </template>

        <template v-if="session.isPending">
          <span class="loading loading-spinner text-primary" />
        </template>

        <template v-else-if="session.data?.user">
          <div class="dropdown dropdown-end">
            <div
              tabindex="0"
              role="button"
              class="btn btn-ghost btn-circle avatar border border-base-300"
            >
              <div class="w-10 rounded-full">
                <img
                  :src="session.data.user.image || `https://api.dicebear.com/9.x/initials/svg?seed=${session.data.user.name}`"
                  :alt="session.data.user.name"
                >
              </div>
            </div>
            <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow-sm">
              <li class="menu-title px-4 py-2">
                {{ session.data.user.name }}
              </li>
              <li>
                <NuxtLink to="/profile">
                  Profile
                </NuxtLink>
              </li>
              <li><a class="text-error font-medium" @click="logout">Logout</a></li>
            </ul>
          </div>
        </template>

        <template v-else>
          <button class="btn btn-accent" @click="loginWithGoogle">
            Sign in with Google <Icon name="uim:google" size="20" />
          </button>
        </template>
      </ClientOnly>
    </div>
  </div>
</template>
