import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, ExternalLink, Github, Image } from "lucide-react";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Exploratory Data Analysis on European Financial Data",
      tagline: "Insights from European markets",
      image: "/vijay-arora-portfolio/Financial_Market_Dashboard.png",
      description: "Performed in-depth exploratory data analysis on European financial datasets to uncover trends, correlations, and risk patterns across sectors and countries. Delivered data-driven insights using statistical analysis and visual storytelling.",
      techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      githubLink: "https://github.com/Vijay-Arora/EDA-Financial-Data",
      caseStudy: {
        problem: "Large and complex European financial datasets lacked clear insights for decision-making.",
    approach: "Cleaned and preprocessed data, performed univariate and multivariate analysis, analyzed correlations, distributions, and sector-wise performance, and visualized key financial indicators.",
    result: "Identified major trends, high-risk sectors, and strong correlations between financial indicators across regions.",
    learned: "Advanced EDA techniques, data cleaning strategies, and effective financial data visualization."
      }
    },
    {
      id: 2,
      title: "Time Series Analysis for Financial Forecasting",
      tagline: "Forecasting trends over time",
      image: "/vijay-arora-portfolio/Customer_Churn_Prediction.png",
      description: "Developed a time series forecasting model to analyze historical financial data and predict future trends. Applied statistical and machine learning techniques to capture seasonality, trends, and volatility in financial markets.",
      techStack: ["Python", "Pandas", "Statsmodels", "Scikit-learn", "Matplotlib"],
      githubLink: "https://github.com/Vijay-Arora/Time-Series-Analysis",
      caseStudy: {
        problem: "Financial trends were difficult to predict due to seasonality and market volatility.",
        approach: "Performed time series decomposition, stationarity tests, and built forecasting models using ARIMA/SARIMA and regression-based approaches.",
        result: "Accurate trend and seasonality forecasts that supported better financial planning and decision-making.",
        learned: "Time series decomposition, forecasting techniques, and handling real-world financial volatility."
      }
    },
    {
      id: 3,
      title: "Submission Triage for Motor Insurance – Comparison of Classification Models",
      tagline: "Automated submission triage solution with real-time pipelines",
      image: "/vijay-arora-portfolio/Submission_Triage_for_Motor_Insurance.png",
      description: "Developed an automated submission triage solution for motor insurance data, integrating real-time pipelines and classification model comparison.",
      techStack: ["Python", "Kafka", "KSQLDB", "Machine Learning"],
      githubLink: "https://github.com/Vijay-Arora/motor-insurance-submission-data-prediction",
      caseStudy: {
        problem: "Inefficient manual triage of motor insurance submissions leading to delays in underwriting and inconsistent risk assessment.",
        approach: "Performed detailed EDA using Python, built a real-time data preprocessing pipeline using Kafka & KSQLDB, and compared multiple classification models to determine the best-performing approach for real-world submission classification.",
        result: "Achieved a scalable and automated triage workflow, selecting the most accurate model for classifying incoming submissions and significantly improving underwriting speed and decision quality.",
        learned: "Real-time data engineering, event-driven pipelines, model comparison strategies, and applying machine learning to insurance domain workflows."
      }
    }
  ];

  const toggleExpanded = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of practical data solutions and technical implementations
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card key={project.id} className="glass-card hover-glow overflow-hidden animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
                  {/* Project Image */}
                  <div className="flex-shrink-0 w-full lg:w-[400px]">
                    <div className="w-full h-[250px] sm:h-[300px] lg:w-[400px] lg:h-[300px] bg-gradient-card rounded-lg overflow-hidden border border-border">
                      {project.image ? (
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          loading={index === 0 ? "eager" : "lazy"}
                          fetchPriority={index === 0 ? "high" : "auto"}
                          decoding="async"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Image className="w-12 h-12 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex-1 lg:w-2/3 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 text-foreground">
                          {project.title}
                        </h3>
                        <p className="text-primary font-medium mb-4">
                          {project.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="glass-card">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-2 sm:gap-4 pt-4">
                      {project.githubLink && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="glass-card"
                          asChild
                        >
                          <a 
                            href={project.githubLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            GitHub
                          </a>
                        </Button>
                      )}
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="glass-card"
                        asChild
                      >
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleExpanded(project.id)}
                        className="text-primary hover:text-primary-glow"
                      >
                        Case Study
                        {expandedProject === project.id ? (
                          <ChevronUp className="w-4 h-4 ml-2" />
                        ) : (
                          <ChevronDown className="w-4 h-4 ml-2" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Expandable Case Study */}
                {expandedProject === project.id && (
                  <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border animate-fade-in">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Problem</h4>
                        <p className="text-sm text-muted-foreground text-justify">
                          {project.caseStudy.problem}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Approach</h4>
                        <p className="text-sm text-muted-foreground text-justify">
                          {project.caseStudy.approach}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Result</h4>
                        <p className="text-sm text-muted-foreground text-justify">
                          {project.caseStudy.result}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">What I Learned</h4>
                        <p className="text-sm text-muted-foreground text-justify">
                          {project.caseStudy.learned}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;