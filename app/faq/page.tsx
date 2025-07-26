import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="relative h-[40vh] w-full">
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
                  Frequently Asked <span className="text-red-500">Questions</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-lg md:text-xl">
                  Find answers to common questions about our driving school
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="lessons">Lessons</TabsTrigger>
                <TabsTrigger value="pricing">Pricing</TabsTrigger>
                <TabsTrigger value="vehicles">Vehicles</TabsTrigger>
                <TabsTrigger value="scheduling">Scheduling</TabsTrigger>
              </TabsList>

              <TabsContent value="general">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">General Questions</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>What makes Ignition B Driving School different?</AccordionTrigger>
                      <AccordionContent>
                        Ignition B Driving School was founded by a former professional racer and racecar builder with
                        over 15 years of competitive racing experience. Our instructors bring real-world racing and
                        driving expertise to every lesson, providing insights and techniques that go beyond basic
                        driving instruction. We offer specialized courses including drift training and advanced
                        motorcycle riding that few other schools can match.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Where are you located?</AccordionTrigger>
                      <AccordionContent>
                        Our main facility is located at 123 Speedway Boulevard, with easy access from the highway. We
                        have a private training track, classroom facilities, and a maintenance garage all on-site. For
                        certain specialized courses, we may use additional facilities in the surrounding area.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>What are your hours of operation?</AccordionTrigger>
                      <AccordionContent>
                        Our administrative office is open Monday through Friday from 9:00 AM to 6:00 PM, and Saturday
                        from 9:00 AM to 3:00 PM. Driving lessons are scheduled throughout the week, including evenings
                        and weekends, to accommodate our students' schedules.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Do you offer gift certificates?</AccordionTrigger>
                      <AccordionContent>
                        Yes, we offer gift certificates for all of our courses and services. Gift certificates can be
                        purchased for specific courses or for a dollar amount that the recipient can apply to the course
                        of their choice. Gift certificates are valid for one year from the date of purchase.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>Is there an age requirement for your courses?</AccordionTrigger>
                      <AccordionContent>
                        For basic car driving lessons, students must be at least 15 years old with a valid learner's
                        permit. For motorcycle lessons, students must be at least 16 years old with the appropriate
                        permit. Our drift classes and advanced courses have additional requirements, including a valid
                        driver's license and, in some cases, prior driving experience.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </TabsContent>

              <TabsContent value="lessons">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Lesson Questions</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>How long does a typical lesson last?</AccordionTrigger>
                      <AccordionContent>
                        Standard car and motorcycle driving lessons are typically 1-2 hours in duration. Drift classes
                        are structured as 2-hour sessions. We find these timeframes provide the optimal balance between
                        learning and avoiding fatigue. For intensive courses or corporate events, we can customize the
                        schedule to meet your needs.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>What should I wear to my driving lesson?</AccordionTrigger>
                      <AccordionContent>
                        For car driving lessons, comfortable clothing and closed-toe shoes are recommended. For
                        motorcycle lessons, you should wear long pants, a long-sleeved shirt, and sturdy boots that
                        cover your ankles. We provide helmets and other necessary safety gear, but you're welcome to
                        bring your own DOT-approved helmet if you prefer.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>How many lessons will I need?</AccordionTrigger>
                      <AccordionContent>
                        The number of lessons needed varies depending on your starting skill level, learning pace, and
                        goals. For complete beginners learning to drive a car, we typically recommend a minimum of 10
                        hours of instruction. For motorcycle training, most students require 8-12 hours. Drift training
                        is structured as a progressive series of sessions, with most students taking 3-6 sessions to
                        develop proficiency.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Do you offer lessons in languages other than English?</AccordionTrigger>
                      <AccordionContent>
                        Yes, we have instructors who can provide lessons in Spanish and Mandarin Chinese. Please let us
                        know your language preference when booking, and we'll do our best to accommodate your needs.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>Can I take a lesson if I've never driven before?</AccordionTrigger>
                      <AccordionContent>
                        Our beginner courses are specifically designed for those with no prior driving experience. Our
                        patient instructors will guide you through every step of the learning process, starting with the
                        basics and gradually building your skills and confidence.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </TabsContent>

              <TabsContent value="pricing">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Pricing Questions</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Do you offer package discounts?</AccordionTrigger>
                      <AccordionContent>
                        Yes, we offer discounted rates for package bookings. The more hours you book, the greater the
                        discount. Our most popular packages include 10-hour car driving packages, 8-hour motorcycle
                        packages, and 3-session drift packages. These packages offer savings of 5-10% compared to
                        booking individual lessons.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>What forms of payment do you accept?</AccordionTrigger>
                      <AccordionContent>
                        We accept all major credit cards, debit cards, cash, and electronic transfers. Payment is
                        required at the time of booking for individual lessons. For package bookings, we offer the
                        option to pay in full or to make a 50% deposit with the balance due before your first lesson.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Are there any additional fees?</AccordionTrigger>
                      <AccordionContent>
                        All course prices include vehicle use, fuel, and insurance. There may be additional fees for
                        specialized courses or certification exams. If you need to cancel or reschedule a lesson, we
                        require 24 hours' notice to avoid a cancellation fee of 50% of the lesson cost.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Do you offer financing options?</AccordionTrigger>
                      <AccordionContent>
                        For larger package bookings or corporate events, we do offer financing options. Please contact
                        our office to discuss the available options and to create a payment plan that works for your
                        budget.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>
                        Do you offer any discounts for students or military personnel?
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes, we offer a 10% discount for active military personnel, veterans, first responders, and
                        full-time students with valid ID. These discounts cannot be combined with other promotional
                        offers or package discounts.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </TabsContent>

              <TabsContent value="vehicles">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Vehicle Questions</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Do I need my own vehicle for lessons?</AccordionTrigger>
                      <AccordionContent>
                        No, we provide all vehicles for our lessons. However, if you prefer to learn in your own
                        vehicle, we can accommodate that for certain courses. Using your own vehicle can be beneficial
                        if you want to become more comfortable with the specific car you'll be driving regularly.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>What types of vehicles do you use for training?</AccordionTrigger>
                      <AccordionContent>
                        For car driving lessons, we use a variety of vehicles including compact sedans, mid-size sedans,
                        and SUVs, with both automatic and manual transmissions. For motorcycle training, we have a range
                        of bikes from 250cc to 650cc to accommodate riders of different sizes and experience levels. Our
                        drift training program uses specially prepared rear-wheel-drive vehicles designed for learning
                        drift techniques safely.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Are your vehicles equipped with dual controls?</AccordionTrigger>
                      <AccordionContent>
                        Yes, all of our training vehicles for basic driving lessons are equipped with dual controls,
                        allowing the instructor to take control if necessary. This safety feature ensures that our
                        instructors can prevent potential accidents while students are learning.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Can I use my own motorcycle for lessons?</AccordionTrigger>
                      <AccordionContent>
                        Yes, experienced riders can use their own motorcycles for intermediate and advanced lessons. For
                        beginner lessons, we strongly recommend using our training motorcycles, which are specifically
                        set up for new riders and equipped with safety features. If you do use your own motorcycle, it
                        must be in good working condition and meet all legal requirements.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>What safety features do your vehicles have?</AccordionTrigger>
                      <AccordionContent>
                        All of our training vehicles are equipped with modern safety features including airbags,
                        anti-lock brakes, and stability control. Our cars used for basic driving instruction have dual
                        controls. Our motorcycles are equipped with engine guards and are regularly maintained to ensure
                        optimal safety. For drift training, our vehicles have additional safety modifications including
                        roll cages, racing seats, and harnesses.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </TabsContent>

              <TabsContent value="scheduling">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Scheduling Questions</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>How far in advance should I book my lessons?</AccordionTrigger>
                      <AccordionContent>
                        We recommend booking at least 1-2 weeks in advance to ensure availability, especially for
                        weekend slots which tend to fill up quickly. For specialized courses like drift training,
                        booking 3-4 weeks in advance is advisable. During peak seasons (spring and summer), even earlier
                        booking is recommended.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>What is your cancellation policy?</AccordionTrigger>
                      <AccordionContent>
                        We require 24 hours' notice for cancellations or rescheduling to avoid a cancellation fee.
                        Cancellations made with less than 24 hours' notice will incur a fee of 50% of the lesson cost.
                        No-shows will be charged the full lesson price. We understand that emergencies happen, and we do
                        our best to accommodate genuine emergencies on a case-by-case basis.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Can I schedule lessons on evenings and weekends?</AccordionTrigger>
                      <AccordionContent>
                        Yes, we offer flexible scheduling including evenings and weekends to accommodate our students'
                        busy schedules. Evening lessons are available until 8:00 PM on weekdays, and weekend lessons are
                        available from 8:00 AM to 6:00 PM on Saturdays and Sundays.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>How often should I schedule my lessons?</AccordionTrigger>
                      <AccordionContent>
                        For optimal learning, we recommend scheduling lessons 1-2 times per week. This frequency allows
                        for practice between lessons while maintaining continuity in your learning. For intensive
                        courses, daily lessons can be arranged. We can work with you to create a schedule that fits your
                        learning style and availability.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>Can I book multiple lessons with the same instructor?</AccordionTrigger>
                      <AccordionContent>
                        Yes, we encourage booking with the same instructor for consistency in your learning experience.
                        When you book a package, we'll assign you to a primary instructor who will work with you
                        throughout your training. If you have a preference for a specific instructor, please let us know
                        when booking, and we'll do our best to accommodate your request.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Still Have Questions?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're here to help. Contact us directly and we'll be happy to assist you.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 w-full max-w-3xl">
                <div className="flex flex-col items-center space-y-2 p-6 bg-white rounded-lg shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-red-600"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <h3 className="text-xl font-bold">Call Us</h3>
                  <p className="text-gray-500">Speak directly with our team</p>
                  <p className="text-lg font-semibold">(555) 123-4567</p>
                  <p className="text-sm text-gray-500">Mon-Fri: 9am-6pm, Sat: 9am-3pm</p>
                </div>
                <div className="flex flex-col items-center space-y-2 p-6 bg-white rounded-lg shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-red-600"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <h3 className="text-xl font-bold">Email Us</h3>
                  <p className="text-gray-500">Send us your questions</p>
                  <p className="text-lg font-semibold">info@ignitionb.com</p>
                  <p className="text-sm text-gray-500">We typically respond within 24 hours</p>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                  <Link href="/contact">Contact Us</Link>
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
                  Book your first lesson today and start your journey to becoming a confident driver
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                  <Link href="/contact">Book a Lesson</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                  <Link href="/services">View Services</Link>
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
