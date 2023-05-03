import axios from 'axios'
import { Button, Form, Input } from 'antd'
import { User } from '../../types'
import { useNavigate } from 'react-router-dom';

import './styles.css'

export function Register () {

  const [form] = Form.useForm()
  const navigate = useNavigate();

  async function onRegister(values: User) {
    let user = {
      username: values.username,
      email: values.email,
      password: values.password
    };
  
    try {
      const tempAxios = axios.create({
        baseURL: 'http://127.0.0.1:8000',
      });
      const response = await tempAxios.post("/api/v1/users/", user);
      console.log(response)
      navigate(`/home/${response.data.id}`)
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
    onRegister(values)
  }

  return (
    <div className="register__main">
      <div>
        <header style={{padding: '30px', textAlign: 'center'}}>
          <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt='logo' width='143px' height='44px'/>        
        </header>
        <div className="register__body">
          <div style={{textAlign: 'center'}}>
            <h2>Зарегистрируйтесь и слушайте бесплатно</h2>
          </div>
          <div className="register__form">
          <Form
                name="register"
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
                  label={<h3>Почта</h3>}
                  name="email"
                  rules={[
                    {
                      type: 'email',
                      message: 'Почта неверного формата',
                    },
                  ]}
                >
                  <Input className='login__form__input' placeholder='Почта' />
                </Form.Item>
                <Form.Item   
                  label={<h3>Пароль</h3>}
                  name="password"
                >
                  <Input.Password className='login__form__input' placeholder='Пароль' />
                </Form.Item>
                  <Form.Item>
                    <Button className="button__submit" htmlType="submit" style={{width: '450px'}}>
                      ЗАРЕГИСТРИРОВАТЬСЯ
                    </Button>
                  </Form.Item>
              </Form>
          </div>
        </div>
      </div>
    </div>
  )
}