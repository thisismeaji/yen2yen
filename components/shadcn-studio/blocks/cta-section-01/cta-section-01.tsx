import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const CTA = () => {
  return (
    <section className="bg-muted py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card className="rounded-3xl border-none py-8 shadow-lg sm:py-16 lg:py-24">
          <CardContent className="flex flex-wrap items-center justify-between gap-8 px-8 sm:flex-nowrap sm:px-16 lg:px-24">
            {/* Left Content */}
            <div className="max-w-xs lg:max-w-lg">
              <h2 className="mb-4 text-3xl font-bold">
                Begin Your Healing Journey Today
              </h2>
              <p className="text-muted-foreground text-lg font-medium">
                Take a deep breath. Our therapists are ready to listen, support,
                and guide you toward balance, relaxation, and well-being.
              </p>
            </div>

            {/* CTA Actions */}
            <div className="flex flex-col items-center gap-6 max-md:w-full max-md:flex-col md:justify-end">
              <Button
                size="lg"
                className="w-[220px] rounded-xl text-base"
                asChild
              >
                <a href="/booking">
                  Book Appointment
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-[220px] rounded-xl text-base"
                asChild
              >
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default CTA
