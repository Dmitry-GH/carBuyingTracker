import analytics from '@react-native-firebase/analytics';

export const logEvent = async (
  name: string,
  params: {[key: string]: string | number | boolean},
): Promise<void> => {
  await analytics().logEvent(name, params);
};

export const resetAnalyticsData = async (): Promise<void> => {
  await analytics().resetAnalyticsData();
};
