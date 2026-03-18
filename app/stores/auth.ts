import { defineStore } from "pinia";
import { ref } from "vue";
import { signIn, signOut } from "../lib/auth-client";

export const useAuthStore = defineStore("auth", () => {
  const loading = ref(false);

  async function loginWithGoogle() {
    try {
      loading.value = true;
      await signIn.social({
        provider: "google",
        callbackURL: "/",
        errorCallbackURL: "/error",
      });
    }
    finally {
      loading.value = false;
    }
  }

  async function logout() {
    await signOut();
  }

  return {
    loading,
    loginWithGoogle,
    logout,
  };
});
