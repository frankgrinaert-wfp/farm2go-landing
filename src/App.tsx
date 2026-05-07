import { useState } from "react";
import {
  ClipboardList,
  Handshake,
  ShoppingCart,
  Store,
  Tractor,
  UserCheck,
  Users,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
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
    icon: Tractor,
    iconClassName: "h-6 w-6 text-green-600",
  },
  {
    title: "Buyers",
    description:
      "Traders, schools, or businesses who want to buy produce from farmer groups.",
    icon: ShoppingCart,
    iconClassName: "h-6 w-6 text-blue-600",
  },
  {
    title: "Country administrators",
    description:
      "Manage approvals, monitor platform activity, and support implementation locally.",
    icon: UserCheck,
    iconClassName: "h-6 w-6 text-purple-600",
  },
];

const workflowSteps = [
  {
    title: "Register farmers and stock",
    description: "Aggregators record farmer details and available produce.",
    icon: Users,
    iconClassName: "h-6 w-6 text-aqua-600",
  },
  {
    title: "Buyers view produce",
    description: "Buyers browse what is available in their selected areas.",
    icon: Store,
    iconClassName: "h-6 w-6 text-orange-600",
  },
  {
    title: "Send offers",
    description: "Buyers and aggregators agree on price and quantity.",
    icon: Handshake,
    iconClassName: "h-6 w-6 text-brown-600",
  },
  {
    title: "Complete exchange",
    description: "Produce is delivered and transactions are recorded.",
    icon: ClipboardList,
    iconClassName: "h-6 w-6 text-red-600",
  },
];

const trustStats = [
  "10+ countries",
  "30,000+ farmers registered",
  "2,000+ aggregators",
  "2,000+ metric tons of produce",
];

const requestSteps = [
  {
    title: "Step 1: Request access",
    subtitle: "Tell us who you are",
    fields: ["I am a: Aggregator or buyer"],
  },
  {
    title: "Step 2: Your location",
    subtitle: "Share where your organization operates",
    fields: ["Country", "Region / district"],
  },
  {
    title: "Step 3: Organisation details",
    subtitle: "Provide your organization profile",
    fields: ["Organisation name", "Organisation type"],
  },
  {
    title: "Step 4: Contact details",
    subtitle: "Tell us how to reach you",
    fields: ["Name and surname", "Email address", "Phone number (optional)"],
  },
];

