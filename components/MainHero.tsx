import SmallButton from "./SmallButton";

export default function MainHero() {
  return (
    <div className="flex h-screen font-poppins">
      {/* Left Half: Text Content */}
      <div className="flex flex-col flex-1 justify-center items-start px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          The professional <span className="text-sky-500">resume builder</span>
        </h1>
        <p className="text-xl md:text-2xl mt-4 max-w-md">
          Only 2% of resumes win. Yours will be one of them. Let’s build you a resume that works.
        </p>
        <div className="mt-6">
          <SmallButton name="create your resume" />
        </div>
        <div className="flex flex-col mt-6 space-y-2">
          <div className="text-lg">
            <span className="text-2xl text-green-400 font-semibold">39%</span> more likely to get hired
          </div>
          <div className="text-lg">
            <span className="text-2xl text-red-400 font-semibold">8%</span> more pay in your next job
          </div>
        </div>
      </div>

      {/* Right Half: Image */}
      <div className="flex flex-1 justify-center items-center">
        <img
          src="/hero_image.webp"
          alt="Resume Builder Hero"
          className="object-contain max-h-[480px] w-full md:max-h-[600px]"
        />
      </div>
    </div>
  );
}