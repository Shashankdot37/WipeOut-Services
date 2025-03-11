import Image from "next/image";

const HeadPersonnel = () => {
  return (
    <section className="bg-gray-200 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-6">
        <div className="w-60 h-60 md:w-[68] md:h-[68] overflow-hidden rounded-full shadow-lg border-4 border-orange-400">
          <Image
            src="/assets/images/cyrush.jpg"
            alt="Cyrush Khadka"
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900">Cyrush Khadka</h2>
            <p className="text-orange-500 font-medium">Co-founder and Head Manager</p>
            <p className="mt-3 text-gray-700 max-w-lg">With <b>4+ years</b> of experience on the field of both cleaning and removal services, Cyrush Khadka has gained the proficiency in the field. Moreover, the experiences have been gathered at the workplace of Sydney itself allowing him to get firsthand experience with the professionals and general customers of Sydney. His dedication to quality and customer satisfaction makes Sydney Move and Clean a trusted brand.</p>
        </div>
      </div>
    </section>
  );
};

export default HeadPersonnel;
