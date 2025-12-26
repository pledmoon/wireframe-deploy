'use client'

// обязательно, так как используется GraphAnimated с useEffect
import Image from 'next/image'
import GraphAnimated from './graph-animated'

const features = [
  {
    title: 'Write & Schedule with Ease',
    description:
      'Effortlessly create and organize content, perfect for blogs, landing pages, and more.',
    image: '/images/solution/1.jpg',
  },
  {
    title: 'Data-Driven Decisions',
    description: 'Track performance metrics instantly to optimize content and strategy.',
    image: '/images/solution/2.png',
  },
  {
    title: 'Publish Anywhere',
    description:
      'Share content across multiple platforms like LinkedIn, your blog, or newsletters.',
    image: '/images/solution/3.png',
  },
  {
    title: 'Get Smarter Content Suggestions',
    description: 'Leverage AI tools to get personalized recommendations for improving your site.',
    image: '/images/solution/4.png',
  },
]

export default function FeaturesSection() {
  return (
    <section
      id="solution"
      className="bg-gray-50 py-20"
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm uppercase text-blue-500">Solution</p>
        <h2 className="mt-2 text-3xl font-semibold md:text-4xl">A Template Built to Convert</h2>
        <p className="text-gray-600 mx-auto mt-2 max-w-xl">
          Designed to guide users through your key offerings while showcasing your product’s value.
        </p>

        {/* Сетка */}
        <div className="">
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Верхний ряд */}
            <div className="col-span-1 flex flex-col items-center rounded-3xl bg-white p-6 shadow-md">
              <div className="relative mb-4 h-32 w-32">
                <Image
                  src={features[0].image}
                  alt={features[0].title}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h4 className="text-center text-xl font-semibold">{features[0].title}</h4>
              <p className="text-gray-600 mt-2 text-center">{features[0].description}</p>
            </div>

            <div className="col-span-1 rounded-3xl bg-white p-6 shadow-md lg:col-span-2">
              <h3 className="mb-4 text-2xl font-semibold">Performance Graph</h3>
              <GraphAnimated
                data={[0, 50, 100, 75, 90, 60]}
                width={1200}
                height={200}
                strokeColor="#2469FE"
                strokeWidth={4}
                repeatDelay={2000} // задержка повторной анимации в ms
              />
            </div>
          </div>

          {/* Нижний ряд: оставшиеся 3 блока */}
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {features.slice(1).map((feature, index) => (
              <div
                key={index}
                className="col-span-1 flex flex-col items-center rounded-3xl bg-white p-6 shadow-md"
              >
                <div className="relative mb-4 h-32 w-32">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h4 className="text-center text-xl font-semibold">{feature.title}</h4>
                <p className="text-gray-600 mt-2 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
