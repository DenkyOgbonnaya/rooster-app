import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { RootStackParamList } from '../../navigations/types/root.type';

export default function Splash() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, "Splash">>()

    // navigate to the dashboard after 1sec
    useEffect(() => {
    let timeout: number;

    timeout = setTimeout(() => {
        navigation.navigate("Dashboard")
    }, 1000)

    return () => {
        if(timeout) clearTimeout(timeout);
    } 
  }, []);

  return (
    <View className=" bg-background flex items-center justify-center flex-1">
      <Text className=' text-primary font-medium font-body_medium text-base'>Splash Screen</Text>
    </View>
  );
}
