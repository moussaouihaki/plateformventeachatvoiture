import { View, Text, StyleSheet, ScrollView, Image, Pressable, Dimensions, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { ShieldCheck, CarFront, Lock, FileText, Search, ArrowRight, CheckCircle2, Star, Quote } from 'lucide-react-native';
import { DEMO_CARS } from './buy';
import Footer from '../../components/Footer';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false} bounces={false}>
        
        {/* PREMIUM HERO BANNER */}
        <View style={styles.heroSection}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2669&auto=format&fit=crop' }} 
            style={styles.heroImage} 
          />
          <LinearGradient 
            colors={['rgba(15, 23, 42, 0)', 'rgba(15, 23, 42, 0.4)', 'rgba(15, 23, 42, 1)']} 
            style={StyleSheet.absoluteFill} 
          />
          
          <View style={styles.heroContent}>
            <View style={styles.heroBadge}>
            <Text style={styles.heroBadgeText}>NOUVELLE FAÇON DE VENDRE & ACHETER</Text>
          </View>
          <Text style={[styles.heroTitle, { fontSize: Dimensions.get('window').width < 768 ? 40 : 56, lineHeight: Dimensions.get('window').width < 768 ? 48 : 62 }]}>
            Le Courtier Automobile Premium.
          </Text>
          <Text style={[styles.heroSubtitle, { fontSize: Dimensions.get('window').width < 768 ? 16 : 18 }]}>
              Découvrez la première plateforme suisse qui sécurise l'achat et la vente de véhicules entre particuliers avec un compte séquestre dédié.
            </Text>
            
            {/* FLOATING SEARCH BAR */}
            <View style={[styles.floatingSearchBar, width < 768 && { flexDirection: 'column', gap: 10, padding: 12 }]}>
              <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, width: '100%' }}>
                <Search color="#64748b" size={20} style={{ marginLeft: 8 }} />
                <TextInput 
                  placeholder="Ex: Porsche Macan, Tesla..." 
                  placeholderTextColor="#94a3b8"
                  style={[styles.searchInput, width < 768 && { fontSize: 16 }]}
                />
              </View>
              <Pressable style={[styles.searchButtonPrimary, width < 768 && { width: '100%', alignItems: 'center' }]} onPress={() => router.push('/buy')}>
                <Text style={styles.searchButtonText}>Chercher</Text>
              </Pressable>
            </View>
          </View>
        </View>

        {/* OVERLAPPING STATS CARD */}
        <View style={[styles.statsOverlapContainer, width < 768 && { marginTop: -20 }]}>
          <View style={[styles.statsCard, width < 768 && { padding: 20 }]}>
            <View style={styles.statBox}>
              <Text style={[styles.statValue, width < 768 && { fontSize: 24 }]}>100%</Text>
              <Text style={styles.statLabel}>Paiement Sécurisé</Text>
            </View>
            <View style={[styles.statDivider, width < 768 && { display: 'none' }]} />
            <View style={styles.statBox}>
              <Text style={[styles.statValue, width < 768 && { fontSize: 24 }]}>+20%</Text>
              <Text style={styles.statLabel}>Prix Net Vendeur</Text>
            </View>
            <View style={[styles.statDivider, width < 768 && { display: 'none' }]} />
            <View style={styles.statBox}>
              <Text style={[styles.statValue, width < 768 && { fontSize: 24 }]}>3-24</Text>
              <Text style={styles.statLabel}>Mois de Garantie</Text>
            </View>
          </View>
        </View>

        {/* CONCEPT EXPLANATION / MANIFESTO */}
        <View style={styles.manifestoSection}>
          <View style={styles.manifestoGrid}>
            <View style={styles.manifestoTextCol}>
              <Text style={styles.manifestoPreTitle}>NOTRE CONCEPT</Text>
              <Text style={styles.manifestoTitle}>La rentabilité du particulier. La sécurité du garage.</Text>
              <Text style={styles.manifestoDesc}>
                AutoTrust est la première plateforme d'intermédiation automobile en Suisse conçue exclusivement pour les particuliers. 
                {"\n\n"}
                Pourquoi choisir entre revendre votre voiture à perte à un garage ou risquer une arnaque en la vendant seul ? Nous vous accompagnons de A à Z : nos experts inspectent le véhicule, nous certifions son état, et nous bloquons l'argent de l'acheteur sur un compte séquestre. 
                {"\n\n"}
                Résultat : l'acheteur bénéficie d'une garantie mécanique (jusqu'à 24 mois), et le vendeur récupère en moyenne 20% de plus que via une reprise classique, tout en évitant les négociations épuisantes.
              </Text>
              <Pressable style={styles.manifestoLink} onPress={() => router.push('/sell')}>
                <Text style={styles.manifestoLinkText}>Découvrir notre méthode en 4 étapes</Text>
                <ArrowRight size={18} color="#b49a5e" />
              </Pressable>
            </View>
            
            <View style={styles.manifestoImageCol}>
              <View style={styles.manifestoImageWrapper}>
                <Image source={{uri: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop'}} style={styles.manifestoImage} />
                <View style={styles.manifestoBadge}>
                  <ShieldCheck size={24} color="#166534" />
                  <View style={{marginLeft: 12}}>
                    <Text style={styles.manifestoBadgeNum}>Zéro Fraude</Text>
                    <Text style={styles.manifestoBadgeText}>Fonds garantis à 100%</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* LATEST OPPORTUNITIES (Minimalist Carousel) */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Sélection Exclusive</Text>
            <Pressable onPress={() => router.push('/buy')} style={styles.seeAllBtn}>
              <Text style={styles.seeAllText}>Voir nos véhicules</Text>
              <ArrowRight size={16} color="#b49a5e" />
            </Pressable>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.carouselContainer}>
            {DEMO_CARS.map(car => (
              <Pressable key={car.id} style={styles.carCard} onPress={() => router.push(`/vehicle/${car.id}`)}>
                <View style={styles.carImageContainer}>
                  <Image source={{uri: car.image}} style={styles.carImage} />
                  <View style={styles.carPriceBadge}>
                    <Text style={styles.carPriceText}>{car.price}</Text>
                  </View>
                </View>
                <View style={styles.carInfo}>
                  <Text style={styles.carMake}>{car.make} <Text style={styles.carModel}>{car.model}</Text></Text>
                  <Text style={styles.carMeta}>{car.year} • {car.mileage} • {car.fuel}</Text>
                </View>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        {/* TWO SPLIT ACTIONS (BUY / SELL) */}
        <View style={styles.splitSection}>
          <View style={[styles.splitCard, { backgroundColor: '#f8fafc' }]}>
            <View style={styles.splitIcon}><CarFront size={28} color="#0f172a" /></View>
            <Text style={styles.splitTitle}>Je veux vendre</Text>
            <Text style={styles.splitDesc}>Vendez votre véhicule sans effort, +20% plus cher qu'une reprise standard. On s'occupe de tout.</Text>
            <Pressable style={styles.splitBtnOutline} onPress={() => router.push('/sell')}>
              <Text style={styles.splitBtnOutlineText}>Estimer ma voiture</Text>
            </Pressable>
          </View>

          <View style={[styles.splitCard, { backgroundColor: '#0f172a' }]}>
            <View style={[styles.splitIcon, { backgroundColor: 'rgba(255,255,255,0.1)' }]}><ShieldCheck size={28} color="#b49a5e" /></View>
            <Text style={[styles.splitTitle, { color: '#ffffff' }]}>Je veux acheter</Text>
            <Text style={[styles.splitDesc, { color: '#94a3b8' }]}>Des véhicules rigoureusement contrôlés, garantis, avec fonds protégés jusqu'à la livraison.</Text>
            <Pressable style={styles.splitBtnSolid} onPress={() => router.push('/buy')}>
              <Text style={styles.splitBtnSolidText}>Voir le catalogue</Text>
            </Pressable>
          </View>
        </View>

        {/* POPULAR BRANDS SECTION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Toutes nos marques</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.brandsContainer}>
            {['Abarth', 'Alfa Romeo', 'Alpine', 'Aston Martin', 'Audi', 'Bentley', 'BMW', 'Bugatti', 'Chevrolet', 'Chrysler', 'Citroën', 'Cupra', 'Dacia', 'Dodge', 'Ferrari', 'Fiat', 'Ford', 'Honda', 'Hyundai', 'Infiniti', 'Jaguar', 'Jeep', 'Kia', 'Lamborghini', 'Land Rover', 'Lexus', 'Lotus', 'Maserati', 'Mazda', 'McLaren', 'Mercedes-Benz', 'MG', 'Mini', 'Mitsubishi', 'Nissan', 'Opel', 'Peugeot', 'Polestar', 'Porsche', 'Renault', 'Rolls-Royce', 'Seat', 'Skoda', 'Smart', 'Subaru', 'Suzuki', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo'].map(brand => (
              <Pressable key={brand} style={styles.brandCard} onPress={() => router.push(`/buy?brand=${brand}`)}>
                <Text style={styles.brandText}>{brand}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        {/* BROWSE BY BODY TYPE */}
        <View style={styles.sectionGray}>
          <View style={styles.sectionContent}>
            <Text style={styles.sectionTitle}>Catégories</Text>
            <View style={styles.bodyTypeGrid}>
                {[
                  { id: 'suv', name: 'SUV & 4x4', image: 'https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=800' },
                  { id: 'sport', name: 'Sportive', image: 'https://images.pexels.com/photos/256513/pexels-photo-256513.jpeg?auto=compress&cs=tinysrgb&w=800' },
                  { id: 'berline', name: 'Berline', image: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=800' },
                  { id: 'cabrio', name: 'Cabriolet', image: 'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=800' },
                ].map(type => (
                  <Pressable key={type.id} style={styles.bodyTypeCard}>
                    <Image source={{uri: type.image}} style={styles.bodyTypeImage} />
                    <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']} style={StyleSheet.absoluteFill} />
                    <Text style={styles.bodyTypeText}>{type.name}</Text>
                  </Pressable>
                ))}
            </View>
          </View>
        </View>

        {/* CUSTOMER REVIEWS */}
        <View style={styles.section}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 16, gap: 10}}>
            <Star size={32} color="#fbbf24" fill="#fbbf24" />
            <Text style={{fontSize: 24, fontWeight: '900', color: '#0f172a'}}>4.9/5</Text>
          </View>
          <Text style={[styles.sectionTitle, {textAlign: 'center', marginBottom: 40}]}>Ce que disent nos clients</Text>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.reviewsContainer}>
            {[
              { id: 1, name: 'Laurent M.', review: 'Vente de ma Porsche Macan conclue en 7 jours. J\'ai reçu 4500 CHF de plus que l\'offre de reprise du garage de la marque. Le système de séquestre rassure tout le monde.' },
              { id: 2, name: 'Sophie T.', review: 'J\'avais peur d\'acheter à un particulier. AutoTrust a expertisé la voiture avant la vente et mon argent était bloqué jusqu\'à la remise des clés. Parfait.' },
              { id: 3, name: 'Marc E.', review: 'Une expérience ultra fluide. Le photographe AutoTrust a mis mon Audi en valeur, et ils se sont occupés de filtrer les appels. Zéro stress.' }
            ].map(item => (
              <View key={item.id} style={styles.reviewCard}>
                <View style={{flexDirection: 'row', gap: 4, marginBottom: 16}}>
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} color="#fbbf24" fill="#fbbf24" />)}
                </View>
                <Quote size={24} color="#e2e8f0" style={{marginBottom: 12}} />
                <Text style={styles.reviewText}>"{item.review}"</Text>
                <Text style={styles.reviewAuthor}>{item.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* 4 PILLARS TEXT GRID */}
        <View style={styles.pillarsSection}>
          <Text style={styles.pillarsMainTitle}>L'engagement AutoTrust</Text>
          
          <View style={styles.pillarsGrid}>
            <View style={styles.pillarItem}>
              <CheckCircle2 color="#b49a5e" size={24} style={styles.pillarIcon} />
              <Text style={styles.pillarTitle}>Expertise Complète</Text>
              <Text style={styles.pillarDesc}>Inspection sur 160 points par un professionnel indépendant avant chaque vente.</Text>
            </View>
            
            <View style={styles.pillarItem}>
              <Lock color="#b49a5e" size={24} style={styles.pillarIcon} />
              <Text style={styles.pillarTitle}>Compte Séquestre</Text>
              <Text style={styles.pillarDesc}>L'argent de la transaction est verrouillé. Aucun risque de chèque en bois ou de fraude.</Text>
            </View>
            
            <View style={styles.pillarItem}>
              <ShieldCheck color="#b49a5e" size={24} style={styles.pillarIcon} />
              <Text style={styles.pillarTitle}>Garantie Incluse</Text>
              <Text style={styles.pillarDesc}>Tranquillité d'esprit avec une couverture pannes mécaniques allant de 3 à 24 mois.</Text>
            </View>
            
            <View style={styles.pillarItem}>
              <FileText color="#b49a5e" size={24} style={styles.pillarIcon} />
              <Text style={styles.pillarTitle}>Démarches Gérées</Text>
              <Text style={styles.pillarDesc}>De la photographie pro aux papiers administratifs, nous prenons le relais.</Text>
            </View>
          </View>
        </View>

        {/* Use Global Footer Component Here */}
        <Footer />

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  scrollContent: { paddingBottom: 0 },
  
  heroSection: { height: Dimensions.get('window').width < 768 ? 580 : 650, width: '100%', position: 'relative', backgroundColor: '#0f172a', justifyContent: 'center', alignItems: 'center' },
  heroImage: { width: '100%', height: '100%', position: 'absolute', top: 0, opacity: 0.6 },
  heroContent: { width: '100%', maxWidth: 1024, paddingHorizontal: 24, alignItems: 'center', zIndex: 10, marginTop: 40 },
  heroBadge: { backgroundColor: 'rgba(255,255,255,0.1)', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 100, marginBottom: 20, borderWidth: 1, borderColor: 'rgba(255,255,255,0.2)' },
  heroBadgeText: { color: '#ffffff', fontWeight: '800', fontSize: 13, letterSpacing: 1 },
  heroTitle: { fontSize: 56, fontWeight: '900', color: '#ffffff', lineHeight: 62, letterSpacing: -1.5, marginBottom: 16, textAlign: 'center' },
  heroSubtitle: { fontSize: 18, color: '#cbd5e1', lineHeight: 28, marginBottom: 40, maxWidth: 600, textAlign: 'center' },
  
  floatingSearchBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#ffffff', borderRadius: 20, padding: 8, paddingLeft: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 20 }, shadowOpacity: 0.4, shadowRadius: 30, width: '100%', maxWidth: 700 },
  searchInput: { flex: 1, height: 50, fontSize: 18, color: '#0f172a', paddingHorizontal: 16 },
  searchButtonPrimary: { backgroundColor: '#b49a5e', paddingHorizontal: 28, paddingVertical: 14, borderRadius: 14 },
  searchButtonText: { color: '#ffffff', fontWeight: '800', fontSize: 16 },

  statsOverlapContainer: { marginTop: -60, paddingHorizontal: 24, zIndex: 20, width: '100%', maxWidth: 1024, alignSelf: 'center' },
  statsCard: { flexDirection: 'row', flexWrap: 'wrap', gap: 20, backgroundColor: '#ffffff', borderRadius: 24, padding: 30, justifyContent: 'space-around', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.08, shadowRadius: 30, borderWidth: 1, borderColor: '#f1f5f9' },
  statBox: { alignItems: 'center' },
  statValue: { fontSize: 36, fontWeight: '900', color: '#0f172a', letterSpacing: -1 },
  statLabel: { fontSize: 13, color: '#64748b', fontWeight: '600', textTransform: 'uppercase', marginTop: 4 },
  statDivider: { width: 1, height: 40, backgroundColor: '#e2e8f0' },

  manifestoSection: { paddingHorizontal: 24, paddingTop: 100, paddingBottom: 40, maxWidth: 1024, width: '100%', alignSelf: 'center' },
  manifestoGrid: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: 60 },
  manifestoTextCol: { flex: 1, minWidth: 320 },
  manifestoPreTitle: { fontSize: 13, fontWeight: '800', color: '#b49a5e', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 16 },
  manifestoTitle: { fontSize: 36, fontWeight: '900', color: '#0f172a', lineHeight: 42, letterSpacing: -1, marginBottom: 24 },
  manifestoDesc: { fontSize: 16, color: '#475569', lineHeight: 26, marginBottom: 32 },
  manifestoLink: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  manifestoLinkText: { fontSize: 16, fontWeight: '700', color: '#b49a5e' },
  manifestoImageCol: { flex: 1, minWidth: 300, alignItems: 'center' },
  manifestoImageWrapper: { position: 'relative', width: '100%', height: 400, borderRadius: 32 },
  manifestoImage: { width: '100%', height: '100%', borderRadius: 32 },
  manifestoBadge: { position: 'absolute', bottom: -24, left: -24, backgroundColor: '#ffffff', flexDirection: 'row', alignItems: 'center', padding: 20, borderRadius: 24, shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.1, shadowRadius: 30, borderWidth: 1, borderColor: '#f1f5f9' },
  manifestoBadgeNum: { fontSize: 18, fontWeight: '900', color: '#0f172a' },
  manifestoBadgeText: { fontSize: 14, color: '#64748b', fontWeight: '500' },

  section: { paddingHorizontal: 24, paddingTop: 100, maxWidth: 1024, width: '100%', alignSelf: 'center' },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 30 },
  sectionTitle: { fontSize: 32, fontWeight: '900', color: '#0f172a', letterSpacing: -1 },
  seeAllBtn: { flexDirection: 'row', alignItems: 'center', gap: 6, paddingBottom: 6 },
  seeAllText: { fontSize: 16, fontWeight: '700', color: '#b49a5e' },
  
  carouselContainer: { gap: 24, paddingRight: 24, paddingBottom: 20 },
  carCard: { width: 320 },
  carImageContainer: { width: '100%', height: 200, borderRadius: 24, overflow: 'hidden', marginBottom: 16, position: 'relative', backgroundColor: '#f1f5f9' },
  carImage: { width: '100%', height: '100%' },
  carPriceBadge: { position: 'absolute', bottom: 12, right: 12, backgroundColor: '#b49a5e', paddingHorizontal: 14, paddingVertical: 6, borderRadius: 100, overflow: 'hidden' },
  carPriceText: { color: '#ffffff', fontWeight: '800', fontSize: 15 },
  carInfo: { paddingHorizontal: 4 },
  carMake: { fontSize: 20, fontWeight: '800', color: '#0f172a', marginBottom: 4 },
  carModel: { fontWeight: '500', color: '#475569' },
  carMeta: { fontSize: 14, color: '#64748b', fontWeight: '500' },

  splitSection: { flexDirection: 'row', flexWrap: 'wrap', gap: 24, paddingHorizontal: 24, paddingTop: 60, maxWidth: 1024, width: '100%', alignSelf: 'center' },
  splitCard: { flex: 1, minWidth: 300, borderRadius: 32, padding: 40, justifyContent: 'space-between' },
  splitIcon: { width: 60, height: 60, borderRadius: 20, backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center', marginBottom: 24, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 10 },
  splitTitle: { fontSize: 28, fontWeight: '900', color: '#0f172a', marginBottom: 16, letterSpacing: -0.5 },
  splitDesc: { fontSize: 16, color: '#475569', lineHeight: 26, marginBottom: 40 },
  splitBtnOutline: { borderWidth: 2, borderColor: '#0f172a', paddingVertical: 18, borderRadius: 100, alignItems: 'center' },
  splitBtnOutlineText: { fontSize: 16, fontWeight: '800', color: '#0f172a' },
  splitBtnSolid: { backgroundColor: '#b49a5e', paddingVertical: 18, borderRadius: 100, alignItems: 'center' },
  splitBtnSolidText: { fontSize: 16, fontWeight: '800', color: '#ffffff' },

  brandsContainer: { gap: 16, paddingRight: 24, paddingBottom: 20 },
  brandCard: { backgroundColor: '#f8fafc', paddingHorizontal: 30, paddingVertical: 20, borderRadius: 16, borderWidth: 1, borderColor: '#e2e8f0' },
  brandText: { fontSize: 18, fontWeight: '700', color: '#0f172a' },

  sectionGray: { backgroundColor: '#f8fafc', paddingVertical: 80, marginTop: 40 },
  sectionContent: { paddingHorizontal: 24, maxWidth: 1024, width: '100%', alignSelf: 'center' },
  bodyTypeGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 24 },
  bodyTypeCard: { flex: 1, minWidth: 200, height: 160, borderRadius: 24, overflow: 'hidden', position: 'relative' },
  bodyTypeImage: { width: '100%', height: '100%', position: 'absolute' },
  bodyTypeText: { position: 'absolute', bottom: 20, left: 20, color: '#ffffff', fontSize: 24, fontWeight: '800' },

  reviewsContainer: { gap: 24, paddingRight: 24, paddingBottom: 20 },
  reviewCard: { width: 340, backgroundColor: '#ffffff', padding: 32, borderRadius: 24, borderWidth: 1, borderColor: '#e2e8f0', shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.05, shadowRadius: 20 },
  reviewText: { fontSize: 16, color: '#475569', lineHeight: 26, marginBottom: 24, fontStyle: 'italic' },
  reviewAuthor: { fontSize: 15, fontWeight: '700', color: '#0f172a' },

  pillarsSection: { paddingHorizontal: 24, paddingTop: 100, paddingBottom: 60, maxWidth: 1024, width: '100%', alignSelf: 'center' },
  pillarsMainTitle: { fontSize: 36, fontWeight: '900', color: '#0f172a', textAlign: 'center', marginBottom: 60, letterSpacing: -1 },
  pillarsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 40, justifyContent: 'center' },
  pillarItem: { width: '40%', minWidth: 250, alignItems: 'flex-start' },
  pillarIcon: { marginBottom: 16 },
  pillarTitle: { fontSize: 20, fontWeight: '800', color: '#0f172a', marginBottom: 10 },
  pillarDesc: { fontSize: 15, color: '#64748b', lineHeight: 24 },

  footer: { backgroundColor: '#0f172a', paddingTop: 80, paddingBottom: 40, paddingHorizontal: 24, marginTop: 40 },
  footerTop: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 40, maxWidth: 1024, width: '100%', alignSelf: 'center' },
  footerCol: { maxWidth: 300 },
  footerLogo: { fontSize: 30, fontWeight: '900', color: '#ffffff', letterSpacing: -1, marginBottom: 16 },
  footerDesc: { color: '#94a3b8', fontSize: 15, lineHeight: 24 },
  footerColLinksContainer: { flexDirection: 'row', gap: 60 },
  footerColLinks: { gap: 16 },
  footerLinkTitle: { fontSize: 16, fontWeight: '800', color: '#ffffff', marginBottom: 8 },
  footerLink: { color: '#cbd5e1', fontSize: 15, fontWeight: '500' },
  footerBottomLine: { height: 1, backgroundColor: 'rgba(255,255,255,0.1)', marginTop: 60, marginBottom: 24, maxWidth: 1024, width: '100%', alignSelf: 'center' },
  footerCopyright: { color: '#64748b', fontSize: 14, textAlign: 'center' },
});
