export {}

declare global {
  interface Window {
    gtag?: (
      command: 'js' | 'config' | 'event',
      targetId: string,
      config?: Record<string, unknown>
    ) => void
  }
}
