
export const Tile = ({ value, index, onClick, eventNames, monthPlusOne, year}) => {
   const height = `  ${index < 8 ? '10%' : '15.333333%'}`
   
   const backgroundColor = () => {
     if( eventNames) {
      return eventNames.filter(event => {
        return (
          event.date ===
          value +
            "/" +
            monthPlusOne +
            "/" +
            year
        );
      }).map((x)=> {console.log(x); return x}  ).length ? '#80deea' : 'white' 
     }
     return `${index < 8 ? '#e8afe8': 'white'}`
   }  
   
  
    return (
      <div className='tile' onClick={onClick} style={{height, backgroundColor: backgroundColor() }} >
        <style jsx>{`
          .tile {
            width: 14%;
            flex: 0 0 0 0 0 0 33.333333%;
            box-sizing: border-box;
            border: solid purple;
            font-size: 3vh;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
            border-width: 2px;
          }
        `}</style>
        {value}
  
      </div>
    )
  }

 