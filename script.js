document.addEventListener('DOMContentLoaded', () => {
    const cameraMotions = [
        { en: "3D Rotation", id: "Rotasi 3D" },
        { en: "360 Orbit", id: "Orbit 360" },
        { en: "Action Run", id: "Lari Aksi" },
        { en: "Agent Reveal", id: "Penampakan Agen" },
        { en: "Angel Wings", id: "Sayap Malaikat" },
        { en: "Arc Left", id: "Lengkung Kiri" },
        { en: "Arc Right", id: "Lengkung Kanan" },
        { en: "Bloom Mouth", id: "Mekarnya Mulut" },
        { en: "Buckle Up", id: "Kencangkan Sabuk" },
        { en: "Bullet Time", id: "Waktu Peluru" },
        { en: "Car Chasing", id: "Pengejaran Mobil" },
        { en: "Car Explosion", id: "Ledakan Mobil" },
        { en: "Car Grip", id: "Cengkeraman Mobil" },
        { en: "Crane Down", id: "Derek Turun" },
        { en: "Crane Up", id: "Derek Naik" },
        { en: "Crane Over The Head", id: "Derek di Atas Kepala" },
        { en: "Crash Zoom In", id: "Zoom Tabrak Masuk" },
        { en: "Crash Zoom Out", id: "Zoom Tabrak Keluar" },
        { en: "Datamosh", id: "Datamosh" },
        { en: "Dirty Lens", id: "Lensa Kotor" },
        { en: "Disintegration", id: "Disintegrasi" },
        { en: "Dolly In", id: "Dolly Masuk" },
        { en: "Dolly Left", id: "Dolly Kiri" },
        { en: "Dolly Out", id: "Dolly Keluar" },
        { en: "Dolly Right", id: "Dolly Kanan" },
        { en: "Dolly Zoom In", id: "Dolly Zoom Masuk" },
        { en: "Dolly Zoom Out", id: "Dolly Zoom Keluar" },
        { en: "Double Dolly", id: "Dolly Ganda" },
        { en: "Dutch Angle", id: "Sudut Belanda" },
        { en: "Eyes In", id: "Mata Masuk" },
        { en: "Face Punch", id: "Pukulan Wajah" },
        { en: "Fisheye", id: "Mata Ikan" },
        { en: "Floating Fish", id: "Ikan Mengambang" },
        { en: "Flood", id: "Banjir" },
        { en: "Floral Eyes", id: "Mata Bunga" },
        { en: "Flying", id: "Terbang" },
        { en: "Focus Change", id: "Perubahan Fokus" },
        { en: "FPV Drone", id: "Drone FPV" },
        { en: "Garden Bloom", id: "Taman Mekar" },
        { en: "Glam", id: "Glamor" },
        { en: "Glowshift", id: "Pergeseran Cahaya" },
        { en: "Handheld", id: "Genggam" },
        { en: "Head Explosion", id: "Ledakan Kepala" },
        { en: "Head Tracking", id: "Pelacakan Kepala" },
        { en: "Hyperlapse", id: "Hyperlapse" },
        { en: "Incline", id: "Miring" },
        { en: "Invisible", id: "Tak Terlihat" },
        { en: "Jelly Drift", id: "Hanyutan Kenyal" },
        { en: "Jib Down", id: "Jib Turun" },
        { en: "Jib Up", id: "Jib Naik" },
        { en: "Kiss", id: "Ciuman" },
        { en: "Lazy Susan", id: "Lazy Susan" },
        { en: "Lens Crack", id: "Retak Lensa" },
        { en: "Lens Flare", id: "Suar Lensa" },
        { en: "Levitation", id: "Levitasi" },
        { en: "Low Shutter", id: "Rana Rendah" },
        { en: "Medusa Gorgona", id: "Medusa Gorgona" },
        { en: "Melting", id: "Meleleh" },
        { en: "Morphskin", id: "Kulit Morf" },
        { en: "Mouth In", id: "Mulut Masuk" },
        { en: "Push To Glass", id: "Dorong ke Kaca" },
        { en: "Rap Flex", id: "Fleks Rap" },
        { en: "Robo Arm", id: "Lengan Robot" },
        { en: "Set on Fire", id: "Terbakar" },
        { en: "Skin Surge", id: "Gelombang Kulit" },
        { en: "Snorricam", id: "Snorricam" },
        { en: "Soul Jump", id: "Lompatan Jiwa" },
        { en: "Static", id: "Statis" },
        { en: "Super Dolly In", id: "Super Dolly Masuk" },
        { en: "Super Dolly Out", id: "Super Dolly Keluar" },
        { en: "Symbiote", id: "Simbiosis" },
        { en: "Tentacles", id: "Tentakel" },
        { en: "Thunder God", id: "Dewa Petir" },
        { en: "Tilt Down", id: "Miring ke Bawah" },
        { en: "Tilt up", id: "Miring ke Atas" },
        { en: "Timelapse Human", id: "Selang Waktu Manusia" },
        { en: "Timelapse Landscape", id: "Selang Waktu Pemandangan" },
        { en: "Tracking Shot", id: "Tembakan Pelacakan" },
        { en: "Turning Metal", id: "Logam Berputar" },
        { en: "Whip Pan", id: "Geser Cepat" },
        { en: "Wiggle", id: "Goyangan" },
        { en: "Wind to Face", id: "Angin ke Wajah" },
        { en: "YoYo Zoom", id: "Zoom YoYo" },
        { en: "Zoom In", id: "Perbesar" },
        { en: "Zoom Out", id: "Perkecil" }
    ];

    const cameraSelect = document.getElementById('kamera');
    cameraMotions.forEach(motion => {
        const option = document.createElement('option');
        option.value = motion.en;
        option.textContent = `${motion.en} (${motion.id})`;
        cameraSelect.appendChild(option);
    });

    const generateBtn = document.getElementById('generate-btn');
    const changeTitleBtn = document.getElementById('change-title-btn');
    const changeStyleBtn = document.getElementById('change-style-btn');
    const newTitleInput = document.getElementById('new-title-input');
    const newColorInput = document.getElementById('new-color-input');
    const mainTitle = document.getElementById('main-title');
    
    // Simple word-for-word translation for content
    const contentTranslations = {
        "seorang": "a", "vlogger": "vlogger", "wanita": "female", "muda": "young", "asal": "from", "berusia": "aged", "tahun": "years old",
        "tubuh": "body", "mungil": "petite", "tinggi": "height", "bentuk": "shape", "badan": "body", "proporsional": "proportional",
        "warna": "color", "kulit": "skin", "sawo matang": "brown", "cerah": "bright", "rambut": "hair", "ikal": "wavy", "sebahu": "shoulder-length",
        "hitam": "black", "kecokelatan": "brownish", "diikat": "tied", "setengah": "half", "ke belakang": "back", "wajah": "face", "oval": "oval",
        "alis": "eyebrows", "tebal": "thick", "alami": "natural", "mata": "eyes", "besar": "big", "senyum": "smile", "ramah": "friendly",
        "pipi": "cheeks", "merona": "blushing", "bibir": "lips", "dengan": "with", "sentuhan": "touch", "jaket": "jacket",
        "kuning": "yellow", "celana": "pants", "panjang": "long", "membawa": "carrying", "ransel": "backpack", "kecil": "small",
        "berjalan": "walking", "di sekitar": "around", "terminal bus malam": "night bus terminal", "sambil": "while", "melihat-lihat": "looking around",
        "aktivitas": "activities", "penumpang": "passengers", "dan": "and", "pedagang": "vendors", "menunjukkan": "showing",
        "ekspresi": "expression", "kagum": "amazed", "antusias": "enthusiastic", "sering": "often", "tersenyum": "smiling", "melirik": "glancing",
        "kamera": "camera", "latar tempat": "setting", "di": "at", "terminal bus antar kota": "intercity bus terminal", "malam hari": "at night",
        "terdapat": "there are", "kaki lima": "street", "pinggir": "side", "jalur": "lane", "keberangkatan": "departure", "beberapa": "some",
        "bus": "buses", "berjajar": "lined up", "lampu": "lights", "menyala": "on", "waktu": "time", "hujan rintik-rintik": "drizzling rain",
        "suara": "sound", "hangat": "warm", "penuh semangat": "passionate", "nada": "tone", "bersahabat": "friendly", "enerjik": "energetic",
        "logat": "accent", "indonesia": "Indonesian", "halus": "soft", "berbicara": "speaks", "murni": "purely", "dalam": "in", "bahasa": "language",
        "cara berbicara": "speaking style", "tempo": "tempo", "sedang-cepat": "medium-fast", "gaya bicara": "style of speech", "lincah": "agile",
        "ekspresif": "expressive", "penting": "important", "seluruh": "all", "dialog": "dialogue", "harus": "must be", "pengucapan": "pronunciation",
        "jelas": "clear", "pastikan": "make sure", "ini": "this", "konsisten": "consistent", "seluruh": "entire", "video": "video",
        "gerakan": "movement", "dari": "from", "lalu": "then", "menyamping": "sideways", "ke depan": "forward", "mengikuti": "following",
        "langkahnya": "her steps", "secara": "in a", "sinematik": "cinematic", "pencahayaan": "lighting", "dari": "from", "lampu jalan": "street lights",
        "lampu bus": "bus lights", "pantulan": "reflection", "cahaya": "light", "pada": "on", "aspal": "asphalt", "basah": "wet",
        "gaya video/art style": "video/art style", "realistis": "realistic", "kualitas visual": "visual quality", "resolusi": "resolution",
        "suasana": "atmosphere", "sibuk": "busy", "ramai": "crowded", "kesan": "impression", "perjalanan": "journey", "malam": "night",
        "yang": "that is", "hidup": "alive", "dinamis": "dynamic", "meskipun": "although", "hujan": "rain",
        "mesin bus menyala": "bus engine running", "pengumuman": "announcements", "pengeras suara": "loudspeaker", "derai hujan ringan": "light rain shower",
        "percakapan": "conversations", "samar": "faint", "antar": "between",
        "berkata": "says", "tiap": "every", "kota": "city", "punya": "has", "terminal": "terminal", "kayak": "like", "gini": "this",
        "aku": "I", "suka": "like", "banget": "very much", "suasananya": "the atmosphere", "walau": "even though", "gerimis": "drizzle", "begini": "like this",
        "rasanya": "it feels", "kayak": "like", "perjalanan baru": "a new journey", "mau": "is about to", "dimulai": "begin",
        "hindari": "avoid", "teks": "text", "di layar": "on screen", "subtitel": "subtitles", "tulisan": "writing", "di video": "in the video",
        "logo": "logos", "distorsi": "distortion", "artefak": "artifacts", "anomali": "anomalies", "wajah ganda": "double faces",
        "anggota badan": "limbs", "cacat": "deformed", "tangan": "hands", "tidak normal": "abnormal", "orang tambahan": "extra people",
        "objek": "objects", "mengganggu": "disturbing", "kualitas rendah": "low quality", "buram": "blurry", "robotik": "robotic", "pecah": "broken"
    };

    function pseudoTranslate(text) {
        let translatedText = ` ${text.toLowerCase().replace(/[.,]/g, ' ')} `;
        for (const [id, en] of Object.entries(contentTranslations)) {
            const regex = new RegExp(` ${id} `, 'g');
            translatedText = translatedText.replace(regex, ` ${en} `);
        }
        return translatedText.trim().replace(/\b[a-zA-Z]/g, char => char.toUpperCase()); // Capitalize first letter of each word
    }

    generateBtn.addEventListener('click', () => {
        const judul = document.getElementById('judul').value;
        const karakter = document.getElementById('karakter').value;
        const suara = document.getElementById('suara').value;
        const aksi = document.getElementById('aksi').value;
        const ekspresi = document.getElementById('ekspresi').value;
        const latar = document.getElementById('latar').value;
        const visual = document.getElementById('visual').value;
        const kamera = document.getElementById('kamera').value;
        const pencahayaan = document.getElementById('pencahayaan').value;
        const suasana = document.getElementById('suasana').value;
        const ambience = document.getElementById('ambience').value;
        const dialog = document.getElementById('dialog').value;
        const negatif = document.getElementById('negatif').value;

        const promptID = `
[JUDUL SCENE: ${judul}]
[DESKRIPSI KARAKTER INTI]
${karakter}
[DETAIL SUARA KARAKTER]
${suara}
[AKSI KARAKTER]
${aksi}
[EKSPRESI KARAKTER]
${ekspresi}
[LATAR TEMPAT & WAKTU]
${latar}
[DETAIL VISUAL TAMBAHAN]
Gerakan Kamera: ${kamera}
Pencahayaan: ${pencahayaan}
Gaya Video/Art Style: ${visual}
[SUASANA KESELURUHAN]
${suasana}
[SUARA LINGKUNGAN (AMBIENCE)]
${ambience}
[DIALOG KARAKTER]
${dialog}
[NEGATIVE PROMPT]
${negatif}
        `.trim();

        document.getElementById('output-id').value = promptID;
        
        const promptEN = `
[SCENE TITLE: ${pseudoTranslate(judul)}]
[CORE CHARACTER DESCRIPTION]
${pseudoTranslate(karakter)}
[CHARACTER VOICE DETAILS]
${pseudoTranslate(suara)}
[CHARACTER ACTION]
${pseudoTranslate(aksi)}
[CHARACTER EXPRESSION]
${pseudoTranslate(ekspresi)}
[SETTING & TIME]
${pseudoTranslate(latar)}
[ADDITIONAL VISUAL DETAILS]
Camera Movement: ${kamera}
Lighting: ${pseudoTranslate(pencahayaan)}
Video/Art Style: ${visual}
[OVERALL ATMOSPHERE]
${pseudoTranslate(suasana)}
[ENVIRONMENTAL SOUND (AMBIENCE)]
${pseudoTranslate(ambience)}
[CHARACTER DIALOGUE]
${dialog} 
[NEGATIVE PROMPT]
${pseudoTranslate(negatif)}
        `.trim();

        document.getElementById('output-en').value = promptEN;
    });

    changeTitleBtn.addEventListener('click', () => {
        if (newTitleInput.value) {
            mainTitle.textContent = newTitleInput.value;
        }
    });

    changeStyleBtn.addEventListener('click', () => {
        const colors = newColorInput.value.split(',').map(c => c.trim());
        if (colors.length === 3) {
            document.documentElement.style.setProperty('--primary-color', colors[0]);
            document.documentElement.style.setProperty('--button-bg', colors[0]);
            document.documentElement.style.setProperty('--heading-color', colors[0]);
            
            document.documentElement.style.setProperty('--background-color', colors[1]);
            document.documentElement.style.setProperty('--text-color', colors[2]);

            document.documentElement.style.setProperty('--button-text', colors[1]);
            document.documentElement.style.setProperty('--secondary-color', lightenDarkenColor(colors[0], 20));
        } else {
            alert("Silakan masukkan 3 warna yang dipisahkan koma (contoh: #007bff, #ffffff, #333333)");
        }
    });

    function lightenDarkenColor(col, amt) {
        let usePound = false;
        if (col[0] == "#") {
            col = col.slice(1);
            usePound = true;
        }
        let num = parseInt(col, 16);
        let r = (num >> 16) + amt;
        if (r > 255) r = 255;
        else if (r < 0) r = 0;
        let b = ((num >> 8) & 0x00FF) + amt;
        if (b > 255) b = 255;
        else if (b < 0) b = 0;
        let g = (num & 0x0000FF) + amt;
        if (g > 255) g = 255;
        else if (g < 0) g = 0;
        return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16).padStart(6, '0');
    }
});

