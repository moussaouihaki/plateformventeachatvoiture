import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Settings, ChevronRight, Wallet, Lock, History, ShieldCheck, FileText, Shield, Bell, ArrowUpRight } from 'lucide-react-native';
import Footer from '../../components/Footer';

const PROFILE_OPTIONS = [
  { id: '1', title: 'Mes Mandats de Vente', icon: FileText, subtitle: '1 véhicule en cours de vente' },
  { id: '2', title: 'Mes Véhicules Achetés', icon: Shield, subtitle: 'Garanties & documents' },
  { id: '3', title: 'Notifications', icon: Bell, subtitle: 'Alertes transactions' },
  { id: '4', title: 'Paramètres du compte', icon: Settings, subtitle: 'Infos personnelles & sécurité' },
];

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Mon Espace sécurisé</Text>
          <Text style={styles.subtitle}>Gérez vos transactions et votre compte séquestre.</Text>

          {/* EXPLANATION BOX */}
          <View style={styles.infoBox}>
            <ShieldCheck size={24} color="#b49a5e" />
            <View style={styles.infoBoxTextContainer}>
              <Text style={styles.infoBoxTitle}>Votre Compte Séquestre</Text>
              <Text style={styles.infoBoxDesc}>
                Ce tableau de bord affiche les fonds actuellement bloqués et sécurisés pour vos achats ou ventes en cours. 
                Les fonds ne sont libérés qu'après validation de la remise du véhicule en agence.
              </Text>
            </View>
          </View>

          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>JD</Text>
          </View>
          <Text style={styles.name}>Jean Dupont</Text>
          <Text style={styles.email}>jean.dupont@example.com</Text>
        </View>

        {/* Escrow Wallet Card */}
        <View style={styles.walletContainer}>
          <View style={styles.walletCard}>
            <View style={styles.walletHeader}>
              <View style={styles.walletTitleRow}>
                <Lock color="#0f172a" size={20} />
                <Text style={styles.walletTitle}>Compte Séquestre AutoTrust</Text>
              </View>
              <Text style={styles.walletStatus}>Sécurisé via partenaire</Text>
            </View>

            <Text style={styles.walletBalance}>45 000 CHF</Text>
            <Text style={styles.walletSubtitle}>Fonds bloqués pour "Porsche Macan S 3.0"</Text>
            
            <View style={styles.walletDivider} />
            
            <View style={styles.walletActionRow}>
              <Text style={styles.walletActionText}>En attente de la livraison de l'occasion</Text>
              <ArrowUpRight color="#b49a5e" size={20} />
            </View>
          </View>
        </View>

        {/* Profile Options */}
        <View style={styles.optionsContainer}>
          <Text style={styles.sectionTitle}>Tableau de bord</Text>
          {PROFILE_OPTIONS.map((option) => {
            const Icon = option.icon;
            return (
              <Pressable key={option.id} style={styles.optionCard}>
                <View style={styles.optionIconContainer}>
                  <Icon size={24} color="#b49a5e" />
                </View>
                <View style={styles.optionTextContainer}>
                  <Text style={styles.optionTitle}>{option.title}</Text>
                  <Text style={styles.optionSubtitle}>{option.subtitle}</Text>
                </View>
                <ChevronRight color="#94a3b8" size={20} />
              </Pressable>
            );
          })}
        </View>

        {/* Security Badge */}
        <View style={styles.securityBadge}>
          <Shield size={16} color="#22c55e" />
          <Text style={styles.securityText}>Identité vérifiée par AutoTrust</Text>
        </View>

        <View style={{height: 120}}/>
        <Footer />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60, backgroundColor: '#f8fafc' },
  scrollContent: { paddingHorizontal: 20, maxWidth: 1024, width: '100%', alignSelf: 'center' },
  header: { alignItems: 'flex-start', marginBottom: 30 },
  title: { fontSize: 34, fontWeight: '800', color: '#0f172a', letterSpacing: -1, marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#475569', lineHeight: 22, marginBottom: 20 },
  
  infoBox: { flexDirection: 'row', backgroundColor: '#fdfbf7', padding: 20, borderRadius: 20, marginBottom: 30, gap: 16, borderWidth: 1, borderColor: '#eaddb4', alignItems: 'flex-start', width: '100%' },
  infoBoxTextContainer: { flex: 1 },
  infoBoxTitle: { fontSize: 16, fontWeight: '700', color: '#8c7343', marginBottom: 6 },
  infoBoxDesc: { fontSize: 14, color: '#8c7343', lineHeight: 22 },

  avatarContainer: {
    width: 80, height: 80, borderRadius: 40,
    backgroundColor: '#b49a5e', justifyContent: 'center', alignItems: 'center',
    borderWidth: 2, borderColor: '#e2e8f0', marginBottom: 16,
    shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 10,
  },
  avatarText: { fontSize: 28, fontWeight: '800', color: '#b49a5e' },
  name: { fontSize: 24, fontWeight: '700', color: '#0f172a' },
  email: { fontSize: 16, color: '#64748b', marginTop: 4 },
  
  walletContainer: { marginBottom: 30 },
  walletCard: { 
    borderRadius: 24, padding: 24, borderWidth: 1, borderColor: '#e2e8f0', backgroundColor: '#fdfbf7',
    shadowColor: '#b49a5e', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.1, shadowRadius: 20,
  },
  walletHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  walletTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  walletTitle: { color: '#0f172a', fontSize: 16, fontWeight: '700' },
  walletStatus: { color: '#166534', fontSize: 11, fontWeight: '700', backgroundColor: '#dcfce7', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8 },
  walletBalance: { color: '#b49a5e', fontSize: 36, fontWeight: '800', letterSpacing: -1 },
  walletSubtitle: { color: '#475569', fontSize: 14, marginTop: 4 },
  walletDivider: { height: 1, backgroundColor: 'rgba(15, 23, 42, 0.05)', marginVertical: 16 },
  walletActionRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  walletActionText: { color: '#0f172a', fontSize: 14, fontWeight: '600' },

  sectionTitle: { fontSize: 20, fontWeight: '700', color: '#0f172a', marginBottom: 16 },
  optionsContainer: { gap: 12 },
  optionCard: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#ffffff',
    padding: 16, borderRadius: 20, borderWidth: 1, borderColor: '#e2e8f0',
  },
  optionIconContainer: {
    backgroundColor: '#f1f5f9', padding: 12, borderRadius: 14, marginRight: 16,
  },
  optionTextContainer: { flex: 1 },
  optionTitle: { fontSize: 16, fontWeight: '700', color: '#0f172a', marginBottom: 4 },
  optionSubtitle: { fontSize: 13, color: '#64748b' },
  securityBadge: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8,
    marginTop: 30, padding: 12, backgroundColor: '#dcfce7', borderRadius: 100, borderWidth: 1, borderColor: '#bbf7d0'
  },
  securityText: { color: '#166534', fontWeight: '600', fontSize: 14 },
});
