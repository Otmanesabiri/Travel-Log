import { navigateTo } from "#app";
import { defineStore } from "pinia";
import { ref } from "vue";
import { signIn, signOut } from "../lib/auth-client";

export const useAuthStore = defineStore("auth", () => {
  const loading = ref(false);
  const isLoggingOut = ref(false);

  async function loginWithGoogle() {
    try {
      loading.value = true;
      await signIn.social({
        provider: "google",
        callbackURL: "/dashboard",
        errorCallbackURL: "/error",
      });
    }
    finally {
      loading.value = false;
    }
  }

  async function logout() {
    if (isLoggingOut.value)
      return;

    try {
      isLoggingOut.value = true;
      await signOut();
      await navigateTo("/", { replace: true });
    }
    finally {
      isLoggingOut.value = false;
    }
  }

  return {
    loading,
    isLoggingOut,
    loginWithGoogle,
    logout,
  };
});
