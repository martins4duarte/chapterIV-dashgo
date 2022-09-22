import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react"

interface ISidebarDrawerProviderProps {
  children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({ children }: ISidebarDrawerProviderProps) {
  const router = useRouter();
  const disclosure = useDisclosure();

  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      { children }
    </SidebarDrawerContext.Provider>
  )
}


export const useSidebarDrawer = () => useContext(SidebarDrawerContext);

