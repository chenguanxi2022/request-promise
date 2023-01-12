## 使用方法

```js
// 按需导入 $http 对象
import { $http } from "request-promise";

// 将按需导入的 $http 挂载到 wx 顶级对象之上，方便全局调用
wx.$http = $http;

// 在 uni-app 项目中，可以把 $http 挂载到 uni 顶级对象之上，方便全局调用
uni.$http = $http;
```

### 请求方法

```js
// 发起 GET 请求，data 是可选的参数对象
$http.get(url, data?)

// 发起 POST 请求，data 是可选的参数对象
$http.post(url, data?)

// 发起 PUT 请求，data 是可选的参数对象
$http.put(url, data?)

// 发起 DELETE 请求，data 是可选的参数对象
$http.delete(url, data?)
```

### 配置请求根路径

```js
$http.baseUrl = "http://localhost:3000/run";
```
