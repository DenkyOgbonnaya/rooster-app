import { Image, Text, View } from "react-native";

export default function NoteItem() {
  return (
    <View className="rounded-2xl flex-row items-start p-4 mb-3 bg-white border border-gray-200">
      <Image
        source={{
          uri: 'https://randomuser.me/api/portraits/men/32.jpg',
        }}
        className="w-10 h-10 rounded-full"
      />

      <View className="flex-1 ml-3">
        <View className="flex-row justify-between">
          <Text className="text-heading text-md font-heading_semibold font-semiBold leading-6">Omar r</Text>
          <Text className="text-sm text-body font-heading_medium font-medium leading-6">2 min geleden</Text>
        </View>

        <Text numberOfLines={1} className="mt-1 text-heading font-heading_medium font-medium leading-6">
          Medewerker is medisch toegewezen aan...
        </Text>
      </View>
    </View>
  );
}
