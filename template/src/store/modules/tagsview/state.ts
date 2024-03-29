/*
 * @Description: tags-view state
 * @Author: ZY
 * @Date: 2020-12-23 10:25:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-31 13:26:51
 */
import { RouteLocationNormalized } from 'vue-router'

export interface TagView extends Partial<RouteLocationNormalized> {
  title?: string
}

export interface TagsViewState {
  visitedViews: TagView[]
  cachedViews: (string | undefined)[]
}

export const state: TagsViewState = {
  visitedViews: [],
  cachedViews: []
}
