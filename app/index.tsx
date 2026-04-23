import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Dimensions, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { height } = Dimensions.get('window');

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* 1. Phần ảnh nền - Chỉ chiếm 70% chiều cao màn hình để tránh bị phóng quá to */}
      <ImageBackground 
        source={require('../assets/images/ob.png')} 
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* 2. Lớp Gradient phủ từ trong suốt sang đen để hòa quyện vào nền bên dưới */}
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.5)', 'black']}
          style={styles.gradient}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.title}>
              Fall in Love with{'\n'}Coffee in Blissful{'\n'}Delight!
            </Text>
            
            <Text style={styles.subtitle}>
              Welcome to our cozy coffee corner, where{'\n'}every cup is a delightful for you.
            </Text>
            
            <TouchableOpacity 
              style={styles.button}
              onPress={() => router.replace('/(tabs)/home')}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'black' // Đảm bảo nền tổng thể là màu đen
  },
  backgroundImage: { 
    width: '100%',
    height: height * 0.7, // CHÍNH XÁC: Chỉ lấy 70% chiều cao màn hình
    top: 0,
  },
  gradient: {
    // Kéo dài gradient xuống quá phần ảnh để phủ kín phần đen bên dưới
    height: height * 0.15, 
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'flex-end',
  },
  contentContainer: {
    paddingHorizontal: 30,
    paddingBottom: 40,
    alignItems: 'center',
    // Đẩy nội dung xuống phần nền đen bên dưới ly cà phê
    marginBottom: -(height * 0.3), 
  },
  title: { 
    fontSize: 33, 
    fontWeight: 'bold', 
    color: 'white', 
    textAlign: 'center', 
    lineHeight: 48, 
    marginBottom: 10,
  },
  subtitle: { 
    fontSize: 15, 
    color: '#A9A9A9', 
    textAlign: 'center', 
    lineHeight: 22,
    marginBottom: 30, 
  },
  button: { 
    backgroundColor: '#C67C4E', 
    paddingVertical: 18, 
    borderRadius: 15, 
    width: '100%', 
    alignItems: 'center' 
  },
  buttonText: { 
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 16 
  }
});