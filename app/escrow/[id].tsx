import { View, Text, StyleSheet, ScrollView, Pressable, Dimensions } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ShieldCheck, ArrowLeft, Building2, LockKeyhole, Landmark, CheckCircle2 } from 'lucide-react-native';
import { DEMO_CARS } from '../(tabs)/buy';

export default function EscrowDepositScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const vehicle = DEMO_CARS.find(v => v.id === id) || DEMO_CARS[0];

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <ArrowLeft size={24} color="#0f172a" />
        </Pressable>
        <Text style={styles.headerTitle}>Compte Séquestre</Text>
        <View style={{width: 24}} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* HERO LOCK SECTION */}
        <View style={styles.lockHero}>
          <View style={styles.lockCircle}>
            <LockKeyhole size={40} color="#b49a5e" />
          </View>
          <Text style={styles.lockTitle}>Sécurisation des fonds</Text>
          <Text style={styles.lockDesc}>
            Vos fonds seront bloqués sur un compte tiers inviolable. Le vendeur ne sera payé que lorsque vous validerez la remise des clés du véhicule.
          </Text>
        </View>

        {/* SUMMARY CARD */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Montant à bloquer</Text>
          <Text style={styles.summaryAmount}>{vehicle.price}</Text>

          <View style={styles.divider} />

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Véhicule</Text>
            <Text style={styles.summaryValue}>{vehicle.make} {vehicle.model}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Bénéficiaire</Text>
            <View style={styles.verifiedTag}>
              <CheckCircle2 size={12} color="#166534" />
              <Text style={styles.verifiedText}>Vendeur Vérifié CI</Text>
            </View>
          </View>
        </View>

        {/* BANKING INSTRUCTIONS */}
        <Text style={styles.sectionTitle}>Paiement par virement bancaire</Text>
        <Text style={styles.sectionSubtitle}>Effectuez le virement vers notre établissement bancaire partenaire. Mentionnez impérativement la référence ci-dessous.</Text>
        
        <View style={styles.bankCard}>
          <View style={styles.bankHeader}>
            <Landmark size={20} color="#0f172a" />
            <Text style={styles.bankName}>Banque Partenaire Suisse</Text>
          </View>
          
          <View style={styles.bankRow}>
            <Text style={styles.bankLabel}>Bénéficiaire</Text>
            <Text style={styles.bankValue}>AutoTrust Escrow AG</Text>
          </View>
          <View style={styles.bankRow}>
            <Text style={styles.bankLabel}>IBAN</Text>
            <Text style={styles.bankValue}>CH22 0000 0000 0000 0000 0</Text>
          </View>
          <View style={styles.bankRow}>
            <Text style={styles.bankLabel}>BIC / SWIFT</Text>
            <Text style={styles.bankValue}>SWSXXXXX</Text>
          </View>
          <View style={styles.referenceBox}>
            <Text style={styles.referenceLabel}>RÉFÉRENCE OBLIGATOIRE (MANDAT)</Text>
            <Text style={styles.referenceValue}>AT-{vehicle.id}-SEQ-2026</Text>
          </View>
        </View>

        {/* WHY IS IT SAFE? */}
        <View style={styles.safetyBox}>
          <ShieldCheck size={24} color="#22c55e" />
          <View style={styles.safetyTextRow}>
             <Text style={styles.safetyTitle}>100% protégé contre la fraude</Text>
             <Text style={styles.safetyDesc}>En cas d'annulation de la vente lors de la visite, vos fonds sont intégralement et instantanément recrédités sur votre compte d'origine, sans frais.</Text>
          </View>
        </View>

        <View style={{height: 120}} />
      </ScrollView>

      {/* FIXED BOTTOM CTA */}
      <View style={styles.ctaBottom}>
         <Pressable style={styles.ctaButton} onPress={() => router.push('/profile')}>
           <Text style={styles.ctaButtonText}>J'ai effectué le virement</Text>
         </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  header: {
    paddingTop: 60, paddingBottom: 20, paddingHorizontal: 20,
    backgroundColor: '#ffffff', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    borderBottomWidth: 1, borderBottomColor: '#f1f5f9'
  },
  backBtn: { padding: 8, marginLeft: -8 },
  headerTitle: { fontSize: 18, fontWeight: '700', color: '#0f172a' },
  scrollContent: { paddingHorizontal: 20, paddingTop: 30, maxWidth: 800, width: '100%', alignSelf: 'center' },
  
  lockHero: { alignItems: 'center', marginBottom: 30 },
  lockCircle: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#fdfbf7', justifyContent: 'center', alignItems: 'center', marginBottom: 16 },
  lockTitle: { fontSize: 24, fontWeight: '800', color: '#0f172a', marginBottom: 12 },
  lockDesc: { fontSize: 15, color: '#475569', textAlign: 'center', lineHeight: 22, paddingHorizontal: 20 },
  
  summaryCard: {
    backgroundColor: '#ffffff', borderRadius: 24, padding: 24, marginBottom: 30,
    borderWidth: 1, borderColor: '#e2e8f0', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 10
  },
  summaryTitle: { fontSize: 14, color: '#64748b', fontWeight: '600', textTransform: 'uppercase', marginBottom: 8 },
  summaryAmount: { fontSize: 36, fontWeight: '800', color: '#b49a5e' },
  divider: { height: 1, backgroundColor: '#f1f5f9', marginVertical: 20 },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  summaryLabel: { fontSize: 15, color: '#475569' },
  summaryValue: { fontSize: 15, fontWeight: '600', color: '#0f172a' },
  verifiedTag: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#dcfce7', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8, gap: 4 },
  verifiedText: { fontSize: 12, fontWeight: '700', color: '#166534' },

  sectionTitle: { fontSize: 20, fontWeight: '700', color: '#0f172a', marginBottom: 8 },
  sectionSubtitle: { fontSize: 14, color: '#64748b', marginBottom: 20, lineHeight: 20 },
  
  bankCard: {
    backgroundColor: '#ffffff', borderRadius: 24, padding: 24, paddingBottom: 16, marginBottom: 30,
    borderWidth: 1, borderColor: '#e2e8f0',
  },
  bankHeader: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 20, paddingBottom: 16, borderBottomWidth: 1, borderBottomColor: '#f1f5f9' },
  bankName: { fontSize: 16, fontWeight: '700', color: '#0f172a' },
  bankRow: { marginBottom: 16 },
  bankLabel: { fontSize: 12, color: '#64748b', textTransform: 'uppercase', fontWeight: '600', marginBottom: 4 },
  bankValue: { fontSize: 16, fontWeight: '600', color: '#0f172a', letterSpacing: 0.5 },
  referenceBox: { backgroundColor: '#fef3c7', padding: 16, borderRadius: 16, marginTop: 10, borderWidth: 1, borderColor: '#fde68a' },
  referenceLabel: { fontSize: 11, color: '#92400e', fontWeight: '800', marginBottom: 4 },
  referenceValue: { fontSize: 18, fontWeight: '800', color: '#b45309', letterSpacing: 1 },

  safetyBox: { flexDirection: 'row', backgroundColor: '#dcfce7', padding: 20, borderRadius: 20, gap: 16, alignItems: 'flex-start', borderWidth: 1, borderColor: '#bbf7d0' },
  safetyTextRow: { flex: 1 },
  safetyTitle: { fontSize: 16, fontWeight: '700', color: '#166534', marginBottom: 6 },
  safetyDesc: { fontSize: 14, color: '#166534', lineHeight: 20 },

  ctaBottom: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    backgroundColor: '#ffffff', padding: 20, paddingTop: 16, borderTopWidth: 1, borderTopColor: '#e2e8f0',
    alignItems: 'center'
  },
  ctaButton: {
    backgroundColor: '#b49a5e', paddingVertical: 18, borderRadius: 100, width: '100%', maxWidth: 400, alignItems: 'center',
    shadowColor: '#b49a5e', shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.25, shadowRadius: 12
  },
  ctaButtonText: { color: '#ffffff', fontSize: 16, fontWeight: '700' }
});
