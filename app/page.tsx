export default function Home() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row gap-8 items-start">
        {/* 照片占位，之后替换成 <img src="/photo.jpg" ... /> */}
        <div className="w-36 h-44 bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400 text-xs shrink-0">
          Photo
        </div>

        <div className="space-y-4">
          <div>
            <h1 className="text-3xl font-semibold">Kayla Xiao</h1>
            <p className="text-gray-500 mt-1">PhD Candidate in Economics</p>
            <p className="text-gray-500">Your University Name</p>
          </div>

          <div className="text-sm text-gray-600 space-y-1">
            <p>kaylaxbh@gmail.com</p>
            <p>City, Country</p>
          </div>

          <div className="flex gap-3 text-sm">
            <a
              href="/cv"
              className="border border-gray-800 px-4 py-1.5 hover:bg-gray-800 hover:text-white transition-colors"
            >
              CV
            </a>
            <a
              href="https://github.com/KaylaXiao"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-400 px-4 py-1.5 text-gray-500 hover:border-gray-800 hover:text-gray-800 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold border-b border-gray-200 pb-2">About</h2>
        <p className="text-gray-700 leading-relaxed">
          I am a PhD candidate in Economics at [Your University]. My research
          interests lie in [your fields, e.g., labor economics, public
          economics, applied microeconomics]. I am particularly interested in
          [specific topics].
        </p>
        <p className="text-gray-700 leading-relaxed">
          Before my PhD, I completed [your undergraduate/master degree] at
          [institution].
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold border-b border-gray-200 pb-2">
          Research Interests
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Labor Economics</li>
          <li>Public Economics</li>
          <li>Applied Microeconomics</li>
        </ul>
      </section>
    </div>
  );
}
