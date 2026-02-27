import { Text, View, StyleSheet, TextInput, ActivityIndicatorBase, ActivityIndicator , Button} from "react-native";
import { Image } from "expo-image";
import { Link, useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image : {
    width: 100,
    height: 100,
    marginTop: 20,
  }
});
