import Image from "next/image"
import Link from "next/link"
import { Car, Medal, Trophy, Wrench, BikeIcon as Motorcycle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="relative h-[50vh] w-full">
            <Image
              src="/placeholder.svg?height=720&width=1280"
              alt="Racing team in garage"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container px-4 md:px-6 text-center">
              <div className="space-y-4 text-white">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  About <span className="text-red-500">Ignition B</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-lg md:text-xl">
                  Our story, our team, and our passion for driving excellence
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-700">Our Story</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  From the Racetrack to the Classroom
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed">
                  Ignition B Driving School was founded in 2010 by Brian "Ignition" Johnson, a former professional racer
                  with over 15 years of competitive racing experience and a passion for building high-performance
                  vehicles.
                </p>
                <p className="text-gray-500 md:text-xl/relaxed">
                  After retiring from professional racing, Brian wanted to share his knowledge and expertise with
                  aspiring drivers. What started as informal lessons for friends quickly grew into a full-fledged
                  driving school with a team of experienced instructors.
                </p>
                <p className="text-gray-500 md:text-xl/relaxed">
                  Today, Ignition B is recognized as one of the premier driving schools in the region, offering a wide
                  range of courses from basic driving instruction to advanced drift techniques.
                </p>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="Founder portrait"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Journey</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From racing championships to building a premier driving school
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl mt-12">
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-red-500 pb-8">
                  <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-red-500" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">1998-2005</h3>
                    <p className="text-lg font-semibold">Professional Racing Career</p>
                    <p className="text-gray-500">
                      Brian "Ignition" Johnson competes in various racing circuits, winning multiple championships and
                      gaining recognition for his exceptional driving skills.
                    </p>
                  </div>
                </div>
                <div className="relative pl-8 border-l-2 border-red-500 pb-8">
                  <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-red-500" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">2005-2010</h3>
                    <p className="text-lg font-semibold">Race Car Building & Design</p>
                    <p className="text-gray-500">
                      After retiring from professional racing, Brian establishes a successful race car building
                      business, designing and building high-performance vehicles for competitive racing.
                    </p>
                  </div>
                </div>
                <div className="relative pl-8 border-l-2 border-red-500 pb-8">
                  <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-red-500" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">2010</h3>
                    <p className="text-lg font-semibold">Ignition B Driving School Founded</p>
                    <p className="text-gray-500">
                      Combining his passion for driving and teaching, Brian establishes Ignition B Driving School to
                      share his expertise with aspiring drivers.
                    </p>
                  </div>
                </div>
                <div className="relative pl-8 border-l-2 border-red-500 pb-8">
                  <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-red-500" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">2015</h3>
                    <p className="text-lg font-semibold">Expansion to Motorcycle Training</p>
                    <p className="text-gray-500">
                      Responding to growing demand, Ignition B expands its curriculum to include motorcycle riding
                      lessons, bringing in specialized instructors with extensive motorcycle experience.
                    </p>
                  </div>
                </div>
                <div className="relative pl-8 border-l-2 border-red-500">
                  <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-red-500" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">2018-Present</h3>
                    <p className="text-lg font-semibold">Advanced Drift Training Program</p>
                    <p className="text-gray-500">
                      Ignition B launches its signature drift training program, quickly gaining recognition as one of
                      the premier drift training facilities in the country.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Team</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our experienced instructors bring decades of combined driving expertise
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              <Card className="overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Brian Johnson"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold">Brian Johnson</h3>
                  <p className="text-sm text-gray-500">Founder & Head Instructor</p>
                  <p className="mt-2 text-gray-700">
                    Former professional racer with 15+ years of competitive racing experience and expert car builder.
                  </p>
                  <div className="flex space-x-2 mt-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Trophy className="h-4 w-4 mr-1" />
                      <span>5x Champion</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Car className="h-4 w-4 mr-1" />
                      <span>Drift Expert</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Sarah Martinez"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold">Sarah Martinez</h3>
                  <p className="text-sm text-gray-500">Motorcycle Instructor</p>
                  <p className="mt-2 text-gray-700">
                    Professional motorcycle racer with 10+ years of experience teaching riders of all skill levels.
                  </p>
                  <div className="flex space-x-2 mt-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Medal className="h-4 w-4 mr-1" />
                      <span>Certified</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Motorcycle className="h-4 w-4 mr-1" />
                      <span>All Classes</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative aspect-square">
                  <Image src="/placeholder.svg?height=400&width=400" alt="Mike Chen" fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold">Mike Chen</h3>
                  <p className="text-sm text-gray-500">Technical Director</p>
                  <p className="mt-2 text-gray-700">
                    Master mechanic and vehicle dynamics expert with extensive experience in race car preparation.
                  </p>
                  <div className="flex space-x-2 mt-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Wrench className="h-4 w-4 mr-1" />
                      <span>Master Tech</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Car className="h-4 w-4 mr-1" />
                      <span>Car Builder</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mt-12">
              <Button asChild className="bg-red-600 hover:bg-red-700">
                <Link href="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Our Facilities */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Facilities</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  State-of-the-art training facilities designed for optimal learning
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Training track"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">Private Training Track</h3>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image src="/placeholder.svg?height=720&width=1280" alt="Classroom" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">Modern Classrooms</h3>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Maintenance garage"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">Maintenance Garage</h3>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image src="/placeholder.svg?height=720&width=1280" alt="Drift course" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">Specialized Drift Course</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join Our Driving Community</h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Learn from the best and become part of our growing community of skilled drivers
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                  <Link href="/contact">Book a Lesson</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                  <Link href="/services">Explore Courses</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
