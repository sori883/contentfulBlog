import { createRoute } from "honox/factory";
import { getAllPosts } from "@/features/posts";

import { GeneralLayout } from "@/components/layouts/generalLayout";
import { PostSummary } from "@/components/post/postSummary";

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
      <section className="home-hero" aria-labelledby="hero-title">
        <div className="hero-kicker">
          <span>
            <i aria-hidden="true" /> WELCOME TO MY LITTLE CORNER
          </span>
          <span>PERSONAL WEBSITE / 01</span>
        </div>
        <h1 id="hero-title" className="hero-title">
          sori883
          <span className="hero-flower" aria-hidden="true">
            ✳
          </span>
        </h1>
        <div className="hero-scene">
          <div className="hero-message">
            <span className="small-label">HELLO, WORLD!</span>
            <p>
              今日も生きてる
              <br />
              だけでえらい<span>。</span>
            </p>
            <div className="hero-description">
              つくる、学ぶ、たまにひと休み。
              <br />
              sori883の活動と日々の記録。
            </div>
            <a className="round-link" href="#about">
              ちょっとのぞいてみる <span>↓</span>
            </a>
          </div>
          <img
            className="room-illustration"
            src="/room.svg"
            alt="PC、本、ラーメンとキツネのいる、淡い紫と水色の小さな部屋"
            width="900"
            height="660"
            fetchpriority="high"
          />
          <span className="scene-note">MAKE YOURSELF AT HOME.</span>
        </div>
        <div className="hero-bottom">
          <span>INFRASTRUCTURE / APPLICATION / LIFE</span>
          <a href="#about">SCROLL TO EXPLORE ↓</a>
        </div>
      </section>
      <section
        id="about"
        className="home-section intro-section"
        aria-labelledby="about-title"
      >
        <div className="section-heading">
          <p className="eyebrow">01 / ABOUT ME</p>
          <h2 id="about-title">
            はじめまして、
            <br />
            sori883です<span className="coral-dot">。</span>
          </h2>
        </div>
        <div className="intro-copy">
          <div className="profile-sticker">
            <img
              src="/me.webp"
              alt="sori883のキツネのアバター"
              width="120"
              height="120"
              loading="lazy"
            />
            <span>THAT’S ME! ↙</span>
          </div>
          <p>
            インフラとアプリをやっています。
            <br />
            気になることを試して、つくって、書き残す。
            <br />
            そんな日々を楽しんでいます。
          </p>
          <p className="muted">
            技術の話も、何気ない日常も。
            <br />
            この場所に、少しずつ集めていきます。
          </p>
          <a className="text-link" href="/about">
            もう少し、私について <span>↗</span>
          </a>
        </div>
      </section>
      <section
        id="activities"
        className="home-section activity-section"
        aria-labelledby="activities-title"
      >
        <div className="section-heading horizontal">
          <div>
            <p className="eyebrow">02 / ACTIVITIES</p>
            <h2 id="activities-title">こんなこと、しています。</h2>
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
      <section
        className="home-section latest-section"
        aria-labelledby="blog-title"
      >
        <div className="section-heading horizontal">
          <div>
            <p className="eyebrow">03 / LATEST NOTES</p>
            <h2 id="blog-title">ブログ</h2>
            <p className="section-subtitle">
              つくったこと、学んだこと、ときどき日常。
            </p>
          </div>
          <a className="text-link" href="/blog">
            すべての記事 <span>↗</span>
          </a>
        </div>
        <div className="post-grid">
          {getAllPosts()
            .slice(0, 3)
            .map((post) => (
              <PostSummary key={post.id} post={post} />
            ))}
        </div>
      </section>
      <section
        className="home-section likes-section"
        aria-labelledby="likes-title"
      >
        <div className="likes-copy">
          <p className="eyebrow">04 / OFF THE CLOCK</p>
          <h2 id="likes-title">
            ひと休みも、
            <br />
            だいじ。
          </h2>
          <p>
            昼飲みからの炭水化物は幸福の極み。
            <br />
            好きなものに、元気をもらっています。
          </p>
          <a
            className="text-link"
            href="https://x.com/sori883"
            target="_blank"
            rel="noreferrer"
          >
            日々のことは X で <span>↗</span>
          </a>
        </div>
        <div className="photo-pile">
          <figure>
            <img
              src="/like/ramen1.webp"
              alt="お気に入りのラーメン"
              width="300"
              height="300"
              loading="lazy"
            />
            <figcaption>RAMEN IS ALWAYS A GOOD IDEA.</figcaption>
          </figure>
          <figure>
            <img
              src="/like/osake1.webp"
              alt="ひと休みのお酒"
              width="300"
              height="300"
              loading="lazy"
            />
            <figcaption>A LITTLE BREAK ☺</figcaption>
          </figure>
        </div>
      </section>
    </GeneralLayout>
  )
);
