import { useAppDispatch, useAppSelector } from '../hooks';

import { likeRecipe, unlikeRecipe } from '../features/user/userSlice';

const SampleRoute1 = () => {
  const userLikes = useAppSelector((state) => state.user.likedRecipeIds);
  const dispatch = useAppDispatch();

  const handleLike = () => {
    dispatch(likeRecipe(userLikes.length + 1));
  };

  const handleUnlike = () => {
    dispatch(unlikeRecipe(userLikes.length));
  };

  return (
    <div>
      <h2>Sample Route 1</h2>
      <p>{`User likes: ${
        userLikes.length === 0 ? 'No likes' : userLikes.toString()
      }`}</p>
      <button onClick={handleLike}>Like Me!</button>
      <button onClick={handleUnlike}>Unlike Me!</button>
    </div>
  );
};

export default SampleRoute1;
