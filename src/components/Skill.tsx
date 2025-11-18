interface Skill {
    name: string;
    years: number;
    width: string;
    color: string;
  }
  
  interface SkillSectionProps {
    title: string;
    label: string;
    skills: Skill[];
    barsRef: React.MutableRefObject<(HTMLDivElement | null)[]>;
    startIndex: number;
  }
  
  export default function SkillSection({ title, label, skills, barsRef, startIndex }: SkillSectionProps) {
    return (
      <div className='flex-1 min-w-100vw h-screen flex flex-col items-center justify-center px-20'>
        <h1 className='text-gray-700 text-6xl font-bold mb-16'>{title}</h1>
        <div className='w-full max-w-5xl'>
          <div className='relative'>
            <div className='absolute -left-32 top-1/2 -translate-y-1/2 -rotate-90'>
              <span className='text-xl font-semibold text-gray-600'>{label}</span>
            </div>
            <div className='absolute -bottom-12 left-1/2 -translate-x-1/2'>
              <span className='text-xl font-semibold text-gray-600'>Years of Experience</span>
            </div>
            <div className='space-y-6'>
              {skills.map((skill, index) => (
                <div key={skill.name} className='flex items-center gap-4'>
                  <div className='w-32 text-right'>
                    <span className='text-lg font-medium text-gray-700'>{skill.name}</span>
                  </div>
                  <div className='flex-1 relative h-10 bg-gray-100 rounded-r-lg overflow-hidden'>
                    <div 
                      ref={el => {barsRef.current[startIndex + index] = el}}
                      data-width={skill.width}
                      className={`absolute h-full bg-gradient-to-r ${skill.color} rounded-r-lg transition-all duration-300`}
                      style={{width: '0%'}}
                    ></div>
                    <span className='absolute right-3 top-1/2 -translate-y-1/2 text-white font-semibold z-10'>
                      {skill.years} {skill.years === 1 ? 'year' : 'years'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className='flex justify-between mt-4 px-32'>
              {[0, 1, 2, 3, 4, 5, 6].map(num => (
                <span key={num} className='text-sm text-gray-500'>{num}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }