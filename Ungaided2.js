class Transportasi {
    mode() {
        console.log("Atlet ini sedang berlatih.");
    }
}

class Mobil extends Transportasi {
    mode() {
        console.log("mobil bergerak di jalan.");
    }
}

class Kereta extends Transportasi {
    mode() {
        console.log("Kereta bergerak di rel.");
    }
}

class Pesawat extends Transportasi {
    mode() {
        console.log("Pesawat terbang di udara.");
    }
}

function panggilModeTransportasi(transportasi) {
    transportasi.mode();
}

const mobil = new Mobil();
const kereta = new Kereta();
const pesawat = new Pesawat();

panggilModeTransportasi(mobil);
panggilModeTransportasi(kereta);
panggilModeTransportasi(pesawat);