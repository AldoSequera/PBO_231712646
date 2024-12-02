class Hewan {
    suara() {
        throw new Error("Method suara() harus diimplementasikan");
    }
    lari() {
        throw new Error("Method lari() harus diimplementasikan");
    }
}

class Anjing extends Hewan {
    suara() {
        return "Anjing menggonggong: Woof woof!";
    }
    lari() {
        return "Hewan ini berlari dengan kecepatan 20 km/jam";
    }
}

class Kucing extends Hewan {
    suara() {
        return "Kucing mengiau: Meow meow!";
    }
    lari() {
        return "Hewan ini berlari dengan kecepatan 15 km/jam";
    }
}

class Burung extends Hewan {
    suara() {
        return "Burung berkicau: Tweet tweet!";
    }
    lari() {
        return "Hewan ini sedang terbang dengan kecepatan 100 km/jam";
    }
}

function tampilkanInfoHewan(hewan) {
    console.log(hewan.suara());
    console.log(hewan.lari());
}

const anjing_2646 = new Anjing();
const kucing_2646 = new Kucing();
const burung_2646 = new Burung();

tampilkanInfoHewan(anjing_2646);
tampilkanInfoHewan(kucing_2646);
tampilkanInfoHewan(burung_2646); 