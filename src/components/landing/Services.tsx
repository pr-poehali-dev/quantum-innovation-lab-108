import Icon from "@/components/ui/icon"

const services = [
  {
    id: 1,
    title: "Поиск своего пути",
    description: "Помогаю понять, кто вы есть на самом деле, найти своё предназначение и выстроить жизнь, которая приносит радость.",
    icon: "Compass",
    color: "bg-[#7A7FEE]",
  },
  {
    id: 2,
    title: "Женщина в декрете",
    description: "Поддерживаю мам в восстановлении внутреннего состояния, самореализации и раскрытии потенциала в период декрета.",
    icon: "Heart",
    color: "bg-[#7A7FEE]",
  },
  {
    id: 3,
    title: "Цифровая психология",
    description: "Использую методы цифровой психологии Милана Тарбо — научный подход, который помог мне развернуть свою жизнь на 180°.",
    icon: "Sparkles",
    color: "bg-[#7A7FEE]",
  },
]

export default function Services() {
  return (
    <section id="services" className="my-20">
      <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
        Как я могу
        <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">вам помочь</span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
        Я прошла этот путь сама — и теперь помогаю другим. Методы цифровой психологии дают конкретные инструменты для изменений в жизни, отношениях и самоощущении.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="card p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className={`${service.color} w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm`}>
              <Icon name={service.icon} size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{service.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}