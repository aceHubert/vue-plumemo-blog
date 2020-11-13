import Vue from 'vue';
import merge from 'lodash.merge';
import { trailingSlash } from '@/utils/path';
import { getDefaultMenus } from '@/config/menuCofnigs';

// Types
import { SettingsFunctions, SiteSettings } from 'types/functions/settings';

export const globalSettings: SiteSettings = Vue.observable({
  domain: '',
  staticDir: 'static/',
  siderMenus: getDefaultMenus(),
});

const settingsFunctions: SettingsFunctions = {
  /**
   * @author Hubert
   * @since 2020-09-04
   * @version 0.0.1
   * 配置的域名（末尾带有"/")
   */
  getDomain() {
    return trailingSlash(globalSettings.domain);
  },

  /**
   * @author Hubert
   * @since 2020-09-04
   * @version 0.0.1
   * 相对于配置域名的静态文件目录（末尾带有"/"）
   */
  getStaticDir() {
    return trailingSlash(globalSettings.staticDir);
  },

  /**
   * @author Hubert
   * @since 2020-09-04
   * @version 0.0.1
   * API 地址，如果不是http(s) 绝对路径，则会以当前域名为绝对路径
   */
  getApiPath() {
    return trailingSlash(process.env.baseUrl!) + 'api/blog/';
  },

  /**
   * @author Hubert
   * @since 2020-11-12
   * @version 0.0.1
   * 侧边栏菜单
   */
  getSiderMenus() {
    return globalSettings.siderMenus;
  },

  /**
   * @author Hubert
   * @since 2020-11-12
   * @version 0.0.1
   * 添加侧边栏菜单
   */
  addSiderMenus(menus, parentName) {
    let rootMenus = globalSettings.siderMenus;
    if (parentName) {
      const parent = globalSettings.siderMenus.find((menu) => menu.name === parentName);
      // 只有 children 被定义了才能加
      if (parent && parent.children) {
        rootMenus = parent.children!;
      }
    }
    rootMenus.push(...menus);
  },

  /**
   * @author Hubert
   * @since 2020-09-04
   * @version 0.0.1
   * 设置网站配置
   */
  setSiteSettings(settings) {
    merge(globalSettings, settings);
  },
};

export default settingsFunctions;