import Giscus from '@giscus/react';
import {ThemeEvent} from '../../contexts/globalcontext';

export const Comment = ({head}) => {
  const {theme} = ThemeEvent();
  return (
    <Giscus
      id="comments"
      repo="jonychoi/padmasambhava"
      repoId="R_kgDOIUEUuQ"
      category={head.category}
      categoryId={head.categoryId}
      mapping="title"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={theme === "day" ? "light" : "dark"}
      lang="en"
      loading="lazy"
    />
  );
};

export default Comment;

{/* <script src="https://giscus.app/client.js"
        data-repo="jonychoi/padmasambhava"
        data-repo-id="R_kgDOIUEUuQ"
        data-category-id="DIC_kwDOIUEUuc4CSOpq"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="dark"
        data-lang="en"
        data-loading="lazy"
        crossorigin="anonymous"
        async>
</script> */}