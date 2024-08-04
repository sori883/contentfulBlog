import { GeneralLayout } from "~/components/layouts/generalLayout";
import { createRoute } from "honox/factory";
import { SingleContentLayout }from "~/components/layouts/singleContentLayout";

export default createRoute((c) => {
  return c.render(
    <GeneralLayout>
      <SingleContentLayout>
        <h1>
          プライバシーポリシー
        </h1>
        <div className="znc">
          <p>
            <h2>お問い合わせ</h2>
              Twitterまでお願い致します。<br />
              <a href="https://x.com/sorinaji" className="content-link" target="_blank" rel="noreferrer">@sorinaji</a>
              <h2>このサイトについて</h2>
              <h3>個人情報の保護について</h3>
              「https://sori883.dev」（以下、当サイト）を利用される方は、以下に記載する諸条件に同意したものとみなします。

              <h3>個人情報の収集について</h3>
              利用者は匿名のままで、当サイトを自由に閲覧する事ができます。お問合せ等、場合によっては、利用者の氏名やメールアドレスなどの個人情報の開示をお願いする事があります。<br />
              しかし、利用者の個人情報を利用者の許可なく、当サイトから第三者へ開示・共有する事はありません。<br />
              
              <h3>ウェブサーバの記録</h3>
              当サイトのウェブサーバは、利用者のコンピュータのIPアドレスを自動的に収集・記録しますが、これらは利用者個人を特定するものではありません。<br />
              利用者が自ら個人情報を開示しない限り、利用者は匿名のままで、当サイトを自由に閲覧する事ができます。<br />

              <h3>免責事項</h3>
              利用者は、当サイトを閲覧し、その内容を参照した事によって何かしらの損害を被った場合でも、当サイト管理者は責任を負いません。<br />
              また、当サイトからリンクされた、当サイト以外のウェブサイトの内容やサービスに関して、当サイトの個人情報の保護についての諸条件は適用されません。<br />
              当サイト以外のウェブサイトの内容及び、個人情報の保護に関しても、当サイト管理者は責任を負いません。<br /><br />

              最終更新:2022年11月17日
          </p>
        </div>
      </SingleContentLayout>
    </GeneralLayout>
  );
});
