import { useState } from "react";
import {
  ArrowLeftRight,
  ClipboardList,
  MessagesSquare,
  LogIn,
  SearchCheck,
  Store,
  UserStar,
  Users,
  Info,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const roleCards = [
  {
    title: "Aggregators",
    description:
      "Farmer groups or cooperatives who collect produce from farmers and sell to buyers.",
    icon: Users,
    iconClassName: "bg-orange-100 text-orange-600",
  },
  {
    title: "Buyers",
    description:
      "Traders, schools, or businesses who want to buy produce from farmer groups.",
    icon: Store,
    iconClassName: "bg-blue-100 text-blue-600",
  },
  {
    title: "Country administrators",
    description:
      "Manage approvals, monitor platform activity, and support implementation locally.",
    icon: UserStar,
    iconClassName: "bg-green-100 text-green-600",
  },
];

const workflowSteps = [
  {
    title: "Register farmers and stock",
    description: "Aggregators record farmer details and available produce.",
    icon: ClipboardList,
  },
  {
    title: "Buyers view produce",
    description: "Buyers browse what is available in their selected areas.",
    icon: SearchCheck,
  },
  {
    title: "Send offers",
    description: "Buyers and aggregators agree on price and quantity.",
    icon: MessagesSquare,
  },
  {
    title: "Complete exchange",
    description: "Produce is delivered and transactions are recorded.",
    icon: ArrowLeftRight,
  },
];

const trustStats = [
  "10+ countries",
  "30,000+ farmers registered",
  "2,000+ aggregators",
  "2,000+ metric tons of produce",
];

function Farm2GoIcon() {
  return (
    <svg
      viewBox="0 0 640 640"
      aria-hidden="true"
      className="size-7 text-wfp-blue"
      fill="currentColor"
    >
      <path d="M240 48C284.2 48 320 83.8 320 128C320 136.8 312.8 144 304 144C259.8 144 224 108.2 224 64C224 55.2 231.2 48 240 48zM120 64L168 64C181.3 64 192 74.7 192 88C192 101.3 181.3 112 168 112L120 112C106.7 112 96 101.3 96 88C96 74.7 106.7 64 120 64zM88 136L200 136C213.3 136 224 146.7 224 160C224 173.3 213.3 184 200 184L88 184C74.7 184 64 173.3 64 160C64 146.7 74.7 136 88 136zM96 232C96 218.7 106.7 208 120 208L168 208C181.3 208 192 218.7 192 232C192 245.3 181.3 256 168 256L120 256C106.7 256 96 245.3 96 232zM336 64C336 55.2 343.2 48 352 48C396.2 48 432 83.8 432 128C432 136.8 424.8 144 416 144C371.8 144 336 108.2 336 64zM464 48C508.2 48 544 83.8 544 128C544 136.8 536.8 144 528 144C483.8 144 448 108.2 448 64C448 55.2 455.2 48 464 48zM544 192C544 236.2 508.2 272 464 272C455.2 272 448 264.8 448 256C448 211.8 483.8 176 528 176C536.8 176 544 183.2 544 192zM416 176C424.8 176 432 183.2 432 192C432 236.2 396.2 272 352 272C343.2 272 336 264.8 336 256C336 211.8 371.8 176 416 176zM320 192C320 236.2 284.2 272 240 272C231.2 272 224 264.8 224 256C224 211.8 259.8 176 304 176C312.8 176 320 183.2 320 192zM64 368C64 341.5 85.5 320 112 320L528 320C554.5 320 576 341.5 576 368L576 528C576 554.5 554.5 576 528 576L112 576C85.5 576 64 554.5 64 528L64 368zM112 480L112 528L160 528C160 501.5 138.5 480 112 480zM160 368L112 368L112 416C138.5 416 160 394.5 160 368zM528 480C501.5 480 480 501.5 480 528L528 528L528 480zM480 368C480 394.5 501.5 416 528 416L528 368L480 368zM384 448C384 412.7 355.3 384 320 384C284.7 384 256 412.7 256 448C256 483.3 284.7 512 320 512C355.3 512 384 483.3 384 448z" />
    </svg>
  );
}

function App() {
  const [isRequestOpen, setIsRequestOpen] = useState(false);

  return (
    <div className="text-foreground">
      <header className="sticky top-0 z-10 bg-background shadow-md">
        <div className="mx-auto flex w-[min(1120px,calc(100%-3rem))] items-center justify-between gap-4 py-4 max-[720px]:w-[min(1120px,calc(100%-2rem))]">
          <div>
            <p className="m-0 flex items-center gap-2 text-xl font-bold text-wfp-blue">
              <Farm2GoIcon />
              Farm2Go
            </p>
          </div>
          <div className="flex gap-3">
            <Button asChild>
              <a
                href="https://ciam.auth.wfp.org/authenticationendpoint/login.do"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LogIn aria-hidden="true" />
                Log in
              </a>
            </Button>
            {/*<Button variant="outline" onClick={() => setIsRequestOpen(true)}>
              Request access
            </Button>*/}
          </div>
        </div>
      </header>

      <main>
        <section className="relative flex min-h-120 items-center bg-[url('https://miro.medium.com/v2/resize:fit:1400/0*kO9nPbo7uZXR3L85.jpeg')] bg-cover bg-center bg-no-repeat py-24 max-[720px]:min-h-[28rem] max-[720px]:py-12">
          <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
          <div className="relative mx-auto w-[min(1120px,calc(100%-3rem))] max-[720px]:w-[min(1120px,calc(100%-2rem))]">
            <div className="flex flex-col gap-8 max-w-xl">
              <h1 className="text-4xl font-bold text-white md:text-5xl">
                Buy and sell produce with confidence
              </h1>
              <p className="text-lg text-white">
                Farm2Go connects aggregators and buyers to trade produce, track
                stock, and improve market access.
              </p>
              <div className="flex gap-3 max-[720px]:flex-col max-[720px]:items-stretch">
                <Button size="lg" className="text-base" asChild>
                  <a
                    href="https://ciam.auth.wfp.org/authenticationendpoint/login.do"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LogIn aria-hidden="true" />
                    Log in
                  </a>
                </Button>
                {/*<Button
                  size="lg"
                  variant="outline"
                  className="text-base"
                  onClick={() => setIsRequestOpen(true)}
                >
                  Request access
                </Button>*/}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 max-[720px]:py-12">
          <div className="mx-auto w-[min(1120px,calc(100%-3rem))] max-[720px]:w-[min(1120px,calc(100%-2rem))]">
            <h2 className="mb-6 text-3xl font-bold">Who Farm2Go is for</h2>
            <div className="grid grid-cols-3 gap-4 max-[980px]:grid-cols-2 max-[720px]:grid-cols-1">
              {roleCards.map((role) => (
                <Card key={role.title}>
                  <CardHeader>
                    <role.icon
                      className={`size-14 rounded-lg p-3 mb-2 ${role.iconClassName}`}
                      aria-hidden="true"
                    />
                    <CardTitle className="text-xl">{role.title}</CardTitle>
                    <CardDescription className="text-base">
                      {role.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-neutral-50 py-24 max-[720px]:py-12">
          <div className="mx-auto w-[min(1120px,calc(100%-3rem))] max-[720px]:w-[min(1120px,calc(100%-2rem))]">
            <h2 className="mb-6 text-3xl font-bold">How Farm2Go works</h2>
            <div className="grid grid-cols-4 gap-4 max-[980px]:grid-cols-2 max-[720px]:grid-cols-1">
              {workflowSteps.map((step) => (
                <Card key={step.title}>
                  <CardHeader>
                    <step.icon
                      className={`size-10 rounded-lg p-2 text-blue-600 bg-blue-100 mb-1`}
                      aria-hidden="true"
                    />
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 max-[720px]:py-12">
          <div className="mx-auto w-[min(1120px,calc(100%-3rem))] max-[720px]:w-[min(1120px,calc(100%-2rem))]">
            <h2 className="mb-6 text-3xl font-bold">
              Trusted across multiple countries
            </h2>
            <div className="flex flex-wrap gap-3">
              {trustStats.map((stat) => (
                <Badge key={stat} className="px-3.5 py-2 text-base">
                  {stat}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 max-[720px]:py-12">
          <div className="mx-auto w-[min(1120px,calc(100%-3rem))] max-[720px]:w-[min(1120px,calc(100%-2rem))]">
            <h2 className="mb-6 text-3xl font-bold">Need help?</h2>
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

      <Sheet open={isRequestOpen} onOpenChange={setIsRequestOpen}>
        <SheetContent className="w-full overflow-y-auto sm:max-w-lg">
          <SheetHeader>
            <SheetTitle>Request access</SheetTitle>
            <SheetDescription>
              Complete this form to request Farm2Go access.
            </SheetDescription>
          </SheetHeader>

          <form className="grid gap-6 px-4 pb-6">
            <Alert variant="info">
              <Info />
              <AlertDescription>
                Access is granted only after review by the country
                administration team. This process may take time, and you will
                need to wait for confirmation before logging in.
              </AlertDescription>
            </Alert>
            <div className="grid gap-2">
              <Label htmlFor="country">Country</Label>
              <Select name="country">
                <SelectTrigger id="country" className="w-full">
                  <SelectValue placeholder="Select your country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kenya">Kenya</SelectItem>
                  <SelectItem value="uganda">Uganda</SelectItem>
                  <SelectItem value="tanzania">Tanzania</SelectItem>
                  <SelectItem value="rwanda">Rwanda</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="role">Role</Label>
              <Select name="role">
                <SelectTrigger id="role" className="w-full">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aggregator">Aggregator</SelectItem>
                  <SelectItem value="buyer">Buyer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="full-name">Name and surname</Label>
              <Input id="full-name" name="fullName" placeholder="John Doe" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
              />
            </div>

            <div className="rounded-md border p-3">
              <div className="flex items-start gap-2">
                <Checkbox id="robot-check" />
                <Label htmlFor="robot-check" className="font-normal leading-5">
                  I confirm I am not a robot.
                </Label>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Checkbox id="privacy-consent" />
              <Label
                htmlFor="privacy-consent"
                className="font-normal leading-5"
              >
                I agree that Farm2Go may process my data to review this request
              </Label>
            </div>

            <Button type="submit" size="lg">
              Submit
            </Button>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default App;
