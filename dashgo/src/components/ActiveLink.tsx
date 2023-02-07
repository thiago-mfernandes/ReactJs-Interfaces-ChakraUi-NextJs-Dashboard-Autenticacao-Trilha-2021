import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({ children, shouldMatchExactHref = false, ...rest }: ActiveLinkProps) {
  //vai retornar qual é a rota ativa, ex.: /users -- /dashboard, etc
  const { asPath } = useRouter();
  let isActive = false;

  // isso aqui faz o link ficar ativo mesmo qdo eu estou em users/create, considerando que a rota comeca com users...
  if(shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }

  if(!shouldMatchExactHref && 
    (asPath.startsWith(String(rest.href)) || 
     asPath.startsWith(String(rest.as)))) {
      isActive = true;
    }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? "pink.400" : "gray.50"
      })}
    </Link>
  );
}