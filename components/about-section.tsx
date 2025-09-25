import Image from "next/image";

export function AboutSection() {
  return (
    <div className="w-[80%] h-150 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 shadow-sm">
      <div className="size-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-[50%] flex items-center justify-center py-8 lg:py-0">
          <div className="relative w-64 h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20">
            <Image
              src="/profile_picture.png"
              alt="Rafael Mesquita - Profile Photo"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-full lg:w-[50%] flex justify-center flex-col px-6 lg:px-6 xl:pr-12 xl:pl-0">
          <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white mb-6 lg:mb-8">
            Senior Frontend Developer
          </h3>
          <p className="mb-6 2xl:text-lg lg:mb-10 text-base lg:text-base xl:text-base text-gray-700 dark:text-gray-300">
            I am a software engineer with expertise in React and React Native,
            building scalable and high-performance applications. Over the past
            five years, I’ve worked on projects in logistics, energy, and
            healthcare, always delivering solutions aligned with business goals.
            My focus is on writing maintainable code, implementing testing
            practices, and optimizing performance to ensure reliable systems. I
            enjoy solving complex problems, from large-scale refactors to
            restoring critical production issues under tight deadlines.
          </p>
          <p className="text-base 2xl:text-lg lg:text-base xl:text-base text-gray-700 dark:text-gray-300">
            Beyond development, I value collaboration and mentoring, helping
            teams follow best practices and improve code quality. I’ve
            introduced TDD/BDD workflows, streamlined CI/CD pipelines, and led
            the delivery of enterprise applications ahead of schedule. For me,
            software development is about creating resilient and impactful
            systems that truly support users and businesses. I thrive in
            environments where innovation and practicality work hand in hand.
          </p>
        </div>
      </div>
    </div>
  );
}
