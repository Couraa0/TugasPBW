package Tugas.Nomor1;

class Produk {    
    private String nama;
    private int harga;
    private int stock;

    public void setNama(String nama) {
        this.nama = nama;
    }

    public String getNama() { 
        return nama;
    }

    public void setHarga(int harga) {
        if (harga > 0) {
            this.harga = harga;
        } else {
            System.out.println("Harga tidak boleh 0 atau kurang dari 0");
        }
    }
    

    public int getHarga() { 
        return harga;
    }

    public void setStock(int stock) {
        if (stock > 0) {
            this.stock = stock;
        } else {
            System.out.println("Stock tidak boleh 0 atau kurang dari 0");
        }
    }

    public int getStock() { 
        return stock;
    }
}

public class Nomor1 {
    public static void main(String[] args) {
        Produk produk1 = new Produk();
        produk1.setNama("Indomie");
        produk1.setHarga(3000);
        produk1.setStock(10);

        System.out.println("Nama Produk : " + produk1.getNama());
        System.out.println("Harga Produk : " + produk1.getHarga());
        System.out.println("Stock Produk : " + produk1.getStock());
    }
}
