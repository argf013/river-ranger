import { useEffect, useRef } from 'react';

export default function About() {
    const observerRef = useRef(null);

    useEffect(() => {
        // Create intersection observer for scroll animations
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '50px' }
        );

        // Observe all elements with animation classes
        const elements = document.querySelectorAll('.scroll-animate, .scroll-animate-fade, .scroll-animate-slide-left, .scroll-animate-slide-right, .scroll-animate-scale, .stagger-children');
        elements.forEach((el) => observerRef.current.observe(el));

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
            {/* Header */}
            <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center scroll-animate-fade">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Tentang River Ranger Jakarta
                        </h1>
                        <p className="text-xl max-w-3xl mx-auto">
                            Mengenal lebih dekat komunitas peduli lingkungan di bantaran Sungai Ciliwung
                        </p>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="bg-white p-8 rounded-xl shadow-lg scroll-animate-slide-left">
                            <div className="text-center mb-6">
                                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-3xl">👨‍🏫</span>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">Syahiq Harpi</h2>
                                <p className="text-blue-600 font-semibold">Pendiri River Ranger Jakarta (31 tahun)</p>
                            </div>
                            <blockquote className="text-gray-600 italic text-center border-l-4 border-blue-600 pl-4">
                                "Aku harapannya melalui komunitas ini bisa konsisten mengajar anak-anak dan orang lain menyebarkan kebaikan di mana pun, khususnya tentang mengurangi sampah plastik."
                            </blockquote>
                        </div>
                        <div className="scroll-animate-slide-right">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Perjalanan Membangun Komunitas</h3>
                            <div className="space-y-4">
                                <p className="text-gray-600 leading-relaxed">
                                    Syahiq mengakui upaya membangun komunitas ini tidak mudah. Meskipun lahir di situ, ia sempat tinggal di tempat lain sebelum kembali dan mendapati kondisi Condet telah berubah.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Sebelum membentuk River Ranger Jakarta, Syahiq berusaha menunjukan niat baiknya kepada masyarakat. Ia bersosialisasi dengan warga setempat selama tiga bulan terlebih dulu.
                                </p>
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-blue-800 font-semibold">💡 Filosofi Hidup</p>
                                    <p className="text-blue-700 text-sm mt-2">
                                        "Jangan tanyakan apa yang negara berikan kepadamu, tetapi tanyakan apa yang kamu berikan kepada negaramu"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 scroll-animate">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Tim Pengurus</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Lima pengurus yang berkomitmen dalam menjaga Sungai Ciliwung dan memberdayakan masyarakat Condet
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 stagger-children scroll-animate">
                        {[
                            { name: "Syahiq Harpi", role: "Pendiri & Koordinator", bg: "bg-blue-100", text: "text-blue-800" },
                            { name: "Andriana", role: "Pengurus", bg: "bg-green-100", text: "text-green-800" },
                            { name: "Rizal Wahyudi", role: "Pengurus", bg: "bg-purple-100", text: "text-purple-800" },
                            { name: "Yasinta", role: "Pengurus", bg: "bg-pink-100", text: "text-pink-800" },
                            { name: "Khusairi Andi", role: "Pengurus", bg: "bg-yellow-100", text: "text-yellow-800" }
                        ].map((member, index) => (
                            <div key={index} className={`${member.bg} p-6 rounded-xl text-center`}>
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">👤</span>
                                </div>
                                <h3 className={`font-bold ${member.text} mb-1`}>{member.name}</h3>
                                <p className="text-gray-600 text-sm">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Challenges Section */}
            <section className="py-16 bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 scroll-animate">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Tantangan yang Dihadapi</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Berbagai tantangan yang harus dihadapi dalam menjalankan misi lingkungan
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children scroll-animate">
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <div className="text-center mb-4">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <span className="text-red-600 text-xl">👨‍👩‍👧‍👦</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Menjaga Minat Anak-anak</h3>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Suasana hati mereka kadang berubah-ubah sehingga Syahiq harus pandai menyusun materi pelajaran.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <div className="text-center mb-4">
                                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <span className="text-yellow-600 text-xl">🥤</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Mengubah Kebiasaan</h3>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Susah mengimbau mereka untuk tidak jajan sembarangan. Anak-anak masih suka jajan es pakai plastik.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <div className="text-center mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <span className="text-blue-600 text-xl">💰</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Pendanaan Operasional</h3>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Operasional terpenuhi dari uang pribadi Syahiq dan para pengurus, serta honor sebagai pembicara.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <section className="py-16 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 scroll-animate">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Kisah Sukses</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Hasil kerja keras yang mulai terlihat dalam mengubah pandangan anak-anak mengenai lingkungan
                        </p>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl scroll-animate-scale">
                        <div className="flex items-start gap-4">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-2xl">🌊</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Sepasang Kakak Beradik yang Berubah</h3>
                                <p className="text-gray-600 mb-4">
                                    Ada sepasang kakak beradik yang mengikuti kegiatan ini. Selama bersekolah, mereka kerap membawa pulang sampah plastik mereka sendiri untuk diolah di rumah karena tidak yakin sampah plastik sekolah akan dibuang ke mana.
                                </p>
                                <div className="bg-white p-4 rounded-lg">
                                    <p className="text-green-800 font-semibold">🎯 Cita-cita Baru</p>
                                    <p className="text-green-700 text-sm mt-1">
                                        Mereka kini bercita-cita menjadi saintis bidang kelautan karena menyadari laut adalah sumber oksigen terbesar di dunia.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Evolution Section */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 scroll-animate">
                        <h2 className="text-3xl font-bold mb-4">Perkembangan Komunitas</h2>
                        <p className="text-xl max-w-2xl mx-auto">
                            Perjalanan River Ranger Jakarta dari awal hingga sekarang
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children scroll-animate">
                        <div className="bg-transparent bg-opacity-40 p-6 rounded-xl border border-white border-opacity-30">
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">28</div>
                                <div className="text-lg">Peserta Awal</div>
                                <p className="text-sm mt-2 opacity-90">Jumlah anak yang mengikuti di awal pembentukan komunitas</p>
                            </div>
                        </div>
                        <div className="bg-transparent bg-opacity-40 p-6 rounded-xl border border-white border-opacity-30">
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">15</div>
                                <div className="text-lg">Peserta Saat Ini</div>
                                <p className="text-sm mt-2 opacity-90">Anak-anak berusia 9-24 tahun yang masih aktif mengikuti kegiatan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recognition Section */}
            <section className="py-16 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 scroll-animate">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Pengakuan & Kerjasama</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            River Ranger Jakarta diakui dan diundang berbagai pihak untuk berkolaborasi
                        </p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl scroll-animate-scale">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-xl">🏛️</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">Pemerintah Provinsi DKI Jakarta</h3>
                                <p className="text-gray-600">Diundang untuk mengikuti gerakan penghijauan penanaman tanaman bugenvil di Senayan</p>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                            <p className="text-sm text-gray-600">
                                💼 <strong>Sumber Pendapatan:</strong> Honor sebagai pembicara dan sisa uang pendaftaran kegiatan bersih-bersih
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}