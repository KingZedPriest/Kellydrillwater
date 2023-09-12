export default function HeroSection() {
  return (
    <main className="flex py-20 flex-col items-center gap-10 md:flex-row md:justify-between">
      <div className="lg:w-1/2">
        <h1 className="leading text-2xl font-[800] text-black sm:text-3xl md:text-4xl lg:text-5xl">
          Your Trusted Drilling Partner{" "}
          <span className="text-containerColor">Kelly Drill.</span>
        </h1>
        <p className="mt-10 text-black">
          Experts in Water Drilling and Exploration. At Kelly Drill, we
          specialize in water drilling and exploration, bringing years of
          expertise to each project. With a focus on sustainability and
          innovation, we&apos;re your trusted partners for clean water solutions
        </p>
        <button className="bg-containerColor border-containerColor hover:text-containerColor mt-10 font-semibold rounded-3xl border-2 px-4 py-3 text-white duration-500 hover:bg-white">
          Start Your Project
        </button>
      </div>
      <div className="clip h-full lg:w-1/2"></div>
    </main>
  );
}
