import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'angular-lottie-repro',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchAutoHide: true,
      launchShowDuration: 0,
    }
  },
  cordova: {
    preferences: {
      LottieFullScreen: 'true',
      LottieHideAfterAnimationEnd: 'false',
      LottieAnimationLocation: 'public/assets/splash.json',
      LottieBackgroundColor: '#000000'
    }
  }
};

export default config;
