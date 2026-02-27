import sidemisskeyIcon from '@/images/icon-sidemisskey.png'
import xIcon from '@/images/icon-x.svg'

export const config = {
  siteMetadata: {
    name: 'P@ssion Gathering（パッション・ギャザリング）',
    description: 'アイドルマスターSideM非公式オンリーオンライン同人誌即売会',
  },
  menu: [
    {
      label: 'イベントについて',
      href: '/#about',
    },
    {
      label: 'イベント概要',
      href: '/#outline',
    },
    {
      label: '規約',
      href: '/#terms',
    },
  ],
  social: [
    {
      label: 'さいどみすきー運営アカウント',
      href: 'https://side.misskey.productions/@sidemisskey',
      src: sidemisskeyIcon,
    },
    {
      label: 'Xアカウント',
      href: 'https://x.com/side_misskey',
      src: xIcon,
    },
  ],
  pageSize: 10,
  format: {
    date: 'YYYY/MM/DD',
    datetime: 'YYYY/MM/DD HH:mm',
  },
}
