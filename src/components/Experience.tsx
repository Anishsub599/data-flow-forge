import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Senior Data Engineer",
    organization: "Tech Corp",
    period: "2022 - Present",
    points: [
      "Architected and deployed cloud-native data pipelines processing 10TB+ daily",
      "Led migration of legacy ETL systems to modern ELT architecture using dbt and Snowflake",
      "Reduced data processing costs by 40% through query optimization and resource management",
    ],
  },
  {
    type: "work",
    title: "Data Engineer",
    organization: "Data Solutions Inc",
    period: "2020 - 2022",
    points: [
      "Developed real-time streaming pipelines using Kafka and Spark for IoT data ingestion",
      "Implemented data quality frameworks that improved accuracy by 25%",
      "Mentored junior engineers on best practices for data modeling and pipeline design",
    ],
  },
  {
    type: "work",
    title: "Junior Data Engineer",
    organization: "Analytics Startup",
    period: "2019 - 2020",
    points: [
      "Built and maintained ETL workflows using Python and Airflow",
      "Created data warehouse schemas supporting business intelligence needs",
      "Automated data validation processes reducing manual QA time by 60%",
    ],
  },
  {
    type: "education",
    title: "M.S. Computer Science",
    organization: "University Name",
    period: "2017 - 2019",
    points: [
      "Specialized in Big Data Systems and Distributed Computing",
      "Thesis: Optimizing Data Pipeline Performance in Cloud Environments",
    ],
  },
  {
    type: "education",
    title: "B.S. Computer Engineering",
    organization: "University Name",
    period: "2013 - 2017",
    points: [
      "Focus on Database Systems and Software Engineering",
      "Dean's List, GPA: 3.8/4.0",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Experience & Education
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center animate-fade-in ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <div className="w-4 h-4 rounded-full bg-primary neon-glow animate-pulse-glow" />
                </div>

                {/* Content */}
                <div className={`w-full md:w-[calc(50%-3rem)] ml-16 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-16" : "md:ml-16"
                }`}>
                  <div className="glass-card p-6 rounded-xl hover:neon-glow transition-all group">
                    <div className="flex items-start space-x-4">
                      <div className={`p-2 rounded-lg ${
                        exp.type === "work" 
                          ? "bg-primary/10 border border-primary/30" 
                          : "bg-secondary/10 border border-secondary/30"
                      }`}>
                        {exp.type === "work" ? (
                          <Briefcase className={`w-6 h-6 ${exp.type === "work" ? "text-primary" : "text-secondary"}`} />
                        ) : (
                          <GraduationCap className="w-6 h-6 text-secondary" />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground group-hover:neon-text transition-all">
                          {exp.title}
                        </h3>
                        <div className="flex items-center justify-between mt-1 mb-3">
                          <span className="text-primary font-medium">{exp.organization}</span>
                          <span className="text-sm text-muted-foreground">{exp.period}</span>
                        </div>
                        <ul className="space-y-2">
                          {exp.points.map((point, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-primary mr-2">▹</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
