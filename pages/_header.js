import React from "react";
import {HamburgerIcon, HStack, Link, Menu, Pressable, useBreakpointValue} from "native-base";

export default function _header() {
  const flexDir = useBreakpointValue({
    base: "column",
    xl: "row"
  });
  const isMobile = flexDir === "column";
  return (
    isMobile ?
        <Menu trigger={triggerProps => (
          <Pressable {...triggerProps}>
            <HamburgerIcon size="lg" />
          </Pressable>
        )}>
          <Menu.Item><Link href="/">Home</Link></Menu.Item>
          <Menu.Item><Link href="/products">Catalog</Link></Menu.Item>
        </Menu>
        :
        <HStack space="sm">
          <Link href="/">Home</Link>
          <Link href="/products">Catalog</Link>
        </HStack>
  )
}
