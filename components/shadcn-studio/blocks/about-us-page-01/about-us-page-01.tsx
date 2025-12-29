import type { ComponentType } from "react"
import Image from "next/image"
import { ArrowRightIcon } from "lucide-react"
import {
  HeartHandshakeIcon,
  SparklesIcon,
  StarIcon,
  LeafIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"

type StatItem = {
  icon: ComponentType<{ className?: string }>
  value: string
  description: string
}

const stats: StatItem[] = [
  {
    icon: SparklesIcon,
    value: "10+",
    description: "Years of Healing Experience",
  },
  {
    icon: LeafIcon,
    value: "6+",
    description: "Holistic Therapy Programs",
  },
  {
    icon: StarIcon,
    value: "500+",
    description: "Satisfied & Returning Clients",
  },
  {
    icon: HeartHandshakeIcon,
    value: "100%",
    description: "Personalized Care Approach",
  },
]

export default function AboutUs() {
  return (
    <section className="bg-muted py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ===== Header ===== */}
        <div className="mb-12 space-y-4 text-center md:mb-16 lg:mb-24">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl">
            About Yen2Yen Wellness Therapy
          </h2>

          <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
            Yen2Yen Wellness Therapy was created as a calm and safe space for
            healing—where body, mind, and emotions are treated with equal care.
            We believe true wellness begins when you feel heard, understood,
            and gently supported.
          </p>

          <Button
            size="lg"
            asChild
            className="group rounded-lg text-base has-[>svg]:px-6"
          >
            <a href="/about">
              Discover Our Healing Philosophy
              <ArrowRightIcon className="ml-1 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </Button>
        </div>

        {/* ===== Image & Stats ===== */}
        <div className="relative mb-8 sm:mb-16 lg:mb-24">
          <Image
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop"
            alt="Calm and natural wellness therapy environment"
            width={1200}
            height={600}
            className="h-auto w-full rounded-lg object-cover"
            priority
          />

          {/* ===== Stats Card ===== */}
          <div className="bg-background mt-6 grid gap-10 rounded-md border p-8 sm:grid-cols-2 lg:absolute lg:-bottom-24 lg:left-1/2 lg:mt-0 lg:w-3/4 lg:-translate-x-1/2 lg:grid-cols-4 lg:px-10 xl:w-max">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2.5 text-center"
              >
                <div className="flex size-7 items-center justify-center text-primary [&>svg]:size-7">
                  <stat.icon />
                </div>

                <span className="text-2xl font-semibold">
                  {stat.value}
                </span>

                <p className="text-muted-foreground text-lg">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
