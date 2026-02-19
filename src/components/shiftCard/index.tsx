import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Shift } from '../../types/rooster.type';
import { TIME_COLUMN_WIDTH } from '../../constants';
import { formatTime } from '../../utils/helper';

interface Props {
  shift: Shift;
  top: number;
  height: number;
  colIndex: number;
  columnWidth: number;
  onView: (shift:Shift) => void
}
export function ShiftCard({
  shift,
  top,
  height,
  onView,
  colIndex,
  columnWidth,

}: Props) {

  // determine the type of shift
  const startHr = new Date(shift.start).getHours()
  const shiftType = startHr < 12 ? "morning" : startHr > 12 && startHr < 17 ? "afternoon" : "night"
  
  const colorStyles = {
    morning: {
      bg: 'bg-[#EFEEFF]',
      border: 'border-l-[#5653FC]',
      text: 'text-[#5653FC]',
    },
    afternoon: {
      bg: 'bg-[#EEF5FF]',
      border: 'border-l-[#009FE3]',
      text: 'text-[#009FE3]',
    },
    night: {
      bg: 'bg-[#FFF8EB]',
      border: 'border-l-[#E35F00]',
      text: 'text-[#E35F00]',
    },
  };

  const styles = colorStyles[shiftType] ?? colorStyles.morning;


  return (
    <TouchableOpacity    style={{
        position: 'absolute',
        top,
        height,
        left: TIME_COLUMN_WIDTH,
        right: 16,
      }}
       onPress={() => onView(shift)}>

   
    <View
   className={`rounded-2xl gap-4 justify-between  p-4 mb-4 border-l-4  ${styles.bg} ${styles.border}`}
    >
      <View className="flex-row items-center justify-between gap-10">
        <Text className=" font-heading_semibold text-md text-heading font-semibold">
          {shift.title}
        </Text>
        <Text
          className={`font-medium font-heading_medium text-md ${styles.text}`}
        >
          {formatTime(shift.start)} - {formatTime(shift?.end)}
        </Text>
      </View>


      <View className=" flex-row items-center">
        <Image
          source={{
            uri: 'https://randomuser.me/api/portraits/men/32.jpg',
          }}
          className="w-6 h-6 mr-2 rounded-full"
        />
        <Text className="text-md font-heading_medium text-heading font-medium">
          {shift.user}{' '}
          <Text className="font-heading_medium text-disabled text-sm font-medium">
            {shift?.location}
          </Text>
        </Text>
      </View>
    </View>
     </TouchableOpacity>
  );
}
