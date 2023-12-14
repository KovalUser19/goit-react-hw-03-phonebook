export const Filter = (props)=>{
  return (
    <div>
      <label>Find contacts by name
      <input
        type="text"
          value={props.filter}
          onChange={props.filterWord}
        ></input>
        </label>
    </div>
  )
}