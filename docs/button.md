# Button 按钮

通用的按钮组件。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 代码演示

### 基础用法

使用 `type` 属性来定义按钮的类型。

```tsx
import React from 'react';
import { Button } from 'ysgsui';

export default () => (
  <>
    <Button type="primary">Primary Button</Button>
    <Button type="default">Default Button</Button>
    <Button type="danger">Danger Button</Button>
  </>
);
```

### 不同尺寸

使用 `size` 属性来定义按钮的尺寸。

```tsx
import React from 'react';
import { Button } from 'ysgsui';

export default () => (
  <>
    <Button type="primary" size="small">
      Small
    </Button>
    <Button type="primary" size="medium">
      Medium
    </Button>
    <Button type="primary" size="large">
      Large
    </Button>
  </>
);
```

### 禁用状态

使用 `disabled` 属性来禁用按钮。

```tsx
import React from 'react';
import { Button } from 'ysgsui';

export default () => (
  <>
    <Button type="primary" disabled>
      Disabled Primary
    </Button>
    <Button type="default" disabled>
      Disabled Default
    </Button>
    <Button type="danger" disabled>
      Disabled Danger
    </Button>
  </>
);
```

### 点击事件

使用 `onClick` 属性来绑定点击事件。

```tsx
import React from 'react';
import { Button } from 'ysgsui';

export default () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <Button type="primary" onClick={handleClick}>
      Click Me
    </Button>
  );
};
```

### 组合使用

组合使用多个属性。

```tsx
import React from 'react';
import { Button } from 'ysgsui';

export default () => (
  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
    <Button type="primary" size="small">
      Primary Small
    </Button>
    <Button type="primary" size="medium">
      Primary Medium
    </Button>
    <Button type="primary" size="large">
      Primary Large
    </Button>
    <Button type="danger" size="small">
      Danger Small
    </Button>
    <Button type="danger" size="medium">
      Danger Medium
    </Button>
    <Button type="danger" size="large">
      Danger Large
    </Button>
    <Button type="default" size="small" disabled>
      Disabled Small
    </Button>
    <Button type="default" size="medium" disabled>
      Disabled Medium
    </Button>
    <Button type="default" size="large" disabled>
      Disabled Large
    </Button>
  </div>
);
```

## API

### ButtonProps

| 参数     | 说明         | 类型                                 | 默认值      |
| -------- | ------------ | ------------------------------------ | ----------- |
| type     | 设置按钮类型 | `'primary' \| 'default' \| 'danger'` | `'default'` |
| size     | 设置按钮大小 | `'small' \| 'medium' \| 'large'`     | `'medium'`  |
| disabled | 是否禁用     | `boolean`                            | `false`     |
| onClick  | 点击事件     | `() => void`                         | -           |
| children | 按钮内容     | `React.ReactNode`                    | -           |
