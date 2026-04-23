import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DetailScreen() {
  const { itemData } = useLocalSearchParams();
  const item = itemData ? JSON.parse(itemData as string) : null;
  const [size, setSize] = useState('M');

  if (!item) return <Text style={{marginTop: 50}}>No Data</Text>;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Detail</Text>
          <TouchableOpacity>
            <Ionicons name="heart-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* Image */}
        <Image source={item.image} style={styles.image} />

        {/* Info Container */}
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
          
          <View style={styles.ratingRow}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="star" size={20} color="#FBBE21" />
              <Text style={styles.rating}>{item.rating}</Text>
              <Text style={styles.reviews}>({item.reviews})</Text>
            </View>
            
            {/* Hàng Icon sử dụng ảnh local và đẩy vị trí lên cao hơn */}
            <View style={styles.iconRow}>
              <View style={styles.iconBackground}>
                <Image 
                  source={require('../assets/images/ic1.png')} 
                  style={styles.iconImage} 
                  resizeMode="contain" 
                />
              </View>
              <View style={styles.iconBackground}>
                <Image 
                  source={require('../assets/images/ic2.png')} 
                  style={styles.iconImage} 
                  resizeMode="contain" 
                />
              </View>
              <View style={styles.iconBackground}>
                <Image 
                  source={require('../assets/images/ic3.png')} 
                  style={styles.iconImage} 
                  resizeMode="contain" 
                />
              </View>
            </View>
          </View>

          {/* ĐƯỜNG GẠCH NGANG MỎNG */}
          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>
            {item.description} <Text style={styles.readMore}>Read More</Text>
          </Text>

          {/* Size Section */}
          <Text style={styles.sectionTitle}>Size</Text>
          <View style={styles.sizeRow}>
            {['S', 'M', 'L'].map((s) => (
              <TouchableOpacity 
                key={s} 
                style={[styles.sizeBtn, size === s && styles.sizeBtnActive]}
                onPress={() => setSize(s)}
              >
                <Text style={[styles.sizeText, size === s && styles.sizeTextActive]}>{s}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <View>
          <Text style={styles.priceLabel}>Price</Text>
          <Text style={styles.price}>$ {item.price}</Text>
        </View>
        <TouchableOpacity style={styles.buyBtn} activeOpacity={0.8}>
          <Text style={styles.buyText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingHorizontal: 20, 
    paddingTop: 65, 
    paddingBottom: 20,
    alignItems: 'center' 
  },
  headerTitle: { fontSize: 18, fontWeight: 'bold' },
  image: { width: '90%', height: 220, borderRadius: 20, alignSelf: 'center' },
  infoContainer: { paddingHorizontal: 25, paddingTop: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#2F2D2C' },
  subtitle: { fontSize: 12, color: '#9B9B9B', marginTop: 4 },
  
  ratingRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    marginTop: 15 
  },
  rating: { fontSize: 16, fontWeight: 'bold', marginLeft: 5, color: '#2F2D2C' },
  reviews: { fontSize: 12, color: '#808080', marginLeft: 5 },
  
  // ĐẨY VỊ TRÍ ICON LÊN CAO HƠN
  iconRow: { 
    flexDirection: 'row', 
    gap: 12,
    marginTop: -20, // Giá trị âm giúp kéo hàng icon lên phía trên cao hơn
  },
  iconBackground: { 
    backgroundColor: '#F5F5F5', 
    padding: 8, 
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
  iconImage: {
    width: 42,
    height: 42,
  },

  divider: {
    height: 1,
    backgroundColor: '#EAEAEA',
    marginVertical: 15,
  },

  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginTop: 5, marginBottom: 10, color: '#2F2D2C' },
  description: { fontSize: 14, color: '#9B9B9B', lineHeight: 22 },
  readMore: { color: '#C67C4E', fontWeight: 'bold' },
  
  sizeRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  sizeBtn: { 
    flex: 1, 
    paddingVertical: 12, 
    borderWidth: 1, 
    borderColor: '#DEDEDE', 
    borderRadius: 12, 
    alignItems: 'center', 
    marginHorizontal: 5,
    backgroundColor: 'white'
  },
  sizeBtnActive: { borderColor: '#C67C4E', backgroundColor: '#FFF5EE' },
  sizeText: { color: '#2F2D2C', fontSize: 14 },
  sizeTextActive: { color: '#C67C4E', fontWeight: 'bold' },
  
  bottomBar: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 25, 
    paddingVertical: 20,
    backgroundColor: 'white', 
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: 45, 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 10
  },
  priceLabel: { color: '#9B9B9B', fontSize: 14 },
  price: { color: '#C67C4E', fontSize: 20, fontWeight: 'bold', marginTop: 4 },
  buyBtn: { backgroundColor: '#C67C4E', paddingVertical: 18, paddingHorizontal: 60, borderRadius: 16 },
  buyText: { color: 'white', fontWeight: 'bold', fontSize: 16 }
});