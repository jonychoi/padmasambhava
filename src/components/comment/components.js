import { DiscussionEmbed, CommentCount, CommentEmbed, Recommendations as Recomms } from 'disqus-react';

export const Discussion = ({article, element}) => {
    return (
        <DiscussionEmbed
            ref={element}
            shortname='padmasambhava-1'
            config={
                {
                    url: article.url,
                    identifier: article.id,
                    title: article.title,
                    language: 'ENG' //e.g. for Traditional Chinese (Taiwan)	
                }
            }/>
    )
};

export const CommentCounts = ({article}) => {
    return (
        <CommentCount
            shortname='padmasambhava-1'
            config={
                {
                    url: article.url,
                    identifier: article.id,
                    title: article.title,
                }
            }
        >
            {/* Placeholder Text */} 
            Comments
        </CommentCount>
    )
}

export const Comment = ({article}) => {
    return (
        <CommentEmbed
            commentId={article.featuredCommentId}
            showMedia={true}
            showParentComment={true}
            width={420}
            height={320}
        />
    )
}

export const DiscussionSSO = ({article}) => {
    return (
        <DiscussionEmbed
            shortname='padmasambhava-1'
            config={
                {
                    url: article.url,
                    identifier: article.id,
                    title: article.title,
                    language: 'zh_TW', //e.g. for Traditional Chinese (Taiwan)
                    sso: {
                        name: 'SampleNews',
                        button: 'http://example.com/images/samplenews.gif',
                        icon: 'http://example.com/favicon.png',
                        url: 'http://example.com/login/',
                        logout: 'http://example.com/logout/',
                        profile_url: 'http://example.com/profileUrlTemplate/{username}',
                        width: '800',
                        height: '400',
                    }
                }
            }
        />
    )
}

export const Recommendation = ({article}) => {
    return (
        <Recomms
            shortname='padmasambhava-1'
            config={
                {
                    url: article.url,
                    identifier: article.id,
                    title: article.title,
                }
            }
        />
    )
}