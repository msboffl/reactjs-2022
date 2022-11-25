const Book = (props) => {
  const { img, title, author, price } = props.book;
  const addToCartHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('Item is Added to Cart');
  };
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt='Book' width={200} />
      <h4>{title}</h4>
      {props.children}
      <p>{author}</p>
      <h4>${price}</h4>
      <button type='button' onClick={addToCartHandler}>
        Add To Cart
      </button>
    </article>
  );
};

export default Book;
