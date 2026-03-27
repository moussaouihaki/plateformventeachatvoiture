import React from 'react';
import { View, Text, StyleSheet, Pressable, Platform } from 'react-native';

export default function Footer() {
  if (Platform.OS !== 'web') return null;

  return (
    <View style={styles.footer}>
      <View style={styles.footerGrid}>
        
        {/* Brand Column */}
        <View style={styles.footerBrandCol}>
          <Text style={styles.footerLogo}>AutoTrust</Text>
          <Text style={styles.footerDesc}>
            La première plateforme suisse d'intermédiation automobile dédiée aux particuliers. 
            Sécurisez vos transactions, maximisez votre rentabilité.
          </Text>
        </View>

        {/* Links Column 1 */}
        <View style={styles.footerLinksCol}>
          <Text style={styles.footerLinksTitle}>Plateforme</Text>
          <Pressable><Text style={styles.footerLink}>Acheter un véhicule</Text></Pressable>
          <Pressable><Text style={styles.footerLink}>Vendre mon véhicule</Text></Pressable>
          <Pressable><Text style={styles.footerLink}>Obtenir une estimation</Text></Pressable>
          <Pressable><Text style={styles.footerLink}>Mon Compte Séquestre</Text></Pressable>
        </View>

        {/* Links Column 2 */}
        <View style={styles.footerLinksCol}>
          <Text style={styles.footerLinksTitle}>AutoTrust</Text>
          <Pressable><Text style={styles.footerLink}>Notre Concept</Text></Pressable>
          <Pressable><Text style={styles.footerLink}>Nos Experts</Text></Pressable>
          <Pressable><Text style={styles.footerLink}>FAQ</Text></Pressable>
          <Pressable><Text style={styles.footerLink}>Contact & Support</Text></Pressable>
        </View>

        {/* Links Column 3 */}
        <View style={styles.footerLinksCol}>
          <Text style={styles.footerLinksTitle}>Légal & Sécurité</Text>
          <Pressable><Text style={styles.footerLink}>Conditions d'utilisation</Text></Pressable>
          <Pressable><Text style={styles.footerLink}>Politique de confidentialité</Text></Pressable>
          <Pressable><Text style={styles.footerLink}>Mentions Légales</Text></Pressable>
          <Pressable><Text style={styles.footerLink}>Protection de vos fonds</Text></Pressable>
        </View>

      </View>
      
      <View style={styles.footerBottom}>
        <Text style={styles.footerCopyright}>© {new Date().getFullYear()} AutoTrust Suisse. Tous droits réservés.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#0f172a',
    paddingTop: 80,
    paddingBottom: 40,
    borderTopWidth: 1,
    borderTopColor: '#1e293b',
    marginTop: 'auto',
  },
  footerGrid: {
    paddingHorizontal: 32,
    maxWidth: 1200,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 40,
    marginBottom: 60,
  },
  footerBrandCol: {
    flex: 1,
    minWidth: 300,
    maxWidth: 400,
  },
  footerLogo: {
    fontSize: 28,
    fontWeight: '900',
    color: '#ffffff',
    letterSpacing: -1,
    marginBottom: 16,
  },
  footerDesc: {
    fontSize: 15,
    color: '#94a3b8',
    lineHeight: 24,
  },
  footerLinksCol: {
    minWidth: 180,
  },
  footerLinksTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#ffffff',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 24,
  },
  footerLink: {
    fontSize: 15,
    color: '#94a3b8',
    marginBottom: 16,
    fontWeight: '500',
  },
  footerBottom: {
    borderTopWidth: 1,
    borderTopColor: '#1e293b',
    paddingTop: 30,
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  footerCopyright: {
    color: '#64748b',
    fontSize: 14,
  },
});
