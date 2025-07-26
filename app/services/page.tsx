import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
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
              alt="Driving instruction"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container px-4 md:px-6 text-center">
              <div className="space-y-4 text-white">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Our <span className="text-red-500">Services</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-lg md:text-xl">
                  Comprehensive driving instruction for all skill levels
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Driving Courses</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From beginner to advanced, we offer a range of driving courses tailored to your needs
                </p>
              </div>
            </div>
            <Tabs defaultValue="car" className="mt-12">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="car">Car Driving</TabsTrigger>
                <TabsTrigger value="motorcycle">Motorcycle</TabsTrigger>
                <TabsTrigger value="drift">Drift Classes</TabsTrigger>
              </TabsList>
              <TabsContent value="car" id="car" className="mt-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                  <div className="relative aspect-video overflow-hidden rounded-xl">
                    <Image
                      src="/placeholder.svg?height=720&width=1280"
                      alt="Car driving lesson"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Car Driving Lessons</h3>
                    <p className="text-gray-500">
                      Our car driving lessons cover both automatic and manual transmission vehicles. Whether you're a
                      complete beginner or looking to refine your skills, our experienced instructors will guide you
                      through every step of the learning process.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold">What You'll Learn:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                          <span>Vehicle control and basic maneuvers</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                          <span>Traffic rules and road safety</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                          <span>Defensive driving techniques</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                          <span>Parking and reversing skills</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                          <span>Highway driving and navigation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-6">Car Driving Packages</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="border-2 border-red-200 transition-all hover:border-red-500 hover:shadow-lg">
                      <CardHeader>
                        <CardTitle>Beginner Package</CardTitle>
                        <CardDescription>For first-time drivers</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-4">
                          <p className="text-3xl font-bold">$50</p>
                          <p className="text-sm text-gray-500">per hour</p>
                        </div>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                            <span>10-hour package: $450 ($50 savings)</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                            <span>Vehicle provided</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                            <span>Flexible scheduling</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                            <span>Progress tracking</span>
                          </li>
                        </ul>
                        <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                          <Link href="/contact">Book Now</Link>
                        </Button>
                      </CardContent>
                    </Card>
                    <Card className="border-2 border-red-200 transition-all hover:border-red-500 hover:shadow-lg">
                      <CardHeader>
                        <CardTitle>Manual Transmission</CardTitle>
                        <CardDescription>Learn to drive stick shift</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-4">
                          <p className="text-3xl font-bold">$60</p>
                          <p className="text-sm text-gray-500">per hour</p>
                        </div>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                            <span>8-hour package: $420 ($60 savings)</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                            <span>Manual vehicle provided</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                            <span>Clutch control mastery</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                            <span>Hill starts and advanced techniques</span>
                          </li>
                        </ul>
                        <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                          <Link href="/contact">Book Now</Link>
                        </Button>
                      </CardContent>
                    </Card>
                    <Card className="border-2 border-red-200 transition-all hover:border-red-500 hover:shadow-lg">
                      <CardHeader>
                        <CardTitle>Refresher Course</CardTitle>
                        <CardDescription>Brush up on your skills</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-4">
                          <p className="text-3xl font-bold">$55</p>
                          <p className="text-sm text-gray-500">per hour</p>
                        </div>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                            <span>5-hour package: $250 ($25 savings)</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                            <span>Vehicle provided</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                            <span>Focus on specific skills</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                            <span>Confidence building</span>
                          </li>
                        </ul>
                        <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                          <Link href="/contact">Book Now</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="motorcycle" id="motorcycle" className="mt-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                  <div className="relative aspect-video overflow-hidden rounded-xl">
                    <Image
                      src="/placeholder.svg?height=720&width=1280"
                      alt="Motorcycle lesson"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Motorcycle Riding Lessons</h3>
                    <p className="text-gray-500">
                      Our motorcycle riding lessons are designed for riders of all experience levels. From basic
                      handling to advanced techniques, our certified instructors will help you become a confident and
                      safe motorcycle rider.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold">What You'll Learn:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                          <span>Basic motorcycle operation and control</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                          <span>Proper riding posture and balance</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                          <span>Braking and cornering techniques</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                          <span>Defensive riding strategies</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                          <span>Group riding and road etiquette</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-6">Motorcycle Riding Packages</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="border-2 border-red-200 transition-all hover:border-red-500 hover:shadow-lg">
                      <CardHeader>
                        <CardTitle>Beginner Rider</CardTitle>
                        <CardDescription>For first-time riders</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-4">
                          <p className="text-3xl font-bold">$60</p>
                          <p className="text-sm text-gray-500">per hour</p>
                        </div>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                            <span>10-hour package: $550 ($50 savings)</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                            <span>Motorcycle and safety gear provided</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                            <span>Closed course training</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                            <span>License test preparation</span>
                          </li>
                        </ul>
                        <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                          <Link href="/contact">Book Now</Link>
                        </Button>
                      </CardContent>
                    </Card>
                    <Card className="border-2 border-red-200 transition-all hover:border-red-500 hover:shadow-lg">
                      <CardHeader>
                        <CardTitle>Intermediate Rider</CardTitle>
                        <CardDescription>Enhance your riding skills</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-4">
                          <p className="text-3xl font-bold">$70</p>
                          <p className="text-sm text-gray-500">per hour</p>
                        </div>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                            <span>8-hour package: $520 ($40 savings)</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                            <span>Motorcycle provided or bring your own</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                            <span>Advanced cornering techniques</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                            <span>Road and traffic navigation</span>
                          </li>
                        </ul>
                        <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                          <Link href="/contact">Book Now</Link>
                        </Button>
                      </CardContent>
                    </Card>
                    <Card className="border-2 border-red-200 transition-all hover:border-red-500 hover:shadow-lg">
                      <CardHeader>
                        <CardTitle>Advanced Rider</CardTitle>
                        <CardDescription>Master advanced techniques</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-4">
                          <p className="text-3xl font-bold">$85</p>
                          <p className="text-sm text-gray-500">per hour</p>
                        </div>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                            <span>6-hour package: $480 ($30 savings)</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                            <span>High-performance riding techniques</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                            <span>Track day preparation</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                            <span>Emergency maneuver training</span>
                          </li>
                        </ul>
                        <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                          <Link href="/contact">Book Now</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="drift" id="drift" className="mt-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                  <div className="relative aspect-video overflow-hidden rounded-xl">
                    <Image
                      src="/placeholder.svg?height=720&width=1280"
                      alt="Drift training"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Drift Classes</h3>
                    <p className="text-gray-500">
                      Our signature drift classes are taught by professional drift drivers with years of competitive
                      experience. Learn the art of controlled sliding in a safe, controlled environment with expert
                      guidance.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold">What You'll Learn:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                          <span>Weight transfer and car control fundamentals</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                          <span>Initiating and maintaining a drift</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                          <span>Transitioning between drift angles</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                          <span>Linking corners and creating drift lines</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                          <span>Vehicle setup and maintenance for drifting</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-6">Drift Training Packages</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="border-2 border-red-200 transition-all hover:border-red-500 hover:shadow-lg">
                      <CardHeader>
                        <CardTitle>Drift Introduction</CardTitle>
                        <CardDescription>First steps into drifting</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-4">
                          <p className="text-3xl font-bold">$120</p>
                          <p className="text-sm text-gray-500">per session (2 hours)</p>
                        </div>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                            <span>3-session package: $330 ($30 savings)</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                            <span>Drift-ready vehicle provided</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                            <span>Basic drift techniques</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                            <span>Skid pad practice</span>
                          </li>
                        </ul>
                        <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                          <Link href="/contact">Book Now</Link>
                        </Button>
                      </CardContent>
                    </Card>
                    <Card className="border-2 border-red-200 transition-all hover:border-red-500 hover:shadow-lg">
                      <CardHeader>
                        <CardTitle>Intermediate Drift</CardTitle>
                        <CardDescription>Refine your drift skills</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-4">
                          <p className="text-3xl font-bold">$150</p>
                          <p className="text-sm text-gray-500">per session (2 hours)</p>
                        </div>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                            <span>3-session package: $420 ($30 savings)</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                            <span>Drift-ready vehicle provided</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                            <span>Transitioning between corners</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                            <span>Controlled entry and exit</span>
                          </li>
                        </ul>
                        <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                          <Link href="/contact">Book Now</Link>
                        </Button>
                      </CardContent>
                    </Card>
                    <Card className="border-2 border-red-200 transition-all hover:border-red-500 hover:shadow-lg">
                      <CardHeader>
                        <CardTitle>Advanced Drift</CardTitle>
                        <CardDescription>Master the art of drifting</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-4">
                          <p className="text-3xl font-bold">$180</p>
                          <p className="text-sm text-gray-500">per session (2 hours)</p>
                        </div>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                            <span>3-session package: $510 ($30 savings)</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                            <span>Competition-level techniques</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                            <span>Full course drifting</span>
                          </li>
                        </ul>
                        <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                          <Link href="/contact">Book Now</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Private Instruction */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-700">Premium Service</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Private Instruction</h2>
                <p className="text-gray-500 md:text-xl/relaxed">
                  For those seeking a more personalized experience, we offer private instruction with our most
                  experienced trainers, including our founder. These sessions are tailored to your specific goals and
                  learning style.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold">Benefits of Private Instruction:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                      <span>One-on-one attention from expert instructors</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                      <span>Customized curriculum based on your goals</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                      <span>Flexible scheduling to fit your availability</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                      <span>Accelerated learning and skill development</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild className="bg-red-600 hover:bg-red-700">
                    <Link href="/contact">Inquire About Private Lessons</Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Private instruction"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Events */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Corporate Events</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Team building experiences that combine excitement with skill development
                </p>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center mt-12">
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Corporate event"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Custom Corporate Packages</h3>
                <p className="text-gray-500">
                  Looking for a unique team-building experience? Our corporate events combine the thrill of driving with
                  valuable team skills like communication, trust, and coordination. We can customize packages for groups
                  of any size.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold">Popular Corporate Activities:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                      <span>Team driving challenges</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                      <span>Drift experience days</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                      <span>Defensive driving workshops</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                      <span>Custom racing events</span>
                    </li>
                  </ul>
                </div>
                <Button asChild className="bg-red-600 hover:bg-red-700">
                  <Link href="/contact">Request Corporate Information</Link>
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to book your first lesson or inquire about our services
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                  <Link href="/contact">Book a Lesson</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                  <Link href="/faq">View FAQs</Link>
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
