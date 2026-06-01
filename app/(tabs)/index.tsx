import "@/global.css";
import { Text, View } from "react-native";
import {Link} from "expo-router"
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-green-500">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className="mt-4 rounded bg-primary text-white">Go to Onboarding</Link>

      <Link href="/subscriptions/spotify">
      Spotify subscriptions
      </Link>
      <Link href={{
        pathname: "/subscriptions/[id]",
        params: {id: "claude"}
      }}>
        Claude Subscription
      </Link>
    </View>

  );
}