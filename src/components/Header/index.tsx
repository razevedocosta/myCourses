// import { Link } from 'react-router-dom';
import { FiLogOut, FiUser, FiBookOpen, FiBarChart } from 'react-icons/fi';
import { Container, Content } from './styles';

export function Header() {
    return (
        <Container>
            <Content>
                <h1><FiBookOpen size={16} /> Meus Cursos</h1>

                <div>
                    <button type="button"><FiBarChart size={16} /></button>
                    <button type="button"><FiUser size={16} /></button>
                    <button type="button"><FiLogOut size={16} /></button>
                </div>
            </Content>
        </Container>
    )
}