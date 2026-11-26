const pembersih = {
    bersihkan() {
        console.log(this.nama + " membersihkan ruangan.");
    }
};

const pengantar = {
    antarPaket() {
        console.log(this.nama + " mengantar paket.");
    }
};

const penjaga = {
    patroli() {
        console.log(this.nama + " berpatroli di area.");
    }
};

function applyCapabilities(Kelas, ...kemampuan) {
    Object.assign(Kelas.prototype, ...kemampuan);
}

class RobotRumah {
    constructor(nama) {
        this.nama = nama;
    }
}

class RobotKurir {
    constructor(nama) {
        this.nama = nama;
    }
}

applyCapabilities(RobotRumah, pembersih, penjaga);
applyCapabilities(RobotKurir, pengantar);

const RobotRumah_3262 = new RobotRumah("RobotRumah_3262");
const RobotKurir_3262 = new RobotKurir("RobotKurir_3262");

RobotRumah_3609.bersihkan();
RobotRumah_3609.patroli();
RobotKurir_3609.antarPaket();

const kurirBisaBersih = typeof RobotKurir_3609.bersihkan === "function";
const rumahBisaAntar = typeof RobotRumah_3609.antarPaket === "function";

console.log(RobotKurir_3609.nama + " bisa membersihkan? " + kurirBisaBersih);
console.log(RobotRumah_3609.nama + " bisa mengantar paket? " + rumahBisaAntar);