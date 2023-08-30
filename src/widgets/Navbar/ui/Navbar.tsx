import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const linkTheme = AppLinkTheme.SECONDARY
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={linkTheme} to={'/'} className={cls.mainLink}>
          Главная
        </AppLink>
        <AppLink theme={linkTheme} to={'/about'}>
          О сайте
        </AppLink>
      </div>
    </div>
  )
}