function fillForm(data) {
    for (const id in data) {
        if (document.getElementById(id)) {
            document.getElementById(id).value = data[id];
        }
    }
}

const stories = [
    {
        'judul-scene': 'Pasar Terapung di Pagi Hari',
        'deskripsi-karakter': 'Seorang pedagang wanita paruh baya dari suku Banjar, usia 45 tahun. Perawakan/Bentuk Tubuh: gempal, tinggi 160cm. Warna kulit: kuning langsat. Rambut: panjang disanggul rapi, ditutupi caping (topi petani). Wajah: bulat dengan senyum tulus, mata sedikit sipit, ada kerutan di sudut mata yang menunjukkan pengalamannya. Pakaian: mengenakan baju kurung khas Banjar berwarna cerah (misal: hijau toska) dengan motif kembang, dan celana panjang longgar.',
        'detail-suara': 'Suara serak-serak basah, khas ibu-ibu. Nada: alto. Timbre: hangat dan ramah. Aksen/Logat: logat Banjar yang kental dan otentik. Cara Berbicara: tempo lambat, jelas, sering menggunakan perumpamaan lokal.',
        'aksi-karakter': 'Mendayung perahu kecil (jukung) yang penuh dengan buah-buahan dan sayuran segar, menawarkan dagangannya kepada perahu lain yang lewat.',
        'ekspresi-karakter': 'Ekspresi wajah sabar dan ceria, sesekali tertawa kecil saat tawar-menawar dengan pembeli.',
        'latar-tempat': 'Latar tempat: di tengah sungai Martapura, Banjarmasin. Puluhan perahu jukung lainnya saling berdekatan, menciptakan suasana pasar yang ramai di atas air. Waktu: pagi hari sekitar jam 6:30, matahari baru terbit memancarkan cahaya keemasan.',
        'gerakan-kamera': 'Dolly Out',
        'detail-visual': 'Pencahayaan: cahaya pagi yang lembut, menciptakan bayangan panjang di atas air. Gaya Video/Art Style: dokumenter naturalistik. Kualitas Visual: Resolusi 4K.',
        'suasana': 'Suasana damai namun sibuk, penuh dengan aktivitas perdagangan tradisional yang unik dan otentik.',
        'suara-lingkungan': 'SOUND: suara riak air saat dayung bergerak, teriakan para pedagang yang saling bersahutan, suara tawar-menawar, dan kicauan burung dari pinggir sungai.',
        'dialog-karakter': 'DIALOG dalam Bahasa Indonesia (logat Banjar): "Ayu, ayu, dipilih buahnya... Manis-manis nah, hanyar dipatik pada kabunnya."',
        'negative-prompt': 'Hindari: perahu modern, jembatan beton, bangunan tinggi, sampah di sungai, distorsi, artefak, anomali, wajah ganda, kualitas rendah, buram, glitch, suara robotik.'
    },
    {
        'judul-scene': 'Penjaga Mercusuar di Pulau Terpencil',
        'deskripsi-karakter': 'Seorang pria tua berusia 65 tahun, keturunan Bugis. Perawakan/Bentuk Tubuh: kurus tapi tegap, tinggi 170cm. Warna kulit: sawo matang gelap karena terbakar matahari. Rambut: putih dan sudah menipis, janggut putih tipis. Wajah: penuh kerutan, tatapan mata tajam dan bijaksana. Pakaian: kemeja flanel lusuh berwarna biru tua, celana kargo, dan sandal jepit kulit.',
        'detail-suara': 'Suara berat dan dalam (baritone). Timbre: tenang dan berwibawa. Aksen/Logat: logat Indonesia timur yang khas. Cara Berbicara: tempo lambat, berbicara seperlunya dengan kalimat-kalimat pendek yang penuh makna.',
        'aksi-karakter': 'Duduk di teras luar mercusuar, membersihkan lensa lentera tua dengan kain lap sambil menatap ke arah laut lepas.',
        'ekspresi-karakter': 'Ekspresi tenang, damai, dan sedikit melankolis, menunjukkan keakraban dengan kesendirian dan laut.',
        'latar-tempat': 'Latar tempat: di sebuah mercusuar tua yang berdiri kokoh di atas tebing karang sebuah pulau kecil di Laut Flores. Waktu: senja hari, matahari terbenam menciptakan siluet jingga di cakrawala.',
        'gerakan-kamera': 'Crane Up',
        'detail-visual': 'Gerakan Kamera: Crane shot perlahan naik, menunjukkan karakter yang semakin kecil dengan latar belakang mercusuar dan lautan luas. Pencahayaan: cahaya keemasan dari matahari terbenam (golden hour). Gaya Video/Art Style: puitis dan sinematik. Kualitas Visual: Resolusi 4K, anamorphic lens flare.',
        'suasana': 'Suasana sunyi, kontemplatif, dengan rasa isolasi yang damai dan keindahan alam yang megah.',
        'suara-lingkungan': 'SOUND: suara deburan ombak yang menghantam karang, tiupan angin laut, dan suara burung camar dari kejauhan.',
        'dialog-karakter': 'DIALOG dalam Bahasa Indonesia: Karakter bergumam pada dirinya sendiri: "Lampu ini... sama sepertiku. Tua, tapi masih harus jadi petunjuk jalan pulang."',
        'negative-prompt': 'Hindari: kapal pesiar, turis, sinyal telepon, bangunan modern, anomali visual, glitch, suara bising, dialog yang tidak perlu.'
    }
];

