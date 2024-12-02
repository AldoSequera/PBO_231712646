const IHitungDiskon = (Base) =>
    class {
        hitungDiskon() {
            throw new Error(
                "Metode'hitungDiskon()' harus diimplementasikan di kelas turunan."
            );
        }
    };

const IHitungPPN = (Base) =>
    class {
        HitungPPN() {
            throw new Error(
                "Metode 'HitungPPN()' harus diimplementasikan di kelas turunan."
            );
        }
    };

class Produk extends IHitungDiskon(IHitungPPN(Object)) {
    constructor(nama, hargaPokok) {
        super();
        this.nama = nama;
        this.hargaPokok = hargaPokok;
    }

    hitungDiskon() {
        return this.hargaPokok * 0.1;
    }

    HitungPPN() {
        return this.hargaPokok * 0.11;
    }

    infoProduk() {
        const diskon = this.hitungDiskon();
        const ppn = this.HitungPPN();
        const hargaSetelahDiskon = this.hargaPokok - diskon;
        const hargaJual = hargaSetelahDiskon + ppn;

        console.log(`Nama Produk: ${this.nama}`);
        console.log(`Harga Pokok: Rp${this.hargaPokok}`);
        console.log(`Diskon: Rp${diskon}`);
        console.log(`Harga Setelah Diskon: Rp${hargaSetelahDiskon}`);
        console.log(`PPN: Rp${ppn}`);
        console.log(`Harga Jual Akhir: Rp${hargaJual}`);
        console.log("\n======================================");
    }
}

class ListProduk {
    constructor() {
        this.listProduk = []; 
    }

    addProduk(produk) {
        this.listProduk.push(produk);
        console.log(`Produk "${produk.nama}" telah ditambahkan.`);
    }

    removeProduk(nama) {
        const index = this.listProduk.findIndex((produk) => produk.nama === nama);
        if (index !== -1) {
            this.listProduk.splice(index, 1);
            console.log(`Produk "${nama}" telah dihapus.`);
        } else {
            console.log(`Produk dengan nama "${nama}" tidak ditemukan.`);
        }
    }

    tampilkanSemuaProduk() {
        if (this.listProduk.length === 0) {
            console.log("Tidak ada produk dalam daftar.");
        } else {
            this.listProduk.forEach((produk, index) => {
                produk.infoProduk();
            });
        }
    }
}

const listProduk = new ListProduk();
const produk1 = new Produk("Laptop", 15000000);
const produk2 = new Produk("Smartphone", 5000000);

listProduk.addProduk(produk1);
listProduk.addProduk(produk2);

console.log("\nDaftar Produk saat ini:");
console.log("====================================");
listProduk.tampilkanSemuaProduk();

console.log("");
listProduk.removeProduk("Smartphone");

console.log("\nDaftar Produk setelah penghapusan:");
console.log("====================================");
listProduk.tampilkanSemuaProduk();