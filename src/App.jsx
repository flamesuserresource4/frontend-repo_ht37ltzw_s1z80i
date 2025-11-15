import React from 'react'
import Spline from '@splinetool/react-spline'
import { Mail, Github, Linkedin, MapPin, Briefcase, Code2, Cpu, Palette } from 'lucide-react'

const Section = ({ id, title, children, icon: Icon }) => (
  <section id={id} className="max-w-6xl mx-auto px-6 py-20">
    <div className="flex items-center gap-3 mb-8">
      {Icon && (
        <div className="h-9 w-9 rounded-full bg-black/5 flex items-center justify-center text-gray-700">
          <Icon size={18} />
        </div>
      )}
      <h2 className="text-2xl font-semibold tracking-tight text-gray-900">{title}</h2>
    </div>
    <div className="text-gray-700 leading-relaxed">
      {children}
    </div>
  </section>
)

function Navbar() {
  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]
  return (
    <div className="fixed top-0 inset-x-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight text-gray-900">Ahmad Chikal</a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-gray-900 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="text-sm font-medium px-3 py-1.5 rounded-full bg-gray-900 text-white hover:bg-black transition-colors">
          Hire Me
        </a>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <header className="relative h-[78vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/60 to-white pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto h-full px-6 flex items-end pb-12">
        <div className="bg-white/60 backdrop-blur rounded-2xl p-6 sm:p-8 border border-black/5 shadow-sm">
          <p className="text-sm uppercase tracking-widest text-gray-600 mb-2">Portfolio</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            Ahmad Chikal
          </h1>
          <p className="mt-3 text-gray-700 max-w-2xl">
            Fresh Graduate S1 Informatika — Universitas Teknokrat Indonesia. Minat pada Web Development, Data Processing, IT Support, dan Desain 3D.
          </p>
        </div>
      </div>
    </header>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />

      <main className="space-y-2">
        <Section id="about" title="About Me" icon={MapPin}>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <p>
                Saya seorang fresh graduate S1 Informatika dari Universitas Teknokrat Indonesia yang cepat belajar, mampu problem solving, senang bekerja dalam tim, dan kreatif. Fokus saya adalah membangun solusi digital yang fungsional dan rapi dengan perhatian pada detail.
              </p>
              <p>
                Ketertarikan saya meliputi pengembangan web, pengolahan data, dukungan IT, serta desain 3D. Saya antusias untuk berkolaborasi dalam proyek yang menantang dan tumbuh bersama tim.
              </p>
            </div>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-gray-50 border border-black/5">
                <div className="text-sm text-gray-600">Pendidikan</div>
                <div className="font-medium">S1 Informatika</div>
                <div className="text-sm text-gray-600">Universitas Teknokrat Indonesia</div>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-black/5">
                <div className="text-sm text-gray-600">Karakter</div>
                <ul className="mt-1 text-sm list-disc list-inside space-y-1">
                  <li>cepat belajar</li>
                  <li>problem solving</li>
                  <li>teamwork</li>
                  <li>kreatif</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <Section id="skills" title="Skills" icon={Code2}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Web Development', icon: Code2, items: ['HTML', 'CSS / Tailwind', 'JavaScript', 'React'] },
              { title: 'Data Processing', icon: Cpu, items: ['Python', 'Pandas', 'Excel', 'SQL'] },
              { title: 'IT Support', icon: Briefcase, items: ['Troubleshooting', 'Networking dasar', 'Hardware/Software'] },
              { title: 'Desain 3D', icon: Palette, items: ['Blender', '3D Asset', 'Rendering'] },
            ].map((card, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-gray-50 border border-black/5 hover:bg-white transition-colors">
                <div className="flex items-center gap-2 mb-2 text-gray-800">
                  <card.icon size={18} />
                  <div className="font-medium">{card.title}</div>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  {card.items.map((it, i) => (
                    <li key={i}>• {it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience" icon={Briefcase}>
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-gray-50 border border-black/5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <div className="font-medium">Internship / Project-based Learning</div>
                  <div className="text-sm text-gray-600">Bidang terkait Web / Data / IT Support</div>
                </div>
                <div className="text-sm text-gray-600">2023–2024</div>
              </div>
              <ul className="mt-3 text-sm text-gray-700 list-disc list-inside space-y-1">
                <li>Mengembangkan komponen antarmuka yang rapi dan responsif.</li>
                <li>Mengelola data sederhana untuk pelaporan menggunakan spreadsheet/skrip.</li>
                <li>Membantu troubleshooting perangkat dan jaringan dasar.</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="projects" title="Projects" icon={Palette}>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                name: 'Personal Website',
                desc: 'Situs portofolio minimalis untuk menampilkan profil, skill, dan proyek.',
                tags: ['React', 'Tailwind'],
              },
              {
                name: 'Data Dashboard',
                desc: 'Dasbor sederhana untuk visualisasi data dan insight dasar.',
                tags: ['Python', 'Pandas', 'Chart'],
              },
              {
                name: 'IT Support Toolkit',
                desc: 'Kumpulan skrip dan panduan troubleshooting cepat.',
                tags: ['Docs', 'Scripting'],
              },
              {
                name: '3D Concept Art',
                desc: 'Eksplorasi aset 3D dan rendering untuk ide produk.',
                tags: ['Blender', '3D'],
              },
            ].map((p, i) => (
              <div key={i} className="group relative p-5 rounded-xl bg-gray-50 border border-black/5 hover:bg-white transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-medium text-gray-900">{p.name}</div>
                    <p className="text-sm text-gray-700 mt-1">{p.desc}</p>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t, j) => (
                    <span key={j} className="text-xs px-2 py-1 rounded-full bg-black/5 text-gray-700">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact" icon={Mail}>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="p-6 rounded-xl bg-gray-50 border border-black/5">
                <p className="text-gray-700">Tertarik bekerja sama atau ingin berdiskusi? Silakan hubungi saya.</p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <a href="mailto:ahmadchikal@example.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white text-sm hover:bg-black transition-colors">
                    <Mail size={16} /> Kirim Email
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 text-sm text-gray-800 hover:bg-gray-100">
                    <Github size={16} /> GitHub
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 text-sm text-gray-800 hover:bg-gray-100">
                    <Linkedin size={16} /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white border border-black/5">
                <div className="text-sm text-gray-600">Lokasi</div>
                <div className="font-medium">Indonesia</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-black/5">
                <div className="text-sm text-gray-600">Ketersediaan</div>
                <div className="font-medium">Siap bekerja / freelance</div>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-black/5 mt-10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between text-sm text-gray-600">
          <span>© {new Date().getFullYear()} Ahmad Chikal</span>
          <a href="#" className="hover:text-gray-900">Back to top</a>
        </div>
      </footer>
    </div>
  )
}
