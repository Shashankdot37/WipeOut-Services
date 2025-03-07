import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import CarouselAboutUs from "./CarouselAboutUs";
import TeamMember from "./TeamMember";
const glassmorphism =
  "p-6 backdrop-blur-lg bg-white/20 border border-white/30 shadow-xl rounded-lg transition";
const AboutUs = () => {
  return (
    <div>
      <div className="ml-8">
        <h1 className="text-3xl font-semibold mt-1.5">About Us</h1>
      </div>
      <div className="ml-8">
        <Card
          className={`${glassmorphism} mt-16 mb-6 bg-gray-200 h-full w-[70vw]`}
        >
          <CardHeader>
            <CardTitle className="text-4xl font-bold text-orange-700 mt-2 underline underline-offset-2">
              WipeOut Services
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between font-light">
            <div className="w-[30vw]">
              <p className="mb-2">
                At WipeOut Service, we make moving easy and stress-free. Whether
                you're relocating homes, offices, or need furniture removal, our
                dedicated team ensures a smooth experience from start to finish.
                With a focus on reliability, efficiency, and customer
                satisfaction, we handle every move with care. No matter the
                distance, we guarantee safe and timely transportation, so you
                can focus on settling in while we take care of the rest
              </p>
            </div>
            <div className="w-[30vw]">
              <p className="mb-2">
                Founded with a vision to simplify moving, WipeOut Service is a
                fresh and dynamic company that has quickly gained a reputation
                for excellence. Starting with just a small team and a passion
                for helping people transition seamlessly to new spaces, we've
                grown into a trusted name in the industry. Our commitment to
                professionalism, affordability, and customer-first service has
                helped us serve countless satisfied clients. As we continue to
                expand, our mission remains the same—making moving effortless,
                one service at a time.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-16">
        <h2 className=" ml-8 mb-6 text-4xl font-bold text-orange-700 mt-2 underline underline-offset-2">
          {" "}
          Our Work Displays
        </h2>
        <CarouselAboutUs />
      </div>
      <section className="py-12 bg-white w-[70vw] ml-8">
        <h2 className=" ml-8 mb-6 text-4xl font-bold text-orange-700 underline underline-offset-2">
          Our Mission and Values
        </h2>
        <div className={`${glassmorphism}`}>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-700">
            At WipeOut Service, we strive to provide smooth and stress-free
            moving experiences. Our team ensures reliability, professionalism,
            and efficiency in every relocation.
          </p>
        </div>
        <div className={`${glassmorphism}`}>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Values
          </h3>
          <div className="list-disc list-inside space-y-2 text-gray-700">
            <li>Customer Satisfaction First</li>
            <li>Reliable and Safe Transportation</li>
            <li>Commitment to Excellence</li>
            <li>Eco-friendly and Responsible Practices</li>
          </div>
        </div>
      </section>
      <TeamMember/>
    </div>
  );
};

export default AboutUs;
