class Kendaraan {
    constructor(nama) {
        this.nama = nama;
    }
    isiBensin(liter) {
        console.log(`${this.nama} mengisi bensin ${liter} liter`);
    }
}
class MobilBensin extends Kendaraan {
    