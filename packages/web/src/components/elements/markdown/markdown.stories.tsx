import type { Meta, StoryObj } from '@storybook/react';

import { View } from './markdown';

const meta: Meta<typeof View> = {
  title: 'Element/MarkdownView',
  component: View,
};
export default meta;

const markdownText = `## ブログ作ってみました
この業界に入った8割の人が一度はやってみようかと思い、5割がやっぱダルいわとなり、3割が実行していると噂の技術ブログを始めてみました。  

この記事はテスト投稿です。内容はありません。一読頂きありがとうございました。  

## 作ってみた感想
熱しやすく冷めやすい性格なので、熱が冷めないうちに出来栄えより形にすることを最優先に作ってました。  
そのお陰で、左右もよく分からん状態から仕事終わり＋休日の暇な時間にぼちぼちやって約1ヶ月という「頑張ったんじゃね？」と思える結果になってよかったと思います。  

## 今後、、、
ブログ面では、作って満足パターンにならないように頑張ってブログ書きます。  
というかメモったの清書して適当に軽い気持ちで載っけていきます。  

システム面では、新築なのに隙間風を感じるソースをゆっくり修正しながら人に見せられるレベルにしていきたい、、です、ね。  
あとは見づらい部分、使いづらい部分（PCにだけ表示される上に表示が微妙な目次とかね）を直しつつ、関連記事とかの機能をぶちこみたいなー。。と思ってます。  
`;

export const Default: StoryObj<typeof View> = {
  args: {
    children: markdownText
  },
};

