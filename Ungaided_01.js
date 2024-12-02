class Karyawan {
    constructor(nama, gajiPokok, jabatan) {
        if (this.constructor === Karyawan) {
            throw new Error(
                "Kelas abstrak 'Karyawan' tidak bisa diinstansiasikan secara langsung"
            );
        }

        this.jabatan = this.constructor.name;
    }

    hitungPendapatan() {
        throw new Error(
            "Metode 'hitungPendapatan()' harus diimplementasikan di kelas turunan"
        );
    }

    infoKaryawan() {
        console.log(`Nama: ${this.nama}`);
        console.log(`Jabatan: ${this.jabatan}`);
        console.log(`Pendapatan: ${this.hitungPendapatan()}`);
    }
}

class Staff extends Karyawan {
    constructor(nama, gajiPokok) {
        super();
        this.nama = nama;
        this.gajiPokok = gajiPokok;
    }

    hitungPendapatan() {
        return this.gajiPokok * 30 + 500000
    };
}

class Manager extends Karyawan {
    constructor (nama, gajiPokok) {
        super();
        this.nama = nama;
        this.gajiPokok = gajiPokok;
    }

    hitungPendapatan() {
        return this.gajiPokok * 30 + 1000000
    };
}

const manager = new Manager("Aldo Sequera", 3000000);
const staff = new Staff("Yoel Samosir", 2000000);

console.log("\n======================================");
console.log("\tInformasi Karyawan");
manager.infoKaryawan();
console.log("\n======================================");

console.log("\n======================================");
console.log("\tInformasi Karyawan");
staff.infoKaryawan();
console.log("\n======================================");