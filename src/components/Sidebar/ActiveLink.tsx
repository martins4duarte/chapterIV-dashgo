import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router';
import { cloneElement, ReactElement } from 'react'

interface IActiveLinkProps extends LinkProps{
  children: ReactElement;
  shouldMatchExactHref?: boolean
}
export default function ActiveLink({ children, shouldMatchExactHref = false, ...rest}: IActiveLinkProps) {
  const router = useRouter();
  
  let isActive = false;

  if(router.asPath === rest.href || router.asPath === rest.as) {
    isActive = true;
  }

  if(!shouldMatchExactHref && 
    (router.asPath.startsWith(String(rest.href)) || router.asPath.startsWith(String(rest.href)))) {
      isActive = true;
    }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50'
      })}
    </Link>
  )
}
