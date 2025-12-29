import Header from '@/components/shadcn-studio/blocks/hero-section-01/header'
import type { NavigationSection } from '@/components/shadcn-studio/blocks/hero-section-01/header'

const navigationData: NavigationSection[] = [
  { title: 'Home', href: '#' },
  { title: 'About', href: '#' },
  { title: 'Why Us', href: '#' },
  { title: 'Our Therapists', href: '#' },
  { title: 'Testimonials', href: '#' },
]

export default function MainNavigation() {
  return <Header navigationData={navigationData} />
}
