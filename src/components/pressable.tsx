import { Pressable as RNPressable, PressableProps as RNPressableProps, ViewStyle } from "react-native";

interface PressableProps extends RNPressableProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export function Pressable({ children, style, ...props }: PressableProps) {
  return (
    <RNPressable
      {...props}
      style={({ pressed }) => [
        style,
        {
          opacity: pressed ? 0.5 : 1,
        },
      ]}
    >
      {children}
    </RNPressable>
  );
}
