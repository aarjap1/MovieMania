const Navigation = () => {
  return (
    <>
      <div className="nav">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          class="btn btn-outline-success my-2 my-sm-0"
          className="search"
          type="submit"
        >
          Search
        </button>
      </div>
    </>
  );
};

export default Navigation;
