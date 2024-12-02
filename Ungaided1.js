class Restoran {

    pesanMakanan(...args) {
        var makanan1 = function (namaMakanan) {
            return console.log(`Makanan dengan nama '${namaMakanan}' tidak tersedia.`);
        };
        var makanan2 = function (namaMakanan, namaPemesanan) {
            return console.log(`Pesanan telah diterima: '${namaMakanan}' untuk ${namaPemesanan}.`);
        };
        var makanan3 = function (namaMakanan, namaPemesanan) {
            return console.log(`Jumlah parameter tidak valid.`);
        };

        if (args.length === 1) {
            return makanan1(args[0]);
        } else if (args.length === 2) {
            return makanan2(args[0], args[1]);
        } else if (args.length >= 2) {
            return makanan3(args[0], args[1]);
        }
    }
}
const restoran = new Restoran();
restoran.pesanMakanan("Nasi Goreng");
restoran.pesanMakanan("Nasi Goreng", "Budi");
restoran.pesanMakanan("Nasi Goreng", "Budi", "Pedas");