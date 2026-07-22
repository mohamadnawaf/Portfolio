import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

interface EducationProps { dark: boolean; }

export default function Education({ dark }: EducationProps) {
  return (
    <section
      id="education"
      className={`py-20 sm:py-28 ${dark ? 'bg-dark-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className={`section-heading text-3xl sm:text-4xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
            Edu<span className="gradient-text">cation</span>
          </h2>
          <p className={`mt-4 text-base ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            My academic background
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline item */}
          <div className="reveal timeline-item relative pl-12 pb-8">
            <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center ring-4 ring-primary-500/20">
              <GraduationCap size={16} className="text-white" />
            </div>

            <div className={`p-6 rounded-2xl border ${
              dark ? 'bg-dark-800 border-gray-800' : 'bg-white border-gray-100 shadow-sm'
            }`}>
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>
                    Higher National Diploma in Information Technology
                  </h3>
                  <p className="text-sm text-primary-500 font-medium">HNDIT</p>
                </div>
                <span className={`tech-tag ${dark ? 'bg-primary-500/15 text-primary-400' : 'bg-primary-50 text-primary-600'}`}>
                  In Progress
                </span>
              </div>

              <div className="space-y-2 text-sm">
                <div className={`flex items-center gap-2 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                  <MapPin size={14} className="text-primary-500 flex-shrink-0" />
                  <span>Sri Lanka Institute of Advanced Technological Education (SLIATE)</span>
                </div>
                <div className={`flex items-center gap-2 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                  <Calendar size={14} className="text-primary-500 flex-shrink-0" />
                  <span>Expected Graduation: 2026</span>
                </div>
              </div>

              <p className={`mt-4 text-sm leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                Comprehensive program covering software development, database management,
                web technologies, software engineering, and project management. Building strong
                foundations in both frontend and backend development.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {['Programming', 'Databases', 'Web Development', 'Software Engineering', 'Networking'].map(t => (
                  <span key={t} className={`tech-tag ${dark ? 'bg-gray-700/50 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Secondary education */}
          <div className="reveal timeline-item relative pl-12">
            <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center ring-4 ring-primary-500/20">
              <Award size={16} className="text-white" />
            </div>

            <div className={`p-6 rounded-2xl border ${
              dark ? 'bg-dark-800 border-gray-800' : 'bg-white border-gray-100 shadow-sm'
            }`}>
              <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>
                G.C.E. Advanced Level
              </h3>
              <p className="text-sm text-primary-500 font-medium mt-1">Physical Science Stream</p>
              <div className={`flex items-center gap-2 mt-2 text-sm ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                <Calendar size={14} className="text-primary-500" />
                <span>Completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
