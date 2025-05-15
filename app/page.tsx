import Link from "next/link"
import { ArrowRight, CheckCircle2, BarChart3, Zap, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Zap className="h-5 w-5 text-primary" />
            <span>SaaSify</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:text-primary">
              Log in
            </Link>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Simplify Your Workflow with SaaSify
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  The all-in-one platform that helps your team collaborate, manage projects, and deliver results faster.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="gap-1.5">
                  Start for free
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  View demo
                </Button>
              </div>
            </div>
            <div className="mt-16 flex justify-center">
              <div className="relative w-full max-w-[1200px] overflow-hidden rounded-lg border shadow-xl">
                <img
                  src="/modern-saas-dashboard.png"
                  alt="SaaSify dashboard interface"
                  className="w-full object-cover"
                  width={1200}
                  height={600}
                />
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="bg-muted/50 py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Powerful Features</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Everything you need to manage your business efficiently.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center gap-2 rounded-lg border bg-background p-6 text-center shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Advanced Analytics</h3>
                <p className="text-gray-500">
                  Gain insights into your business with powerful analytics and reporting tools.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-lg border bg-background p-6 text-center shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Automation</h3>
                <p className="text-gray-500">Automate repetitive tasks and workflows to save time and reduce errors.</p>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-lg border bg-background p-6 text-center shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Enterprise Security</h3>
                <p className="text-gray-500">
                  Keep your data safe with enterprise-grade security and compliance features.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Simple, Transparent Pricing
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Choose the plan that works best for your business.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold">Starter</h3>
                  <p className="text-gray-500">Perfect for small teams just getting started.</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$29</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Up to 5 team members</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Basic analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>5GB storage</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button className="w-full">Get Started</Button>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border-2 border-primary bg-background p-6 shadow-lg">
                <div className="flex flex-col gap-2">
                  <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    Popular
                  </div>
                  <h3 className="text-2xl font-bold">Professional</h3>
                  <p className="text-gray-500">For growing teams that need more.</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$79</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Up to 20 team members</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>20GB storage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button className="w-full">Get Started</Button>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-gray-500">For large organizations with specific needs.</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$199</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Unlimited team members</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Custom analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Unlimited storage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>24/7 dedicated support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Custom integrations</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button className="w-full">Contact Sales</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="bg-muted/50 py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Trusted by Thousands</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  See what our customers have to say about SaaSify.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col gap-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <img
                    src="/professional-woman-headshot.png"
                    alt="Sarah Johnson"
                    className="h-12 w-12 rounded-full object-cover"
                    width={48}
                    height={48}
                  />
                  <div>
                    <h3 className="font-bold">Sarah Johnson</h3>
                    <p className="text-sm text-gray-500">Marketing Director</p>
                  </div>
                </div>
                <p className="text-gray-500">
                  "SaaSify has transformed how our marketing team collaborates. We've seen a 40% increase in
                  productivity since implementing it."
                </p>
              </div>
              <div className="flex flex-col gap-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <img
                    src="/professional-man-headshot.png"
                    alt="David Chen"
                    className="h-12 w-12 rounded-full object-cover"
                    width={48}
                    height={48}
                  />
                  <div>
                    <h3 className="font-bold">David Chen</h3>
                    <p className="text-sm text-gray-500">CTO</p>
                  </div>
                </div>
                <p className="text-gray-500">
                  "The security features in SaaSify give us peace of mind. It's been a game-changer for our development
                  team."
                </p>
              </div>
              <div className="flex flex-col gap-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <img
                    src="/diverse-professional-woman-headshots.png"
                    alt="Maria Rodriguez"
                    className="h-12 w-12 rounded-full object-cover"
                    width={48}
                    height={48}
                  />
                  <div>
                    <h3 className="font-bold">Maria Rodriguez</h3>
                    <p className="text-sm text-gray-500">Project Manager</p>
                  </div>
                </div>
                <p className="text-gray-500">
                  "I can't imagine managing our projects without SaaSify now. The automation features have saved us
                  countless hours."
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Join thousands of companies that trust SaaSify to power their business.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="gap-1.5">
                  Start your free trial
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Contact sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted/50">
        <div className="container flex flex-col gap-8 py-12 md:flex-row md:py-16">
          <div className="flex flex-col gap-4 md:w-1/3">
            <div className="flex items-center gap-2 font-bold text-xl">
              <Zap className="h-5 w-5 text-primary" />
              <span>SaaSify</span>
            </div>
            <p className="text-sm text-gray-500">
              Simplify your workflow and boost productivity with our all-in-one platform.
            </p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">Product</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                  Features
                </Link>
                <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                  Pricing
                </Link>
                <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                  Integrations
                </Link>
                <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                  Changelog
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">Company</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                  About
                </Link>
                <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                  Blog
                </Link>
                <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                  Careers
                </Link>
                <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                  Contact
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">Resources</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                  Documentation
                </Link>
                <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                  Help Center
                </Link>
                <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                  Community
                </Link>
                <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                  Webinars
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-gray-500 md:text-left">
              © {new Date().getFullYear()} SaaSify. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                Terms
              </Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
