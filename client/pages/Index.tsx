import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  MapPin,
} from "lucide-react";

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [currentStatIndex, setCurrentStatIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Rotating statistics data
  const rotatingStats = [
    { value: "500+", label: "Financial Institutions", color: "text-cyan-400" },
    { value: "1000+", label: "Active Users", color: "text-green-400" },
    { value: "2M+", label: "Transactions Daily", color: "text-purple-400" },
    { value: "150+", label: "Countries Served", color: "text-yellow-400" },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % enterpriseServices.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  // Auto-rotate first statistic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatIndex((prev) => (prev + 1) % rotatingStats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % enterpriseServices.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + enterpriseServices.length) % enterpriseServices.length,
    );
  };

  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Client Portal (User-facing Dashboard) & Mobile application",
      description:
        "Secure client authentication (web & mobile) with comprehensive dashboard",
      features: [
        "Dashboard with real-time account value and portfolio allocation (Cambio, Equity, Loans, etc.)",
        "Performance graphs and KYC & demographic data view",
        "View & download contract notes, statements, and trade history",
        "Trading interface for Cambio (FX), Equity (stocks), Loans, Margin, Repo, Bonds",
        "Asset management products and payment capabilities",
        "Bank lodgements, journal entries, and internal transfers",
        "Notifications and alerts (email, push)",
      ],
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      title: "Client Onboarding Application (Self-Service)",
      description: "Multi-step guided onboarding flow (mobile/web optimized)",
      features: [
        "Real-time TRN validation and credit check integrations",
        "OCR & biometric document upload and verification",
        "Digital signature integration (DocuSign, Adobe Sign)",
        "Investment product selection and risk profile mapping",
        "Auto-save progress and resume capability",
        "Status tracking post-submission",
      ],
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Onboarding Admin Portal",
      description: "Dashboard to manage all incoming applications",
      features: [
        "Integrated third-party verification tools: TRN, address verification",
        "Credit score lookups and action workflows",
        "Approve / Reject / Request Revision capabilities",
        "Audit trail of actions per application",
        "Account provisioning (auto-assign unique client IDs)",
        "Notification system to applicants and internal teams",
      ],
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Client Management Portal (Back Office)",
      description:
        "Comprehensive client list with filters (status, asset value, etc.)",
      features: [
        "View and manage all client portfolios",
        "Execute trades on behalf of clients (if required)",
        "Generate P&L Reports, Commission breakdowns, Trade summaries",
        "Trade compliance checks and bulk export for auditors/regulators",
        "Log of user and client actions",
        "Portfolio performance analytics and risk management",
      ],
    },
    {
      icon: <CreditCard className="w-8 h-8 text-orange-600" />,
      title: "CRM Portal",
      description:
        "360° Client View (interaction logs, portfolio snapshot, preferences)",
      features: [
        "Lead management with funnel/pipeline view",
        "Mass Email Campaigns: Templates, scheduling, analytics",
        "Target management: Sales target setting and performance tracking",
        "Ticket management: Client query system with internal assignment and resolution",
        "Survey management with analytics dashboards",
        "Integrations with platforms like HubSpot, Salesforce (optional)",
      ],
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-600" />,
      title: "Accounting System",
      description: "Automated journal entries linked to every trade",
      features: [
        "Trial balance, general ledger, sub-ledger views",
        "Month-end & year-end closure flows with audit logs for regulators",
        "Tax-ready exports (CSV, XBRL, etc.) and balance sheet, income statement",
        "Reconciliation tools (bank, GL vs. trades)",
        "Approval workflows for entries and reports",
        "Automated compliance and regulatory reporting",
      ],
    },
  ];

  const platformCapabilities = [
    {
      category: "Client-Facing Solutions & Management",
      icon: <Users className="w-12 h-12 text-indigo-600" />,
      color: "indigo",
      capabilities: [
        {
          name: "Client Portal Dashboard",
          description:
            "Secure authentication with real-time account value and portfolio allocation",
        },
        {
          name: "Mobile Application",
          description:
            "Native mobile experience with trading interface and notifications",
        },
        {
          name: "Performance Analytics",
          description:
            "Real-time graphs, KYC data view, and portfolio insights",
        },
        {
          name: "Document Management",
          description:
            "View & download contract notes, statements, and trade history",
        },
        {
          name: "Multi-Asset Trading",
          description:
            "Cambio (FX), Equity, Loans, Margin, Repo, Bonds interface",
        },
        {
          name: "Payment Processing",
          description:
            "Bank lodgements, journal entries, and internal transfers",
        },
        {
          name: "Onboarding Workflow",
          description:
            "Multi-step guided flow with OCR, biometric verification",
        },
        {
          name: "Digital Signatures",
          description:
            "DocuSign, Adobe Sign integration with auto-save progress",
        },
        {
          name: "Admin Portal",
          description:
            "Application management with third-party verification tools",
        },
        {
          name: "Client Management",
          description:
            "Comprehensive portfolios, trade execution, and compliance checks",
        },
        {
          name: "Audit & Compliance",
          description:
            "Complete audit trails and regulatory reporting capabilities",
        },
        {
          name: "Notification System",
          description: "Email, push alerts, and internal team communications",
        },
      ],
    },
    {
      category: "Trading & Investment Platform",
      icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
      color: "blue",
      capabilities: [
        {
          name: "Cambio",
          description: "Foreign exchange trading with real-time rates",
        },
        {
          name: "Equity Trading",
          description: "Stock market transactions and portfolio management",
        },
        {
          name: "Loans",
          description: "Loan origination, servicing, and management",
        },
        {
          name: "Margin Trading",
          description: "Leveraged trading with risk management",
        },
        {
          name: "Repo Transactions",
          description: "Repurchase agreements and securities lending",
        },
        {
          name: "Bonds",
          description: "Fixed income securities trading and management",
        },
        {
          name: "Asset Management",
          description: "Portfolio optimization and asset allocation",
        },
        {
          name: "Bank Lodgement",
          description: "Secure deposit and withdrawal processing",
        },
        { name: "Payments", description: "Multi-currency payment processing" },
        {
          name: "Journal Entries",
          description: "Automated transaction recording",
        },
      ],
    },
    {
      category: "CRM & Client Management",
      icon: <Users className="w-12 h-12 text-purple-600" />,
      color: "purple",
      capabilities: [
        {
          name: "360° Client Profile",
          description: "Complete view of history, holdings, and preferences",
        },
        {
          name: "Lead Management",
          description: "Funnel/pipeline view with conversion tracking",
        },
        {
          name: "Mass Email Campaigns",
          description: "Templates, scheduling, and analytics",
        },
        {
          name: "Target Management",
          description: "Sales target setting and performance tracking",
        },
        {
          name: "Ticket Management",
          description: "Client query system with internal assignment",
        },
        {
          name: "Survey Management",
          description: "Analytics dashboards and feedback collection",
        },
        {
          name: "HubSpot Integration",
          description: "Seamless CRM data synchronization",
        },
        {
          name: "Salesforce Integration",
          description: "Enterprise-grade CRM connectivity",
        },
      ],
    },
    {
      category: "Financial Accounting & Compliance",
      icon: <DollarSign className="w-12 h-12 text-green-600" />,
      color: "green",
      capabilities: [
        {
          name: "Automated Journal Entries",
          description: "Trade-linked accounting automation",
        },
        {
          name: "Trial Balance",
          description: "Real-time balance verification",
        },
        {
          name: "General Ledger",
          description: "Complete chart of accounts management",
        },
        {
          name: "Sub-ledger Views",
          description: "Detailed transaction breakdowns",
        },
        {
          name: "Month-end Closure",
          description: "Automated period-end processes",
        },
        {
          name: "Year-end Closure",
          description: "Annual financial closing workflows",
        },
        {
          name: "Audit Logs",
          description: "Comprehensive regulatory compliance trails",
        },
        {
          name: "Tax-ready Exports",
          description: "CSV, XBRL, and regulatory format exports",
        },
        {
          name: "Balance Sheet",
          description: "Real-time financial position reporting",
        },
        { name: "Income Statement", description: "P&L analysis and reporting" },
        {
          name: "Reconciliation Tools",
          description: "Bank and GL vs. trades matching",
        },
        {
          name: "Approval Workflows",
          description: "Multi-level entry and report approvals",
        },
      ],
    },
  ];

  const enterpriseServices = [
    {
      icon: <CreditCard className="w-8 h-8 text-blue-600" />,
      title: "Investment Banking",
      description:
        "Complete suite for elite trading systems and investment portfolio optimization.",
      features: [
        "Portfolio Management",
        "Risk Analytics",
        "Trading Platforms",
        "Client Reporting",
        "Regulatory Compliance",
      ],
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-600" />,
      title: "Credit Union Solutions",
      description:
        "Tailored solutions for member-owned financial cooperatives and credit unions.",
      features: [
        "Member Management",
        "Loan Processing",
        "Savings Products",
        "Mobile Banking",
        "Core Banking",
      ],
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Wealth Management",
      description:
        "Comprehensive platform for asset management and wealth advisory services.",
      features: [
        "Asset Allocation",
        "Performance Tracking",
        "Client Advisory",
        "Tax Optimization",
        "Estate Planning",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Digital Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-500/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 border border-blue-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 right-20 w-24 h-24 border border-purple-400/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-indigo-400/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-cyan-400/30 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 border border-purple-400/10 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse delay-1500"></div>

        {/* Floating Dollar Signs */}
        <div className="absolute top-20 left-20 text-4xl text-green-400/20 animate-bounce delay-300">
          $
        </div>
        <div className="absolute top-40 right-32 text-3xl text-yellow-400/20 animate-bounce delay-700">
          $
        </div>
        <div className="absolute bottom-32 left-16 text-5xl text-emerald-400/15 animate-bounce delay-1100">
          $
        </div>
        <div className="absolute bottom-40 right-20 text-2xl text-cyan-400/25 animate-bounce delay-1500">
          $
        </div>
        <div className="absolute top-60 left-1/3 text-3xl text-purple-400/20 animate-bounce delay-1900">
          $
        </div>
        <div className="absolute bottom-60 right-1/3 text-4xl text-blue-400/15 animate-bounce delay-2300">
          $
        </div>

        {/* Floating Financial Icons */}
        <div
          className="absolute top-32 right-40 text-2xl text-white/10 animate-spin"
          style={{ animationDuration: "8s" }}
        >
          📊
        </div>
        <div
          className="absolute bottom-48 left-32 text-3xl text-white/10 animate-spin"
          style={{ animationDuration: "10s" }}
        >
          📈
        </div>
        <div
          className="absolute top-48 left-40 text-2xl text-white/10 animate-spin"
          style={{ animationDuration: "12s" }}
        >
          💰
        </div>
      </div>
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50 relative">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">FT</span>
              </div>
              <span className="text-xl font-bold text-white">
                New Fintek Technologies
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#solutions"
                className="text-blue-200 hover:text-white transition-colors"
              >
                Solutions
              </a>
              <a
                href="#services"
                className="text-blue-200 hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#platform"
                className="text-blue-200 hover:text-white transition-colors"
              >
                Platform
              </a>
              <a
                href="#contact"
                className="text-blue-200 hover:text-white transition-colors"
              >
                Contact
              </a>
            </nav>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg border-0">
              Schedule Demo
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Badge className="mb-6 bg-white/10 text-cyan-300 border-cyan-400/30 backdrop-blur-sm">
              Advanced Fintech Financial Technology
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="inline-block animate-fade-in-up">
                Integrated
              </span>{" "}
              <span className="inline-block animate-fade-in-up delay-200">
                Fintech
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent inline-block animate-fade-in-up delay-500">
                Solution Architecture
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive financial technology solutions built for the modern
              digital infrastructure. From Client Systems, Back Office
              Management, and Financial Operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 shadow-lg border-0"
              >
                Explore Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-3 backdrop-blur-sm"
              >
                Schedule Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              {/* Rotating Statistic */}
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 group relative overflow-hidden">
                <div
                  className={`text-4xl font-bold mb-2 transition-all duration-500 ${rotatingStats[currentStatIndex].color} animate-floating`}
                >
                  {rotatingStats[currentStatIndex].value}
                </div>
                <div className="text-blue-200 group-hover:text-white transition-colors min-h-[20px]">
                  {rotatingStats[currentStatIndex].label}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Progress indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                  {rotatingStats.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentStatIndex
                          ? "bg-cyan-400 scale-125"
                          : "bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Assets Under Management with Dollar Animation */}
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 group relative overflow-hidden">
                <div className="text-4xl font-bold text-purple-400 mb-2 flex items-center justify-center">
                  <span className="animate-bounce animate-dollar-float">$</span>
                  <span className="animate-pulse">50B+</span>
                </div>
                <div className="text-blue-200 group-hover:text-white transition-colors">
                  Assets Under Management
                </div>
                {/* Floating dollar signs with enhanced animation */}
                <div className="absolute top-2 left-2 text-green-400/30 animate-ping animate-dollar-float">
                  $
                </div>
                <div className="absolute top-4 right-4 text-yellow-400/30 animate-ping animate-dollar-float delay-1000">
                  $
                </div>
                <div className="absolute bottom-2 left-4 text-emerald-400/30 animate-ping animate-dollar-float delay-2000">
                  $
                </div>
                <div className="absolute top-3 right-2 text-cyan-400/20 animate-bounce delay-500">
                  💰
                </div>
                <div className="absolute bottom-3 right-3 text-green-400/20 animate-bounce delay-1500">
                  💎
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* System Uptime */}
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 group relative">
                <div className="text-4xl font-bold text-cyan-400 mb-2 animate-pulse animate-floating">
                  99.9%
                </div>
                <div className="text-blue-200 group-hover:text-white transition-colors">
                  System Uptime
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Uptime indicator */}
                <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section
        id="solutions"
        className="py-20 px-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm relative z-10"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Integrated Fintech Solution Architecture
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our comprehensive solution combines cutting-edge technology with
              financial expertise. From Client Management to Back Office
              Administration and regulatory compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 hover:shadow-2xl transition-all duration-500 group transform hover:scale-105 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: "fadeInUp 0.8s ease-out forwards",
                }}
              >
                <CardHeader>
                  <div className="mb-4 transform group-hover:rotate-12 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-blue-200 group-hover:text-blue-100 transition-colors">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {feature.features.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-blue-100 transform hover:translate-x-2 transition-transform duration-200"
                        style={{
                          animationDelay: `${index * 200 + idx * 100}ms`,
                        }}
                      >
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0 animate-pulse" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full mt-6 border-white/30 text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 backdrop-blur-sm transition-all duration-300 group-hover:border-cyan-400/50"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white relative z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Transform Your Financial Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover how our integrated solutions can streamline your processes
            and accelerate your digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 shadow-lg border-0"
            >
              Schedule Assessment Review
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3 backdrop-blur-sm"
            >
              Download Whitepaper
            </Button>
          </div>
        </div>
      </section>

      {/* Enterprise Financial Service Platform - Redesigned */}
      <section
        id="services"
        className="py-32 px-6 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 relative z-10 overflow-hidden"
      >
        {/* Dynamic Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px] animate-pulse"></div>

          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-floating"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-floating delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-gradient-to-r from-indigo-500/5 to-cyan-500/5 rounded-full blur-3xl animate-floating delay-2000"></div>

          {/* Financial Icons Floating */}
          <div className="absolute top-32 right-32 text-6xl text-cyan-400/10 animate-bounce delay-300">📊</div>
          <div className="absolute bottom-40 left-40 text-5xl text-purple-400/10 animate-bounce delay-700">💹</div>
          <div className="absolute top-2/3 right-1/4 text-4xl text-blue-400/10 animate-bounce delay-1100">💰</div>
        </div>

        <div className="container mx-auto relative z-10">
          {/* Hero Header */}
          <div className="text-center mb-24">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 rounded-3xl blur-2xl animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-cyan-400 to-purple-400 p-1 rounded-3xl">
                <div className="bg-slate-900 rounded-[calc(1.5rem-4px)] px-8 py-4">
                  <span className="text-white font-semibold text-lg">Enterprise Platform Solutions</span>
                </div>
              </div>
            </div>

            <h2 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                Financial
              </span>
              <br />
              <span className="text-white">Service</span>
              <br />
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>

            <p className="text-2xl text-slate-300 max-w-5xl mx-auto leading-relaxed mb-24">
              Revolutionary fintech infrastructure powering the next generation of financial institutions.
              <span className="block mt-4 text-cyan-300 font-semibold text-xl">
                Trusted by 500+ financial leaders worldwide
              </span>
            </p>
          </div>

          {/* Main Content Area */}
          <div className="max-w-7xl mx-auto">
            {/* Services Showcase */}
            <div className="space-y-20">
              {enterpriseServices.map((service, index) => (
                <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Service Content */}
                  <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center transform hover:rotate-12 transition-all duration-500 shadow-lg shadow-cyan-500/25">
                            {service.icon}
                          </div>
                          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-3xl blur-lg animate-pulse"></div>
                        </div>
                        <div className="text-sm text-cyan-400 font-semibold tracking-widest uppercase">
                          0{index + 1} / Service
                        </div>
                      </div>

                      <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        {service.title}
                      </h3>

                      <p className="text-xl text-slate-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="group bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:bg-white/10">
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                            <span className="text-slate-300 group-hover:text-white transition-colors font-medium text-sm leading-relaxed">
                              {feature}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white border-0 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-cyan-500/25 transition-all duration-500">
                        Explore {service.title}
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:border-cyan-400/50 px-8 py-4 text-lg font-semibold backdrop-blur-xl">
                        Request Demo
                      </Button>
                    </div>
                  </div>

                  {/* Service Visual */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-700 group">
                      {/* Visual Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 rounded-3xl group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-700"></div>

                      {/* Mock Dashboard/Interface */}
                      <div className="relative space-y-6">
                        <div className="flex items-center justify-between">
                          <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          </div>
                          <div className="text-xs text-slate-400 font-mono">dashboard.fintek.com</div>
                        </div>

                        <div className="space-y-4">
                          <div className="h-4 bg-gradient-to-r from-cyan-400/30 to-transparent rounded-full"></div>
                          <div className="h-4 bg-gradient-to-r from-purple-400/30 to-transparent rounded-full w-3/4"></div>
                          <div className="h-4 bg-gradient-to-r from-blue-400/30 to-transparent rounded-full w-1/2"></div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-cyan-400/10 rounded-lg p-4 border border-cyan-400/20">
                            <div className="text-2xl font-bold text-cyan-400 mb-1">$2.4M</div>
                            <div className="text-xs text-slate-400">Revenue</div>
                          </div>
                          <div className="bg-purple-400/10 rounded-lg p-4 border border-purple-400/20">
                            <div className="text-2xl font-bold text-purple-400 mb-1">18.5K</div>
                            <div className="text-xs text-slate-400">Users</div>
                          </div>
                          <div className="bg-green-400/10 rounded-lg p-4 border border-green-400/20">
                            <div className="text-2xl font-bold text-green-400 mb-1">+12%</div>
                            <div className="text-xs text-slate-400">Growth</div>
                          </div>
                        </div>

                        <div className="h-32 bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-lg border border-white/10 flex items-center justify-center">
                          <div className="text-4xl text-cyan-400/30">📈</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA Section */}
            <div className="mt-32 text-center bg-gradient-to-r from-slate-800/50 via-blue-900/50 to-purple-900/50 backdrop-blur-2xl rounded-3xl p-16 border border-white/20">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your
                <span className="block bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                  Financial Operations?
                </span>
              </h3>
              <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
                Join the hundreds of financial institutions already leveraging our enterprise platform to drive innovation and growth.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white border-0 px-10 py-5 text-xl font-semibold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500">
                  Schedule Platform Demo
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:border-cyan-400/50 px-10 py-5 text-xl font-semibold backdrop-blur-xl">
                  Download Whitepaper
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section
        id="platform"
        className="py-20 px-6 bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm relative z-10"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Platform Capabilities
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Enterprise-grade fintech infrastructure delivering complete
              trading, CRM, and accounting solutions with advanced automation
              and regulatory compliance
            </p>
          </div>

          <div className="space-y-16">
            {platformCapabilities.map((category, categoryIndex) => (
              <div key={categoryIndex} className="group">
                {/* Category Header */}
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">
                    {category.category}
                  </h3>
                  <div
                    className={`w-24 h-1 mx-auto rounded-full bg-gradient-to-r ${
                      category.color === "indigo"
                        ? "from-indigo-500 to-purple-500"
                        : category.color === "blue"
                          ? "from-blue-500 to-cyan-500"
                          : category.color === "purple"
                            ? "from-purple-500 to-pink-500"
                            : "from-green-500 to-emerald-500"
                    }`}
                  ></div>
                </div>

                {/* Capabilities Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.capabilities.map((capability, capIndex) => (
                    <Card
                      key={capIndex}
                      className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 hover:shadow-xl transition-all duration-300 group/card"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-3">
                          <div
                            className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${
                              category.color === "indigo"
                                ? "bg-indigo-400"
                                : category.color === "blue"
                                  ? "bg-blue-400"
                                  : category.color === "purple"
                                    ? "bg-purple-400"
                                    : "bg-green-400"
                            }`}
                          ></div>
                          <div className="flex-1">
                            <h4
                              className={`font-semibold mb-2 text-white group-hover/card:${
                                category.color === "indigo"
                                  ? "text-indigo-400"
                                  : category.color === "blue"
                                    ? "text-blue-400"
                                    : category.color === "purple"
                                      ? "text-purple-400"
                                      : "text-green-400"
                              } transition-colors`}
                            >
                              {capability.name}
                            </h4>
                            <p className="text-sm text-blue-200 leading-relaxed">
                              {capability.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Enhanced Features Banner */}
                {categoryIndex === 0 && (
                  <div className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                      <div>
                        <div className="text-3xl font-bold mb-2">Unified</div>
                        <div className="text-indigo-100">Client Experience</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold mb-2">
                          Mobile-First
                        </div>
                        <div className="text-indigo-100">Design</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold mb-2">Complete</div>
                        <div className="text-indigo-100">Onboarding Flow</div>
                      </div>
                    </div>
                  </div>
                )}

                {categoryIndex === 1 && (
                  <div className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                      <div>
                        <div className="text-3xl font-bold mb-2">Real-time</div>
                        <div className="text-blue-100">Trade Execution</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold mb-2">
                          Multi-Asset
                        </div>
                        <div className="text-blue-100">Trading Platform</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold mb-2">
                          Risk Management
                        </div>
                        <div className="text-blue-100">& Compliance</div>
                      </div>
                    </div>
                  </div>
                )}

                {categoryIndex === 2 && (
                  <div className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                      <div>
                        <div className="text-3xl font-bold mb-2">360° View</div>
                        <div className="text-purple-100">
                          Client Intelligence
                        </div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold mb-2">Automated</div>
                        <div className="text-purple-100">
                          Campaign Management
                        </div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold mb-2">Advanced</div>
                        <div className="text-purple-100">
                          Analytics Dashboard
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {categoryIndex === 3 && (
                  <div className="mt-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                      <div>
                        <div className="text-3xl font-bold mb-2">Automated</div>
                        <div className="text-green-100">Journal Entries</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold mb-2">
                          Regulatory
                        </div>
                        <div className="text-green-100">Compliance Ready</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold mb-2">Real-time</div>
                        <div className="text-green-100">
                          Financial Reporting
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Technical Excellence & Security */}
          <div className="mt-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
              <div className="absolute top-4 left-4 w-32 h-32 border border-blue-400/30 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-24 h-24 border border-purple-400/30 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 w-40 h-40 border border-cyan-400/20 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                  Technical Excellence & Security
                </h3>
                <p className="text-blue-100 max-w-4xl mx-auto text-lg">
                  Enterprise-grade security infrastructure with comprehensive
                  protection, compliance, and monitoring capabilities built for
                  modern financial services
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                {/* Authentication & Identity */}
                <Card className="bg-white/10 backdrop-blur-md border-blue-300/20 hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Shield className="w-8 h-8 text-blue-300 mr-3" />
                      <h4 className="text-lg font-semibold text-blue-100">
                        Authentication & Identity
                      </h4>
                    </div>
                    <ul className="space-y-2 text-sm text-blue-200">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        Multi-Factor Authentication (MFA) for all users
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        Single Sign-On (SSO) via SAML, OAuth
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        Role-Based Access Control (RBAC)
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        Biometric verification (Face ID, fingerprint)
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        Session expiration & device trust management
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Data Encryption */}
                <Card className="bg-white/10 backdrop-blur-md border-purple-300/20 hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Lock className="w-8 h-8 text-purple-300 mr-3" />
                      <h4 className="text-lg font-semibold text-purple-100">
                        Data Encryption
                      </h4>
                    </div>
                    <ul className="space-y-2 text-sm text-purple-200">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        End-to-end encryption (TLS 1.3 in transit)
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        AES-256 encryption at rest
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        Field-level encryption for sensitive data
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        Encrypted file storage for documents
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Infrastructure Security */}
                <Card className="bg-white/10 backdrop-blur-md border-blue-300/20 hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Layers className="w-8 h-8 text-blue-300 mr-3" />
                      <h4 className="text-lg font-semibold text-blue-100">
                        Infrastructure Security
                      </h4>
                    </div>
                    <ul className="space-y-2 text-sm text-blue-200">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        Zero-trust architecture
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        Isolated environments (dev, staging, prod)
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        Cloud-native firewall & DDoS protection
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        IP whitelisting for admin portals
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        Hardened containers & vulnerability scanning
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Compliance & Regulatory */}
                <Card className="bg-white/10 backdrop-blur-md border-purple-300/20 hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <CheckCircle className="w-8 h-8 text-purple-300 mr-3" />
                      <h4 className="text-lg font-semibold text-purple-100">
                        Compliance & Regulatory
                      </h4>
                    </div>
                    <ul className="space-y-2 text-sm text-purple-200">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        KYC/AML checks with third-party APIs
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        Immutable audit logs for all actions
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        Regulatory export tools (SEC, FSC)
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        GDPR, CCPA & Jamaican DPA compliance
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Application Security */}
                <Card className="bg-white/10 backdrop-blur-md border-blue-300/20 hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Zap className="w-8 h-8 text-blue-300 mr-3" />
                      <h4 className="text-lg font-semibold text-blue-100">
                        Application Security
                      </h4>
                    </div>
                    <ul className="space-y-2 text-sm text-blue-200">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        OWASP Top 10 mitigation
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        Input validation & sanitization
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        Rate limiting & bot protection
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        CSRF protection for forms
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        JWT token-based API authentication
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Monitoring & Incident Response */}
                <Card className="bg-white/10 backdrop-blur-md border-purple-300/20 hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Activity className="w-8 h-8 text-purple-300 mr-3" />
                      <h4 className="text-lg font-semibold text-purple-100">
                        Monitoring & Incident Response
                      </h4>
                    </div>
                    <ul className="space-y-2 text-sm text-purple-200">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        Real-time security monitoring
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        SIEM integration (Splunk, Datadog)
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        Intrusion Detection Systems (IDS)
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        Incident response playbooks
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        Disaster Recovery & BCP
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* User Education & Controls */}
                <Card className="bg-white/10 backdrop-blur-md border-blue-300/20 hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Users className="w-8 h-8 text-blue-300 mr-3" />
                      <h4 className="text-lg font-semibold text-blue-100">
                        User Education & Controls
                      </h4>
                    </div>
                    <ul className="space-y-2 text-sm text-blue-200">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        Security awareness training
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        Login history visibility for clients
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        Access token revocation controls
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        Session management options
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Performance & Architecture */}
                <Card className="bg-white/10 backdrop-blur-md border-purple-300/20 hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Globe className="w-8 h-8 text-purple-300 mr-3" />
                      <h4 className="text-lg font-semibold text-purple-100">
                        Performance & Architecture
                      </h4>
                    </div>
                    <ul className="space-y-2 text-sm text-purple-200">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        99.9% uptime SLA guarantee
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        Microsecond latency trading
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        API-first design architecture
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        Seamless integration capabilities
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Security Metrics */}
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-blue-300/20">
                  <div className="text-3xl font-bold text-blue-200 mb-2">
                    99.9%
                  </div>
                  <div className="text-blue-300">Security Uptime</div>
                  <div className="text-xs text-blue-400 mt-1">
                    Enterprise SLA guaranteed
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-300/20">
                  <div className="text-3xl font-bold text-purple-200 mb-2">
                    &lt;1ms
                  </div>
                  <div className="text-purple-300">Authentication Response</div>
                  <div className="text-xs text-purple-400 mt-1">
                    Lightning-fast security
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-blue-300/20">
                  <div className="text-3xl font-bold text-blue-200 mb-2">
                    100%
                  </div>
                  <div className="text-blue-300">Compliance Ready</div>
                  <div className="text-xs text-blue-400 mt-1">
                    Multi-jurisdiction approved
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-indigo-500/10"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Ready to Transform Your
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Financial Operations?
                  </span>
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Let's discuss how our integrated fintech solutions can drive
                  your business forward. Our experts are ready to demonstrate
                  exceptional digital architecture.
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 shadow-lg border-0"
                >
                  Send Us a Message
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Multiple Ways to Connect
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        Sales Executive
                      </div>
                      <div className="text-blue-200">
                        Call directly for immediate assistance
                      </div>
                      <div className="text-cyan-300">+1 (555) 123-4567</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        Technical Support
                      </div>
                      <div className="text-blue-200">
                        Get technical assistance and demos
                      </div>
                      <div className="text-cyan-300">
                        support@newfintektech.com
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        Schedule Demos
                      </div>
                      <div className="text-blue-200">
                        Book a personalized platform demonstration
                      </div>
                      <div className="text-cyan-300">Live Chat 24/7</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-sm text-blue-200 mb-2">
                      Business Hours
                    </div>
                    <div className="font-semibold text-white">
                      Mon - Fri: 8:00 AM - 6:00 PM
                    </div>
                    <div className="font-semibold text-white">
                      Sat - Sun: 9:00 AM - 4:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-blue-950 via-purple-950 to-indigo-950 text-white py-12 px-6 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">FT</span>
                </div>
                <span className="text-xl font-bold text-white">
                  New Fintek Technologies
                </span>
              </div>
              <p className="text-blue-200">
                Leading provider of integrated fintech solutions for modern
                financial institutions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Solutions</h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Client Systems
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Back Office
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Data Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Compliance
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Investment Banking
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Wealth Management
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Credit Unions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Consulting
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-2 text-blue-200">
                <li>+1 (555) 123-4567</li>
                <li>info@newfintektech.com</li>
                <li>123 Financial District</li>
                <li>New York, NY 10013</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2024 New Fintek Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
