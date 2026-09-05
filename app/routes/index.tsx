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
          <input className="motion-toggle" type="checkbox" id="pause-fox" />
          <label className="motion-label" for="pause-fox">
            アニメーションを停止
          </label>
          <div className="room-stage">
            <img
              className="room-illustration"
              src="/room-muted.png"
              alt="淡い色のPCデスクのある部屋を、オレンジのドット絵のキツネが跳び回っています"
              width="1370"
              height="1148"
              fetchpriority="high"
            />
            <div className="fox-flight" aria-hidden="true">
              <img
                className="pixel-fox"
                src="/fox-pixel.png"
                alt=""
                width="1254"
                height="1254"
              />
            </div>
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
