import { registerMicroApps, start } from 'qiankun'
import { checkActivityFunctions } from 'single-spa'
import { apps } from './config'
import MicroApp from '@/microApp/MicroApp.vue'
import Vue from "vue"

const getEntry = app => {
  const { devEntry, stEntry, preEntry, prdEntry } = app
  switch (process.env.VUE_APP_ENV) {
    case 'development':
      return devEntry
    case 'pre':
      return preEntry
    case 'sit':
      return stEntry
  }
  return prdEntry
}

const microApps = apps.map(app => {
  const { name, activeRule, props } = app
  app.containerId = `qiankun-${app.name}`
  return {
    name,
    entry: getEntry(app),
    container: `#${app.containerId}`,
    activeRule,
    props
  }
})

registerMicroApps(microApps)
Vue.component('qiankun-app', MicroApp)

if (checkActivityFunctions().length === 0) {
  start({
    prefetch: 'all'
  })
}