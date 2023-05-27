import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

const { width, height } = Dimensions.get('screen');

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={{width: width, height: height}}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
