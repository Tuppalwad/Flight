import { BookFlight } from "./Components/BookFlight";
import { FlightLogo } from "./Components/FlightLogo";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import ShowData from "./Components/ShowData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  /* const client = new ApolloClient({
 cache: new InMemoryCache(),
 uri: "https://graphql-weather-api.herokuapp.com/",
  })*/
  const client = new ApolloClient({
    uri: "http://localhost:3000/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<BookFlight />} />
            <Route path="/flight" element={<ShowData></ShowData>} />
          </Routes>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
