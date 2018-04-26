
export const Tile = ({ value, onClick }) => {
    // const borderWidth = `
    //   ${index < 3 ? '0' : '1px'}
    //   ${index % 3 === 2 ? '0' : '1px'}
    //   ${index > 5 ? '0' : '1px'}
    //   ${index % 3 === 0 ? '0' : '1px'};
    // `
    return (
      <div className='tile' onClick={onClick}  >
        <style jsx>{`
          .tile {
            height: 36.333333%;
            width: 14%;
            flex: 0 0 0 0 0 0 33.333333%;
            box-sizing: border-box;
            border: solid purple;
            font-size: 64pt;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}</style>
        
        {value}
      </div>
    )
  }