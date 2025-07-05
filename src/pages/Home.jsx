import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        // Smooth scroll animation observer
        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            threshold: 0.1,
            rootMargin: '50px'
        });

        // Observe all sections
        const sections = document.querySelectorAll('.scroll-animate');
        sections.forEach(section => observer.observe(section));

        // Cleanup
        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-600 to-green-600 text-white">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="text-center animate-slide-up">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            River Ranger Jakarta
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                            Komunitas yang mengajak anak-anak dan dewasa berkreasi sekaligus menjaga lingkungan di Sungai Ciliwung
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#programs" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                                Lihat Program
                            </a>
                            <a href="#bebersih-bareng" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                                #BebersihBareng
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 scroll-animate">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Tentang River Ranger Jakarta
                            </h2>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                River Ranger Jakarta adalah komunitas yang mengajak anak-anak dan dewasa berkreasi sekaligus menjaga lingkungan, terutama di Sungai Ciliwung. Komunitas ini didirikan oleh Syahiq Harpi (31) dengan harapan dapat konsisten mengajar anak-anak dan menyebarkan kebaikan, khususnya tentang mengurangi sampah plastik.
                            </p>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Saat ini River Ranger Jakarta memiliki 15 anak peserta berusia 9-24 tahun dan 5 pengurus: Syahiq Harpi, Andriana, Rizal Wahyudi, Yasinta, dan Khusairi Andi.
                            </p>
                            <div className="flex items-center gap-4 mt-6">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-blue-600">15</div>
                                    <div className="text-sm text-gray-500">Peserta Aktif</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-green-600">5</div>
                                    <div className="text-sm text-gray-500">Pengurus</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-blue-600">2</div>
                                    <div className="text-sm text-gray-500">Program Utama</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">Visi & Misi</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                                        <span className="text-white text-sm">🌊</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Sungai Ciliwung Bersih</h4>
                                        <p className="text-gray-600 text-sm">Menjaga kebersihan Sungai Ciliwung dari sampah plastik</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1">
                                        <span className="text-white text-sm">🐟</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Ekosistem Sehat</h4>
                                        <p className="text-gray-600 text-sm">Ikan hidup normal tanpa mengonsumsi mikroplastik</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center mt-1">
                                        <span className="text-white text-sm">👥</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Pemberdayaan Masyarakat</h4>
                                        <p className="text-gray-600 text-sm">Edukasi dan pelibatan masyarakat Condet</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section id="programs" className="py-16 bg-white scroll-animate">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Utama</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Dua program utama yang menjadi fokus River Ranger Jakarta dalam menjaga lingkungan dan memberdayakan masyarakat
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Kelas Alam */}
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-2xl">📚</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Kelas Alam</h3>
                                <p className="text-blue-600 font-semibold">Setiap Rabu & Jumat</p>
                            </div>
                            <div className="space-y-3">
                                <h4 className="font-semibold text-gray-900">Materi Pembelajaran:</h4>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                        <span className="text-sm">Ekosistem Lingkungan</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                        <span className="text-sm">Fungsi Sungai</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                        <span className="text-sm">7 Jenis Sampah Plastik</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                        <span className="text-sm">Sinematografi</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                        <span className="text-sm">Fotografi</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                        <span className="text-sm">Matematika</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                        <span className="text-sm">Bahasa Inggris</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                        <span className="text-sm">Kebudayaan</span>
                                    </div>
                                </div>
                                <div className="mt-4 p-3 bg-white rounded-lg">
                                    <p className="text-sm text-gray-600">
                                        📍 <strong>Lokasi:</strong> Cagar Buah Condet atau rumah warga setempat
                                    </p>
                                    <p className="text-sm text-gray-600 mt-1">
                                        👥 <strong>Pengajar:</strong> Sukarelawan lokal dan asing
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* BebersihBareng */}
                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-2xl">🧹</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">#BebersihBareng</h3>
                                <p className="text-green-600 font-semibold">Sebulan Sekali</p>
                            </div>
                            <div className="space-y-3">
                                <h4 className="font-semibold text-gray-900">Kegiatan:</h4>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                                        <span className="text-sm">Bersih-bersih sampah plastik di bantaran Sungai Ciliwung</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                                        <span className="text-sm">Pemilahan sampah berdasarkan jenis</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                                        <span className="text-sm">Pengiriman ke bank sampah</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                                        <span className="text-sm">Penyebaran benih ikan</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                                        <span className="text-sm">Diskusi dan evaluasi kegiatan</span>
                                    </div>
                                </div>
                                <div className="mt-4 p-3 bg-white rounded-lg">
                                    <p className="text-sm text-gray-600">
                                        💰 <strong>Donasi:</strong> Rp 50.000 per orang
                                    </p>
                                    <p className="text-sm text-gray-600 mt-1">
                                        📦 <strong>Batas:</strong> 8 kantong sampah per kegiatan
                                    </p>
                                    <p className="text-sm text-gray-600 mt-1">
                                        📱 <strong>Pendaftaran:</strong> Melalui Instagram
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievement Section */}
            <section className="py-16 bg-gray-50 scroll-animate">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Pencapaian & Dampak</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Hasil nyata dari upaya River Ranger Jakarta dalam menjaga lingkungan Sungai Ciliwung
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                            <div className="text-4xl font-bold text-red-600 mb-2">1 Ton</div>
                            <div className="text-gray-600">Sampah plastik terkumpul dalam waktu kurang dari 1 jam</div>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                            <div className="text-4xl font-bold text-orange-600 mb-2">700 Kg</div>
                            <div className="text-gray-600">Sampah plastik terkumpul dalam 30 menit pada 2019</div>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                            <div className="text-4xl font-bold text-green-600 mb-2">Ecobrick</div>
                            <div className="text-gray-600">Bata plastik ramah lingkungan dari residu sampah</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Plastic Types Section */}
            <section className="py-16 bg-white scroll-animate">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Jenis Sampah Plastik</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Pemahaman tentang berbagai jenis sampah plastik dan cara pengelolaannya
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-red-50 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-red-800 mb-3">PET (Polyethylene Terephthalate)</h3>
                            <p className="text-red-700 mb-3">Digunakan pada botol minum sekali pakai</p>
                            <div className="bg-red-100 p-3 rounded-lg">
                                <p className="text-sm text-red-800">
                                    ⚠️ <strong>Bahaya:</strong> Berbahaya jika dipakai ulang
                                </p>
                            </div>
                        </div>
                        <div className="bg-green-50 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-green-800 mb-3">HDPE (High Density Polyethylene)</h3>
                            <p className="text-green-700 mb-3">Digunakan pada botol kosmetik</p>
                            <div className="bg-green-100 p-3 rounded-lg">
                                <p className="text-sm text-green-800">
                                    ♻️ <strong>Keunggulan:</strong> Bisa didaur ulang
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white scroll-animate">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Bergabung dengan River Ranger Jakarta</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Mari bersama-sama menjaga kebersihan Sungai Ciliwung dan menciptakan masa depan yang lebih hijau
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                            Hubungi Kami
                        </a>
                        <a href="#" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                            Follow Instagram
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}