import { Vue, Component } from 'nuxt-property-decorator';
import { graphqlClient, gql } from '@/includes/functions';
import EditForm from './modules/EditForm';

// Types
import { Post, PostCreationModel } from 'types/datas/post';

{
  /* <router>
{
  meta:{
    title: 'New',   
  }
}
</router> */
}

@Component({
  name: 'PostCreate',
  layout: 'blank',
  asyncData({ error, $i18n }) {
    return graphqlClient
      .mutate<{ result: Post }, { model: PostCreationModel }>({
        mutation: gql`
          mutation addPost($model: PostAddModel!) {
            result: addPost(model: $model) {
              id
              title
              content
            }
          }
        `,
        variables: {
          model: {
            title: '',
            content: '',
          },
        },
      })
      .then(({ data }) => ({
        post: data!.result,
      }))
      .catch((err) => {
        error({
          statusCode: 500,
          message: $i18n.tv(err.code, err.message) as string,
        });
      });
  },
})
export default class PostCreate extends Vue {
  post!: Post;

  data() {
    return {
      post: null,
    };
  }

  handelChange(_values: Dictionary<any>) {
    // todo
  }

  render() {
    return (
      <EditForm
        fromCreate
        editModel={this.post}
        style="height:100vh"
        onChange={this.handelChange.bind(this)}
      ></EditForm>
    );
  }
}
