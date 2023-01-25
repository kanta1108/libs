# myItyped.js
文字列をタイピングされているように表示させます。

## 手順
### iTyped.jsをインポート
``` html
<script src="https://unpkg.com/ityped@1.0.3"></script>
```
### myItyped.jsをインポート
``` js
import { CreateTypedText } from "./myItyped";
```
### 表示させたい文字列を配列で定義する

```js
const strings = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ",
  "ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ",
  "in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia ",
  "deserunt mollit anim id est laborum.",
];
```
改行させたい場合は要素で分けて下さい。

### new で呼び出し、引数を渡す
```js
new CreateTypedText(strings, ".hogehoge");
```
第一引数に表示させたい文字列の配列を、第二引数に文字列を表示させたいラッパー要素を渡して下さい。

### 例
```html
<!DOCTYPE html>
<html lang="">
  <head>
    <script src="https://unpkg.com/ityped@1.0.3"></script>
    <style>
      .ityped{
        font-size:30px;
        color:#fff;
        letter-spacing: 0.05em;
      }
    </style>
  </head>
  <body>
    <div class="myItyped-inner"></div>
  </body>
  ...
```
```js
import { CreateTypedText } from "./myItyped";

const strings = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ",
  "ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ",
  "in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia ",
  "deserunt mollit anim id est laborum.",
];

new CreateTypedText(strings, ".myItyped-inner");
```
