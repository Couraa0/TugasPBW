package Tugas.Nomor2;

class Produk {
    private String nama;
    private int harga;
    private int stock;

    public Produk() {}

    public void setNama(String nama) {
        this.nama = nama;
    }

    public String getNama() {
        return this.nama;
    }

    public void setHarga(int harga) {
        if (harga > 0) {
            this.harga = harga;
        } else {
            System.out.println("Harga tidak boleh 0 atau kurang dari 0");
        }
    }

    public int getHarga() {
        return this.harga;
    }

    public void setStock(int stock) {
        if (stock > 0) {
            this.stock = stock;
        } else {
            System.out.println("Stock tidak boleh 0 atau kurang dari 0");
        }
    }

    public int getStock() {
        return this.stock;
    }

    public void jual(int jumlah) {
        if (jumlah <= 0) {
            System.out.println("Jumlah produk yang dijual harus lebih dari 0.");
        } else if (jumlah <= this.stock) {
            this.stock -= jumlah;
            System.out.println(jumlah + " Produk " + this.nama + " telah terjual.");
        } else {
            System.out.println("Stock tidak mencukupi. Hanya tersisa " + this.stock + " produk.");
        }
    }

    public void infoProduk() {
        System.out.println("Nama Produk  : " + this.nama);
        System.out.println("Harga Produk : Rp" + this.harga);
        System.out.println("Stock Produk : " + this.stock);
    }

    public void tampilkanInfo() {
        System.out.println("=== Informasi Produk ===");
        infoProduk(); 
        System.out.println("========================");
    }
}

public class Nomor2 {
    public static void main(String[] args) {
        Produk produk1 = new Produk();
        produk1.setNama("Indomie");
        produk1.setHarga(3000);
        produk1.setStock(10);

        produk1.tampilkanInfo();

        produk1.jual(10);
        produk1.tampilkanInfo();
    }
}
