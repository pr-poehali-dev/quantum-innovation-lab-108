import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    slug: "case-1",
    title: "«Наконец-то я себя понимаю»",
    shortDescription: "Анна, мама двоих детей, нашла своё предназначение и запустила любимое дело после работы с цифровой психологией",
    mainImage: "/portfolio-images/saas-dashboard-1.jpg",
  },
  {
    id: 2,
    slug: "case-2",
    title: "«Декрет — не тупик, а старт»",
    shortDescription: "Марина восстановила внутренний ресурс в декрете и вернулась к себе — сильной, вдохновлённой и счастливой",
    mainImage: "/portfolio-images/ecommerce-interface-1.jpg",
  },
  {
    id: 3,
    slug: "case-3",
    title: "«Я развернула жизнь на 180°»",
    shortDescription: "Ольга ушла с нелюбимой работы и построила карьеру, которая наполняет смыслом каждый день",
    mainImage: "/portfolio-images/ai-platform-1.jpg",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="my-20">
      <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
        Истории
        <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">моих клиентов</span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
        Реальные истории людей, которые нашли свой путь, обрели гармонию с собой и начали жить так, как всегда хотели.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="card overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.mainImage}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-semibold text-black dark:text-white">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-1 mb-4">{project.shortDescription}</p>
              <div className="inline-flex items-center text-[#7A7FEE] text-sm font-medium group">
                Подробнее{" "}
                <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <a href="#contact" className="btn-primary">
          Записаться на консультацию
        </a>
      </div>
    </section>
  )
}