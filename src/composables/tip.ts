import { i18n } from '@/i18n'
import { ref } from 'vue'

const tipShowModel = ref(false)
const tipContent = ref()
const tipType = ref('alert-warning')
const t = i18n.global.t

let timmer = -1

export const useNotification = (timeout = 5000) => {
  const showNotification = ({
    content,
    params = {},
    type = 'alert-warning',
  }: {
    content: string
    params?: Record<string, string>
    type?: 'alert-warning' | 'alert-success'
  }) => {
    clearTimeout(timmer)
    tipType.value = type
    tipShowModel.value = true
    tipContent.value = t(content, params)
    timmer = setTimeout(() => {
      tipShowModel.value = false
      timmer = -1
    }, timeout)
  }

  return {
    showNotification,
    tipType,
    tipShowModel,
    tipContent,
  }
}
