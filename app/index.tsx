import { Link, router } from "expo-router";
import { Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen"
import { User } from "./types/types";
import React from "react";

SplashScreen.preventAutoHideAsync()

export default function Index() {
  const [appIsReady, setAppIsReady] = React.useState(false)
  const [user, setUser] = React.useState<User>({
    login: 'joaovmoura',
    email: 'joaov.mour@gmail.com'
  })

  React.useEffect(()=>{
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        // await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 500));

        if(!user)
          router.replace('/login')
        else
          router.replace('(tabs)')
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, [])

  const onLayoutRootView = React.useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#89F28D"
      }}
      onLayout={onLayoutRootView}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
