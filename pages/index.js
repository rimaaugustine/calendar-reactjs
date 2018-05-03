import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Calendar from "../components/calender";
import fetch from 'isomorphic-unfetch'

const Index = () => {
  return (
    <MuiThemeProvider>
      <Calendar />
    </MuiThemeProvider>
  );
};


Index.getInitialProps = async function() {
  const res = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Berlin&units=metric&appid=b965d69d9d1e8ee808e1b3a50ca354e5')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }}

export default Index;
