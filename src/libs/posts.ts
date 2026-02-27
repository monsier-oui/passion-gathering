import type { MicroCMSDate, MicroCMSContentId } from 'microcms-js-sdk'

import { client } from '@/libs/client'

export type NewsPost = {
  title: string
  content: string
} & MicroCMSContentId &
  MicroCMSDate

let _newsPostsCache: NewsPost[] = []

// 投稿を全て取得
export const getNewsPosts = async (): Promise<NewsPost[]> => {
  if (_newsPostsCache.length > 0) return _newsPostsCache

  console.log('getNewsPosts(): キャッシュがないので取得して登録')
  _newsPostsCache = await client.getAllContents({
    endpoint: 'event-news',
  })

  return _newsPostsCache
}
