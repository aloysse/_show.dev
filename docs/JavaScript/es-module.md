---
sidebar_position: 1
---

# ES Module 模組化（import、export）

對於現在的前端開發人員，尤其在前端框架如此普及的時代，模組化已經是習以為常的觀念，但早期 web 開發， JavaScript 只會用在特定需要互動的地方進行運作，不需要那麼大的腳本。隨著應用程式規模越來越大，才開始導入模組化的開發方式。

記得早期在深入學習 JavaScript 的時候，第一次看到以下的 code 有些吃驚，原來 JavaScript 可以這麼簡潔的導入其他程式？

```js
import obj from './example.js'
```

自己嘗試同樣的 code 寫在 `<script></scrpit>` 裡面竟然沒有任何作用？當時沒有模組化的需求，就沒深入研究，直到後來開始使用 **React** 才實際的了解 ES Module 的用法。

這邊就來介紹一下 ES Module

## ES Module 起源

過去 JavaScript 並沒有支援模組系統，而在社群中發展出了兩個模組系統：

- CommonJS Modules
- Asynchronous Module Definition (AMD)

CommonJS 是專門設計給伺服器端的 Node.js 使用，而 AMD 則是針對瀏覽器端，兩者並不相容，這兩個模組系統以後有機會再深入介紹。

在 ES6 版本發佈後，新增了 `import` 和 `export` 語法，支援模組系統，它結合了以上兩者的優點，可使用於伺服器及瀏覽器端，讓模組化設計更加容易。

## script 標籤 `type="module"`

上面提到，第一次嘗試使用 `import` 語法的時候失敗了，是因為我沒有使用 ES6 Module，以往在 html 加入 JS 都是寫 `<script type="text/javascript">` ，或是直接省略 `type`  屬性 (HTML5 可不寫)。如欲使用 JavaScript 的模組系統，就得把 `type` 屬性改成 `"module"`。

```html
<script type="module">
	import obj from './example.js'; //可被匯入
</script>
```

如果 `type` 沒有設為 `"module"` 無法使用模組化語法

```html
<script type="text/javascript">
	import obj from './example.js'; //無法被匯入
</script>
```


## `export` , `import`

ES Module 主要就是兩個語法 `export` 和 `import`。
例如要將某函式獨立出來為一個外部模組，首先建立一個新的 js 檔案，將函式移過去，並在前面加上 `export default` ，這樣就是完成了匯出的部分。

```js title=example.js
export default function fn(){
	console.log('welcome to _shiou.dev');
}
```

匯入此模組的 code 如下（以 html 為例）

```html title=index.html
<script type="module">
	import fn from './example.js';
	fn(); // "welcome to _shiou.dev"
</script>
```

>匯入的語法同樣可在 js 檔案間使用。

## `export` 的兩種方式

`export` 可分為**預設**和**具名**兩種方式，上面的範例是使用預設匯出的方式，在 `export` 後面會加上 `default` ；另外一個方式就是具名的方式，直接在 `export` 後面加上物件或函式。

### 預設匯出 default export 

使用預設匯出的方式有以下幾點要注意：

- 每個檔案只能有一個 default 模組
- 後面必須接**表達式**或是**純值**
- 可以使用匿名函式
- class 也可以使用

```js
// 預設匯出的正確用法
export default 100;
export default '_shiou';
export default function fn() {..}
export default function () {..}
export default class {..}
export default () => {..};

// 以上僅為範例，實際使用時只能有一個 export default
```

下面示範幾個錯誤的用法

```js
// !!錯誤用法!!
export default const num = 100; // 不可接陳述式
export default const fn = () => {..}; // 同上
export default num = 100; // 沒宣告變數 num 
export default fn = () => {..}; // 同上
```

如果要使用變數的話，必須先做宣告，再於 `export default` 後面接變數

```js
const num = 100;
export default num;

// 宣告函示也是同樣的方式 
const fn = () => {..};
export default fn;
```

### 具名匯出 named export

顧名思義，就是匯出時要有名稱，並且在 `import` 時也要用**相同的名稱**來取得所需的資料內容。使用方法跟 default 也略有不同。

