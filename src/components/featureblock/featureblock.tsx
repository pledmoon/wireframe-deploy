import Image from 'next/image'

interface FeatureItem {
  icon: string
  title: string
  description: string
  list: string[]
  link?: string
}

const features: FeatureItem[] = [
  {
    icon: '/images/icons/feat1.png',
    title: 'Multiple Managers',
    description:
      'Continue indulged speaking the was out horrible domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son',
    list: [
      'Capture everything',
      'Organize your to-do list by workflow',
      'Always include a deadline',
    ],
    link: '/services-details',
  },
  {
    icon: '/images/icons/feat2.png',
    title: 'Customization',
    description:
      'Continue indulged speaking the was out horrible domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son',
    list: [
      'Organize your to-do list by workflow',
      'Always include a deadline',
      'Break big work into smaller tasks',
    ],
    link: '/services-details',
  },
  {
    icon: '/images/icons/feat3.png',
    title: 'Extensions & Addons',
    description:
      'Continue indulged speaking the was out horrible domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son',
    list: [
      'Capture everything',
      'Organize your to-do list by workflow',
      'Always include a deadline',
    ],
    link: '/services-details',
  },
  {
    icon: '/images/icons/feat4.png',
    title: 'Strong Encryption',
    description:
      'Continue indulged speaking the was out horrible domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son',
    list: [
      'Organize your to-do list by workflow',
      'Always include a deadline',
      'Break big work into smaller tasks',
    ],
    link: '/services-details',
  },
]

export default function FeatureTwoBlock() {
  return (
    <section className="feature-style-two-area overflow-hidden py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="feature-style-two rounded-[32px] bg-white p-6 shadow-lg transition hover:shadow-xl"
            >
              <div className="icon relative mb-4">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={64}
                  height={64}
                />
                {feature.link && (
                  <a
                    href={feature.link}
                    className="btn-arrow absolute right-0 top-0 text-blue-500 hover:text-blue-700"
                  >
                    <i className="fas fa-long-arrow-up"></i>
                  </a>
                )}
              </div>
              <div className="content">
                <h3 className="mb-2 text-xl font-semibold">
                  {feature.link ? (
                    <a
                      href={feature.link}
                      className="hover:underline"
                    >
                      {feature.title}
                    </a>
                  ) : (
                    feature.title
                  )}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
                <ul className="text-gray-600 mt-4 list-inside list-disc space-y-1">
                  {feature.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
