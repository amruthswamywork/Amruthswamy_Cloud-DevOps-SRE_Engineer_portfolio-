import PageWrapper from "../components/layout/PageWrapper";
import CICDFlow from "../components/sections/CICDFlow";
import Architecture from "../components/sections/Architecture";
import GithubStats from "../components/sections/GithubStats";
import Skills from "../components/sections/Skills";
import TerraformSection from "../components/sections/TerraformSection";
import Education from "../components/sections/Education";

export default function Home() {
  return (
    <PageWrapper>
      <section className="min-h-screen flex items-center px-8 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}
          <div>
            <p className="uppercase tracking-widest text-sm text-primary font-medium">
              Junior
            </p>

            <h1 className="text-6xl font-bold mt-4 leading-tight">
              Amruth Swamy C P
            </h1>

            <h2 className="text-2xl text-gray-600 dark:text-gray-400 mt-4">
              Cloud | SRE | DevOps Automation Engineer
            </h2>

            <p className="mt-8 text-lg text-gray-600 dark:text-gray-400 max-w-xl">
              Designing scalable AWS infrastructure and automating secure CI/CD
              pipelines to deliver reliable cloud-native systems.
            </p>

            {/* Status Indicators */}
            <div className="mt-8 space-y-3">
              {[
                "AWS Infrastructure: Operational",
                "CI/CD Pipelines: Active",
                "Monitoring & Logging: Enabled",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-6 mt-10">
              <a
                href="/Amruth_swamy_DevOps-Cloud_resume.pdf"
                download
                className="px-8 py-3 bg-primary text-white rounded-xl shadow-sm hover:bg-accent transition"
              >
                Download Resume
              </a>

              <a
                href="/case-studies"
                className="px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-xl hover:border-primary transition"
              >
                View Case Studies
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80">
              <img
                src="/profile.png"
                alt="Amruth Swamy C P"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl ring-2 ring-primary/40" />
            </div>
          </div>

        </div>
      </section>

      {/* Other Sections */}
      <CICDFlow />
      <Architecture />
      <Skills />
      <Education />
      <TerraformSection />
      <GithubStats />
    </PageWrapper>
  );
}