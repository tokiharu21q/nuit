# ThemeToggle コンポーネント

## 概要
月アイコンとテーマ切り替え機能を統合したAstroコンポーネントです。ダーク/ライトモードの切り替えとlocalStorageによる状態保存機能を提供します。

## 使用方法

### 基本的な使用方法

```astro
---
import ThemeToggle from '../components/ThemeToggle.astro';
import { transitionPresets } from '../components/TransitionConfig';

const { moonTransition } = transitionPresets.content;
---

<ThemeToggle moonTransition={moonTransition} />
```

### パラメータ

| パラメータ | 型 | デフォルト | 説明 |
|-----------|----|-----------|------|
| `moonTransition` | `any` | `undefined` | 月アイコンの遷移設定（オプション） |
| `className` | `string` | `""` | 追加のCSSクラス名 |
| `position` | `'entrance' \| 'menu' \| 'content'` | `"content"` | 月アイコンの位置設定 |

## 機能

### 1. テーマ切り替え
- クリックでダーク/ライトモードを切り替え
- localStorageによる状態保存
- ページ読み込み時の状態復元

### 2. アニメーション対応
- View Transition API対応
- 遷移設定の外部注入

### 3. スタイリング
- ホバー効果
- ダークモード対応
- レスポンシブ対応

## 各ページでの使用例

### entrance.astro
```astro
---
import ThemeToggle from '../components/ThemeToggle.astro';
import { transitionPresets } from '../components/TransitionConfig';

const { moonTransition } = transitionPresets.entrance;
---

<ThemeToggle moonTransition={moonTransition} position="entrance" />
```

### menu.astro
```astro
---
import ThemeToggle from '../components/ThemeToggle.astro';
import { transitionPresets } from '../components/TransitionConfig';

const { moonTransition } = transitionPresets.menu;
---

<ThemeToggle moonTransition={moonTransition} position="menu" />
```

### about.astro
```astro
---
import ThemeToggle from '../components/ThemeToggle.astro';
import { transitionPresets } from '../components/TransitionConfig';

const { moonTransition } = transitionPresets.content;
---

<ThemeToggle moonTransition={moonTransition} position="content" />
```

## メリット

1. **機能統合**: 月アイコンとテーマ切り替え機能が一体化
2. **再利用性**: 全ページで同じコンポーネントを使用
3. **保守性**: テーマ関連の変更が1箇所で済む
4. **一貫性**: 全ページで統一されたテーマ切り替え動作

## 注意事項

- 既存のページでは段階的に移行可能
- localStorageを使用するため、ブラウザの設定に依存
- ダークモードのスタイルは`CommonHead.astro`で定義
