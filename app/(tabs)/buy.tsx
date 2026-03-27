import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Pressable, TextInput, ScrollView } from 'react-native';
import { ShieldCheck, Calendar, Navigation, Settings2, Search, SlidersHorizontal } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import Footer from '../../components/Footer';

export const DEMO_CARS = [
  {
    id: '1',
    make: 'Porsche',
    model: 'Macan S 3.0',
    year: '2020',
    mileage: '65 000 km',
    price: '45 000 CHF',
    image: 'https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=800',
    fuel: 'Essence',
    gearbox: 'Automatique',
    description: "Magnifique Porsche Macan S 3.0 V6. Entretien suivi exclusif Centre Porsche. Véhicule non-fumeur, jamais accidenté. Options complètes incluant le toit panoramique, sièges chauffants et ventilés, suspension pneumatique PASM. Véhicule expertisé pour la vente avec rapport complet AutoTrust disponible."
  },
  {
    id: '2',
    make: 'Tesla',
    model: 'Model 3 Long Range',
    year: '2021',
    mileage: '40 000 km',
    price: '35 000 CHF',
    image: 'https://images.pexels.com/photos/2526128/pexels-photo-2526128.jpeg?auto=compress&cs=tinysrgb&w=800',
    fuel: 'Électrique',
    gearbox: 'Automatique',
    description: "Tesla Model 3 Dual Motor (Long Range). Autonomie exceptionnelle. Batterie garantie jusqu'en 2029. Autopilot de base inclus. Peinture blanc nacré multicouches, intérieur premium noir. Pneus été/hiver inclus."
  },
  {
    id: '3',
    make: 'Mercedes-Benz',
    model: 'Classe C 300d',
    year: '2022',
    mileage: '30 000 km',
    price: '42 500 CHF',
    image: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=800',
    fuel: 'Diesel Electromoteur',
    gearbox: 'Automatique',
    description: "Mercedes Classe C 300d AMG Line. Finition très haut de gamme. Véhicule très économe grâce à la micro-hybridation. Grand écran central avec MBUX 2.0. État showroom absolu."
  }
];

