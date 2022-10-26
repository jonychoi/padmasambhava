import Giscus from '@giscus/react';

export const Comment = () => {
  return (
    <Giscus
      id="comments"
      repo="jonychoi/padmasambhava"
      repoId="R_kgDOIUASlg"
      category="Q&A"
      categoryId="DIC_kwDOIUASls4CSNOx"
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

// <script src="https://giscus.app/client.js"
//         data-repo="jonychoi/padmasambhava"
//         data-repo-id="R_kgDOIUASlg"
//         data-category="Q&A"
//         data-category-id="DIC_kwDOIUASls4CSNOx"
//         data-mapping="pathname"
//         data-strict="0"
//         data-reactions-enabled="1"
//         data-emit-metadata="0"
//         data-input-position="top"
//         data-theme="dark"
//         data-lang="en"
//         crossorigin="anonymous"
//         async>
// </script>