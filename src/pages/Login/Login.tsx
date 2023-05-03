import axios from 'axios'
import { Button, Checkbox, Divider, Form, Input } from 'antd'
import { User } from '../../types'
import './styles.css'
import { useNavigate } from 'react-router-dom';

export function Login() {

  const [form] = Form.useForm()
  const navigate = useNavigate ();

  async function onLogin (values: User) {
    try {
      const tempAxios = axios.create({
        baseURL: 'http://127.0.0.1:8000',
      });
      const response = await tempAxios.get("/api/v1/users/");
      console.log("Request successful!");
      response.data.forEach((user: User) => {
        if(user.username === form.getFieldValue(["username"])){
          if(user.password === form.getFieldValue(["password"])){
            navigate(`/home/${user.id}`)
          }
        }
      })
    } catch (error: any) {
      if (error.response) {
        console.log(error.reponse.status);
      } else {
        console.log(error.message);
      }
    }
  }
  
// Calling that async function;

  const onFinish = (values: User) => {
    onLogin(values)
  }


  return (
    <div className='login__main'>
      <header className='login__header'>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt='logo' width='143px' height='44px'/>
      </header>
      <div className='login__body'>
          <div style={{display: "inline-block"}}>
            <h4>
              Чтобы продолжить, войдите в Spotify
            </h4>
              <div className='login__form'>
              <Form
                name="login"
                form={form}
                onFinish={onFinish}
                layout="vertical"
              >
                <Form.Item   
                  label={<h3>Имя пользователя</h3>}
                  name="username"
                >
                  <Input className='login__form__input' placeholder='Имя пользователя' />
                </Form.Item>
                <Form.Item   
                  label={<h3>Пароль</h3>}
                  name="password"
                >
                  <Input.Password className='login__form__input' placeholder='Пароль' />
                </Form.Item>
                <div style={{display: 'flex', justifyContent:"flex-start"}}>
                  <a href="gg">Забыли пароль?</a>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', maxWidth: '450px'}}>
                  <div style={{display: 'flex', gap: '20px'}}>
                    <Checkbox style={{marginTop: '14px'}}/>
                    <p>Запомнить меня</p>
                  </div>
                  <Form.Item>
                    <Button className="button__submit" htmlType="submit">
                      ВОЙТИ
                    </Button>
                  </Form.Item>
                </div>
              </Form>
              <Divider />
              <div className='footer__login'>
                <h3>Нет аккаунта?</h3>
                <Button className='login__register__button' onClick={() => navigate("register")}>РЕГИСТРАЦИЯ В СПОТИФАЙ</Button>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}