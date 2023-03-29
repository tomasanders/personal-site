const Tom = {
  name: "Tom Sanders",
  age: (new Date().getFullYear() - 1985),
  location: "Tokyo, Japan",
  desiredLocation: "Brighton, England",
  skills: {
    languages: ["CSS3", "HTML5", "JavaScript", "Ruby", "Postgres"],
    libraries: ["React", "TypeScript", "jQuery", "Rails", "Tailwind CSS", "Bootstrap", "SASS"],
    other: ["I18n internationalization", "web accessibility", "testing with Vitest"]
  },
  projects: {
    portfolioSite: {
      name: "tom sanders - portfolio",
      type: "personal website",
      description: "a fun way to advertise myself",
      link: "https://www.tom-sanders.dev",
      tech: "Next.js, React, Tailwind CSS"
    },
    hiKaQuiz: {
      name: "HiKa Quiz",
      type: "personal project",
      description: "a flashcard-style hiragana and katakana quiz",
      link: "https://www.github.com/tomasanders/hikaquiz",
      tech: "Next.js, React, TypeScript, SASS"
    },
    bunproSrs: {
      name: "Bunpro SRS",
      type: "professional work",
      description: "a comprehensive japanese language learning tool that makes learning simple and efficient",
      link: "https://www.bunpro.jp",
      tech: "Ruby, React, jQuery, Rails, SASS, Tailwind CSS"
    },
  },
};
