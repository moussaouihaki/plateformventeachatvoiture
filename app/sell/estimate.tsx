import { View, Text, StyleSheet, Pressable, ActivityIndicator, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { CheckCircle2, ChevronRight, Download, Sparkles, Building2, CarFront } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function EstimateScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate complex valuation API
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <View style={styles.loadingCircle}>
          <Sparkles color="#b49a5e" size={40} />
        </View>
        <Text style={styles.loadingTitle}>Recherche dans notre base de données...</Text>
        <Text style={styles.loadingSubtitle}>Analyse de 4 500 transactions similaires pour votre {params.make || 'véhicule'}.</Text>
        <ActivityIndicator size="large" color="#b49a5e" style={{ marginTop: 30 }} />
      </View>
    );
  }

  // Generate dummy price based on params roughly
  const makeVal = params.make ? String(params.make).length * 1000 : 25000;
  const estimatedPrice = 20000 + makeVal;

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false} bounces={false}>
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Votre Estimation AutoTrust</Text>
        <Text style={styles.headerSubtitle}>{params.make} • {params.year} • {params.mileage} km</Text>
      </View>

      <View style={styles.pricingCard}>
        <LinearGradient colors={['rgba(14, 165, 233, 0.05)', 'transparent']} style={StyleSheet.absoluteFill} />
        <Text style={styles.pricingLabel}>Valeur nette vendeur estimée</Text>
        <Text style={styles.pricingValue}>{estimatedPrice.toLocaleString('fr-CH')} CHF</Text>
        <View style={styles.pricingBadge}>
          <Sparkles size={14} color="#166534" />
          <Text style={styles.pricingBadgeText}>+18% qu'une reprise garage moyenne</Text>
        </View>
      </View>

      <View style={styles.compareContainer}>
        <View style={styles.compareRow}>
          <View style={styles.compareCol}>
            <Text style={styles.compareTitle}>Reprise Garage</Text>
            <Text style={styles.comparePrice}>{(estimatedPrice * 0.82).toLocaleString('fr-CH')} CHF</Text>
            <Text style={styles.compareDesc}>Frais cachés, offre au rabais.</Text>
          </View>
          <View style={styles.compareDivider} />
          <View style={styles.compareCol}>
            <Text style={styles.compareTitleActive}>AutoTrust</Text>
            <Text style={styles.comparePriceActive}>{estimatedPrice.toLocaleString('fr-CH')} CHF</Text>
            <Text style={styles.compareDescActive}>Paiement séquestre garanti.</Text>
          </View>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Les prochaines étapes</Text>
      
      <View style={styles.stepsList}>
        <View style={styles.stepItem}>
          <View style={styles.stepIconContainerCompleted}>
            <CheckCircle2 color="#ffffff" size={20} />
          </View>
          <View style={styles.stepTextContainer}>
            <Text style={styles.stepTitleCompleted}>Pré-estimation en ligne</Text>
            <Text style={styles.stepDesc}>Fourchette de prix établie.</Text>
          </View>
        </View>
        
        <View style={styles.stepConnectingLine} />

        <View style={styles.stepItem}>
          <View style={styles.stepIconContainerActive}>
            <Building2 color="#ffffff" size={20} />
          </View>
          <View style={styles.stepTextContainer}>
            <Text style={styles.stepTitleActive}>Prendre RDV en Agence</Text>
            <Text style={styles.stepDesc}>Expertise physique complète sur 160 points pour figer le prix et valider l'état.</Text>
          </View>
        </View>

        <View style={styles.stepConnectingLinePending} />

        <View style={styles.stepItem}>
          <View style={styles.stepIconContainerPending}>
            <CarFront color="#94a3b8" size={20} />
          </View>
          <View style={styles.stepTextContainer}>
            <Text style={styles.stepTitlePending}>Mise en vente & Sécurisation</Text>
            <Text style={styles.stepDescPending}>Nous créons l'annonce 360°, gérons les acheteurs, et sécurisons les fonds sur compte séquestre.</Text>
          </View>
        </View>
      </View>

      <Pressable style={styles.ctaButton} onPress={() => router.push('/')}>
        <Text style={styles.ctaText}>Réserver mon RDV d'Expertise Gratuit</Text>
        <ChevronRight color="#fff" size={20} />
      </Pressable>

      <Pressable style={styles.secondaryButton} onPress={() => router.back()}>
        <Text style={styles.secondaryButtonText}>Refaire une estimation</Text>
      </Pressable>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: { flex: 1, backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center', padding: 24 },
  loadingCircle: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#fdfbf7', justifyContent: 'center', alignItems: 'center', marginBottom: 30 },
  loadingTitle: { fontSize: 24, fontWeight: '800', color: '#0f172a', textAlign: 'center', marginBottom: 12 },
  loadingSubtitle: { fontSize: 16, color: '#64748b', textAlign: 'center', lineHeight: 24 },
  
  container: { flexGrow: 1, backgroundColor: '#ffffff', padding: 24, paddingTop: 60, maxWidth: 1024, width: '100%', alignSelf: 'center' },
  header: { marginBottom: 30, alignItems: 'center' },
  headerTitle: { fontSize: 28, fontWeight: '800', color: '#0f172a', marginBottom: 8 },
  headerSubtitle: { fontSize: 16, color: '#64748b', fontWeight: '500', backgroundColor: '#f1f5f9', paddingHorizontal: 16, paddingVertical: 6, borderRadius: 100 },
  
  pricingCard: { 
    borderRadius: 24, borderWidth: 2, borderColor: '#b49a5e', padding: 30, alignItems: 'center', marginBottom: 30, overflow: 'hidden',
    backgroundColor: '#ffffff', shadowColor: '#b49a5e', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.1, shadowRadius: 20
  },
  pricingLabel: { fontSize: 14, color: '#475569', fontWeight: '600', textTransform: 'uppercase', marginBottom: 10 },
  pricingValue: { fontSize: 42, fontWeight: '800', color: '#b49a5e', letterSpacing: -1, marginBottom: 16 },
  pricingBadge: { flexDirection: 'row', alignItems: 'center', gap: 6, backgroundColor: '#dcfce7', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 100 },
  pricingBadgeText: { color: '#166534', fontWeight: '700', fontSize: 13 },
  
  compareContainer: { backgroundColor: '#f8fafc', borderRadius: 20, borderWidth: 1, borderColor: '#e2e8f0', marginBottom: 40 },
  compareRow: { flexDirection: 'row', padding: 20 },
  compareCol: { flex: 1, paddingHorizontal: 10 },
  compareDivider: { width: 1, backgroundColor: '#e2e8f0' },
  compareTitle: { fontSize: 14, color: '#64748b', fontWeight: '600', marginBottom: 8 },
  comparePrice: { fontSize: 20, fontWeight: '700', color: '#cbd5e1', marginBottom: 8, textDecorationLine: 'line-through' },
  compareDesc: { fontSize: 13, color: '#94a3b8' },
  compareTitleActive: { fontSize: 14, color: '#b49a5e', fontWeight: '700', marginBottom: 8 },
  comparePriceActive: { fontSize: 20, fontWeight: '800', color: '#0f172a', marginBottom: 8 },
  compareDescActive: { fontSize: 13, color: '#475569' },

  sectionTitle: { fontSize: 20, fontWeight: '700', color: '#0f172a', marginBottom: 24 },
  stepsList: { gap: 0, marginBottom: 40 },
  stepItem: { flexDirection: 'row', gap: 16 },
  stepIconContainerCompleted: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#22c55e', justifyContent: 'center', alignItems: 'center', zIndex: 10 },
  stepIconContainerActive: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#b49a5e', justifyContent: 'center', alignItems: 'center', zIndex: 10, borderWidth: 4, borderColor: '#fdfbf7' },
  stepIconContainerPending: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#f1f5f9', justifyContent: 'center', alignItems: 'center', zIndex: 10, borderWidth: 1, borderColor: '#e2e8f0' },
  stepConnectingLine: { width: 2, height: 30, backgroundColor: '#22c55e', marginLeft: 19, marginTop: -4, marginBottom: -4 },
  stepConnectingLinePending: { width: 2, height: 30, backgroundColor: '#e2e8f0', marginLeft: 19, marginTop: -4, marginBottom: -4 },
  
  stepTextContainer: { flex: 1, paddingBottom: 20 },
  stepTitleCompleted: { fontSize: 16, fontWeight: '700', color: '#166534', marginBottom: 4 },
  stepTitleActive: { fontSize: 18, fontWeight: '800', color: '#b49a5e', marginBottom: 4 },
  stepTitlePending: { fontSize: 16, fontWeight: '600', color: '#64748b', marginBottom: 4 },
  stepDesc: { fontSize: 14, color: '#475569', lineHeight: 20 },
  stepDescPending: { fontSize: 14, color: '#94a3b8', lineHeight: 20 },

  ctaButton: { 
    borderRadius: 20, backgroundColor: '#b49a5e',
    flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 18, gap: 10,
    shadowColor: '#b49a5e', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.2, shadowRadius: 16,
    marginBottom: 16
  },
  ctaText: { color: '#ffffff', fontSize: 16, fontWeight: '700' },
  secondaryButton: { 
    borderRadius: 20, backgroundColor: '#f8fafc',
    flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 18,
    borderWidth: 1, borderColor: '#e2e8f0'
  },
  secondaryButtonText: { color: '#64748b', fontSize: 16, fontWeight: '600' },
});