let currentStoryIndex = 0;

function generateNewStory() {
    currentStoryIndex = (currentStoryIndex + 1) % stories.length;
    fillForm(stories[currentStoryIndex]);
    generatePrompts();
}

function generateNextScene() {
    const currentCharacter = {
        'deskripsi-karakter': document.getElementById('deskripsi-karakter').value,
        'detail-suara': document.getElementById('detail-suara').value
    };

    if (!currentCharacter['deskripsi-karakter']) {
        alert("Silakan buat atau isi data karakter terlebih dahulu untuk membuat scene lanjutan.");
        return;
    }

    const nextScenes = [
        {
            'judul-scene': document.getElementById('judul-scene').value + ' - Adegan 2',
            'aksi-karakter': 'Karakter sekarang duduk di dalam warung kopi sederhana, menyesap kopi hitam panas.',
            'ekspresi-karakter': 'Ekspresi lebih santai dan reflektif, menatap ke luar jendela yang berembun.',
            'latar-tempat': 'Di dalam warung kopi kecil dekat lokasi sebelumnya. Ada beberapa pengunjung lain. Waktu: 30 menit setelah adegan pertama.',
            'gerakan-kamera': 'Zoom In',
            'detail-visual': 'Pencahayaan: cahaya lampu pijar yang hangat di dalam warung, kontras dengan suasana dingin di luar. Gaya Video/Art Style: sama seperti sebelumnya. Kualitas Visual: Resolusi 4K.',
            'suasana': 'Suasana lebih tenang dan intim, fokus pada momen istirahat karakter.',
            'suara-lingkungan': 'SOUND: suara orang mengobrol pelan, denting cangkir, dan suara hujan yang kini lebih deras di atap seng.',
            'dialog-karakter': 'DIALOG dalam Bahasa Indonesia: Karakter berkata pelan, "Hujan selalu punya cara untuk membuat kopi terasa lebih nikmat."',
        },
        {
            'judul-scene': document.getElementById('judul-scene').value + ' - Adegan 2',
            'aksi-karakter': 'Karakter menemukan sebuah toko buku tua dan masuk ke dalamnya, menyusuri lorong-lorong sempit yang penuh buku.',
            'ekspresi-karakter': 'Ekspresi penasaran dan gembira, seperti menemukan harta karun. Jari-jarinya menyentuh punggung buku-buku tua.',
            'latar-tempat': 'Di dalam toko buku bekas yang remang-remang dan sedikit berdebu. Waktu: Satu jam setelah adegan pertama.',
            'gerakan-kamera': 'Handheld',
            'detail-visual': 'Pencahayaan: Sinar matahari masuk dari jendela berdebu, menciptakan efek "god rays". Gaya Video/Art Style: sama. Kualitas Visual: Resolusi 4K.',
            'suasana': 'Suasana magis dan nostalgik, ketenangan di tengah lautan cerita.',
            'suara-lingkungan': 'SOUND: suara lantai kayu yang berderit, desir halaman buku yang dibalik, dan keheningan yang nyaman.',
            'dialog-karakter': 'DIALOG dalam Bahasa Indonesia: Karakter berbisik: "Setiap buku punya nyawanya sendiri... menunggu untuk ditemukan."',
        }
    ];

    const nextSceneData = nextScenes[Math.floor(Math.random() * nextScenes.length)];
    
    // Fill only the changed fields
    document.getElementById('judul-scene').value = nextSceneData['judul-scene'];
    document.getElementById('aksi-karakter').value = nextSceneData['aksi-karakter'];
    document.getElementById('ekspresi-karakter').value = nextSceneData['ekspresi-karakter'];
    document.getElementById('latar-tempat').value = nextSceneData['latar-tempat'];
    document.getElementById('gerakan-kamera').value = nextSceneData['gerakan-kamera'];
    document.getElementById('detail-visual').value = nextSceneData['detail-visual'];
    document.getElementById('suasana').value = nextSceneData['suasana'];
    document.getElementById('suara-lingkungan').value = nextSceneData['suara-lingkungan'];
    document.getElementById('dialog-karakter').value = nextSceneData['dialog-karakter'];

    generatePrompts();
}

