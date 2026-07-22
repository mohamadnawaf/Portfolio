import { User, GraduationCap, Target, Code2, Briefcase } from 'lucide-react';

interface AboutProps { dark: boolean; }

export default function About({ dark }: AboutProps) {
  const cards = [
    {
      icon: User,
      title: 'Who I Am',
      text: 'A motivated HNDIT student passionate about web development and backend engineering. I enjoy building practical software, learning new technologies, and solving real-world problems through code.',
    },
    {
      icon: GraduationCap,
      title: 'Education',
      text: 'Higher National Diploma in Information Technology (HNDIT) at SLIATE. Strong foundation in programming, databases, web development, and software engineering principles.',
    },
    {
      icon: Target,
      title: 'Career Objective',
      text: 'To secure a software development internship where I can apply my PHP, Laravel, JavaScript, and MySQL skills, contribute to meaningful projects, and grow into a professional backend engineer.',
    },
  ];

  return (
    <section
      id="about"
      className={`py-20 sm:py-28 ${dark ? 'bg-dark-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className={`section-heading text-3xl sm:text-4xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
            About <span className="gradient-text">Me</span>
          </h2>
          <p className={`mt-4 text-base ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            Get to know me a little better
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className={`reveal p-6 rounded-2xl border transition-all hover:scale-[1.02] ${
                dark
                  ? 'bg-dark-800 border-gray-800 hover:border-primary-500/50'
                  : 'bg-white border-gray-100 hover:border-primary-500/50 shadow-sm hover:shadow-lg'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-4">
                <c.icon size={22} className="text-white" />
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${dark ? 'text-white' : 'text-gray-900'}`}>
                {c.title}
              </h3>
              <p className={`text-sm leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                {c.text}
              </p>
            </div>
          ))}
        </div>

        {/* Quick stats */}
        <div className="reveal mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: Code2,    label: 'Technologies', value: '10+' },
            { icon: Briefcase, label: 'Projects',     value: '5+' },
            { icon: GraduationCap, label: 'Diploma',  value: 'HNDIT' },
            { icon: Target,   label: 'Focus',         value: 'Backend' },
          ].map((s, i) => (
            <div
              key={s.label}
              className={`text-center p-4 rounded-xl border ${
                dark ? 'bg-dark-800/50 border-gray-800' : 'bg-white border-gray-100'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <s.icon size={20} className="mx-auto mb-2 text-primary-500" />
              <div className={`text-2xl font-bold gradient-text`}>{s.value}</div>
              <div className={`text-xs mt-1 ${dark ? 'text-gray-500' : 'text-gray-500'}`}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
