import React from 'react';
import { ContainerLogin, InputDefault } from './ui/login';


export function App() {

  return (
    <ContainerLogin>
			<form>
				<label>Email</label>
				<InputDefault type="Email" name='Email' />
				<label>senha</label>
				<InputDefault type="password" name="password"/>
				<button>login</button>
			</form>
		</ContainerLogin>
  )
}


