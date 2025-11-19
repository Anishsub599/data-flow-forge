import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  
  {
    type: "work",
    title: "Data Science Intern",
    organization: "CodSoft",
    period: "2023",
    points: [
      "Worked on data preprocessing, cleaning, and exploratory data analysis using Python and Pandas",
      "Built basic machine learning models and evaluated their performance on real-world style datasets",
      "Gained hands-on experience with feature engineering and model deployment concepts",
    ],
  },
  {
    type: "work",
    title: "Researcher",
    organization: "Kathmandu University",
    period: "2024 - Present",
    points: [
      
      "Conducted AI and prompt engineering training sessions for students in different schools",
      "Delivered AI workshops and training to APF (Armed Police Force), focusing on practical AI use cases",
    ],
  },
  {
    type: "work",
    title: "KUCC Cup Coordinator",
    organization: "Kathmandu University Computer Club (KUCC)",
    period: "Year - Year", // put actual years, e.g., "2023 - 2024"
    points: [
      "Coordinated KUCC Cup events, managing teams, schedules, and overall event operations",
      "Collaborated with students, clubs, and faculty to ensure smooth execution of technical and non-technical events",
      "Handled communication, logistics, and on-ground problem solving during the event",
    ],
  },
  {
    type: "education",
    title: "B.E. in Computer Engineering",
    organization: "Kathmandu University",
    period: "2019 - 2024",
    points: [
      "Focused on Data Engineering, Machine Learning, and Software Development",
      "Completed coursework and projects in databases, ASP.NET, computer vision, and data pipelines",
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