- 每個檔案可匯出多個具名模組
- `export` 後面要接**宣告**或**陳述式**
- 無論物件還是函式必須先賦予名稱才能匯出
- 可一次匯出多組模組

```js
// 具名匯出的用法
export let num = 100;
export const obj = { url: 'https://shiou.dev'};
export function fn() {..}
export const fn = () => {..};
```

如果事先宣告變數，則需要使用物件縮寫（object shorthand）的方式匯出，如果有多個變數也可以一起匯出。

```js
const name = 'shiou';
export { name };

// 一次匯出多個物件
const age = 20;
const obj = { num: 100 };
function fn() {..}
export { age, obj, fn };
```

在某些情況下，可以用 `as` 修改匯出名稱

```js
const num = 20;
export { num as age }; //匯入時以 age 取得物件
```

### 預設與具名同時使用

在一個檔案中可同時使用預設匯出和具名匯出，只要遵守預設匯出只能有一個的原則就可以了。

```js
export default function() {..} // default 只能有一個
export const obj = { name: 'shiou'};
export function fn() {..}
// 具名 export 想要多少就放多少（誤）
```

## `import` 匯入

匯入時，會依據匯出的方法而有所差異，因此在匯入之前要先了解外部資料的匯出方式。

### 匯入 default export

在預設匯出時，模組並不會給予名稱，因此在匯入時，需要重新賦予一個變數名稱。

```js
// 匯出檔案 (example.js)
export default function() {..}

// 匯入檔案
import fn from './example.js';
```

> **特別注意**：有時 `export default` 後面也會接變數名稱，但實際上匯入的是純值，因此還是需要賦予新的名稱，而且匯入時所使用的名稱跟匯出檔案的變數名稱並無任何關聯。

```js
// 匯出檔案 (example.js)
const num = 16
export default num;

// 匯入檔案
import age from './example.js';
console.log(age); // 16
// 即使與匯出檔案的匯出變數名稱不同，仍可以取得物件
```

### 匯入 named export （單一匯入）

在匯入具名的模組時，必須使用**相同的名稱**，且需要用解構的方式匯入。

```js
// 匯出檔案 (example.js)
export const name = 'shiou';

// 匯入檔案
import { name } from './example.js'; // 名稱必須與匯出的模組相同
console.log(name); // "shiou"
```

具名匯出可能會有好幾個物件，如果都要匯入，也可以用解構的方式一起取得。

```js
// 匯出檔案 (example.js)
export const name = 'shiou';
export function fn() {..}
export let num = 100;

// 匯入檔案
import { name, fn, num } from './example.js'; 
```

### `as` 重新命名

和匯出一樣，匯入也可以使用 `as` 來重新命名。

```js
// 匯入檔案
import { name as user, fn, num } from './example.js';
console.log(user); // "shiou"
```

### 匯入 named export （全部匯入）

在匯入時可以使用 `*` 一次匯入，所有匯入的內容會包為一個物件，且必須用 `as` 指向一個變數。

```js
// 匯入檔案
import * as obj from './example.js'; // 注意 此時並沒有使用大括號
console.log(obj.num); // 100
```

### 同時匯入 default 和 named

如果檔案同時存在預設匯出和具名匯出，在匯入時也可同時取得物件，在 `import` 後先帶入 default export，接著逗號後再接 named export。

```js
// 匯出檔案 (example.js)
export default 'shiou';
export function fn() {..}
export let num = 100;

// 匯入檔案
import str, { fn, num } from './example.js'; // 賦予 defaul export 的名稱為str

// 下面的方法也可以
import str, * as obj from './example.js';
```

## 立即執行的模組

有些模組並沒有 `export` 語法在裡面，但裡面有 **Side Effect** ，一些會立即執行的程式，在匯入這類模組時，不需賦予變數，仍可以執行裡面的程式。

```js
// 匯出檔案 (example.js)
let num = 10 ;
(function(){
	num++;
})();
console.log(num);

// 匯入檔案
import './example.js'; // 不需賦予變數便會執行
// 11
```


