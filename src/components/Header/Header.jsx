import "./header.sass";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header className="header bg-warning">
            <nav className="header__nav">
                <div className="header__wrapper-menu">
                    <Link to="/">Новости</Link>
                    <Link to="/">Обучающий материал</Link>
                    <Link to="/">Статус заказанного оборудования</Link>
                    <Link to="/">Статус ремонтно-диагностических работ</Link>
                    <Link to="/">О компании</Link>
                </div>
                <div className="header__wrapper-menu">
                    <Link to="/">Вход</Link>   
                </div>
            </nav>
        </header>
    )
}

export default Header;