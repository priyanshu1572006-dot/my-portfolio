import { BarChart3, Database, Code2, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Data Visualization',
      icon: BarChart3,
      skills: ['Power BI', 'Tableau', 'Excel', 'Matplotlib', 'Seaborn'],
      color: 'bg-blue-50 text-blue-600 border-blue-200',
    },
    {
      title: 'Data Analysis',
      icon: Database,
      skills: ['SQL', 'Python', 'R', 'Statistical Analysis', 'Data Mining'],
      color: 'bg-purple-50 text-purple-600 border-purple-200',
    },
    {
      title: 'Programming',
      icon: Code2,
      skills: ['Python', 'SQL', 'DAX', 'M Language', 'VBA'],
      color: 'bg-green-50 text-green-600 border-green-200',
    },
    {
      title: 'Concepts',
      icon: Brain,
      skills: ['ETL', 'Data Modeling', 'Business Intelligence', 'KPI Tracking', 'Reporting'],
      color: 'bg-orange-50 text-orange-600 border-orange-200',
    },
  ];

  return (
    <section id="skills" className="py-32 px-6 bg-muted/30">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            A comprehensive toolkit for turning data into actionable insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-background border border-border rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-lg border ${category.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{category.title}</h3>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-muted text-sm font-medium rounded-lg border border-border hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
