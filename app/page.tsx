import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Users, BarChart, MessageSquare } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a0f29]">
      {/* Header */}
      <header className="w-full border-b border-[#1a2040] bg-[#0a0f29]">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Users className="h-6 w-6 text-[#4a7bf7]" />
            <span className="text-xl font-bold text-white">InfluEthiopia</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              How It Works
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              For Brands
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              For Influencers
            </Link>
            <Link href="/explore" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Explore
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="hidden md:inline-flex text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Log in
            </Link>
            <Button className="bg-[#4a7bf7] hover:bg-[#3a6ae7] text-white">Sign Up</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[1100px] bg-[#f0f6ff] rounded-3xl p-8 md:p-12 lg:p-16">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-[#4a7bf7]">CREATE & SHARE</div>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#0a0f29]">
                      Connect with Ethiopia&apos;s Top Creators
                    </h1>
                    <p className="max-w-[600px] text-gray-600 md:text-xl">
                      Find influencers, launch campaigns, and grow your brand with the power of authentic content.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button className="bg-[#0a0f29] hover:bg-[#1a2040] text-white">Let&apos;s Get Started!</Button>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative h-[350px] w-full overflow-hidden rounded-2xl">
                    <Image
                      src="/placeholder.svg?height=700&width=700"
                      alt="Ethiopian influencers collaborating with brands"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-xl font-medium tracking-tight sm:text-2xl text-white">
                  Trusted by top Ethiopian brands
                </h2>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-8">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center justify-center">
                    <Image
                      src={`/placeholder.svg?height=60&width=120&text=Brand+${i}`}
                      alt={`Brand ${i}`}
                      width={120}
                      height={60}
                      className="opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[1100px] bg-[#f0f6ff] rounded-3xl p-8 md:p-12 lg:p-16">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="text-sm font-medium text-[#4a7bf7]">STAY CONNECTED</div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-[#0a0f29]">
                    Automatically Updating Stats
                  </h2>
                  <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We connect Ethiopian brands with authentic local influencers to create meaningful campaigns
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 lg:gap-12">
                {[
                  {
                    icon: <Users className="h-10 w-10 text-[#4a7bf7]" />,
                    title: "Verified Influencers",
                    description:
                      "Access a curated network of authentic Ethiopian content creators with engaged audiences.",
                  },
                  {
                    icon: <BarChart className="h-10 w-10 text-[#4a7bf7]" />,
                    title: "Campaign Analytics",
                    description:
                      "Track performance with real-time metrics and insights to optimize your marketing ROI.",
                  },
                  {
                    icon: <MessageSquare className="h-10 w-10 text-[#4a7bf7]" />,
                    title: "Seamless Communication",
                    description: "Direct messaging and collaboration tools to streamline your campaign workflow.",
                  },
                ].map((benefit, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                  >
                    <div className="rounded-full p-2">{benefit.icon}</div>
                    <h3 className="text-xl font-bold text-[#0a0f29]">{benefit.title}</h3>
                    <p className="text-center text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="text-sm font-medium text-[#4a7bf7]">PROCESS</div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
                  What can you do with your Influencer?
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Simple steps to launch your influencer marketing campaign
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Create your brand profile",
                  description:
                    "Sign up and create your brand profile with details about your products and target audience.",
                },
                {
                  step: "02",
                  title: "Find the right influencers",
                  description:
                    "Browse our database of Ethiopian influencers filtered by niche, audience size, and engagement.",
                },
                {
                  step: "03",
                  title: "Launch your campaign",
                  description:
                    "Set your budget, create a brief, and collaborate directly with influencers to create authentic content.",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="relative flex flex-col items-start space-y-4 rounded-xl border border-[#1a2040] bg-[#0f1535] p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4a7bf7] text-white font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Showcase Section */}
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[1100px] bg-[#f0f6ff] rounded-3xl p-8 md:p-12 lg:p-16">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-[#4a7bf7]">SHOWCASE MAGIC</div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#0a0f29]">
                      Spotlight your new campaigns
                    </h2>
                    <p className="max-w-[600px] text-gray-600">
                      Get your new campaigns in front of fans on all your social platforms. We make it easy to quickly
                      link to spotlight before the formatting is lost.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button className="bg-[#0a0f29] hover:bg-[#1a2040] text-white">Learn More</Button>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative h-[300px] w-full overflow-hidden rounded-xl border border-gray-200 bg-white p-4">
                    <div className="grid grid-cols-2 gap-2 h-full">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="relative rounded-lg overflow-hidden">
                          <Image
                            src={`/placeholder.svg?height=150&width=150&text=Campaign+${i}`}
                            alt={`Campaign ${i}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[800px] text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
                  Ready to grow your brand in Ethiopia?
                </h2>
                <p className="text-gray-400 md:text-xl">
                  Join our platform today and connect with Ethiopia's top influencers
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button className="bg-[#4a7bf7] hover:bg-[#3a6ae7] text-white">Let&apos;s Get Started!</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-[#1a2040] py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Users className="h-6 w-6 text-[#4a7bf7]" />
                <span className="text-xl font-bold text-white">InfluEthiopia</span>
              </div>
              <p className="text-sm text-gray-400">
                Connecting Ethiopian brands with authentic local influencers to create meaningful campaigns.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Platform</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    How it works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-[#1a2040] pt-8 md:flex-row">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} InfluEthiopia. All rights reserved.</p>
            <div className="flex gap-4">
              {[
                { name: "Facebook", icon: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                { name: "Instagram", icon: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01" },
                {
                  name: "Twitter",
                  icon: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
                },
                {
                  name: "LinkedIn",
                  icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z",
                },
              ].map((social) => (
                <Link key={social.name} href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={social.icon}></path>
                  </svg>
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

