export function Image(props) {
    return (
      <img className="imgProfile"
        src={props.user.imgUrl}
        alt={props.user.name}
      />
    );
  }