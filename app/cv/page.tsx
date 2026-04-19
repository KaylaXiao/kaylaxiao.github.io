export default function CV() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Curriculum Vitae</h1>
        <a
          href="/cv.pdf"
          className="border border-gray-800 px-4 py-1.5 text-sm hover:bg-gray-800 hover:text-white transition-colors"
        >
          Download PDF
        </a>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold border-b border-gray-200 pb-2">Education</h2>
        <div className="space-y-3">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-medium">PhD in Economics</p>
              <p className="text-gray-600 text-sm">Your University</p>
            </div>
            <span className="text-gray-500 text-sm shrink-0">2022 – Present</span>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <p className="font-medium">B.A. / M.A. in Economics</p>
              <p className="text-gray-600 text-sm">Your Undergraduate University</p>
            </div>
            <span className="text-gray-500 text-sm shrink-0">2018 – 2022</span>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold border-b border-gray-200 pb-2">Research</h2>
        <div>
          <p className="font-medium">Your Paper Title</p>
          <p className="text-gray-600 text-sm">Working Paper, 2024</p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold border-b border-gray-200 pb-2">Teaching</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <div>
              <p className="font-medium">Teaching Assistant — Course Name</p>
              <p className="text-gray-600 text-sm">Your University</p>
            </div>
            <span className="text-gray-500 text-sm">Fall 2023</span>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold border-b border-gray-200 pb-2">Awards & Fellowships</h2>
        <div className="space-y-2 text-gray-700">
          <div className="flex justify-between">
            <p>Fellowship / Award Name</p>
            <span className="text-gray-500 text-sm">2023</span>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold border-b border-gray-200 pb-2">Skills</h2>
        <div className="text-gray-700 text-sm space-y-1">
          <p><span className="font-medium">Software:</span> Stata, R, Python, MATLAB</p>
          <p><span className="font-medium">Languages:</span> English, Chinese (Mandarin)</p>
        </div>
      </section>

      <p className="text-xs text-gray-400">Last updated: April 2026</p>
    </div>
  );
}
