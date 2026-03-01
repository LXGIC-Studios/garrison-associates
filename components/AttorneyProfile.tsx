import Image from "next/image";

interface Props {
  name: string;
  title: string;
  image: string;
  bio: string;
  education: string;
  barAdmissions: string[];
}

export default function AttorneyProfile({ name, title, image, bio, education, barAdmissions }: Props) {
  return (
    <div className="bg-white border border-gray-100 overflow-hidden group hover:shadow-xl transition-shadow">
      <div className="relative h-80 overflow-hidden">
        <Image src={image} alt={name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-8">
        <h3 className="font-serif text-2xl text-navy">{name}</h3>
        <p className="text-gold font-semibold text-sm uppercase tracking-wider mt-1">{title}</p>
        <p className="text-gray-600 leading-relaxed mt-4 text-sm">{bio}</p>
        <div className="mt-6 pt-6 border-t border-gray-100">
          <p className="text-sm"><span className="font-semibold text-navy">Education:</span> {education}</p>
          <p className="text-sm mt-2"><span className="font-semibold text-navy">Bar Admissions:</span> {barAdmissions.join(", ")}</p>
        </div>
      </div>
    </div>
  );
}
