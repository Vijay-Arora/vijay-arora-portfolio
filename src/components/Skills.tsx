import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Development Platform",
      skills: ["Databricks", "Jupyter", "VS Code", "AWS Sagemaker"],
      tier: "primary"
    },
    {
      category: "Data Analysis",
      skills: ["SQL", "SparkSQL", "Python (pandas, numpy, scikit-learn)", "Web Scraping (selenium, beautifulsoup)"],
      tier: "primary"
    },
    {
      category: "Machine Learning",
      skills: ["LLMs", "Logistic Regression","Linear Regression"],
      tier: "primary"
    },
    {
      category: "Data Visualization",
      skills: ["Tableau", "Python (Matplotlib, Seaborn)"],
      tier: "primary"
    },
    {
      category: "DevOps",
      skills: ["Github", "Bitbucket (GIT)", "CI/CD pipelines", "Docker", "Kubernetes"],
      tier: "primary"
    },
    {
      category: "Cloud Platform",
      skills: ["Azure", "AWS (S3, Athena and Sagemaker)"],
      tier: "primary"
    },
    {
      category: "Task Management & Documentation",
      skills: ["JIRA (Scrum & Kanban)", "Confluence", "Azure DevOps"],
      tier: "primary"
    },
    {
      category: "Conceptual Knowledge",
      skills: ["ETL concepts", "Data Quality concepts", "Data Warehousing", "Machine Learning"],
      tier: "primary"
    },
    {
      category: "Soft Skills",
      skills: ["Time Management", "Leadership", "Behavioral", "Stakeholder Management", "Interpersonal Skills"],
      tier: "primary"
    }
  ];

  const getVariant = (tier: string) => {
    switch (tier) {
      case "primary":
        return "default";
      case "secondary":
        return "secondary";
      case "accent":
        return "outline";
      default:
        return "secondary";
    }
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for data analysis and development
          </p>
        </div>

        <div className="grid gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.category} 
              className="glass-card hover-glow p-6 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant={getVariant(category.tier)}
                    className="text-sm px-3 py-1 glass-card hover-glow transition-all duration-200 hover:scale-105"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;