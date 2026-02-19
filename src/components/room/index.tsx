import {
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {
  END_HOUR,
  MINUTE_HEIGHT,
  START_HOUR,
  TIME_COLUMN_WIDTH,
} from '../../constants';
import { IRoom, Shift } from '../../types/rooster.type';
import { useEffect, useRef, useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '../../assets';
import { ShiftCard } from '../shiftCard';
import CurrentTimeIndicator from '../currentTimeIndicator';

interface Props {
  room: IRoom;
  isActive: boolean;
  onToggle: (room: string) => void;
  onView: (shift:Shift) => void
}
export default function Room({ room, isActive, onToggle, onView }: Props) {
  const scrollRef = useRef<ScrollView>(null);
  const { width } = useWindowDimensions();
 

  const [now, setNow] = useState(new Date());
  const [scrollY, setScrollY] = useState(0);

  // update the tine every munite
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // resolve shift overlap
  function resolveOverlaps(events: Shift[]) {
    const sorted = [...events].sort(
      (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime(),
    );

    const columns: Shift[][] = [];

    sorted.forEach(event => {
      let placed = false;

      for (let col of columns) {
        const last = col[col.length - 1];
        if (new Date(last.end) <= new Date(event.start)) {
          col.push(event);
          placed = true;
          break;
        }
      }

      if (!placed) {
        columns.push([event]);
      }
    });

    return columns;
  }

  const columns = resolveOverlaps(room.shifts);

  // calculate the current position
  const getPosition = (start: Date, end: Date) => {
    const startMinutes = start.getHours() * 60 + start.getMinutes();
    const endMinutes = end.getHours() * 60 + end.getMinutes();

    return {
      top: startMinutes * MINUTE_HEIGHT,
      height: (endMinutes - startMinutes) * MINUTE_HEIGHT,
    };
  };

  // indicate current time
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  const indicatorTop = nowMinutes * MINUTE_HEIGHT - scrollY;

  // scroll to current time
  useEffect(() => {
    const minutes = now.getHours() * 60 + now.getMinutes();

    scrollRef.current?.scrollTo({
      y: minutes * MINUTE_HEIGHT - 200,
      animated: true,
    });
  }, []);

  const totalHeight = (END_HOUR - START_HOUR) * 60 * MINUTE_HEIGHT;


  return (
    <>
      <View className="border-border flex-row items-center justify-between px-6 py-4 border-b">
        <Text className=" font-label_semibold text-md text-heading font-semibold leading-5">
          {room.name}
        </Text>
        <TouchableOpacity
          onPress={() => onToggle( isActive ? "" : room.name)}
          className=" w-9 h-9 border-borderMuted items-center justify-center border rounded-sm"
        >
            {
                isActive ? <ChevronUpIcon /> :   <ChevronDownIcon />
            }
         
        </TouchableOpacity>
      </View>

      {isActive && (
        <>
          <View className="relative flex-1 mt-6">
            <ScrollView
              ref={scrollRef}
              onScroll={e => setScrollY(e.nativeEvent.contentOffset.y)}
              scrollEventThrottle={16}
            >
              <View style={{ height: totalHeight }}>
                {Array.from({ length: 24 }).map((_, hour) => (
                  <View
                    key={hour}
                    style={{
                      height: 60 * MINUTE_HEIGHT,
                    }}
                  >
                    <Text
                      style={{
                        position: 'absolute',
                        left: 16,
                        top: -8,
                      }}
                      className="text-md font-heading_medium text-disabled font-medium leading-6"
                    >
                      {hour.toString().padStart(2, '0')}:00
                    </Text>
                  </View>
                ))}

                {columns.map((col, colIndex) =>
                  col.map(event => {
                    const { top, height } = getPosition(
                      new Date(event.start),
                      new Date(event.end),
                    );

                    const columnWidth =
                      (width - TIME_COLUMN_WIDTH - 32) / columns.length;

                    return (
                      <ShiftCard
                        key={event.id}
                        top={top}
                        height={height}
                        colIndex={colIndex}
                        columnWidth={columnWidth}
                        shift={event}
                        onView={onView}
                      />
                    );
                  }),
                )}
              </View>
            </ScrollView>

            {/* Current Time Indicator */}
            <CurrentTimeIndicator position={indicatorTop} />
          </View>
        </>
      )}
    </>
  );
}