function App() {
  const [isRequestOpen, setIsRequestOpen] = useState(false);

  return (
    <div className="text-foreground">
      <header className="sticky top-0 z-10 border-b border-border bg-background">
        <div className="mx-auto flex w-[min(1120px,calc(100%-3rem))] items-center justify-between gap-4 py-4 max-[720px]:w-[min(1120px,calc(100%-2rem))] max-[720px]:flex-col max-[720px]:items-stretch">
          <div>
            <p className="m-0 text-xl font-bold">Farm2Go</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Digital produce exchange platform
            </p>
          </div>
          <div className="flex gap-3 max-[720px]:flex-col max-[720px]:items-stretch">
            <Button variant="outline" onClick={() => setIsRequestOpen(true)}>
              Request access
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
        <section className="relative flex min-h-[34rem] items-center bg-[url('https://miro.medium.com/v2/resize:fit:1400/0*kO9nPbo7uZXR3L85.jpeg')] bg-cover bg-center bg-no-repeat py-16 max-[720px]:min-h-[28rem] max-[720px]:py-12">
          <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
          <div className="relative mx-auto w-[min(1120px,calc(100%-3rem))] max-[720px]:w-[min(1120px,calc(100%-2rem))]">
            <div>
              <h1 className="m-0 text-4xl leading-[1.15] font-bold text-white md:text-5xl">
                Buy and sell produce with confidence
              </h1>
              <p className="mt-4 max-w-[56ch] text-lg text-white">
                Farm2Go connects aggregators and buyers to trade produce, track
                stock, and improve market access.
              </p>
              <div className="mt-6 flex gap-3 max-[720px]:flex-col max-[720px]:items-stretch">
                <Button size="lg" className="text-base" asChild>
                  <a
                    href="https://ciam.auth.wfp.org/authenticationendpoint/login.do"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Log in
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base"
                  onClick={() => setIsRequestOpen(true)}
                >
                  Request access
                </Button>
              </div>
              <p className="mt-3.5 text-sm text-white/90">
                You need an approved account to log in.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 max-[720px]:py-12">
          <div className="mx-auto w-[min(1120px,calc(100%-3rem))] max-[720px]:w-[min(1120px,calc(100%-2rem))]">
            <h2 className="mb-6 text-[clamp(1.5rem,2.8vw,2rem)] font-bold">
              Who Farm2Go is for
            </h2>
            <div className="grid grid-cols-3 gap-4 max-[980px]:grid-cols-2 max-[720px]:grid-cols-1">
              {roleCards.map((role) => (
                <Card key={role.title}>
                  <CardHeader>
                    <role.icon
                      className={role.iconClassName}
                      aria-hidden="true"
                    />
                    <CardTitle className="text-lg">{role.title}</CardTitle>
                    <CardDescription className="text-base">
                      {role.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-neutral-50 py-16 max-[720px]:py-12">
          <div className="mx-auto w-[min(1120px,calc(100%-3rem))] max-[720px]:w-[min(1120px,calc(100%-2rem))]">
            <h2 className="mb-6 text-[clamp(1.5rem,2.8vw,2rem)] font-bold">
              How Farm2Go works
            </h2>
            <div className="grid grid-cols-3 gap-4 max-[980px]:grid-cols-2 max-[720px]:grid-cols-1">
              {workflowSteps.map((step) => (
                <Card key={step.title}>
                  <CardHeader>
                    <step.icon
                      className={step.iconClassName}
                      aria-hidden="true"
                    />
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                    <CardDescription className="text-base">
                      {step.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 max-[720px]:py-12">
          <div className="mx-auto w-[min(1120px,calc(100%-3rem))] max-[720px]:w-[min(1120px,calc(100%-2rem))]">
            <h2 className="mb-6 text-[clamp(1.5rem,2.8vw,2rem)] font-bold">
              Trusted across multiple countries
            </h2>
            <div className="flex flex-wrap gap-3">
              {trustStats.map((stat) => (
                <Badge
                  key={stat}
                  className="px-3.5 py-2 text-[1.05rem]"
                  variant="default"
                >
                  {stat}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 max-[720px]:py-12">
          <div className="mx-auto w-[min(1120px,calc(100%-3rem))] max-[720px]:w-[min(1120px,calc(100%-2rem))]">
            <h2 className="mb-6 text-[clamp(1.5rem,2.8vw,2rem)] font-bold">
              Need help?
            </h2>
            <p className="mb-5 text-lg text-muted-foreground">
              Contact your local support team for assistance.
            </p>
            <div className="mb-4 flex gap-3 max-[720px]:flex-col max-[720px]:items-stretch">
              <Button size="lg" variant="secondary" className="text-base">
                Contact support
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                WhatsApp support
              </Button>
            </div>
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-login">
                <AccordionTrigger className="text-base">
                  Can I log in if I submitted a request today?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  No. You can log in only after your application is reviewed and
                  approved.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-details">
                <AccordionTrigger className="text-base">
                  What details are required to apply?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Country, admin areas, organisation name and type,
                  representative name and surname, and email address.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      <Dialog open={isRequestOpen} onOpenChange={setIsRequestOpen}>
        <DialogContent className="max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Request access</DialogTitle>
            <DialogDescription className="text-base">
              New to Farm2Go? Apply for access as an aggregator or a buyer.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            {requestSteps.map((step) => (
              <div key={step.title}>
                <h3 className="m-0 text-base font-bold">{step.title}</h3>
                <p className="mt-1 mb-2 text-lg text-muted-foreground">
                  {step.subtitle}
                </p>
                <ul className="m-0 list-disc pl-5 text-lg">
                  {step.fields.map((field) => (
                    <li key={field}>{field}</li>
                  ))}
                </ul>
              </div>
            ))}
            <Button size="lg" variant="outline">
              Submit request
            </Button>
            <Alert variant="warning">
              <AlertTitle>Approval is required</AlertTitle>
              <AlertDescription className="text-base">
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
