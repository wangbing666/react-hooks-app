import { useEffect } from 'react';
import { useFormState } from '../hooks/useFormState';

function Form() {
  const [formState, { text, password }] = useFormState();

  useEffect(() => {
    document.title = 'form表单的使用';
  }, []);

  const submit = () => {
    console.log(formState)
  }
  
  return (
    <div className="App">
      <form>
        <div>
          <label>用户名：</label>
          <input {...text("username")} required />
        </div>
        <div>
          <label>密码：</label>
          <input {...password("password")} required minLength={8} />
        </div>
      </form>
      <div onClick={submit}>提交</div>
    </div>
  );
}

export default Form;
