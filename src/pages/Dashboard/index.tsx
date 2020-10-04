import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './style';
import { FiChevronRight } from 'react-icons/fi';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>

            <Form>
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="/">
                    <img
                        src="https://avatars1.githubusercontent.com/u/9434636?s=460&u=d79293dcf4852731dc51f341c84ecbc0a3825e3d&v=4"
                        alt="Diego Duarte" />

                    <div>
                        <strong>diegoduarte98/minhas-financas-api</strong>
                        <p>Uma aplicação simples</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
}

export default Dashboard;
