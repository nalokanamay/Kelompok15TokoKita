import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { router } from 'expo-router';

export default function Index() {
  return (
    <ScrollView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.logo}>
          TOKO KITA
        </Text>

        <Text style={styles.subtitle}>
          Aplikasi Kasir Sederhana
        </Text>
      </View>

      {/* WELCOME */}
      <View style={styles.welcomeCard}>
        <Text style={styles.welcomeTitle}>
          Selamat Datang 👋
        </Text>

        <Text style={styles.welcomeText}>
          Kelola produk dan transaksi toko
          dengan lebih mudah menggunakan Toko Kita.
        </Text>

        {/* TOMBOL MULAI */}
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => router.push('/dashboard')}
        >
          <Text style={styles.startButtonText}>
            MULAI
          </Text>
        </TouchableOpacity>

      </View>

      {/* MENU UTAMA */}
      <Text style={styles.sectionTitle}>
        Menu Utama
      </Text>

      <View style={styles.menuContainer}>

        {/* PRODUK */}
        <TouchableOpacity style={styles.menuCard}>
          <Text style={styles.menuIcon}>
            📦
          </Text>

          <Text style={styles.menuTitle}>
            Produk
          </Text>

          <Text style={styles.menuDescription}>
            Melihat daftar produk toko
          </Text>
        </TouchableOpacity>

        {/* KASIR */}
        <TouchableOpacity style={styles.menuCard}>
          <Text style={styles.menuIcon}>
            🛒
          </Text>

          <Text style={styles.menuTitle}>
            Kasir
          </Text>

          <Text style={styles.menuDescription}>
            Melakukan transaksi penjualan
          </Text>
        </TouchableOpacity>

        {/* LAPORAN */}
        <TouchableOpacity style={styles.menuCard}>
          <Text style={styles.menuIcon}>
            📊
          </Text>

          <Text style={styles.menuTitle}>
            Laporan
          </Text>

          <Text style={styles.menuDescription}>
            Melihat laporan penjualan
          </Text>
        </TouchableOpacity>

      </View>

      {/* TENTANG APLIKASI */}
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>
          Tentang Toko Kita
        </Text>

        <Text style={styles.infoText}>
          Toko Kita adalah aplikasi kasir yang
          membantu toko dalam mengelola produk
          dan transaksi penjualan.
        </Text>
      </View>

      {/* FOOTER */}
      <Text style={styles.footer}>
        Toko Kita © 2026
      </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  header: {
    backgroundColor: '#222222',
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },

  logo: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#dddddd',
    fontSize: 16,
    marginTop: 5,
  },

  welcomeCard: {
    backgroundColor: '#ffffff',
    margin: 20,
    padding: 25,
    borderRadius: 15,
    elevation: 3,
  },

  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  welcomeText: {
    fontSize: 15,
    color: '#555555',
    lineHeight: 22,
  },

  startButton: {
    backgroundColor: '#222222',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },

  startButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginBottom: 15,
  },

  menuContainer: {
    paddingHorizontal: 20,
  },

  menuCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 2,
  },

  menuIcon: {
    fontSize: 35,
    marginBottom: 10,
  },

  menuTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  menuDescription: {
    color: '#666666',
    fontSize: 14,
  },

  infoCard: {
    backgroundColor: '#ffffff',
    margin: 20,
    padding: 20,
    borderRadius: 15,
    elevation: 2,
  },

  infoTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  infoText: {
    color: '#555555',
    lineHeight: 21,
  },

  footer: {
    textAlign: 'center',
    color: '#777777',
    marginBottom: 30,
  },

});