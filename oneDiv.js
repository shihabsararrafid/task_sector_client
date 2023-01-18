export default function LikeButton() {
  const [liked, setLiked] = React.useState(false);

  if (liked) {
    return "You liked this!";
  }

  return (
    <button id="btn" class="text-3xl font-bold underline">
      Like
    </button>
  );
}

const rootNode1 = document.getElementById("div-root");
const root1 = ReactDOM.createRoot(rootNode1);
root1.render(React.createElement(LikeButton));
