import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Real-Time Data Pipeline",
    description: "Built a scalable streaming pipeline using Kafka and Spark to process millions of events per day with sub-second latency.",
    tags: ["Kafka", "Spark", "Python", "AWS"],
    gradient: "from-primary/20 to-secondary/20",
  },
  {
    title: "Cloud Data Warehouse",
    description: "Designed and implemented a multi-source data warehouse on Snowflake with dbt for transformation and orchestration.",
    tags: ["Snowflake", "dbt", "Airflow", "SQL"],
    gradient: "from-secondary/20 to-accent/20",
  },
  {
    title: "ETL Automation Framework",
    description: "Developed a reusable ETL framework that reduced pipeline development time by 60% and improved data quality monitoring.",
    tags: ["Python", "Airflow", "Docker", "PostgreSQL"],
    gradient: "from-accent/20 to-primary/20",
  },
  {
    title: "Analytics Dashboard Pipeline",
    description: "Created end-to-end data pipeline feeding real-time dashboards for executive reporting with automated data quality checks.",
    tags: ["BigQuery", "Python", "Looker", "GCP"],
    gradient: "from-primary/20 to-accent/20",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground text-lg">
            Real-world data engineering solutions that drive business impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group glass-card p-8 rounded-2xl hover:neon-glow transition-all hover:scale-[1.02] cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10`} />
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:neon-text transition-all">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    className="bg-primary/90 hover:bg-primary text-primary-foreground"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-primary/30 hover:border-primary hover:bg-primary/10"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
