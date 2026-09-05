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
          <div className="room-stage">
            <img
              className="room-illustration"
              src="/room-muted.png"
              alt="淡い色のPCデスク、椅子、窓と植物のある小さな部屋"
              width="1370"
              height="1148"
              fetchpriority="high"
            />
          </div>
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
