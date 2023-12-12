import { defineStyleConfig, SystemStyleInterpolation } from '@chakra-ui/react'

export const defineStyle = (config: SystemStyleInterpolation) =>
  defineStyleConfig({
    baseStyle: config,
  })

export const Heading = defineStyle({
  color: 'heading',
})

export const Text = defineStyle({
  color: 'foreground',
})

export const Link = defineStyle({
  color: 'blue',
})

const components = {
  Heading,
  Text,
  Link,
}

export default components
