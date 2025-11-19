import { Database, Cloud, Code2, GitBranch, Boxes, Workflow } from "lucide-react";

const techStack = [
  { icon: Code2, name: "Python", color: "text-primary" },

  { icon: Database, name: "SQL", color: "text-secondary" },
  { icon: Boxes, name: "Pandas", color: "text-accent" },
  { icon: Workflow, name: "Apache Spark", color: "text-accent" },
 
  { icon: Code2, name: "ASP.NET", color: "text-primary" },
  { icon: Boxes, name: "YOLO", color: "text-secondary" }
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <div className="flex justify-center animate-slide-in">
            <div className="relative">
              <div className="w-64 h-64 rounded-2xl glass-card border-2 border-primary/30 overflow-hidden neon-glow">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Code2 className="w-32 h-32 text-primary/50" />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-4 left-4 w-64 h-64 rounded-2xl bg-primary/10 blur-xl" />
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6 animate-fade-in [animation-delay:200ms]">
            <div className="glass-card p-8 rounded-2xl space-y-4">
              <h3 className="text-2xl font-bold text-primary">Data Engineer & Problem Solver</h3>
              <p className="text-muted-foreground leading-relaxed">
               I design and implement robust data infrastructures that turn raw data into actionable insights. Specializing in scalable ETL pipelines, optimized data warehouses, and real-time streaming, I blend technical expertise with business insight to deliver high-impact, efficient, and scalable data solutions.
              </p>
              
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 neon-text">Tech Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="glass-card p-6 rounded-xl hover:scale-105 hover:neon-glow transition-all cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center space-y-3">
                  <tech.icon className={`w-12 h-12 ${tech.color} group-hover:animate-pulse-glow`} />
                  <span className="text-sm font-medium text-foreground/90">{tech.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
