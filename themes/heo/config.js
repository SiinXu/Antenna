const CONFIG = {
  HEO_HOME_POST_TWO_COLS: true, // 首页博客两列显示，若为false则只显示一列
  HEO_LOADING_COVER: true, // 页面加载的遮罩动画

  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2025-01-11', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '欢迎来到我的博客', url: 'https://Antenna-blog.incidental.site' },
    { title: '访问文档中心获取更多帮助', url: 'https://Antenna-blog.incidental.site' }
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: 'Antenna',
  HEO_HERO_TITLE_2: '触角AI',
  HEO_HERO_TITLE_3: 'Antenna.incidental.site',
  HEO_HERO_TITLE_4: '新品上线',
  HEO_HERO_TITLE_5: 'Antenna 社交卡片',
  HEO_HERO_TITLE_LINK: 'https://Antenna.incidental.site',
  // 英雄区遮罩文字
  HEO_HERO_COVER_TITLE: '随便逛逛',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '内容营销', url: 'https://antenna-mkt.incidental.site/' },
  HEO_HERO_CATEGORY_2: { title: '社交卡片', url: 'https://antenna-share.incidental.site/' },
  HEO_HERO_CATEGORY_3: { title: '灵感卡片', url: 'https://antenna-card.incidental.site/' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '推荐',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '你好！我是',
    '🔍 分享洞察见解',
    '🤝 精准触达用户',
    '📱 崇尚优秀设计',
    '🏠 全能发动机',
    '🤖️ 黑科技加持',
    '✨ AI 驱动营销'

  ],

  // 个人资料底部按钮
  HEO_INFO_CARD_URL1: '/about',
  HEO_INFO_CARD_ICON1: 'fas fa-user',
  HEO_INFO_CARD_URL2: 'https://github.com/siinxu',
  HEO_INFO_CARD_ICON2: 'fab fa-github',
  HEO_INFO_CARD_URL3: 'https://Antenna-blog.incidental.site',
  HEO_INFO_CARD_TEXT3: '了解更多',

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: 'AfterEffect',
      img_1: 'https://i.pinimg.com/736x/d4/55/1c/d4551c64f1f6c374636ca6ec73bf4ff2.jpg',
      color_1: '#989bf8',
      title_2: 'Sketch',
      img_2: 'https://i.pinimg.com/736x/be/e9/d8/bee9d81d54321f7f00776501b5354725.jpg',
      color_2: '#ffffff'
    },
    {
      title_1: 'Docker',
      img_1: 'https://i.pinimg.com/736x/ce/1a/2f/ce1a2f0cf21f1c588a03a263bd0d58c1.jpg',
      color_1: '#57b6e6',
      title_2: 'Photoshop',
      img_2: 'https://i.pinimg.com/736x/b6/62/39/b66239a52f48ee6b57315ea4549076bc.jpg',
      color_2: '#4082c3'
    },
    {
      title_1: 'FinalCutPro',
      img_1: 'https://i.pinimg.com/736x/e0/2a/40/e02a40bafc73c129d179e319c9125957.jpg',
      color_1: '#ffffff',
      title_2: 'Python',
      img_2: 'https://i.pinimg.com/736x/1e/9b/74/1e9b743298e2abdaf0da677f74c77d70.jpg',
      color_2: '#ffffff'
    },
    {
      title_1: 'Swift',
      img_1: 'https://i.pinimg.com/736x/b4/90/06/b49006fb852f82bd3d50529ed8518dac.jpg',
      color_1: '#eb6840',
      title_2: 'Principle',
      img_2: 'https://i.pinimg.com/736x/07/6e/aa/076eaac65e045f9778eab33233abaa53.jpg',
      color_2: '#8f55ba'
    },
    {
      title_1: 'illustrator',
      img_1: 'https://i.pinimg.com/736x/2e/25/16/2e2516f22229fb5d0540e5300a342019.jpg',
      color_1: '#f29e39',
      title_2: 'CSS3',
      img_2: 'https://i.pinimg.com/736x/f5/4b/10/f54b1067270155917f50b345fd8c8b5b.jpg',
      color_2: '#2c51db'
    },
    {
      title_1: 'JS',
      img_1: 'https://i.pinimg.com/736x/4e/39/df/4e39df3726dfb8cc001b2ed3fdef8fa2.jpg',
      color_1: '#f7cb4f',
      title_2: 'HTML',
      img_2: 'https://i.pinimg.com/736x/0f/5f/95/0f5f95d07d879b90c72386e5a1367ab1.jpg',
      color_2: '#e9572b'
    },
    {
      title_1: 'Git',
      img_1: 'https://i.pinimg.com/736x/ae/2e/6f/ae2e6f2e90174465f8aa38ae1c331bc8.jpg',
      color_1: '#df5b40',
      title_2: 'Rhino',
      img_2: 'https://i.pinimg.com/736x/ea/24/5b/ea245b7af46a8889872a3c2f080634fa.jpg',
      color_2: '#1f1f1f'
    }
  ],

  HEO_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '交流频道',
  HEO_SOCIAL_CARD_TITLE_2: '加入我们的社群讨论分享',
  HEO_SOCIAL_CARD_TITLE_3: '点击加入社群',
  HEO_SOCIAL_CARD_URL: 'https://discord.gg/9xdyQEv63y',

  // 底部统计面板文案
  HEO_POST_COUNT_TITLE: '文章数:',
  HEO_SITE_TIME_TITLE: '建站天数:',
  HEO_SITE_VISIT_TITLE: '访问量:',
  HEO_SITE_VISITOR_TITLE: '访客数:',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
