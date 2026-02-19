import { View } from "react-native";

export default function CurrentTimeIndicator({ position }: { position: number }) {
  return (
     <View
              pointerEvents="none"
              style={{
                position: 'absolute',
                top: position,
                left: 16,
                right: 16,
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <View className="w-3 h-3 rounded-full bg-primary -ml-1.5" />
              <View className="flex-1 h-[2px] bg-primary" />
            </View>
  );
}
