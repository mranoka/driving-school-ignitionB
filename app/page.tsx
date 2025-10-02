import Link from "next/link";
import Image from "next/image";
import {
  Car,
  GraduationCap,
  BikeIcon as Motorcycle,
  ShieldCheck,
  Trophy,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Testimonials } from "@/components/testimonials";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/65 z-10" />
          <div className="relative h-dvh overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute z-[-1] w-auto min-w-full min-h-full max-w-none object-cover"
            >
              <source src="/mauro1.mp4" type="video/mp4" />
            </video>
            <div className="relative z-10 flex items-center justify-center h-full">
            </div>
          </div>
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container px-4 md:px-6 text-center">
              <div className="space-y-4 text-white">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  IGNITIONB <span className="text-red-500">DRIVING SCHOOL</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-lg md:text-xl">
                  Learn from a professional racer and racecar builder. From
                  basic driving to advanced drift techniques.
                </p>
                <div className="space-x-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-red-600 hover:bg-red-700"
                  >
                    <Link href="/services">Explore Courses</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="text-black hover:bg-white/10"
                  >
                    <Link href="/about">About Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-700">
                  Why Choose Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Professional Driving Instruction
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Learn from experienced instructors with a passion for driving
                  and racing
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                  <Trophy className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold">Professional Experience</h3>
                <p className="text-gray-500">
                  Learn from instructors with professional racing backgrounds
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                  <ShieldCheck className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold">Safety First</h3>
                <p className="text-gray-500">
                  Comprehensive safety training and modern, well-maintained
                  vehicles
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                  <GraduationCap className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold">Personalized Learning</h3>
                <p className="text-gray-500">
                  Tailored instruction to match your skill level and learning
                  pace
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Services
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From beginner to advanced, we offer a range of driving courses
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              <Card className="border-2 border-red-200 transition-all hover:border-red-500 hover:shadow-lg">
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    <Car className="h-10 w-10 text-red-600" />
                  </div>
                  <CardTitle className="text-center">
                    Car Driving Lessons
                  </CardTitle>
                  <CardDescription className="text-center">
                    Learn to drive both automatic and manual transmission
                    vehicles
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-3xl font-bold">From $25</p>
                  <p className="text-sm text-gray-500">per session</p>
                  <Button
                    asChild
                    className="mt-4 w-full bg-red-600 hover:bg-red-700"
                  >
                    <Link href="/services#car">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-2 border-red-200 transition-all hover:border-red-500 hover:shadow-lg">
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    <Motorcycle className="h-10 w-10 text-red-600" />
                  </div>
                  <CardTitle className="text-center">
                    Motorcycle Lessons
                  </CardTitle>
                  <CardDescription className="text-center">
                    Master motorcycle riding with our expert instructors
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-3xl font-bold">From $25</p>
                  <p className="text-sm text-gray-500">per session</p>
                  <Button
                    asChild
                    className="mt-4 w-full bg-red-600 hover:bg-red-700"
                  >
                    <Link href="/services#motorcycle">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-2 border-red-200 transition-all hover:border-red-500 hover:shadow-lg">
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    <div className="relative h-10 w-10 text-red-600">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-10 w-10"
                      >
                        <path d="M12 14v3M19 17l-2-6M5 17l2-6M17.5 6.5l-11 4L10 12l-3.5 6h11l-3.5-6L17.5 6.5z" />
                      </svg>
                    </div>
                  </div>
                  <CardTitle className="text-center">Drift Classes</CardTitle>
                  <CardDescription className="text-center">
                    Advanced techniques for controlled drifting
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-3xl font-bold">From $399</p>
                  <p className="text-sm text-gray-500">per session</p>
                  <Button
                    asChild
                    className="mt-4 w-full bg-red-600 hover:bg-red-700"
                  >
                    <Link href="/services#drift">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mt-12">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-red-500 text-red-600 hover:bg-red-50"
              >
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/student1.JPG"
                  alt="Professional racer"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-700">
                  About Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  From Racing Champion to Driving Instructor
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed">
                  IgnitionB Driving School was founded by a professional racer
                  and racecar builder with over 20 years of experience in
                  motorsports. Our mission is to share our passion for driving
                  and provide the highest quality instruction for drivers of all
                  skill levels.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild className="bg-red-600 hover:bg-red-700">
                    <Link href="/about">Our Story</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-red-500 text-red-600 hover:bg-red-50"
                  >
                    <Link href="/about#team">Meet Our Team</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ Preview */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about our driving school
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl mt-12">
              <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="general">General</TabsTrigger>
                  <TabsTrigger value="courses">Courses</TabsTrigger>
                  <TabsTrigger value="pricing">Pricing</TabsTrigger>
                </TabsList>
                <TabsContent value="general" className="mt-6 space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">
                      Do I need my own vehicle for lessons?
                    </h3>
                    <p className="text-gray-500 mt-2">
                      No, we provide all vehicles for our lessons. However, if
                      you prefer to learn in your own vehicle, we can
                      accommodate that for certain courses.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">
                      How long does it take to complete a course?
                    </h3>
                    <p className="text-gray-500 mt-2">
                      Course duration varies depending on the type of
                      instruction and your learning pace. Basic driving courses
                      typically require 10-20 hours, while specialized courses
                      like drift training may be structured as multi-day
                      workshops.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="courses" className="mt-6 space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">
                      What types of vehicles do you use for training?
                    </h3>
                    <p className="text-gray-500 mt-2">
                      We use a variety of vehicles including sedans, sports
                      cars, and motorcycles. All vehicles are regularly
                      maintained and equipped with safety features for training
                      purposes.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">
                      Do you offer courses for complete beginners?
                    </h3>
                    <p className="text-gray-500 mt-2">
                      Yes, we offer courses for all skill levels, from complete
                      beginners to advanced drivers looking to refine their
                      techniques.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="pricing" className="mt-6 space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">
                      Do you offer package discounts?
                    </h3>
                    <p className="text-gray-500 mt-2">
                      Yes, we offer discounted rates for package bookings. The
                      more hours you book, the greater the discount.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">
                      Are there any additional fees?
                    </h3>
                    <p className="text-gray-500 mt-2">
                      All course prices include vehicle use, fuel, and
                      insurance. There may be additional fees for specialized
                      courses or certification exams.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
              <div className="flex justify-center mt-8">
                <Button
                  asChild
                  variant="outline"
                  className="border-red-500 text-red-600 hover:bg-red-50"
                >
                  <Link href="/faq">View All FAQs</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Get Behind the Wheel?
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Book your first lesson today and start your journey to
                  becoming a confident driver
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-red-600 hover:bg-red-700"
                >
                  <Link href="https://wa.me/62895331302535?text=Greetings%20I%20would%20like%20to%20enquire%20about%20your%20services">Book a Lesson</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-black border-white hover:bg-white/10"
                >
                  <Link href="/services">View Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
