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
    <div className="bg-white border border-gray-100 overflow-hidden group hover:shadow-2xl hover:border-gold/20 transition-all duration-300">
      <div className="relative h-96 overflow-hidden">
        <Image src={image} alt={name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
      </div>
      <div className="p-10">
        <h3 className="font-serif text-3xl text-navy tracking-tight">{name}</h3>
        <p className="text-gold font-semibold text-xs uppercase tracking-[0.25em] mt-2">{title}</p>
        <div className="w-10 h-[1px] bg-gold/40 my-5" />
        <p className="text-gray-600 leading-relaxed text-sm">{bio}</p>
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-sm"><span className="font-semibold text-navy">Education:</span> {education}</p>
          <p className="text-sm mt-2"><span className="font-semibold text-navy">Bar Admissions:</span> {barAdmissions.join(", ")}</p>
        </div>
      </div>
    </div>
  );
}
