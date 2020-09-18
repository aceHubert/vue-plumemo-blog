import { Vue, Component } from 'vue-property-decorator';
import { VContainer, VCol, VRow } from '@/components/vuetify-tsx';
import moment from 'moment';

// Styles
import classes from './styles/article.module.scss';

// Types
import { Component as VueComponent, AsyncComponent, CreateElement } from 'vue';

@Component({
  name: 'theme-article',
  head: {
    title(this: ThemeArticle) {
      return this.title;
    },
  },
  asyncData({ params, postApi }) {
    return postApi.get(params.id);
  },
})
export default class ThemeArticle extends Vue {
  id = null;
  title = '';
  author = '';
  thumbnail = '';
  content = '';
  tags = [];
  views = 0;
  createTime = null;

  pageBeforePlugins: Array<VueComponent | AsyncComponent> = [];
  pageAfterPlugins: Array<VueComponent | AsyncComponent> = [];
  pageSidebarPlugins: Array<VueComponent | AsyncComponent> = [];

  get hasSidebar() {
    return this.pageSidebarPlugins && this.pageSidebarPlugins.length;
  }

  created() {
    this.hook('article-before')
      .filter(this.pageBeforePlugins)
      .then((plugins: Array<VueComponent | AsyncComponent>) => (this.pageBeforePlugins = plugins));

    this.hook('article-after')
      .filter(this.pageAfterPlugins)
      .then((plugins: Array<VueComponent | AsyncComponent>) => (this.pageAfterPlugins = plugins));

    this.hook('article-sidebar')
      .filter(this.pageSidebarPlugins)
      .then((plugins: Array<VueComponent | AsyncComponent>) => (this.pageSidebarPlugins = plugins));
  }

  render(h: CreateElement) {
    return (
      <VContainer class={classes.article}>
        <VRow>
          <VCol cols={this.hasSidebar ? 8 : 12}>
            {this.pageBeforePlugins && this.pageBeforePlugins.length
              ? this.pageBeforePlugins.map((plugin) => h(plugin))
              : null}
            <h1>{this.title}</h1>
            <p class="caption text--grey">
              <span>{moment(this.createTime).format('yyyy-MM-DD')}</span>
            </p>
            <div domPropsInnerHTML={this.content} class={classes.content}></div>
            {this.pageAfterPlugins && this.pageAfterPlugins.length
              ? this.pageAfterPlugins.map((plugin) => h(plugin))
              : null}
          </VCol>
          {this.hasSidebar ? (
            <VCol cols="4">
              {this.pageSidebarPlugins && this.pageSidebarPlugins.length
                ? this.pageSidebarPlugins.map((plugin) => h(plugin))
                : null}
            </VCol>
          ) : null}
        </VRow>
      </VContainer>
    );
  }
}
