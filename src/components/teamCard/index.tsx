import { Image, Text, View } from "react-native";

export default function TeamCard({
  variant,
  time,
}: {
  variant: 'orange' | 'blue';
  time: string;
}) {
  const styles = {
    orange: 'bg-[#FFF8EB] text-[#E35F00]',
    blue: 'bg-[#DCEAFF] text-[#009FE3]',
  };

  return (
    <View
      className={`rounded-lg px-4 py-4 mb-4 flex-row items-center justify-between ${styles[variant]}`}
    >
      <View className="flex-row items-center">
        <View className="flex-row -space-x-3">
          <Image
            source={{
              uri: 'https://randomuser.me/api/portraits/men/32.jpg',
            }}
            className="w-8 h-8 border-2 border-white rounded-full"
          />
          <Image
            source={{
              uri: 'https://randomuser.me/api/portraits/men/33.jpg',
            }}
            className="w-8 h-8 border-2 border-white rounded-full"
          />
        </View>

        <Text className="ml-3 text-gray-800">Omar r., Elijah a.</Text>
      </View>

      <Text
        className={`font-semibold ${
          variant === 'orange' ? 'text-orange-600' : 'text-blue-600'
        }`}
      >
        {time}
      </Text>
    </View>
  );
}