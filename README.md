# @niefeng/babel-console-clear

## Install
```bash
# yarn
yarn add @niefeng/babel-console-clear --dev
```

## Usage
.babelrc
```bash
{
  "plugins": [
    [
      "module:@niefeng/babel-console-clear",
      { "include": ["log", "error", "warn"] } // 添加要去除的 console，默认不去除
    ]
  ]
}
```

