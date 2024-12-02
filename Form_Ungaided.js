class Kendaraan {
    constructor(merk, model) {
        this.merk = merk;
        this.model = model;
    }

    getDeskripsi() {
        throw new Error("Method ini harus diimplementasikan oleh subclass"); // Buatlah method abstrak
    }
}

class Mobil extends Kendaraan {
    constructor(merk, model, jumlahPintu) {
        super(merk, model);
        this.jumlahPintu = jumlahPintu;
    }

    getDeskripsi() {
        return `Mobil ${this.merk} ${this.model} dengan ${this.jumlahPintu} pintu.`;
    }
}

class Motor extends Kendaraan {
    constructor(merk, model, tipe) {
        super(merk, model); 
        this.tipe = tipe;
    }

    getDeskripsi() {
        return `Motor ${this.merk} ${this.model} tipe ${this.tipe}.`;
    }
}

function deskripsikanKendaraan(kendaraan) {
    return kendaraan.getDeskripsi();
}

const mobil = new Mobil("Aldo_231712646", "Camry", 4);
const motor = new Motor("Aldo_231712646", "R15", "Sport");

console.log(deskripsikanKendaraan(mobil));
console.log(deskripsikanKendaraan(motor)); 