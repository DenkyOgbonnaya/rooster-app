import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IRoom, Shift } from '../../types/rooster.type';
import { MenuIcon } from '../../assets';

import Room from '../../components/room';
import ShiftDetailsSheet from '../../components/shiftDetails';

const currentDate = new Date();

export default function RoosterCalendarEngine() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeRoom, setActiveRoom] = useState('Room 1');
  const [isShiftOpen, setIsShiftOpen] = useState(false);

  // generate the calendar for the current week
  const weekDays = useMemo(() => {
    const base = new Date(selectedDate);
    const start = new Date(base);
    start.setDate(base.getDate() - base.getDay());

    return Array.from({ length: 7 }).map((_, i) => {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      return d;
    });
  }, [selectedDate]);

  const events: Shift[] = [
    {
      id: '0',
      title: 'Morning Shift',
      user: 'Patrick',
      location: 'Accra',
      start: new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
        1,
        0,
      ).toISOString(),
      end: new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
        3,
        0,
      ).toISOString(),
    },
    {
      id: '1',
      title: 'Morning Shift',
      user: 'James',
      location: 'Lagos',
      start: new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
        9,
        0,
      ).toISOString(),
      end: new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
        11,
        30,
      ).toISOString(),
    },
    {
      id: '2',
      title: 'Afternoon Shift',
      user: 'Dennis',
      location: 'Cairo',
      start: new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
        13,
        0,
      ).toISOString(),
      end: new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
        14,
        0,
      ).toISOString(),
    },
    {
      id: '3',
      title: 'Night Shift',
      user: 'Mike',
      location: 'Nairobi',
      start: new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
        17,
        0,
      ).toISOString(),
      end: new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
        18,
        0,
      ).toISOString(),
    },
     {
      id: '4',
      title: 'Night Shift 2',
      user: 'James',
      location: 'Cape Town',
      start: new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
        22,
        0,
      ).toISOString(),
      end: new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
        23,
        0,
      ).toISOString(),
    },
  ];

  const rooms: IRoom[] = [
    {
      name: 'Room 1',
      shifts: events,
    },
    {
      name: 'Room 2',
      shifts: events,
    },
  ];

  const handleView = (shift: Shift) => {
    setIsShiftOpen(true)
  };

  const handleActiveRoom = (roomName: string) => {
    setActiveRoom(roomName);
  };

  return (
    <SafeAreaView className="bg-background flex-1">
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 pt-4">
        <Text className="font-heading_bold text-heading text-2xl font-bold">
          Mijn rooster
        </Text>
        <TouchableOpacity className=" w-9 h-9 border-borderMuted items-center justify-center border rounded-sm">
          <MenuIcon />
        </TouchableOpacity>
      </View>

      {/* Week Selector */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mt-6 px-6 max-h-[100px] border-b-2 border-border "
      >
        {weekDays.map(date => {
          const active = date.toDateString() === selectedDate.toDateString();

          return (
            <Pressable
              key={date.toISOString()}
              onPress={() => setSelectedDate(date)}
              className={`items-center mr-6 pt-2 px-2 max-h-[70px] ${
                active ? 'bg-surface rounded-lg py-3' : ''
              }`}
            >
              <View
                className={`mb-2 w-[24px] h-[24px] rounded-[12px] items-center justify-center ${
                  active ? 'bg-primary' : ''
                }`}
              >
                <Text
                  className={
                    active
                      ? 'text-onPrimary font-bold font-heading_bold text-md '
                      : 'text-body font-semibold font-heading_semibold text-md'
                  }
                >
                  {date.getDate()}
                </Text>
              </View>
              <Text
                className={`text-muted font-medium font-heading_medium text-sm ${
                  active ? 'text-body' : ''
                }`}
              >
                {date.toLocaleDateString('en-US', {
                  weekday: 'short',
                })}
              </Text>

              {date.getDate() >= currentDate.getDate() && (
                <View className="w-2 h-2 mt-1 bg-indigo-500 rounded-full" />
              )}
            </Pressable>
          );
        })}
      </ScrollView>

      {rooms.map(room => (
        <Room
          isActive={activeRoom === room.name}
          key={room.name}
          room={room}
          onToggle={handleActiveRoom}
          onView={handleView}
        />
      ))}

      <ShiftDetailsSheet
        visible={isShiftOpen}
        onClose={() => setIsShiftOpen(false)}
      />
    </SafeAreaView>
  );
}
