const workingPapers = [
  {
    title: "Your Paper Title Here",
    authors: "Kayla Xiao",
    venue: "",
    description:
      "Brief description of the paper's main question and contribution. What problem does it solve? What is the main finding?",
    links: [
      { label: "PDF", href: "#" },
      { label: "SSRN", href: "#" },
    ],
  },
];

const worksInProgress = [
  {
    title: "Another Paper Title in Progress",
    authors: "Kayla Xiao, and Co-author Name",
  },
];

export default function Research() {
  return (
    <div className="space-y-10">
      <h1 className="text-2xl font-bold">Research</h1>

      <section className="space-y-6">
        <h2 className="text-lg font-semibold border-b border-gray-200 pb-1">Working Papers</h2>
        {workingPapers.map((paper, i) => (
          <div key={i} className="space-y-1.5">
            <p className="font-medium text-gray-900 text-sm">{paper.title}</p>
            <p className="text-gray-500 text-xs">{paper.authors}</p>
            {paper.venue && (
              <p className="text-gray-500 text-xs italic">{paper.venue}</p>
            )}
            {paper.description && (
              <p className="text-gray-600 text-sm leading-relaxed">{paper.description}</p>
            )}
            {paper.links.length > 0 && (
              <div className="flex gap-3 text-sm pt-0.5">
                {paper.links.map((link, j) => (
                  <a key={j} href={link.href} className="text-blue-600 hover:underline">
                    [{link.label}]
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold border-b border-gray-200 pb-1">Work in Progress</h2>
        {worksInProgress.map((paper, i) => (
          <div key={i} className="space-y-0.5">
            <p className="font-medium text-gray-900 text-sm">{paper.title}</p>
            <p className="text-gray-500 text-xs">{paper.authors}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
