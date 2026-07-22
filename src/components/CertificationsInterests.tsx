import { Award, Heart, Activity } from 'lucide-react';

interface ExtraProps { dark: boolean; }

const CERTIFICATIONS = [
  { title: 'Web Development Fundamentals', issuer: 'Online Course', year: '2024' },
  { title: 'PHP & Laravel Basics',          issuer: 'Self-study',    year: '2024' },
  { title: 'Database Management (MySQL)',   issuer: 'HNDIT',         year: '2024' },
  { title: 'Version Control with Git',      issuer: 'Self-study',    year: '2023' },
];

const INTERESTS = [
  { icon: '⚙️', label: 'Backend Development' },
  { icon: '🌐', label: 'Web Development' },
  { icon: '🏗️', label: 'Software Engineering' },
  { icon: '🧪', label: 'Software Testing' },
  { icon: '🚀', label: 'Learning New Technologies' },
];

const ACTIVITIES = [
  { icon: '🤝', label: 'Team Collaboration' },
  { icon: '🧩', label: 'Problem Solving' },
  { icon: '🎓', label: 'University Projects' },
  { icon: '📚', label: 'Self-Learning' },
  { icon: '💻', label: 'Coding Practice' },
];

export default function CertificationsInterests({ dark }: ExtraProps) {
  return (
    <>
      {/* Certifications */}
      <section
        id="certifications"
        className={`py-20 sm:py-28 ${dark ? 'bg-dark-800' : 'bg-white'}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className={`section-heading text-3xl sm:text-4xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
              Certifi<span className="gradient-text">cations</span>
            </h2>
            <p className={`mt-4 text-base ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
              Courses and credentials I've earned
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CERTIFICATIONS.map((c, i) => (
              <div
                key={c.title}
                className={`reveal p-5 rounded-2xl border transition-all hover:scale-[1.03] ${
                  dark
                    ? 'bg-dark-700 border-gray-800 hover:border-primary-500/50'
                    : 'bg-gray-50 border-gray-100 hover:border-primary-500/50 shadow-sm hover:shadow-md'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-3">
                  <Award size={18} className="text-white" />
                </div>
                <h3 className={`text-sm font-semibold leading-snug mb-1 ${dark ? 'text-white' : 'text-gray-900'}`}>
                  {c.title}
                </h3>
                <p className={`text-xs ${dark ? 'text-gray-400' : 'text-gray-500'}`}>{c.issuer}</p>
                <p className="text-xs font-mono text-primary-500 mt-1">{c.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className={`py-20 sm:py-28 ${dark ? 'bg-dark-900' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className={`section-heading text-3xl sm:text-4xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
              Inter<span className="gradient-text">ests</span>
            </h2>
            <p className={`mt-4 text-base ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
              What I'm passionate about
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {INTERESTS.map((it, i) => (
              <div
                key={it.label}
                className={`interest-card reveal p-5 rounded-2xl border text-center ${
                  dark
                    ? 'bg-dark-800 border-gray-800 hover:border-primary-500/50'
                    : 'bg-white border-gray-100 hover:border-primary-500/50 shadow-sm hover:shadow-md'
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="text-3xl mb-2">{it.icon}</div>
                <p className={`text-sm font-medium ${dark ? 'text-gray-200' : 'text-gray-700'}`}>
                  {it.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className={`py-20 sm:py-28 ${dark ? 'bg-dark-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className={`section-heading text-3xl sm:text-4xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
              Activ<span className="gradient-text">ities</span>
            </h2>
            <p className={`mt-4 text-base ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
              How I spend my time
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {ACTIVITIES.map((a, i) => (
              <div
                key={a.label}
                className={`interest-card reveal p-5 rounded-2xl border text-center ${
                  dark
                    ? 'bg-dark-700 border-gray-800 hover:border-accent-500/50'
                    : 'bg-gray-50 border-gray-100 hover:border-accent-500/50 shadow-sm hover:shadow-md'
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="text-3xl mb-2">{a.icon}</div>
                <p className={`text-sm font-medium ${dark ? 'text-gray-200' : 'text-gray-700'}`}>
                  {a.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