export default function BuyScreen() {
  const router = useRouter();
  const filters = ['Tous', 'AutoTrust Certified', 'Électrique', 'SUV', 'Hybride', 'Sport'];
  const [activeFilter, setActiveFilter] = React.useState('Tous');

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* COMPACT HEADER */}
      <View style={styles.header}>
        <View style={styles.headerTopLine}>
          <Text style={styles.title}>Le Catalogue</Text>
          <View style={styles.trustMiniBadge}>
            <ShieldCheck size={14} color="#b49a5e" />
            <Text style={styles.trustMiniText}>100% Sécurisé & Expertisé</Text>
          </View>
        </View>

        <View style={styles.searchRow}>
          <View style={styles.searchContainer}>
            <Search color="#64748b" size={20} style={styles.searchIcon} />
            <TextInput 
              placeholder="Rechercher une marque, un modèle..." 
              placeholderTextColor="#94a3b8"
              style={styles.searchInput}
            />
          </View>
          <Pressable style={styles.filterButton}>
            <SlidersHorizontal color="#ffffff" size={20} />
          </Pressable>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.quickFiltersContainer}>
          {filters.map(filter => (
            <Pressable 
              key={filter} 
              onPress={() => setActiveFilter(filter)}
              style={[
                styles.quickFilterPill,
                activeFilter === filter && styles.quickFilterPillActive
              ]}>
              <Text style={[
                styles.quickFilterText,
                activeFilter === filter && styles.quickFilterTextActive
              ]}>{filter}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      {/* GRID LAYOUT FOR CARS */}
      <View style={styles.gridContainer}>
        {DEMO_CARS.map((item) => (
          <Pressable 
            key={item.id}
            style={styles.cardGridItem} 
            onPress={() => router.push(`/vehicle/${item.id}`)}
          >
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.image }} style={styles.cardImage} />
              <View style={styles.priceTag}>
                <Text style={styles.carPrice}>{item.price}</Text>
              </View>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.carMake}>{item.make}</Text>
              <Text style={styles.carModel}>{item.model}</Text>
              
              <View style={styles.badgeContainer}>
                <View style={styles.badge}>
                  <Calendar size={12} color="#64748b" />
                  <Text style={styles.badgeText}>{item.year}</Text>
                </View>
                <View style={styles.badge}>
                  <Navigation size={12} color="#64748b" />
                  <Text style={styles.badgeText}>{item.mileage}</Text>
                </View>
              </View>
            </View>
          </Pressable>
        ))}
        {/* ADDING DUMMY CARS TO SHOW GRID IF NEEDED */}
        {DEMO_CARS.map((item) => (
          <Pressable 
            key={item.id + '_copy'}
            style={styles.cardGridItem} 
            onPress={() => router.push(`/vehicle/${item.id}`)}
          >
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.image }} style={styles.cardImage} />
              <View style={styles.priceTag}>
                <Text style={styles.carPrice}>{item.price}</Text>
              </View>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.carMake}>{item.make}</Text>
              <Text style={styles.carModel}>{item.model}</Text>
              
              <View style={styles.badgeContainer}>
                <View style={styles.badge}>
                  <Calendar size={12} color="#64748b" />
                  <Text style={styles.badgeText}>{item.year}</Text>
                </View>
                <View style={styles.badge}>
                  <Navigation size={12} color="#64748b" />
                  <Text style={styles.badgeText}>{item.mileage}</Text>
                </View>
              </View>
            </View>
          </Pressable>
        ))}
      </View>

      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc', paddingTop: 60 },
  header: { marginBottom: 20, paddingHorizontal: 20, maxWidth: 1024, width: '100%', alignSelf: 'center' },
  headerTopLine: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  title: { fontSize: 32, fontWeight: '900', color: '#0f172a', letterSpacing: -1 },
  trustMiniBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fdfbf7', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 100, gap: 6 },
  trustMiniText: { fontSize: 13, color: '#8c7343', fontWeight: '700' },
  
  searchRow: { flexDirection: 'row', alignItems: 'center' },
  searchContainer: { flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: '#ffffff', borderRadius: 16, padding: 8, paddingLeft: 16, borderWidth: 1, borderColor: '#e2e8f0', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 10 },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, height: 40, fontSize: 16, color: '#0f172a' },
  filterButton: { padding: 14, backgroundColor: '#0f172a', borderRadius: 14, marginLeft: 10 },
  
  quickFiltersContainer: { marginTop: 20, gap: 10, paddingBottom: 8 },
  quickFilterPill: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 100, backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#e2e8f0' },
  quickFilterPillActive: { backgroundColor: '#b49a5e', borderColor: '#b49a5e' },
  quickFilterText: { fontSize: 14, color: '#475569', fontWeight: '600' },
  quickFilterTextActive: { color: '#ffffff' },

  gridContainer: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 20, maxWidth: 1024, width: '100%', alignSelf: 'center', gap: 20, paddingBottom: 60 },
  cardGridItem: { width: '48%', minWidth: 280, flexGrow: 1, backgroundColor: '#ffffff', borderRadius: 24, padding: 16, borderWidth: 1, borderColor: '#f1f5f9', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.04, shadowRadius: 20 },
  imageContainer: { width: '100%', aspectRatio: 4/3, borderRadius: 16, overflow: 'hidden', marginBottom: 16, backgroundColor: '#f1f5f9' },
  cardImage: { width: '100%', height: '100%' },
  priceTag: { position: 'absolute', bottom: 12, right: 12, backgroundColor: '#b49a5e', paddingHorizontal: 14, paddingVertical: 6, borderRadius: 100 },
  carPrice: { color: '#ffffff', fontWeight: '800', fontSize: 15 },
  cardContent: { paddingHorizontal: 6 },
  carMake: { fontSize: 20, fontWeight: '800', color: '#0f172a', marginBottom: 4 },
  carModel: { fontSize: 16, color: '#475569', fontWeight: '500', marginBottom: 16 },
  badgeContainer: { flexDirection: 'row', gap: 10, flexWrap: 'wrap' },
  badge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f1f5f9', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 8, gap: 6 },
  badgeText: { fontSize: 13, color: '#475569', fontWeight: '600' },
});
