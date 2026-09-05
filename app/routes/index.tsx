import { createRoute } from "honox/factory";

import { GeneralLayout } from "@/components/layouts/generalLayout";

export default createRoute((c) =>
  c.render(
    <GeneralLayout>
      <section className="home-hero" aria-labelledby="hero-title">
        <h1 id="hero-title" className="hero-title">
          sori883.dev
          <span className="hero-flower" aria-hidden="true">
            ✳
          </span>
        </h1>
        <div className="hero-scene">
          <img
            className="room-illustration"
            src="/room.svg"
            alt="PC、本、ラーメンとキツネのいる、淡い紫と水色の小さな部屋"
            width="900"
            height="750"
            fetchpriority="high"
          />
        </div>
      </section>
    </GeneralLayout>
  )
);
