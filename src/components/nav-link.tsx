import { Link, type LinkProps, useLocation } from 'react-router-dom'

const NavLink = (props: LinkProps) => {
  const { pathname } = useLocation()
  return (
    <Link
      data-current={pathname === props.to}
      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[current=true]:text-foreground"
      {...props}
    />
  )
}
export default NavLink
