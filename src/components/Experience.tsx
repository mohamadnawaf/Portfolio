import { Briefcase, Users, Lightbulb } from 'lucide-react';

interface ExperienceProps { dark: boolean; }

export default function Experience({ dark }: ExperienceProps) {
  const items = [
    {
      icon: Briefcase,
      title: 'Academic Projects',
      period: '2023 — Present',
      org: 'HNDIT Coursework',
      points: [
        'Built full-stack web applications using PHP, Laravel, and MySQL as part of coursework.',
        'Developed a C# inventory management desktop application with a layered architecture.',
        'Created responsive frontends using HTML, CSS, JavaScript, and Bootstrap.',
      ],
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      period: '2023 — Present',
      org: 'Group Projects & Hackathons',
      points: [
        'Collaborated with teammates using Git & GitHub for version control and code review.',
        'Worked in Agile-style teams to plan, design, and deliver academic software projects.',
        'Communicated effectively across roles — frontend, backend, and documentation.',
      ],
    },
    {
      icon: Lightbulb,
      title: 'Self-Learning & Practice',
      period: 'Ongoing',
      org: 'Personal Development',
      points: [
        'Continuously learning backend frameworks (Laravel) and database design patterns.',
        'Practicing coding challenges and small projects on GitHub to sharpen problem-solving.',
        'Exploring software testing principles and clean code practices.',
      ],
    },
  ];

  return (
    <section
      id="experience"
      className={`py-20 sm:py-28 ${dark ? 'bg-dark-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className={`section-heading text-3xl sm:text-4xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
            Experi<span className="gradient-text">ence</span>
          </h2>
          <p className={`mt-4 text-base ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            My journey so far
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`reveal p-6 rounded-2xl border ${
                dark ? 'bg-dark-800 border-gray-800' : 'bg-white border-gray-100 shadow-sm'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <item.icon size={22} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>
                      {item.title}
                    </h3>
                    <span className={`text-xs font-mono px-2 py-1 rounded ${dark ? 'bg-dark-600 text-gray-400' : 'bg-gray-100 text-gray-500'}`}>
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm text-primary-500 font-medium mb-3">{item.org}</p>
                  <ul className="space-y-2">
                    {item.points.map((pt, j) => (
                      <li key={j} className={`flex items-start gap-2 text-sm ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                        <span className="text-primary-500 mt-1">▹</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
