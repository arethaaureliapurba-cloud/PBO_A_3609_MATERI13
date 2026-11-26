class Kendaraan {
    constructor(nama) {
        this.nama = nama;
    }

    info() {
        console.log("Kendaraan: " + this.nama);
    }
}

class KendaraanBensin extends Kendaraan {
    isiBensin(liter) {
        console.log(this.nama + " mengisi bensin " + liter + " liter.");
    }
}

class KendaraanListrik extends Kendaraan {
    isiDaya(kwh) {
        console.log(this.nama + " mengisi daya " + kwh + " kWh.");
    }
}

class MobilBensin extends KendaraanBensin {}

class MobilListrik extends KendaraanListrik {}

class MotorBensin extends KendaraanBensin {}

function isiSemuaBensin(daftar) {
    daftar.forEach((x) => x.isiBensin(20));
}

function isiSemuaDaya(daftar) {
    daftar.forEach((x) => x.isiDaya(40));
}

const Avanza_3609 = new MobilBensin("Avanza_3609");
const Ioniq_3609 = new MobilListrik("Ioniq_3609");
const Beat_3609 = new MotorBensin("Beat_3609");

Avanza_3609.info();
Ioniq_3609.info();
Beat_3609.info();

isiSemuaBensin([Avanza_3609, Beat_3609]);
isiSemuaDaya([Ioniq_3609]);