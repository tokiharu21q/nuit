# AnimatedElements コンポーネント

## 概要
月アイコン、スラッシュ、コンテンツ名のHTML構造を統一管理するAstroコンポーネントです。TransitionConfigと組み合わせて使用することで、一貫性のあるアニメーション要素を提供します。

## 使用方法

### 基本的な使用方法

```astro
---
// src/pages/about.astro
import AnimatedElements from '../components/AnimatedElements.astro';
import { transitionPresets } from '../components/TransitionConfig';

const { moonTransition, slashTransition, contentNameTransition } = transitionPresets.content;
---

<html>
  <body>
    <div class="content-root">
      <AnimatedElements
        moonTransition={moonTransition}
        slashTransition={slashTransition}
        contentNameTransition={contentNameTransition}
        contentName="案内"
        showBackButton={true}
      />
      
      <!-- その他のコンテンツ -->
    </div>
  </body>
</html>
```

### パラメータ

| パラメータ | 型 | デフォルト | 説明 |
|-----------|----|-----------|------|
| `moonTransition` | `any` | 必須 | 月アイコンの遷移設定 |
| `slashTransition` | `any` | 必須 | スラッシュの遷移設定 |
| `contentNameTransition` | `any` | 必須 | コンテンツ名の遷移設定 |
| `contentName` | `string` | `""` | 表示するコンテンツ名 |
| `moonPosition` | `'entrance' \| 'menu' \| 'content'` | `"content"` | 月アイコンの位置設定 |

## 各ページでの使用例

### entrance.astro
```astro
---
import AnimatedElements from '../components/AnimatedElements.astro';
import { transitionPresets } from '../components/TransitionConfig';

const { moonTransition, slashTransition, contentNameTransition } = transitionPresets.entrance;
---

<AnimatedElements
  moonTransition={moonTransition}
  slashTransition={slashTransition}
  contentNameTransition={contentNameTransition}
  contentName=""
  moonPosition="entrance"
/>
```

### menu.astro
```astro
---
import AnimatedElements from '../components/AnimatedElements.astro';
import { transitionPresets } from '../components/TransitionConfig';

const { moonTransition, slashTransition, contentNameTransition } = transitionPresets.menu;
---

<AnimatedElements
  moonTransition={moonTransition}
  slashTransition={slashTransition}
  contentNameTransition={contentNameTransition}
  contentName="メニュー"
  moonPosition="menu"
/>
```

### about.astro
```astro
---
import AnimatedElements from '../components/AnimatedElements.astro';
import { transitionPresets } from '../components/TransitionConfig';

const { moonTransition, slashTransition, contentNameTransition } = transitionPresets.content;
---

<AnimatedElements
  moonTransition={moonTransition}
  slashTransition={slashTransition}
  contentNameTransition={contentNameTransition}
  contentName="案内"
/>
```

### photos.astro / diary.astro
```astro
---
import AnimatedElements from '../components/AnimatedElements.astro';
import { transitionPresets } from '../components/TransitionConfig';

const { moonTransition, slashTransition, contentNameTransition } = transitionPresets.contentLong;
---

<AnimatedElements
  moonTransition={moonTransition}
  slashTransition={slashTransition}
  contentNameTransition={contentNameTransition}
  contentName="写真"
/>
```

## 機能

### 1. 月アイコン（ThemeToggleコンポーネント使用）
- ダーク/ライトモード切り替え
- ホバー効果
- テーマ状態の保存・復元

### 2. 中央スラッシュ
- 回転アニメーション対応
- ダークモード対応

### 3. コンテンツ名
- クリック可能
- ホバー効果

### 4. 共通機能
- カスタムカーソル対応
- ダークモード対応
- View Transition API対応

## スタイル

コンポーネント内に必要なスタイルが含まれています：

- 月アイコンの位置とホバー効果
- スラッシュの位置と回転
- コンテンツ名の位置とスタイル
- ダークモード対応
- レスポンシブ対応

## メリット

1. **統一性**: 全ページで同じHTML構造とスタイル
2. **保守性**: 要素の変更が1箇所で済む
3. **再利用性**: 異なるページで同じコンポーネントを使用
4. **型安全性**: TypeScriptによる型チェック
5. **柔軟性**: パラメータによるカスタマイズ

## 注意事項

- 既存のページでは段階的に移行可能
- テーマ切り替え機能はThemeToggleコンポーネントに統合
- 戻るボタン（arrow-btn back-to-menu）はNavigationElementsコンポーネントで管理
- CSSクラス名は既存のスタイルと競合しないよう設計
