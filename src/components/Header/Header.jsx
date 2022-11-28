import "./header.sass";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {

    const {pathname} = useLocation();
    
    return (
        <header className="header bg-warning">
            <nav className="header__nav">
                <div className="header__wrapper-menu">
                    <Link to="/training-material">Обучающий материал</Link>
                    <Link to="/status-ordered-hardware">Статус заказанного оборудования</Link>
                    <Link to="/status-repaired-hardware">Статус ремонтно-диагностических работ</Link>
                    <Link to="/about">О компании</Link>
                </div>
                <div className="header__wrapper-menu">
                    <Link to="/">{pathname === '/' ? 'Вход' : 'Выход'}</Link>   
                </div>
            </nav>
        </header>
    )
}

export default Header;