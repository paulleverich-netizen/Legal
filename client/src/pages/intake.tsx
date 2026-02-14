import { Navbar } from "@/components/navbar";
import { IntakeWizard } from "@/components/intake-wizard";

export default function Intake() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1 py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-serif font-bold text-primary mb-4">Risk Assessment & Intake</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Answer a few questions about your business. Our AI will identify gaps and generate your custom compliance plan.
          </p>
        </div>
        <IntakeWizard />
      </main>
    </div>
  );
}
