import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ 
      headerShown: false, 
      tabBarShowLabel: false,
      tabBarActiveTintColor: '#C67C4E', // Màu cam của UI
    }}>
      <Tabs.Screen 
        name="home" 
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />
        }} 
      />
      <Tabs.Screen 
        name="favorites" 
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="heart-outline" size={24} color={color} />
        }} 
      />
      <Tabs.Screen 
        name="cart" 
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="bag-handle-outline" size={24} color={color} />
        }} 
      />
      <Tabs.Screen 
        name="notifications" 
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="notifications-outline" size={24} color={color} />
        }} 
      />
    </Tabs>
  );
}