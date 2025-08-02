document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Reset pesan error
        document.querySelectorAll('.error-input').forEach(el => {
            el.value = "";
            el.classList.remove("visible");
        });

        const nama = document.getElementById("nama").value.trim();
        const tanggal = document.getElementById("tanggal").value.trim();
        const genderInput = document.querySelector('input[name="gender"]:checked');
        const pesan = document.getElementById("pesan").value.trim();

        const errorNama = document.getElementById("error-nama");
        const errorTanggal = document.getElementById("error-tanggal");
        const errorGender = document.getElementById("error-gender");
        const errorPesan = document.getElementById("error-pesan");

        let isValid = true;

        if (nama === "") {
            errorNama.value = "Nama harus diisi.";
            errorNama.classList.add("visible");
            isValid = false;
        }

        if (tanggal === "") {
            errorTanggal.value = "Tanggal lahir harus diisi.";
            errorTanggal.classList.add("visible");
            isValid = false;
        }

        if (!genderInput) {
            errorGender.value = "Pilih jenis kelamin.";
            errorGender.classList.add("visible");
            isValid = false;
        }

        if (pesan === "") {
            errorPesan.value = "Pesan tidak boleh kosong.";
            errorPesan.classList.add("visible");
            isValid = false;
        }

        if (!isValid) return;

        // Tampilkan output
        document.getElementById('output-nama').textContent = ": " + nama;
        document.getElementById('output-tanggal').textContent = ": " + tanggal;
        document.getElementById('output-gender').textContent = ": " + genderInput.value;
        document.getElementById('output-pesan').textContent = ": " + pesan;
        document.getElementById('output-time').textContent = ": " + new Date().toString();


        // Reset form
        form.reset();
    });
});
