import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "Что такое цифровая психология?",
    answer:
      "Цифровая психология — это научный метод, разработанный Миланом Тарбо, который помогает раскрыть истинную природу человека через анализ его цифрового кода. Это не гороскоп и не нумерология — это конкретные знания о себе, которые меняют жизнь.",
  },
  {
    id: 2,
    question: "Как проходит работа со мной?",
    answer:
      "Мы начинаем с вводной консультации, на которой я знакомлюсь с вашей ситуацией. Затем выстраиваем индивидуальную программу работы — онлайн-сессии, практики и поддержка между встречами. Формат и темп подбирается под вас.",
  },
  {
    id: 3,
    question: "Это поможет, если я в декрете?",
    answer:
      "Особенно поможет. Декрет — это время, когда многие женщины теряют себя. Я сама мама двоих детей и прошла этот путь. Вместе мы восстановим ваш ресурс и найдём, как реализоваться в этот период жизни.",
  },
  {
    id: 4,
    question: "Нужно ли иметь конкретный запрос?",
    answer:
      "Нет. Многие приходят с ощущением «что-то не так, но не понимаю что». Это нормально. На первой встрече мы вместе разберёмся, что вас беспокоит и какой результат вы хотите получить.",
  },
  {
    id: 5,
    question: "Сколько времени нужно, чтобы увидеть результат?",
    answer:
      "Первые осознания и изменения приходят уже после первых сессий. Глубокая трансформация — это процесс, который у каждого свой. Главное — желание меняться и регулярная работа.",
  },
  {
    id: 6,
    question: "Вы работаете только с женщинами?",
    answer:
      "В основном я специализируюсь на работе с женщинами — особенно мамами в декрете и теми, кто ищет своё предназначение. Если вы хотите узнать, подходим ли мы друг другу — просто напишите мне.",
  },
]

export default function Faq() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section id="faq" className="my-20">
      <div className="card p-8 md:p-10 shadow-lg">
        <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
          Частые
          <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">вопросы</span>
        </h2>
        <p className="mb-8 max-w-2xl text-gray-700 dark:text-gray-300">
          Здесь я собрала ответы на вопросы, которые чаще всего задают перед первой консультацией. Если не нашли свой — просто напишите мне.
        </p>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b pb-4 border-gray-300 dark:border-gray-700">
              <button
                onClick={() => toggleItem(faq.id)}
                className="flex justify-between items-center w-full text-left py-2 font-medium text-black dark:text-white hover:text-[#7A7FEE] dark:hover:text-[#7A7FEE] transition-colors"
                aria-expanded={openItem === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${openItem === faq.id ? "rotate-180 text-[#7A7FEE]" : ""}`}
                />
              </button>
              {openItem === faq.id && (
                <div id={`faq-answer-${faq.id}`} className="mt-2 text-gray-700 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}