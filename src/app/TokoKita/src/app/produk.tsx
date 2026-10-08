import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import { router } from 'expo-router';
import { useState } from 'react';

type Produk = {
  id: number;
  nama: string;
  harga: number;
  stok: number;
};

export default function Produk() {
  const [produk, setProduk] = useState<Produk[]>([
    {
      id: 1,
      nama: 'Indomie Goreng',
      harga: 3500,
      stok: 20,
    },
    {
      id: 2,
      nama: 'Teh Botol',
      harga: 5000,
      stok: 15,
    },
    {
      id: 3,
      nama: 'Aqua',
      harga: 3000,
      stok: 25,
    },
  ]);

  const [nama, setNama] = useState('');
  const [harga, setHarga] = useState('');
  const [stok, setStok] = useState('');

  const tambahProduk = () => {
    if (!nama || !harga || !stok) {
      Alert.alert('Peringatan', 'Semua data produk harus diisi!');
      return;
    }

    const produkBaru: Produk = {
      id: Date.now(),
      nama: nama,
      harga: Number(harga),
      stok: Number(stok),
    };

    setProduk([...produk, produkBaru]);

    setNama('');
    setHarga('');
    setStok('');

    Alert.alert('Berhasil', 'Produk berhasil ditambahkan!');
  };

  const hapusProduk = (id: number) => {
    Alert.alert(
      'Hapus Produk',
      'Apakah kamu yakin ingin menghapus produk ini?',
      [
        {
          text: 'Batal',
          style: 'cancel',
        },
        {
          text: 'Hapus',
          style: 'destructive',
          onPress: () => {
            setProduk(produk.filter((item) => item.id !== id));
          },
        },
      ]
    );
  };

  const formatRupiah = (angka: number) => {
    return 'Rp ' + angka.toLocaleString('id-ID');
  };

  return (
    <ScrollView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.logo}>
          TOKO KITA
        </Text>

        <Text style={styles.subtitle}>
          Data Produk
        </Text>
      </View>

      {/* JUDUL */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          📦 Data Produk
        </Text>

        <Text style={styles.description}>
          Kelola produk yang tersedia di toko.
        </Text>
      </View>

      {/* FORM TAMBAH PRODUK */}
      <View style={styles.formCard}>

        <Text style={styles.formTitle}>
          Tambah Produk
        </Text>

        <Text style={styles.label}>
          Nama Produk
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Contoh: Indomie Goreng"
          value={nama}
          onChangeText={setNama}
        />

        <Text style={styles.label}>
          Harga
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Contoh: 3500"
          keyboardType="numeric"
          value={harga}
          onChangeText={setHarga}
        />

        <Text style={styles.label}>
          Stok
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Contoh: 20"
          keyboardType="numeric"
          value={stok}
          onChangeText={setStok}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={tambahProduk}
        >
          <Text style={styles.addButtonText}>
            + TAMBAH PRODUK
          </Text>
        </TouchableOpacity>

      </View>

      {/* DAFTAR PRODUK */}
      <Text style={styles.sectionTitle}>
        Daftar Produk
      </Text>

      {produk.map((item) => (
        <View
          key={item.id}
          style={styles.productCard}
        >

          <View style={styles.productInfo}>

            <Text style={styles.productName}>
              {item.nama}
            </Text>

            <Text style={styles.productPrice}>
              {formatRupiah(item.harga)}
            </Text>

            <Text style={styles.productStock}>
              Stok: {item.stok}
            </Text>

          </View>

          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => hapusProduk(item.id)}
          >
            <Text style={styles.deleteButtonText}>
              HAPUS
            </Text>
          </TouchableOpacity>

        </View>
      ))}

      {/* KEMBALI */}
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

  titleContainer: {
    margin: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  description: {
    fontSize: 15,
    color: '#666666',
    marginTop: 5,
  },

  formCard: {
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginBottom: 25,
    padding: 20,
    borderRadius: 15,
    elevation: 3,
  },

  formTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 15,
    backgroundColor: '#fafafa',
  },

  addButton: {
    backgroundColor: '#222222',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },

  addButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginBottom: 15,
  },

  productCard: {
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 20,
    borderRadius: 15,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },

  productInfo: {
    flex: 1,
  },

  productName: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  productPrice: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 5,
  },

  productStock: {
    fontSize: 14,
    color: '#666666',
  },

  deleteButton: {
    backgroundColor: '#cc3333',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
  },

  deleteButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12,
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