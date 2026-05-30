import ContactFormButton from "./ContactFormButton"

export default function Hero() {
  return (
    <section id="hero" className="card my-8 relative overflow-hidden shadow-md">
      <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-start">
        <div className="w-full md:w-3/5 z-10">
          <h1 className="text-black dark:text-white text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
            Найди свой путь
            <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">и живи в гармонии</span>
            с собой
          </h1>
          <p className="my-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
            Екатерина Великая — дипломированный цифровой психолог, выпускница Института цифровой психологии Милана Тарбо. Помогаю женщинам реализоваться, обрести себя и быть счастливыми — даже в декрете.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <ContactFormButton />
            <a href="#services" className="btn-secondary text-black dark:text-white">
              Узнать больше
            </a>
          </div>
        </div>

        <div className="hidden md:block md:w-2/5 md:absolute md:right-0 md:top-0 md:bottom-0 md:flex md:items-center">
          <img
            src="https://cdn.poehali.dev/projects/eab43b4f-36d1-44d6-82dc-bcf92d34cd71/files/bffecb20-4f1f-45fd-a61f-e122ac8a0089.jpg"
            alt="Екатерина Великая — цифровой психолог"
            className="w-full h-auto md:h-full md:w-auto md:object-cover md:object-left"
          />
        </div>
      </div>
    </section>
  )
}