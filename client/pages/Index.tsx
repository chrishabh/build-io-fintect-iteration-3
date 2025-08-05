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
      description: "Secure client authentication (web & mobile) with comprehensive dashboard",
      features: [
        "Dashboard with real-time account value and portfolio allocation (Cambio, Equity, Loans, etc.)",
        "Performance graphs and KYC & demographic data view",
        "View & download contract notes, statements, and trade history",
        "Trading interface for Cambio (FX), Equity (stocks), Loans, Margin, Repo, Bonds",
        "Asset management products and payment capabilities",
        "Bank lodgements, journal entries, and internal transfers",
        "Notifications and alerts (email, push)"
      ]
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
        "Status tracking post-submission"
      ]
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
        "Notification system to applicants and internal teams"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Client Management Portal (Back Office)",
      description: "Comprehensive client list with filters (status, asset value, etc.)",
      features: [
        "View and manage all client portfolios",
        "Execute trades on behalf of clients (if required)",
        "Generate P&L Reports, Commission breakdowns, Trade summaries",
        "Trade compliance checks and bulk export for auditors/regulators",
        "Log of user and client actions",
        "Portfolio performance analytics and risk management"
      ]
    },
    {
      icon: <CreditCard className="w-8 h-8 text-orange-600" />,
      title: "CRM Portal",
      description: "360° Client View (interaction logs, portfolio snapshot, preferences)",
      features: [
        "Lead management with funnel/pipeline view",
        "Mass Email Campaigns: Templates, scheduling, analytics",
        "Target management: Sales target setting and performance tracking",
        "Ticket management: Client query system with internal assignment and resolution",
        "Survey management with analytics dashboards",
        "Integrations with platforms like HubSpot, Salesforce (optional)"
      ]
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
        "Automated compliance and regulatory reporting"
      ]
    }
  ];

  const platformCapabilities = [
    {
      category: "Client-Facing Solutions & Management",
      icon: <Users className="w-12 h-12 text-indigo-600" />,
      color: "indigo",
      capabilities: [
        { name: "Client Portal Dashboard", description: "Secure authentication with real-time account value and portfolio allocation" },
        { name: "Mobile Application", description: "Native mobile experience with trading interface and notifications" },
        { name: "Performance Analytics", description: "Real-time graphs, KYC data view, and portfolio insights" },
        { name: "Document Management", description: "View & download contract notes, statements, and trade history" },
        { name: "Multi-Asset Trading", description: "Cambio (FX), Equity, Loans, Margin, Repo, Bonds interface" },
        { name: "Payment Processing", description: "Bank lodgements, journal entries, and internal transfers" },
        { name: "Onboarding Workflow", description: "Multi-step guided flow with OCR, biometric verification" },
        { name: "Digital Signatures", description: "DocuSign, Adobe Sign integration with auto-save progress" },
        { name: "Admin Portal", description: "Application management with third-party verification tools" },
        { name: "Client Management", description: "Comprehensive portfolios, trade execution, and compliance checks" },
        { name: "Audit & Compliance", description: "Complete audit trails and regulatory reporting capabilities" },
        { name: "Notification System", description: "Email, push alerts, and internal team communications" }
      ]
    },
    {
      category: "Trading & Investment Platform",
      icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
      color: "blue",
      capabilities: [
        { name: "Cambio", description: "Foreign exchange trading with real-time rates" },
        { name: "Equity Trading", description: "Stock market transactions and portfolio management" },
        { name: "Loans", description: "Loan origination, servicing, and management" },
        { name: "Margin Trading", description: "Leveraged trading with risk management" },
        { name: "Repo Transactions", description: "Repurchase agreements and securities lending" },
        { name: "Bonds", description: "Fixed income securities trading and management" },
        { name: "Asset Management", description: "Portfolio optimization and asset allocation" },
        { name: "Bank Lodgement", description: "Secure deposit and withdrawal processing" },
        { name: "Payments", description: "Multi-currency payment processing" },
        { name: "Journal Entries", description: "Automated transaction recording" }
      ]
    },
    {
      category: "CRM & Client Management",
      icon: <Users className="w-12 h-12 text-purple-600" />,
      color: "purple",
      capabilities: [
        { name: "360° Client Profile", description: "Complete view of history, holdings, and preferences" },
        { name: "Lead Management", description: "Funnel/pipeline view with conversion tracking" },
        { name: "Mass Email Campaigns", description: "Templates, scheduling, and analytics" },
        { name: "Target Management", description: "Sales target setting and performance tracking" },
        { name: "Ticket Management", description: "Client query system with internal assignment" },
        { name: "Survey Management", description: "Analytics dashboards and feedback collection" },
        { name: "HubSpot Integration", description: "Seamless CRM data synchronization" },
        { name: "Salesforce Integration", description: "Enterprise-grade CRM connectivity" }
      ]
    },
    {
      category: "Financial Accounting & Compliance",
      icon: <DollarSign className="w-12 h-12 text-green-600" />,
      color: "green",
      capabilities: [
        { name: "Automated Journal Entries", description: "Trade-linked accounting automation" },
        { name: "Trial Balance", description: "Real-time balance verification" },
        { name: "General Ledger", description: "Complete chart of accounts management" },
        { name: "Sub-ledger Views", description: "Detailed transaction breakdowns" },
        { name: "Month-end Closure", description: "Automated period-end processes" },
        { name: "Year-end Closure", description: "Annual financial closing workflows" },
        { name: "Audit Logs", description: "Comprehensive regulatory compliance trails" },
        { name: "Tax-ready Exports", description: "CSV, XBRL, and regulatory format exports" },
        { name: "Balance Sheet", description: "Real-time financial position reporting" },
        { name: "Income Statement", description: "P&L analysis and reporting" },
        { name: "Reconciliation Tools", description: "Bank and GL vs. trades matching" },
        { name: "Approval Workflows", description: "Multi-level entry and report approvals" }
      ]
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
      <section id="platform" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Comprehensive Platform Capabilities</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Enterprise-grade fintech infrastructure delivering complete trading, CRM, and accounting solutions
              with advanced automation and regulatory compliance
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
                  <h3 className="text-3xl font-bold text-slate-800 mb-3">{category.category}</h3>
                  <div className={`w-24 h-1 mx-auto rounded-full bg-gradient-to-r ${
                    category.color === 'indigo' ? 'from-indigo-500 to-purple-500' :
                    category.color === 'blue' ? 'from-blue-500 to-cyan-500' :
                    category.color === 'purple' ? 'from-purple-500 to-pink-500' :
                    'from-green-500 to-emerald-500'
                  }`}></div>
                </div>

                {/* Capabilities Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.capabilities.map((capability, capIndex) => (
                    <Card key={capIndex} className="border-slate-200 hover:shadow-xl transition-all duration-300 group/card bg-white/80 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-3">
                          <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${
                            category.color === 'indigo' ? 'bg-indigo-500' :
                            category.color === 'blue' ? 'bg-blue-500' :
                            category.color === 'purple' ? 'bg-purple-500' :
                            'bg-green-500'
                          }`}></div>
                          <div className="flex-1">
                            <h4 className={`font-semibold mb-2 group-hover/card:${
                              category.color === 'blue' ? 'text-blue-600' :
                              category.color === 'purple' ? 'text-purple-600' :
                              'text-green-600'
                            } transition-colors`}>
                              {capability.name}
                            </h4>
                            <p className="text-sm text-slate-600 leading-relaxed">
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
                        <div className="text-3xl font-bold mb-2">Mobile-First</div>
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
                        <div className="text-3xl font-bold mb-2">Multi-Asset</div>
                        <div className="text-blue-100">Trading Platform</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold mb-2">Risk Management</div>
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
                        <div className="text-purple-100">Client Intelligence</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold mb-2">Automated</div>
                        <div className="text-purple-100">Campaign Management</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold mb-2">Advanced</div>
                        <div className="text-purple-100">Analytics Dashboard</div>
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
                        <div className="text-3xl font-bold mb-2">Regulatory</div>
                        <div className="text-green-100">Compliance Ready</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold mb-2">Real-time</div>
                        <div className="text-green-100">Financial Reporting</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Technical Excellence Banner */}
          <div className="mt-20 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-12 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Technical Excellence & Security</h3>
              <p className="text-slate-300 max-w-3xl mx-auto">
                Built on enterprise-grade infrastructure with 99.9% uptime, bank-level security,
                and seamless integration capabilities
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Shield className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                <div className="font-semibold mb-1">Bank-Level Security</div>
                <div className="text-sm text-slate-400">End-to-end encryption</div>
              </div>
              <div className="text-center">
                <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
                <div className="font-semibold mb-1">High Performance</div>
                <div className="text-sm text-slate-400">Microsecond latency</div>
              </div>
              <div className="text-center">
                <Globe className="w-12 h-12 text-green-400 mx-auto mb-3" />
                <div className="font-semibold mb-1">Global Compliance</div>
                <div className="text-sm text-slate-400">Multi-jurisdiction ready</div>
              </div>
              <div className="text-center">
                <Layers className="w-12 h-12 text-purple-400 mx-auto mb-3" />
                <div className="font-semibold mb-1">API-First Design</div>
                <div className="text-sm text-slate-400">Seamless integrations</div>
              </div>
            </div>
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
