import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Database } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const socialLinks = [
  { icon: Mail, label: "Email", href: "mailto:your.email@example.com", color: "primary" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", color: "secondary" },
  { icon: Github, label: "GitHub", href: "https://github.com", color: "accent" },
  { icon: Database, label: "Kaggle", href: "https://kaggle.com", color: "primary" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-muted/30 to-background" />
      
      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground text-lg">
            Have a project in mind? Let's build something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="glass-card p-8 rounded-2xl animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-muted/50 border-border focus:border-primary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-muted/50 border-border focus:border-primary"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-muted/50 border-border focus:border-primary min-h-[150px]"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground neon-glow"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Social Links */}
          <div className="space-y-6 animate-fade-in [animation-delay:200ms]">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 neon-text">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-muted/30 rounded-lg hover:bg-primary/10 
                             hover:neon-glow transition-all group border border-border hover:border-primary/50"
                  >
                    <div className={`p-2 rounded-lg bg-${link.color}/10 border border-${link.color}/30`}>
                      <link.icon className={`w-6 h-6 text-${link.color} group-hover:animate-pulse-glow`} />
                    </div>
                    <span className="text-foreground font-medium">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-primary">Let's Collaborate</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in hearing about new data engineering challenges 
                and opportunities. Whether you need help with pipeline architecture, 
                data warehouse design, or cloud migration, feel free to reach out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
