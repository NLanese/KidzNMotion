
// Expo Packages and Services
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

// React
import { useEffect } from 'react';
import { View } from 'react-native';
import 'react-native-reanimated';

// Recoil
import { RecoilRoot } from 'recoil';

// Custom
import AppBackground from '@/components/AppBackground';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  // Loads Fonts
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  // Hides Splash Screen when Loading is concluded
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  // Returns nothing if still loading
  if (!loaded) {
    return null;
  }


  /////////////////
  // Main Return //
  /////////////////
  return (
    <RecoilRoot>
      <View style={{ flex: 1 }}>
      <AppBackground>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false, title: "Kidz-N-Motion"}} />
          <Stack.Screen name="+not-found" />
        </Stack>
        {/* <StatusBar style="auto" /> */}
      </AppBackground>
      </View>
    </RecoilRoot>
  );
}
