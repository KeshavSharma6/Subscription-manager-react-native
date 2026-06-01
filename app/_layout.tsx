import { Stack } from "expo-router";
import "@/global.css";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  return (
    <Stack initialRouteName="(tabs)">
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="onboarding" />
    </Stack>
  );
}
