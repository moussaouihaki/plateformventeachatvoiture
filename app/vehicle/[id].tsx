import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ChevronLeft, ShieldCheck, MapPin, Search, Calendar, Navigation, Fuel, Settings2, ShieldAlert } from 'lucide-react-native';
import { DEMO_CARS } from '../(tabs)/buy';

export default function VehicleDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  // Find vehicle by ID
  const vehicle = DEMO_CARS.find(v => v.id === id) || DEMO_CARS[0];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: vehicle.image }} style={styles.image} />
          
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <View style={styles.blurPill}>
              <ChevronLeft color="#0f172a" size={24} />
            </View>
          </Pressable>

          <View style={styles.certifiedBadge}>
            <View style={styles.blurPill}>
               <ShieldCheck size={18} color="#b49a5e" />
               <Text style={styles.certifiedText}>Certifié AutoTrust</Text>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.header}>
            <View>
              <Text style={styles.make}>{vehicle.make}</Text>
              <Text style={styles.model}>{vehicle.model}</Text>
            </View>
            <Text style={styles.price}>{vehicle.price}</Text>
          </View>

          <View style={styles.locationWrapper}>
            <MapPin size={16} color="#64748b" />
            <Text style={styles.locationText}>Zurich, Suisse</Text>
          </View>

          {/* Quick Stats Grid */}
          <View style={styles.statsGrid}>
             <View style={styles.statBox}>
               <Calendar color="#b49a5e" size={20} />
               <Text style={styles.statLabel}>Année</Text>
               <Text style={styles.statValue}>{vehicle.year}</Text>
             </View>
             <View style={styles.statBox}>
               <Navigation color="#b49a5e" size={20} />
               <Text style={styles.statLabel}>Kilométrage</Text>
               <Text style={styles.statValue}>{vehicle.mileage}</Text>
             </View>
             <View style={styles.statBox}>
               <Fuel color="#b49a5e" size={20} />
               <Text style={styles.statLabel}>Carburant</Text>
               <Text style={styles.statValue}>{vehicle.fuel}</Text>
             </View>
             <View style={styles.statBox}>
               <Settings2 color="#b49a5e" size={20} />
               <Text style={styles.statLabel}>Boîte</Text>
               <Text style={styles.statValue}>{vehicle.gearbox}</Text>
             </View>
          </View>

          {/* About Section */}
          <Text style={styles.sectionTitle}>À propos du véhicule</Text>
          <Text style={styles.descriptionText}>{vehicle.description}</Text>

          {/* Photo Gallery (Dummy images) */}
          <Text style={styles.sectionTitle}>Galerie (4)</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.galleryContainer}>
            <Image source={{ uri: vehicle.image }} style={styles.galleryThumbnail} />
            <Image source={{ uri: 'https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=400' }} style={styles.galleryThumbnail} />
            <Image source={{ uri: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=400' }} style={styles.galleryThumbnail} />
            <Image source={{ uri: 'https://images.pexels.com/photos/2526128/pexels-photo-2526128.jpeg?auto=compress&cs=tinysrgb&w=400' }} style={styles.galleryThumbnail} />
          </ScrollView>

          {/* Equipment list */}
          <Text style={styles.sectionTitle}>Équipements & Options</Text>
          <View style={styles.equipmentList}>
            <View style={styles.equipmentItem}><Text style={styles.equipmentText}>• Caméra de recul 360°</Text></View>
            <View style={styles.equipmentItem}><Text style={styles.equipmentText}>• Sièges chauffants</Text></View>
            <View style={styles.equipmentItem}><Text style={styles.equipmentText}>• Apple CarPlay / Android Auto</Text></View>
            <View style={styles.equipmentItem}><Text style={styles.equipmentText}>• Régulateur adaptatif</Text></View>
          </View>

          {/* Trust Guarantees */}
          <Text style={[styles.sectionTitle, {marginTop: 20}]}>Rapport & Garanties</Text>
          <View style={styles.guaranteeContainer}>
            <View style={styles.guaranteeItem}>
              <View style={styles.iconCircle}><Search size={22} color="#22c55e" /></View>
              <View style={styles.guaranteeTextCont}>
                 <Text style={styles.guaranteeTitle}>Rapport d'expertise (160 points clés)</Text>
                 <Text style={styles.guaranteeDesc}>Aucune anomalie signalée. Certifié par expert indépendant.</Text>
              </View>
            </View>

            <View style={styles.guaranteeItem}>
              <View style={styles.iconCircle}><ShieldAlert size={22} color="#b49a5e" /></View>
              <View style={styles.guaranteeTextCont}>
                 <Text style={styles.guaranteeTitle}>Garantie mécanique incluse (3 mois)</Text>
                 <Text style={styles.guaranteeDesc}>Moteur, boîte et pont couverts. (Extension à 12 mois possible).</Text>
              </View>
            </View>
          </View>

          <View style={{height: 100}}/>
        </View>
      </ScrollView>

      {/* Floating Action CTA */}
      <View style={styles.ctaContainer}>
         <Pressable style={styles.ctaButton} onPress={() => router.push(`/escrow/${vehicle.id}`)}>
            <Text style={styles.ctaText}>Bloquer les fonds (Séquestre)</Text>
            <ShieldCheck color="#fff" size={20} />
         </Pressable>
         <Text style={styles.ctaNote}>Aucun frais. 100% sécurisé pour l'acheteur.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  scrollContent: { paddingBottom: 20, maxWidth: 1024, width: '100%', alignSelf: 'center' },
  imageContainer: { width: '100%', height: 350, position: 'relative' },
  image: { width: '100%', height: '100%' },
  backButton: { position: 'absolute', top: 50, left: 20 },
  certifiedBadge: { position: 'absolute', bottom: 40, right: 20 },
  blurPill: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
    paddingHorizontal: 16, paddingVertical: 10,
    borderRadius: 100, flexDirection: 'row', alignItems: 'center', gap: 6,
    shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 10,
  },
  certifiedText: { color: '#b49a5e', fontWeight: '700', fontSize: 13 },
  content: { padding: 24, borderTopLeftRadius: 30, borderTopRightRadius: 30, backgroundColor: '#ffffff', marginTop: -30 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  make: { fontSize: 28, fontWeight: '800', color: '#0f172a', letterSpacing: -0.5 },
  model: { fontSize: 18, color: '#475569', marginTop: 4 },
  price: { fontSize: 24, fontWeight: '800', color: '#b49a5e' },
  locationWrapper: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 16 },
  locationText: { color: '#64748b', fontSize: 15 },
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginTop: 30, marginBottom: 30 },
  statBox: {
    width: '47%', backgroundColor: '#f8fafc', padding: 16, borderRadius: 16,
    borderWidth: 1, borderColor: '#e2e8f0'
  },
  statLabel: { color: '#64748b', fontSize: 13, marginTop: 10, marginBottom: 4 },
  statValue: { color: '#0f172a', fontSize: 16, fontWeight: '700' },
  sectionTitle: { fontSize: 20, fontWeight: '700', color: '#0f172a', marginBottom: 16, marginTop: 10 },
  descriptionText: { fontSize: 16, color: '#475569', lineHeight: 24, marginBottom: 30 },
  galleryContainer: { gap: 12, paddingBottom: 16 },
  galleryThumbnail: { width: 140, height: 100, borderRadius: 16 },
  equipmentList: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginBottom: 20 },
  equipmentItem: { backgroundColor: '#f1f5f9', paddingHorizontal: 16, paddingVertical: 10, borderRadius: 100 },
  equipmentText: { color: '#334155', fontWeight: '500', fontSize: 14 },
  guaranteeContainer: { gap: 16 },
  guaranteeItem: { flexDirection: 'row', gap: 16, backgroundColor: '#f8fafc', padding: 16, borderRadius: 16, borderWidth: 1, borderColor: '#e2e8f0' },
  iconCircle: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4 },
  guaranteeTextCont: { flex: 1 },
  guaranteeTitle: { color: '#0f172a', fontWeight: '700', fontSize: 16, marginBottom: 4 },
  guaranteeDesc: { color: '#64748b', fontSize: 14, lineHeight: 20 },
  ctaContainer: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    backgroundColor: '#ffffff', paddingHorizontal: 20, paddingTop: 16, paddingBottom: 30,
    borderTopWidth: 1, borderTopColor: '#e2e8f0'
  },
  ctaButton: { 
    borderRadius: 100, backgroundColor: '#b49a5e',
    flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 18, gap: 10,
    shadowColor: '#b49a5e', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.3, shadowRadius: 16, marginBottom: 10 
  },
  ctaText: { color: '#ffffff', fontSize: 18, fontWeight: '700' },
  ctaNote: { textAlign: 'center', color: '#64748b', fontSize: 13 },
});
