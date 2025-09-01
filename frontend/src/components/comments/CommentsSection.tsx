import React from 'react'
import { 
    useGetCommentsByPublicationIdQuery,
    usePostCommentInPublicationMutation
} from '../../api/commentsApi'
import type { Comment } from '../../api/commentsApi';
import { FadeLoader } from 'react-spinners';
import { useSelector, } from 'react-redux';
import RatingDisplay from './RatingDisplay';
import RatingSelector from './RatingSelector';
import type { RootState } from '../../store/store';

interface CommentSectionProps {
    publicationId: string;
    publicationType: 'post' | 'article' | 'photo';
}

const CommentsSection: React.FC<CommentSectionProps> = ({publicationId, publicationType}) => {
const [newComment, setNewComment] = React.useState<Comment>({
    publicationId: publicationId,
    user: '',
    comment: '',
    hasRating: false,
    hasAttachment: false,
});

const user = useSelector((state: RootState) => state.user);
const theme = useSelector((state: RootState) => state.theme);


console.log(theme)

  const { data: comments = [{
    id: '1',
    publicationId: publicationId,
    user: 'John Doe',
    comment: 'This is a great publication!',
    hasRating: true,
    rating: 4,
    hasAttachment: false
  }], error, isLoading } =
    useGetCommentsByPublicationIdQuery(publicationId);

const [postComment, { isLoading: isPosting }] =
    usePostCommentInPublicationMutation();

const loadingOrErrorContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
}

const postCommentHandler = async () => {
    if (!newComment?.comment.trim()) return;
    try {
       await postComment({
        comment: newComment.comment,
        publicationId,
        user: user.name || 'Anonymous',
        hasRating: !!newComment?.rating,
        hasAttachment: !!newComment?.attachment
       }).unwrap();
    } catch (error) {
        console.error('Failed to post comment:', error);
    } 

}

if(isLoading || isPosting) return <div style={loadingOrErrorContainerStyle}><FadeLoader color="#36d7b7" /></div>
if(error && !comments) return <div style={loadingOrErrorContainerStyle}>Error loading comments</div>

  return (
    <div>
        <h2>Comments</h2>
        {comments.map((comment) => (
            <div key={comment.id} style={{
                background: theme.colors.background,
                color: theme.colors.text,
                borderRadius: theme.borderRadius,
                padding: '10px', 
                marginBottom: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                width: '100%'
                }}>
                <p><strong>{comment.user}</strong></p>
                <p>{comment.comment}</p>
                {comment.hasRating && <RatingDisplay rating={comment.rating} />}
                {comment.hasAttachment && <p>Attachment: {comment.attachment}</p>}
            </div>
        ))}
        {user.isLoggedIn ? (
            <div style={{marginTop: '20px'}}>
                <h3>Add a Comment</h3>
                <textarea
                    rows={4}
                    cols={50}
                    placeholder="Write your comment here..."
                    onChange={(e) => setNewComment({...newComment, comment: e.target.value} as Comment)}
                    style={{ 
                        width: '100%', 
                        padding: '10px', 
                        borderRadius: '5px', 
                        background: theme.colors.background, 
                        color: theme.colors.text,
                     }}
                />
                <br />
                <div
                style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}
                >
                <button onClick={() => 
                    setNewComment({...newComment, 
                                    hasRating: !newComment.hasRating} as Comment)}>
                    {newComment?.hasRating ? 'Cancel' : 'Rate this post'}
                </button>
                {
                    newComment?.hasRating && (
                        <RatingSelector setValue={(value) => setNewComment({...newComment, rating: value} as Comment)} />
                    )
                }
                </div>
                <br />
                <button onClick={postCommentHandler} disabled={!newComment?.comment || isPosting}>
                    {isPosting ? 'Posting...' : 'Post Comment'}
                </button>
            </div>
        ) : (
            <p>Please log in to post a comment.</p>
        )}
    </div>
  )
}

export default CommentsSection