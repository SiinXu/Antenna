import { siteConfig } from '@/lib/config'
import { loadExternalResource } from '@/lib/utils'
import { useEffect } from 'react'

/**
 * Coze-AI机器人
 * @returns
 */
export default function Coze() {
  const cozeSrc = siteConfig(
    'COZE_SRC_URL',
    'https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.1.0-beta.0/libs/cn/index.js'
  )
  const title = siteConfig('COZE_TITLE', 'Coze')
  const botId = siteConfig('COZE_BOT_ID')

  const loadCoze = async () => {
    try {
      await loadExternalResource(cozeSrc)
      const CozeWebSDK = window?.CozeWebSDK
      if (CozeWebSDK) {
        const cozeClient = new CozeWebSDK.WebChatClient({
          config: {
            bot_id: botId
          },
          componentProps: {
            title: title
          }
        })
        console.log('Coze SDK initialized successfully')
      }
    } catch (error) {
      console.error('Failed to load Coze SDK:', error)
    }
  }

  useEffect(() => {
    if (!botId) {
      return
    }
    loadCoze()
  }, [])

  return <></>
}
