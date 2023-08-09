const Quiz = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.data("Submited form");
  };
  return (
    <form>
      <input type="radio" name="city"></input>
      <label>Bangalore</label>
      <input type="radio" name="city"></input>
      <label>Delhi</label>
      <input type="radio" name="city"></input>
      <label>Hyderabad</label>
      <input type="radio" name="city"></input>
      <label>Pune</label>
      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};
export default Quiz;
