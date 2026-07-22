import { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

const SKILLS: Skill[] = [
  { name: 'HTML',                    level: 90, icon: '🌐' },
  { name: 'CSS',                     level: 85, icon: '🎨' },
  { name: 'JavaScript',              level: 75, icon: '⚡' },
  { name: 'Bootstrap',               level: 85, icon: '🅱️' },
  { name: 'PHP',                     level: 80, icon: '🐘' },
  { name: 'C#',                      level: 70, icon: '🔵' },
  { name: 'MySQL',                   level: 80, icon: '🗄️' },
  { name: 'Software Testing',        level: 70, icon: '🧪' },
  { name: 'Git & GitHub',            level: 80, icon: '🔧' },
  { name: 'Responsive Web Design',   level: 85, icon: '📱' },
];

interface SkillsProps { dark: boolean; }

export default function Skills({ dark }: SkillsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            const bars = section.querySelectorAll('.skill-bar-fill');
            bars.forEach((bar, i) => {
              const target = (bar as HTMLElement).dataset.level;
              (bar as HTMLElement).style.setProperty('--target-width', `${target}%`);
              setTimeout(() => (bar as HTMLElement).classList.add('animated'), i * 100);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`py-20 sm:py-28 ${dark ? 'bg-dark-800' : 'bg-white'}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className={`section-heading text-3xl sm:text-4xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className={`mt-4 text-base ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
          {SKILLS.map((skill, i) => (
            <div
              key={skill.name}
              className="reveal"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{skill.icon}</span>
                  <span className={`text-sm font-semibold ${dark ? 'text-gray-200' : 'text-gray-700'}`}>
                    {skill.name}
                  </span>
                </div>
                <span className="text-xs font-mono font-semibold text-primary-500">
                  {skill.level}%
                </span>
              </div>
              <div className={`h-2 rounded-full overflow-hidden ${dark ? 'bg-dark-600' : 'bg-gray-100'}`}>
                <div
                  className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500"
                  data-level={skill.level}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
