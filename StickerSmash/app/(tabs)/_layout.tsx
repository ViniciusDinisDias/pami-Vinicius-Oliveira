import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: '#ffd33d',
        }}
    >
      <Tabs.Screen 
      name="index" 
      options={{ 
        headerTitle: 'Sticker Smash',
        tabBarIcon: ({ focused, color }) => (
        <Ionicons 
            name={focused ? "home-sharp" : "home-outline"}
            color={color}
            size={24}
            />
        ),
        }} 
        />
     
      <Tabs.Screen 
          name="+not-found" 
          options={{}} />
    </Tabs>
  );
}
