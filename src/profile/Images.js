 function Images(props) {
    return (
      <img style= {{margin: 50, height: 300, width:550 }} 
        src={props.children}
        alt={props.children} 
      />
    );
  }
  export default Images