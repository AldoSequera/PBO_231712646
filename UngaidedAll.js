class Payment_2646 {
    prosesPembayaran(amount) {
        throw new Error("Metode 'prosesPembayaran(amount)' harus diimplementasikan.");
    }
}
class Notifikasi_2646 {
    kirimNotifikasi(pesan) {
        throw new Error("Metode 'kirimNotifikasi(pesan)' harus diimplementasikan.");
    }
}
class KartuKredit extends Payment_2646 {
    prosesPembayaran(amount) {
        console.log(`Pembayaran sebesar Rp${amount} melalui Kartu Kredit berhasil diproses.`);
    }
}
class Ewallet extends Payment_2646 {
    prosesPembayaran(amount) {
        console.log(`Pembayaran sebesar Rp${amount} melalui E-Wallet berhasil diproses.`);
    }
}
class TransferBank extends Payment_2646 {
    prosesPembayaran(amount) {
        console.log(`Pembayaran sebesar Rp${amount} melalui Transfer Bank berhasil diproses.`);
    }
}
class NotifEmail extends Notifikasi_2646 {
    kirimNotifikasi(pesan) {
        console.log(`Notifikasi via Email: ${pesan}`);
    }
}
class NotifSMS extends Notifikasi_2646 {
    kirimNotifikasi(pesan) {
        console.log(`Notifikasi via SMS: ${pesan}`);
    }
}
class PaymentProcessor_2646 {
    constructor(paymentMethod, notificationMethod) {
        this.paymentMethod = paymentMethod;
        this.notificationMethod = notificationMethod;
    }
    process(amount) {
        this.paymentMethod.prosesPembayaran(amount);
        this.notificationMethod.kirimNotifikasi(`Your payment of Rp${amount} was successful.`);
    }
}
const processor1 = new PaymentProcessor_2646(new KartuKredit(), new NotifEmail());
processor1.process(100);
const processor2 = new PaymentProcessor_2646(new Ewallet(), new NotifSMS());
processor2.process(100);
const processor3 = new PaymentProcessor_2646(new TransferBank(), new NotifEmail());
processor3.process(100);