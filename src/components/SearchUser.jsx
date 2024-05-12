const SearchUser = ({ search, handleSearch }) => {
  return (
    <div className="input-group my-3 w-50 m-auto">
      <span
        className="input-group-text bg-primary"
        id="inputGroup-sizing-default"
      >
        Search
      </span>
      <input
        type="search"
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
        onChange={handleSearch}
        value={search}
      />
    </div>
  );
};

export default SearchUser;
