import { Link } from 'react-router-dom';
import { FiLogOut, FiUser, FiBookOpen, FiGrid } from 'react-icons/fi';

import { Container, Content } from './styles';

export function Header() {
    return (
        <Container>
            <Content>
                <Link to="/"><h1><FiBookOpen size={16} /> Meus Cursos</h1></Link>

                <div>
                    <Link to="/dashboard" title="Dashboard"><FiGrid size={16} /></Link>
                    <Link to="/profile"><FiUser size={16} /></Link>
                    <Link to="/logout"><FiLogOut size={16} /></Link>
                </div>
            </Content>
        </Container>
    )
}