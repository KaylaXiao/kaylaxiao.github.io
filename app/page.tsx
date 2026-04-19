export default function Home() {
  return (
    <div className="space-y-10">
      {/* Profile */}
      <div className="flex flex-col items-center text-center gap-4 pt-4">
        {/* 把照片命名为 photo.jpg 放到 public/ 文件夹后，删掉下面的 div，取消 img 的注释 */}
        <div className="w-32 h-32 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400 text-sm overflow-hidden">
          {/* <img src="/photo.jpg" alt="Kayla Xiao" className="w-full h-full object-cover" /> */}
          Photo
        </div>

        <div>
          <h1 className="text-2xl font-bold tracking-tight">Kayla Xiao</h1>
          <p className="text-gray-500 mt-1">PhD Candidate in Economics</p>
          <p className="text-gray-500 text-sm">Your University</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 text-sm">
          <a href="mailto:kaylaxbh@gmail.com" className="text-blue-600 hover:underline">Email</a>
          <span className="text-gray-300">|</span>
          <a href="/cv" className="text-blue-600 hover:underline">CV</a>
          <span className="text-gray-300">|</span>
          <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Scholar</a>
          <span className="text-gray-300">|</span>
          <a href="https://github.com/KaylaXiao" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
        </div>
      </div>

      {/* About */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold border-b border-gray-200 pb-1">About</h2>
        <p className="text-gray-700 leading-relaxed text-sm">
          I am a PhD candidate in Economics at [Your University]. My research
          interests lie in [your fields, e.g., labor economics, public economics,
          applied microeconomics]. I am particularly interested in [specific topics].
        </p>
        <p className="text-gray-700 leading-relaxed text-sm">
          Before my PhD, I completed [degree] at [institution].
        </p>
      </section>

      {/* Research Interests */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold border-b border-gray-200 pb-1">Research Interests</h2>
        <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
          <li>Labor Economics</li>
          <li>Public Economics</li>
          <li>Applied Microeconomics</li>
        </ul>
      </section>

      {/* News */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold border-b border-gray-200 pb-1">News</h2>
        <ul className="text-sm text-gray-700 space-y-2">
          <li>
            <span className="text-gray-400 mr-2">Apr 2026</span>
            New working paper available.
          </li>
          <li>
            <span className="text-gray-400 mr-2">Sep 2025</span>
            Presented at [Conference Name].
          </li>
        </ul>
      </section>
    </div>
  );
}
