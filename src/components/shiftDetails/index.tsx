import React from 'react';
import { View, Text, Pressable, ScrollView, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  BackIcon,
  ClockIcon,
  CloseIcon,
  ListIcon,
  NoteIcon,
  RightArrowIcon,
} from '../../assets';
import TeamCard from '../teamCard';
import NoteItem from '../noteItem';

interface Props {
  visible: boolean;
  onClose: () => void;
}

export default function ShiftDetailsSheet({ visible, onClose }: Props) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      statusBarTranslucent
    >

      <View className="bg-black/30 justify-end flex-1">
        <SafeAreaView className="bg-transparent">
       
          <View className="bg-white rounded-t-3xl pt-3 pb-6 px-6 ">
      
            <View className="items-center mb-4">
              <View className="w-16 h-2 bg-gray-300 rounded-full" />
            </View>

        
            <View className="flex-row items-center justify-between mb-6">
              <Pressable  onPress={onClose} className="rounded-xl items-center justify-center w-10 h-10 bg-gray-100">
                <BackIcon />
              </Pressable>

              <Text className="text-lg text-[#000000] font-label_semibold font-semibold">Shift Details</Text>

              <Pressable
                onPress={onClose}
                className="rounded-xl items-center justify-center w-10 h-10 bg-gray-100"
              >
                <CloseIcon />
              </Pressable>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
         
              <View className="flex-row items-center mb-6">
                <View className="flex-row items-center">
                  <ClockIcon />
                  <Text className="ml-2 text-heading font-heading_medium font-medium leading-6">8:00am - 12:00pm</Text>
                </View>

                <View className="mx-4 w-[1px] h-5 bg-gray-300" />

                <View className="flex-row items-center">
                  <NoteIcon />
                  <Text className="ml-2 text-heading font-heading_medium font-medium leading-6">10 - 02 - 2024</Text>
                </View>
              </View>


              <Text className="mb-2 text-heading font-heading_medium font-medium leading-6">Beschrijving</Text>

              <Text className="mb-6 text-body font-heading_medium font-medium leading-6">
                Dit is een kamer voor gesprekken tussen chirurgische artsen en
                patiënten over chirurgische procedures.
              </Text>

            
              <View className="flex-row mb-6">
                <View className="flex-1 pr-4">
                  <Text className="mb-2 text-heading font-heading_medium font-medium leading-6">Dienst</Text>

                  <View className="self-start px-4 py-2 bg-[#FFF8EB] rounded-full">
                    <Text className="font-medium text-[#E35F00]">
                      Ochtend 8:00-12:00
                    </Text>
                  </View>
                </View>

                <View className="w-[1px] bg-gray-200 mx-2" />

                <View className="flex-1 pl-4">
                  <View className="flex flex-row items-center gap-2">
                    <ListIcon />
                    <Text className=" mt-2 text-muted font-heading_medium font-medium leading-6">Kamers</Text>
                  </View>

                 
                  <Text className="text-heading font-heading_medium font-medium leading-6">Verkoeverruimte</Text>
                </View>
              </View>

        
              <Text className="mb-3 text-gray-500">Team</Text>

              <TeamCard variant="orange" time="4:00 - 8:00" />

              <TeamCard variant="blue" time="8:00 - 12:00" />

             
              <View className="flex-row items-center justify-between mt-6 mb-4">
                <Text className="text-heading font-heading_medium font-medium leading-6">Notities</Text>

                <Pressable className="flex-row items-center px-4 py-2 bg-surface rounded-full">
                  <Text className="mr-2 text-heading font-heading_medium font-medium leading-6">3 notities</Text>
                  <RightArrowIcon />
                </Pressable>
              </View>


              <NoteItem />
              <NoteItem />
            </ScrollView>
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
}




