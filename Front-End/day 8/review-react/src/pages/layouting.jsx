let Layouting = () => {
    return(
        <div >
        <div style={{backgroundColor: "gray", display:'flex', justifyContent: 'space-between', paddingLeft: '30px', paddingRight: '30px'}}>
          <div>
          <span>bendera</span>
          <span>indonesia</span>
          </div>
          <div>
          <span>linkedin</span>
          <span>twitter</span>
          <span>facebook</span>
          <span>instagram</span>
          </div>
        </div>
        <div style={{backgroundColor: "gray", display:'flex', justifyContent: 'space-between', paddingLeft: '30px', paddingRight: '30px'}}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <span>Logo</span>
          <span>digital school</span>
          </div>
          <div>
          <span>menu-1</span>
          <span>menu-2</span>
          <span>menu-3</span>
          <span>menu-4</span>
          <span>
            <button>Login</button>
          </span>
          <spam>
            <button>Daftar</button>
          </spam>
          </div>
        </div>
      </div>
    )
}

export default Layouting;