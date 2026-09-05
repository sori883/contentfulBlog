import { createRoute } from "honox/factory";

import { GeneralLayout } from "@/components/layouts/generalLayout";

const activities = [
  {
    number: "01",
    title: "つくる。",
    en: "DEVELOPMENT",
    text: "インフラからアプリまで。手を動かして、試しながらつくっています。",
    href: "https://github.com/sori883",
    link: "GitHub",
    icon: "⌘",
  },
  {
    number: "02",
    title: "書く。",
    en: "TECH WRITING",
    text: "開発で気づいたことや試したことを、技術記事にして残しています。",
    href: "https://zenn.dev/sorinaji",
    link: "Zenn",
    icon: "✎",
  },
  {
    number: "03",
    title: "学ぶ。",
    en: "LEARNING",
    text: "技術も、日々の経験も。学んだことを自分の言葉で整理していきます。",
    href: "https://qiita.com/sori883",
    link: "Qiita",
    icon: "✳",
  },
];

export default createRoute((c) =>
  c.render(
    <GeneralLayout>
      <section
        id="activities"
        className="section-page activity-section"
        aria-labelledby="activities-title"
      >
        <div className="section-heading horizontal">
          <div>
            <p className="eyebrow">02 / ACTIVITIES</p>
            <h1 id="activities-title">こんなこと、しています。</h1>
          </div>
          <span className="section-doodle" aria-hidden="true">
            ✳
          </span>
        </div>
        <div className="activity-grid">
          {activities.map((activity) => (
            <a
              key={activity.number}
              className="activity-card"
              href={activity.href}
              target="_blank"
              rel="noreferrer"
            >
              <div className="activity-top">
                <span>
                  {activity.number} / {activity.en}
                </span>
                <span aria-hidden="true">↗</span>
              </div>
              <span className="activity-icon" aria-hidden="true">
                {activity.icon}
              </span>
              <h3>{activity.title}</h3>
              <p>{activity.text}</p>
              <span className="activity-link">
                {activity.link} <span aria-hidden="true">→</span>
              </span>
            </a>
          ))}
        </div>
      </section>
    </GeneralLayout>
  )
);
