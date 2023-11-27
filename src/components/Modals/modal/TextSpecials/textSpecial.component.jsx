
export function TextSpecial({ value, name }) {
    return (
      <div className="row g-3" key={name}>
        <div style={{display:"flex" ,flexDirection:'row', justifyContent:'start', alignItems:'center' }}>
          <label className="form-label">{name}</label>
          <p >{value}</p>
        </div>
      </div>
      
    );
  }