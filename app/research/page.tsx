const papers = {
  workingPapers: [
    {
      title: "Your Paper Title Here",
      coauthors: "",
      year: "2024",
      abstract:
        "Write your abstract here. Describe the main question, methodology, and findings of your paper.",
      links: [
        { label: "PDF", href: "#" },
        { label: "SSRN", href: "#" },
      ],
    },
  ],
  worksInProgress: [
    {
      title: "Another Paper in Progress",
      coauthors: "with Co-author Name",
      year: "",
      abstract: "",
      links: [],
    },
  ],
};

export default function Research() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-semibold">Research</h1>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold border-b border-gray-200 pb-2">
          Working Papers
        </h2>
        {papers.workingPapers.map((paper, i) => (
          <div key={i} className="space-y-2">
            <p className="font-medium text-gray-900">
              {paper.title}{" "}
              {paper.year && (
                <span className="font-normal text-gray-500">({paper.year})</span>
              )}
            </p>
            {paper.coauthors && (
              <p className="text-sm text-gray-500">{paper.coauthors}</p>
            )}
            {paper.abstract && (
              <p className="text-sm text-gray-600 leading-relaxed">
                {paper.abstract}
              </p>
            )}
            {paper.links.length > 0 && (
              <div className="flex gap-3 text-sm">
                {paper.links.map((link, j) => (
                  <a
                    key={j}
                    href={link.href}
                    className="text-blue-700 hover:underline"
                  >
                    [{link.label}]
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold border-b border-gray-200 pb-2">
          Work in Progress
        </h2>
        {papers.worksInProgress.map((paper, i) => (
          <div key={i} className="space-y-1">
            <p className="font-medium text-gray-900">{paper.title}</p>
            {paper.coauthors && (
              <p className="text-sm text-gray-500">{paper.coauthors}</p>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
