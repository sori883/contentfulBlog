import { createRoute } from "honox/factory";

import { GeneralLayout } from "@/components/layouts/generalLayout";

export default createRoute((c) =>
  c.render(
    <GeneralLayout>
      <section className="home-hero" aria-labelledby="hero-title">
        <h1 id="hero-title" className="hero-title">
          sori883.dev
        </h1>
        <div className="hero-scene">
          <img
            className="room-illustration"
            src="/room-simple.png"
            alt="PCデスクとキツネのいる、淡い紫と水色の立体的な小さな部屋"
            width="1372"
            height="1146"
            fetchpriority="high"
          />
        </div>
        <div className="home-about-link">
          <a href="/about">
            ABOUT <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </GeneralLayout>
  )
);
