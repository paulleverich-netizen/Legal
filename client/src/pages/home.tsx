import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Shield, FileText, Lock, Clock, CheckCircle, ArrowRight, Building2 } from "lucide-react";
import { PricingCards } from "@/components/pricing-cards";
import heroBg from "@/assets/hero-bg.png";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white"></div>
        </div>
        
        <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            New: AI Audit Defense Protocol
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-primary mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Compliance shouldn't <br/> sink your business.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            LedgerShield AI generates audit-proof legal documents, employee handbooks, and safety protocols in minutes. Tailored for your industry.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <Link href="/intake">
              <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                Start Free Risk Assessment
              </Button>
            </Link>
            <Link href="/#features">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-white/50 backdrop-blur-sm">
                View Features
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground animate-in fade-in zoom-in duration-700 delay-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" /> No credit card required
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" /> 50-State Compliant
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Built for Real Businesses</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you run a construction site or a medical practice, our AI understands your specific regulatory environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Documentation</h3>
              <p className="text-muted-foreground">
                Generate employee handbooks, NDAs, and safety protocols instantly. Our AI updates them as laws change.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Audit-Proof Vault</h3>
              <p className="text-muted-foreground">
                Store all your compliance records in one secure, searchable dashboard. Ready for any inspection.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Auto-Monitoring</h3>
              <p className="text-muted-foreground">
                We track state and federal law changes 24/7 and notify you only when you need to take action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                Tailored to Your Industry
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Generic templates don't protect you. LedgerShield AI creates industry-specific documentation that holds up in court.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 bg-accent/20 p-2 rounded-full h-fit">
                    <Building2 className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Construction & Trades</h4>
                    <p className="text-muted-foreground">OSHA-compliant safety plans, subcontractor agreements, and lien waivers.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="mt-1 bg-accent/20 p-2 rounded-full h-fit">
                    <Shield className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Healthcare Practices</h4>
                    <p className="text-muted-foreground">HIPAA checklists, patient consent forms, and staff training modules.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="mt-1 bg-accent/20 p-2 rounded-full h-fit">
                    <FileText className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Property Management</h4>
                    <p className="text-muted-foreground">Lease addendums, fair housing policy statements, and maintenance logs.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <Link href="/intake">
                  <Button variant="outline" className="gap-2">
                    See specific documents for your industry <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-3xl transform rotate-3 scale-105 blur-lg"></div>
              <div className="relative bg-white border border-slate-200 rounded-2xl shadow-xl p-8 max-w-md ml-auto">
                <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-6">
                  <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Compliance Audit Passed</div>
                    <div className="text-sm text-muted-foreground">Generated 2 mins ago</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-2 bg-slate-100 rounded w-3/4"></div>
                  <div className="h-2 bg-slate-100 rounded w-full"></div>
                  <div className="h-2 bg-slate-100 rounded w-5/6"></div>
                  <div className="h-2 bg-slate-100 rounded w-4/5"></div>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Risk Score</span>
                    <span className="text-green-600 font-bold">Low (92/100)</span>
                  </div>
                  <div className="mt-2 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-[92%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-50">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground">Pay for peace of mind, not expensive hourly legal fees.</p>
          </div>
          <PricingCards />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container px-4 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to secure your business?</h2>
          <p className="text-xl text-primary-foreground/80 mb-10">
            Join 2,000+ small businesses who sleep better at night with LedgerShield AI.
          </p>
          <Link href="/auth?mode=signup">
            <Button size="lg" className="h-14 px-10 text-lg bg-accent text-accent-foreground hover:bg-accent/90 border-0">
              Get Started Now
            </Button>
          </Link>
          <p className="mt-6 text-sm text-primary-foreground/60">
            No long-term contracts. Cancel anytime.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
