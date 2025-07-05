import { useEffect, useRef, useState } from 'react';

// Custom hook for scroll animations
const useScrollAnimation = () => {
    const [visibleElements, setVisibleElements] = useState(new Set());
    const observerRef = useRef(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleElements(prev => new Set([...prev, entry.target.id]));
                    }
                });
            },
            { threshold: 0.1, rootMargin: '50px' }
        );

        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach(el => observerRef.current.observe(el));

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    return visibleElements;
};

export default function Programs() {
    const visibleElements = useScrollAnimation();

    const getAnimationClass = (id, delay = 0) => {
        const baseClass = visibleElements.has(id)
            ? 'animate-fade-in opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8';
        return `${baseClass} transition-all duration-700 ease-out ${delay > 0 ? `delay-${delay}` : ''}`;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
            {/* Header */}
            <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-down">
                            Program River Ranger Jakarta
                        </h1>
                        <p className="text-xl max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
                            Dua program utama yang menjadi pilar dalam menjaga kebersihan Sungai Ciliwung
                        </p>
                    </div>
                </div>
            </section>

            {/* Kelas Alam Detail */}
            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div
                            id="kelas-alam-info"
                            data-animate
                            className={getAnimationClass('kelas-alam-info')}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                                    <span className="text-white text-xl">📚</span>
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900">Kelas Alam</h2>
                                    <p className="text-blue-600 font-semibold">Setiap Rabu & Jumat</p>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Kelas alam adalah program pendidikan lingkungan yang mencakup berbagai mata pelajaran untuk anak-anak dengan pendekatan yang menyenangkan dan interaktif.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 transform hover:translate-x-2 transition-transform duration-300">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                    <span className="text-gray-700">Peserta: 15 anak berusia 9-24 tahun</span>
                                </div>
                                <div className="flex items-center gap-3 transform hover:translate-x-2 transition-transform duration-300">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                    <span className="text-gray-700">Lokasi: Cagar Buah Condet atau rumah warga</span>
                                </div>
                                <div className="flex items-center gap-3 transform hover:translate-x-2 transition-transform duration-300">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                    <span className="text-gray-700">Pengajar: Sukarelawan lokal dan asing</span>
                                </div>
                            </div>
                        </div>
                        <div
                            id="kelas-alam-content"
                            data-animate
                            className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${getAnimationClass('kelas-alam-content', 300)}`}
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Materi Pembelajaran</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { subject: "Ekosistem Lingkungan", icon: "🌱", desc: "Memahami hubungan makhluk hidup dengan lingkungan" },
                                    { subject: "Fungsi Sungai", icon: "🌊", desc: "Peran sungai dalam ekosistem dan kehidupan" },
                                    { subject: "7 Jenis Sampah Plastik", icon: "♻️", desc: "Identifikasi dan klasifikasi sampah plastik" },
                                    { subject: "Sinematografi", icon: "🎬", desc: "Teknik dasar pembuatan film dokumenter" },
                                    { subject: "Fotografi", icon: "📸", desc: "Seni mengabadikan momen lingkungan" },
                                    { subject: "Matematika", icon: "🔢", desc: "Aplikasi matematika dalam lingkungan" },
                                    { subject: "Bahasa Inggris", icon: "🗣️", desc: "Komunikasi global tentang lingkungan" },
                                    { subject: "Kebudayaan", icon: "🎭", desc: "Warisan budaya lokal dan pelestarian" }
                                ].map((item, index) => (
                                    <div key={index} className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transform hover:scale-105 transition-all duration-300">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-lg">{item.icon}</span>
                                            <span className="font-semibold text-gray-900">{item.subject}</span>
                                        </div>
                                        <p className="text-sm text-gray-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BebersihBareng Detail */}
            <section className="py-16 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div
                            id="bebersih-bareng-flow"
                            data-animate
                            className={`bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl ${getAnimationClass('bebersih-bareng-flow')}`}
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Alur Kegiatan #BebersihBareng</h3>
                            <div className="space-y-4">
                                {[
                                    { step: "1", title: "Pendaftaran", desc: "Melalui Instagram dengan donasi Rp 50.000" },
                                    { step: "2", title: "Pembersihan", desc: "Bersih-bersih sampah plastik di bantaran sungai" },
                                    { step: "3", title: "Pemilahan", desc: "Memilah sampah berdasarkan jenis plastik" },
                                    { step: "4", title: "Pengolahan", desc: "Mengirim ke bank sampah atau TPA Bantar Gebang" },
                                    { step: "5", title: "Ecobrick", desc: "Membuat bata plastik dari residu sampah" },
                                    { step: "6", title: "Restorasi", desc: "Penyebaran benih ikan di sungai" },
                                    { step: "7", title: "Evaluasi", desc: "Diskusi dan dokumentasi kegiatan" }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-3 group">
                                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:bg-green-700 transition-colors duration-300">
                                            {item.step}
                                        </div>
                                        <div className="group-hover:translate-x-1 transition-transform duration-300">
                                            <h4 className="font-semibold text-gray-900">{item.title}</h4>
                                            <p className="text-sm text-gray-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div
                            id="bebersih-bareng-info"
                            data-animate
                            className={getAnimationClass('bebersih-bareng-info', 300)}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                                    <span className="text-white text-xl">🧹</span>
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900">#BebersihBareng</h2>
                                    <p className="text-green-600 font-semibold">Sebulan Sekali</p>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Program aksi nyata pembersihan sampah plastik di bantaran Sungai Ciliwung dengan melibatkan masyarakat luas melalui platform media sosial Instagram.
                            </p>
                            <div className="space-y-4 mb-6">
                                <div className="flex items-center gap-3 transform hover:translate-x-2 transition-transform duration-300">
                                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                                    <span className="text-gray-700">Donasi: Rp 50.000 per peserta</span>
                                </div>
                                <div className="flex items-center gap-3 transform hover:translate-x-2 transition-transform duration-300">
                                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                                    <span className="text-gray-700">Batas: 8 kantong sampah per kegiatan</span>
                                </div>
                                <div className="flex items-center gap-3 transform hover:translate-x-2 transition-transform duration-300">
                                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                                    <span className="text-gray-700">Lokasi: Bantaran Sungai Ciliwung, Condet</span>
                                </div>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg hover:bg-green-100 transition-colors duration-300">
                                <h4 className="font-semibold text-green-800 mb-2">Penggunaan Dana Donasi:</h4>
                                <ul className="text-sm text-green-700 space-y-1">
                                    <li>• Bibit ikan untuk restorasi sungai</li>
                                    <li>• Sarung tangan dan kantong sampah</li>
                                    <li>• Krim anti-nyamuk untuk peserta</li>
                                    <li>• Makan siang bersama</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section className="py-16 bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div
                        id="achievements-header"
                        data-animate
                        className={`text-center mb-12 ${getAnimationClass('achievements-header')}`}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Pencapaian Luar Biasa</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Hasil konkret dari upaya River Ranger Jakarta dalam menjaga kebersihan Sungai Ciliwung
                        </p>
                    </div>
                    <div
                        id="achievements-grid"
                        data-animate
                        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${getAnimationClass('achievements-grid', 300)}`}
                    >
                        {[
                            { value: "1 Ton", desc: "Sampah plastik terkumpul dalam kurang dari 1 jam", color: "red" },
                            { value: "700 Kg", desc: "Sampah plastik terkumpul dalam 30 menit (2019)", color: "orange" },
                            { value: "8", desc: "Kantong sampah batas maksimal per kegiatan", color: "green" },
                            { value: "15", desc: "Anak-anak peserta aktif (9-24 tahun)", color: "blue" }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                                <div className={`text-3xl font-bold text-${item.color}-600 mb-2`}>{item.value}</div>
                                <div className="text-sm text-gray-600">{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Plastic Types Education */}
            <section className="py-16 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div
                        id="plastic-types-header"
                        data-animate
                        className={`text-center mb-12 ${getAnimationClass('plastic-types-header')}`}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Edukasi Jenis Sampah Plastik</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Pemahaman tentang klasifikasi sampah plastik dan metode pengelolaannya
                        </p>
                    </div>
                    <div
                        id="plastic-types-grid"
                        data-animate
                        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${getAnimationClass('plastic-types-grid', 300)}`}
                    >
                        <div className="bg-red-50 p-6 rounded-xl border border-red-200 hover:bg-red-100 transform hover:scale-105 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300">
                                    <span className="text-white font-bold">1</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-red-800">PET</h3>
                                    <p className="text-sm text-red-600">Polyethylene Terephthalate</p>
                                </div>
                            </div>
                            <p className="text-red-700 mb-3">Digunakan pada botol minum sekali pakai</p>
                            <div className="bg-red-100 p-3 rounded-lg">
                                <p className="text-sm text-red-800">
                                    ⚠️ <strong>Peringatan:</strong> Berbahaya jika dipakai ulang
                                </p>
                            </div>
                        </div>

                        <div className="bg-green-50 p-6 rounded-xl border border-green-200 hover:bg-green-100 transform hover:scale-105 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-300">
                                    <span className="text-white font-bold">2</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-green-800">HDPE</h3>
                                    <p className="text-sm text-green-600">High Density Polyethylene</p>
                                </div>
                            </div>
                            <p className="text-green-700 mb-3">Digunakan pada botol kosmetik</p>
                            <div className="bg-green-100 p-3 rounded-lg">
                                <p className="text-sm text-green-800">
                                    ♻️ <strong>Keunggulan:</strong> Bisa didaur ulang
                                </p>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 hover:bg-blue-100 transform hover:scale-105 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                                    <span className="text-white font-bold">♻️</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-blue-800">Ecobrick</h3>
                                    <p className="text-sm text-blue-600">Bata Plastik Ramah Lingkungan</p>
                                </div>
                            </div>
                            <p className="text-blue-700 mb-3">Dibuat dari residu plastik yang tidak dapat didaur ulang</p>
                            <div className="bg-blue-100 p-3 rounded-lg">
                                <p className="text-sm text-blue-800">
                                    🔨 <strong>Proses:</strong> Sampah dicuci, dijemur, kemudian dipadatkan
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
                <div
                    id="cta-section"
                    data-animate
                    className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center ${getAnimationClass('cta-section')}`}
                >
                    <h2 className="text-3xl font-bold mb-4">Ikuti Program River Ranger Jakarta</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Bergabunglah dengan komunitas peduli lingkungan dan berpartisipasi dalam menjaga kebersihan Sungai Ciliwung
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
                            Daftar Kelas Alam
                        </button>
                        <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
                            Ikut #BebersihBareng
                        </button>
                    </div>
                </div>
            </section>

            <style>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes fade-in-down {
                    from {
                        opacity: 0;
                        transform: translateY(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out;
                }
                
                .animate-fade-in-down {
                    animation: fade-in-down 0.8s ease-out;
                }
                
                .animation-delay-300 {
                    animation-delay: 300ms;
                }
                
                html {
                    scroll-behavior: smooth;
                }
            `}</style>
        </div>
    );
}