function generatePrompts() {
    const getVal = (id) => document.getElementById(id).value;

    const visualDetails = `Gerakan Kamera: ${getVal('gerakan-kamera')}. ${getVal('detail-visual')}`;

    const promptData = {
        judul: getVal('judul-scene'),
        deskripsi: getVal('deskripsi-karakter'),
        suara: getVal('detail-suara'),
        aksi: getVal('aksi-karakter'),
        ekspresi: getVal('ekspresi-karakter'),
        latar: getVal('latar-tempat'),
        visual: visualDetails,
        suasana: getVal('suasana'),
        ambience: getVal('suara-lingkungan'),
        dialog: getVal('dialog-karakter'),
        negatif: getVal('negative-prompt')
    };
    
    const indonesiaPrompt = `PROMPT KARAKTER KONSISTEN VEO3

[JUDUL SCENE: ${promptData.judul}]
[DESKRIPSI KARAKTER INTI]
${promptData.deskripsi}
[DETAIL SUARA KARAKTER]
${promptData.suara}
[AKSI KARAKTER]
${promptData.aksi}
[EKSPRESI KARAKTER]
${promptData.ekspresi}
[LATAR TEMPAT & WAKTU]
${promptData.latar}
[DETAIL VISUAL TAMBAHAN]
${promptData.visual}
[SUASANA KESELURUHAN]
${promptData.suasana}
[SUARA LINGKUNGAN (AMBIENCE)]
${promptData.ambience}
[DIALOG KARAKTER]
${promptData.dialog}
[NEGATIVE PROMPT]
${promptData.negatif}`;

    const englishPrompt = `<p><strong>CONSISTENT CHARACTER PROMPT VEO3</strong></p>
<p><strong>[SCENE TITLE: ${promptData.judul}]</strong></p>
<p><strong>[CORE CHARACTER DESCRIPTION]</strong><br>${promptData.deskripsi}</p>
<p><strong>[CHARACTER VOICE DETAILS]</strong><br>${promptData.suara}</p>
<p><strong>[CHARACTER ACTION]</strong><br>${promptData.aksi}</p>
<p><strong>[CHARACTER EXPRESSION]</strong><br>${promptData.ekspresi}</p>
<p><strong>[SETTING & TIME]</strong><br>${promptData.latar}</p>
<p><strong>[ADDITIONAL VISUAL DETAILS]</strong><br>Camera Movement: ${getVal('gerakan-kamera')}. ${getVal('detail-visual')}</p>
<p><strong>[OVERALL ATMOSPHERE]</strong><br>${promptData.suasana}</p>
<p><strong>[ENVIRONMENTAL SOUND (AMBIENCE)]</strong><br>${promptData.ambience}</p>
<p><strong>[CHARACTER DIALOGUE]</strong><br>${promptData.dialog}</p>
<p><strong>[NEGATIVE PROMPT]</strong><br>${promptData.negatif}</p>`;

    document.getElementById('output-indonesia').value = indonesiaPrompt;
    document.getElementById('output-english').innerHTML = englishPrompt;
}

function copyToClipboard(elementId, isTextarea) {
    let textToCopy;
    const element = document.getElementById(elementId);
    if(isTextarea) {
        textToCopy = element.value;
    } else {
        textToCopy = element.innerText;
    }

    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Prompt disalin ke clipboard!');
    }).catch(err => {
        console.error('Gagal menyalin teks: ', err);
        alert('Gagal menyalin prompt.');
    });
} 