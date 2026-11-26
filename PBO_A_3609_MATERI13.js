class Kendaraan {
    constructor(nama) {
        this.nama = nama;
    }
    isiBensin(liter) {
        console.log(`${this.nama} mengisi bensin ${liter} liter`);
    }
}
class MobilBensin extends Kendaraan {
    constructor(nama) {
        super(nama);
    }
    isiBensin(liter) {
        console.log(`${this.nama} mengisi bensin ${liter} liter`);
    }
}
class MobilListrik extends Kendaraan {
    constructor(nama) {
        super(nama);
    }
    isiBensin(liter) {
        console.log(`${this.nama} tidak bisa mengisi bensin karena ini mobil listrik`);
    }
}
function isiSemuaKendaraan(daftar) {
    daftar.forEach((x) => x.isiBensin(20));
    }
    const avanza = new MobilBensin("Avanza_ XXXX");
    const ioniq = new MobilListrik("Ioniq_ XXXX");
    const daftarKendaraan = [avanza, ioniq];
    isiSemuaKendaraan(daftarKendaraan);