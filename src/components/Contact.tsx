import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Github, Linkedin, Database, Copy, Check, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const contactInfo = {
    email: "va.data.professional@gmail.com",
    phone: "+91 8851289934"
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Vijay-Arora",
      icon: Github,
      handle: "@Vijay-Arora"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vijay-aroraji",
      icon: Linkedin,
      handle: "@vijay-aroraji"
    },
  ];

  const copyToClipboard = async (text: string, type: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "email") {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
      toast({
        title: "Copied to clipboard",
        description: `${text} has been copied to your clipboard.`,
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy the contact information manually.",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);

    try {
      // Determine API URL based on environment
      const apiUrl = import.meta.env.VITE_API_URL || 
                     (import.meta.env.PROD 
                       ? 'https://vijay-arora-portfolio.vercel.app' 
                       : 'http://localhost:3001');
      
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to send message');
      }

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Failed to send message",
        description: error instanceof Error ? error.message : "Please try again later or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const downloadResume = () => {
    try {
      // Path to resume file in public folder
      const resumePath = './public/CV_Vijay_Arora.pdf';
      
      // Create a temporary anchor element to trigger download
      const link = document.createElement('a');
      link.href = resumePath;
      link.download = 'CV_Vijay_Arora.pdf'; // Name of the downloaded file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Resume Download",
        description: "Your resume is being downloaded.",
      });
    } catch (error) {
      console.error('Error downloading resume:', error);
      toast({
        title: "Download Failed",
        description: "Unable to download resume. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Open to internships, collaborations, and interesting data projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Contact Information
              </h3>
              
              {/* Email */}
              <Card className="glass-card hover-glow p-6 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">{contactInfo.email}</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(contactInfo.email, "email")}
                    className="hover-glow"
                  >
                    {copiedEmail ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </Card>

              {/* Phone */}
              <Card className="glass-card hover-glow p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground">{contactInfo.phone}</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(contactInfo.phone, "phone")}
                    className="hover-glow"
                  >
                    {copiedPhone ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </Card>
            </div>

            {/* Social Links */}
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <h4 className="text-xl font-semibold mb-4 text-foreground">
                Connect Online
              </h4>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <Card key={social.name} className="glass-card hover-glow p-4">
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 w-full text-left"
                    >
                      <social.icon className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">{social.name}</p>
                        <p className="text-sm text-muted-foreground">{social.handle}</p>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>
            </div>

            {/* Download Resume */}
            <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <Button
                onClick={downloadResume}
                className="w-full hover-glow"
                size="lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up flex" style={{ animationDelay: "0.3s" }}>
            <Card className="glass-card p-6 sm:p-8 mt-0 lg:mt-[calc(4rem-2mm)] flex-1 flex flex-col">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="glass-card"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="glass-card"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="glass-card resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <div className="mt-auto pt-4">
                <Button 
                  type="submit" 
                  className="w-full hover-glow" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;