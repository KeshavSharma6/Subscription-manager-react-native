import "@/global.css";
import {styled} from "nativewind";
import { Text, View } from "react-native";
import {Link} from "expo-router";
import { SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
 
const SafeAreaView = styled(RNSafeAreaView);
export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
    
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
    
    </SafeAreaView>

  );
}