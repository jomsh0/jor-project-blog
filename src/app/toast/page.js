'use client'

import { ToastProvider, ToastPlayground } from 'jor-project-toast'

export default function ToastDemo() {
  return (
    <ToastProvider>
      <ToastPlayground />
    </ToastProvider>
  )
}
