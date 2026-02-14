import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$49",
    description: "Essential compliance for micro-businesses.",
    features: [
      "Annual Risk Assessment",
      "Standard Employee Handbook",
      "Basic Document Storage",
      "Email Support"
    ],
    cta: "Start Free Trial",
    variant: "outline"
  },
  {
    name: "Professional",
    price: "$99",
    description: "Full protection for growing companies.",
    features: [
      "Quarterly Risk Audits",
      "Industry-Specific Policies",
      "Automated State Filings",
      "Priority Email & Chat Support",
      "Audit Defense Support"
    ],
    cta: "Most Popular",
    variant: "default"
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for complex organizations.",
    features: [
      "Monthly Compliance Deep-Dives",
      "Dedicated Account Manager",
      "Multi-State Operations",
      "API Access",
      "White-label Reports"
    ],
    cta: "Contact Sales",
    variant: "outline"
  }
];

export function PricingCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
      {tiers.map((tier) => (
        <Card key={tier.name} className={`relative flex flex-col ${tier.name === "Professional" ? "border-primary shadow-lg scale-105 z-10" : "border-slate-200 shadow-sm"}`}>
          {tier.name === "Professional" && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
              Best Value
            </div>
          )}
          <CardHeader>
            <CardTitle className="text-xl font-serif">{tier.name}</CardTitle>
            <div className="mt-4 flex items-baseline text-3xl font-bold tracking-tight text-primary">
              {tier.price}
              {tier.price !== "Custom" && <span className="text-sm font-normal text-muted-foreground ml-1">/mo</span>}
            </div>
            <CardDescription className="mt-2">{tier.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                  <span className="text-sm text-slate-600">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant={tier.name === "Professional" ? "default" : "outline"}>
              {tier.cta}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
