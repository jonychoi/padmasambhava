import Giscus from '@giscus/react';
require('dotenv').config()

export const Comment = () => {
  return (
    <Giscus
      id="comments"
      repo="jonychoi/padmasambhava"
      repoId={process.env.REPOID}
      category="Q&A"
      categoryId={process.env.CATEGORYID}
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="dark"
      lang="en"
      loading="lazy"
    />
  );
};

export default Comment;