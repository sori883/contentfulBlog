import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleList } from './ArticlesList';

export default {
  title: 'Domains/ArticleTopList',
  component: ArticleList,
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (arg) => <ArticleList {...arg}></ArticleList>;

export const Default = Template.bind({});
Default.args ={
  fallbackArticle: {
    "items": [
      {
        "title": "テスト投稿",
        "slug": "first_post",
        "content": "\n## ブログ作ってみました\nこの業界に入った8割の人が一度はやってみようかと思い、5割がやっぱダルいわとなり、3割が実行していると噂の技術ブログを始めてみました。  \n\nこの記事はテスト投稿です。内容はありません。一読頂きありがとうございました。  \n\n## 作ってみた感想\n熱しやすく冷めやすい性格なので、熱が冷めないうちに出来栄えより形にすることを最優先に作ってました。  \nそのお陰で、左右もよく分からん状態から仕事終わり＋休日の暇な時間にぼちぼちやって約1ヶ月という「頑張ったんじゃね？」と思える結果になってよかったと思います。  \n\n## 今後、、、\nブログ面では、作って満足パターンにならないように頑張ってブログ書きます。  \nというかメモったの清書して適当に軽い気持ちで載っけていきます。  \n\nシステム面では、新築なのに隙間風を感じるソースをゆっくり修正しながら人に見せられるレベルにしていきたい、、です、ね。  \nあとは見づらい部分、使いづらい部分（PCにだけ表示される上に表示が微妙な目次とかね）を直しつつ、関連記事とかの機能をぶちこみたいなー。。と思ってます。  \n\n## このブログで頻出する画像\nココナラというサービスを[熊田（くまだ）様](https://coconala.com/users/2964176)に作成していただきました。  \nめっちゃかわいくない？すき  \n\n![狐](images/0001/kitune500.png)",
        "tagsCollection": {
          "items": [
            {
              "name": "ポエム",
              "slug": "ポエム"
            }
          ]
        },
        "sys": {
          "id": "3luM91tbAGzUzxtk2p6T5U",
          "firstPublishedAt": "2022-12-02T18:23:08.168Z"
        }
      },
      {
        "title": "テスト投稿",
        "slug": "first_post",
        "content": "\n## ブログ作ってみました\nこの業界に入った8割の人が一度はやってみようかと思い、5割がやっぱダルいわとなり、3割が実行していると噂の技術ブログを始めてみました。  \n\nこの記事はテスト投稿です。内容はありません。一読頂きありがとうございました。  \n\n## 作ってみた感想\n熱しやすく冷めやすい性格なので、熱が冷めないうちに出来栄えより形にすることを最優先に作ってました。  \nそのお陰で、左右もよく分からん状態から仕事終わり＋休日の暇な時間にぼちぼちやって約1ヶ月という「頑張ったんじゃね？」と思える結果になってよかったと思います。  \n\n## 今後、、、\nブログ面では、作って満足パターンにならないように頑張ってブログ書きます。  \nというかメモったの清書して適当に軽い気持ちで載っけていきます。  \n\nシステム面では、新築なのに隙間風を感じるソースをゆっくり修正しながら人に見せられるレベルにしていきたい、、です、ね。  \nあとは見づらい部分、使いづらい部分（PCにだけ表示される上に表示が微妙な目次とかね）を直しつつ、関連記事とかの機能をぶちこみたいなー。。と思ってます。  \n\n## このブログで頻出する画像\nココナラというサービスを[熊田（くまだ）様](https://coconala.com/users/2964176)に作成していただきました。  \nめっちゃかわいくない？すき  \n\n![狐](images/0001/kitune500.png)",
        "tagsCollection": {
          "items": [
            {
              "name": "ポエム",
              "slug": "ポエム"
            }
          ]
        },
        "sys": {
          "id": "3luM91tbAGzUzxtk2p6T5U",
          "firstPublishedAt": "2022-12-02T18:23:08.168Z"
        }
      }
    ],
    "total": 1
  }
};