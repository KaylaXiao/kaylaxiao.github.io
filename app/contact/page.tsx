export default function Contact() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold">Contact</h1>

      <div className="space-y-4 text-gray-700">
        <div>
          <p className="font-medium text-gray-900">Email</p>
          <a
            href="mailto:kaylaxbh@gmail.com"
            className="text-blue-700 hover:underline"
          >
            kaylaxbh@gmail.com
          </a>
        </div>

        <div>
          <p className="font-medium text-gray-900">Office</p>
          <p>Room XXX, Department of Economics</p>
          <p>Your University</p>
          <p>City, State, ZIP</p>
        </div>

        <div>
          <p className="font-medium text-gray-900">Links</p>
          <div className="flex flex-col gap-1 text-sm">
            <a
              href="https://github.com/KaylaXiao"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://scholar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              Google Scholar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
