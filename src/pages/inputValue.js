import { useCallback, useEffect, useState } from 'react';
import { useInputValue } from '../common/inputValue';

function InputValue() {
  let name = useInputValue('张三');
  let phone = useInputValue('18888888888')

  useEffect(() => {
    document.title = '获取表单的输入值';
  }, []);

  const submit = () => {
    console.log(phone);
    console.log(name);
  }

  return (
    <div>
      <div>
        <div>
          <label>姓名：</label>
          <input placeholder='请输入姓名' {...name}></input>
        </div>
        <div>
          <label>手机号</label>
          <input placeholder='请输入手机号' {...phone}></input>
        </div>
        <button onClick={submit}>提交</button>
      </div>
    </div>
  );
}

export default InputValue;
