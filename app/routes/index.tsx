import { createRoute } from "honox/factory";

import { GeneralLayout } from "@/components/layouts/generalLayout";
import { SiteMenu } from "@/components/navigation/siteMenu";

export default createRoute((c) =>
  c.render(
    <GeneralLayout>
      <section className="home-hero" aria-labelledby="hero-title">
        <h1 id="hero-title" className="hero-title">
          sori883.dev
        </h1>
        <div className="hero-scene">
          <div className="hero-stage">
            <img
              className="hero-artwork"
              src="/fox-chibi.png"
              alt="大きなしっぽを抱えて目を閉じた、丸いオレンジ色のキツネのイラスト"
              width="1254"
              height="1254"
              fetchpriority="high"
            />
          </div>
        </div>
        <SiteMenu current="home" />
      </section>
    </GeneralLayout>
  )
);
