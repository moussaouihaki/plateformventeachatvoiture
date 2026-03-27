import { View, Text, StyleSheet, ScrollView, Pressable, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CheckCircle2, Search, FileSignature, ShieldCheck, ChevronRight, Car, Settings2, Hash } from 'lucide-react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import Footer from '../../components/Footer';

const STEPS = [
  { id: '1', title: 'Vérification', icon: Search },
  { id: '2', title: 'Estimation', icon: CheckCircle2 },
  { id: '3', title: 'Mandat', icon: FileSignature },
  { id: '4', title: 'Sécurisation', icon: ShieldCheck },
];

export default function SellScreen() {
  const router = useRouter();
  const [make, setMake] = useState('');
  const [year, setYear] = useState('');
  const [mileage, setMileage] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.title}>Vendre mon véhicule</Text>
          <Text style={styles.subtitle}>Obtenez une estimation précise et vendez en toute sécurité.</Text>

          {/* EXPLANATION BOX */}
          <View style={styles.infoBox}>
            <ShieldCheck size={24} color="#b49a5e" />
            <View style={styles.infoBoxTextContainer}>
              <Text style={styles.infoBoxTitle}>Garantie Vendeur AutoTrust</Text>
              <Text style={styles.infoBoxDesc}>
                Vendez jusqu'à 20% plus cher qu'une reprise classique.
                Nous gérons les appels, les annonces, et l'expertise. Vous n'êtes payé que via notre compte séquestre sécurisé.
              </Text>
            </View>
          </View>
        </View>

        {/* Process Overview */}
        <View style={styles.processContainer}>
          <Text style={styles.sectionTitle}>Vendez en 4 étapes simples</Text>
          <View style={styles.stepsRow}>
            <View style={styles.progressLine} />
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <View key={step.id} style={styles.stepBubble}>
                  <View style={[styles.iconWrapper, index === 0 && styles.iconWrapperActive]}>
                    <Icon size={20} color={index === 0 ? "#fff" : "#b49a5e"} />
                    {index === 0 && <View style={styles.activeDot} />}
                  </View>
                  <Text style={[styles.stepTitleSmall, index === 0 && styles.activeStepTitle]}>{step.title}</Text>
                </View>
              );
            })}
          </View>
        </View>

        {/* The Wizard Form */}
        <View style={styles.formContainer}>
          <View style={styles.formContent}>
            <View style={styles.formHeader}>
              <Text style={styles.formTitle}>Pré-estimation gratuite</Text>
              <Text style={styles.formSubtitle}>Renseignez les informations de votre véhicule</Text>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Marque & Modèle</Text>
              <View style={styles.inputWrapper}>
                <Car color="#94a3b8" size={20} style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Ex: Porsche Macan, Tesla Model 3..."
                  placeholderTextColor="#94a3b8"
                  value={make}
                  onChangeText={setMake}
                />
              </View>
            </View>

            <View style={styles.rowInputs}>
              <View style={[styles.inputGroup, { flex: 1 }]}>
                <Text style={styles.label}>Année</Text>
                <View style={styles.inputWrapper}>
                  <Settings2 color="#94a3b8" size={20} style={styles.inputIcon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Ex: 2021"
                    placeholderTextColor="#94a3b8"
                    keyboardType="numeric"
                    value={year}
                    onChangeText={setYear}
                  />
                </View>
              </View>

              <View style={[styles.inputGroup, { flex: 1 }]}>
                <Text style={styles.label}>Kilométrage</Text>
                <View style={styles.inputWrapper}>
                  <Hash color="#94a3b8" size={20} style={styles.inputIcon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Ex: 45000"
                    placeholderTextColor="#94a3b8"
                    keyboardType="numeric"
                    value={mileage}
                    onChangeText={setMileage}
                  />
                </View>
              </View>
            </View>

            <Pressable style={styles.ctaButton} onPress={() => router.push({ pathname: '/sell/estimate', params: { make, year, mileage } })}>
              <Text style={styles.ctaText}>Obtenir mon estimation tarifaire</Text>
              <ChevronRight color="#ffffff" size={24} />
            </Pressable>
          </View>
        </View>
        {/* FAQ SECTION */}
        <View style={styles.faqSection}>
          <Text style={styles.faqSuperTitle}>AUTOTRUST RÉPOND</Text>
          <Text style={styles.faqMainTitle}>Questions Fréquentes</Text>
          
          <View style={styles.faqGrid}>
            <View style={styles.faqCard}>
              <Text style={styles.faqQuestion}>Comment garantissez-vous un meilleur prix qu'un garage ?</Text>
              <Text style={styles.faqAnswer}>Les garages reprennent votre voiture à un prix marchand (souvent -20% sous la valeur réelle) pour faire une marge à la revente. Nous vendons votre véhicule à un acheteur particulier au prix du marché tout en sécurisant la vente. Vous gagnez la marge du garage.</Text>
            </View>

            <View style={styles.faqCard}>
              <Text style={styles.faqQuestion}>Combien de temps faut-il pour vendre ma voiture ?</Text>
              <Text style={styles.faqAnswer}>En moyenne, nos véhicules se vendent en 14 jours, grâce à notre réseau étendu, notre marketing ciblé et le label de garantie AutoTrust qui déclenche l'achat compulsif et rassure les acheteurs.</Text>
            </View>

            <View style={styles.faqCard}>
              <Text style={styles.faqQuestion}>Dois-je me déplacer pour la remise des clés ?</Text>
              <Text style={styles.faqAnswer}>Absolument pas. Tout se passe soit dans nos locaux, soit nous dépêchons un voiturier. Vous êtes notifié sur l'application à chaque étape, de l'état du paiement séquestre à la livraison.</Text>
            </View>
          </View>
        </View>

        <Footer />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', paddingTop: 60 },
  scrollContent: { paddingHorizontal: 20, maxWidth: 1024, width: '100%', alignSelf: 'center' },
  header: { marginBottom: 30 },
  title: { fontSize: 34, fontWeight: '800', color: '#0f172a', letterSpacing: -1 },
  subtitle: { fontSize: 16, color: '#475569', marginTop: 8, lineHeight: 22 },
  
  infoBox: { flexDirection: 'row', backgroundColor: '#fdfbf7', padding: 20, borderRadius: 20, marginTop: 24, gap: 16, borderWidth: 1, borderColor: '#eaddb4', alignItems: 'flex-start' },
  infoBoxTextContainer: { flex: 1 },
  infoBoxTitle: { fontSize: 16, fontWeight: '700', color: '#8c7343', marginBottom: 6 },
  infoBoxDesc: { fontSize: 14, color: '#8c7343', lineHeight: 22 },

  processContainer: { marginBottom: 40 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#0f172a', marginBottom: 20 },
  stepsRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative' },
  progressLine: { position: 'absolute', top: 24, left: 20, right: 20, height: 2, backgroundColor: '#e2e8f0', zIndex: -1 },
  stepBubble: { alignItems: 'center', flex: 1 },
  iconWrapper: { 
    width: 48, height: 48, borderRadius: 24, 
    backgroundColor: '#ffffff', 
    justifyContent: 'center', alignItems: 'center', marginBottom: 10,
    borderWidth: 1, borderColor: '#e2e8f0', position: 'relative',
    shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 10
  },
  iconWrapperActive: {
    backgroundColor: '#b49a5e',
    borderColor: '#b49a5e',
    shadowColor: '#b49a5e', shadowOpacity: 0.3,
  },
  activeDot: {
    position: 'absolute', top: -4, right: -4, width: 12, height: 12, borderRadius: 6, backgroundColor: '#b49a5e', borderWidth: 2, borderColor: '#ffffff'
  },
  stepTitleSmall: { fontSize: 12, color: '#64748b', fontWeight: '500', textAlign: 'center' },
  activeStepTitle: { color: '#0f172a', fontWeight: '700' },
  formContainer: { 
    borderRadius: 24, overflow: 'hidden', borderWidth: 1, borderColor: '#e2e8f0',
    backgroundColor: '#f8fafc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.03,
    shadowRadius: 15,
  },
  formContent: { padding: 24 },
  formHeader: { marginBottom: 24 },
  formTitle: { fontSize: 22, fontWeight: '700', color: '#0f172a', marginBottom: 6 },
  formSubtitle: { fontSize: 14, color: '#475569' },
  inputGroup: { marginBottom: 20 },
  rowInputs: { flexDirection: 'row', flexWrap: 'wrap', gap: 16 },
  label: { fontSize: 14, fontWeight: '600', color: '#334155', marginBottom: 8 },
  inputWrapper: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#ffffff',
    borderWidth: 1, borderColor: '#e2e8f0', borderRadius: 16, paddingHorizontal: 16, height: 56
  },
  inputIcon: { marginRight: 12 },
  input: { flex: 1, color: '#0f172a', fontSize: 16 },
  ctaButton: { 
    borderRadius: 20, marginTop: 10, backgroundColor: '#b49a5e',
    flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 18, gap: 10,
    shadowColor: '#b49a5e', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.2, shadowRadius: 16 
  },
  ctaGradient: { paddingVertical: 18, borderRadius: 100, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, shadowColor: '#b49a5e', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.3, shadowRadius: 20 },
  ctaText: { color: '#ffffff', fontSize: 18, fontWeight: '800' },

  faqSection: { paddingHorizontal: 24, paddingTop: 40, paddingBottom: 60, maxWidth: 800, width: '100%', alignSelf: 'center' },
  faqSuperTitle: { fontSize: 13, fontWeight: '800', color: '#b49a5e', letterSpacing: 1.5, marginBottom: 8, textAlign: 'center' },
  faqMainTitle: { fontSize: 32, fontWeight: '900', color: '#0f172a', letterSpacing: -1, marginBottom: 40, textAlign: 'center' },
  faqGrid: { gap: 16 },
  faqCard: { backgroundColor: '#ffffff', borderRadius: 20, padding: 24, borderWidth: 1, borderColor: '#e2e8f0' },
  faqQuestion: { fontSize: 18, fontWeight: '800', color: '#0f172a', marginBottom: 12 },
  faqAnswer: { fontSize: 15, color: '#475569', lineHeight: 24 }
});
