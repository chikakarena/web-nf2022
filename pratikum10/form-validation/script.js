function validasi() {
    var Nama = document.getElementById("Nama").value;
    var Email = document.getElementById("Email").value;
    var Jam = document.getElementById("Jam").value;
    var Tujuan = document.getElementById("Tujuan").value;
    var Jumlah = document.getElementById("Jumlah").value;
    
    if(Nama =="" && Email =="" && Jam == "" && Tujuan == "" && Jumlah == "")
    
{
        alert("terjadi kesalahan");
    }   else {
        alert("Terimakasih Data Anda Sudah Benar");
    }
}