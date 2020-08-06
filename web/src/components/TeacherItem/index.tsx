import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
	return (
		<article className="teacher-item">
			<header>
				<img src="https://pbs.twimg.com/profile_images/1259549879749226499/qnZpRyeY_400x400.jpg" alt="Diego Fernandes"/>
				
				<div>
					<strong>Diego Fernandes</strong>
					<span>Química</span>
				</div>
			</header>

			<p>
				Entusiasta das melhores tecnologias de química avançada.
				<br/><br/>
				Apaixonado por explodir coisas em laboratório e por mudar as vidas das pessoas atravês de experiências.
				mais de 200.000 pessoas já passaram por uma das minhas explosões	
			</p>

			<footer>
				<p>
					Preço/hora
					<strong>R$ 80,00</strong>
				</p>

				<button type="button">
					<img src={whatsappIcon} alt="whatsapp"/>
					Entrar em contato
				</button>	
			</footer>
		</article>
	);
}

export default TeacherItem;