import "./App.css";
import { useState } from "react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const roleCards = [
  {
    title: "Aggregators",
    description:
      "Farmer groups or cooperatives who collect produce from farmers and sell to buyers.",
  },
  {
    title: "Buyers",
    description:
      "Traders, schools, or businesses who want to buy produce from farmer groups.",
  },
  {
    title: "Country Administrators",
    description:
      "Manage approvals, monitor platform activity, and support implementation locally.",
  },
];

const workflowSteps = [
  {
    title: "Register farmers and stock",
    description: "Aggregators record farmer details and available produce.",
  },
  {
    title: "Buyers view produce",
    description: "Buyers browse what is available in their selected areas.",
  },
  {
    title: "Send offers",
    description: "Buyers and aggregators agree on price and quantity.",
  },
  {
    title: "Complete exchange",
    description: "Produce is delivered and transactions are recorded.",
  },
];

const trustStats = [
  "10+ Countries",
  "30,000+ Farmers Registered",
  "2,000+ Aggregators",
  "2,000+ Metric Tons of Produce",
];

const requestSteps = [
  {
    title: "Step 1: Request Access",
    subtitle: "Tell us who you are",
    fields: ["I am a: Aggregator or Buyer"],
  },
  {
    title: "Step 2: Your Location",
    subtitle: "Share where your organization operates",
    fields: ["Country", "Region / District"],
  },
  {
    title: "Step 3: Organisation Details",
    subtitle: "Provide your organization profile",
    fields: ["Organisation Name", "Organisation Type"],
  },
  {
    title: "Step 4: Contact Details",
    subtitle: "Tell us how to reach you",
    fields: ["Name and Surname", "Email Address", "Phone Number (optional)"],
  },
];

function App() {
  const [isRequestOpen, setIsRequestOpen] = useState(false);

  return (
    <div className="landing-page">
      <header className="landing-header">
        <div className="container header-content">
          <div>
            <p className="brand">Farm2Go</p>
            <p className="brand-subtitle">Digital produce exchange platform</p>
          </div>
          <div className="header-actions">
            <Button variant="outline" onClick={() => setIsRequestOpen(true)}>
              Request Access
            </Button>
            <Button asChild>
              <a
                href="https://ciam.auth.wfp.org/authenticationendpoint/login.do"
                target="_blank"
                rel="noopener noreferrer"
              >
                Log in
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1>Buy and Sell Produce with Confidence</h1>
              <p>
                Farm2Go connects aggregators and buyers to trade produce, track
                stock, and improve market access.
              </p>
              <div className="hero-actions">
                <Button size="lg" asChild>
                  <a
                    href="https://ciam.auth.wfp.org/authenticationendpoint/login.do"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Log in
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsRequestOpen(true)}
                >
                  Request Access
                </Button>
              </div>
              <p className="helper-text">You need an approved account to log in.</p>
            </div>
            <Card className="visual-card">
              <CardHeader>
                <CardTitle>Farm2Go Workflow</CardTitle>
                <CardDescription>
                  Replace with app screenshots or product illustrations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="visual-list">
                  <li>1. Register and get approved</li>
                  <li>2. Publish or browse produce</li>
                  <li>3. Confirm offer and quantity</li>
                  <li>4. Deliver and track results</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Who Is This For</h2>
            <div className="card-grid">
              {roleCards.map((role) => (
                <Card key={role.title}>
                  <CardHeader>
                    <CardTitle>{role.title}</CardTitle>
                    <CardDescription>{role.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section muted-section">
          <div className="container">
            <h2>How Farm2Go Works</h2>
            <div className="card-grid">
              {workflowSteps.map((step) => (
                <Card key={step.title}>
                  <CardHeader>
                    <CardTitle>{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Trusted Across Multiple Countries</h2>
            <div className="stats-list">
              {trustStats.map((stat) => (
                <Badge key={stat} className="stat-badge" variant="default">
                  {stat}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container support-block">
            <h2>Need Help?</h2>
            <p>Contact your local support team for assistance.</p>
            <div className="support-actions">
              <Button variant="secondary">Contact Support</Button>
              <Button variant="outline">WhatsApp Support</Button>
            </div>
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-login">
                <AccordionTrigger>
                  Can I log in if I submitted a request today?
                </AccordionTrigger>
                <AccordionContent>
                  No. You can log in only after your application is reviewed and
                  approved.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-details">
                <AccordionTrigger>What details are required to apply?</AccordionTrigger>
                <AccordionContent>
                  Country, admin areas, organisation name and type,
                  representative name and surname, and email address.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      <Dialog open={isRequestOpen} onOpenChange={setIsRequestOpen}>
        <DialogContent className="dialog-content-scroll">
          <DialogHeader>
            <DialogTitle>Request Access</DialogTitle>
            <DialogDescription>
              New to Farm2Go? Apply for access as an aggregator or a buyer.
            </DialogDescription>
          </DialogHeader>
          <div className="request-content">
            {requestSteps.map((step) => (
              <div key={step.title} className="request-step">
                <h3>{step.title}</h3>
                <p>{step.subtitle}</p>
                <ul>
                  {step.fields.map((field) => (
                    <li key={field}>{field}</li>
                  ))}
                </ul>
              </div>
            ))}
            <Button variant="outline">Submit Request</Button>
            <Alert variant="warning">
              <AlertTitle>Approval is required</AlertTitle>
              <AlertDescription>
                Submitting a request does not guarantee access. Applications are
                reviewed by the country administration team.
              </AlertDescription>
            </Alert>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
