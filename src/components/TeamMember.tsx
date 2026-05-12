interface TeamMemberProps {
  name: string;
  title: string;
  image?: string;
  bio: string;
  qAndA: { question: string; answer: string }[];
}

export function TeamMember({ name, title, image, bio, qAndA }: TeamMemberProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <a
        href="/team"
        className="text-[var(--sgs-teal)] hover:text-[var(--sgs-green)] mb-4 inline-block"
      >
        &larr; Back to Team
      </a>

      <div className="mt-6 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          {image && (
            <div className="w-48 h-48 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold text-[var(--sgs-navy)]">{name}</h1>
          <p className="text-lg text-[var(--sgs-teal)] font-medium mt-1">{title}</p>
          <p className="text-gray-600 mt-4 leading-relaxed">{bio}</p>
        </div>
      </div>

      {qAndA.length > 0 && (
        <div className="mt-8 space-y-4">
          <h2 className="text-xl font-bold text-[var(--sgs-navy)] mb-4">
            Get to know {name.split(" ")[0]}
          </h2>
          {qAndA.map((qa, i) => (
            <div key={i} className="bg-[var(--sgs-sky)] p-4 rounded-lg">
              <p className="font-semibold text-[var(--sgs-navy)]">{qa.question}</p>
              <p className="text-gray-700 mt-1">{qa.answer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}