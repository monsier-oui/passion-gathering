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
      label: 'お問い合わせ',
      href: '/#contact',
    },
  ],
  social: [
    {
      label: 'さいどみすきーアカウント',
      href: 'https://side.misskey.productions/@Pgathering315',
      src: sidemisskeyIcon,
    },
    {
      label: 'Xアカウント',
      href: 'https://x.com/Pgathering315',
      src: xIcon,
    },
  ],
  pageSize: 10,
  format: {
    date: 'YYYY/MM/DD',
    datetime: 'YYYY/MM/DD HH:mm',
  },
}
