import { createRoute } from "honox/factory";

import { GeneralLayout } from "@/components/layouts/generalLayout";

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
          sori883.dev
          <span className="hero-flower" aria-hidden="true">
            ✳
          </span>
        </h1>
        <div className="hero-scene">
          <div className="hero-message">
            <span className="small-label">HELLO, WORLD!</span>
            <p>
              インフラも、
              <br />
              アプリも。
            </p>
            <div className="hero-description">
              つくる、学ぶ、たまにひと休み。
              <br />
              sori883の活動と日々の記録。
            </div>
            <a className="round-link" href="/about">
              プロフィールを見る <span>↗</span>
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
          <a href="/about">ABOUT ME ↗</a>
        </div>
      </section>
    </GeneralLayout>
  )
);
