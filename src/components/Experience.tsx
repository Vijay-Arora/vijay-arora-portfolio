import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Briefcase, GraduationCap, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Ameriprise Financial (Columbia Threadneedle), Gurugram",
      role: "Senior Data Analyst – Investments",
      period: "11/2023 – Present",
      location: "Gurugram",
      achievements: [
        "Built a metadata framework saving $1M+ annually and improved model accessibility.",
        "Performed data mining, ML modeling, and developed automated research & LLM pipelines.",
        "Improved research workflow efficiency by 5% and enhanced data quality across datasets.",
        "Collaborated with PMs/Analysts and managed team backlog for smooth project delivery."
      ],
      skills: ["Python", "SQL", "ML", "LLM", "Docker", "Git", "JIRA"]
    },
    {
      company: "EXL Services, Gurugram",
      role: "Data Analytics Consultant",
      period: "08/2022 – 11/2023",
      location: "Gurugram",
      achievements: [
        "Built a Single Customer View (SCV) for underwriting using SQL, Python & Tableau.",
        "Reduced reporting time by 30% through optimized dashboards and visualizations.",
        "Prepared documentation and managed backlog across 3 analytics projects."
      ],
      skills: ["SQL", "Python", "Tableau", "Azure DevOps"]
    },
    {
      company: "3Pillar Global, Noida",
      role: "Data Analyst II – Quality",
      period: "01/2020 – 07/2022",
      location: "Noida",
      achievements: [
        "Deployed data-quality scripts via Databricks, reducing processing time by 5 days.",
        "Resolved major data quality issues, achieving a 24% error reduction.",
        "Collaborated with clients to define requirements and technical documentation."
      ],
      skills: ["AWS", "Databricks", "Python", "SQL"]
    }
  ];

  const education = [
    {
      institution: "BITS Pilani, Rajasthan",
      degree: "Masters in Data Science and Engineering (M.Tech.)",
      period: "Nov 2021 - Oct 2023",
      grade: "CGPA: 7.71/10"
    },
    {
      institution: "Manav Rachna University, Haryana",
      degree: "Bachelors in Electronics and Communication (B.Tech.)",
      period: "July 2016 - June 2020",
      grade: "CGPA: 8.65/10"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </div>

        <div className="space-y-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Briefcase className="w-6 h-6 mr-3 text-primary" />
              Work Experience
            </h3>
            
            <div className="space-y-5">
              {experiences.map((exp, index) => (
                <Card 
                  key={index} 
                  className="glass-card hover-glow p-5 animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-1">
                        {exp.role}
                      </h4>
                      <p className="text-primary font-medium text-sm">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-xs text-muted-foreground mt-2 sm:mt-0 sm:text-right sm:ml-4">
                      <div className="flex items-center justify-start sm:justify-end mb-1 whitespace-nowrap">
                        <Calendar className="w-3 h-3 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center justify-start sm:justify-end">
                        <MapPin className="w-3 h-3 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-1.5 mb-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start leading-relaxed">
                        <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs glass-card px-2 py-0.5">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="w-6 h-6 mr-3 text-primary" />
              Education
            </h3>
            
            <div className="grid md:grid-cols-2 gap-5">
              {education.map((edu, index) => (
                <Card 
                  key={index} 
                  className="glass-card hover-glow p-6 animate-slide-up relative overflow-hidden group"
                  style={{ animationDelay: `${(index + 2) * 0.2}s` }}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                        {index === 0 ? (
                          <Award className="w-6 h-6 text-primary" />
                        ) : (
                          <GraduationCap className="w-6 h-6 text-primary" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-primary text-sm mb-1">
                          {edu.grade}
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground whitespace-nowrap">
                          <Calendar className="w-3 h-3 mr-1" />
                          {edu.period}
                        </div>
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2 leading-tight">
                      {edu.degree}
                    </h4>
                    <p className="text-primary font-medium text-sm">
                      {edu.institution}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;