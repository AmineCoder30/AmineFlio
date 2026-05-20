function Footer() {
  return (
    <footer className="w-full relative overflow-hidden bg-background py-16 border-t border-border mt-20">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none opacity-20">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-accent to-transparent sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start text-center md:text-left">
          <div className="space-y-4 max-w-sm">
            <h3 className="text-2xl font-bold tracking-tighter text-text">
              Mohamed Amine<span className="text-accent">.</span>
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Crafting robust web applications and digital experiences with
              care, detail, and a touch of magic.
            </p>
          </div>

          <div className="flex gap-x-6 items-center">
            <a
              href="https://github.com/AmineCoder30"
              target="_blank"
              rel="noreferrer"
              className="text-text-secondary hover:text-accent hover:-translate-y-1 transition-all duration-300"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between border-t border-border gap-4">
          <p className="text-xs leading-5 text-text-secondary">
            &copy; {new Date().getFullYear()} Mohamed Amine. All rights
            reserved.
          </p>
          <div className="flex gap-x-4 text-xs leading-5 text-text-secondary">
            <span>
              Built with{" "}
              <span className="text-accent animate-pulse inline-block">♥</span>{" "}
              &amp; React
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
