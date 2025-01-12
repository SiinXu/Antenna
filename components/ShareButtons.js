import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  LineIcon,
  LineShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WeiboIcon,
  WeiboShareButton,
  WhatsappIcon,
  WhatsappShareButton
} from 'react-share'

const ShareButtons = ({ post }) => {
  const router = useRouter()
  const [shareUrl, setShareUrl] = useState(siteConfig('LINK') + router.asPath)
  const { locale } = useGlobal()
  const image = post?.pageCover
  const title = post?.title || siteConfig('TITLE')
  const body = post?.title + ' | ' + title + ' ' + shareUrl + ' ' + post?.summary
  const tags = post.tags || []
  const hashTags = tags.map(tag => `#${tag}`).join(',')

  useEffect(() => {
    setShareUrl(window.location.href)
  }, [])

  const titleWithSiteInfo = title + ' | ' + siteConfig('TITLE')

  const buttonBaseStyle = 'w-8 h-8 flex items-center justify-center rounded-full bg-gray-600 bg-opacity-10 backdrop-blur-sm cursor-pointer transition-all duration-200'
  const buttonHoverStyle = 'hover:bg-opacity-20 hover:scale-110'
  const buttonStyle = `${buttonBaseStyle} ${buttonHoverStyle}`

  const linkStyle = 'flex items-center justify-center w-full h-full'

  const iconSize = 22

  const getIconStyle = (color) => `text-[${iconSize}px] ${color}`

  const brandColors = {
    link: 'text-gray-400',
    facebook: '#1877f2',
    twitter: '#1da1f2',
    telegram: '#0088cc',
    whatsapp: '#25d366',
    reddit: '#ff4500',
    linkedin: '#0077b5',
    line: '#00b900',
    weibo: '#e6162d',
    email: '#666666'
  }

  const tooltipStyle = 'absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200'

  const services = siteConfig('POSTS_SHARE_SERVICES').split(',')
    .filter(service => !['wechat', 'qq', 'copy'].includes(service))

  const copyUrl = () => {
    const decodedUrl = decodeURIComponent(shareUrl)
    navigator?.clipboard?.writeText(decodedUrl)
    alert(locale.COMMON.URL_COPIED + ' \n' + decodedUrl)
  }

  return (
    <div className="flex flex-wrap items-center gap-1">
      {/* 分享链接按钮 */}
      <div className={buttonStyle}>
        <a className={linkStyle} onClick={copyUrl}>
          <i className={getIconStyle(brandColors.link) + ' fas fa-link'} />
        </a>
      </div>

      {/* 其他社交媒体按钮 */}
      {services.map(singleService => {
        const buttonProps = {
          key: singleService,
          url: shareUrl,
          className: `${buttonStyle} group relative`,
        }

        const getTooltipText = (service) => {
          const serviceNames = {
            facebook: 'Facebook',
            messenger: 'Messenger',
            twitter: 'Twitter',
            telegram: 'Telegram',
            weibo: '微博',
            reddit: 'Reddit',
            whatsapp: 'WhatsApp',
            linkedin: 'LinkedIn',
            line: 'Line',
            email: '邮件'
          }
          return `分享到${serviceNames[service]}`
        }

        // 图标配置
        const iconProps = {
          size: iconSize,
          round: true,
          bgStyle: { fill: 'transparent' },
          iconFillColor: brandColors[singleService]
        }

        const renderButton = (Button, Icon, additionalProps = {}) => (
          <div className={`${buttonStyle} group relative`}>
            <Button {...buttonProps} {...additionalProps}>
              <div className="scale-[1.1]">
                <Icon {...iconProps} />
              </div>
            </Button>
            <span className={tooltipStyle}>{getTooltipText(singleService)}</span>
          </div>
        )

        switch (singleService) {
          case 'facebook':
            return renderButton(FacebookShareButton, FacebookIcon, { hashtag: hashTags })
          case 'messenger':
            return renderButton(FacebookMessengerShareButton, FacebookMessengerIcon, { appId: siteConfig('FACEBOOK_APP_ID') })
          case 'twitter':
            return renderButton(TwitterShareButton, TwitterIcon, { title: titleWithSiteInfo, hashtags: tags })
          case 'telegram':
            return renderButton(TelegramShareButton, TelegramIcon, { title: titleWithSiteInfo })
          case 'weibo':
            return renderButton(WeiboShareButton, WeiboIcon, { title: titleWithSiteInfo, image })
          case 'reddit':
            return renderButton(RedditShareButton, RedditIcon, { title: titleWithSiteInfo })
          case 'whatsapp':
            return renderButton(WhatsappShareButton, WhatsappIcon, { title: titleWithSiteInfo, separator: ':: ' })
          case 'linkedin':
            return renderButton(LinkedinShareButton, LinkedinIcon)
          case 'line':
            return renderButton(LineShareButton, LineIcon)
          case 'email':
            return renderButton(EmailShareButton, EmailIcon, { subject: titleWithSiteInfo, body })
          default:
            return null
        }
      })}
    </div>
  )
}

export default ShareButtons
