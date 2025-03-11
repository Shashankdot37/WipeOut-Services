import BookingCTA from "./BookingCTA"
import HeadPersonnel from "./HeadPersonnel"
import Hero from "./Hero"
import ServiceSection from "./ServiceSection"
import WhyChooseUs from "./WhyChooseUs"
import FloatingCall from "./FloatingCall"
import QuoteTabs from "./QuoteTabs"

const Main = () => {
  return (
    <div className="bg-gray-200">
      <Hero/>
      <div className="relative">
        <FloatingCall/>
      </div>
      <QuoteTabs/>
      <ServiceSection/>
      <WhyChooseUs/>
      <BookingCTA/>
      <HeadPersonnel/>
    </div>
  )
}

export default Main
