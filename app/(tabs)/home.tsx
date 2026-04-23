import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import coffeeData from '../../constants/data';

export default function HomeScreen() {
  // Hàm render từng card cà phê trong danh sách
  const renderItem = ({ item }: any) => (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => router.push({ pathname: '/detail', params: { itemData: JSON.stringify(item) } })}
    >
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.ratingBadge}>
        <Ionicons name="star" size={12} color="#D4AF37" />
        <Text style={styles.ratingText}>{item.rating}</Text>
      </View>
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
      <View style={styles.cardBottom}>
        <Text style={styles.price}>$ {item.price}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* 1. Header Section (Phần màu đen dài và chứa Search + Filter) */}
      <View style={styles.header}>
        <Text style={styles.locationLabel}>Location</Text>
        <Text style={styles.locationText}>Bilzen, Tanjungbalai ⌄</Text>
        
        {/* Row chứa Search Box và Nút Lọc */}
        <View style={styles.searchRow}>
          <View style={styles.searchBox}>
            <Ionicons name="search" size={20} color="white" style={{marginLeft: 12}}/>
            <TextInput 
              placeholder="Search coffee" 
              placeholderTextColor="#989898" 
              style={styles.searchInput} 
            />
          </View>
          
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="options" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* 2. Promo Banner (Đè lên ranh giới Header) */}
      <View style={styles.promoContainer}>
        <Image 
          source={require('../../assets/images/Banner.png')} 
          style={styles.promoImage} 
        />
      </View>

      {/* 3. Categories (Danh mục loại cà phê) */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
        {['All Coffee', 'Machiato', 'Latte', 'Americano'].map((cat, index) => (
          <TouchableOpacity key={index} style={[styles.catBtn, index === 0 && styles.catBtnActive]}>
            <Text style={[styles.catText, index === 0 && styles.catTextActive]}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* 4. Coffee Grid (Danh sách sản phẩm) */}
      <FlatList
        data={coffeeData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        scrollEnabled={false}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.row}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F9F9' },
  
  // Header Style
  header: { 
    backgroundColor: '#1C1C1C', 
    paddingHorizontal: 25, 
    paddingTop: 60, 
    paddingBottom: 90 // Làm phần đen dài ra giống mẫu
  },
  locationLabel: { color: '#B7B7B7', fontSize: 12 },
  locationText: { color: 'white', fontSize: 14, fontWeight: '600', marginTop: 4, marginBottom: 25 },
  
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchBox: { 
    flex: 1, 
    flexDirection: 'row', 
    backgroundColor: '#313131', 
    borderRadius: 16, 
    alignItems: 'center', 
    height: 52,
  },
  searchInput: { 
    flex: 1, 
    color: 'white', 
    paddingHorizontal: 12,
    fontSize: 14,
  },
  filterButton: {
    backgroundColor: '#C67C4E', 
    width: 52,
    height: 52,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },

  // Banner Style
  promoContainer: { 
    marginTop: -60, // Đẩy banner lên phía trên phần đen
    marginHorizontal: 25, 
    borderRadius: 20, 
    overflow: 'hidden', 
    height: 140 
  },
  promoImage: { width: '100%', height: '100%' },

  // Categories Style
  categories: { marginVertical: 20, paddingLeft: 25 },
  catBtn: { paddingHorizontal: 15, paddingVertical: 8, borderRadius: 10, marginRight: 10, backgroundColor: 'white' },
  catBtnActive: { backgroundColor: '#C67C4E' },
  catText: { color: 'black' },
  catTextActive: { color: 'white', fontWeight: 'bold' },

  // Grid Style
  listContainer: { paddingHorizontal: 15, paddingBottom: 20 },
  row: { justifyContent: 'space-between' },
  
  // Card Style
  card: { backgroundColor: 'white', width: '48%', borderRadius: 16, padding: 8, marginBottom: 15 },
  cardImage: { width: '100%', height: 125, borderRadius: 12 },
  ratingBadge: { 
    position: 'absolute', 
    top: 15, 
    right: 15, 
    flexDirection: 'row', 
    backgroundColor: 'rgba(0,0,0,0.5)', 
    paddingHorizontal: 6, 
    paddingVertical: 2,
    borderRadius: 6, 
    alignItems: 'center' 
  },
  ratingText: { color: 'white', fontSize: 10, marginLeft: 3, fontWeight: 'bold' },
  cardTitle: { fontSize: 16, fontWeight: 'bold', marginTop: 10, color: '#2F2D2C' },
  cardSubtitle: { fontSize: 12, color: '#9B9B9B', marginTop: 2 },
  cardBottom: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 },
  price: { fontSize: 18, fontWeight: 'bold', color: '#2F4B4E' },
  addButton: { backgroundColor: '#C67C4E', borderRadius: 10, padding: 8 }
});