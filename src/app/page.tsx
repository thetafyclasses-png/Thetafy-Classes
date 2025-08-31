import HeroSection from '@/components/home/HeroSection'
// import FeaturedVideo from '@/components/home/FeaturedVideo'
import CourseOverview from '@/components/home/CourseOverview'
import WhyLearnSection from '@/components/home/WhyLearnSection'

export default function HomePage() {
  return (
      <div className="pt-16 md:pt-20">
        <HeroSection />
        {/* <FeaturedVideo /> */}
        <CourseOverview />
        <WhyLearnSection />
      </div>
  )
}