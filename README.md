# @vmo-fed/parcel-plugin-zip

> 将dist压缩为dist.zip的parcel插件

# 使用

```shell
npm i @vmo-fed/parcel-plugin-zip -D
```

package.json

```json
...
"scripts": {
    "build": "NODE_ENV=production parcel build app/index.html"
}
...
```

运行

```shell
npm run build # 结束后会在根目录下生成dist.zip
```

# todo

* [x] 支持Mac
* [ ] 支持windows