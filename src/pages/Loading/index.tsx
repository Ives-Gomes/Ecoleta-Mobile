import React from 'react';
import { SafeAreaView } from 'react-native';
import Lottie from 'lottie-react-native';

import loading from '../../../loading1.json';

export default function Loading() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Lottie resizeMode='contain' autoSize source={loading} autoPlay loop />
    </SafeAreaView>
  );
}
