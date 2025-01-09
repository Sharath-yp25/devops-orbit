import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import {
  Download,
  GraduationCap,
  Calendar,
  Clock,
  DollarSign,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
function App() {
  const { toast } = useToast();

  const handleEnrollScroll = () => {
    const element = document.getElementById('course-details');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // const handleDownloadSyllabus = () => {
  //   toast({
  //     title: "Coming Soon",
  //     description: "The syllabus will be available for download shortly.",
  //   });
  // };

  function handleDownloadSyllabus() {
    // Path to the syllabus file
    const syllabusUrl = "/assets/syllabus.pdf"; // Adjust the path if needed
    const link = document.createElement("a");
    link.href = syllabusUrl;
    link.download = "syllabus.pdf"; // Set the download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // const handleContactSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   toast({
  //     title: "Message Sent",
  //     description: "We'll get back to you soon!",
  //   });
  // };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    // EmailJS service configuration
    const serviceID = 'service_3wndbc6';  // Ensure this matches your actual service ID
    const templateID = 'template_3ozt89r';  // Ensure this matches your actual template ID
    const publicKey = '4QKHTC_dZR0eu0rLT';  // Ensure this matches your actual public key

    const emailData = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };

    // Initialize EmailJS with your public key (you should only call this once in your app)
    emailjs.init(publicKey);

    // Debugging: Log the emailData to ensure it's captured properly
    console.log("Email Data: ", emailData);

    // Send email using EmailJS
    emailjs.send(serviceID, templateID, emailData)
      .then((response) => {
        console.log("Email sent successfully: ", response);
        toast.success("Your message has been sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("There was an issue sending your message. Please try again.");
      });
  };


  return (
    <div className="dark min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 z-0" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-70" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            DevOps Orbit
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Empowering Excellence in Automation, Collaboration, and Deployment
          </p>
          <Button size="lg" onClick={handleEnrollScroll}>
            Enroll Now
          </Button>
        </div>
      </section>

      {/* Trainer Info Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Meet Your Trainer</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <div className="w-full h-full bg-[url('/assets/Sharathc.jpeg')] bg-cover bg-center" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Sharath Y P</h3>
              <p className="text-muted-foreground leading-relaxed">
                With over 2 years of hands-on experience in the DevOps field, Sharath Y P is passionate about empowering the next generation of DevOps engineers. Having worked with a range of tools including AWS, Jenkins, Docker, Kubernetes, and more, Sharath brings a wealth of industry knowledge and practical experience to the classroom.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Sharath has successfully trained multiple batches of students, guiding them through real-world DevOps scenarios and ensuring they acquire the skills needed to excel in the ever-evolving world of DevOps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details Section */}
      <section id="course-details" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Course Overview</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-6">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold">Duration</h4>
                    <p className="text-muted-foreground">3-6 months</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold">Demo Class</h4>
                    <p className="text-muted-foreground">January 9, 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold">Start Date</h4>
                    <p className="text-muted-foreground">January 30, 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <DollarSign className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold">Course Fee</h4>
                    <p className="text-muted-foreground">₹24,999</p>
                    <p className="text-sm text-muted-foreground">EMI options available</p>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Tools Covered</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "AWS",
                  "Git",
                  "Linux",
                  "Shell Scripting",
                  "Maven",
                  "Jenkins",
                  "Docker",
                  "Kubernetes",
                  "Ansible",
                  "Terraform",
                  "Prometheus"
                ].map((tool) => (
                  <div key={tool} className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-primary" />
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mt-12">
            This course equips you with hands-on skills and practical knowledge of the most widely-used DevOps tools. By the end of the course, you will be proficient in automating and optimizing deployment workflows in real-world environments.
          </p>
        </div>
      </section>

      {/* Downloadable Materials Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Download Course Syllabus</h2>
          <Button onClick={handleDownloadSyllabus} size="lg">
            <Download className="mr-2 h-4 w-4" /> Download Syllabus
          </Button>
        </div>
      </section>

      {/* Testimonials Section
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Students Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <Card key={index} className="aspect-video bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Video Testimonial {index}</p>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Students Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { url: "https://drive.google.com/file/d/18Ffd0o9itc8Gt0C2bAu_zPeT2OrbjaCW/preview", name: "Shreya" },
              { url: "https://drive.google.com/file/d/1cU81wwA3s_eAPKFLLc8FdBvRdHSE0OQc/preview", name: "Shubham" },
              { url: "https://drive.google.com/file/d/1XEZUZi4WvKhcalpBB4pQ6yaH0L5gsSZ0/preview", name: "Vijayaragavan" },
            ].map((video, index) => (
              <Card key={index} className="bg-muted flex flex-col items-center justify-center overflow-hidden">
                <div
                  className="relative w-full max-w-xs" // Width remains unchanged
                  style={{ height: "500px" /* Reduced height */, overflow: "hidden" }}
                >
                  <iframe
                    src={video.url}
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    allow="autoplay"
                    frameBorder="0"
                    title={`Testimonial ${index + 1}`}
                  ></iframe>
                </div>
                <p className="mt-4 text-lg font-medium text-center">{video.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>




      {/* Contact Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-primary" />
                <a href="+917024180805" className="hover:underline text-muted-foreground">
                  +917024180805
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Instagram className="h-5 w-5 text-primary" />
                <a
                  href="https://www.instagram.com/devops_orbit?igsh=MXBjOHQ4azZlN2o1eA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-muted-foreground"
                >
                  @devops_orbit
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="sharathyp25+doorbit@gmail.com"
                  className="hover:underline text-muted-foreground"
                >
                  sharathyp25+doorbit@gmail.com
                </a>
              </div>
            </div>
            {/* Contact Form */}
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <Input placeholder="Your Name" required />
              <Input type="email" placeholder="Your Email" required />
              <Input placeholder="Subject" required />
              <Textarea placeholder="Your Message" required />
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;