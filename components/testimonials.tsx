import Image from "next/image"
import { Star } from "lucide-react"

export function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-700">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Students Say</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from our satisfied students about their experience with IgnitionB Driving School
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
          <div className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-500">
                "Learning to drive with IgnitionB was an incredible experience. The instructors are patient,
                knowledgeable, and really know how to build your confidence behind the wheel. I went from being
                terrified of driving to feeling completely comfortable in just a few weeks!"
              </p>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image src="/placeholder.svg?height=100&width=100" alt="Sarah J." fill className="object-cover" />
              </div>
              <div>
                <p className="font-semibold">Sarah J.</p>
                <p className="text-sm text-gray-500">Car Driving Student</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-500">
                "The drift classes at IgnitionB are second to none. Brian's professional racing experience really shows
                in his teaching methods. I've taken drift courses elsewhere, but none compare to the level of
                instruction and hands-on practice you get here. Worth every penny!"
              </p>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image src="/placeholder.svg?height=100&width=100" alt="Michael T." fill className="object-cover" />
              </div>
              <div>
                <p className="font-semibold">Michael T.</p>
                <p className="text-sm text-gray-500">Drift Class Student</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-500">
                "As someone who had never ridden a motorcycle before, I was nervous about taking lessons. Sarah at
                IgnitionB made the learning process so smooth and enjoyable. Her attention to safety while still making
                the lessons fun was exactly what I needed. I'm now confidently riding my own motorcycle!"
              </p>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image src="/placeholder.svg?height=100&width=100" alt="David L." fill className="object-cover" />
              </div>
              <div>
                <p className="font-semibold">David L.</p>
                <p className="text-sm text-gray-500">Motorcycle Student</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-500">
                "We booked IgnitionB for a corporate team-building event, and it exceeded all our expectations. The
                custom driving challenges they created for us were both exciting and educational. Our team is still
                talking about it months later. Highly recommend for any company looking for a unique team activity!"
              </p>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image src="/placeholder.svg?height=100&width=100" alt="Jennifer R." fill className="object-cover" />
              </div>
              <div>
                <p className="font-semibold">Jennifer R.</p>
                <p className="text-sm text-gray-500">Corporate Client</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
