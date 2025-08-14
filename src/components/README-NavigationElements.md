# NavigationElements コンポーネント

## 概要
戻るボタン、著作権表示などのナビゲーション要素を統合したAstroコンポーネントです。各ページで必要なナビゲーション要素を柔軟に配置できます。

## 使用方法

### 基本的な使用方法

```astro
---
import NavigationElements from '../components/NavigationElements.astro';
---

<!-- 戻るボタンと著作権を表示 -->
<NavigationElements 
  showBackButton={true}
  showCopyright={true}
/>
```

### パラメータ

| パラメータ | 型 | デフォルト | 説明 |
|-----------|----|-----------|------|
| `showBackButton` | `boolean` | `false` | 戻るボタンを表示するかどうか |
| `backButtonUrl` | `string` | `"/menu"` | 戻るボタンのリンク先 |
| `backButtonLabel` | `string` | `"メニューに戻る"` | 戻るボタンのaria-label |
| `showCopyright` | `boolean` | `true` | 著作権を表示するかどうか |
| `copyrightText` | `string` | `"十街©"` | 著作権テキスト |
| `copyrightUrl` | `string` | `"/entrance"` | 著作権のリンク先 |
| `className` | `string` | `""` | 追加のCSSクラス名 |

## 各ページでの使用例

### entrance.astro
```astro
---
import NavigationElements from '../components/NavigationElements.astro';
---

<!-- 著作権のみ表示 -->
<NavigationElements 
  showBackButton={false}
  showCopyright={true}
  copyrightText="十街©"
  copyrightUrl="/entrance"
/>
```

### menu.astro
```astro
---
import NavigationElements from '../components/NavigationElements.astro';
---

<!-- 著作権のみ表示 -->
<NavigationElements 
  showBackButton={false}
  showCopyright={true}
/>
```

### about.astro
```astro
---
import NavigationElements from '../components/NavigationElements.astro';
---

<!-- 戻るボタンと著作権を表示 -->
<NavigationElements 
  showBackButton={true}
  backButtonUrl="/menu"
  backButtonLabel="メニューに戻る"
  showCopyright={true}
/>
```

### photos.astro / diary.astro
```astro
---
import NavigationElements from '../components/NavigationElements.astro';
---

<!-- 戻るボタンと著作権を表示 -->
<NavigationElements 
  showBackButton={true}
  showCopyright={true}
/>
```

## 機能

### 1. 戻るボタン
- カスタマイズ可能なリンク先
- アクセシビリティ対応（aria-label）
- ホバー効果
- ダークモード対応

### 2. 著作権表示
- カスタマイズ可能なテキストとリンク
- 固定位置配置
- ダークモード対応

### 3. 共通機能
- カスタムカーソル対応
- レスポンシブ対応
- 柔軟な表示制御

## スタイル

コンポーネント内に必要なスタイルが含まれています：

- 戻るボタンの位置とスタイル
- 著作権の位置とスタイル
- ホバー効果
- ダークモード対応

## メリット

1. **統一性**: 全ページで同じナビゲーション要素のスタイル
2. **柔軟性**: パラメータによる表示制御
3. **保守性**: ナビゲーション要素の変更が1箇所で済む
4. **再利用性**: 異なるページで同じコンポーネントを使用

## 注意事項

- 既存のページでは段階的に移行可能
- 戻るボタンは各ページの要件に応じて表示/非表示を切り替え
- 著作権はデフォルトで表示される
- CSSクラス名は既存のスタイルと競合しないよう設計
