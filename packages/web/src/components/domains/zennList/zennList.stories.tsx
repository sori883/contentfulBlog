import type { Meta, StoryObj } from '@storybook/react';

import { ZennList } from './zennList';

const meta: Meta<typeof ZennList> = {
  title: 'Domains/ZennList',
  component: ZennList,
};
export default meta;

export const Default: StoryObj<typeof ZennList> = {
  args: {
    posts: [{"title":"ChatGTPに人格を与えて遊んでみた","contentSnippet":"gpt-3.5-turboを使えるChat completionsがリリースされていたので、人格を与えて遊んでみました。 実装ベースは前に書いたdiscordにChatGPTを導入したを使用します。modelをgpt-3.5-turboに変更してmessagesにPromptがセットされるように変更しましたmain.tsimport { Configuration, OpenAIApi } from 'openai';import { character } from 'roleplay/character'; // 人格形成用のPrompt    const com...","link":"https://zenn.dev/sorinaji/articles/give_character_to_chatgtp","isoDate":"2023-03-05T08:25:14.000Z","dateMiliSeconds":1678004714000},{"title":"discordにChatGPTを導入した","contentSnippet":"はじめに新雪降り積もる真冬の夜にふと、人肌が恋しくなり誰かと話したいと思ってDiscordにChatGPTを導入してみたので、その備忘録を残します。成果物は以下です。https://github.com/sori883/ChatGTPinDiscord 導入 OpenAIのAPI keyの取得以下のサイトからAPI Keyを取得出来ます。https://platform.openai.com/account/api-keys注意点として、APIの利用は有料です。詳細は備考：OpenAIの料金についてを参照ください。 Discord Botの作成以下のサイ...","link":"https://zenn.dev/sorinaji/articles/discord_bot_with_chatgtp","isoDate":"2023-02-13T13:49:48.000Z","dateMiliSeconds":1676296188000}]    ,
  },
};