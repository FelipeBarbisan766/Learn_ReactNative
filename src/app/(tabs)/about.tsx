import { Text, View, StyleSheet} from "react-native";

export default function About() {
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
