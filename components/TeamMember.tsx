import { FaTwitter,FaLinkedin, FaInstagram } from "react-icons/fa"
import Image from "next/image";

const teamMembers = [
    {
      name: "Cyrush Khadka",
      role: "Co-Founder and Manager",
      image: "/assets/images/cyrush.jpg", // Replace with actual image paths
      bio: "Cyrush has 4+ years of experience in removal team management and first hand experience in work itself",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "https://www.instagram.com/cyrush.khadka/",
      },
    },
    // {
    //   name: "Jane Smith",
    //   role: "Co-Founder and Manager",
    //   image: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
    //   bio: "Jane specializes in cleaning field.",
    //   social: {
    //     linkedin: "#",
    //     twitter: "#",
    //     instagram: "#",
    //   },
    // },
    {
      name: "Shashank Sakha",
      role: "Website Developer and Digital Marketing Head",
      image: "/assets/images/shashank.jpeg",
      bio: "Shashank handles all the digital side.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
  ];

const TeamMember = () => {
  return (
    <div className="py-6 bg-gray-100">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Meet Our Team
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((TeamMember,index)=>(
            <div key={index} className="relative bg-white rounded-lg shadow-lg overflow-hidden w-72 text-center transform transition-transform duration-300 hover:scale-105">
                <img src={TeamMember.image} alt={TeamMember.name} className="w-full h-60 object-cover"/>
                <div className="p-5">
                    <h3 className="text-xl font-semibold text-gray-900">{TeamMember.name}</h3>
                    <p className="text-gray-600">{TeamMember.role}</p>
                </div>
                <div className="absolute inset-0 bg-black/60 text-white flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100 p-4 ">
                <p className="text-sm">{TeamMember.bio}</p>
                <div className="mt-4 gap-4 flex">
                    <a href={TeamMember.social.linkedin} target="_blank">
                    <FaLinkedin className="text-xl hover:text-blue-400" />
                    </a>
                    <a href={TeamMember.social.twitter} target="_blank">
                    <FaTwitter className="text-xl hover:text-blue-400" />
                    </a>
                    <a href={TeamMember.social.instagram} target="_blank">
                    <FaInstagram className="text-xl hover:text-blue-400" />
                    </a>
                </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default TeamMember
