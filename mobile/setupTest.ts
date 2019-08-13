// we always make sure 'react-native' gets included first
import { NativeModules as RNNativeModules } from 'react-native';
RNNativeModules.UIManager = RNNativeModules.UIManager || {};
RNNativeModules.UIManager.RCTView = RNNativeModules.UIManager.RCTView || {};
RNNativeModules.RNGestureHandlerModule = RNNativeModules.RNGestureHandlerModule || {
  State: { BEGAN: 'BEGAN', FAILED: 'FAILED', ACTIVE: 'ACTIVE', END: 'END' },
};

declare global {
  var __TEST__: any;
}

// We need to mock native modules because they dont all export JS when published...
jest.mock('NativeModules', () => ({
  KeyboardObserver: {},
  PlatformConstants: {},
  RNGestureHandlerModule: {
    Directions: {},
    State: {},
    attachGestureHandler: jest.fn(),
    createGestureHandler: jest.fn(),
    dropGestureHandler: jest.fn(),
    updateGestureHandler: jest.fn(),
  },
  UIManager: {
    RCTView: () => ({
      directEventTypes: {},
    }),
  },
}));
