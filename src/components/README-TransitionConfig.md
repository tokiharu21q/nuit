# TransitionConfig コンポーネント

## 概要
遷移パターンに応じたアニメーション設定を一元管理するTypeScriptモジュールです。

## 使用方法

### 基本的な使用方法

```typescript
// src/pages/about.astro
import { transitionPresets } from '../components/TransitionConfig';

// コンテンツ画面用の設定を取得
const { moonTransition, slashTransition, contentNameTransition } = transitionPresets.content;

// 既存の設定を置き換え
const customTransition = moonTransition;
const slashCustomTransition = slashTransition;
const contentNameCustomTransition = contentNameTransition;
```

### カスタム設定の生成

```typescript
import { generateTransitionConfig } from '../components/TransitionConfig';

// カスタム時間で設定を生成
const customConfig = generateTransitionConfig('content', '2.5s');
```

## 利用可能なプリセット

### 1. `transitionPresets.entrance`
- **用途**: entrance.astro用
- **特徴**: 正方向アニメーション（menu.astroへの遷移用）
- **時間**: 1.8s（スラッシュは0.5s）

### 2. `transitionPresets.menu`
- **用途**: menu.astro用
- **特徴**: 逆方向アニメーション（-reverse）
- **時間**: 1.8s（スラッシュは0.5s）

### 3. `transitionPresets.content`
- **用途**: about.astro用
- **特徴**: 正方向アニメーション
- **時間**: 1.8s（スラッシュは0.5s）

### 4. `transitionPresets.contentLong`
- **用途**: photos.astro、diary.astro用
- **特徴**: 正方向アニメーション
- **時間**: 2s（スラッシュは0.5s）

## アニメーション名

### 月アイコン
- `moon-move`: 正方向移動
- `moon-move-reverse`: 逆方向移動

### スラッシュ
- `slash-rotate`: 正方向回転
- `slash-rotate-reverse`: 逆方向回転

### コンテンツ名
- `content-name-move`: 正方向移動
- `content-name-move-reverse`: 逆方向移動

## 既存ページでの適用例

### entrance.astro
```typescript
import { transitionPresets } from '../components/TransitionConfig';

const { moonTransition, slashTransition, contentNameTransition } = transitionPresets.entrance;
```

### about.astro
```typescript
import { transitionPresets } from '../components/TransitionConfig';

const { moonTransition, slashTransition, contentNameTransition } = transitionPresets.content;
```

### photos.astro / diary.astro
```typescript
import { transitionPresets } from '../components/TransitionConfig';

const { moonTransition, slashTransition, contentNameTransition } = transitionPresets.contentLong;
```

### menu.astro
```typescript
import { transitionPresets } from '../components/TransitionConfig';

const { moonTransition, slashTransition, contentNameTransition } = transitionPresets.menu;
```

## メリット

1. **一元管理**: アニメーション設定が1箇所に集約
2. **一貫性**: 全ページで統一されたアニメーション動作
3. **保守性**: 設定変更時の影響範囲が明確
4. **拡張性**: 新しい遷移パターンの追加が容易
5. **型安全性**: TypeScriptによる型チェック

## 注意事項

- 既存のコードは変更せず、段階的に移行可能
- デグレードを防ぐため、既存の設定と新しい設定を併用可能
- アニメーション名は`CommonHead.astro`のCSSキーフレームと連携
