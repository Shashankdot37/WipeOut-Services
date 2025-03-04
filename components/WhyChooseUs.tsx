import { Card,CardContent } from "./ui/card";
import { FaLeaf, FaUserTie, FaDollarSign, FaClock } from "react-icons/fa";

const benefits = [
    {icon:<FaLeaf size={30} />, title:"Eco-Friendly Cleaning",desc:"Safe for your home & environment"},
    {icon:<FaUserTie size={30} />, title:"Experienced Professionals",desc:"Certified & experienced staff"},
    {icon:<FaDollarSign size={30} />, title:"Affordable Pricing",desc:"Transparent, no hidden costs"},
    {icon:<FaClock size={30} />, title:"Fast & Reliable",desc:"On-time service, every time"}
]
const WhyChooseUs = () => {
  return (
    <section className="bg-gray-200 py-16">
        <div className="container text-center sm:mx-3 md:mx-auto lg:mx-auto">
            <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
            <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit,index)=>(
                    <Card key={index} className="flex flex-col items-center p-6 shadow-md">
                        <div className="text-blue-800">{benefit.icon}</div>
                        <h3 className="text-lg font-semibold mt-4">{benefit.title}</h3>
                        <p className="text-gray-600 text-center mt-2">{benefit.desc}</p>
                    </Card>
                ))}
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUs
