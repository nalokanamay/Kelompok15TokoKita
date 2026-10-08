import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { router } from 'expo-router';

export default function Dashboard() {
  return (
    <ScrollView style={styles.container}>

      
      <View style={styles.header}>
        <Text style={styles.logo}>
          TOKO KITA
        </Text>

        <Text style={styles.subtitle}>
          Dashboard Kasir
        </Text>
      </View>

      
      <View style={styles.welcomeCard}>
        <Text style={styles.welcomeTitle}>
          Dashboard
        </Text>

        <Text style={styles.welcomeText}>
          Silakan pilih menu yang ingin kamu gunakan.
        </Text>
      </View>

      
      <Text style={styles.sectionTitle}>
        Menu Utama
      </Text>

      
      <TouchableOpacity
        style={styles.menuCard}
        onPress={() => router.push('/produk')}
      >
        <Text style={styles.menuIcon}>
          📦
        </Text>

        <View style={styles.menuContent}>
          <Text style={styles.menuTitle}>
            Produk
          </Text>

          <Text style={styles.menuDescription}>
            Mengelola data produk toko
          </Text>
        </View>
      </TouchableOpacity>

      
      <TouchableOpacity style={styles.menuCard}>
        <Text style={styles.menuIcon}>
          🛒
        </Text>

        <View style={styles.menuContent}>
          <Text style={styles.menuTitle}>
            Kasir
          </Text>

          <Text style={styles.menuDescription}>
            Melakukan transaksi penjualan
          </Text>
        </View>
      </TouchableOpacity>

      
      <TouchableOpacity style={styles.menuCard}>
        <Text style={styles.menuIcon}>
          📊
        </Text>

        <View style={styles.menuContent}>
          <Text style={styles.menuTitle}>
            Laporan
          </Text>

          <Text style={styles.menuDescription}>
            Melihat laporan penjualan
          </Text>
        </View>
      </TouchableOpacity>

      
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Text style={styles.backButtonText}>
          KEMBALI
        </Text>
      </TouchableOpacity>

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
    alignItems: 'center',
  },

  logo: {
    color: '#ffffff',
    fontSize: 30,
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
    padding: 20,
    borderRadius: 15,
    elevation: 3,
  },

  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  welcomeText: {
    fontSize: 15,
    color: '#666666',
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginBottom: 15,
  },

  menuCard: {
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 20,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },

  menuIcon: {
    fontSize: 38,
    marginRight: 20,
  },

  menuContent: {
    flex: 1,
  },

  menuTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  menuDescription: {
    fontSize: 14,
    color: '#666666',
  },

  backButton: {
    backgroundColor: '#222222',
    margin: 20,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },

  backButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

});