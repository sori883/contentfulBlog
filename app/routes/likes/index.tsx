import { createRoute } from "honox/factory";

import { GeneralLayout } from "@/components/layouts/generalLayout";

export default createRoute((c) =>
  c.render(
    <GeneralLayout>
      <section
        className="section-page likes-section"
        aria-labelledby="likes-title"
      >
        <div className="likes-copy">
          <p className="eyebrow">04 / OFF THE CLOCK</p>
          <h1 id="likes-title">
            ひと休みも、
            <br />
            だいじ。
          </h1>
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
        <div className="likes-gallery">
          <img
            src="/like/osake1.webp"
            alt="お酒"
            className="w-full rounded-lg object-cover"
            loading="lazy"
            width="300"
            height="160"
          />
          <img
            src="/like/ramen1.webp"
            alt="ラーメン"
            className="w-full rounded-lg object-cover"
            loading="lazy"
            width="300"
            height="160"
          />
          <img
            src="/like/tukemen1.webp"
            alt="つけ麺"
            className="w-full rounded-lg object-cover"
            loading="lazy"
            width="300"
            height="160"
          />
          <img
            src="/like/tukemen2.webp"
            alt="つけ麺"
            className="w-full rounded-lg object-cover"
            loading="lazy"
            width="300"
            height="160"
          />
          <img
            src="/like/oburasoba1.webp"
            alt="おぶらそば"
            className="w-full rounded-lg object-cover"
            loading="lazy"
            width="300"
            height="160"
          />
          <img
            src="/like/taimwanmezesoba1.webp"
            alt="台湾まぜそば"
            className="w-full rounded-lg object-cover"
            loading="lazy"
            width="300"
            height="160"
          />
        </div>
      </section>
    </GeneralLayout>
  )
);
