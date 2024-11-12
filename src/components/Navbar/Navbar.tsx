import style from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav>
        <div className={style.title}>
            <h1>The Dragon Ball App</h1>
        </div>
        <div className={style.nav}>
            <a href="" className={style.navItem}>Home</a>
            <a href="" className={style.navItem}>Planets</a>
            <a href="" className={style.navItem}>About</a>
        </div>
    </nav>
  )
}
