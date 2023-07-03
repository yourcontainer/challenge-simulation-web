import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Center,
  useColorMode,
  Tooltip,
  IconButton,
  SunIcon,
  MoonIcon,
  Image,
  HStack,
  Text,
  Heading,
  Box,
  Link,
  VStack,
  Button,
  AspectRatio,
  Menu,
  Pressable,
  HamburgerIcon,
} from "native-base";
import Header from '../_header';

// Start editing here, save and see your changes.
export default function ProductDetails(props) {
  const router = useRouter();
  const { pid } = router.query;

  const [product, setProduct] = useState(null)

  useEffect(() => {
    if(pid) {
      fetch(`/api/products/${pid}`)
        .then(async (res) => {
          if (!res.ok) {
            return;
          }
          const product = await res.json();
          return setProduct(product)
        })
    }
  }, [pid]);

  return (
    <Center
      flex={1}
      _dark={{ bg: "gray.900" }}
      _light={{ bg: "gray.50" }}
    >
      <VStack alignItems="center" space="md">
        <HStack alignItems="center" space="2xl">
          <Link href="/">
            <AspectRatio w={24} ratio={5 / 3}>
              <Image
                source={{ uri: "/images/jordan_and_jumpman_logo.png" }}
                alt="Jordan and Jumpman"
                resizeMode="contain"
              />
            </AspectRatio>
          </Link>
          <Header />
        </HStack>
        <Heading size="2xl">Product Detail for ...</Heading>
        <Text>Need to fetch details for Product ID: {pid}</Text>
      </VStack>
      <ColorModeSwitch />
    </Center>
  );
}
// Color Switch Component
function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Tooltip
      label={colorMode === "dark" ? "Enable light mode" : "Enable dark mode"}
      placement="bottom right"
      openDelay={300}
      closeOnClick={false}
    >
      <IconButton
        position="absolute"
        top={12}
        right={8}
        onPress={toggleColorMode}
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        accessibilityLabel="Color Mode Switch"
      />
    </Tooltip>
  );
}
