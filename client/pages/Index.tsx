import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Shield, 
  TrendingUp, 
  Zap, 
  Globe, 
  Users, 
  CreditCard, 
  BarChart3,
  Database,
  Settings,
  DollarSign,
  PieChart,
  LineChart,
  Activity,
  Layers,
  Lock,
  CheckCircle,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Client Portal (User-facing Dashboard) & Mobile application",
      description: "Clean overview dashboard with cards and charts",
      features: [
        "Client demographic info (KYC, personal data, financial profile)",
        "View/download statements, contract notes",
        "Trading capabilities: Cambio, Equity, Loans, Margin, Repo, Bonds, Asset Management",
        "Bank Lodgement, Payments, Journal"
      ]
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      title: "Client Onboarding Application (Self-Service)",
      description: "Step-by-step digital KYC onboarding wizard",
      features: [
        "Upload documents, verify TRN, and digitally sign",
        "Choose investment services during onboarding",
        "Automated compliance checks",
        "Real-time status tracking"
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Onboarding Admin Portal",
      description: "View incoming onboarding applications",
      features: [
        "Third-party verification integrations (TRN, address, credit score)",
        "Approve, reject, or send back for revision",
        "Upon approval, auto-create client account and assign unique ID",
        "Compliance workflow management"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Client Management Portal (Back Office)",
      description: "Monitor and manage client portfolios and trades",
      features: [
        "Generate trade reports, P&L, commissions",
        "Audit logs of client activities and orders",
        "Bulk export and compliance reporting features",
        "Portfolio performance analytics"
      ]
    },
    {
      icon: <CreditCard className="w-8 h-8 text-orange-600" />,
      title: "CRM Portal",
      description: "360° Client View (interaction logs, portfolio snapshot, preferences)",
      features: [
        "Lead Management with pipelines",
        "Ticket Management for client queries",
        "Target Management for sales teams",
        "Mass Email Campaign Builder + Templates",
        "Survey Management with analytics"
      ]
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-600" />,
      title: "Accounting System",
      description: "Journal entries per trade (automated)",
      features: [
        "Trial Balance, Ledger, Balance Sheet",
        "Month-end and year-end reports",
        "Tax-ready financial statements and audit trail",
        "Automated reconciliation processes"
      ]
    }
  ];

  const platformCapabilities = [
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
      title: "Real-time Processing",
      description: "Lightning-fast transaction processing and real-time analytics"
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "99.9% Uptime",
      description: "Enterprise-grade reliability with guaranteed uptime SLA"
    },
    {
      icon: <Lock className="w-12 h-12 text-blue-600" />,
      title: "Global Compliance",
      description: "Full regulatory compliance across multiple jurisdictions"
    },
    {
      icon: <Layers className="w-12 h-12 text-blue-600" />,
      title: "API-first Design",
      description: "Modern architecture built for integration and scalability"
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Multi-tenant SaaS",
      description: "Scalable solution supporting multiple organizations"
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-600" />,
      title: "AI & ML Powered",
      description: "Advanced artificial intelligence for fraud detection and insights"
    }
  ];

  const enterpriseServices = [
    {
      icon: <CreditCard className="w-8 h-8 text-blue-600" />,
      title: "Investment Banking",
      description: "Complete suite for elite trading systems and investment portfolio optimization.",
      features: ["Portfolio Management", "Risk Analytics", "Trading Platforms", "Client Reporting", "Regulatory Compliance"]
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-600" />,
      title: "Credit Union Solutions",
      description: "Tailored solutions for member-owned financial cooperatives and credit unions.",
      features: ["Member Management", "Loan Processing", "Savings Products", "Mobile Banking", "Core Banking"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Wealth Management",
      description: "Comprehensive platform for asset management and wealth advisory services.",
      features: ["Asset Allocation", "Performance Tracking", "Client Advisory", "Tax Optimization", "Estate Planning"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FT</span>
              </div>
              <span className="text-xl font-bold text-slate-800">New Fintek Technologies</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#solutions" className="text-slate-600 hover:text-blue-600 transition-colors">Solutions</a>
              <a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors">Services</a>
              <a href="#platform" className="text-slate-600 hover:text-blue-600 transition-colors">Platform</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Schedule Demo
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge className="mb-6 bg-blue-100 text-blue-700 border-blue-200">
              Advanced Fintech Financial Technology
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
              Integrated Fintech
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Solution Architecture
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive financial technology solutions built for the modern digital infrastructure. 
              From Client Systems, Back Office Management, and Financial Operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Explore Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-200 text-blue-700 px-8 py-3">
                Schedule Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-slate-600">Financial Institutions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">$50B+</div>
                <div className="text-slate-600">Assets Under Management</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
                <div className="text-slate-600">System Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Integrated Fintech Solution Architecture
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our comprehensive solution combines cutting-edge technology with financial expertise. 
              From Client Management to Back Office Administration and regulatory compliance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-4 border-blue-200 text-blue-700 hover:bg-blue-50">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Financial Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover how our integrated solutions can streamline your processes and 
            accelerate your digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3">
              Schedule Assessment Review
            </Button>
            <Button size="lg" variant="outline" className="border-blue-300 text-white hover:bg-blue-800 px-8 py-3">
              Download Whitepaper
            </Button>
          </div>
        </div>
      </section>

      {/* Enterprise Services */}
      <section id="services" className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Enterprise Financial Service Platform
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive solutions designed for the modern financial landscape. Trusted 
              by leading institutions to power their digital transformation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {enterpriseServices.map((service, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-slate-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full border-blue-200 text-blue-700 hover:bg-blue-50">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section id="platform" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Platform Capabilities</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Built on enterprise-grade infrastructure with modern architecture principles
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformCapabilities.map((capability, index) => (
              <div key={index} className="text-center group">
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{capability.title}</h3>
                <p className="text-slate-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-800 text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Ready to Transform Your
                  <br />
                  <span className="text-cyan-300">Financial Operations?</span>
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Let's discuss how our integrated fintech solutions can drive your business forward. Our 
                  experts are ready to demonstrate exceptional digital architecture.
                </p>
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3">
                  Send Us a Message
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Multiple Ways to Connect</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Sales Executive</div>
                      <div className="text-blue-200">Call directly for immediate assistance</div>
                      <div className="text-cyan-300">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Technical Support</div>
                      <div className="text-blue-200">Get technical assistance and demos</div>
                      <div className="text-cyan-300">support@newfintektech.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Schedule Demos</div>
                      <div className="text-blue-200">Book a personalized platform demonstration</div>
                      <div className="text-cyan-300">Live Chat 24/7</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-sm text-blue-200 mb-2">Business Hours</div>
                    <div className="font-semibold">Mon - Fri: 8:00 AM - 6:00 PM</div>
                    <div className="font-semibold">Sat - Sun: 9:00 AM - 4:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">FT</span>
                </div>
                <span className="text-xl font-bold">New Fintek Technologies</span>
              </div>
              <p className="text-slate-400">
                Leading provider of integrated fintech solutions for modern financial institutions.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Client Systems</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Back Office</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Data Analytics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Investment Banking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Wealth Management</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Credit Unions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Consulting</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400">
                <li>+1 (555) 123-4567</li>
                <li>info@newfintektech.com</li>
                <li>123 Financial District</li>
                <li>New York, NY 10013</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 New Fintek Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
