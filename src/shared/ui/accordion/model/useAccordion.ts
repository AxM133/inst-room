import { useDisclosure } from '../../../lib/useDisclosure'

export function useAccordion(defaultOpen = false) {
  const { isOpen, toggle } = useDisclosure(defaultOpen)
  return { isOpen, toggle }
}
