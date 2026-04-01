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
      items: [
        {
          label: '参加対象',
          href: '/#requirements',
        },
        {
          label: '成人向け作品について',
          href: '/#18+',
        },
        {
          label: '禁止事項',
          href: '/#prohibitions',
        },
        {
          label: '注意事項',
          href: '/#notes',
        },
      ],
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
