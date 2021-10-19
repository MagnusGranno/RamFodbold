// Styles
import { Wrapper, Content, Text } from './BlogPost.styles';
const BlogPost = ({ header, body, pic }) => {
  return (
    <Wrapper>
      <Content>
        <Text>
          <h1>{header}</h1>
          <p>{body}</p>
          {pic && <img src={pic} alt="blogpost-pic" />}

          <hr />
        </Text>
      </Content>
    </Wrapper>
  );
};

export default BlogPost;
