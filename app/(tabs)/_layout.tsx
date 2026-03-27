import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet, useWindowDimensions, View, Text, Pressable } from 'react-native';
import { BlurView } from 'expo-blur';
import { Home, Car, Tag, User } from 'lucide-react-native';
import { useRouter, usePathname } from 'expo-router';

import { HapticTab } from '@/components/haptic-tab';

export default function TabLayout() {
  const { width } = useWindowDimensions();
  const isDesktop = Platform.OS === 'web' && width >= 768;
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      
      {/* WEB DESKTOP HEADER */}
      {isDesktop && (
        <View style={styles.webHeader}>
          <View style={styles.webHeaderInner}>
            <Text style={styles.webLogo}>AutoTrust</Text>
            <View style={styles.webLinks}>
              <Pressable onPress={() => router.push('/')}><Text style={[styles.webLink, pathname === '/' && styles.webLinkActive]}>Accueil</Text></Pressable>
              <Pressable onPress={() => router.push('/buy')}><Text style={[styles.webLink, pathname === '/buy' && styles.webLinkActive]}>Trouver un véhicule</Text></Pressable>
              <Pressable onPress={() => router.push('/sell')}><Text style={[styles.webLink, pathname === '/sell' && styles.webLinkActive]}>Vendre ma voiture</Text></Pressable>
            </View>
            <Pressable style={styles.webProfileBtn} onPress={() => router.push('/profile')}>
              <User size={18} color="#ffffff" />
              <Text style={styles.webProfileText}>Mon Espace</Text>
            </Pressable>
          </View>
        </View>
      )}

      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#ffffff',
          tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.5)',
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '600',
            marginBottom: -5,
          },
          tabBarStyle: isDesktop ? { display: 'none' } : {
            position: 'absolute',
            bottom: 34,
            left: 24,
            right: 24,
            height: 72,
            borderRadius: 36,
            backgroundColor: Platform.OS === 'web' ? 'rgba(15, 23, 42, 0.85)' : 'transparent',
            borderTopWidth: 0,
            paddingBottom: 10,
            paddingTop: 10,
            elevation: 0,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.3,
            shadowRadius: 20,
            borderWidth: 1,
            borderColor: 'rgba(255, 255, 255, 0.1)',
          },
          tabBarBackground: () => isDesktop ? null : (
            <BlurView
              tint="dark"
              intensity={95}
              style={[StyleSheet.absoluteFill, { borderRadius: 36 }]}
            />
          ),
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Accueil',
            tabBarIcon: ({ color, focused }) => (
              <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
                <Home size={22} color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="buy"
          options={{
            title: 'Acheter',
            tabBarIcon: ({ color, focused }) => (
              <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
                <Car size={22} color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="sell"
          options={{
            title: 'Vendre',
            tabBarIcon: ({ color, focused }) => (
              <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
                <Tag size={22} color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profil',
            tabBarIcon: ({ color, focused }) => (
              <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
                <User size={22} color={color} />
              </View>
            ),
          }}
        />
      </Tabs>
      
      {/* CSS For Backdrop Filter on Web */}
      {Platform.OS === 'web' && (
        <style dangerouslySetInnerHTML={{ __html: `
          div[style*="position: absolute"][style*="bottom: 34px"] {
            backdrop-filter: blur(20px) saturate(180%);
            -webkit-backdrop-filter: blur(20px) saturate(180%);
          }
        `}} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -4,
  },
  activeIconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
  },
  webHeader: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
    zIndex: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  webHeaderInner: {
    maxWidth: 1200,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingHorizontal: 32,
  },
  webLogo: {
    fontSize: 26,
    fontWeight: '900',
    color: '#0f172a',
    letterSpacing: -1.2,
  },
  webLinks: {
    flexDirection: 'row',
    gap: 40,
    alignItems: 'center',
  },
  webLink: {
    fontSize: 15,
    fontWeight: '700',
    color: '#475569',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  webLinkActive: {
    color: '#b49a5e',
    fontWeight: '800',
  },
  webProfileBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0f172a',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 100,
    gap: 10,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  webProfileText: {
    color: '#ffffff',
    fontWeight: '800',
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});
