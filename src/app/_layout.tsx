import { Stack, useRouter, useRootNavigationState } from "expo-router";
import { useEffect, useRef } from "react";

export default function RootLayout() {
  const router = useRouter();
  const navState = useRootNavigationState();

  const authLoading = false;
  const isAuth = false;

  const redirected = useRef(false);

  useEffect(() => {
    // Wait for the root navigator to be mounted
    if (!navState?.key) return;

    if (authLoading) return;
    if (redirected.current) return;

    redirected.current = true;
    router.replace(isAuth ? "/(tabs)" : "/(auth)/login");
    // IMPORTANT: do not include `router` in deps
  }, [navState?.key, authLoading, isAuth]);

  if (authLoading) return null;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(auth)" />
    </Stack>
  );
}