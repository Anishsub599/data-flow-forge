import { Database, Cloud, Code, BarChart3 } from "lucide-react";

const skillCategories = [
  {
    title: "Data Engineering",
    icon: Database,
    color: "primary",
    skills: ["ETL/ELT Pipelines", "Data Modeling", "Stream Processing", "Data Quality"],
  },
  {
    title: "Databases & Warehousing",
    icon: Database,
    color: "secondary",
    skills: ["PostgreSQL", "Snowflake", "BigQuery", "Data Vault", "Star Schema"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "accent",
    skills: ["AWS/Azure/GCP", "Docker", "Kubernetes", "Terraform", "CI/CD"],
  },
  {
    title: "Analytics & Visualization",
    icon: BarChart3,
    color: "primary",
    skills: ["Python", "SQL", "dbt", "Tableau", "Power BI", "Looker"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card p-8 rounded-2xl hover:neon-glow transition-all group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-3 rounded-lg bg-${category.color}/10 border border-${category.color}/30`}>
                  <category.icon className={`w-8 h-8 text-${category.color} group-hover:animate-pulse-glow`} />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-muted/50 rounded-lg text-sm font-medium text-foreground/90 
                             border border-border hover:border-primary/50 hover:bg-primary/5 
                             transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Progress bars section - optional visual enhancement */}
        <div className="mt-16 glass-card p-8 rounded-2xl animate-fade-in [animation-delay:600ms]">
          <h3 className="text-2xl font-bold mb-8 text-center neon-text">Core Competencies</h3>
          <div className="space-y-6">
            {[
              { name: "Data Pipeline Development", level: 95 },
              { name: "Cloud Architecture", level: 90 },
              { name: "Database Optimization", level: 92 },
              { name: "Real-time Processing", level: 88 },
            ].map((competency, index) => (
              <div key={competency.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-foreground">{competency.name}</span>
                  <span className="text-primary">{competency.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 animate-pulse-glow"
                    style={{ 
                      width: `${competency.level}%`,
                      animationDelay: `${index * 200}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
