import React from 'react';
import { Text, View } from 'react-native';
import i18next from 'i18next';

interface IProps {
  /**
   * Translation function
   */
  t: typeof i18next.t;
}

export const LoginView = ({ t }: IProps) => (
  <View>
    <Text>Hello !! {t('welcomeToReact')}</Text>
  </View>
);
